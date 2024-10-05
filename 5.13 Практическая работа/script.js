function addToCart(productName) {
    const cart = document.getElementById('cart');
    const cartItem = document.createElement('li');
    const textNode = document.createTextNode(productName);
    
    cartItem.appendChild(textNode);
    cart.appendChild(cartItem);
}
