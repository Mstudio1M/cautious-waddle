const cart = [];

function showCategory(category) {
    const content = document.getElementById('content');
    const cartButton = document.getElementById('cart-button');

    if (category === 'cart') {
        content.innerHTML = document.getElementById('cart').innerHTML;
        cartButton.style.display = 'none'; // Сховати кнопку корзини при перегляді корзини
        updateCart();
        return;
    } else {
        cartButton.style.display = 'block'; // Показати кнопку корзини
    }

    fetch(`categories/${category}.html`)
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
        });

    // Оновлення заголовка категорії
    document.getElementById('category-title').innerText = category.charAt(0).toUpperCase() + category.slice(1);
}

function addToCart(itemName, itemPrice) {
    const itemInCart = cart.find(item => item.name === itemName);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;

    cartItems.innerHTML = '';

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name} (x${item.quantity})</p>
                <p>${item.price * item.quantity} грн</p>
            </div>
        `;
    });

    document.getElementById('total-price').innerText = totalPrice + ' грн';
}