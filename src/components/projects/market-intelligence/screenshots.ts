export interface ScreenshotRedaction {
  left: string;
  top: string;
  width: string;
  height: string;
  label: string;
}

export interface ProjectScreenshot {
  src: string;
  fullSizeSrc?: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  redactions?: ScreenshotRedaction[];
}

export const screenshots = {
  overview: {
    src: "/projects/market-intelligence/images/overview.png",
    width: 1904,
    height: 802,
    alt: "Market Intelligence overview with global search, tracked-company summaries, saved pins, and recent research",
    caption: "Search, tracked companies, pins, and recent research.",
  },
  companies: {
    src: "/projects/market-intelligence/images/companies.png",
    width: 1916,
    height: 943,
    alt: "Tracked-company workspace with company search, filters, refresh controls, and watchlist fields",
    caption: "Tracked-company workspace with filtering and refresh controls.",
  },
  appleFinancials: {
    src: "/projects/market-intelligence/images/apple-financials.png",
    width: 1899,
    height: 947,
    alt: "Multi-period company financial matrix with metric, category, and period filters",
    caption: "Multi-period company financial matrix.",
  },
  legalEntitySearch: {
    src: "/projects/market-intelligence/images/legal-entity-search.png",
    width: 1916,
    height: 608,
    alt: "GLEIF legal-entity search with name, country, jurisdiction, city, and status filters",
    caption: "GLEIF search with jurisdiction and registration filters.",
  },
  rbcLegalEntities: {
    src: "/projects/market-intelligence/images/rbc-legal-entities.png",
    width: 1900,
    height: 945,
    alt: "Legal-entity candidate records with jurisdiction details and an explicit confirmation step",
    caption: "Candidate legal entities requiring explicit confirmation.",
  },
  economy: {
    src: "/projects/market-intelligence/images/economy.png",
    width: 1918,
    height: 939,
    alt: "Canadian economy workspace with searchable Statistics Canada indicators and Bank of Canada series",
    caption: "Curated Statistics Canada and Bank of Canada indicators.",
  },
  businessInvestment: {
    src: "/projects/market-intelligence/images/business-investment.png",
    width: 1903,
    height: 942,
    alt: "Detailed Statistics Canada business-investment series with chart, metadata, and observations",
    caption: "Detailed Statistics Canada series with chart and observations.",
  },
  sources: {
    src: "/projects/market-intelligence/images/sources.png",
    width: 1903,
    height: 942,
    alt: "Market Intelligence data-source status and diagnostics for licensed and public providers",
    caption: "Provider connection status and diagnostics.",
  },
  settings: {
    src: "/projects/market-intelligence/images/settings.png",
    fullSizeSrc:
      "/projects/market-intelligence/images/settings-public.svg",
    width: 1903,
    height: 948,
    alt: "Market Intelligence provider settings with connection tests, refresh controls, and monitoring preferences; a local path is redacted",
    caption:
      "Provider configuration, refresh controls, and monitoring preferences.",
    redactions: [
      {
        left: "50.9%",
        top: "62.1%",
        width: "18.7%",
        height: "2.35%",
        label: "Local database path redacted",
      },
    ],
  },
} satisfies Record<string, ProjectScreenshot>;
