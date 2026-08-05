# Aurelia — Fine Jewellery (Demo Store)

A static demo jewellery storefront built with plain HTML, CSS, and JavaScript — no build step, no backend, no real payment processing.

## Pages

- **Home** (`jewellery-store/index.html`) — hero, featured pieces, category links
- **Shop** (`jewellery-store/shop.html`) — full catalog, filterable by category (Rings, Necklaces, Earrings, Bracelets)
- **Cart** (`jewellery-store/cart.html`) — quantity editing, removal, running total, persisted via `localStorage`
- **Checkout** (`jewellery-store/checkout.html`) — shipping/card form (demo only) that submits to an order confirmation and clears the cart

## Running locally

```bash
cd jewellery-store
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Pushes to `master` that touch `jewellery-store/**` trigger `.github/workflows/deploy-pages.yml`, which publishes `jewellery-store/` to GitHub Pages.
