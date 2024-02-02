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

// c)
function estMajeurJunior(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function estMajeurSenior(age: number): boolean {
  return age >= 18;
}

console.log(estMajeurJunior(17));
console.log(estMajeurJunior(23));

console.log(estMajeurSenior(16));
console.log(estMajeurSenior(18));

// d)
function inverserTableau(tab: number[]): number[] {
  return tab.reverse();
}

const tabNbr = [5, 9, 7, 2];
console.log(inverserTableau(tabNbr));

// e)
function concatener(ch1: string, ch2: string): string {
  return ch1 + ch2;
}

/**
 * Exercice 4 (Générique)
 */
// avec any
function doublerAvecAny(valeur: any): any {
  return valeur * 2;
}
console.log(doublerAvecAny(8));

// déclaration d'une fonction générique
function doubler<T>(valeur: T): T {
  return valeur;
}

console.log(doubler(15));
console.log(doubler("Hello"));

/**
 * Exercice 5 (union de type)
 */
function afficherInfo(info: number | string): void {
  console.log(info);
}
afficherInfo(19);
afficherInfo("Hello");

/**
 * Les intersection de types
 */
interface Employe {
  nom: string;
  poste: string;
}

interface Joueur {
  equipe: string;
  numero: number;
}

type EmployeJoueur = Employe & Joueur;

function test1(info: Employe): void {}

function test2(info: Joueur): void {}

function test3(info: EmployeJoueur): void {}

/**
 * Exercice 6
 */
function longueurChaine(chaine: string | null): number {
  return chaine ? chaine.length : -1;
}
console.log(longueurChaine("Hello"));
console.log(longueurChaine(""));
console.log(longueurChaine(null));

/**
 * Exercice 7
 */
type Calcul = (a: number, b: number) => number;
const addition: Calcul = (c, d) => c + d;

console.log(addition(9, 7));
