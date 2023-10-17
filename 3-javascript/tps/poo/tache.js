// Classe  Utilisateur
class Utilisateur {
    constructor(nom, email) {
        this.nom = nom;
        this.email = email;
    }

    afficherInfo() {
        return `Nom : ${this.nom}, Email : ${this.email}`;
    }
}

// Classe Tache
class Tache {
    constructor(titre, description, dateLimite) {
        this.titre = titre;
        this.description = description;
        this.dateLimite = dateLimite;
        this.assigneA = null;
    }
}

// Gestionnaire de tâches
class GestionnaireTaches {
    constructor() {
        this.utilisateurs = [];
        this.taches = [];
    }

    ajouterUtilisateur(utilisateur) {
        this.utilisateurs.push(utilisateur);
    }

    creerTache(titre, description, dateLimite) {
        const nouvelleTache = new Tache(titre, description, dateLimite);
        this.taches.push(nouvelleTache);
        return nouvelleTache;
    }

    attribuerTache(tache, utilisateur) {
        tache.assigneA = utilisateur;
    }

    afficherTachesUtilisateur(utilisateur) {
        const tachesUtilisateur = this.taches.filter(tache => tache.assigneA === utilisateur)
        return tachesUtilisateur;
    }
}

console.log("************** Test exercice 2 **************");

const gestionnaire = new GestionnaireTaches();
console.log("***** Avant creation des users et des taches *****");
console.log("Tableau des utilisateurs : "+ JSON.stringify(gestionnaire.utilisateurs));
console.log("Tableau des taches : "+ JSON.stringify(gestionnaire.taches));

// instanciation de 2 utilisateurs
const user1 = new Utilisateur("Maliki", "maliki@gmail.com");
const user2 = new Utilisateur("Bob", "bob@gmail.com");

// ajout des utilisateurs instancier
gestionnaire.ajouterUtilisateur(user1);
gestionnaire.ajouterUtilisateur(user2);
console.log("***** Après ajout des users *****");
console.log("Tableau des utilisateurs : "+ JSON.stringify(gestionnaire.utilisateurs));

// creation des taches
const tache1 = gestionnaire.creerTache("Faire des courses", "Acheter des légumes", "2023-10-18");
const tache2 = gestionnaire.creerTache("Réviser pour l'examen", "Préparer le sujet", "2023-10-19");
const tache3 = gestionnaire.creerTache("Tache 3", "Desc tahce 3", "2023-10-20");
const tache4 = gestionnaire.creerTache("Tache 4", "Desc tahce 4", "2023-10-22");
const tache5 = gestionnaire.creerTache("Tache 5", "Desc tahce 5", "2023-10-22");
console.log("***** Après ajout des taches *****");
console.log(tache1);
console.log("Tableau des taches : "+ JSON.stringify(gestionnaire.taches));

// attribution des taches aux utilisateurs
gestionnaire.attribuerTache(tache1, user1);
gestionnaire.attribuerTache(tache2, user2);
gestionnaire.attribuerTache(tache3, user1);
gestionnaire.attribuerTache(tache4, user1);
gestionnaire.attribuerTache(tache5, user2);
console.log("***** Après attribution des taches aux users *****");
console.log("Tableau des taches : "+ JSON.stringify(gestionnaire.taches));

console.log("***** Affichages des taches des utilisateurs *****");

const tachesUser1 = gestionnaire.afficherTachesUtilisateur(user1);
console.log("Tâches de Maliki : ", tachesUser1);

const tachesUser2 = gestionnaire.afficherTachesUtilisateur(user2);
console.log("Tâches de Bob : ", tachesUser2);



