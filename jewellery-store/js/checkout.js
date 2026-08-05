function renderOrderSummary() {
  const items = getCartItems();
  const total = getCartTotal();
  const rows = items
    .map(
      (item) => `
      <div class="order-summary-item">
        <span>${item.name} &times; ${item.qty}</span>
        <span>${formatPrice(item.price * item.qty)}</span>
      </div>
    `
    )
    .join("");
  return `
    <div class="order-summary">
      <h3 style="margin-top:0;">Order Summary</h3>
      ${rows}
      <div class="cart-summary-row total">
        <span>Total</span>
        <span>${formatPrice(total)}</span>
      </div>
    </div>
  `;
}

function renderCheckoutForm() {
  return `
    <form id="checkout-form">
      <h2>Checkout</h2>
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input id="fullName" required autocomplete="name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" required autocomplete="email" />
      </div>
      <div class="form-group">
        <label for="address">Shipping Address</label>
        <input id="address" required autocomplete="street-address" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="city">City</label>
          <input id="city" required autocomplete="address-level2" />
        </div>
        <div class="form-group">
          <label for="zip">Postal Code</label>
          <input id="zip" required autocomplete="postal-code" />
        </div>
      </div>
      <div class="form-group">
        <label for="cardNumber">Card Number (demo only)</label>
        <input
          id="cardNumber"
          required
          maxlength="19"
          placeholder="4242 4242 4242 4242"
        />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="expiry">Expiry</label>
          <input id="expiry" required placeholder="MM/YY" maxlength="5" />
        </div>
        <div class="form-group">
          <label for="cvc">CVC</label>
          <input id="cvc" required maxlength="4" placeholder="123" />
        </div>
      </div>
      <button type="submit" class="btn btn-block">Place Order</button>
    </form>
  `;
}

function renderConfirmation(orderNumber) {
  return `
    <div class="confirmation">
      <svg class="checkmark" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="#b8860b" stroke-width="3" />
        <path
          d="M20 33 L28 41 L44 24"
          stroke="#b8860b"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h2>Thank you for your order!</h2>
      <p>This is a demo store, so no payment was actually processed.</p>
      <p class="order-number">Order #${orderNumber}</p>
      <a class="btn" href="shop.html">Continue Shopping</a>
    </div>
  `;
}

function initCheckout() {
  const root = document.getElementById("checkout-content");
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

  root.innerHTML = `
    <div class="checkout-layout">
      <div>${renderCheckoutForm()}</div>
      <div>${renderOrderSummary()}</div>
    </div>
  `;

  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    clearCart();
    root.innerHTML = renderConfirmation(orderNumber);
  });
}

document.addEventListener("DOMContentLoaded", initCheckout);
