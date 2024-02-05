/**
 * La directive "use strict" en javascript est une déclaration utilisée pour activer le mode stric dans un script ou une fonction.
 * Lorsque ce mode strict est activé , le comportement du code Javascript est modifié pour être plus strict et révéler des erreurs courantes
 * qui autrement pourraient passer inaperçues.
 */

// activation de mode strict
// "use strict";

/**
 * exemple 1
 */
function afficherMessage(msg) {
  console.log(msg);
}
afficherMessage();

/**
 * exemple 2
 */
var y = 20;
function supprimerVariable() {
  delete y;
}
