# Analytics Tools

A static site presenting five analytics tools, each with a dedicated detail page:

| Tool | Page |
| --- | --- |
| Marketing Mix Modeling (MMM) | `tool.html?tool=mmm` |
| GA Audit | `tool.html?tool=ga-audit` |
| SQL Automation | `tool.html?tool=sql-automation` |
| AEO / GEO | `tool.html?tool=aeo-geo` |
| Amazon Forecasting | `tool.html?tool=amazon-forecasting` |

Plain HTML, CSS, and JavaScript — no build step, no dependencies.

## Updating the tool descriptions

**All copy lives in one file: [`js/tools-data.js`](js/tools-data.js).** Nothing else
needs to be touched to change what the site says.

Each tool is an object with these content fields:

| Field | What it controls |
| --- | --- |
| `tagline` | One sentence, shown on the home page card and under the detail heading |
| `overview` | Array of paragraphs for the detail page intro |
| `capabilities` | Array of `{ title, detail }` — renders the "What it does" cards |
| `howItWorks` | Array of `{ title, detail }` — renders the numbered process steps |
| `outputs` | Array of strings — renders the "What you get" checklist |

Lists are rendered from the array, so adding or removing an entry changes the
page automatically — there is no fixed count to match.

### Draft badges

Every tool currently ships with placeholder copy and is marked `draft: true`,
which renders an amber **Draft copy** badge on its card and detail page.

- Finished one tool? Set `draft: false` on that tool.
- Finished all of them? Set `SHOW_DRAFT_BADGES = false` at the top of the file
  to switch every badge off at once.

### Other fields

`slug` sets the URL (`tool.html?tool=<slug>`) — changing it breaks existing
links. `accent` is the tool's colour, `icon` selects a glyph from
[`js/icons.js`](js/icons.js), and `category` is the small label above the name.

## Running locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deployment

This site is deployed as part of the parent repository. Pushes to `master`
that touch `analytics-tools/**` trigger
[`../.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml),
which assembles both sites into one GitHub Pages deployment:

| Path | Site |
| --- | --- |
| `/` | `jewellery-store/` |
| `/analytics-tools/` | this site |

To serve this site at the root instead, swap the two `cp` lines in the
workflow's "Assemble site" step.

## Structure

```
index.html          Home page — hero and tool grid
tool.html           Detail page template, rendered from ?tool=<slug>
css/style.css       All styling
js/tools-data.js    ← all site copy lives here
js/icons.js         Inline SVG icons
js/main.js          Renders the home page grid
js/tool-page.js     Renders the detail page
```
