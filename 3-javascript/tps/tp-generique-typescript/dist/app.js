"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var resIdentite1 = identite(45);
var resIdentite2 = identite("Hello");
/**
 * Ex02
 */
function creerPaire(valeur1, valeur2) {
    return [valeur1, valeur2];
}
var maPaire1 = creerPaire(9, 5);
var maPaire2 = creerPaire(9, "Hello");
/**
 * Ex03
 */
function longueurTableau(tableau) {
    return tableau.length;
}
var long1 = longueurTableau([5, 4, 1, 9, 9]);
var long2 = longueurTableau([
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
    return __spreadArray(__spreadArray([], tableau1, true), tableau2, true);
}
var tabFusion1 = fusionnerTableaux(["a", "c", "d"], ["b", "f"]);
var tabFusion2 = fusionnerTableaux([6, 8, 1, 4], [5, 9, 7]);
/**
 * Ex05
 */
function filtrerTableau(tableau, predicate) {
    return tableau.filter(predicate);
}
// tester la fonction
var tableauFiltre = filtrerTableau([5, 9, 1, 2, 4, 7, 3, 8], function (x) { return x % 2 === 0; });
console.log(tableauFiltre);
