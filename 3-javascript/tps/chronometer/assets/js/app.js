/**
 * chrono js code
 */
// les variables
let timerId; // va stocker l'id du timer

let heuresId = document.querySelector('#heuresId');
let minutesId = document.querySelector('#minutesId');
let secondesId = document.querySelector('#secondesId');
let msecondesId = document.querySelector('#msecondesId');

let startId = document.querySelector('#startId');
let stopId = document.querySelector('#stopId');
let resetId = document.querySelector('#resetId');

let heures = 0;
let minutes = 0;
let secondes = 0;
let msecondes = 0;

// les fonctions 
function numberFormat(nbr) {
    return nbr.toString().padStart(2, '0');
}

// start chrono
startId.addEventListener('click', startChrono);
function startChrono() {
    timerId = setInterval(() => {
        // affichage du minuteur
        heuresId.innerHTML = numberFormat(heures);
        minutesId.innerHTML = numberFormat(minutes);
        secondesId.innerHTML = numberFormat(secondes);
        msecondesId.innerHTML = msecondes;

        msecondes += 1;
        if(msecondes >= 10) {
            msecondes = 0;
            secondes += 1;
        }

        if(secondes >= 60) {
            secondes = 0;
            minutes += 1;
        }

        if(minutes >= 60) {
            minutes = 0;
            heures += 1;
        }
    }, 100); // millisecondes

    // désactiver le bouton start en ajouter l'attribut "disabled"
    startId.setAttribute('disabled', '');
}

// stop chrono
stopId.addEventListener('click', stopChrono);
function stopChrono() {
    clearInterval(timerId);

    // supprimer l'attribut "disabled" pour avoir la possibilité de relancer le minuteur
    startId.removeAttribute('disabled');
}

// reset chrono
resetId.addEventListener('click', resetChrono);
function resetChrono() {
    // remettre à zéro les varibles du minuteur
    heures = 0;
    minutes = 0;
    secondes = 0;
    msecondes = 0;

    clearInterval(timerId);

    heuresId.innerHTML = '00';
    minutesId.innerHTML = '00';
    secondesId.innerHTML = '00';
    msecondesId.innerHTML = '00';

    startId.removeAttribute('disabled');
}