/**
 * Ex02
 */
// import du module filesystem (fs)
const fs = require("fs");

// chemin du fichier à lire
const filePath = "hello.txt";

fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    console.error("Erreur survenu lors de la lecture du fichier :", error);
    return;
  }
  console.log("Contenu du fichier :\n", data);
});
