const express = require("express");
const app = express();

// Pour analyser les corps de requête JSON, il faut utiliser
app.use(express.json());

/**
 * { id: 1, name: "John", email: "john@test.com" }
 */
let users = [];

// Route pour récupérer la liste des utilisateurs
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Route pour créer/ajouter un utilisateur
app.post("/api/users/add", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: "Utilisateur ajouté avec succès", data: newUser });
});

// Route pour récupérer un utilisateur par son Id
app.get("/api/users/find/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === parseInt(userId));
  if (user) {
    res.json({ message: "Utilisateur récupéré avec succès", data: user });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// Route pour mettre à jour les informations un utilisateur
app.put("/api/users/update/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  const index = users.findIndex((user) => user.id === parseInt(userId));
  if (index === -1) {
    res.status(404).json({ error: "User not found" });
  } else {
    users[index].name = name;
    users[index].email = email;

    res.json({
      message: "Utilisateur modifié avec succès",
      data: users[index],
    });
  }
});

// Route pour supprimer un utilisateur
app.delete("/api/users/delete/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === parseInt(userId));
  if (user) {
    users = users.filter((user) => user.id !== parseInt(userId));
    res.json({
      message: "Utilisateur suprimé avec succès",
      data: users,
    });
  } else {
    res.status(404).json({ error: "User not found" });
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
