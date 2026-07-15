"""Local board server. Standard library only — no pip, runs on Windows and macOS.

Serves the board UI and reads/writes applications.json and habits.json in place,
so anything you click is a git-tracked change you can commit.

Binds to 127.0.0.1 only. This data should never be reachable from the network.
"""
from __future__ import annotations

import json
import os
import tempfile
import webbrowser
from datetime import date
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

import render

BOARD_DIR = Path(__file__).resolve().parent
ROOT = BOARD_DIR.parent
APPLICATIONS = ROOT / "applications.json"
HABITS = ROOT / "habits.json"

HOST = "127.0.0.1"
PORT = int(os.environ.get("BOARD_PORT", "4173"))

CONTENT_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
}


def read_json(path: Path, fallback: dict) -> dict:
    if not path.exists():
        return fallback
    with path.open(encoding="utf-8") as f:
        return json.load(f)


def write_json(path: Path, data: dict) -> None:
    # Write to a temp file in the same directory, then replace. A crash mid-write
    # must not leave a truncated tracker behind.
    fd, tmp = tempfile.mkstemp(dir=str(path.parent), suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8", newline="\n") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            f.write("\n")
        os.replace(tmp, path)
    except BaseException:
        Path(tmp).unlink(missing_ok=True)
        raise


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):  # quieter than the default access log
        pass

    def _send(self, code: int, body: bytes, ctype: str) -> None:
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _json(self, code: int, payload: dict) -> None:
        self._send(code, json.dumps(payload).encode("utf-8"), "application/json")

    def do_GET(self) -> None:
        path = urlparse(self.path).path
        if path == "/api/state":
            self._json(200, {
                "applications": read_json(APPLICATIONS, {"applications": []})["applications"],
                "habits": read_json(HABITS, {"habits": [], "log": {}}),
                "today": date.today().isoformat(),
            })
            return

        rel = "index.html" if path == "/" else path.lstrip("/")
        target = (BOARD_DIR / rel).resolve()
        # Path traversal guard: a crafted URL must not escape board/.
        if not str(target).startswith(str(BOARD_DIR)) or not target.is_file():
            self._send(404, b"not found", "text/plain; charset=utf-8")
            return
        ctype = CONTENT_TYPES.get(target.suffix, "application/octet-stream")
        self._send(200, target.read_bytes(), ctype)

    def do_PUT(self) -> None:
        path = urlparse(self.path).path
        length = int(self.headers.get("Content-Length", "0"))
        try:
            payload = json.loads(self.rfile.read(length) or b"{}")
        except json.JSONDecodeError as e:
            self._json(400, {"error": f"bad json: {e}"})
            return

        if path == "/api/applications":
            data = {"applications": payload.get("applications", [])}
            write_json(APPLICATIONS, data)
            render.main()  # keep the markdown view in step with the data
            self._json(200, {"ok": True, "count": len(data["applications"])})
        elif path == "/api/habits":
            write_json(HABITS, {
                "habits": payload.get("habits", []),
                "log": payload.get("log", {}),
            })
            self._json(200, {"ok": True})
        else:
            self._json(404, {"error": "no such endpoint"})


def main() -> None:
    url = f"http://{HOST}:{PORT}/"
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"board  {url}")
    print(f"data   {APPLICATIONS.name}, {HABITS.name}  (edits save straight to disk)")
    print("stop   ctrl-c")
    try:
        webbrowser.open(url)
    except Exception:
        pass  # headless or no browser configured; the URL above still works
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped")


if __name__ == "__main__":
    main()
