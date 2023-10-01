/**
 * Day 11 Challenge
 */
// Task 1
let age = 31;
let isStudent = false;
let favoriteColors = ["White", "Blue"];
console.log("***************** Task 1 *****************");
console.log("let age = "+ age);
// console.log(document);
document.getElementById('ageId').innerHTML = "let age = "+ age;

console.log("let isStudent = "+ isStudent);
document.getElementById('isStudentId').innerHTML = "let isStudent = "+ isStudent;

console.log("let favoriteColors = "+ JSON.stringify(favoriteColors));
document.getElementById('favoriteColorsId').innerHTML = "let favoriteColors = "+ JSON.stringify(favoriteColors);

// Task 2
let stringText = "Bonjour tout le monde, je m'appelle";
console.log("***************** Task 2 *****************");
console.log(stringText);
document.getElementById('stringTextId').innerHTML = "let stringText = "+ stringText;

// Task 3

let studentText = isStudent ? "je suis étudiant" : "je ne suis pas étudiant";
let meInfos = stringText +" Maliki TCHEROU, j'ai "+ age +" ans et "+ studentText;
console.log("***************** Task 3 *****************");
console.log(meInfos);
document.getElementById('meInfosId').innerHTML = "let meInfos = "+ meInfos;

// Task 4

// Task 5
console.log("***************** Task 5 *****************");
// const myFavoriteAnimal = "Chien";
// const myFavoriteColor = "Bleu";
// const userFavoriteAnimal = prompt("Quel est votre animal préféré ?");
// const userFavoriteColor = prompt("Quel est votre couleur préféré ?");
// if((myFavoriteAnimal.toLowerCase() === userFavoriteAnimal.toLowerCase()) && (myFavoriteColor.toLowerCase() === userFavoriteColor.toLowerCase())) {
//     console.log("Vous avez les mêmes préférences que moi !") 
// } else {
//     console.log("Nos préférences sont différentes !") 
// }
function checkFavorites(myFavoriteAnimal, myFavoriteColor) {
    const userFavoriteAnimal = prompt("Quel est votre animal préféré ?");
    const userFavoriteColor = prompt("Quel est votre couleur préféré ?");

    if((myFavoriteAnimal.toLowerCase() === userFavoriteAnimal.toLowerCase()) && (myFavoriteColor.toLowerCase() === userFavoriteColor.toLowerCase())) {
        return "Vous avez les mêmes préférences que moi !";
    } else {
        return "Nos préférences sont différentes !";
    }
}
// console.log(checkFavorites("Chien", "Bleu"));
const btnTask5IdElt = document.getElementById('btnTask5Id');
// console.log(btnTask5IdElt);
// btnTask5IdElt.addEventListener('click', function () {
//     console.log(checkFavorites("Chien", "Bleu"));
// });
btnTask5IdElt.addEventListener('click', () => {
    const responseTask5 = checkFavorites("Chien", "Bleu");
    console.log(responseTask5);
    document.getElementById('responseTask5Id').innerHTML = responseTask5;
});

// Task 6
console.log("***************** Task 6 *****************");
function checkNumber() {
    const userInputNumber = prompt("Saisissez un nombre :");
    // const userInputNumber = parseFloat(prompt("Saisissez un nombre ?"));

    // if(isNaN(userInputNumber)) {
    //     return "Veuillez saisir un nombre, car "+ userInputNumber + " n'est pas un nombre";
    // } else {
    //     if(userInputNumber > 0) {
    //         return "Le nombre "+ userInputNumber +" est positif.";
    //     } else if(userInputNumber < 0) {
    //         return "Le nombre "+ userInputNumber +" est négatif.";
    //     } else {
    //         return "Le nombre "+ userInputNumber +" est nul." ;
    //     } 
    // }

    if(!isNaN(userInputNumber)) {
        if(userInputNumber > 0) {
            return "Le nombre "+ userInputNumber +" est positif.";
        } else if(userInputNumber < 0) {
            return "Le nombre "+ userInputNumber +" est négatif.";
        } else {
            return "Le nombre "+ userInputNumber +" est nul." ;
        }
    }
    return "Veuillez saisir un nombre, car "+ userInputNumber + " n'est pas un nombre";
}
const btnTask6IdElt = document.getElementById('btnTask6Id');
btnTask6IdElt.addEventListener('click', () => {
    const responseTask6 = checkNumber();
    console.log(responseTask6);
    document.getElementById('responseTask6Id').innerHTML = responseTask6;
});

// Task 7

// Task 8 true, TRUE, True, 1
console.log("***************** Task 8 *****************");
function checkValue() {
    const value = prompt("Saisissez une valeur :")
    if((value.toLowerCase() === "true") || value === "1") {
        return "La valeur que vous avez saisie est vraie.";
    } else if((value.toLowerCase() === "false") || value === "0") {
        return "La valeur que vous avez saisie est fausse.";
    } else {
        return "La valeur que vous avez saisie n'est ni vraie ni fausse.";
    }
}
const btnTask8IdElt = document.getElementById('btnTask8Id');
btnTask8IdElt.addEventListener('click', () => {
    const responseTask8 = checkValue();
    console.log(responseTask8);
    document.getElementById('responseTask8Id').innerHTML = responseTask8;
});

// Task 9

// Task 10

// Task 11

// Task 12