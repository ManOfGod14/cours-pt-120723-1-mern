/**
 * Ex03
 */
// import du module filesystem (fs)
const fs = require("fs");

fs.mkdir("nouveau_rep", (err) => {
  if (err) {
    console.error("Erreur lors de la création du répertoire : ", err);
    return;
  }
  console.log("Répertoire créé avec succès !");
});
