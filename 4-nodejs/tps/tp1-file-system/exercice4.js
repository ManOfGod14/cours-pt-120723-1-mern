/**
 * Ex04
 */
// import du module filesystem (fs)
const fs = require("fs");

fs.readFile("exercice1.js", "utf8", (error, data) => {
  if (error) {
    console.error("Erreur survenu lors de la lecture du fichier :", error);
    return;
  }
  console.log("Contenu du fichier :\n", data);
});
