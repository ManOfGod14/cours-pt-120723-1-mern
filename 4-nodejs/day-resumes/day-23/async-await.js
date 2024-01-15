/**
 * Async/Await en Node.js
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
    }, 5000); // en miliseconde
  });
}

// la fonction pour convertir un string en Lettre Majuscule
function processData(data) {
  return data.toUpperCase();
}

// consommation de la promesse
async function fetchDataAsync(shouldResolve) {
  try {
    // le resultat afficher si la promesse est resolue
    const result = await fetchData(shouldResolve);
    console.log("Resultat avant formatage : ", result);

    const formatString = processData(result);
    console.log("Resultat après formatage : ", formatString);
  } catch (err) {
    // le resultat afficher si la promesse est rejetée
    console.error("Error : ", err.message);
  }
}

// tester la promesse
fetchDataAsync(true);
// fetchDataAsync(false);

console.log("Après éxécution test de la promsesse");
