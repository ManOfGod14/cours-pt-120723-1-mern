/**
 * Exercice 2
 */
// a)
let nom: string = "TCHEROU";

// b)
let age: number = 30;

// c)
let estEtudiant: boolean = false;

// d)
let tableauNombres: number[] = [1, 2, 3];

// e)
/**
 * création d'une interface
 * une interface permet de créer des models d'objets
 */
interface Personne {
  nom: string;
  age: number;
  estEtudiant: boolean;
  email?: string;
}

// déclaration de la variable personne
let personne: Personne = {
  nom: "Maliki",
  age: 25,
  estEtudiant: true,
};

/**
 * Exercice 3
 */
// a)
function ajouter(nbr1: number, nbr2: number): number {
  return nbr1 + nbr2;
}
const somme = ajouter(2, 9);
// console.log(somme);

// b)
function afficherDetailsPersonne(pers: Personne) {
  console.log(
    `Nom : ${pers.nom} | Age: ${pers.age} | Etudiant : ${pers.estEtudiant}`
  );
}
const testPers = {
  nom: "Maliki TCHEROU",
  age: 22,
  estEtudiant: true,
};
afficherDetailsPersonne(testPers);
