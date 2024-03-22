const express = require("express");
const path = require("path");

const app = express();

/**
 * Utilisons express.json() pour analyser le corps de requete JSON
 * Données envoyées au format JSON
 */
app.use(express.json());

/**
 * Utilisons express.urlencoded() pour analyser le corps de requete avec des données encodées URL
 * Données venant d'un formulaire
 */
app.use(express.urlencoded({ extended: true }));

// configuration du moteur de template pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/**
 * les routes
 */
app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Accueil" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "Qui sommes-nous ?" });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contactez-nous" });
});

app.post("/submit", (req, res) => {
  const dataForm = req.body;
  console.log(dataForm);
  res.json({ message: "Données envoyées avec succès !", data: dataForm });
});

// port d'écoute
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
