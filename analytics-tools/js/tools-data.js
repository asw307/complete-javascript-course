/* ===========================================================================
 * tools-data.js — SINGLE SOURCE OF TRUTH FOR ALL TOOL COPY
 * ---------------------------------------------------------------------------
 * Every word shown on the site comes from this file. To update a tool's
 * description, edit it here — nothing else needs to change.
 *
 * WHEN THE REAL COPY ARRIVES:
 *   1. Replace the `tagline`, `overview`, `capabilities`, `howItWorks`,
 *      and `outputs` fields for each tool below.
 *   2. Set `draft: false` on that tool to remove its "Draft copy" badge.
 *   3. When every tool is final, set SHOW_DRAFT_BADGES = false.
 *
 * FIELD REFERENCE
 *   slug         URL id — used as tool.html?tool=<slug>. Don't change casually;
 *                changing it breaks existing links.
 *   name         Short display name (cards, nav, page title).
 *   fullName     Expanded name shown under the heading. Use "" to omit.
 *   category     Small label above the name.
 *   accent       Hex colour used for that tool's card and detail hero.
 *   icon         Key into ICONS in icons.js.
 *   tagline      One sentence. Shown on the home page card.
 *   overview     Array of paragraphs for the detail page intro.
 *   capabilities Array of { title, detail } — the "What it does" list.
 *   howItWorks   Array of { title, detail } — numbered process steps.
 *   outputs      Array of plain strings — the "What you get" list.
 *   draft        true shows a "Draft copy" badge on that tool.
 * ======================================================================== */

const SHOW_DRAFT_BADGES = true;

const TOOLS = [
  {
    slug: "mmm",
    name: "Marketing Mix Modeling",
    fullName: "MMM",
    category: "Measurement",
    accent: "#8b7cf6",
    icon: "mmm",
    draft: true,
    tagline:
      "Quantify how much incremental revenue each marketing channel actually drives, without relying on cookies or user-level tracking.",
    overview: [
      "Placeholder copy — to be replaced with the real description. Marketing Mix Modeling uses aggregate, time-series data to separate the revenue your marketing caused from the revenue that would have happened anyway.",
      "Because it works on aggregated spend and outcome data rather than individual user journeys, it stays reliable as third-party cookies, tracking prevention, and privacy regulation continue to erode click-based attribution.",
    ],
    capabilities: [
      {
        title: "Channel contribution",
        detail:
          "Placeholder — break total revenue into a baseline plus the incremental contribution of each paid, owned, and earned channel.",
      },
      {
        title: "Diminishing returns curves",
        detail:
          "Placeholder — model saturation per channel so you can see the point where additional spend stops paying for itself.",
      },
      {
        title: "Adstock and carryover",
        detail:
          "Placeholder — account for the fact that today's impressions keep converting for days or weeks afterwards.",
      },
      {
        title: "Budget scenario planning",
        detail:
          "Placeholder — simulate reallocation across channels and compare projected outcomes before committing spend.",
      },
      {
        title: "External factor control",
        detail:
          "Placeholder — isolate marketing effects from seasonality, pricing changes, promotions, and macro trends.",
      },
    ],
    howItWorks: [
      {
        title: "Collect",
        detail:
          "Placeholder — pull weekly or daily spend, impressions, and conversions per channel alongside revenue and control variables.",
      },
      {
        title: "Model",
        detail:
          "Placeholder — fit a regression with adstock and saturation transforms, validated against holdout periods.",
      },
      {
        title: "Validate",
        detail:
          "Placeholder — check fit, stability, and where possible calibrate against incrementality or geo-lift experiments.",
      },
      {
        title: "Plan",
        detail:
          "Placeholder — translate the fitted curves into a recommended budget allocation with expected ranges.",
      },
    ],
    outputs: [
      "Channel-level contribution and ROI breakdown",
      "Saturation curve per channel",
      "Recommended budget reallocation scenarios",
      "Model diagnostics and confidence intervals",
    ],
  },

  {
    slug: "ga-audit",
    name: "GA Audit",
    fullName: "Google Analytics Audit",
    category: "Data Quality",
    accent: "#f5a524",
    icon: "audit",
    draft: true,
    tagline:
      "A structured health check of your Google Analytics setup that finds the tracking gaps quietly corrupting your reporting.",
    overview: [
      "Placeholder copy — to be replaced with the real description. A GA Audit systematically inspects your analytics property for configuration errors, tracking gaps, and data quality issues that distort every downstream report and decision.",
      "Most analytics problems are not analysis problems — they are collection problems. This audit surfaces them explicitly, ranked by how much they distort the numbers people are already acting on.",
    ],
    capabilities: [
      {
        title: "Implementation review",
        detail:
          "Placeholder — verify tag deployment, duplicate tags, and consistent measurement IDs across every page and subdomain.",
      },
      {
        title: "Event and conversion checks",
        detail:
          "Placeholder — confirm key events fire correctly, once, with the parameters reporting actually depends on.",
      },
      {
        title: "Traffic attribution hygiene",
        detail:
          "Placeholder — audit UTM consistency, referral exclusions, cross-domain setup, and self-referral leakage.",
      },
      {
        title: "Data integrity scan",
        detail:
          "Placeholder — detect bot traffic, spam referrals, PII leakage, sampling thresholds, and unexpected volume shifts.",
      },
      {
        title: "Configuration and governance",
        detail:
          "Placeholder — review filters, data retention, channel groupings, user access, and product integrations.",
      },
    ],
    howItWorks: [
      {
        title: "Access",
        detail:
          "Placeholder — read-only access to the analytics property, tag manager container, and a representative site crawl.",
      },
      {
        title: "Scan",
        detail:
          "Placeholder — run automated checks across configuration, live tag firing, and historical data patterns.",
      },
      {
        title: "Triage",
        detail:
          "Placeholder — rank every finding by reporting impact and remediation effort rather than listing them flat.",
      },
      {
        title: "Fix",
        detail:
          "Placeholder — deliver a prioritised remediation plan with the specific change required for each issue.",
      },
    ],
    outputs: [
      "Prioritised findings report with severity ratings",
      "Annotated list of tracking gaps and misconfigurations",
      "Remediation plan with concrete implementation steps",
      "Re-test summary confirming fixes landed",
    ],
  },

  {
    slug: "sql-automation",
    name: "SQL Automation",
    fullName: "Automated Reporting Pipelines",
    category: "Data Engineering",
    accent: "#22d3ee",
    icon: "sql",
    draft: true,
    tagline:
      "Turn the queries you rerun by hand every week into scheduled, tested, version-controlled pipelines.",
    overview: [
      "Placeholder copy — to be replaced with the real description. SQL Automation takes the recurring analyses that currently live in someone's saved queries and turns them into reliable scheduled jobs with tests, alerting, and version control.",
      "The goal is to remove the manual refresh step entirely, so numbers are current before anyone asks for them and nobody is the single point of failure for a report.",
    ],
    capabilities: [
      {
        title: "Scheduled execution",
        detail:
          "Placeholder — run queries on a defined cadence with dependency ordering and automatic retries on failure.",
      },
      {
        title: "Templated queries",
        detail:
          "Placeholder — parameterise date ranges, markets, and segments so one model serves many reports.",
      },
      {
        title: "Data quality tests",
        detail:
          "Placeholder — assert row counts, freshness, uniqueness, and null thresholds, and block bad data from publishing.",
      },
      {
        title: "Version control",
        detail:
          "Placeholder — every query change reviewed and tracked in Git, so logic changes are auditable.",
      },
      {
        title: "Delivery and alerting",
        detail:
          "Placeholder — push results to dashboards, sheets, or warehouse tables, and alert on failures or anomalies.",
      },
    ],
    howItWorks: [
      {
        title: "Inventory",
        detail:
          "Placeholder — catalogue the recurring queries, who runs them, how often, and what depends on each one.",
      },
      {
        title: "Refactor",
        detail:
          "Placeholder — consolidate duplicated logic into shared, tested models with clear lineage.",
      },
      {
        title: "Orchestrate",
        detail:
          "Placeholder — schedule the jobs with dependency awareness, retries, and failure notifications.",
      },
      {
        title: "Monitor",
        detail:
          "Placeholder — track freshness and test results so silent breakages surface immediately.",
      },
    ],
    outputs: [
      "Scheduled pipelines replacing manual query runs",
      "Version-controlled query repository",
      "Automated data quality test suite",
      "Failure and freshness alerting",
    ],
  },

  {
    slug: "aeo-geo",
    name: "AEO / GEO",
    fullName: "Answer & Generative Engine Optimization",
    category: "Search Visibility",
    accent: "#34d399",
    icon: "aeo",
    draft: true,
    tagline:
      "Measure and improve how your brand appears in AI-generated answers, not just in the ten blue links.",
    overview: [
      "Placeholder copy — to be replaced with the real description. Answer Engine Optimization and Generative Engine Optimization focus on how your content is retrieved, cited, and summarised by AI assistants and AI-generated search results.",
      "As more queries are resolved without a click, ranking on a results page matters less than being the source a generated answer draws from. This tool tracks that surface and identifies what changes your citation rate.",
    ],
    capabilities: [
      {
        title: "Answer visibility tracking",
        detail:
          "Placeholder — monitor whether your brand appears in AI answers across a defined set of prompts and assistants.",
      },
      {
        title: "Citation and share of voice",
        detail:
          "Placeholder — measure how often you are cited versus competitors for the queries that matter commercially.",
      },
      {
        title: "Sentiment and accuracy checks",
        detail:
          "Placeholder — flag when generated answers describe your product inaccurately or unfavourably.",
      },
      {
        title: "Content structure guidance",
        detail:
          "Placeholder — identify the formatting, schema, and phrasing patterns that make content easier to retrieve and cite.",
      },
      {
        title: "Competitive gap analysis",
        detail:
          "Placeholder — surface the prompts where competitors are cited and you are absent, with the reason why.",
      },
    ],
    howItWorks: [
      {
        title: "Define",
        detail:
          "Placeholder — build the prompt set that reflects how real buyers ask about your category.",
      },
      {
        title: "Sample",
        detail:
          "Placeholder — query the target assistants on a repeating schedule and capture the full generated answers.",
      },
      {
        title: "Analyse",
        detail:
          "Placeholder — extract citations, mentions, sentiment, and factual accuracy from each response.",
      },
      {
        title: "Optimise",
        detail:
          "Placeholder — prioritise content and technical changes most likely to move citation rate, then re-measure.",
      },
    ],
    outputs: [
      "Answer visibility and citation rate over time",
      "Competitive share of voice by prompt",
      "Accuracy and sentiment flags on generated answers",
      "Prioritised content optimisation backlog",
    ],
  },

  {
    slug: "amazon-forecasting",
    name: "Amazon Forecasting",
    fullName: "Demand & Inventory Forecasting",
    category: "Forecasting",
    accent: "#fb7185",
    icon: "forecast",
    draft: true,
    tagline:
      "Forecast Amazon demand at SKU level so you order the right stock and stop losing rank to avoidable stockouts.",
    overview: [
      "Placeholder copy — to be replaced with the real description. Amazon Forecasting projects demand per SKU and translates it into concrete reorder timing and quantities, accounting for lead times, seasonality, and promotional spikes.",
      "On Amazon the cost of getting this wrong compounds: stockouts lose both immediate sales and the organic rank that took months to build, while overstock ties up cash in long-term storage fees.",
    ],
    capabilities: [
      {
        title: "SKU-level demand forecasts",
        detail:
          "Placeholder — project units per SKU with confidence ranges rather than a single point estimate.",
      },
      {
        title: "Seasonality and event modelling",
        detail:
          "Placeholder — capture annual seasonality plus known spikes such as Prime Day, Q4, and promotional periods.",
      },
      {
        title: "Reorder point calculation",
        detail:
          "Placeholder — convert forecasts into order-by dates and quantities using supplier lead times and safety stock.",
      },
      {
        title: "Stockout risk alerts",
        detail:
          "Placeholder — flag SKUs projected to run out inside the replenishment window before it becomes urgent.",
      },
      {
        title: "Overstock detection",
        detail:
          "Placeholder — identify slow-moving inventory heading toward long-term storage fees while action is still possible.",
      },
    ],
    howItWorks: [
      {
        title: "Ingest",
        detail:
          "Placeholder — pull sales history, inventory levels, and lead times from Seller Central and supplier records.",
      },
      {
        title: "Forecast",
        detail:
          "Placeholder — fit per-SKU models capturing trend, seasonality, and event effects, with ranges not point guesses.",
      },
      {
        title: "Plan",
        detail:
          "Placeholder — convert demand into reorder dates and quantities that respect lead times and case pack sizes.",
      },
      {
        title: "Alert",
        detail:
          "Placeholder — monitor against actuals and raise stockout and overstock risks early enough to act on.",
      },
    ],
    outputs: [
      "SKU-level demand forecast with confidence ranges",
      "Reorder calendar with dates and quantities",
      "Stockout and overstock risk alerts",
      "Forecast accuracy tracking against actuals",
    ],
  },
];

function getToolBySlug(slug) {
  return TOOLS.find((tool) => tool.slug === slug) || null;
}
