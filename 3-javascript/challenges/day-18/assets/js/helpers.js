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
export function calculateDiscountedPrice(price, discount) {
    if(discount !== null && discount > 0 && discount < 100) {
        const discountAmount = price * (discount / 100);
        return price - discountAmount;
    } else {
        return price;
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
export function setShoppingCartInCocalStorage(myCart) {
    localStorage.setItem('myShoppingCart', JSON.stringify(myCart));
}

// get shopping cart in localStorage
export function getShoppingCartInCocalStorage() {
    let myCart = localStorage.getItem('myShoppingCart');

    if(!myCart) {
        myCart = [];
    } else {
        myCart = JSON.parse(myCart);
    }

    return myCart;
}

// fonction pour ajouter un element dans le localStorage
export function addCartToLocalStorage(selectedProduct) {
    // vérifier si le panier existe dajà dans la localStorage
    let monPanier = getShoppingCartInCocalStorage();

    // ajouter un article au panier
    const existingProductIndex = monPanier.findIndex(panier => panier.id === selectedProduct.id);
    if(existingProductIndex !== -1) {
        monPanier[existingProductIndex] = {
            id: selectedProduct.id,
            img: selectedProduct.img,
            name: selectedProduct.name,
            price: selectedProduct.price,
            discount: selectedProduct.discount,
            quantity: monPanier[existingProductIndex].quantity + 1
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
    setShoppingCartInCocalStorage(monPanier);
}

// 
export function countShoppinCartElementUpdateBadge() {
    let monPanier = getShoppingCartInCocalStorage();
    const cartBadegIdElt = document.querySelector("#cartBadgeId");
    cartBadegIdElt.innerText = monPanier.length;
}