const express = require("express");
const app = express();

// data
const users = [
  { id: 1, name: "John", email: "john@test.com" },
  { id: 2, name: "Doe", email: "doe@test.com" },
  { id: 3, name: "Maliki", email: "maliki@test.com" },
];

app.get("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  //   const userData = users.filter((user) => user.id === parseInt(userId));
  const userData = users.find((user) => user.id === parseInt(userId));
  //   console.log(users, userId, userData);
  if (userData) {
    res.json(userData);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
