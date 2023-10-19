/**
 * background generator JS code
 */
// const domElts = document;
// console.log(domElts);

// récupération des élements input par id
const elementBody = document.querySelector('body');
// console.log(elementBody);
// console.log(elementBody.outerHTML);

const firstColor = document.getElementById('firstColorId');
// console.log(firstColor);
// console.log(firstColor.value);

const secondColor = document.querySelector('#secondColorId');
// console.log(secondColor);
// console.log(secondColor.value);

firstColor.addEventListener('input', function(event) {
    // console.log(event);
    
    elementBody.style = `background: linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
    document.querySelector('p').innerText = elementBody.style.background;
});

secondColor.addEventListener('input', function() {
    elementBody.style = `background: linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
    document.querySelector('p').innerText = elementBody.style.background;
});