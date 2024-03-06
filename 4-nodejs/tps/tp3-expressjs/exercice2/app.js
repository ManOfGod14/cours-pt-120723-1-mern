const express = require("express");
const app = express();

app.get("/hello/:name", (req, res) => {
  //   console.log(req);
  //   console.log(req.params);
  res.send(`Hello ${req.params.name}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
