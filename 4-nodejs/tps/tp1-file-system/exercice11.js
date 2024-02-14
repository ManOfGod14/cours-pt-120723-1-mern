/**
 * Ex11
 * ajout de contenu à la fin d'un fichier
 */
// import du module filesystem (fs)
const fs = require("fs");

const source = "journal.txt";
const content = "\nNouvelle entrée dans le journal.";

fs.appendFile(source, content, (err) => {
  //   console.log(fs.constants);
  if (err) {
    console.error("Erreur de l'écriture dans le fichier : ", err);
    return;
  }
  console.log("Contenu ajouté avec succès");
});
