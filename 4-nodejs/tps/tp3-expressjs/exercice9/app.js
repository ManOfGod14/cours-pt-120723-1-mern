const express = require("express");
const app = express();

// Pour analyser les corps de requête JSON, il faut utiliser
app.use(express.json());

/**
 * { id: 1, designation: "Riz", prix: 15, marque: "Standard" }
 */
let products = [];

// Route pour récupérer la liste des produits
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Route pour créer/ajouter un produit
app.post("/api/products/add", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ message: "Produit ajouté avec succès", data: newProduct });
});

// Route pour récupérer un utilisateur par son Id
app.get("/api/products/find/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  if (product) {
    res.json({ message: "Produit récupéré avec succès", data: product });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// Route pour mettre à jour les informations un utilisateur
app.put("/api/products/update/:id", (req, res) => {
  const productId = req.params.id;
  const { name, email } = req.body;
  const index = products.findIndex(
    (product) => product.id === parseInt(productId)
  );
  if (index === -1) {
    res.status(404).json({ error: "Product not found" });
  } else {
    products[index].name = name;
    products[index].email = email;

    res.json({
      message: "Produit modifié avec succès",
      data: products[index],
    });
  }
});

// Route pour supprimer un utilisateur
app.delete("/api/products/delete/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  if (product) {
    products = products.filter((product) => product.id !== parseInt(productId));
    res.json({
      message: "Produit suprimé avec succès",
      data: products,
    });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// not found url
app.use((req, res, next) => {
  res.status(404).json({ error: "Not found url" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
