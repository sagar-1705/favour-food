let cart = [];
const cartSidebar = document.getElementById('cart-sidebar');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');

// Toggle Cart Sidebar
cartIcon.addEventListener('click', () => cartSidebar.classList.add('active'));
closeCart.addEventListener('click', () => cartSidebar.classList.remove('active'));

// Add to Cart Functionality
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.parentElement;
        const name = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('p').innerText.replace('$', ''));

        addItemToCart(name, price);
        cartSidebar.classList.add('active'); // Open cart when item added
    });
});

function addItemToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartTotalElement.innerText = total.toFixed(2);
    cartCountElement.innerText = cart.length;
}