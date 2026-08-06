/* Monoline SVG icons, one per tool. Referenced by the `icon` key in TOOLS.
 * All use currentColor so the tool's accent colour flows through from CSS. */

const ICONS = {
  // Stacked contribution bars — marketing mix modeling
  mmm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M3 21h18" />
    <rect x="5" y="13" width="3.5" height="5" rx="0.6" />
    <rect x="5" y="9" width="3.5" height="4" rx="0.6" opacity="0.5" />
    <rect x="10.25" y="10" width="3.5" height="8" rx="0.6" />
    <rect x="10.25" y="5" width="3.5" height="5" rx="0.6" opacity="0.5" />
    <rect x="15.5" y="14" width="3.5" height="4" rx="0.6" />
    <rect x="15.5" y="8" width="3.5" height="6" rx="0.6" opacity="0.5" />
  </svg>`,

  // Magnifier over a chart — analytics audit
  audit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M3 20V5" />
    <path d="M3 20h16" />
    <path d="M6.5 16l3.5-4 2.5 2.5" opacity="0.5" />
    <circle cx="15.5" cy="9.5" r="4.5" />
    <path d="M18.8 12.8L22 16" />
  </svg>`,

  // Database with a cycle arrow — scheduled SQL
  sql: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <ellipse cx="9" cy="5.5" rx="6" ry="2.5" />
    <path d="M3 5.5v6c0 1.38 2.69 2.5 6 2.5" />
    <path d="M3 11.5v6c0 1.38 2.69 2.5 6 2.5 .6 0 1.2-.04 1.75-.11" opacity="0.5" />
    <path d="M15 5.5v4" opacity="0.5" />
    <path d="M20.5 17a4 4 0 1 1-1.4-3.05" />
    <path d="M19.5 10.5V14h-3.5" />
  </svg>`,

  // Answer bubble with sparkle — AEO / GEO
  aeo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M20 13.5c0 3.31-3.58 6-8 6a9.8 9.8 0 0 1-2.6-.34L4.5 21l1.2-3.2A6.9 6.9 0 0 1 4 13.5c0-3.31 3.58-6 8-6s8 2.69 8 6z" />
    <path d="M9 12.5h6" opacity="0.5" />
    <path d="M9 15.5h3.5" opacity="0.5" />
    <path d="M17.5 2l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
  </svg>`,

  // Line chart with projected dashed segment — forecasting
  forecast: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M3 20V4" />
    <path d="M3 20h18" />
    <path d="M6 15.5l3.5-4 3 2.5 2-3" />
    <path d="M14.5 11l3 4.5" stroke-dasharray="2.5 2.5" opacity="0.75" />
    <path d="M17.5 15.5l3-6" stroke-dasharray="2.5 2.5" opacity="0.75" />
    <circle cx="20.5" cy="9.5" r="1.4" fill="currentColor" stroke="none" />
  </svg>`,
};

function toolIcon(tool) {
  return ICONS[tool.icon] || "";
}
