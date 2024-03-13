const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

/**
 * Configuration du moteur de template Handlebars :
 * la méthode app.engine() prend deux arguments :
 * 1er argument est une chaine de caractère qui représente le nom du moteur de template (dans note cas : handlebars)
 * 2nd argument est le moteur de template lui-même
 */
app.engine(
  "handlebars",
  exphbs({
    extname: ".handlebars",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

/**
 * Configuration du moteur de vue par défaut :
 * la méthode app.set() permet de définir une valeur de configuration pour l'application
 * Dans notre cas, la clé "view engine" indique à express.js quel moteur de template utiliser pour le rendu des vues
 * En définissant la valeur sur "handlebars", express.js saura qu'il doit utiliser Handlebars pour le rendu des fichiers de vues
 */
// app.set("views", path.join(__dirname, "custom_views"));
app.set("view engine", "handlebars");

app.get("/", (req, res, next) => {
  res.render("index", { layout: false, title: "Ma page d'accueil", message: "Ma page d'accueil avec le moteur de template Handlebars" });
});

app.get("/about", (req, res, next) => {
  res.render("about", { title: "Qui sommes-nous ?", message: "Ma page à propos avec le moteur de template Handlebars" });
});

app.get("/contact", (req, res, next) => {
  res.render("contact", { title: "Contactez-nous", message: "Ma page contact avec le moteur de template Handlebars" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
