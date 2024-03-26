const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

/**
 * utilision express.json() pour analyser les corps de requets JSON
 * Données envoyées au format JSON
 */

app.use(express.json());

/**
 * utilisons express.urlencoded() pour analyser les corps de requete avec des données encodées URL
 * données venant d'un formulaire
 */
app.use(express.urlencoded({ extended: true }));

// configuration du moteur de template
app.engine(
  "handlebars",
  exphbs({
    extname: ".handlebars",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "handlebars");

/**
 * les routes
 */
app.get("/", (req, res) => {
  res.render("login", { title: "Formulaire de connexion" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // vérification des informations d'identification
  if (username === "admin" && password === "123456") {
    res.redirect("/dashboard");
  } else {
    res.render("login", { title: "Formulaire de connexion", errorMessage: "Nom d'utilisateur et/ou mot de passe incorrect !" });
  }
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "Mon compte" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
