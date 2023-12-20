/**
 * DOM HTML en JS
 */
//
function getNom() {
    // const nom = document.querySelector('#nom');
    const nom = document.getElementById('nom');
    console.log(nom.value);
}

// je veux récupérer le 1er élement h1 et modifier sa couleur par défaut
let h1Elt = document.querySelector('h1');
console.log(h1Elt);
h1Elt.style.color = 'blue';

// je veux récupérer tous les élements h2 dans le DOM
let h2Elts = document.querySelectorAll("h2");
console.log(h2Elts);
console.log(h2Elts[1]);
h2Elts[1].style.color = 'red';

for(let i = 0; i < h2Elts.length; i++) {
    h2Elts[i].style.textDecoration = "underline";
}

let h2EltsByTag = document.getElementsByTagName('h2');
console.log(h2EltsByTag);

// je veux récupérer tout les élements ayant une classe 'titleClass'
let titleClassElts = document.querySelectorAll('.titleClass');
console.log(titleClassElts);

// je veux récupérer le 1er h2 ayant une classe 'titleClass'
let firstTitleClassElt = document.querySelector("h2.titleClass");
console.log(firstTitleClassElt);

/**
 * les noeuds
 * ajouter, modifier ou supprimer des éléments dans le DOM
 */
let idDivParent1Elt = document.querySelector('#idDivParent1');

// les enfants de l'élément div ayant l'id idDivParent1
console.log(idDivParent1Elt.children);

// les noeuds en enfants de l'élément div ayant l'id idDivParent1
console.log(idDivParent1Elt.childNodes);

// créer un élément
let newDiv = document.createElement('div')
newDiv.textContent = "Ma div créé avec du JS"
// console.log(newDiv);

let bodyNode = document.body;
// console.log(bodyNode)

// j'ajoute la div créée dans le body
bodyNode.append(newDiv);

// créer élément p
let newP = document.createElement('p')
bodyNode.append(newP, "Mon élément p créé avec JS");

// placer un element avant une position donnée
let newDiv0 = document.createElement('div');
newDiv0.textContent = "Ma div0 avant la div dont l'id est idDivParent1"
bodyNode.insertBefore(newDiv0, idDivParent1Elt);

// déplacer un élément dans un autre élément
let idDivEnfant1Elt = document.querySelector('#idDivEnfant1')
let idDivParent2Elt = document.querySelector('#idDivParent2')
/**
 * afterbegin : cela signifie que l'élement sera inséré juste à l'intérieur de l'élement parent avant son premier enfant (le nouvel élément devient le 1er enfant de l'élément)
 * beforeend : cela signifie que l'élément sera inséré juste à l'intérieur de l'élément parent après son dernier enfant (le nouvel élément devient le dernier enfant de l'élément parent)
 * afterend : cela signifie que l'élément sera inséré juste après l'élément parent, au même niveau hiérarchique (Les deux éléments auront le même parent)
 * beforebegin : cela signifie que l'élément sera inséré juste avant l'élément parent, au même niveau hiérarchique (les deux éléments auront le même parent)
 */
idDivParent2Elt.insertAdjacentElement('afterbegin', idDivEnfant1Elt);

