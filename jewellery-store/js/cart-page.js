function renderCart() {
  const root = document.getElementById("cart-content");
  const items = getCartItems();

  if (items.length === 0) {
    root.innerHTML = `
      <div class="empty-state">
        <p>Your cart is empty.</p>
        <a class="btn" href="shop.html">Continue Shopping</a>
      </div>
    `;
    return;
  }

  const rows = items
    .map(
      (item) => `
      <tr data-row="${item.id}">
        <td>
          <div class="cart-item">
            <div class="cart-item-media" style="background:${item.gradient}">
              ${productIcon(item)}
            </div>
            <div>
              <div>${item.name}</div>
              <div class="card-category">${item.category}</div>
            </div>
          </div>
        </td>
        <td>${formatPrice(item.price)}</td>
        <td>
          <input
            class="qty-input"
            type="number"
            min="1"
            value="${item.qty}"
            data-qty="${item.id}"
          />
        </td>
        <td>${formatPrice(item.price * item.qty)}</td>
        <td>
          <button class="remove-btn" data-remove="${item.id}">Remove</button>
        </td>
      </tr>
    `
    )
    .join("");

  const total = getCartTotal();

  root.innerHTML = `
    <table class="cart-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="cart-summary">
      <div class="cart-summary-row total">
        <span>Total</span>
        <span>${formatPrice(total)}</span>
      </div>
      <a class="btn btn-block" href="checkout.html">Proceed to Checkout</a>
    </div>
  `;

  root.querySelectorAll("[data-qty]").forEach((input) => {
    input.addEventListener("change", () => {
      const qty = Math.max(1, parseInt(input.value, 10) || 1);
      setQty(input.dataset.qty, qty);
      renderCart();
    });
  });

  root.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(btn.dataset.remove);
      renderCart();
    });
  });
}

document.addEventListener("DOMContentLoaded", renderCart);
