// importation de express
const express = require("express");
const app = express();

// création d'un route avec la méthode get
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// port d'écoute du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
