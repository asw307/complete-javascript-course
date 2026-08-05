function renderProductCard(product) {
  return `
    <div class="card">
      <div class="card-media" style="background:${product.gradient}">
        ${productIcon(product)}
      </div>
      <div class="card-body">
        <span class="card-category">${product.category}</span>
        <h3>${product.name}</h3>
        <span class="card-price">${formatPrice(product.price)}</span>
        <button class="btn btn-block" data-add="${product.id}">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

function attachAddToCartHandlers(root) {
  root.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.add, 1);
      const original = btn.textContent;
      btn.textContent = "Added ✓";
      setTimeout(() => (btn.textContent = original), 1200);
    });
  });
}
