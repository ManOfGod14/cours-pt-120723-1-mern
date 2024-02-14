/**
 * Ex12
 */
// import du module filesystem (fs)
const fs = require("fs");
const path = require("path");

function listFiles(directory) {
  fs.readdir(directory, (err, contents) => {
    if (err) {
      console.log("Erreur lors de la lecture du répertoire  :", err);
      return;
    } else {
      // console.log(contents);

      // parcourir le contenu
      contents.forEach((content, index) => {
        // joindre le repertoire et le fichier ou repertoire récupéré
        const contentPath = path.join(directory, content);

        // récupérer les infos du fichier ou repertoire (cela va nous permettre de savoir si c'est un fichier ou dossier)
        fs.stat(contentPath, (err, stats) => {
          if (err) {
            console.error("Erreur de récuperation des infos : ", err);
            return;
          }

          // vérifions is c'est un fichier ou dossier
          if (stats.isDirectory()) {
            console.log(contentPath);

            // utilisation de la récursivité (une fonction qui s'appelle elle-meme)
            listFiles(contentPath);
          } else {
            console.log(contentPath);
          }
        });
      });
    }
  });
}

// tester la fonction
const folderPath = "./";
// const subFolderPath = "./nouveau_rep";
listFiles(folderPath);
