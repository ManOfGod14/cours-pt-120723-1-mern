/**
 * Ex07
 */
const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log("Resquest url :", req.url);
  //   res.write("Resquest url :" + req.url);
  //   res.end();

  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plan" });
    res.write("Hello guy !");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plan" });
    res.write("About us !");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plan" });
    res.write("Contact us !");
  } else if (req.url === "/json-data") {
    const data = { firstName: "John", lastName: "Doe" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
  } else {
    res.writeHead(404, { "Content-Type": "text/plan" });
    res.write("Not found");
  }
  res.end();
});

// port d'écoute
const port = 3000;
server.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
