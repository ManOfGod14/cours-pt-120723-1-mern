import { add, MIN_VALUE, MAX_VALUE, APP_NAME } from "./module.js";
import * as operation from "./calcul.js";
import fruitList from "./fruits.js";

/**
 * Modules
 */
// question module 1
console.log("******* test add module *******");
const resultAdd1 = add(9, 16);
console.log(resultAdd1);

// question module 2
console.log("******* test calcul module *******");
const sum = operation.addition(20, 96);
console.log(sum);

const diff = operation.subtract(84, 15);
console.log(diff);

const mult = operation.multiply(9, 9);
console.log(mult);

const div1 = operation.divide(16, 2);
console.log(div1);

const div2 = operation.divide(16, 0);
console.log(div2);

// question module 3
console.log("******* test tab module *******");
console.log(fruitList);

// question module 4
console.log("******* test config module *******");
console.log(`${APP_NAME} - Plage autorisée : ${MIN_VALUE} à ${MAX_VALUE}`);

/**
 * Promesses
 */
// question promise 1
console.log("******* test simple promise *******");
const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesse résolue avec succès !");
    }, 2000); // en milisecondes
});
simplePromise.then((res) => {
    console.log(res);
});

// question promise 2
console.log("******* test reject promise *******");
const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("La promesse a été rejetée avec une erreur !");
    }, 3000);
});
rejectedPromise.catch((err) => {
    console.error(err);
});

// question promise 3
const promise1 = new Promise((resolve) => setTimeout(resolve, 4000, "Promesse 1 terminée"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 3000, "Promesse 2 terminée"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 2000, "Promesse 3 terminée"));

const allPromises = Promise.all([promise1, promise2, promise3]);
allPromises.then((values) => {
    console.log("Toutes les promesses sont terminées : "+ values);
});