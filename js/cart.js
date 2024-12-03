class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    addItem(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            this.items.push(product);
            this.total += product.price;
            this.updateCartCount();
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = this.items.length;
    }
}

const cart = new Cart();