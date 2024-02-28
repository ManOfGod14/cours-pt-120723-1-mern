/**
 * Ex08
 */
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/send") {
    // faire de le traitement de récupération
    let body = "";

    /**
     * ici la méthode "on" avec la clé "data" est un évènement qui est déclanché lorsque
     * des données sont disponible en lecture
     */
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    /**
     * ici la méthode "on" avec la clé "end" est un évènement qui est déclanché  lorsque
     * la lecture des données est terminée
     */
    req.on("end", () => {
      // visualisons le contenu de la variable body
      console.log("Body content : ", body);
      /**
       * il faut transformer le contenu de body sous forme de clé valeur
       * {
       *    name: "Maliki",
       *    email="yemenodivino%40gmail.com"
       * }
       */

      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({}));
    });
  } else {
    // mettre à disposition du demandeur (client) le formulaire
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./index.html"));
  }
});

// port d'écoute
const port = 3000;
server.listen(port, () => {
  console.log(`Mon serveur tourne sur ce lien http://localhost:${port}/`);
});
