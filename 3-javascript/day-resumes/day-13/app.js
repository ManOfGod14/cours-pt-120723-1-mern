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

/**
 * Les tableaux et leurs méthodes
 */
console.log("***** fonction push *****");
const tabPush = [1, 2, 3];
console.log(tabPush);
tabPush.push(4, 5, 6, 7);
console.log(tabPush);

console.log("***** fonction pop *****");
const tabPop = [1, 2, 3, 4, 5];
console.log(tabPop);
tabPop.pop();
console.log(tabPop);

console.log("***** fonction shift *****");
const fruitShift = ["apple", "banana", "orange"];
console.log(fruitShift);
fruitShift.shift();
console.log(fruitShift);

console.log("***** fonction unshift *****");
const fruitUnshift = ["banana", "orange"];
console.log(fruitUnshift);
fruitUnshift.unshift("apple", "grape");
console.log(fruitUnshift);

/**
 * fonction splice() : permet de retirer, remplacer ou d'ajouter des élements à des positions spécifiques dans le tableau
 * splice() prends 3 paramètres
 * 1er paramètre (obligatoire) : c'est l'index de départ à partir duquel vous souhaiutez commencer à modifier le tableau
 * 2ème paramètre (facultatif) : Nombre d'éléments à supprimer à partir de l'index de départ (par défaut 0)
 * 3ème paramètre (facultatif) : élements à ajouter à la place des éléments supprimés
 */
console.log("***** fonction splice *****");
const colorSplice1 = ["red", "green", "blue"];
console.log(colorSplice1);
colorSplice1.splice(1, 0, "yellow");
console.log(colorSplice1);

const numberSplice = [1, 2, 3, 4, 5];
console.log(numberSplice);
numberSplice.splice(2, 2);
console.log(numberSplice);

/**
 * fonction slice() : permet de créer une nouvelle copie du tableau en extrayant une portion spécifique, déterminée par nles index de début et de fin que vous pouvez spécifier
 * slice() prends 2 paramètres
 * 1ère paramètre (facultatif) : index début (inclus) à partir duquel vous souhaitez commencer l'extraction (par défaut 0)
 * 2ème paramètre (facultatif) : index de fin (non inclus) où vous souhaitez terminer l'extraction (par défaut la fin du tableau)
 */
console.log("***** fonction slice *****");
const numberSlice = [1, 2, 3, 4, 5];
console.log(numberSlice);
const copyNumberSlice = numberSlice.slice(1, 4);
console.log(copyNumberSlice);

console.log("***** fonction concat *****");
const arrConcat1 = [1, 2, 6, 8];
const arrConcat2 = [0, 3, 4, 7];
const arrConcat3 = [10, 9, 5, 12];
const combinedArray = arrConcat1.concat(arrConcat2, arrConcat3);
console.log(combinedArray);

/**
 * fonction indexOf() : permet de rechercher la 1ère occurrence de l'élément spécifie dans le tableau, en commençant par l'index de départ (si fourni). Elle renvoie l'index de l'élement s'il est rouvé, sinon -1
 */
console.log("***** fonction indexOf *****");
const fruitindexOf = ["apple", "banana", "orange", "banana", "strawberry"];
console.log(fruitindexOf);
console.log(fruitindexOf.indexOf("banana"));
console.log(fruitindexOf.indexOf("bananas"));

/**
 * les itérateurs
 */

/**
 * fonction filter() : permet de créer un nouveau tableau contenant tous les éléments du tableau d'origine qui satisfont une condition spécifiée sous forme de fonction de rappel
 * La fonction de rappel (callback) est appelée pour chaque élément du tableau, et si elle retourne 'true', l'élément est inclus dans le nouveau tableau
 * filter() prends 2 paramètre (une fonction callback et thisArg)
 * la fonction callback : prends 3 paramètre (elementCourant, index, tableauOrginal)
 * thisArg : objet à utiliser en tant que this quand la fonction callback est appelée ou exécutée
 */
console.log("***** fonction filter *****");
const numberFilter = [1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 16];
const newNumberFilter = numberFilter.filter((currentElement, elementIndex) => {
    return currentElement % 2 === 0
});
console.log(newNumberFilter);

console.log("***** my filter fonction *****");
function myFilterFunc(tab) {
    let newTab = [];
    for(let i = 0; i < tab.length; i++) {
        if(tab[i] % 2 === 0) {
            newTab.push(tab[i]);
        }
    }
    return newTab;
}
console.log(myFilterFunc(numberFilter));

/**
 * fonction map() : crée un nouveau tableau en appliquant un fonction de rappel (callback function) à chaque élément du tableau d'origne.
 * Elle retourne un tableau de la même longueur (taille) que l'orginal, où chaque élément est le résultat de l'application de la fonction de rappel à l'élement correspondant
 * map() prends 2 paramètre (une fonction callback et thisArg)
 * la fonction callback : prends 3 paramètre (elementCourant, index, tableauOrginal)
 * thisArg : objet à utiliser en tant que this quand la fonction callback est appelée ou exécutée
 */
console.log("***** map function example 1 *****");
const numberMap = [1, 2, 3, 4, 5];
console.log(numberMap);
const newNumberMap = numberMap.map((elt) => elt * elt);
console.log(newNumberMap);

console.log("***** map function example 2 *****");
const studentList = [
    {
        fulname: "Student 01",
        email: "student01@demo.com",
        city: "Casa",
    },
    {
        fulname: "Student 02",
        email: "student02@demo.com",
        city: "Tanger",
    },
    {
        fulname: "Student 03",
        email: "student03@demo.com",
        city: "Rabat",
    }
]
console.log(studentList);
studentList.map((elt, index) => {
    console.log(index +' => '+ elt.fulname +' | '+ elt.email +' | '+ elt.city);
});

/**
 * fonction forEach() : permet d'itèrer sur chaque élément du tableau et exécute une fonction de rappel (callback function) pour chaque élément.
 * Cependant, elle ne crée pas de nouveau tableau ni ne retourne de résultat.
 * Elle est principalement utilisée pour effectuer des actions sur chque élément sans nécessiter un résultat
 * forEach() prends 2 paramètre (une fonction callback et thisArg)
 * la fonction callback : prends 3 paramètre (elementCourant, index, tableauOrginal)
 * thisArg : objet à utiliser en tant que this quand la fonction callback est appelée ou exécutée
 */
console.log("***** forEach function *****");
const colorforEach = ["red", "green", "blue"];
colorforEach.forEach((colorItem) => {
  console.log(colorItem);
});

/**
 * fonction reduce() : Permet de réduire un tableau à une seulle valeur en appliquant une fonction de rappel (callback function) qui accumule les éléments les uns après les autres.
 * La fonction de rappel prend généralement deux arguments, l'accumulateur et la valeur actulle
 * reduce() prends 2 paramètre (une fonction callback et valeurInitiale)
 * la fonction callback : prends 3 paramètre (accumulateur, valeurCourante, index, tableauOrginal)
 * valeurInitiale : C'est une valeur qui est utilisé comme 1er argument lors du premier appel de la fonction de rappel (callback)
 * Si aucne valeur initiale n'est fournie, le 1er élément du tableau est utilisé (et la boucle de traitement ne le parcourera pas)
 * Si on utilise reduce sur un tableau vide sans fournir de valeur initiale, on aura un erreur
 */
console.log("***** reduce function *****");
const numberReduce = [1, 2, 3, 4, 5];
console.log(numberReduce);
const sum = numberReduce.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

/**
 * fonction find() : Renvoie le premier élément du tableau qui satisfait une condition apécifiée dan sune fonction rappel.
 * Elle s'arrête dès qu'elle trouve le 1er élément correspondant
 * find() prends 2 paramètre (une fonction callback et thisArg)
 * la fonction callback : prends 3 paramètre (elementCourant, index, tableauOrginal)
 * thisArg : objet à utiliser en tant que this quand la fonction callback est appelée ou exécutée
 */
console.log("***** find function *****");
const numberFind = [1, 2, 3, 4, 5];
console.log(numberFind);
const numberFindVal = numberFind.find((elt) => elt % 2 === 0);
console.log(numberFindVal);

/**
 * fonction some() : Vérifie si au moins un élément du tableau satisfait une condition donnée dans une fonction de rappel
 * Elle retourne `true` si au moins un élément correspond, sinon `false`
 * some() prends 2 paramètre (une fonction callback et objetThis)
 * la fonction callback : prends 3 paramètre (elementCourant, index, tableauOrginal)
 * thisArg : objet à utiliser en tant que this quand la fonction callback est appelée ou exécutée
 */
console.log("***** some function *****");
const hasEvenNumber = numberFind.some((elt) => elt % 2 === 0);
console.log(hasEvenNumber);

/**
 * fonction every() : Vérifie si tous les éléments du tableau satisfont une condition donnée dans une fonction de rappel
 * Elle retourne `true` si tous éléments correspondent, sinon `false`
 * every() prends 2 paramètre (une fonction callback et objetThis)
 * la fonction callback : prends 3 paramètre (elementCourant, index, tableauOrginal)
 * thisArg : objet à utiliser en tant que this quand la fonction callback est appelée ou exécutée
 */
console.log("***** every function *****");
const allEvenNumbers = numberFind.every((elt) => elt % 2 === 0);
console.log(allEvenNumbers);

/**
 * Les chaînes de caractères en JS
 */

// concaténations de deux string
console.log("***** string concat testing *****");
const firstName = "John";
const lastName = "Doe";

const fullName1 = firstName +"_"+ lastName;
console.log(fullName1);

// Using the concat() method
const fullName2 = firstName.concat(" ", lastName);
console.log(fullName2);

// method length
console.log("***** method length *****");
const message = "Hello, World!";
console.log(message.length);

console.log("***** methods toUpperCase() and toLowerCase() *****");
const textTransform = "Hello, World!";
console.log(textTransform.toUpperCase());
console.log(textTransform.toLowerCase());

console.log("***** method indexOf() *****");
const sentenceIndexOf = "JavaScript is awesome!";
console.log(sentenceIndexOf);
console.log(sentenceIndexOf.indexOf("is"));
console.log(sentenceIndexOf.indexOf("Python"));

console.log("***** method slice() *****");
const phraseSlice = "Learning JavaScript is fun!";
console.log(phraseSlice);
const extractedSlice = phraseSlice.slice(9, 22);
console.log(extractedSlice);


console.log("***** method replace() *****");
const sentenceReplace = "I love JavaScript!";
console.log(sentenceReplace);
const newSentenceReplace = sentenceReplace.replace("JavaScript", "Python");
console.log(newSentenceReplace);

console.log("***** method split() exemple 1 *****");
const sentenceSplit = "Hello, World!";
console.log(sentenceSplit);
const wordsSplit = sentenceSplit.split(", ");
console.log(wordsSplit);

console.log("***** method split() exemple 2 *****");
const addressEmail = "maliki.tcherou1@gmail.com";
console.log(addressEmail);
const splitTab = addressEmail.split("@");
console.log(splitTab);
console.log(splitTab[0]);

console.log("***** method includes() *****");
const sentenceIncludes = "JavaScript is amazing!";
console.log(sentenceIncludes);
console.log(sentenceIncludes.includes("JavaScript"));
console.log(sentenceIncludes.includes("Python"));

/**
 * le minimum de pièces qu'il faut pour former un montant
 * [1, 2, 5, 10, 20, 50, 100, 200] => aux pièces
 * coins = [1, 2, 5, 10, 20]
 * amount = 81 => 20 * 4 => [1, 0, 0, 0, 4]
 * tabMinCoins = [1, 0, 0, 0, 4]
 * 
 * 81 / 20 = 4,05
 */
function minCoins(amount) {
    let coins = [1, 2, 5, 10, 20];
    let tabMinCoins = [];

    for(let i = coins.length - 1; i >= 0; i--) {
        let res = Math.floor(amount / coins[i]); // envoi juste la partie entière d'un nombre
        tabMinCoins.unshift(res);
        // amount = amount - res*coins[i];
        amount = amount % coins[i];
    }
    return tabMinCoins;
}
console.log(minCoins(81));