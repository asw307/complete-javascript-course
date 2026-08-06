/* Renders the tool grid on the home page from TOOLS in tools-data.js. */

function draftBadge(tool) {
  if (!SHOW_DRAFT_BADGES || !tool.draft) return "";
  return `<span class="draft-badge">Draft copy</span>`;
}

function renderToolCard(tool) {
  return `
    <a class="tool-card" href="tool.html?tool=${tool.slug}"
       style="--card-accent:${tool.accent}">
      ${draftBadge(tool)}
      <span class="tool-icon">${toolIcon(tool)}</span>
      <span class="tool-category">${tool.category}</span>
      <h3>${tool.name}</h3>
      <p class="tagline">${tool.tagline}</p>
      <span class="tool-link">
        Learn more
        <span class="arrow" aria-hidden="true">&rarr;</span>
      </span>
    </a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("tool-grid");
  if (grid) {
    grid.innerHTML = TOOLS.map(renderToolCard).join("");
  }

  const count = document.getElementById("stat-count");
  if (count) count.textContent = TOOLS.length;

  const categories = document.getElementById("stat-categories");
  if (categories) {
    categories.textContent = new Set(TOOLS.map((t) => t.category)).size;
  }
});
