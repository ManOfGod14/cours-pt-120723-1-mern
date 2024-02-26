/**
 * Ex03
 */
const http = require("http");

const server = http.createServer((req, res) => {
  const data = {
    firstName: "Maliki",
    lastName: "TCHEROU",
    age: 30,
    city: "Casa",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
});

// port d'écoute
const port = 3000;
server.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
