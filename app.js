let cart = [];

function addToCart(id, price) {
    let item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

function updateQuantity(id, change) {
    let item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
    }
    updateCart();
    displayCart();
}
