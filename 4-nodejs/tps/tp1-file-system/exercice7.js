/**
 * Ex07
 */
// import du module filesystem (fs)
const fs = require("fs");

// chemin du répertoire à lire
const folderPath = "./"; // "."

// lecture d'un répertoire
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Erreur lors de la lecture du répertoire  :", err);
    return;
  }
  console.log("Fichiers et répertoires récupérés avec succès :", files);
});
