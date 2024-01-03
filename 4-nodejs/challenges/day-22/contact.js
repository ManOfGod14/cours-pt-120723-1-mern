/**
 * [
 *  0 => {id: 1, name: maliki, phone: 0627895656},
 *  1 => {name: test, phone: 0627895656}
 * ]
 */

// imprtation de la librairie "readline"
const { constants } = require("buffer");
const readline = require("readline");

// création de l'interface de lecture
const rlApp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// exemple
// rlApp.question("Quel est votre nom : ", (name) => {
//   console.log(`Hello, ${name}!`);
//   rlApp.close(); // fermer la console dans le terminal
// });

// créer un tableau vide
const contacts = [];

/**
 * fonction d'ajout d'un contact
 */
function addContact() {
  rlApp.question("\nSaisissez le nom du contact : ", (name) => {
    rlApp.question("\nSaisissez le n° de téléphone du contact : ", (phone) => {
      contacts.push({ name, phone });
      console.log("\nContact ajouté avec succès !");

      // afficher la liste des contacts
      showContacts();
    });
  });
}

/**
 * Affichage de la liste des contact
 */
function showContacts() {
  if (contacts.length > 0) {
    console.log("\n");
    console.log("-------------------------------------------------------");
    console.log("*************** Liste des contacts ********************");
    console.log("-------------------------------------------------------");

    contacts.forEach((contactItem, contactIndex) => {
      console.log(
        `| ${contactIndex + 1} | ${contactItem.name} | ${contactItem.phone} |`
      );
    });

    console.log("-------------------------------------------------------");
  } else {
    console.log("\nAucun contact trouvé !");
  }
  userInterface();
}

/**
 * Recherche d'un contact
 * Maliki = maliki
 * [4, 5, 1, 69]
 */
function searchContact() {
  rlApp.question(
    "\nSaisissez le nom du contact a rechercher : ",
    (searchValue) => {
      const contact = contacts.find(
        (elt) => elt.name.toLowerCase() === searchValue.toLowerCase()
      );
      if (contact) {
        console.log("\n");
        console.log("-------------------------------------------------------");
        console.log("***************** Contact trouvé **********************");
        console.log("-------------------------------------------------------");
        console.log(`Nom             : ${contact.name}`);
        console.log(`N° de téléphone : ${contact.phone}`);
        console.log("-------------------------------------------------------");
      } else {
        console.log("\nLe contact que vous recherché n'existe pas !");
      }

      userInterface();
    }
  );
}

/**
 * Pour quitter l'application
 */
function exitApp() {
  console.log("\nMerci d'avoir utilisé l'application, Au revoir !\n");
  rlApp.close();
}

/**
 * le menu de l'app
 */
function userInterface() {
  console.log(
    "\nChoisissez une option en saisissant le chiffre correspondant :"
  );
  console.log("1 - Ajouter un contact");
  console.log("2 - Afficher tous les contacts");
  console.log("3 - Rechercher un contact");
  console.log("4 - Quitter l'application");

  rlApp.question("\nSaisissez votre choix : ", (choix) => {
    // console.log("choix de l'utilisateur : " + choix);
    switch (choix) {
      case "1":
        addContact();
        break;

      case "2":
        showContacts();
        break;

      case "3":
        searchContact();
        break;

      case "4":
        exitApp();
        break;

      default:
        console.log("\nOption invalide, veuillez choisir une option valide !");
        userInterface();
    }
  });
}

userInterface();
