const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

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

/**
 * les routes
 */
app.get("/profile", (req, res) => {
  const user = {
    username: "Admin",
    email: "admin@demo.com",
    phone: "07070707",
  };
  res.render("pages/profile", { title: "Mon comtpe", user: user });
});

// port d'écoute
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
