"use strict";
/**
 * Exercice 2
 */
// a)
var nom = "TCHEROU";
// b)
var age = 30;
// c)
var estEtudiant = false;
// d)
var tableauNombres = [1, 2, 3];
// déclaration de la variable personne
var personne = {
    nom: "Maliki",
    age: 25,
    estEtudiant: true,
};
/**
 * Exercice 3
 */
// a)
function ajouter(nbr1, nbr2) {
    return nbr1 + nbr2;
}
var somme = ajouter(2, 9);
// console.log(somme);
// b)
function afficherDetailsPersonne(pers) {
    console.log("Nom : ".concat(pers.nom, " | Age: ").concat(pers.age, " | Etudiant : ").concat(pers.estEtudiant));
}
var testPers = {
    nom: "Maliki TCHEROU",
    age: 22,
    estEtudiant: true,
};
afficherDetailsPersonne(testPers);
