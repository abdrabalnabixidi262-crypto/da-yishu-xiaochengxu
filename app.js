const villages = {
  gaoqiao: {
    id: "gaoqiao",
    name: "???",
    title: "???????",
    subtitle: "????????",
    type: "?????? / ?????",
    location: "??? ? ???",
    regionKey: "???",
    cover: "./assets/premium-gaoqiao.png",
    photos: [
      "./assets/real/gaoqiao-cafe.jpg",
      "./assets/real/gaoqiao-walk.jpg",
      "./assets/premium-gaoqiao.png",
    ],
    mapFocus: 2,
    color: "#5f9d66",
    map: { a: "#d8eadb", b: "#b8d6bb" },
    tags: ["????", "????", "????"],
    story:
      "?????????????????????????????????????????????????????????????????????????",
    nodes: [
      ["?????", "????????????????"],
      ["????", "????????????????"],
      ["????", "???????????????"],
      ["????", "????????????????"],
      ["?????", "???????????????"],
    ],
    materials: [
      ["./assets/real/gaoqiao-cafe.jpg", "??????", "?????????????????????", "tall"],
      ["./assets/real/gaoqiao-walk.jpg", "?????", "?????????????????????", "wide"],
      ["./assets/premium-gaoqiao.png", "????", "?????????????????", "square"],
      ["./assets/real/gaoqiao-cafe.jpg", "????????", "???????????????????", "tall"],
    ],
  },
  yaoli: {
    id: "yaoli",
    name: "???",
    title: "???????",
    subtitle: "???????",
    type: "??????? / ????",
    location: "??? ? ???",
    regionKey: "???",
    cover: "./assets/premium-yaoli.png",
    photos: [
      "./assets/real/yaoli-workshop-1.jpg",
      "./assets/real/yaoli-workshop-2.jpg",
      "./assets/real/yaoli-workshop-3.jpg",
      "./assets/real/yaoli-wall.jpg",
      "./assets/premium-yaoli.png",
    ],
    mapFocus: 0,
    color: "#5d91c2",
    map: { a: "#dfeaf7", b: "#bfd7ef" },
    tags: ["??", "??", "????"],
    story:
      "??????????????????????????????????????????????????????????????????????",
    nodes: [
      ["????", "??????????????"],
      ["?????", "?????????????"],
      ["?????", "???????????????"],
      ["????", "?????????????"],
      ["????", "????????????????"],
    ],
    materials: [
      ["./assets/real/yaoli-workshop-1.jpg", "??????", "?????????????????", "tall"],
      ["./assets/real/yaoli-workshop-3.jpg", "?????", "??????????????????", "square"],
      ["./assets/real/yaoli-workshop-2.jpg", "?????", "??????????????????", "wide"],
      ["./assets/real/yaoli-wall.jpg", "??????", "??????????????????", "square"],
    ],
  },
  jinxing: {
    id: "jinxing",
    name: "???",
    title: "???????????",
    subtitle: "??????",
    type: "???????? / ???????",
    location: "??? ? ???",
    regionKey: "???",
    cover: "./assets/ip/jinxing/poster.jpg",
    photos: [
      "./assets/ip/jinxing/poster.jpg",
      "./assets/ip/jinxing/tea-box-1.jpg",
      "./assets/ip/jinxing/postcard-1.jpg",
      "./assets/ip/jinxing/sticker-1.jpg",
      "./assets/ip/jinxing/badge-1.jpg",
      "./assets/ip/jinxing/around-1.jpg",
    ],
    mapFocus: 4,
    color: "#d7a849",
    map: { a: "#f7e6ae", b: "#b9d989" },
    tags: ["????", "???", "????"],
    story:
      "???????????????????????????????????????????????????????????????????????????????????????",
    nodes: [
      ["????", "????????????????????"],
      ["????", "??????????????????"],
      ["?????", "????????????????"],
      ["?????", "???????????????????"],
      ["????", "????????????????????????"],
    ],
    materials: [
      ["./assets/ip/jinxing/tea-box-1.jpg", "???????", "??????????????????????", "wide"],
      ["./assets/ip/jinxing/postcard-1.jpg", "??????", "??????????????????", "square"],
      ["./assets/ip/jinxing/sticker-1.jpg", "??????", "??????????????????", "square"],
      ["./assets/ip/jinxing/badge-1.jpg", "??????", "??????????????????????", "tall"],
      ["./assets/ip/jinxing/around-1.jpg", "??????", "??????????????????????", "square"],
      ["./assets/ip/jinxing/around-2.jpg", "??????", "???????????????????", "square"],
    ],
  },
};

const ipShowcases = {
  gaoqiao: {
    kicker: "?????",
    title: "??? IP ????",
    copy: "???????????????????????????",
    mark: "Paw Map",
    accent: "#74c783",
    panels: [
      {
        title: "???????",
        label: "???",
        image: "./assets/ip/gaoqiao/board.jpg",
        copy: "???????????????????????????",
      },
      {
        title: "?????",
        label: "????",
        image: "./assets/ip/gaoqiao/threeview.jpg",
        copy: "????????????????????????",
      },
      {
        title: "????",
        label: "????",
        image: "./assets/ip/gaoqiao/action-3.jpg",
        copy: "????????????????????????",
      },
      {
        title: "????",
        label: "????",
        image: "./assets/ip/gaoqiao/action-4.jpg",
        copy: "?????????????????????",
      },
    ],
    emojis: [
      { image: "./assets/ip/gaoqiao/emoji-pack-1.jpg", label: "????" },
      { image: "./assets/ip/gaoqiao/emoji-pack-2.jpg", label: "????" },
      { image: "./assets/ip/gaoqiao/emoji-pack-3.jpg", label: "????" },
      { image: "./assets/ip/gaoqiao/emoji-pack-4.jpg", label: "????" },
      { image: "./assets/ip/gaoqiao/emoji-pack-5.jpg", label: "????" },
      { image: "./assets/ip/gaoqiao/emoji-pack-6.jpg", label: "????" },
    ],
  },
  yaoli: {
    kicker: "?????",
    title: "?????????",
    copy: "??????????????????????????",
    mark: "Cloud Play",
    accent: "#7fb7f0",
    panels: [
      {
        title: "????",
        label: "????",
        image: "./assets/ip/yaoli/scene-1.jpg",
        copy: "?????????????????????????",
      },
      {
        title: "????",
        label: "????",
        image: "./assets/ip/yaoli/scene-2.jpg",
        copy: "???????????????????",
      },
      {
        title: "????",
        label: "???",
        image: "./assets/ip/yaoli/board.jpg",
        copy: "??????????????????????",
      },
      {
        title: "?????",
        label: "????",
        image: "./assets/ip/yaoli/threeview.jpg",
        copy: "????????????????????",
      },
      {
        title: "????",
        label: "????",
        image: "./assets/ip/yaoli/action-8.jpg",
        copy: "?????????????????????",
      },
    ],
    emojis: [
      { image: "./assets/ip/yaoli/emoji-pack-1.jpg", label: "????" },
      { image: "./assets/ip/yaoli/emoji-pack-2.jpg", label: "????" },
      { image: "./assets/ip/yaoli/emoji-pack-3.jpg", label: "????" },
      { image: "./assets/ip/yaoli/emoji-pack-4.jpg", label: "????" },
      { image: "./assets/ip/yaoli/emoji-pack-5.jpg", label: "????" },
      { image: "./assets/ip/yaoli/emoji-pack-6.jpg", label: "????" },
    ],
  },
  jinxing: {
    kicker: "????",
    title: "??? IP ??????",
    copy: "?????????????????????????????????",
    mark: "Golden Set",
    accent: "#e8bb50",
    panels: [
      {
        title: "?????",
        label: "???",
        image: "./assets/ip/jinxing/poster.jpg",
        copy: "?????????????????????????",
      },
      {
        title: "????",
        label: "????",
        image: "./assets/ip/jinxing/board.jpg",
        copy: "?????????????????????",
      },
      {
        title: "????",
        label: "????",
        image: "./assets/ip/jinxing/action-1.jpg",
        copy: "????????????????????",
      },
      {
        title: "????",
        label: "????",
        image: "./assets/ip/jinxing/action-2.jpg",
        copy: "?????????????????????",
      },
      {
        title: "????",
        label: "????",
        image: "./assets/ip/jinxing/action-3.jpg",
        copy: "????????????????????",
      },
    ],
    emojis: [
      { image: "./assets/ip/jinxing/emoji-2.jpg", label: "????" },
      { image: "./assets/ip/jinxing/emoji-3.jpg", label: "????" },
      { image: "./assets/ip/jinxing/emoji-5.jpg", label: "???" },
      { image: "./assets/ip/jinxing/action-2.jpg", label: "??" },
    ],
    products: [
      { image: "./assets/ip/jinxing/tea-box-1.jpg", title: "???? A", type: "??" },
      { image: "./assets/ip/jinxing/tea-box-2.jpg", title: "???? B", type: "??" },
      { image: "./assets/ip/jinxing/tea-box-3.jpg", title: "???? C", type: "??" },
      { image: "./assets/ip/jinxing/tea-box-4.jpg", title: "???? D", type: "??" },
      { image: "./assets/ip/jinxing/postcard-1.jpg", title: "????? A", type: "???" },
      { image: "./assets/ip/jinxing/postcard-2.jpg", title: "????? B", type: "???" },
      { image: "./assets/ip/jinxing/postcard-3.jpg", title: "????? C", type: "???" },
      { image: "./assets/ip/jinxing/postcard-4.jpg", title: "????? D", type: "???" },
      { image: "./assets/ip/jinxing/badge-1.jpg", title: "???? A", type: "??" },
      { image: "./assets/ip/jinxing/badge-2.jpg", title: "???? B", type: "??" },
      { image: "./assets/ip/jinxing/badge-3.jpg", title: "???? C", type: "??" },
      { image: "./assets/ip/jinxing/badge-4.jpg", title: "???? D", type: "??" },
      { image: "./assets/ip/jinxing/sticker-1.jpg", title: "???? A", type: "??" },
      { image: "./assets/ip/jinxing/sticker-2.jpg", title: "???? B", type: "??" },
      { image: "./assets/ip/jinxing/sticker-3.jpg", title: "???? C", type: "??" },
      { image: "./assets/ip/jinxing/sticker-4.jpg", title: "???? D", type: "??" },
      { image: "./assets/ip/jinxing/around-1.jpg", title: "???? A", type: "??" },
      { image: "./assets/ip/jinxing/around-2.jpg", title: "???? B", type: "??" },
      { image: "./assets/ip/jinxing/around-3.jpg", title: "???? C", type: "??" },
      { image: "./assets/ip/jinxing/around-4.jpg", title: "???? D", type: "??" },
      { image: "./assets/ip/jinxing/around-5.jpg", title: "???? E", type: "??" },
      { image: "./assets/ip/jinxing/around-6.jpg", title: "???? F", type: "??" },
      { image: "./assets/ip/jinxing/around-7.jpg", title: "???? G", type: "??" },
    ],
  },
};

const villageMapGuides = {
  gaoqiao: {
    eyebrow: "????????",
    title: "???????",
    route: "M9 70 C18 54 29 54 38 44 C47 34 51 20 65 24 C78 28 80 43 70 53 C61 62 55 72 66 80 C76 87 87 82 92 68",
    terrain: "?????????????????????????????????????",
    photoLabel: "?? / ??? / ????",
    words: ["?", "?", "?", "?"],
    points: [
      {
        title: "??????",
        label: "????",
        x: 18,
        y: 62,
        icon: "??",
        action: "????????",
        text: "?????????????????????????????????",
      },
      {
        title: "???????",
        label: "????",
        x: 38,
        y: 43,
        icon: "?",
        action: "???????",
        text: "????????????????????????????",
      },
      {
        title: "??????",
        label: "????",
        x: 64,
        y: 25,
        icon: "?",
        action: "??????",
        text: "???????????????????????????",
      },
      {
        title: "?????",
        label: "????",
        x: 70,
        y: 56,
        icon: "?",
        action: "??????",
        text: "????????????????????????",
      },
      {
        title: "?????",
        label: "????",
        x: 84,
        y: 75,
        icon: "?",
        action: "??????",
        text: "?????????????????????????",
      },
    ],
  },
  yaoli: {
    eyebrow: "?????????",
    title: "??????",
    route: "M10 66 C19 44 31 47 37 31 C45 13 62 18 62 36 C62 48 74 42 84 50 C94 58 89 78 72 78 C56 78 49 67 36 75 C25 82 16 78 10 66",
    terrain: "????????????????????????????????",
    photoLabel: "???? / ??? / ????",
    words: ["?", "?", "?", "?"],
    points: [
      {
        title: "????",
        label: "????",
        x: 22,
        y: 58,
        icon: "?",
        action: "??????",
        text: "??????????????????????????",
      },
      {
        title: "???",
        label: "????",
        x: 38,
        y: 33,
        icon: "?",
        action: "????",
        text: "???????????????????????????",
      },
      {
        title: "????",
        label: "????",
        x: 61,
        y: 41,
        icon: "?",
        action: "??????",
        text: "??????????????????????????????",
      },
      {
        title: "?????",
        label: "????",
        x: 78,
        y: 58,
        icon: "?",
        action: "???????",
        text: "?????????? IP ??????????",
      },
      {
        title: "??????",
        label: "????",
        x: 56,
        y: 77,
        icon: "?",
        action: "??????",
        text: "????????????????????????????",
      },
    ],
  },
  jinxing: {
    eyebrow: "????????",
    title: "???????",
    route: "M11 75 C22 62 26 43 41 42 C55 41 56 22 70 24 C83 26 90 40 82 53 C75 64 86 69 82 82 C76 93 57 86 45 80 C31 73 22 86 11 75",
    terrain: "?????????????????????????????????????",
    photoLabel: "??? / ??? / ????",
    words: ["?", "?", "?", "?"],
    points: [
      {
        title: "????",
        label: "????",
        x: 18,
        y: 68,
        icon: "??",
        action: "??????",
        text: "?????????????????????????????",
      },
      {
        title: "????",
        label: "????",
        x: 42,
        y: 43,
        icon: "?",
        action: "?????",
        text: "??????????????????????",
      },
      {
        title: "?????",
        label: "???",
        x: 69,
        y: 26,
        icon: "?",
        action: "?????",
        text: "?????????????????????????",
      },
      {
        title: "?????",
        label: "????",
        x: 80,
        y: 56,
        icon: "?",
        action: "??????",
        text: "?????????????????????????",
      },
      {
        title: "????",
        label: "????",
        x: 56,
        y: 81,
        icon: "?",
        action: "??????",
        text: "??????????????????????????????",
      },
    ],
  },
};

const app = document.querySelector("#app");
const dockItems = Array.from(document.querySelectorAll(".dock-item"));

const posterItems = [
  {
    id: "gaoqiao",
    name: "???",
    line: "????? / ????????",
    accent: "Paw Route",
    glyph: "?",
  },
  {
    id: "yaoli",
    name: "???",
    line: "??????? / ???????",
    accent: "Cloud Trail",
    glyph: "?",
  },
  {
    id: "jinxing",
    name: "???",
    line: "?????? / ???????????",
    accent: "Golden Co-op",
    glyph: "?",
  },
];

const state = {
  route: "home",
  village: "yaoli",
  tab: "story",
  score: 0,
  posterIndex: 0,
  selectedMapNode: 0,
  selectedStoryNode: 0,
  impression: "map",
  gameVillage: "yaoli",
  gameActiveNode: 0,
  productIndex: 0,
  playSteps: new Set(),
  gameCollected: {
    gaoqiao: new Set(),
    yaoli: new Set(),
    jinxing: new Set(),
  },
  discovered: new Set(),
  toastTimer: null,
};

const gameOrder = ["gaoqiao", "yaoli", "jinxing"];

const impressionDetails = {
  map: {
    icon: "?",
    title: "????",
    subtitle: "?????????????",
    text: "????????????????????????????????????????????????????????????????????????",
    action: "???????",
    route: "detail",
    tab: "map",
  },
  materials: {
    icon: "?",
    title: "????",
    subtitle: "?????????????",
    text: "??????????????????????????????????????????????????????????????????",
    action: "??????",
    route: "detail",
    tab: "materials",
  },
  game: {
    icon: "?",
    title: "????",
    subtitle: "?????????????",
    text: "???????????????????????????????????????????????????????????",
    action: "??????",
    route: "game",
    tab: "map",
  },
};

const nodePlayScenes = {
  gaoqiao: [
    {
      type: "paw",
      title: "????",
      verb: "??????",
      hint: "?????????????????????????",
      button: "??????",
      steps: ["????", "????", "????"],
      layers: ["????????", "??????", "???????"],
    },
    {
      type: "leaf",
      title: "????",
      verb: "?????",
      hint: "????????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["???????", "??????", "???????"],
    },
    {
      type: "market",
      title: "????",
      verb: "?????",
      hint: "?????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["????????", "??????", "??????"],
    },
    {
      type: "walk",
      title: "????",
      verb: "??????",
      hint: "????????????????????????",
      button: "????",
      steps: ["?????", "????", "????"],
      layers: ["??????", "??????", "??????"],
    },
    {
      type: "jade",
      title: "????",
      verb: "??????",
      hint: "?????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["??????", "??????", "??????"],
    },
  ],
  yaoli: [
    {
      type: "book",
      title: "????",
      verb: "??????",
      hint: "?????????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["????????", "? / ? / ? ????", "????????"],
    },
    {
      type: "slope",
      title: "?????",
      verb: "????",
      hint: "?????????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["???????", "????????", "??????"],
    },
    {
      type: "clay",
      title: "????",
      verb: "??????",
      hint: "????????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["???????", "????????", "??????"],
    },
    {
      type: "coffee",
      title: "????",
      verb: "???????",
      hint: "??????????????????????",
      button: "?????",
      steps: ["????", "????", "????"],
      layers: ["????????", "????????", "??????"],
    },
    {
      type: "mosaic",
      title: "?????",
      verb: "??????",
      hint: "???????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["????????", "???????", "??????"],
    },
  ],
  jinxing: [
    {
      type: "ginkgo",
      title: "????",
      verb: "??????",
      hint: "??????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["??????", "??????", "??????"],
    },
    {
      type: "tea",
      title: "????",
      verb: "?????",
      hint: "??????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["????????", "???????", "???????"],
    },
    {
      type: "star",
      title: "?????",
      verb: "?????",
      hint: "????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["???????", "???????", "????????"],
    },
    {
      type: "home",
      title: "????",
      verb: "??????",
      hint: "??????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["??????", "??????", "???????"],
    },
    {
      type: "workshop",
      title: "????",
      verb: "??????",
      hint: "????????????????????????",
      button: "????",
      steps: ["????", "????", "????"],
      layers: ["????????", "???????", "????????"],
    },
  ],
};

function vibrate(ms = 12) {
  try {
    navigator.vibrate?.(ms);
  } catch {
    // ignore
  }
}

function readRoute() {
  const url = new URL(window.location.href);
  const route = url.searchParams.get("route");
  const village = url.searchParams.get("village");
  const tab = url.searchParams.get("tab");
  const impression = url.searchParams.get("impression");
  const productRaw = url.searchParams.get("product");
  const nodeRaw = url.searchParams.get("node");
  const nodeParam = nodeRaw === null ? NaN : Number(nodeRaw);
  const selectedNode = Number.isFinite(nodeParam) ? nodeParam : null;
  const productParam = productRaw === null ? NaN : Number(productRaw);
  const selectedProduct = Number.isFinite(productParam) ? productParam : null;
  if (route === "detail" && village && villages[village]) {
    const fallbackNode = villages[village].mapFocus ?? 0;
    const node = selectedNode ?? fallbackNode;
    return { route: "detail", village, tab: tab || "map", selectedMapNode: node, selectedStoryNode: node };
  }
  if (route && ["home", "villages", "profile", "impression", "game", "play", "scan", "exhibit", "product"].includes(route)) {
    const nextVillage = village && villages[village] ? village : state.village;
    return {
      route,
      village: nextVillage,
      tab: tab || state.tab,
      impression: impressionDetails[impression] ? impression : state.impression,
      gameVillage: route === "game" || route === "play" ? nextVillage : state.gameVillage,
      gameActiveNode: selectedNode ?? state.gameActiveNode,
      productIndex: selectedProduct ?? state.productIndex,
    };
  }
  return {};
}

function syncUrl() {
  const url = new URL(window.location.href);
  if (state.route === "home") {
    url.searchParams.delete("route");
    url.searchParams.delete("village");
    url.searchParams.delete("tab");
    url.searchParams.delete("node");
    url.searchParams.delete("product");
    url.searchParams.delete("impression");
  } else {
    url.searchParams.set("route", state.route);
    if (state.route === "detail" && state.village && villages[state.village]) {
      url.searchParams.set("village", state.village);
      url.searchParams.set("tab", state.tab || "map");
      url.searchParams.set("node", String(state.tab === "story" ? state.selectedStoryNode : state.selectedMapNode));
      url.searchParams.delete("product");
      url.searchParams.delete("impression");
    } else if (state.route === "profile" && state.village && villages[state.village]) {
      url.searchParams.set("village", state.village);
      url.searchParams.delete("tab");
      url.searchParams.delete("node");
      url.searchParams.delete("product");
      url.searchParams.delete("impression");
    } else if (state.route === "impression") {
      url.searchParams.set("impression", state.impression || "map");
      url.searchParams.delete("village");
      url.searchParams.delete("tab");
      url.searchParams.delete("node");
      url.searchParams.delete("product");
    } else if ((state.route === "game" || state.route === "play") && state.gameVillage && villages[state.gameVillage]) {
      url.searchParams.set("village", state.gameVillage);
      url.searchParams.delete("tab");
      url.searchParams.set("node", String(state.gameActiveNode || 0));
      url.searchParams.delete("product");
      url.searchParams.delete("impression");
    } else if (state.route === "product" && state.village && villages[state.village]) {
      url.searchParams.set("village", state.village);
      url.searchParams.set("product", String(state.productIndex || 0));
      url.searchParams.delete("tab");
      url.searchParams.delete("node");
      url.searchParams.delete("impression");
    } else {
      url.searchParams.delete("village");
      url.searchParams.delete("tab");
      url.searchParams.delete("node");
      url.searchParams.delete("product");
      url.searchParams.delete("impression");
    }
  }
  history.replaceState({}, "", url);
}

function setRoute(route, extras = {}) {
  state.route = route;
  if (extras.village) state.village = extras.village;
  if (extras.tab) state.tab = extras.tab;
  if (typeof extras.selectedMapNode === "number") state.selectedMapNode = extras.selectedMapNode;
  if (typeof extras.selectedStoryNode === "number") state.selectedStoryNode = extras.selectedStoryNode;
  if (extras.impression && impressionDetails[extras.impression]) state.impression = extras.impression;
  if (extras.gameVillage) state.gameVillage = extras.gameVillage;
  if (typeof extras.gameActiveNode === "number") state.gameActiveNode = extras.gameActiveNode;
  if (typeof extras.productIndex === "number") state.productIndex = extras.productIndex;
  if (route === "detail") {
    const village = villages[state.village] || villages.yaoli;
    state.tab = extras.tab || "map";
    state.selectedMapNode =
      typeof extras.selectedMapNode === "number" ? extras.selectedMapNode : village.mapFocus ?? 0;
    state.selectedStoryNode =
      typeof extras.selectedStoryNode === "number" ? extras.selectedStoryNode : state.selectedMapNode;
  }
  if (route === "game") {
    state.gameVillage = extras.gameVillage || extras.village || state.gameVillage || state.village || "yaoli";
    state.village = state.gameVillage;
    if (typeof extras.selectedMapNode === "number" && typeof extras.gameActiveNode !== "number") {
      state.gameActiveNode = extras.selectedMapNode;
    }
  }
  if (route === "play") {
    state.gameVillage = extras.gameVillage || extras.village || state.gameVillage || state.village || "yaoli";
    state.village = state.gameVillage;
    state.playSteps = new Set();
    if (typeof extras.selectedMapNode === "number" && typeof extras.gameActiveNode !== "number") {
      state.gameActiveNode = extras.selectedMapNode;
    }
  }
  if (route === "product") {
    const show = ipShowcases[state.village];
    const products = show?.products || [];
    if (!products[state.productIndex]) state.productIndex = 0;
  }
  syncUrl();
  render();
  vibrate(8);
}

function nextPoster(delta) {
  state.posterIndex = (state.posterIndex + delta + posterItems.length) % posterItems.length;
  render();
  vibrate(8);
}

function syncDock() {
  dockItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.route === state.route || (state.route === "detail" && item.dataset.route === "villages"));
  });
}

function showToast(text) {
  const host = app.querySelector(".toast");
  if (!host) return;
  host.textContent = text;
  host.classList.remove("show");
  void host.offsetWidth;
  host.classList.add("show");
}

function villageTagList(village) {
  return village.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function getGameCollection(villageId) {
  if (!state.gameCollected[villageId]) {
    state.gameCollected[villageId] = new Set();
  }
  return state.gameCollected[villageId];
}

function villageCardCover(village) {
  const show = ipShowcases[village.id];
  const heroPanel = show?.panels?.find((panel) => panel.label === "???") || show?.panels?.[0];
  return heroPanel?.image || village.cover;
}

function productIndexForMaterial(village, photo) {
  const products = ipShowcases[village.id]?.products || [];
  return products.findIndex((product) => product.image === photo);
}

function scenicRibbon(village) {
  const slides = [...village.photos, ...village.photos];
  return `
    <div class="hero-ribbon">
      <div class="hero-track">
        ${slides
          .map(
            (photo, index) => `
              <figure class="hero-shot ${index % 3 === 1 ? "wide" : ""}" style="background-image:url('${photo}')"></figure>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function iconShape(name) {
  return `<span class="material-icon material-icon-${name}" aria-hidden="true"></span>`;
}

function shell(content) {
  return `<div class="view">${content}</div><div class="toast"></div>`;
}

function realMapFeatures(activeVillageId) {
  const data = window.realMapData;
  if (!data?.features?.length) return "";
  const highlight = villages[activeVillageId]?.regionKey || "???";
  return data.features
    .map(
      (feature) => `
        <path
          class="real-map-region ${feature.name === highlight ? "is-current" : ""}"
          d="${feature.path}"
          data-city="${feature.name}"
        ></path>
      `,
    )
    .join("");
}

function realMapPins(activeVillageId) {
  const data = window.realMapData;
  if (!data?.villages?.length) return "";
  return data.villages
    .map((pin) => {
      const village = villages[pin.id];
      if (!village) return "";
      return `
        <button
          class="geo-pin ${activeVillageId === pin.id ? "is-active" : ""}"
          data-map-village="${pin.id}"
          style="left:${(pin.x / 320) * 100}%; top:${(pin.y / 430) * 100}%; --pin:${village.color}"
          aria-label="${village.name}"
        >
          <span class="pin-core">?</span>
          <span class="pin-label">${village.name}</span>
        </button>
      `;
    })
    .join("");
}

function homeView() {
  const homeVillage = villages.jinxing;
  return shell(`
    <section class="hero">
      <div class="hero-decor" aria-hidden="true">
        <span>?</span><span>?</span><span>?</span><span>?</span>
      </div>
      ${scenicRibbon(homeVillage)}
      <div class="hero-content">
        <div>
          <p class="eyebrow">????????</p>
          <h1>?????????</h1>
          <p>??????????????????????????????</p>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><strong>3</strong><span>????</span></div>
          <div class="hero-stat"><strong>15</strong><span>????</span></div>
          <div class="hero-stat"><strong>?</strong><span>????</span></div>
        </div>
      </div>
    </section>

    <section class="quick-grid">
      <button class="glass-card pressable quick-action" data-shortcut="map" data-village="${homeVillage.id}">
        <div class="orb-icon">?</div>
        <div class="quick-copy">
          <h3>????</h3>
          <p>?????????????????????</p>
        </div>
        <span class="quick-arrow">?</span>
      </button>
      <button class="glass-card pressable quick-action" data-shortcut="materials" data-village="${homeVillage.id}">
        <div class="orb-icon" style="background:linear-gradient(145deg,#6f4cc9,#d7a849)">?</div>
        <div class="quick-copy">
          <h3>????</h3>
          <p>??????????????????????</p>
        </div>
        <span class="quick-arrow">?</span>
      </button>
      <button class="glass-card pressable quick-action feature-wide" data-shortcut="game">
        <div class="orb-icon" style="background:linear-gradient(145deg,#1f2f3a,#69a0c7)">?</div>
        <div class="quick-copy">
          <h3>????</h3>
          <p>???????????????????</p>
        </div>
        <span class="quick-arrow">?</span>
      </button>
    </section>

    <section class="section-head">
      <div>
        <h2>????</h2>
        <p>????????????????????????????</p>
      </div>
      <span class="mini-pill">${state.discovered.size}/3 ???</span>
    </section>

    <section class="village-strip" data-drag-strip>
      ${Object.values(villages)
        .map(
          (v, index) => `
            <button class="village-card" data-village="${v.id}" style="background-image:url('${villageCardCover(v)}')">
              <span class="card-glyph" aria-hidden="true">${posterItems[index]?.glyph || "?"}</span>
              <div>
                <p class="eyebrow">${v.type}</p>
                <h3>${v.name}<br />${v.title}</h3>
                <p>${v.subtitle}</p>
                <div class="tag-row">${villageTagList(v)}</div>
              </div>
              <span class="glass-button" data-village-profile="${v.id}">????</span>
            </button>
          `,
        )
        .join("")}
    </section>

    <section class="section-head">
      <div>
        <h2>????</h2>
        <p>?????????????????????????????????</p>
      </div>
    </section>

    <section class="memory-ribbon">
      ${Object.entries(impressionDetails)
        .map(
          ([key, item]) => `
            <button class="memory-ribbon-item" data-impression="${key}">
              <span>${item.icon}</span><strong>${item.title}</strong><small>${item.subtitle}</small>
            </button>
          `,
        )
        .join("")}
    </section>
  `);
}

function villagesView() {
  return shell(`
    <section class="page-title">
      <div>
        <p>????</p>
        <h1>????</h1>
        <p>???????????????????????????????</p>
      </div>
    </section>
    <section class="village-strip" data-drag-strip>
      ${Object.values(villages)
        .map(
          (v, index) => `
            <button class="village-card" data-village="${v.id}" style="background-image:url('${villageCardCover(v)}')">
              <span class="card-glyph" aria-hidden="true">${posterItems[index]?.glyph || "?"}</span>
              <div>
                <p class="eyebrow">${v.type}</p>
                <h3>${v.name}<br />${v.title}</h3>
                <p>${v.subtitle}</p>
                <div class="tag-row">${villageTagList(v)}</div>
              </div>
              <span class="glass-button">????</span>
            </button>
          `,
        )
        .join("")}
    </section>
  `);
}

function profileView() {
  const village = villages[state.village] || villages.yaoli;
  const guide = villageMapGuides[village.id];
  return shell(`
    <section class="profile-hero" style="--village:${village.color}; background-image:url('${village.cover}')">
      <div class="top-row">
        <button class="back" data-go="villages">?</button>
        <span class="mini-pill">????</span>
      </div>
      <div class="profile-title">
        <p>${village.type}</p>
        <h1>${village.name}</h1>
        <span>${village.location} ? ${village.subtitle}</span>
      </div>
    </section>

    <section class="profile-story-card" style="--village:${village.color}">
      <p class="context-label">????</p>
      <h2>${village.title}</h2>
      <p>${village.story}</p>
      <div class="profile-actions">
        <button data-profile-open="map">??????</button>
        <button data-profile-open="story">??????</button>
        <button data-profile-open="materials">??????</button>
      </div>
    </section>

    <section class="profile-node-wall">
      ${guide.points
        .map(
          (point, index) => `
            <button class="profile-node-card" data-profile-node="${index}" style="--village:${village.color}; background-image:url('${village.photos[index % village.photos.length]}')">
              <span>${point.icon}</span>
              <strong>${point.title}</strong>
              <small>${nodePlayScenes[village.id]?.[index]?.verb || point.action}</small>
            </button>
          `,
        )
        .join("")}
    </section>
  `);
}

function impressionView() {
  const item = impressionDetails[state.impression] || impressionDetails.map;
  const activeVillage = villages[state.village] || villages.yaoli;
  return shell(`
    <section class="impression-hero" style="--village:${activeVillage.color}">
      <button class="back" data-go="home">?</button>
      <div>
        <span>${item.icon}</span>
        <p>????</p>
        <h1>${item.title}</h1>
        <small>${item.subtitle}</small>
      </div>
    </section>

    <section class="impression-detail" style="--village:${activeVillage.color}">
      <p>${item.text}</p>
      <div class="impression-preview">
        <span></span><span></span><span></span>
      </div>
      <button class="impression-action" data-impression-action="${state.impression}">
        ${item.action}
      </button>
    </section>

    <section class="impression-tabs">
      ${Object.entries(impressionDetails)
        .map(
          ([key, next]) => `
            <button class="${state.impression === key ? "is-active" : ""}" data-impression="${key}">
              <span>${next.icon}</span>${next.title}
            </button>
          `,
        )
        .join("")}
    </section>
  `);
}

function detailView() {
  const village = villages[state.village] || villages.yaoli;
  const tabs = [
    ["story", "??"],
    ["map", "??"],
    ["materials", "??"],
  ];
  const hero =
    state.tab === "map"
      ? `<section class="detail-map-head">
          <button class="back" data-go="villages">?</button>
          <div>
            <p class="eyebrow">${village.type}</p>
            <h1>${village.name}??</h1>
            <p>${village.title} ? ${village.subtitle}</p>
          </div>
          <span class="mini-pill">????</span>
        </section>`
      : `<section class="detail-hero" style="background-image:url('${village.cover}')">
          <div class="top-row">
            <button class="back" data-go="villages">?</button>
            <span class="mini-pill">????</span>
          </div>
          <div>
            <p class="eyebrow">${village.type}</p>
            <h1>${village.name}</h1>
            <p>${village.title} ? ${village.subtitle}</p>
          </div>
        </section>`;
  return shell(`
    ${hero}

    <section class="segmented">
      ${tabs
        .map(
          ([key, label]) => `
            <button class="segment ${state.tab === key ? "is-active" : ""}" data-tab="${key}">${label}</button>
          `,
        )
        .join("")}
    </section>

    ${
      state.tab === "story"
        ? storyPanel(village)
        : state.tab === "map"
          ? mapPanel(village)
          : materialsPanel(village)
    }
  `);
}

function storyPanel(village) {
  const guide = villageMapGuides[village.id];
  const activeIndex = village.nodes[state.selectedStoryNode] ? state.selectedStoryNode : 0;
  const activeNode = village.nodes[activeIndex] || village.nodes[0];
  const activePoint = guide?.points?.[activeIndex] || guide?.points?.[0];
  const activePhoto = village.photos[activeIndex % village.photos.length];
  const collection = getGameCollection(village.id);
  const collected = collection.has(activeIndex);
  return `
    <section class="story-copy">
      <h2>${village.title}</h2>
      <p>${village.story}</p>
    </section>
    <section class="context-panel">
      <div class="context-copy">
        <p class="context-label">????</p>
        <h3>?????????????????????????????????????</h3>
        <p>????????????????????????????????????????????</p>
      </div>
      <div class="context-tiles">
        ${village.photos
          .map(
            (photo) => `
              <figure class="context-tile" style="background-image:url('${photo}')"></figure>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="section-head">
      <div>
        <h2>????</h2>
        <p>??????????????????????</p>
      </div>
    </section>
    <section class="node-grid">
      ${village.nodes
        .map(
          ([title, text], index) => `
            <button class="node-card ${activeIndex === index ? "is-active" : ""}" data-story-node="${index}">
              <span class="node-index" style="background:${village.color}">${index + 1}</span>
              <div><strong>${title}</strong><span>${text}</span></div>
            </button>
          `,
        )
        .join("")}
    </section>

    <section class="story-detail-panel" style="--village:${village.color}">
      <figure class="story-detail-photo" style="background-image:url('${activePhoto}')">
        <span>${activePoint?.label || "????"}</span>
      </figure>
      <div class="story-detail-copy">
        <p class="context-label">?? ${activeIndex + 1}</p>
        <h3>${activePoint?.title || activeNode[0]}</h3>
        <p>${activePoint?.text || activeNode[1]}</p>
        <div class="story-detail-tags">
          ${(guide?.words || village.tags)
            .slice(0, 4)
            .map((word, index) => `<span style="animation-delay:${index * 70}ms">${word}</span>`)
            .join("")}
        </div>
      </div>
      <div class="story-detail-actions">
        <button class="story-action dark" data-story-open-map="${activeIndex}">
          <span>????</span>
          <strong>???????</strong>
        </button>
        <button class="story-action ${collected ? "is-done" : ""}" data-story-open-game="${activeIndex}">
          <span>${collected ? "???" : "????"}</span>
          <strong>${activePoint?.action || "?????"}</strong>
        </button>
      </div>
    </section>
  `;
}

function mapPanel(village) {
  const guide = villageMapGuides[village.id];
  const focusIndex = village.mapFocus ?? 0;
  const activeIndex = guide?.points?.[state.selectedMapNode] ? state.selectedMapNode : focusIndex;
  const activePoint = guide?.points?.[activeIndex] || guide?.points?.[0];
  const routeD = guide?.route || "M12 70 C28 45 45 43 58 30 C72 17 91 36 78 54 C69 68 83 77 65 84 C48 91 32 70 12 70";
  return `
    <section class="map-stage">
      <div class="map-stage-head">
        <div>
          <p class="context-label">${guide?.eyebrow || "??????"}</p>
          <h2>${guide?.title || `${village.name}????`}</h2>
          <p class="map-caption">${guide?.terrain || "???????????????????????"}</p>
        </div>
        <span class="mini-pill">${activeIndex + 1}/${guide?.points?.length || village.nodes.length}</span>
      </div>

      <section class="village-map-shell" style="--village:${village.color}; --mapA:${village.map.a}; --mapB:${village.map.b}">
        <div class="village-scan-top">
          <span>${village.name}</span>
          <strong>${activePoint?.label || village.subtitle}</strong>
        </div>
        <div class="art-map village-map" data-village-map="${village.id}">
          <div class="terrain-grid"></div>
          <div class="terrain-fog"></div>
          <div class="scan-beam"></div>
          <div class="map-ridge ridge-1"></div>
          <div class="map-ridge ridge-2"></div>
          <svg class="village-route-svg" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <filter id="routeGlow-${village.id}" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="2.2" flood-color="#ffffff" flood-opacity="0.82" />
                <feDropShadow dx="0" dy="8" stdDeviation="4" flood-color="${village.color}" flood-opacity="0.46" />
              </filter>
            </defs>
            <path class="village-route-shadow" d="${routeD}"></path>
            <path class="village-route-main" d="${routeD}" style="filter:url(#routeGlow-${village.id})"></path>
          </svg>
          ${guide.points
            .map(
              (point, index) => `
                <button
                  class="map-dot village-map-dot ${activeIndex === index ? "is-active" : ""}"
                  data-map-node="${index}"
                  style="left:${point.x}%; top:${point.y}%; background:linear-gradient(145deg, ${village.color}, #13231d); animation-delay:${index * 70}ms"
                >
                  <strong>${point.icon}</strong>
                  <span>${point.title}</span>
                </button>
              `,
            )
            .join("")}
          <div class="map-photo-panel">
            <figure class="map-photo" style="background-image:url('${village.photos[activeIndex % village.photos.length]}')"></figure>
            <span>${guide.photoLabel}</span>
          </div>
        </div>

        <div class="village-active-card">
          <div>
            <em>${activePoint?.label || "????"}</em>
            <strong>${activePoint?.title || village.nodes[0][0]}</strong>
            <span>${activePoint?.text || village.nodes[0][1]}</span>
          </div>
          <button data-map-play="${activeIndex}" aria-label="??${activePoint?.title || "??"}???">?</button>
        </div>

        <div class="map-action-dock">
          <button class="map-action-primary" data-map-play="${activeIndex}">
            <span>????</span>
            <strong>${activePoint?.action || "??????"}</strong>
          </button>
          <button class="map-action-secondary" data-map-node-go="materials">
            <span>????</span>
            <strong>???????</strong>
          </button>
        </div>
      </section>

      <section class="node-strip">
        ${guide.points
          .map(
            (point, index) => `
              <button
                class="map-node-pill ${activeIndex === index ? "is-active" : ""}"
                data-map-node="${index}"
                style="--pill:${village.color}; animation-delay:${index * 60}ms"
              >
                <span>0${index + 1}</span>${point.title}
              </button>
            `,
          )
          .join("")}
      </section>

      <section class="word-play-panel">
        <div>
          <p class="context-label">????</p>
          <h3>???????${village.name}????</h3>
        </div>
        <div class="word-cloud" style="--village:${village.color}">
          ${guide.words
            .map(
              (word, index) => `
                <button class="word-chip" data-word-chip="${word}" style="animation-delay:${index * 110}ms">${word}</button>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="map-actions">
        <button class="map-action-card" data-map-node-go="story">
          <strong>????????</strong>
          <span>???????????????????</span>
        </button>
        <button class="map-action-card" data-map-node-go="materials">
          <strong>?????</strong>
          <span>??????????????????????</span>
        </button>
      </section>
    </section>
  `;
}

function ipShowcasePanel(village) {
  const show = ipShowcases[village.id];
  if (!show) return "";
  const stagePanels = [
    ...show.panels,
    ...(show.emojis?.length
      ? [
          {
            title: "???",
            label: "???",
            image: show.emojis[0].image,
            copy: "",
            emoji: true,
          },
        ]
      : []),
  ];
  const first = stagePanels[0];
  return `
    <section class="ip-studio" style="--village:${village.color}; --ip-accent:${show.accent}">
      <div class="ip-studio-head">
        <div>
          <p class="context-label">${show.kicker}</p>
          <h2>${show.title}</h2>
          <p>${show.copy}</p>
        </div>
        <button class="ip-mark" data-ip-mark-open="0">${show.mark}</button>
      </div>

      <div class="ip-stage">
        <div class="ip-stage-glow"></div>
        <figure class="ip-main">
          <img src="${first.image}" alt="${first.title}" data-ip-main loading="lazy">
          <figcaption>
            <em data-ip-label>${first.label}</em>
            <strong data-ip-title>${first.title}</strong>
            <span data-ip-copy>${first.copy}</span>
          </figcaption>
        </figure>
        <div class="ip-kinetic-lines" aria-hidden="true">
          <i></i><i></i><i></i><i></i>
        </div>
        <div class="emoji-stage" aria-hidden="true"></div>
      </div>

      <div class="ip-action-rail">
        ${stagePanels
          .map(
            (panel, index) => `
              <button
                class="ip-action-card ${index === 0 ? "is-active" : ""}"
                data-ip-swap
                data-ip-emoji="${panel.emoji ? "true" : "false"}"
                data-ip-image="${panel.image}"
                data-ip-title="${panel.title}"
                data-ip-label="${panel.label}"
                data-ip-copy="${panel.copy}"
              >
                <img src="${panel.image}" alt="${panel.title}" loading="lazy">
                <span>${panel.label}</span>
              </button>
            `,
          )
          .join("")}
      </div>

      <div class="emoji-wall">
        ${show.emojis
          .map(
            (emoji, index) => `
              <button
                class="emoji-chip"
                data-emoji-pop
                data-emoji-src="${emoji.image}"
                data-emoji-label="${emoji.label}"
                style="--i:${index}"
              >
                <img src="${emoji.image}" alt="${emoji.label}" loading="lazy">
              </button>
            `,
          )
          .join("")}
      </div>

      ${ipProductRunway(show)}
    </section>
  `;
}

function ipProductRunway(show) {
  const products = show.products || [];
  if (!products.length) return "";
  const first = products[0];
  const loopProducts = [...products, ...products];
  return `
    <section class="product-runway">
      <button class="product-focus" data-product-open="0">
        <figure>
          <img src="${first.image}" alt="${first.title}" data-product-main loading="lazy">
        </figure>
        <div>
          <img class="product-side-thumb" src="${first.image}" alt="" data-product-side loading="lazy">
          <span data-product-type>${first.type}</span>
          <strong data-product-title>${first.title}</strong>
        </div>
      </button>
      <div class="product-belt">
        <div class="product-track">
        ${loopProducts
          .map(
            (product, index) => `
              <button
                class="product-tile ${index === 0 ? "is-active" : ""}"
                data-product-focus
                data-product-open="${index % products.length}"
                data-product-image="${product.image}"
                data-product-title="${product.title}"
                data-product-type="${product.type}"
                style="--i:${index % 7}"
              >
                <img src="${product.image}" alt="${product.title}" loading="lazy">
              </button>
            `,
          )
          .join("")}
        </div>
      </div>
    </section>
  `;
}

function activeProduct() {
  const village = villages[state.village] || villages.jinxing;
  const show = ipShowcases[village.id] || ipShowcases.jinxing;
  const products = show.products || ipShowcases.jinxing.products || [];
  const index = products[state.productIndex] ? state.productIndex : 0;
  return { village, show, products, index, product: products[index] };
}

function productDetailView() {
  const { village, products, index, product } = activeProduct();
  if (!product) {
    setRoute("detail", { village: village.id, tab: "materials" });
    return "";
  }
  return shell(`
    <section class="product-detail" style="--village:${village.color}">
      <div class="product-detail-top">
        <button class="back" data-go-product-back>?</button>
        <div>
          <p class="context-label">${village.name}??</p>
          <h1>${product.title}</h1>
        </div>
        <span class="mini-pill">${product.type}</span>
      </div>

      <figure class="product-detail-image">
        <img src="${product.image}" alt="${product.title}">
      </figure>

      <div class="product-detail-strip">
        ${products
          .map(
            (item, nextIndex) => `
              <button
                class="product-detail-thumb ${nextIndex === index ? "is-active" : ""}"
                data-product-detail-index="${nextIndex}"
              >
                <img src="${item.image}" alt="${item.title}" loading="lazy">
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `);
}

function materialsPanel(village) {
  const cards = village.materials;
  return `
    <section class="material-intro">
      <div>
        <p class="context-label">????</p>
        <h2>IP ????</h2>
        <p>???????????????????????????????????????</p>
      </div>
    </section>
    ${ipShowcasePanel(village)}
    <section class="material-grid masonry">
      ${cards
        .map(([photo, title, text, size], index) => {
          const productIndex = productIndexForMaterial(village, photo);
          const isProduct = productIndex >= 0;
          const tag = isProduct ? "button" : "article";
          const action = isProduct ? `data-material-product-open="${productIndex}" aria-label="??${title}"` : "";
          return `
            <${tag} class="material-card material-card-${size || "square"} ${photo.includes("/ip/") ? "material-card-product" : ""} ${isProduct ? "is-clickable" : ""}" ${action}>
              <figure class="material-photo" style="background-image:url('${photo}')"></figure>
              <div class="material-copy">
                <strong>${title}</strong>
                <span>${text}</span>
              </div>
            </${tag}>
          `;
        })
        .join("")}
    </section>
  `;
}

function gameView() {
  const village = villages[state.gameVillage] || villages.yaoli;
  const guide = villageMapGuides[village.id];
  const collection = getGameCollection(village.id);
  const activeIndex = guide.points[state.gameActiveNode] ? state.gameActiveNode : 0;
  const activePoint = guide.points[activeIndex];
  const progress = Math.round((collection.size / guide.points.length) * 100);
  const complete = collection.size >= guide.points.length;
  const stageTokens = guide.points
    .map((point, index) => {
      const collected = collection.has(index);
      return `
        <button
          class="game-token node-token ${collected ? "collected" : ""} ${activeIndex === index ? "is-active" : ""}"
          data-game-node="${index}"
          style="left:${point.x}%; top:${point.y}%; background:linear-gradient(145deg, ${village.color}, #14231e)"
        >
          <span class="token-number">${point.icon}</span>
          <span class="token-name">${point.title}</span>
        </button>
      `;
    })
    .join("");
  return shell(`
    <section class="page-title game-title">
      <div>
        <p>?????</p>
        <h1>${village.name}????</h1>
        <p>???????????????????????????????</p>
      </div>
      <span class="mini-pill">${collection.size}/${guide.points.length}</span>
    </section>

    <section class="game-village-switch" aria-label="????">
      ${Object.values(villages)
        .map(
          (v) => `
            <button class="${v.id === village.id ? "is-active" : ""}" data-game-village="${v.id}" style="--village:${v.color}">
              <span>${v.name.slice(0, 2)}</span>
              <strong>${v.name}</strong>
            </button>
          `,
        )
        .join("")}
    </section>

    <section class="game-panel mission-game" style="--village:${village.color}; --mapA:${village.map.a}; --mapB:${village.map.b}">
      <div class="score-card mission-score">
        <div>
          <span>????</span>
          <strong>${progress}%</strong>
        </div>
        <div class="progress-track"><div class="progress-fill" style="--progress:${progress}%"></div></div>
      </div>

      <div class="game-stage mission-stage">
        <svg class="game-route-svg" viewBox="0 0 100 100" aria-hidden="true">
          <path d="${guide.route}"></path>
        </svg>
        <span class="game-spark s1">${guide.words[0]}</span>
        <span class="game-spark s2">${guide.words[1]}</span>
        <span class="game-spark s3">${guide.words[2]}</span>
        ${stageTokens}
        ${
          complete
            ? `<div class="game-complete"><strong>${village.name}???????</strong><span>??????????????????????</span></div>`
            : ""
        }
      </div>

      <section class="mission-console">
        <div class="mission-focus">
          <span>${activePoint.label}</span>
          <h2>${activePoint.title}</h2>
          <p>${activePoint.text}</p>
          <button class="mission-collect ${collection.has(activeIndex) ? "is-collected" : ""}" data-game-collect="${activeIndex}">
            ${collection.has(activeIndex) ? "???????" : activePoint.action}
          </button>
        </div>
        <div class="inventory-grid">
          ${guide.points
            .map(
              (point, index) => `
                <button class="inventory-slot ${collection.has(index) ? "is-filled" : ""}" data-game-node="${index}">
                  <span>${collection.has(index) ? point.icon : index + 1}</span>
                  <strong>${point.label}</strong>
                </button>
              `,
            )
            .join("")}
        </div>
      </section>

      <div class="game-final-actions">
        <button data-game-reset>????</button>
        <button data-game-open-map>??????</button>
      </div>
    </section>
  `);
}

function nodePlayView() {
  const village = villages[state.gameVillage] || villages.yaoli;
  const guide = villageMapGuides[village.id];
  const activeIndex = guide.points[state.gameActiveNode] ? state.gameActiveNode : village.mapFocus ?? 0;
  const point = guide.points[activeIndex] || guide.points[0];
  const scene = nodePlayScenes[village.id]?.[activeIndex] || nodePlayScenes.yaoli[1];
  return shell(`
    <section class="play-3d-page" data-play-3d-page data-play-village="${village.id}" data-node="${activeIndex}" data-scene="${scene.type}" style="--village:${village.color}; --mapA:${village.map.a}; --mapB:${village.map.b}">
      <div class="play-3d-root" data-play-3d-root></div>
    </section>
  `);
}

function playSceneMarkup(scene, point, village) {
  const layers = (scene.layers || scene.steps).map((layer, index) => `<span class="stage-layer layer-${index + 1}">${layer}</span>`).join("");
  const common = `
    <span class="scene-glow"></span>
    <span class="scene-label">${point.icon}</span>
    <div class="village-scene-context">
      <strong>${village.name}</strong>
      <span>${point.title}</span>
    </div>
    <div class="stage-layers">${layers}</div>
  `;
  const variants = {
    slope: `
      ${common}
      <div class="slope-hill"></div>
      <div class="slope-cloud">?</div>
      <div class="slope-rider">?</div>
      <div class="slope-gate">??</div>
      <span class="trail-dot d1"></span><span class="trail-dot d2"></span><span class="trail-dot d3"></span>
    `,
    clay: `
      ${common}
      <div class="clay-wheel"></div>
      <div class="clay-disc">?</div>
      <div class="clay-stamp">?</div>
      <div class="kiln-fire"><span></span><span></span><span></span></div>
    `,
    book: `
      ${common}
      <div class="magic-book"><span></span><span></span></div>
      <span class="floating-word w1">?</span><span class="floating-word w2">?</span><span class="floating-word w3">?</span>
    `,
    coffee: `
      ${common}
      <div class="coffee-cup"></div>
      <span class="steam st1">?</span><span class="steam st2">?</span><span class="stamp-ring">?</span>
    `,
    mosaic: `
      ${common}
      <div class="mosaic-wall">${["", "", "", "", "", "", "", "", ""].map((_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
    `,
    paw: `
      ${common}
      <div class="paw-path">${["??", "??", "??", "??"].map((paw, i) => `<i style="--i:${i}">${paw}</i>`).join("")}</div>
      <div class="rest-island">??</div>
    `,
    leaf: `
      ${common}
      <div class="leaf-card"><i></i><i></i><i></i></div>
      <span class="leaf-float l1">?</span><span class="leaf-float l2">?</span>
    `,
    market: `
      ${common}
      <div class="market-stand"><i></i><i></i><i></i></div>
      <div class="light-string">${["", "", "", "", ""].map((_, i) => `<span style="--i:${i}"></span>`).join("")}</div>
    `,
    walk: `
      ${common}
      <div class="walk-route"></div>
      <div class="walker">?</div>
      <span class="wind-line wl1"></span><span class="wind-line wl2"></span>
    `,
    jade: `
      ${common}
      <div class="jade-pieces">${["?", "?", "?", "?"].map((piece, i) => `<span style="--i:${i}">${piece}</span>`).join("")}</div>
      <div class="jade-core">?</div>
    `,
    ginkgo: `
      ${common}
      <div class="ginkgo-tree"></div>
      ${["?", "?", "?", "?"].map((leaf, i) => `<span class="ginkgo-leaf" style="--i:${i}">${leaf}</span>`).join("")}
    `,
    tea: `
      ${common}
      <div class="tea-mountain"></div>
      <div class="tea-sprout">?</div>
      <div class="tea-box">??</div>
    `,
    star: `
      ${common}
      <div class="star-classroom"></div>
      <span class="star-burst">?</span>
      <span class="star-path p1"></span><span class="star-path p2"></span>
    `,
    home: `
      ${common}
      <div class="homestay-house">${["", "", "", ""].map((_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
      <span class="moon-dot">?</span>
    `,
    workshop: `
      ${common}
      <div class="workshop-gear">?</div>
      <div class="workshop-badge">?</div>
      <span class="workshop-part a">?</span><span class="workshop-part b">?</span><span class="workshop-part c">?</span>
    `,
  };
  return variants[scene.type] || variants.slope;
}

function scanView() {
  return shell(`
    <section class="scan-panel">
      <p class="eyebrow" style="color:rgba(17,31,26,.6)">????</p>
      <h1 class="scan-title">??????</h1>
      <div class="qr-wrap"><div class="qr" aria-label="?????"></div></div>
      <div class="scan-list">
        ${Object.values(villages)
          .map(
            (v, index) => `
              <button class="scan-item" data-village="${v.id}">
                <div>
                  <strong>${v.name}?????</strong>
                  <span>${v.title} / ${v.subtitle}</span>
                </div>
                <span class="scan-code" style="background:${v.color}">0${index + 1}</span>
              </button>
            `,
          )
          .join("")}
        <button class="scan-item" data-go="exhibit">
          <div>
            <strong>???????</strong>
            <span>???????????????</span>
          </div>
          <span class="scan-code" style="background:#2a3b33">04</span>
        </button>
      </div>
    </section>
  `);
}

function exhibitView() {
  const posterIndex = state.posterIndex || 0;
  const poster = posterItems[posterIndex];
  const village = villages[poster.id];
  const prevPoster = posterItems[(posterIndex + posterItems.length - 1) % posterItems.length];
  const nextPosterItem = posterItems[(posterIndex + 1) % posterItems.length];
  return shell(`
    <section class="page-title">
      <div>
        <p>????</p>
        <h1>????</h1>
        <p>??????????????????????????</p>
      </div>
    </section>

    <section class="poster-carousel">
      <button class="carousel-nav prev" data-poster-nav="-1" aria-label="???">?</button>
      <button class="carousel-nav next" data-poster-nav="1" aria-label="???">?</button>
      <div class="poster-side poster-left" style="background-image:url('${villages[prevPoster.id].cover}')"></div>
      <div class="poster-side poster-right" style="background-image:url('${villages[nextPosterItem.id].cover}')"></div>
      <div class="poster-frame" data-poster-swipe style="background-image:url('${village.cover}')">
        <div class="poster-backdrop" style="--poster:${village.color}"></div>
        <div class="poster-sheen"></div>
        <div class="poster-badge">${posterIndex + 1}/3</div>
        <div class="poster-mark" aria-hidden="true">${poster.glyph}</div>
        <div class="poster-copy">
          <p class="eyebrow">${poster.accent}</p>
          <h2>${poster.name}</h2>
          <p>${poster.line}</p>
        </div>
      </div>
      <div class="poster-dots">
        ${[0, 1, 2]
          .map((i) => `<button class="poster-dot ${i === posterIndex ? "is-active" : ""}" data-poster-dot="${i}" aria-label="?? ${i + 1}"></button>`)
          .join("")}
      </div>
    </section>

    <section class="section-head">
      <div>
        <h2>????</h2>
        <p>??????????????????????????</p>
      </div>
    </section>

    <section class="exhibit-steps">
      ${[
        ["????", "??????????????????????"],
        ["????", "?????????????????????"],
        ["????", "????????????????????"],
        ["????", "????????????????????"],
        ["????", "????????????????"],
      ]
        .map(
          ([title, text]) => `
            <article class="exhibit-step">
              <span class="check">?</span>
              <div><strong>${title}</strong><span>${text}</span></div>
            </article>
          `,
        )
        .join("")}
    </section>
  `);
}

function render() {
  syncDock();
  app.classList.toggle("is-play", state.route === "play");
  const views = {
    home: homeView,
    villages: villagesView,
    profile: profileView,
    impression: impressionView,
    detail: detailView,
    product: productDetailView,
    game: gameView,
    play: nodePlayView,
    scan: scanView,
    exhibit: exhibitView,
  };
  app.innerHTML = views[state.route]() ;
  attachHandlers();
  if (state.route === "play") {
    window.play3d?.mount?.();
  } else {
    window.play3d?.dispose?.();
  }
}

function attachTapEffects() {
  app.querySelectorAll("button").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      const rect = button.getBoundingClientRect();
      button.style.setProperty("--tap-x", `${event.clientX - rect.left}px`);
      button.style.setProperty("--tap-y", `${event.clientY - rect.top}px`);
      button.classList.remove("is-tapping");
      void button.offsetWidth;
      button.classList.add("is-tapping");
      window.setTimeout(() => button.classList.remove("is-tapping"), 520);
    });
  });
}

function attachDragStrips() {
  app.querySelectorAll("[data-drag-strip]").forEach((strip) => {
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let hasDragged = false;
    let startVillageCard = null;
    let startProfileButton = null;

    strip.addEventListener("pointerdown", (event) => {
      isDown = true;
      startX = event.clientX;
      startScroll = strip.scrollLeft;
      hasDragged = false;
      startProfileButton = event.target.closest("[data-village-profile]");
      startVillageCard = event.target.closest("[data-village]");
      strip.classList.add("is-dragging");
      strip.setPointerCapture?.(event.pointerId);
    });

    strip.addEventListener("pointermove", (event) => {
      if (!isDown) return;
      const walk = event.clientX - startX;
      if (Math.abs(walk) > 4) {
        hasDragged = true;
        strip.scrollLeft = startScroll - walk;
      }
    });

    strip.addEventListener("pointerup", () => {
      if (!isDown) return;
      const profileId = startProfileButton?.dataset.villageProfile;
      const villageId = startVillageCard?.dataset.village;
      isDown = false;
      strip.classList.remove("is-dragging");
      if (!hasDragged && profileId && villages[profileId]) {
        setRoute("profile", {
          village: profileId,
        });
        startProfileButton = null;
        startVillageCard = null;
        return;
      }
      if (!hasDragged && villageId && villages[villageId]) {
        setRoute("detail", {
          village: villageId,
          tab: "map",
          selectedMapNode: villages[villageId]?.mapFocus ?? 0,
          selectedStoryNode: villages[villageId]?.mapFocus ?? 0,
        });
      }
      startProfileButton = null;
      startVillageCard = null;
    });

    ["pointercancel", "pointerleave"].forEach((type) => {
      strip.addEventListener(type, () => {
        isDown = false;
        hasDragged = false;
        startProfileButton = null;
        startVillageCard = null;
        strip.classList.remove("is-dragging");
      });
    });
  });
}

function attachPosterSwipe() {
  const frame = app.querySelector("[data-poster-swipe]");
  if (!frame) return;
  let startX = 0;
  let isDown = false;

  frame.addEventListener("pointerdown", (event) => {
    isDown = true;
    startX = event.clientX;
    frame.setPointerCapture?.(event.pointerId);
  });

  frame.addEventListener("pointerup", (event) => {
    if (!isDown) return;
    isDown = false;
    const delta = event.clientX - startX;
    if (Math.abs(delta) > 44) {
      nextPoster(delta < 0 ? 1 : -1);
    }
  });
}

function attachHandlers() {
  attachTapEffects();
  attachDragStrips();
  attachPosterSwipe();

  app.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => {
      const dest = button.dataset.go;
      if (dest === "home" || dest === "villages" || dest === "scan" || dest === "game" || dest === "exhibit") {
        setRoute(dest);
      }
    });
  });

  app.querySelectorAll("[data-impression]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("impression", {
        impression: button.dataset.impression,
      });
    });
  });

  app.querySelectorAll("[data-impression-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.impressionAction;
      if (key === "game") {
        setRoute("game", {
          village: state.village || "yaoli",
          gameVillage: state.village || "yaoli",
          gameActiveNode: villages[state.village || "yaoli"]?.mapFocus ?? 0,
        });
        return;
      }
      const target = impressionDetails[key];
      setRoute("detail", {
        village: state.village || "yaoli",
        tab: target?.tab || "map",
        selectedMapNode: villages[state.village || "yaoli"]?.mapFocus ?? 0,
      });
    });
  });

  app.querySelectorAll("[data-village-profile]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      setRoute("profile", {
        village: button.dataset.villageProfile,
      });
    });
  });

  app.querySelectorAll("[data-profile-open]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("detail", {
        village: state.village,
        tab: button.dataset.profileOpen,
        selectedMapNode: villages[state.village]?.mapFocus ?? 0,
        selectedStoryNode: villages[state.village]?.mapFocus ?? 0,
      });
    });
  });

  app.querySelectorAll("[data-profile-node]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.profileNode);
      setRoute("play", {
        village: state.village,
        gameVillage: state.village,
        gameActiveNode: index,
        selectedMapNode: index,
      });
    });
  });

  app.querySelectorAll("[data-shortcut]").forEach((button) => {
    button.addEventListener("click", () => {
      const shortcut = button.dataset.shortcut;
      const villageId = button.dataset.village || state.village || "yaoli";
      if (shortcut === "game") {
        setRoute("game", {
          village: villageId,
          gameVillage: villageId,
          gameActiveNode: villages[villageId]?.mapFocus ?? 0,
        });
        return;
      }
      if (shortcut === "map" || shortcut === "materials") {
        setRoute("detail", {
          village: villageId,
          tab: shortcut === "map" ? "map" : "materials",
          selectedMapNode: villages[villageId]?.mapFocus ?? 0,
        });
      }
    });
  });

  app.querySelectorAll("[data-village]:not([data-shortcut])").forEach((button) => {
    button.addEventListener("click", () =>
      setRoute("detail", {
        village: button.dataset.village,
        tab: "map",
        selectedMapNode: villages[button.dataset.village]?.mapFocus ?? 0,
        selectedStoryNode: villages[button.dataset.village]?.mapFocus ?? 0,
      }),
    );
  });

  app.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("detail", {
        village: state.village,
        tab: button.dataset.tab,
        selectedMapNode: state.selectedMapNode,
        selectedStoryNode: state.selectedMapNode,
      });
    });
  });

  app.querySelectorAll("[data-story-node]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.storyNode);
      setRoute("detail", {
        village: state.village,
        tab: "story",
        selectedStoryNode: index,
        selectedMapNode: index,
      });
    });
  });

  app.querySelectorAll("[data-story-open-map]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.storyOpenMap);
      setRoute("detail", {
        village: state.village,
        tab: "map",
        selectedMapNode: index,
        selectedStoryNode: index,
      });
    });
  });

  app.querySelectorAll("[data-story-open-game]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.storyOpenGame);
      setRoute("play", {
        village: state.village,
        gameVillage: state.village,
        gameActiveNode: index,
        selectedMapNode: index,
      });
    });
  });

  app.querySelectorAll("[data-map-node]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("detail", {
        village: state.village,
        tab: "map",
        selectedMapNode: Number(button.dataset.mapNode),
        selectedStoryNode: Number(button.dataset.mapNode),
      });
    });
  });

  app.querySelectorAll("[data-map-play]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.mapPlay);
      const nextIndex = Number.isFinite(index) ? index : state.selectedMapNode;
      setRoute("play", {
        village: state.village,
        gameVillage: state.village,
        gameActiveNode: nextIndex,
        selectedMapNode: nextIndex,
      });
    });
  });

  app.querySelectorAll("[data-word-chip]").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-collected");
      showToast(`????${button.dataset.wordChip}??`);
      vibrate(14);
    });
  });

  app.querySelectorAll("[data-map-village]").forEach((button) => {
    button.addEventListener("click", () => {
      const villageId = button.dataset.mapVillage;
      setRoute("detail", {
        village: villageId,
        tab: "map",
        selectedMapNode: villages[villageId]?.mapFocus ?? 0,
      });
    });
  });

  app.querySelectorAll("[data-map-node-go]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("detail", {
        village: state.village,
        tab: button.dataset.mapNodeGo,
        selectedMapNode: state.selectedMapNode,
        selectedStoryNode: state.selectedMapNode,
      });
    });
  });

  app.querySelectorAll("[data-ip-swap]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const studio = button.closest(".ip-studio");
      const frame = studio?.querySelector(".ip-main");
      const main = studio?.querySelector("[data-ip-main]");
      if (!studio || !main) return;
      const isEmoji = button.dataset.ipEmoji === "true";
      main.classList.remove("is-switching");
      void main.offsetWidth;
      main.classList.add("is-switching");
      frame?.classList.toggle("is-emoji-mode", isEmoji);
      main.src = button.dataset.ipImage;
      main.alt = button.dataset.ipTitle || "";
      studio.querySelector("[data-ip-title]").textContent = button.dataset.ipTitle || "";
      studio.querySelector("[data-ip-label]").textContent = button.dataset.ipLabel || "";
      studio.querySelector("[data-ip-copy]").textContent = button.dataset.ipCopy || "";
      studio.querySelectorAll("[data-ip-swap]").forEach((next) => next.classList.toggle("is-active", next === button));
      studio.querySelector(".ip-stage")?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => main.classList.remove("is-switching"), 520);
      vibrate(10);
    });
  });

  app.querySelectorAll("[data-material-product-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const productIndex = Number(button.dataset.materialProductOpen);
      setRoute("product", {
        village: state.village,
        productIndex: Number.isFinite(productIndex) ? productIndex : 0,
      });
    });
  });

  app.querySelectorAll("[data-emoji-pop]").forEach((button) => {
    button.addEventListener("click", () => {
      const stage = button.closest(".ip-studio")?.querySelector(".emoji-stage");
      if (!stage) return;
      const burst = document.createElement("img");
      burst.className = "emoji-burst";
      burst.src = button.dataset.emojiSrc;
      burst.alt = "";
      burst.style.setProperty("--tx", `${Math.round(-90 + Math.random() * 180)}px`);
      burst.style.setProperty("--ty", `${Math.round(-150 - Math.random() * 90)}px`);
      burst.style.setProperty("--rot", `${Math.round(-22 + Math.random() * 44)}deg`);
      burst.style.left = `${18 + Math.random() * 64}%`;
      burst.style.top = `${58 + Math.random() * 24}%`;
      stage.appendChild(burst);
      window.setTimeout(() => burst.remove(), 1100);
      button.classList.add("just-popped");
      window.setTimeout(() => button.classList.remove("just-popped"), 520);
      vibrate(12);
    });
  });

  app.querySelectorAll("[data-ip-mark-open]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("product", {
        village: state.village,
        productIndex: Number(button.dataset.ipMarkOpen) || 0,
      });
    });
  });

  app.querySelectorAll("[data-product-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      const productIndex = Number(button.dataset.productOpen);
      const runway = button.closest(".product-runway");
      const main = runway?.querySelector("[data-product-main]");
      if (!runway || !main) return;
      main.classList.remove("is-switching");
      void main.offsetWidth;
      main.classList.add("is-switching");
      main.src = button.dataset.productImage;
      main.alt = button.dataset.productTitle || "";
      const side = runway.querySelector("[data-product-side]");
      if (side) side.src = button.dataset.productImage;
      runway.querySelector("[data-product-title]").textContent = button.dataset.productTitle || "";
      runway.querySelector("[data-product-type]").textContent = button.dataset.productType || "";
      runway.querySelectorAll("[data-product-focus]").forEach((next) => next.classList.toggle("is-active", next === button));
      window.setTimeout(() => main.classList.remove("is-switching"), 520);
      vibrate(10);
      if (Number.isFinite(productIndex)) {
        setTimeout(() => {
          setRoute("product", {
            village: state.village,
            productIndex,
          });
        }, 120);
      }
    });
  });

  app.querySelectorAll("[data-product-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.closest("[data-product-focus]")) return;
      const productIndex = Number(button.dataset.productOpen);
      setRoute("product", {
        village: state.village,
        productIndex: Number.isFinite(productIndex) ? productIndex : state.productIndex,
      });
    });
  });

  app.querySelectorAll("[data-product-detail-index]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("product", {
        village: state.village,
        productIndex: Number(button.dataset.productDetailIndex),
      });
    });
  });

  app.querySelectorAll("[data-go-product-back]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("detail", {
        village: state.village,
        tab: "materials",
      });
    });
  });

  app.querySelectorAll("[data-poster-nav]").forEach((button) => {
    button.addEventListener("click", () => nextPoster(Number(button.dataset.posterNav)));
  });

  app.querySelectorAll("[data-poster-dot]").forEach((button) => {
    button.addEventListener("click", () => {
      state.posterIndex = Number(button.dataset.posterDot);
      render();
      vibrate(8);
    });
  });

  app.querySelectorAll("[data-game-village]").forEach((button) => {
    button.addEventListener("click", () => {
      const villageId = button.dataset.gameVillage;
      setRoute("game", {
        village: villageId,
        gameVillage: villageId,
        gameActiveNode: villages[villageId]?.mapFocus ?? 0,
      });
    });
  });

  app.querySelectorAll("[data-game-node]").forEach((button) => {
    button.addEventListener("click", () => {
      state.gameActiveNode = Number(button.dataset.gameNode);
      render();
      vibrate(10);
    });
  });

  app.querySelectorAll("[data-game-collect]").forEach((button) => {
    button.addEventListener("click", () => {
      const village = villages[state.gameVillage] || villages.yaoli;
      const index = Number(button.dataset.gameCollect);
      setRoute("play", {
        village: village.id,
        gameVillage: village.id,
        gameActiveNode: index,
        selectedMapNode: index,
      });
    });
  });

  app.querySelectorAll("[data-play-node]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.playNode);
      setRoute("play", {
        village: state.gameVillage || state.village,
        gameVillage: state.gameVillage || state.village,
        gameActiveNode: index,
        selectedMapNode: index,
      });
    });
  });

  app.querySelectorAll("[data-play-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const step = Number(button.dataset.playStep);
      const village = villages[state.gameVillage] || villages.yaoli;
      const guide = villageMapGuides[village.id];
      const index = guide.points[state.gameActiveNode] ? state.gameActiveNode : 0;
      const scene = nodePlayScenes[village.id]?.[index] || nodePlayScenes.yaoli[1];
      state.playSteps.add(step);
      showToast(`${scene.steps[step]} ???`);
      render();
      vibrate(12);
    });
  });

  app.querySelectorAll("[data-play-complete]").forEach((button) => {
    button.addEventListener("click", () => {
      const village = villages[state.gameVillage] || villages.yaoli;
      const guide = villageMapGuides[village.id];
      const index = Number(button.dataset.playComplete);
      const scene = nodePlayScenes[village.id]?.[index] || nodePlayScenes.yaoli[1];
      if (state.playSteps.size < scene.steps.length && !getGameCollection(village.id).has(index)) {
        showToast(`????? ${scene.steps.length - state.playSteps.size} ?????`);
        button.classList.add("needs-steps");
        setTimeout(() => button.classList.remove("needs-steps"), 520);
        vibrate(18);
        return;
      }
      const collection = getGameCollection(village.id);
      collection.add(index);
      if (collection.size >= guide.points.length) {
        state.discovered.add(village.id);
        state.score = state.discovered.size;
      }
      showToast(`${scene.verb || guide.points[index]?.action || "??"}??`);
      button.classList.add("just-completed");
      setTimeout(() => {
        setRoute("game", {
          village: village.id,
          gameVillage: village.id,
          gameActiveNode: index,
          selectedMapNode: index,
        });
      }, 520);
      vibrate(18);
    });
  });

  app.querySelectorAll("[data-play-back]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("game", {
        village: state.gameVillage || state.village,
        gameVillage: state.gameVillage || state.village,
        gameActiveNode: state.gameActiveNode,
        selectedMapNode: state.gameActiveNode,
      });
    });
  });

  app.querySelectorAll("[data-game-reset]").forEach((button) => {
    button.addEventListener("click", () => {
      const villageId = state.gameVillage || "yaoli";
      state.gameCollected[villageId] = new Set();
      state.discovered.delete(villageId);
      state.score = state.discovered.size;
      state.gameActiveNode = villages[villageId]?.mapFocus ?? 0;
      showToast("???????");
      render();
    });
  });

  app.querySelectorAll("[data-game-open-map]").forEach((button) => {
    button.addEventListener("click", () => {
      setRoute("detail", {
        village: state.gameVillage || state.village,
        tab: "map",
        selectedMapNode: state.gameActiveNode,
        selectedStoryNode: state.gameActiveNode,
      });
    });
  });

  app.querySelectorAll("[data-token]").forEach((button) => {
    button.addEventListener("click", () => {
      const token = button.dataset.token;
      if (!state.discovered.has(token)) {
        state.discovered.add(token);
        state.score = state.discovered.size;
        button.classList.add("collected");
        showToast(`?? ${villages[token].name}`);
        vibrate(18);
        const fill = app.querySelector(".progress-fill");
        const score = app.querySelector(".score-num");
        if (fill) fill.style.setProperty("--progress", `${(state.score / 3) * 100}%`);
        if (score) score.textContent = `${state.score} / 3`;
        if (state.score >= 3) {
          setTimeout(() => render(), 520);
        }
      } else {
        showToast(`${villages[token].name} ???`);
      }
    });
  });
}

dockItems.forEach((button) => {
  button.addEventListener("click", () => setRoute(button.dataset.route));
});

const initial = readRoute();
Object.assign(state, initial);

Object.assign(window, {
  villages,
  villageMapGuides,
  nodePlayScenes,
  state,
  setRoute,
  showToast,
  getGameCollection,
});

if (window.location.hash === "#all") {
  state.discovered = new Set(gameOrder);
  state.score = 3;
}

render();

setInterval(() => {
  if (state.route === "exhibit") {
    state.posterIndex = (state.posterIndex + 1) % posterItems.length;
    render();
  }
}, 3600);
