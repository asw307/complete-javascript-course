document.addEventListener("DOMContentLoaded", () => {
  const featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid) {
    const featured = PRODUCTS.slice(0, 4);
    featuredGrid.innerHTML = featured.map(renderProductCard).join("");
    attachAddToCartHandlers(featuredGrid);
  }

  const categoryLinks = document.getElementById("category-links");
  if (categoryLinks) {
    const categories = [...new Set(PRODUCTS.map((p) => p.category))];
    categoryLinks.innerHTML = categories
      .map(
        (c) =>
          `<a class="category-pill" href="shop.html?category=${encodeURIComponent(
            c
          )}">${c}</a>`
      )
      .join("");
  }
});
