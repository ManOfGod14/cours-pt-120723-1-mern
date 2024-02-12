/**
 * Ex06
 */
// import du module filesystem (fs)
const fs = require("fs");

// renommer
fs.unlink("fichier_sup.txt", (err) => {
  if (err) {
    console.error("Erreur lors de la suppression du fichier :", err);
    return;
  }
  console.log("Fichier supprimé avec succès");
});
