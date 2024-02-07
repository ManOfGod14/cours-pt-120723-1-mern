/**
 * Ex0
 */
function addition(a: number, b: number): number {
  // console.log(a + b)
  return a + b;
}

/**
 * Ex01
 */
function identite<T>(valeur: T): T {
  return valeur;
}

const resIdentite1: number = identite(45);
const resIdentite2: string = identite("Hello");

/**
 * Ex02
 */
function creerPaire<T, U>(valeur1: T, valeur2: U): [T, U] {
  return [valeur1, valeur2];
}
const maPaire1: [number, number] = creerPaire(9, 5);
const maPaire2: [number, string] = creerPaire(9, "Hello");

/**
 * Ex03
 */
function longueurTableau<A>(tableau: A[]): number {
  return tableau.length;
}
const long1: number = longueurTableau([5, 4, 1, 9, 9]);
const long2: number = longueurTableau([
  "Hello",
  4,
  1,
  9,
  9,
  { name: "Mama", prenom: "Test" },
]);

// function tableauGenerique<A>(tableau: A[]): A[] {
//   return tableau;
// }

/**
 * Ex04
 */
function fusionnerTableaux<T>(tableau1: T[], tableau2: T[]): T[] {
  return [...tableau1, ...tableau2];
}

const tabFusion1: string[] = fusionnerTableaux(["a", "c", "d"], ["b", "f"]);
const tabFusion2: number[] = fusionnerTableaux([6, 8, 1, 4], [5, 9, 7]);

/**
 * Ex05
 */
function filtrerTableau<T>(
  tableau: T[],
  predicate: (element: T) => boolean
): T[] {
  return tableau.filter(predicate);
}

// tester la fonction
const tableauFiltre: number[] = filtrerTableau(
  [5, 9, 1, 2, 4, 7, 3, 8],
  (x) => x % 2 === 0
);

// console.log(tableauFiltre);

/**
 * Ex06
 */
class Empileur<T> {
  private pile: T[] = [];

  empiler(element: T): void {
    this.pile.push(element);
  }

  depiler(): T | undefined {
    return this.pile.pop();
  }
}

// tester la classe Empileur
// instancier la classe Empileur
const empileurEntiers = new Empileur<number>();
empileurEntiers.empiler(8);
empileurEntiers.empiler(4);
empileurEntiers.empiler(7);
// console.log(empileurEntiers);

const sommet: number | undefined = empileurEntiers.depiler();
// console.log(sommet);

/**
 * Ex07
 * {"un": 1, "deux": 2}
 */
class Dictionnaire<Cle, Valeur> {
  private entries: Map<Cle, Valeur> = new Map();

  ajouter(key: Cle, value: Valeur): void {
    this.entries.set(key, value);
  }

  recuperer(key: Cle): Valeur | undefined {
    return this.entries.get(key);
  }

  supprimer(key: Cle): void {
    this.entries.delete(key);
  }
}

// tester la classe Dictionnaire
const dic1 = new Dictionnaire<string, number>();
dic1.ajouter("un", 1);
dic1.ajouter("deux", 2);
dic1.ajouter("trois", 3);
console.log(dic1);

const valDeux: number | undefined = dic1.recuperer("deux");
console.log(valDeux);
