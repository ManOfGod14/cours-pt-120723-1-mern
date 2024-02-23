/**
 * Ex01
 */
// importage du module http permettant de gérer les serveur http en node.js
const http = require("http");

// création d'un serveur
const server = http.createServer((req, res) => {
  // je veux retourner un format text et le status code 200
  res.writeHead(200, { "Content-Type": "text/plain" });

  // je retourner ce contenu
  res.write("Hello, world !");

  // j'ai  terminer d'écrire
  res.end();

  //   res.end("Hello, world !");
});

// port d'écoute
const port = 3000;
server.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
