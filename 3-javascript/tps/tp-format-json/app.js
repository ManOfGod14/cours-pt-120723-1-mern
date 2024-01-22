// exercice 1
let personne = {
  nom: "TCHEROU",
  prenom: "Maliki",
  age: 30,
  adresseExemple1: "31 Rue, tarik ibnou ziad, casablanca - Maroc",
  adresseExemple2: {
    rue: "31 Rue, tarik ibnou ziad",
    ville: "casablanca",
    pays: "Maroc",
  },
};
console.log(personne);
console.log(personne.nom);

// exercice 2
// méthode 1
// personne = {
//   nom: "TCHEROU",
//   prenom: "Maliki",
//   age: 30,
//   adresseExemple1: "31 Rue, tarik ibnou ziad, casablanca - Maroc",
//   adresseExemple2: {
//     rue: "31 Rue, tarik ibnou ziad",
//     ville: "casablanca",
//     pays: "Maroc",
//   },
//   dateNaissance: "1996-01-22",
// };
// console.log(personne);

// méthode 2
personne.dateNaissance = "1996-01-22";
console.log(personne);
console.log(personne.dateNaissance);

// exemple intermédiaire
// personne.nom = "TCH";
// console.log(personne);

// exercice 3
personne = {
  nom: "TCHEROU",
  prenom: "Maliki",
  age: 30,
  adresseExemple1: "31 Rue, tarik ibnou ziad, casablanca - Maroc",
  adresseExemple2: {
    rue: "31 Rue, tarik ibnou ziad",
    ville: "casablanca",
    pays: "Maroc",
  },
  dateNaissance: "1996-01-22",
  message: function () {
    return `Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans.`;
  },
};
// console.log(personne);
const valNom = personne.nom;
console.log(valNom);

const valPrenom = personne.prenom;
console.log(valPrenom);

const valAge = personne.age;
console.log(valAge);

const valAdresse = personne.adresseExemple1;
console.log(valAdresse);

const valDateNaissance = personne.dateNaissance;
console.log(valDateNaissance);

console.log(personne.message());

// exercice 4 (déstructuration de l'objet personne)
const { nom, prenom, age, dateNaissance } = personne;
console.log(nom);
console.log(prenom);
console.log(age);
console.log(dateNaissance);

// const info = personne;
// console.log(info.nom);

// exercice 5
const fruits = [
  { nom: "Pomme", couleur: "Rouge", prix: "1.50" },
  { nom: "Banne", couleur: "Jaune", prix: "2" },
  { nom: "Orange", couleur: "Orange", prix: "2.5" },
];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[1].nom);

// exercice 6
const taches = [
  { nom: "Faire les courses", dateCreation: "2024-01-21", statut: false },
  { nom: "Repondre aux messages", dateCreation: "2024-01-22", statut: true },
  { nom: "Faire du sport", dateCreation: "2024-01-22", statut: false },
];
console.log(taches);

// affichage sur une page web
const tacheId = document.getElementById("tacheId");
// const tacheId2 = document.querySelector("#tacheId");
// console.log(tacheId, tacheId2);
tacheId.innerHTML = JSON.stringify(taches);

// exercice 7
const phoneInfo = {
  nom: "Smartphone xyz",
  prix: 2300.99,
  fabricant: "HUWEI",
  specifications: {
    ecran: "6 pouces",
    memoire: "8 Go",
    camera: ["12 MP arrière", "8 MP avant"],
  },
};
console.log(phoneInfo);
const phoneInfoId = document.getElementById("phoneInfoId");
phoneInfoId.innerHTML = JSON.stringify(phoneInfo);
