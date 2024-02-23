/**
 * Ex02
 */
const http = require("http");

// création d'un serveur
const server = http.createServer((req, res) => {
  //   console.log("Data resquest : ", req);
  console.log("Resquest url :", req.url);
  console.log("Resquest method :", req.method);
  console.log("Resquest headers :", req.headers);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Demande envoyée! \n");
});

// port d'écoute
const port = 3000;
server.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
