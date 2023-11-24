/**
 * 1. Tri de sélection (Selection sort)
 * [89, 3, 0, 3, 6, 8, 4, 2] => i = 0, j = i + 1 = 1
 * [0, 3, 89, 3, 6, 8, 4, 2] => i = 1, j = 2
 * [0, 2, 89, 3, 6, 8, 4, 3] => i = 2, j = 3
 */
// solution 1 (ordre croissanr : du plus pétit au plus grand)
function selectionSort1(tableau) {
    for(let i = 0; i < tableau.length - 1; i++) {
        let minIndex = i;
        // trouver l'indice du minimum dans le reste du tableau
        for(let j = i + 1; j < tableau.length; j++) {
            if(tableau[j] < tableau[minIndex]) {
                minIndex = j;
            }
        }
        // Echanger l'élément actuel acvec le minimum trouvé
        [tableau[i], tableau[minIndex]] = [tableau[minIndex], tableau[i]]
    }
    return tableau;
}
console.log("Tri de sélection 1 : ", selectionSort1([89, 3, 0, 3, 6, 8, 4, 2]));

// solution 2
function selectionSort2(tableau) {
    // trier du plus petit au plus grand
    return tableau.sort((a, b) => a - b); 
}
console.log("Tri de sélection 2 : ", selectionSort1([89, 3, 0, 3, 6, 8, 4, 2]));

/**
 * 2. Tri à bulles (Bubble sort)
 * [89, 3, 0, 3, 6, 8, 4, 2]
 * pour i = 0, j = 0 pas d'échange
 * pour i = 0, j = 1 pas d'échange
 * pour i = 0, j = 2 pas d'échange [89, 3, 3, 0, 6, 8, 4, 2]
 */
// solution 1 (ordre décroisant : du plus grand au plus pétit)
function bubbleSort1(tableau) {
    const taille = tableau.length;
    for(let i = 0; i < taille - 1; i++) {
        for(let j = 0; j < taille - 1 - i; j++) {
            if(tableau[j] < tableau[j + 1]) {
                const temp = tableau[j];
                tableau[j] = tableau[j + 1]
                tableau[j + 1] = temp;
            }
        }
    }
    return tableau;
}
console.log("Tri à bulles 1 : ", bubbleSort1([89, 3, 0, 3, 6, 8, 4, 2]));

// solution 2
function bubbleSort2(tableau) {
    // trier au plus grand du plus petit
    return tableau.sort((a, b) => b - a); 
}
console.log("Tri à bulles 2 : ", bubbleSort2([89, 3, 0, 3, 6, 8, 4, 2]));

/**
 * 3. Tri par insertion (Insertion sort)
 * [89, 3, 0, 3, 6, 8, 4, 2]
 */
function insertionSort(tableau) {
    const taille = tableau.length;
    for(let i = 1; i < taille; i++) {
        let key = tableau[i];
        let j = i - 1;
        while(j >= 0 && tableau[j] > key) {
            tableau[j + 1] = tableau[j];
            j--
        }
        tableau[j + 1] = key;
    }
    return tableau;
}
console.log("Tri par insertion : ", insertionSort([89, 3, 0, 3, 6, 8, 4, 2]));

/**
 * 4. Recherche linéaire (Linear search)
 * [89, 3, 0, 3, 6, 8, 4, 2]
 */
// solution 1
function linearSearch1(tableau, target) {
    for(let i = 0; i < tableau.length; i++) {
        if(tableau[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log("Recherche linéaire 1 : ", linearSearch1([89, 3, 0, 3, 6, 8, 4, 2], 6));

// solution 2
function linearSearch2(tableau, target) {
    return tableau.indexOf(target);
}
console.log("Recherche linéaire 1 : ", linearSearch2([89, 3, 0, 3, 6, 8, 4, 2], 100));

/**
 * 5. Matrice (Matrix)
 * m = [
 *  [5, 6, 2],
 *  [9, 1, 0],
 *  [7, 0, 5]
 * ]
 */
function countMatrixZeros(matrix) {
    let compteur = 0;
    for(let row of matrix) {
        for(let value of row) {
            if(value === 0) {
                compteur++;
            }
        }
    }
    return compteur;
}

const matrix = [
    [5, 6, 2],
    [9, 1, 0],
    [7, 0, 5]
];
console.log("Matrix : ", countMatrixZeros(matrix));