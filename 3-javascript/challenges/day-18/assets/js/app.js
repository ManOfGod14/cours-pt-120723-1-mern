// product list
const products = [
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

// const testElt = document.createElement('div');
// testElt.classList.add("col", "mb-5");
// testElt.innerHTML = "<span>Hello</span>";
// console.log(testElt);

// generate product list
function generateProductList() {
    const productListContainer = document.querySelector('#productListId');
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('col', 'mb-5');
        productItem.innerHTML = `
            <div class="card h-100">
                ${product.hasSaleBadge ? `<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem;">Sale</div>` : ``}

                <img class="card-img-top" src="${product.img}" alt="">

                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${product.name}</h5>

                        <div class="d-flex justify-content-center text-warning mb-2">
                            ${productNoteStars(product.note)}
                        </div>

                        ${product.discount ? `<span class="text-muted text-decoration-line-through">${formatPrice(product.price)}</span>` : ``}
                        <span>${formatPrice(calculateDiscountedPrice(product.price, product.discount))}</span>
                    </div>
                </div>

                ${product.hasCartBtn ?
                `<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark btn-sm mt-auto" href="#">
                            Add to cart
                        </a>
                    </div>
                </div>`
                : `` }
            </div>
        `;
        productListContainer.appendChild(productItem);
    });
}

// appel de fonction
generateProductList();

// formatage du prix avec la devise
function formatPrice(price) {
    return price.toLocaleString('fr-FR', {style:'currency', currency: 'MAD'});
}

// fonction pour caculer la remise en pourcentage (le prix remisé)
function calculateDiscountedPrice(price, discount) {
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
function productNoteStars(note) {
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

