const fetch = require("node-fetch");
const http = require("http");
const { URL } = require("url");

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
  { name: "Blabla", lat: null, lng: null },
];

// récupération des données météo de la ville correspondante
async function getTemperature(city) {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  if (!data || !data.current_weather || !data.current_weather_units) {
    throw new Error(
      "Impossible de récupérer les informations météo de la ville !"
    );
  }
  //   return data;
  return [
    data.current_weather.temperature,
    data.current_weather_units.temperature,
  ];
}

const server = http.createServer(async (req, res) => {
  //   console.log("Method : ", req.method);
  //   console.log("URL : ", req.url);
  //   console.log("URL : ", req.headers);

  const url = new URL(req.url, `http://${req.headers.host}`);
  //   console.log("URL Object :", url);
  //   console.log("Pathname :", url.pathname);
  //   console.log("City name :", url.searchParams.get("city"));

  if (req.method === "GET" && url.pathname === "/weather") {
    try {
      // récupération du nom de ville dans le paramètre de l'url
      const cityName = url.searchParams.get("city");

      // à parti du nom de ville, récupérer l'objet de la ville dans la liste
      const selectedCity = cities.find((city) => city.name === cityName);
      if (!selectedCity) {
        throw new Error(
          `Ville [${cityName}] non trouvé dans la liste des villes !`
        );
      }

      // récupération des infos météo de la ville
      const cityWeaterData = await getTemperature(selectedCity);

      // répondre au client
      res.writeHead(200, { "Content-Type": "application/json" });
      const result = {
        temperature: cityWeaterData[0],
        unity: cityWeaterData[1],
      };
      res.write(JSON.stringify(result));
      res.end();
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      const result = { message: error.message };
      res.write(JSON.stringify(result));
      res.end();
    }
  } else {
    res.writeHead(400, { "Content-Type": "application/json" });
    const result = {
      message: "URL non trouvé (Bad request or Not fund)",
    };
    res.write(JSON.stringify(result));
    res.end();
  }
});

// port d'écoute
const port = 3000;
server.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
