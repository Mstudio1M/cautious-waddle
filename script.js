// Додавання до кошика
let cartItems = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `<p>${item.name}</p><p>${item.price} грн</p>`;
        cartItemsDiv.appendChild(itemDiv);
    });

    document.getElementById('total-price').textContent = `Загальна сума: ${totalPrice} грн`;
}

// Показати або сховати кошик
function toggleCart() {
    const cart = document.querySelector('.cart');
    cart.style.display = (cart.style.display === 'block') ? 'none' : 'block';
}

// Фільтрація товарів за категорією
function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Оформлення замовлення
function checkout() {
    if (cartItems.length > 0) {
        alert('Дякуємо за покупку!');
        cartItems = [];
        totalPrice = 0;
        updateCart();
        toggleCart();
    } else {
        alert('Кошик порожній!');
    }
}