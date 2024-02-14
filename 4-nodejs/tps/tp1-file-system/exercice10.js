/**
 * Ex10
 * affichage des informations sur fichier
 */
// import du module filesystem (fs)
const fs = require("fs");

const source = "hello.txt";

fs.stat(source, (err, stats) => {
  //   console.log(fs.constants);
  if (err) {
    console.error("Erreur de récuperation des infos : ", err);
    return;
  }
  console.log("Infos du fichier : \n", stats);
});
