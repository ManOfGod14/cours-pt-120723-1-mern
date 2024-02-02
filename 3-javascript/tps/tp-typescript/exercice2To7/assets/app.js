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
// c)
function estMajeurJunior(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function estMajeurSenior(age) {
    return age >= 18;
}
console.log(estMajeurJunior(17));
console.log(estMajeurJunior(23));
console.log(estMajeurSenior(16));
console.log(estMajeurSenior(18));
// d)
function inverserTableau(tab) {
    return tab.reverse();
}
var tabNbr = [5, 9, 7, 2];
console.log(inverserTableau(tabNbr));
// e)
function concatener(ch1, ch2) {
    return ch1 + ch2;
}
/**
 * Exercice 4 (Générique)
 */
// avec any
function doublerAvecAny(valeur) {
    return valeur * 2;
}
console.log(doublerAvecAny(8));
// déclaration d'une fonction générique
function doubler(valeur) {
    return valeur;
}
console.log(doubler(15));
console.log(doubler("Hello"));
/**
 * Exercice 5 (union de type)
 */
function afficherInfo(info) {
    console.log(info);
}
afficherInfo(19);
afficherInfo("Hello");
function test1(info) { }
function test2(info) { }
function test3(info) { }
/**
 * Exercice 6
 */
function longueurChaine(chaine) {
    return chaine ? chaine.length : -1;
}
console.log(longueurChaine("Hello"));
console.log(longueurChaine(""));
console.log(longueurChaine(null));
