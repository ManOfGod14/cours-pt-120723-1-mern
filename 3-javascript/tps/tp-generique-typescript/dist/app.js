"use strict";
/**
 * Ex0
 */
function addition(a, b) {
    // console.log(a + b)
    return a + b;
}
/**
 * Ex01
 */
function identite(valeur) {
    return valeur;
}
const resIdentite1 = identite(45);
const resIdentite2 = identite("Hello");
/**
 * Ex02
 */
function creerPaire(valeur1, valeur2) {
    return [valeur1, valeur2];
}
const maPaire1 = creerPaire(9, 5);
const maPaire2 = creerPaire(9, "Hello");
/**
 * Ex03
 */
function longueurTableau(tableau) {
    return tableau.length;
}
const long1 = longueurTableau([5, 4, 1, 9, 9]);
const long2 = longueurTableau([
    "Hello",
    4,
    1,
    9,
    9,
    { name: "Mama", prenom: "Test" },
]);
// function tableauGenerique<A>(tableau: A[]): A[] {
//   return tableau;
// }
/**
 * Ex04
 */
function fusionnerTableaux(tableau1, tableau2) {
    return [...tableau1, ...tableau2];
}
const tabFusion1 = fusionnerTableaux(["a", "c", "d"], ["b", "f"]);
const tabFusion2 = fusionnerTableaux([6, 8, 1, 4], [5, 9, 7]);
/**
 * Ex05
 */
function filtrerTableau(tableau, predicate) {
    return tableau.filter(predicate);
}
// tester la fonction
const tableauFiltre = filtrerTableau([5, 9, 1, 2, 4, 7, 3, 8], (x) => x % 2 === 0);
// console.log(tableauFiltre);
/**
 * Ex06
 */
class Empileur {
    constructor() {
        this.pile = [];
    }
    empiler(element) {
        this.pile.push(element);
    }
    depiler() {
        return this.pile.pop();
    }
}
// tester la classe Empileur
// instancier la classe Empileur
const empileurEntiers = new Empileur();
empileurEntiers.empiler(8);
empileurEntiers.empiler(4);
empileurEntiers.empiler(7);
// console.log(empileurEntiers);
const sommet = empileurEntiers.depiler();
// console.log(sommet);
/**
 * Ex07
 * {"un": 1, "deux": 2}
 */
class Dictionnaire {
    constructor() {
        this.entries = new Map();
    }
    ajouter(key, value) {
        this.entries.set(key, value);
    }
    recuperer(key) {
        return this.entries.get(key);
    }
    supprimer(key) {
        this.entries.delete(key);
    }
}
// tester la classe Dictionnaire
const dic1 = new Dictionnaire();
dic1.ajouter("un", 1);
dic1.ajouter("deux", 2);
dic1.ajouter("trois", 3);
console.log(dic1);
const valDeux = dic1.recuperer("deux");
console.log(valDeux);
