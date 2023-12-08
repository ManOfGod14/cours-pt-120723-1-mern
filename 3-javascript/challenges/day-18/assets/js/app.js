import * as helpers from "./helpers.js";

// etat du compteur du panier
helpers.countShoppinCartElementUpdateBadge();

// const testElt = document.createElement('div');
// testElt.classList.add("col", "mb-5");
// testElt.innerHTML = "<span>Hello</span>";
// console.log(testElt);

// generate product list
const productListContainer = document.querySelector('#productListId');
function generateProductList(productData) {
    productData.forEach(product => {
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
                            ${helpers.productNoteStars(product.note)}
                        </div>

                        ${product.discount ? `<span class="text-muted text-decoration-line-through">${helpers.formatPrice(product.price)}</span>` : ``}
                        <span>${helpers.formatPrice(helpers.calculateDiscountedPrice(product.price, product.discount))}</span>
                    </div>
                </div>

                ${product.hasCartBtn ?
                `<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a data-product-id="${product.id}" class="btn btn-outline-dark btn-sm mt-auto">
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
generateProductList(helpers.products);

// fonction pour ajouter un article dans le panier
productListContainer.addEventListener('click', addToCart);
function addToCart(evt) {
    evt.preventDefault(); // permet de supprimer l'evement par défaut d'un élement html

    const dataProductIdValue = parseInt(evt.target.getAttribute('data-product-id'));
    if(dataProductIdValue) {
        const selectedProduct = helpers.products.find(product => product.id === dataProductIdValue);
        // console.log(selectedProduct);

        // ajouter un article au panier
        helpers.addCartToLocalStorage(selectedProduct);

        // modifier l'état du compeur du panier
        helpers.countShoppinCartElementUpdateBadge();
    }

    evt.target.blur();
}

