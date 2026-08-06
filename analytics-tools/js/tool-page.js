/* Renders a tool detail page from ?tool=<slug>, reading TOOLS in tools-data.js. */

const CHECK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M20 6L9 17l-5-5" />
</svg>`;

function detailDraftBadge(tool) {
  if (!SHOW_DRAFT_BADGES || !tool.draft) return "";
  return `<span class="draft-badge">Draft copy &mdash; pending final description</span>`;
}

function renderNotFound() {
  return `
    <div class="container empty-state">
      <h1>Tool not found</h1>
      <p>That tool doesn't exist, or the link is out of date.</p>
      <a class="btn" href="index.html#tools">View all tools</a>
    </div>
  `;
}

function renderOtherTools(current) {
  const others = TOOLS.filter((t) => t.slug !== current.slug);
  if (others.length === 0) return "";
  return `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>Other tools</h2>
        </div>
        <div class="other-tools">
          ${others
            .map(
              (tool) => `
            <a class="other-tool" href="tool.html?tool=${tool.slug}"
               style="--card-accent:${tool.accent}">
              <span class="tool-icon">${toolIcon(tool)}</span>
              ${tool.name}
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderTool(tool) {
  const fullName =
    tool.fullName && tool.fullName !== tool.name
      ? `<div class="full-name">${tool.fullName}</div>`
      : "";

  return `
    <section class="tool-hero" style="--card-accent:${tool.accent}">
      <div class="container">
        <a class="back-link" href="index.html#tools">
          <span aria-hidden="true">&larr;</span> All tools
        </a>
        <div class="tool-hero-top">
          <span class="tool-icon">${toolIcon(tool)}</span>
          <div>
            <span class="tool-category">${tool.category}</span>
            <h1>${tool.name}</h1>
            ${fullName}
          </div>
        </div>
        <p class="tagline">${tool.tagline}</p>
        <div style="margin-top:1.25rem">${detailDraftBadge(tool)}</div>
      </div>
    </section>

    <section class="section" style="--card-accent:${tool.accent}">
      <div class="container">
        <div class="section-head">
          <h2>Overview</h2>
        </div>
        <div class="overview">
          ${tool.overview.map((p) => `<p>${p}</p>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" style="--card-accent:${tool.accent}">
      <div class="container">
        <div class="section-head">
          <h2>What it does</h2>
        </div>
        <div class="detail-grid">
          ${tool.capabilities
            .map(
              (c) => `
            <div class="capability" style="--card-accent:${tool.accent}">
              <h3>${c.title}</h3>
              <p>${c.detail}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" style="--card-accent:${tool.accent}">
      <div class="container">
        <div class="section-head">
          <h2>How it works</h2>
        </div>
        <div class="steps">
          ${tool.howItWorks
            .map(
              (s) => `
            <div class="step" style="--card-accent:${tool.accent}">
              <h3>${s.title}</h3>
              <p>${s.detail}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" style="--card-accent:${tool.accent}">
      <div class="container">
        <div class="section-head">
          <h2>What you get</h2>
        </div>
        <ul class="output-list">
          ${tool.outputs
            .map(
              (o) => `
            <li style="--card-accent:${tool.accent}">${CHECK_ICON}<span>${o}</span></li>
          `
            )
            .join("")}
        </ul>
      </div>
    </section>

    ${renderOtherTools(tool)}
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("tool-content");
  const slug = new URLSearchParams(window.location.search).get("tool");
  const tool = slug ? getToolBySlug(slug) : null;

  if (!tool) {
    root.innerHTML = renderNotFound();
    document.title = "Tool not found — Analytics Tools";
    return;
  }

  root.innerHTML = renderTool(tool);
  document.title = `${tool.name} — Analytics Tools`;
});
