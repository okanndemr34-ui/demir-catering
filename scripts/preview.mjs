import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
export function preview(port = 3000) {
  const root = resolve("out");
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".woff2": "font/woff2",
    ".txt": "text/plain",
  };
  http
    .createServer(async (req, res) => {
      try {
        let path = resolve(
          root,
          "." +
            decodeURIComponent(new URL(req.url, "http://localhost").pathname),
        );
        if (path !== root && !path.startsWith(root + sep)) {
          res.writeHead(403).end();
          return;
        }
        if ((await stat(path)).isDirectory())
          path = resolve(path, "index.html");
        const data = await readFile(path);
        res
          .writeHead(200, {
            "Content-Type": types[extname(path)] || "application/octet-stream",
          })
          .end(data);
      } catch {
        res
          .writeHead(404, { "Content-Type": "text/html" })
          .end("Sayfa bulunamadı.");
      }
    })
    .listen(port, "0.0.0.0", () =>
      process.stdout.write(`Static preview: http://localhost:${port}\n`),
    );
}
if (process.argv[1]?.endsWith("preview.mjs"))
  preview(Number(process.env.PORT || 3000));
