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
// testElt.classList.add("col.mb-5");
// testElt.innerHTML = "<span>Hello</span>";
// console.log(testElt);

// generate product list
function generateProductList() {
    const productListContainer = document.querySelector('#productListId');
    
    products.forEach(product => {
        const productItem = document.createElement('div');
    });
}