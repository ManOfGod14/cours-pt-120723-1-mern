/**
 * Ex09
 */
// import du module filesystem (fs)
const fs = require("fs");

const source = "hello.txt";

// copie du contenu d'un fichier
// existsSync
fs.access(source, fs.constants.F_OK, (err) => {
  //   console.log(fs.constants);
  if (err) {
    console.error("Le fichier n'existe : ", err);
    return;
  }
  console.log("Le fichier existe.");
});
