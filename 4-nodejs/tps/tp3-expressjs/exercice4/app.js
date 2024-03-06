const express = require("express");
const app = express();

// Pour analyser les corps de requête JSON, il faut utiliser
app.use(express.json());

// data
const users = [
  {
    id: 1,
    name: "John",
    username: "john",
    password: "j123",
    email: "john@test.com",
  },
  {
    id: 2,
    name: "Doe",
    username: "doe",
    password: "d123",
    email: "doe@test.com",
  },
  {
    id: 3,
    name: "Maliki",
    username: "maliki",
    password: "123456",
    email: "maliki@test.com",
  },
];

// exemple simple
app.post("/login", (req, res) => {
  const user = {
    username: "maliki",
    password: "123456",
  };

  const { username, password } = req.body;

  if (user.username === username && user.password === password) {
    res.send("Login successful");
  } else {
    res.status(400).send("Missing username or password");
  }
});

// exemple complexe
app.post("/login2", (req, res) => {
  const { username, password } = req.body;

  const userData = users.find(
    (user) => user.username === username && user.password === password
  );
  if (userData) {
    res.json({ message: "Login successful", data: userData });
  } else {
    res.status(400).json({ error: "Missing username or password" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
