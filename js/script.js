// TEXTO CAMBIANTE
document.addEventListener("DOMContentLoaded", function() {
    const textos = ["😜", "😉", "😁"];
    let indice = 0;

    const elementoTexto = document.getElementById("textoCambiante");

    setInterval(function() {
      elementoTexto.textContent = textos[indice];
      indice = (indice + 1) % textos.length;
    }, 1500);
  });

//

// TIENDA
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');
  const checkoutButton = document.querySelector('.checkout');
  const viewCartButton = document.querySelector('.view-cart');
  let total = 0;
  let cart = [];

  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const product = button.getAttribute('data-product');
          const price = parseFloat(button.getAttribute('data-price'));
          total += price;
          cart.push({ product, price });
          updateCart();
          showNotification(product);
      });
  });

  viewCartButton.addEventListener('click', () => {
      updateCart();
  });

  function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product}: $${item.price.toFixed(2)}`;
        const button = document.createElement('button');
        button.textContent = 'X';
        button.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2'); // Agregar clases de Bootstrap
        button.addEventListener('click', () => {
            total -= item.price;
            cart.splice(index, 1);
            updateCart();
            updateBadge();
        });
        li.appendChild(button);
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toFixed(2);
    updateBadge();
}

function updateBadge() {
    const badge = document.querySelector('.cart-badge');
    badge.textContent = cart.length.toString();
}

});