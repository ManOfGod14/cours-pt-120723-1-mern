// importer le package node-fetch pour utiliser l'api fetch
const fetch = require("node-fetch");

// importer le module de système de fichier avec les promesses
// const fs = require("fs/promises");
const fs = require("fs").promises;

const cities = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { name: "Sydney", lat: -33.8651, lng: 151.2099 },
  { name: "Rome", lat: 41.9028, lng: 12.4964 },
  { name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Rabat", lat: 34.0209, lng: -6.8416 },
];

// 1) fonction pour lire le nom de la ville dans le fichier input.txt
async function readCityFromFile() {
  try {
    const cityName = await fs.readFile("input.txt", "utf-8");
    return cityName.trim(); // supprime les espaces et les sauts de ligne
  } catch (error) {
    throw new Error(
      `Erreur lors de lecture du fichier input.txt : ${error.message}`
    );
  }
}

// 2) fonction de récuperation des données météo
async function getTemperature(city) {
  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.current_weather.temperature;
  } catch (error) {
    throw new Error(
      `Erreur lors de la récuperation des données météorollogiques : ${error.message}`
    );
  }
}

// 3) fonction pour supprimer un fichier
async function deleteExistingFile(fileName) {
  try {
    await fs.unlink(fileName);
    console.log(`Fichier ${fileName} a été supprimé avec succès !`);
  } catch (error) {
    // Ignorer l'erreur si le fichier n'existe pas
    if (error.code !== "ENOENT") {
      throw new Error(
        `Erreur lors de la suppression du fichier ${fileName} : ${error.message}`
      );
    }
  }
}

// 4) Ecriture du resultat dans un fichier
async function writeTemperatureToFile(cityName, temperature) {
  try {
    const filePath = cityName + ".txt";
    const tempAndUnity = temperature + " °C";
    await fs.writeFile(filePath, tempAndUnity);
    console.log(`Résultat stocker dans le fichier ${filePath}`);
  } catch (error) {
    throw new Error(
      `Erreur lors de l'écriture dans le fichier ${cityName}.txt : ${error.message}`
    );
  }
}

// fonction principal
async function main() {
  try {
    // étape 1 : lire le nom de ville dans le fichier "input.txt"
    const cityName = await readCityFromFile();

    // étape 2 : trouver la ville
    const selectedCity = cities.find((city) => city.name === cityName);
    if (!selectedCity) {
      throw new Error(
        `Ville "${cityName}" non trouvé dans la liste des villes !`
      );
    }

    // étape 2' : récuperation des données météo
    const temperature = await getTemperature(selectedCity);

    // étape 3 : supprimer tout fichier existant pour la ville choisie
    await deleteExistingFile(`${cityName}.txt`);

    // étape 4 : écriture du resultat de la temperature dans un nouveau fichier
    await writeTemperatureToFile(cityName, temperature);
  } catch (error) {
    console.error(error.message);
  }
}

// exécution de la fonction main()
main();
