// classe de base Vehicule
class Vehicule {
    constructor(marque, annee) {
        this.marque = marque;
        this.annee = annee;
    }

    decrire() {
        return `Un véhicule de marque ${this.marque}, année ${this.annee}`;
    }
}

// sous-class Voiture
class Voiture extends Vehicule {
    constructor(marque, annee, nombreDePortes) {
        super(marque, annee);
        this.nombreDePortes = nombreDePortes;
    }

    decrire() {
        return `${super.decrire()} avec ${this.nombreDePortes} ports.`;
    }

    customDecrire() {
        return `Une voiture de marque ${this.marque}, année ${this.annee} avec ${this.nombreDePortes} ports.`;
    }
}

// sous-class Velo
class Velo extends Vehicule {
    constructor(marque, annee, typeDeVelo) {
        super(marque, annee);
        this.typeDeVelo = typeDeVelo;
    }

    decrire() {
        return `${super.decrire()} de type ${this.typeDeVelo}.`;
    }

    customDecrire() {
        return `Un vélo de marque ${this.marque}, année ${this.annee} de type ${this.typeDeVelo}.`;
    }
}

console.log("************** Test exercice 1 **************");

console.log("************** Voitre **************");
const maVoiture = new Voiture("Toyota", 2020, 4);
console.log(maVoiture.decrire());
console.log(maVoiture.customDecrire());

console.log("************** Vélo **************");
const monVelo = new Velo("Trek", 2022, "VTT");
console.log(monVelo.decrire());
console.log(monVelo.customDecrire());