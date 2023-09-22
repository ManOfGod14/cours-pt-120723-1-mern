/**
 * les boucles
 */
// boucle while (vérifie la condition avant de faire l'instruction)
let whileId = document.getElementById('whileId');
// console.log(whileId);

let i = 0; // la variable itérateur
while(i < 10) { // condition d'arrêt ou de sortie de la boucle while
    whileId.innerHTML += 'Boucle while i = '+ i + "<br/>";
    // console.log('Boucle while i = '+ i);
    i = i + 1; // incrémentation (j'incrémente de 1)
    // break; // force la boucle à s'arrête
}

// boucle do while (fait l'instruction près vérifie la condition)
let doWhileId = document.getElementById('doWhileId');
let j = 0;
do {
    doWhileId.innerHTML += 'Boucle do while j = '+ j + "<br/>";
    // j = j + 1;
    j++;
} while (j < 10);

// boucle for
let forId = document.getElementById('forId');
for(let z = 0; z < 10; z++) {
    forId.innerHTML += 'Boucle for z = '+ z + "<br/>";
}

// let tab  = ["John", 30, "Engineer"];
// console.log(tab[1]);


// boucle for in
console.log("***** boucle for in *****");
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer",
    cities: ["Casa", "Rabat"]
};
for(let p in person) {
    console.log(p + ": " + person[p]);
}

// la boucle for of
console.log("***** boucle for of *****");
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

console.log("***** boucle for *****");
for(let f = 0; f < fruits.length; f++) {
    console.log(fruits[f]);
}

