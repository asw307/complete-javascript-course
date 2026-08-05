const ICONS = {
  ring: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="38" r="18" stroke="#1c1a17" stroke-width="3"/>
    <path d="M32 20 L24 8 H40 L32 20Z" fill="#1c1a17"/>
  </svg>`,
  necklace: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12c0 16 10 26 24 26s24-10 24-26" stroke="#1c1a17" stroke-width="3"/>
    <circle cx="32" cy="42" r="8" fill="#1c1a17"/>
  </svg>`,
  earrings: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="14" r="5" stroke="#1c1a17" stroke-width="3"/>
    <path d="M20 19 L20 34" stroke="#1c1a17" stroke-width="3"/>
    <circle cx="20" cy="40" r="6" fill="#1c1a17"/>
    <circle cx="44" cy="14" r="5" stroke="#1c1a17" stroke-width="3"/>
    <path d="M44 19 L44 34" stroke="#1c1a17" stroke-width="3"/>
    <circle cx="44" cy="40" r="6" fill="#1c1a17"/>
  </svg>`,
  bracelet: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="32" rx="22" ry="14" stroke="#1c1a17" stroke-width="3"/>
    <circle cx="10" cy="32" r="3" fill="#1c1a17"/>
    <circle cx="54" cy="32" r="3" fill="#1c1a17"/>
  </svg>`,
};

function productIcon(product) {
  return ICONS[product.icon] || "";
}
