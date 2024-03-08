const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`Method : ${req.method}`);
  console.log(`URL : ${req.url}`);
  next();
});

const port = 3000;
app.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
