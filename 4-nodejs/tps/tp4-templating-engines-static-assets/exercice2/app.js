const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// Utilisation du middleware express-ejs-layouts
app.use(expressLayouts);

// Définir le chemin vers le répertoire de vues
// app.set("views", "./views");
app.set("views", path.join(__dirname, "views"));

// Définir le chemin vers le répertoire layouts
app.set("layout", path.join(__dirname, "views/layouts/main"));

// configuration du moteur de template EJS (Embedded JavaScript)
app.set("view engine", "ejs");

// base de données des produits
const products = ["Produit 1", "Produit 2", "Produit 3", "Produit 4"];
/**
 * routes
 */
// route de la page test
app.get("/test", (req, res) => {
  res.render("test", { layout: false });
});

// route de la page d'accueil
app.get("/", (req, res) => {
  res.render("pages/home", { title: "Accueil" });
});

// route de la page about
app.get("/about", (req, res) => {
  res.render("pages/about", { title: "Qui sommes-nous ?" });
});

// route de la page liste de produits
app.get("/products", (req, res) => {
  res.render("pages/products", { title: "Liste de produits", products: products });
});

// port d'écoute
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
