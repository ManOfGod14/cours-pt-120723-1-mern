/**
 * Ex05
 */
const http = require("http");

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Success\n");
    res.end();
  } catch (err) {
    console.log("Internal Server Error", err);
    res.writeHead(500, { "C, errontent-Type": "text/plain" });
    res.write("Internal Server Error\n");
    res.end();
  }
});

// port d'écoute
const port = 3000;
server.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
