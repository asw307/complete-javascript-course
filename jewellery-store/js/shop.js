function renderShop(activeCategory) {
  const grid = document.getElementById("shop-grid");
  const items = activeCategory
    ? PRODUCTS.filter((p) => p.category === activeCategory)
    : PRODUCTS;
  grid.innerHTML = items.map(renderProductCard).join("");
  attachAddToCartHandlers(grid);
}

function renderFilters(activeCategory) {
  const el = document.getElementById("category-filters");
  const categories = [...new Set(PRODUCTS.map((p) => p.category))];
  const pill = (label, value) => `
    <button class="category-pill ${
      activeCategory === value ? "active" : ""
    }" data-filter="${value || ""}">${label}</button>
  `;
  el.innerHTML = pill("All", "") + categories.map((c) => pill(c, c)).join("");

  el.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.filter;
      const url = new URL(window.location);
      if (value) {
        url.searchParams.set("category", value);
      } else {
        url.searchParams.delete("category");
      }
      window.history.pushState({}, "", url);
      renderFilters(value || null);
      renderShop(value || null);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  renderFilters(category);
  renderShop(category);
});
