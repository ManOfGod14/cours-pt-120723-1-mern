// exercici 1
/**
 * Algorithme :
 * Nom de la fonction : estPairOuImpair
 * Paramètrre de la fonction : nombre
 * Si nombre MODULO 2 = 0 alors nombre est pair
 * Sinon nombre est impair
 */
function estPairOuImpair(nombre) {
    if(nombre % 2 === 0) {
        return nombre + ' est un nombre pair';
    } else {
        return nombre + ' est un nombre impair';
    }
}

console.log("***** Test Excercie 1 *****");
console.log(estPairOuImpair(12));
console.log(estPairOuImpair(17));

const pair = document.getElementById('pair');
// console.log(pair);
pair.innerHTML = estPairOuImpair(100);

const impair = document.getElementById('impair');
impair.innerHTML = estPairOuImpair(501);

// exercici 2
function resulatEtuditant(nom, note) {
    if(note >= 10) {
        return nom +' a reussi avec une note de '+ note;
    } else {
        return nom +' a échoué avec une note de '+ note;
    }
}
console.log("***** Test Excercie 2 *****");
console.log(resulatEtuditant('Maliki', 14));
console.log(resulatEtuditant('Hello', 9));

// exercici 3
function jourDeLaSemaine(numJour) {
    // let jour = '';
    switch (numJour) {
        case 1:
            return "Lundi";
        case 2:
            return "Mardi";
        case 3:
            return "Mercredi";
        case 4:
            return "Jeudi";
        case 5:
            return "Vendredi";
        case 6:
            return "Samedi";
        case 7:
            return "Dimanche";
        default: 
            return "Jour introuvable";
    }
}
console.log("***** Test Excercie 3 *****");
console.log(jourDeLaSemaine(2));
console.log(jourDeLaSemaine(5));
console.log(jourDeLaSemaine(19));

// exercici 4 (+, -, *, /)
function calculatriceSimple(a, b, operateur) {
    switch (operateur) {
        case "+":
            return a +" + "+ b +" = "+ (a + b);
        case "-":
            return a +" - "+ b +" = "+ (a - b);
        case "*":
            return a +" * "+ b +" = "+ (a * b);
        case "/":
            if(b !== 0) {
                return a +" : "+ b +" = "+ (a / b);
            } else {
                return "Division par zéro impssible !";
            }
        default: 
            return "Opérateur invalide !";
    }
}
console.log("***** Test Excercie 4 *****");
console.log(calculatriceSimple(6, 15, '+'));
console.log(calculatriceSimple(60, 32, '-'));
console.log(calculatriceSimple(95, 0, '/'));
console.log(calculatriceSimple(55, 5, '/'));
console.log(calculatriceSimple(8, 5, '*'));

// exercice 5 : tableau = [5, 6, 1, 3, 4, 9] => taille tableau = 6
console.log("***** Excercie 5 exemple sur tableau *****");
let tab = [5, 1, 2, 9, 0, 3, 7, 4];
console.log(tab);
console.log('taille de tab = '+ tab.length);
console.log(tab[3]);
let somTabElt = tab[0] + tab[1] + tab[2] + tab[3] + tab[4] + tab[5] + tab[6];
console.log('som elt tab = '+ somTabElt);

function sommeTableau(tableau) {
    // for(let position = tableau.length - 1; position >= 0; position--) {
    //     console.log('position = '+ position);
    //     console.log(tableau[position]);
    // }

    let somme = 0;
    for(let position = 0; position < tableau.length; position++) {
        // somme = somme + tableau[position];
        somme += tableau[position];
    }
    return somme;
}
sommeTableau(tab)
console.log("***** Test Excercie 5 *****");
console.log(sommeTableau([5, 6, 1, 3, 4, 9]));
console.log(sommeTableau([3, 7, 0, -5, 2, 14]));

// exercice 6
function estPremier(nbr) {
    let isCheck = true;

    if (nbr <= 1) {
        isCheck = false;
    }
    
    for(let i = 2; i <= Math.sqrt(nbr); i++) {
        if(nbr % i === 0) {
            isCheck = false;
        }
    }

    if(isCheck) {
        return nbr + " est un nombre premier";
    } else {
        return nbr + " n'est pas un nombre premier";
    }
}
console.log("***** Test Excercie 6 *****");
console.log(estPremier(1));
console.log(estPremier(2));
console.log(estPremier(3));
console.log(estPremier(4));
console.log(estPremier(5));
console.log(estPremier(6));
console.log(estPremier(7));

// console.log(Math.sqrt(2));
// 2 <= 1.426565