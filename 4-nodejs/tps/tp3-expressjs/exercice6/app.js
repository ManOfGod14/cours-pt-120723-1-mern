const express = require("express");
const app = express();

// middleware d'authentification
const isAuthenticated = (req, res, next) => {
  // constante de supposition si l'utilisateur est connecté ou pas
  const isLoggedIn = true;
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

// middleware d'admin
const isAdmin = (req, res, next) => {
  // constante de supposition si c'est un admin ou pas
  const isAdminLogin = true;
  if (isAdminLogin) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
};

app.get("/admin", isAuthenticated, isAdmin, (req, res) => {
  res.send(`Bienvenu sur votre tableau de bord (admin)`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
