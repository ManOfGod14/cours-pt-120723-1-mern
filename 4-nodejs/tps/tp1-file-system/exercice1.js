/**
 * ex0 1
 */
// import du module filesystem (fs)
const fs = require("fs");

// chemin du ficheier à créer
const filePath = "hello.txt";
const content = "Hello, World!";

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error("Eerreur lors de l'écriture dans la fichier : ", err);
    return;
  }
  console.log("Fichier crée avec succès !");
});
