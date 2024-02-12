/**
 * Ex08
 */
// import du module filesystem (fs)
const fs = require("fs");

const source = "hello.txt";
const dest = "destination.txt";

// copie du contenu d'un fichier
fs.copyFile(source, dest, (err) => {
  if (err) {
    console.error("Erreur lors de la copie du contenu du fichier : ", err);
    return;
  }
  console.log("Fichier copié avec succès");
});
