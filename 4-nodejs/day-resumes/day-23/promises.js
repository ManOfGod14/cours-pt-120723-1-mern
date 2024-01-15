/**
 * Utilisation des promesses avec Node.js
 */
function fetchData(shouldResolve = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Sample data";
      if (shouldResolve) {
        // lorsque la promesse sera resolue
        resolve(data);
      } else {
        // lorsque la promesse sera rejetée
        reject(new Error("Failed to fetch data"));
      }
    }, 2000); // en miliseconde
  });
}

// la fonction pour convertir un string en Lettre Majuscule
function processData(data) {
  return data.toUpperCase();
}

// executer la promesse
fetchData()
  .then((donnee) => {
    // le traiment
    return processData(donnee);
  })
  .then((donnee) => {
    // le resultat afficher si  la promesse est resolue
    console.log("La chaine de caractère en Majuscule :", donnee);
    return donnee;
  })
  .catch((err) => {
    console.error("Error : ", err.message);
  });

// tester ma promesse
// fetchData();
fetchData(false);
