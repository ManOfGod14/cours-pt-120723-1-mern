/**
 * 1ère tâche ---- end
 * 2ème 
 */

function wait(len) {
    let i = 0;
    while(i < len) {
        i++;
    }
}

// exemple de code js synchrone
const a = 5;
const b = 3;

// wait(1000000);

// setInterval(() => {
//     console.log("**** pause");
// }, 5000);

// setTimeout(() => {
//     console.log("**** pause");
// }, 5000);

const result = a + b;
console.log(result);

// exemple de code js asynchrone
function findTodo(todoId) {
    return fetch("https://jsonplaceholder.typicode.com/todos/"+todoId).then(response => response.json());
}
findTodo(2).then(data => { console.log(data); });

// exemple async et await
async function getTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Une erreur s'est  produite :"+ err);
    }
}
getTodos();

/**
 * Les requêtes HTTP
 */
console.log("******** Les requêtes HTTP  avec l'api XMLHttpRequest ******");

// création d'une instance XMLHttpRequest
const xhr = new XMLHttpRequest();

// configuration de larequête
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");

// Gestion des évènements
xhr.onload = function() {
    if(xhr.status == 200) {
        console.log(xhr.responseText);
    } else {
        console.error("Erreur de requête : "+ xhr.status);
    }
}

xhr.onerror = function() {
    // une erreur s'est produite lors de la requête
    console.error("Erreur de réseau");
}

// Envoir de la reqête
xhr.send();

/**
 * Gestion des erreurs
 */
function division(a, b) {
    if(b !== 0) {
        return a / b;
    } else {
        throw new Error('Division par zéro impossible !');
    }
}
console.log(division(9, 5));
console.log(division(13, 0));
