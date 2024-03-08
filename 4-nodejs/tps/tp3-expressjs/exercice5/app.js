const express = require("express");
const app = express();

// middleware d'authentification
const isAuthenticated = (req, res, next) => {
  // constante de supposition si l'utilisateur est connecté ou pas
  const isLoggedIn = false;
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

app.get("/profile", isAuthenticated, (req, res) => {
  res.send(`Bienvenu sur votre tableau de bord`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
