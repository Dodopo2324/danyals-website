export interface ProjectScreenshot {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export const screenshots = {
  login: {
    src: "/projects/personal-hub/images/login.png",
    width: 1920,
    height: 947,
    alt: "Personal Hub sign-in screen with empty username and password fields",
    caption: "Password-protected entry to Personal Hub.",
  },
  dashboard: {
    src: "/projects/personal-hub/images/dashboard.png",
    width: 1910,
    height: 926,
    alt: "Personal Hub dashboard showing time, weather, news, navigation, and administration links",
    caption: "The dashboard brings daily information and navigation together.",
  },
  appLauncher: {
    src: "/projects/personal-hub/images/app-launcher.png",
    width: 1208,
    height: 656,
    alt: "Personal Hub application launcher with storage, utility, research, and administration modules",
    caption: "A consistent launcher for utilities and experimental modules.",
  },
  fileTransfer: {
    src: "/projects/personal-hub/images/file-transfer.png",
    width: 1914,
    height: 940,
    alt: "Personal Hub file-transfer utility with upload controls and recent transfer information",
    caption: "The original file-transfer workflow that started Personal Hub.",
  },
  storage: {
    src: "/projects/personal-hub/images/storage.png",
    width: 1904,
    height: 940,
    alt: "Personal Hub storage interface with search, sorting, uploads, and a file listing",
    caption: "Browser-based access to files on privately controlled hardware.",
  },
  pdfTool: {
    src: "/projects/personal-hub/images/pdf-tool.png",
    width: 1902,
    height: 944,
    alt: "Personal Hub PDF utility showing merge, split, rotate, and page-reordering workflows",
    caption: "Document operations integrated with Personal Hub storage.",
  },
  nightMode: {
    src: "/projects/personal-hub/images/nightmode.png",
    width: 1920,
    height: 1080,
    alt: "Personal Hub Night Mode with a large clock, date, weather, city footage, and brightness controls",
    caption: "A full-screen ambient display designed for nighttime use.",
  },
  marketIntelligence: {
    src: "/projects/market-intelligence/images/overview.png",
    width: 1904,
    height: 802,
    alt: "Market Intelligence overview within the Personal Hub environment",
    caption: "Financial and economic research integrated into Personal Hub.",
  },
} satisfies Record<string, ProjectScreenshot>;
