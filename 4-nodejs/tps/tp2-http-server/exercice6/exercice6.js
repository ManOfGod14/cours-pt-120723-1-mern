/**
 * Ex06
 */
const http = require("http");
const mime = require("mime");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const filePath = `.${req.url}`;
  const contentTpe = mime.getType(filePath) || "text/plain";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(400, { "Content-Type": "text/plan" });
      res.write("Not found !");
    } else {
      res.writeHead(200, { "Content-Type": contentTpe });
      res.write(content);
    }
    res.end();
  });
});

// port d'écoute
const port = 3000;
server.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
