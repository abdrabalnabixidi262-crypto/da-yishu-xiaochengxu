const fs = require("fs");
const http = require("http");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".ttf", "font/ttf"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "content-type": type,
    "cache-control": "no-store",
  });
  res.end(body);
}

http
  .createServer((req, res) => {
    const url = new URL(req.url || "/", "http://localhost");
    let decodedPath;

    try {
      decodedPath = decodeURIComponent(url.pathname);
    } catch {
      send(res, 400, "Bad request");
      return;
    }

    const normalized = path.normalize(decodedPath).replace(/^([/\\])+/, "");
    let filePath = path.join(root, normalized || "index.html");

    if (!filePath.startsWith(root)) {
      send(res, 403, "Forbidden");
      return;
    }

    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) filePath = path.join(filePath, "index.html");
      const ext = path.extname(filePath).toLowerCase();
      const stream = fs.createReadStream(filePath);

      res.writeHead(200, {
        "content-type": mimeTypes.get(ext) || "application/octet-stream",
        "cache-control": "no-store",
      });
      stream.pipe(res);
      stream.on("error", () => send(res, 500, "Server error"));
    } catch {
      send(res, 404, "Not found");
    }
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`大艺术小程序 is live at http://127.0.0.1:${port}`);
  });
