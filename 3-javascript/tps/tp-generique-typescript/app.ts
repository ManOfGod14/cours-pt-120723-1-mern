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

console.log(tableauFiltre);
