// product list
export const products = [
    {
        "id": 1,
        "name": "Fancy Product",
        "price": 40.00,
        "discount": 8,
        "img": "https://picsum.photos/451/301",
        "note": 0, 
        "hasCartBtn": false,
        "hasSaleBadge": false
    },
    {
        "id": 2,
        "name": "Special item 2",
        "price": 18.00,
        "discount": 0,
        "img": "https://picsum.photos/452/302",
        "note": 2, 
        "hasCartBtn": true,
        "hasSaleBadge": true
    },
    {
        "id": 3,
        "name": "Special item 3",
        "price": 22.00,
        "discount": 10,
        "img": "https://picsum.photos/453/303",
        "note": 1, 
        "hasCartBtn": true,
        "hasSaleBadge": true
    },
    {
        "id": 4,
        "name": "Special item 4",
        "price": 28.00,
        "discount": 0,
        "img": "https://picsum.photos/454/304",
        "note": 5, 
        "hasCartBtn": true,
        "hasSaleBadge": true
    },
    {
        "id": 5,
        "name": "Special item 5",
        "price": 42.00,
        "discount": 0,
        "img": "https://picsum.photos/455/305",
        "note": 4, 
        "hasCartBtn": true,
        "hasSaleBadge": true
    },
    {
        "id": 6,
        "name": "Special item 6",
        "price": 34.00,
        "discount": 0,
        "img": "https://picsum.photos/456/306",
        "note": 3, 
        "hasCartBtn": false,
        "hasSaleBadge": false
    },
    {
        "id": 7,
        "name": "Special item 7",
        "price": 85.00,
        "discount": 10,
        "img": "https://picsum.photos/457/307",
        "note": 2, 
        "hasCartBtn": false,
        "hasSaleBadge": false
    },
    {
        "id": 8,
        "name": "Special item 8",
        "price": 61.00,
        "discount": 15,
        "img": "https://picsum.photos/458/308",
        "note": 2, 
        "hasCartBtn": true,
        "hasSaleBadge": true
    }
];

// formatage du prix avec la devise
export function formatPrice(price) {
    return price.toLocaleString('fr-FR', {style:'currency', currency: 'MAD'});
}

// fonction pour caculer la remise en pourcentage (le prix remisé)
export function calculateDiscountedPrice(price, discount, addCurrency = false) {
    if(discount !== null && discount > 0 && discount < 100) {
        const discountAmount = price * (discount / 100);
        const amount = price - discountAmount;
        return addCurrency ? formatPrice(amount) : amount;
    } else {
        return addCurrency ? formatPrice(price) : price;
    }
}

// product note starts
// soit note = 5, ou 4, ... 1, 0
// on sait qu'on a aux max 5 etoiles
// <div class="bi bi-star-fill"></div>
// <div class="bi bi-star"></div>
export function productNoteStars(note) {
    let divStars = ``;
    const emptyStars = 5 - note; // 5 - 2 = 3

    for(let i = 0; i < note; i++) {
        divStars += `<div class="bi bi-star-fill"></div>`;
    }

    for(let j = 0; j < emptyStars; j++) {
        divStars += `<div class="bi bi-star"></div>`;
    }
    
    return divStars;
}

// set shopping cart in localStorage
export function setShoppingCartInLocalStorage(myCart) {
    localStorage.setItem('myShoppingCart', JSON.stringify(myCart));
}

// get shopping cart in localStorage
export function getShoppingCartInLocalStorage() {
    let myCart = localStorage.getItem('myShoppingCart');

    if(!myCart) {
        myCart = [];
    } else {
        myCart = JSON.parse(myCart);
    }

    return myCart;
}

// supprimer un element dans le panier du localStorage
export function removeShoppingCartItemInLocalStorage(cartId) {
    let myCart = getShoppingCartInLocalStorage();
    if(myCart && myCart.length > 0) {
        myCart = myCart.filter(cart => cart.id !== parseInt(cartId));
        setShoppingCartInLocalStorage(myCart);
    }
}

// fonction pour ajouter un element dans le localStorage
export function addCartToLocalStorage(selectedProduct, newQuantity = 0) {
    // vérifier si le panier existe dajà dans la localStorage
    let monPanier = getShoppingCartInLocalStorage();

    // ajouter un article au panier
    const existingProductIndex = monPanier.findIndex(panier => panier.id === selectedProduct.id);
    if(existingProductIndex !== -1) {
        const quantity = (newQuantity !== 0) ? newQuantity : monPanier[existingProductIndex].quantity + 1
        monPanier[existingProductIndex] = {
            id: selectedProduct.id,
            img: selectedProduct.img,
            name: selectedProduct.name,
            price: selectedProduct.price,
            discount: selectedProduct.discount,
            quantity: quantity
        };
    } else {
        monPanier.push({
            id: selectedProduct.id,
            img: selectedProduct.img,
            name: selectedProduct.name,
            price: selectedProduct.price,
            discount: selectedProduct.discount,
            quantity: 1
        });
    }

    // mettre à jour le panier
    setShoppingCartInLocalStorage(monPanier);
}

// fonction pour mettre à jour le compteur du panier
export function countShoppinCartElementUpdateBadge() {
    let monPanier = getShoppingCartInLocalStorage();
    const cartBadegIdElt = document.querySelector("#cartBadgeId");
    cartBadegIdElt.innerText = monPanier.length;
}

// fonction permettant de d'ajuster la quantité d'un article
export function adjustQuantity(elementId, cartItemId, actionValue) {
    let myCart = getShoppingCartInLocalStorage();
    const cartItem = myCart.find(cart => cart.id === parseInt(cartItemId));
    if(cartItem) {
        let quantity = parseInt(cartItem.quantity) + actionValue;
        quantity = (quantity > 0) ? quantity : 1;
        if(actionValue !== 0) {
            addCartToLocalStorage(cartItem, quantity);
        }
        const cartItemQuantityIdElt = document.querySelector('#'+elementId);
        cartItemQuantityIdElt.innerText = quantity;
    }
}

// fonction permettant de calculer le prix total d'un article
export function getShoppingCartItemTotalPrice(cartItem, addCurrency = false) {
    let totalPrice = 0;
    if(cartItem) {
        totalPrice = parseInt(cartItem.quantity) * calculateDiscountedPrice(parseFloat(cartItem.price), parseInt(cartItem.discount));
    }
    return addCurrency ? formatPrice(totalPrice) : totalPrice;
}

// fonction permettant de mettre à jour le prix total d'un article
export function updateShoppingCartItemTotalPrice(elementId, cartItemId, addCurrency = true) {
    let myCart = getShoppingCartInLocalStorage();
    const cartItem = myCart.find(cart => cart.id === parseInt(cartItemId));
    let totalPrice = getShoppingCartItemTotalPrice(cartItem, addCurrency);
    const totalPriceElt = document.querySelector('#'+elementId);
    totalPriceElt.innerText = totalPrice;
}

// fonction permettant de calculer le montant total
export function getShoppingCartTotalAmount(myCart, addCurrency = false) {
    let totalAmount = 0;
    if(myCart.length > 0) {
        myCart.map(cart => { totalAmount += getShoppingCartItemTotalPrice(cart); });
    }
    return addCurrency ? formatPrice(totalAmount) : totalAmount;
}

// fonction permettant de mettre à jour le montant total
export function updateShoppingCartTotalAmount(elementId, addCurrency = true) {
    let myCart = getShoppingCartInLocalStorage();
    let totalAmount = getShoppingCartTotalAmount(myCart, addCurrency);
    const totalAmountElt = document.querySelector('#'+elementId);
    totalAmountElt.innerText = totalAmount;
}

// fontion permettant de supprimer un element dans le DOM
export function removeElementByIdInDOM(elementId, parentId) {
    // récupération du parent existe
    const parentElement = document.querySelector('#'+parentId);
    if(parentElement) { // si le parent existe
        // console.log(parentElement);
        // récupération de l'enfant à supprimer
        const  elementToRemove = document.querySelector('#'+elementId);
        if(elementToRemove) { // si l'enfant existe
            parentElement.removeChild(elementToRemove);
            return true;
        } else {
            console.log("L'élément enfant à supprimer n'existe pas !");
            return false;
        }
    } else {
        console.log("L'élément parent n'existe pas !");
        return false;
    }
}