const products = [
    {
        id: 1,
        name: "Premium Whey Protein",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&q=80",
        category: "Protein"
    },
    {
        id: 2,
        name: "Creatine Monohydrate",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=500&q=80",
        category: "Supplements"
    },
    {
        id: 3,
        name: "Pre-Workout Energy",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1615196534055-7aa534f6a1a3?w=500&q=80",
        category: "Pre-Workout"
    },
    {
        id: 4,
        name: "BCAA Complex",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&q=80",
        category: "Amino Acids"
    }
];

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
}

function loadProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
}