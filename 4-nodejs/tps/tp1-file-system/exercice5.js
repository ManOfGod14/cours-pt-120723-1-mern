/**
 * Ex05
 */
// import du module filesystem (fs)
const fs = require("fs");

// renommer
fs.rename(
  "./nouveau_rep/ancien_nom.txt",
  "./nouveau_rep/nouveau_nom.txt",
  (err) => {
    if (err) {
      console.error("Erreur lors du renommage du fichier :", err);
      return;
    }
    console.log("Fichier renommé avec succès");
  }
);
