function testFunc1() {
    console.log(this);
}
testFunc1();

const testFunc2 = function () {
    console.log(this);
}
testFunc2();

const testFunc = {
    testFunc3: function () {
        console.log(this);
    }
}
console.log(testFunc);
testFunc.testFunc3();

// les tableaux
console.log("************** Les tableaux *******************");
const tab = [1, 3, 9, 8];
console.log(tab);

// les objets
console.log("************** Les objets *******************");
const personne = {
    prenom: "Maliki",
    nom: "TCHEROU",
    age: 31,
    direBonjour: function() {
        console.log("Bonjour "+ this.prenom +" "+ this.nom)
    }
}
console.log(personne);
personne.direBonjour();

// Les classes
console.log("************** Les classes *******************");
class Person {
    constructor(prenom, nom, age) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }

    direBonjour() {
        return "Bonjour "+ this.prenom +" "+ this.nom;
    }
}
// instanciation de classe Person ou encore instacier la classe Person
let maliki = new Person("Maliki", "TCHEROU", 31);
console.log(maliki.direBonjour());

let person = new Person("Prénom", "Nom", 25);
console.log(person.direBonjour());
console.log(person.prenom)
console.log(person.nom)
console.log(person.age)
person.age = 36;
console.log(person.age)

console.log("************** L'encapsulation *******************");
class Personne {
    // propriété définit globalement dans la classe
    // address = "";
    
    constructor(prenom, nom, age) {
        this._prenom = prenom; // par convention '_' est utilisé pour portéger des propriétés et méthodes
        this._nom = nom;
        this._age = age;
    }

    direBonjour() {
        return "Bonjour "+ this._prenom +" "+ this._nom;
    }

    getPrenom() {
        return this._prenom;
    }

    setPrenom(newPrenom) {
        this._prenom = newPrenom;
    }

    getNom() {
        return this._nom;
    }

    setNom(newNom) {
        this._nom = newNom;
    }

    getAge() {
        return this._age;
    }

    setAge(newAge) {
        if(newAge >= 0) {
            this._age = newAge;
        } else {
            alert("La valeur de l'âge ne peut pas être négatif !");
        }
    }

    // setters and getters
    get address() {
        return this.newAdress;
    }
    set address(newAdress) {
        this.newAdress = newAdress;
    }
}

const addPersonne1 = new Personne("Prénom personne 1", "Nom personne 1", 18);
// console.log(addPersonne1._prenom); // cette écriture est interdite 
console.log(addPersonne1.getPrenom());
addPersonne1.setPrenom("Maliki");
console.log(addPersonne1.getPrenom());

console.log(addPersonne1.getAge());
addPersonne1.setAge(20);
console.log(addPersonne1.getAge());
// addPersonne1.setAge(-20);

console.log(addPersonne1.address);
addPersonne1.address = 'Casa';
console.log(addPersonne1.address);

// le concept d'héritage
console.log("************** L'héritage *******************");
class Animal {
    constructor(nom) {
        this.nom = nom;
    }

    parler() {
        // return this.nom +" fait du bruit.";
        return `${this.nom} fait du bruit.`;
    }
}

class Chien extends Animal {
    constructor(nom, race) {
        super(nom);
        this.race = race;
    }

    aboyer() {
        return `${this.nom} (race : ${this.race} aboie.)`;
    }
}

// instanciation de la classe Chien
const monChien = new Chien("Loulou", "Berger allemand");
console.log(monChien.parler());
console.log(monChien.aboyer());

// rendre réellment privé les données et méthodes
class User {
    #privatePassword;

    constructor(name, email, password) {
        this.name = name;
        this._email = email;
        this.#privatePassword = password;
    }

    printName() {
        return this.name;
    }

    getEmail() {
        return this._email;
    }

    _getEmail() {
        return this._email;
    }

    getPassword() {
        return this.#privatePassword;
    }

    #getPassword2() {
        return this.#privatePassword;
    }

    getPrivatePassword() {
        return this.#getPassword2();
    }
}

class Admin extends User {
    constructor(name, email, password, manageCourse) {
        super(name, email, password);
        this.manageCourse = manageCourse;
    }

    stats() {
        return `Stats - ${this.manageCourse}`;
    }
}
const kedar = new Admin("kedar", "kedar@demo.com", 123456, "JavaScript");
console.log(kedar.printName());
console.log(kedar.name);
console.log(kedar._email); // c'est bon de faire ça, car c'est protégée
console.log(kedar.getEmail());
console.log(kedar.stats());
// console.log("Password : " + kedar.#privatePassword); // va afficher une erreur car la propriété est privée
console.log("getPassword : " + kedar.getPassword());
// console.log("getPassword2 : " + kedar.#getPassword2());  // va afficher une erreur car la méthode est privée
console.log("#getPassword2 : " + kedar.getPrivatePassword());

// polymorphisme
console.log("************** Le polymorphisme *******************");
class Animal2 {
    constructor(nom) {
        this.nom = nom;
    }

    parler() {
        return `${this.nom} fait du bruit.`;
    }
}

class Chien2 extends Animal2 {
    constructor(nom, race) {
        super(nom);
        this.race = race;
    }

    parler() {
        return `${this.nom} (race : ${this.race} aboie.)`;
    }
}

const mouton = new Animal2("Mouton");
console.log(mouton.parler());

const monChien2 = new Chien2("Tic", "Chiwawa");
console.log(monChien2.parler());


