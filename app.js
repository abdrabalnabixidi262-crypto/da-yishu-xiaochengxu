const villages = {
  gaoqiao: {
    id: "gaoqiao",
    name: "高桥村",
    title: "带着宠物去村里",
    subtitle: "城边友好生活地图",
    type: "城郊未来乡村 / 宠物友好村",
    location: "杭州市 · 余杭区",
    regionKey: "杭州市",
    cover: "./assets/premium-gaoqiao.png",
    photos: [
      "./assets/real/gaoqiao-cafe.jpg",
      "./assets/real/gaoqiao-walk.jpg",
      "./assets/premium-gaoqiao.png",
    ],
    mapFocus: 2,
    color: "#5f9d66",
    map: { a: "#d8eadb", b: "#b8d6bb" },
    tags: ["宠物友好", "青年市集", "田野步道"],
    story:
      "高桥村不是远方的景区，而是城市边缘正在生长的友好乡村。小程序把宠物休憩点、乡村咖啡、青年市集与良渚文化点串成一张可浏览、可打卡、可收藏的遛村地图。",
    nodes: [
      ["宠物休憩点", "为带宠物来的观众保留友好停留点。"],
      ["青年市集", "展示高桥村年轻、开放的乡创生活。"],
      ["田野步道", "把城边生活与田野慢行连接起来。"],
      ["友好商户", "扫码查看门贴、路线卡和服务说明。"],
      ["良渚文化点", "作为高桥村地域记忆的文化锚点。"],
    ],
    materials: [
      ["./assets/real/gaoqiao-cafe.jpg", "宠物友好贴纸", "贴在故事卡与导览牌上，成为高桥的轻量识别。", "tall"],
      ["./assets/real/gaoqiao-walk.jpg", "遛村路线卡", "沿田野步道展开，把步行线路做成可收藏卡片。", "wide"],
      ["./assets/premium-gaoqiao.png", "商户门贴", "咖啡、休憩点与友好商户的门口识别。", "square"],
      ["./assets/real/gaoqiao-cafe.jpg", "带它去村里明信片", "把宠物友好的瞬间做成可带走的村庄记忆。", "tall"],
    ],
  },
  yaoli: {
    id: "yaoli",
    name: "窑里村",
    title: "向窑里，追云去",
    subtitle: "儿童友好艺术村",
    type: "儿童友好艺术村 / 亲子研学",
    location: "湖州市 · 南浔区",
    regionKey: "湖州市",
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
    tags: ["云朵", "水乡", "亲子研学"],
    story:
      "窑里村从儿童视角重新绘制村庄。云朵、河流、草地、书吧和手作课堂成为地图上的故事节点，观众可以通过研学护照和任务卡完成一次小小的乡村艺术探索。",
    nodes: [
      ["云朵书吧", "作为儿童友好视觉的温柔入口。"],
      ["草地活动区", "承接亲子共创和任务卡互动。"],
      ["艺术展览点", "让村庄从游览对象变成创作现场。"],
      ["手作课堂", "对应研学护照里的打卡任务。"],
      ["水漾路线", "把水乡气质转化成可走的地图线索。"],
    ],
    materials: [
      ["./assets/real/yaoli-workshop-1.jpg", "云朵研学护照", "记录亲子任务、陶艺体验与村庄发现。", "tall"],
      ["./assets/real/yaoli-workshop-3.jpg", "儿童任务卡", "引导观众用手作、观察和涂画完成探索。", "square"],
      ["./assets/real/yaoli-workshop-2.jpg", "云朵贴纸包", "适合共创墙、样本盒与展板旁的小互动。", "wide"],
      ["./assets/real/yaoli-wall.jpg", "水漾窑里书签", "把水乡气质做成柔和、轻巧的可带走物。", "square"],
    ],
  },
  jinxing: {
    id: "jinxing",
    name: "金星村",
    title: "人人有事做，家家有收入",
    subtitle: "共富金星地图",
    type: "千万工程典型案例 / 共同富裕样板村",
    location: "衢州市 · 开化县",
    regionKey: "衢州市",
    cover: "./assets/premium-jinxing.png",
    photos: [
      "./assets/real/jinxing-panorama.jpg",
      "./assets/real/jinxing-village.jpg",
      "./assets/premium-jinxing.png",
    ],
    mapFocus: 4,
    color: "#d7a849",
    map: { a: "#f7e6ae", b: "#b9d989" },
    tags: ["共富工坊", "龙顶茶", "银杏古树"],
    story:
      "金星村把钱江源生态、银杏古树、龙顶茶、红色研学与共富工坊串联成一张可走、可听、可收集的共富地图。观众不只是在看乡村风景，也能看见村民增收、产业协作和山区村庄现代化的真实路径。",
    nodes: [
      ["银杏古树", "以金色叶脉作为村庄记忆和视觉纹样的起点。"],
      ["龙顶茶园", "连接茶产业、包装样机和乡村增收故事。"],
      ["红色研学点", "承接红课堂学习卡与现场研学路线。"],
      ["金星供销社", "展示农产品、故事卡和可带走的村庄礼物。"],
      ["共富工坊", "把人人参与、家家增收转化成可扫码理解的共富节点。"],
    ],
    materials: [
      ["./assets/real/jinxing-panorama.jpg", "金星龙顶茶包装", "把茶园、茶芽和共富叙事做成可陈列的包装样机。", "wide"],
      ["./assets/real/jinxing-village.jpg", "银杏故事书签", "用金色叶片记录村庄年代感和乡土记忆。", "square"],
      ["./assets/premium-jinxing.png", "红课堂学习卡", "对应红色研学点，适合展板旁扫码领取。", "square"],
      ["./assets/real/jinxing-panorama.jpg", "共富工坊徽章", "把村民协作、产业增收和共同富裕做成轻量识别。", "tall"],
    ],
  },
};

const villageMapGuides = {
  gaoqiao: {
    eyebrow: "宠物友好村落导览",
    title: "带它去村里路线",
    route: "M9 70 C18 54 29 54 38 44 C47 34 51 20 65 24 C78 28 80 43 70 53 C61 62 55 72 66 80 C76 87 87 82 92 68",
    terrain: "田野水网、猫岛、植物美学与良渚记忆被压进一张可遛、可停、可打卡的村内地图。",
    photoLabel: "猫岛 / 知物堂 / 田野步道",
    words: ["宠", "友", "田", "创"],
    points: [
      {
        title: "猫岛人宠空间",
        label: "人宠共享",
        x: 18,
        y: 62,
        icon: "🐾",
        action: "领取宠物友好贴纸",
        text: "从老旧甲鱼塘转化而来的宠物友好场景，适合做路线起点和第一枚打卡章。",
      },
      {
        title: "知物堂植物美学",
        label: "植物工坊",
        x: 38,
        y: 43,
        icon: "✿",
        action: "生成植物纹样卡",
        text: "把废弃厂房变成绿意流动的美学空间，观众可以采集叶形纹样。",
      },
      {
        title: "青年市集口袋",
        label: "乡创摊位",
        x: 64,
        y: 25,
        icon: "✦",
        action: "点亮青年摊位",
        text: "展示高桥村青年创业、宠物周边和乡村生活方式的轻量市集。",
      },
      {
        title: "田野慢行线",
        label: "遛村步道",
        x: 70,
        y: 56,
        icon: "↝",
        action: "开启慢行计步",
        text: "沿田埂和水线慢行，把城边生活与田野呼吸连接起来。",
      },
      {
        title: "良渚记忆点",
        label: "文化锚点",
        x: 84,
        y: 75,
        icon: "◆",
        action: "收集玉色碎片",
        text: "用玉色、纹样和故事卡提示高桥与良渚文化的地域联系。",
      },
    ],
  },
  yaoli: {
    eyebrow: "儿童友好艺术村导览",
    title: "追云研学路线",
    route: "M10 66 C19 44 31 47 37 31 C45 13 62 18 62 36 C62 48 74 42 84 50 C94 58 89 78 72 78 C56 78 49 67 36 75 C25 82 16 78 10 66",
    terrain: "云朵书吧、等云坡、窑文化馆和艺术空间构成儿童视角的水乡探索地图。",
    photoLabel: "云朵书吧 / 等云坡 / 窑文化馆",
    words: ["云", "窑", "童", "艺"],
    points: [
      {
        title: "云朵书吧",
        label: "互动书屋",
        x: 22,
        y: 58,
        icon: "☁",
        action: "翻开云朵书页",
        text: "点开后云朵字卡会飘起，像孩子在书屋里收集村庄关键词。",
      },
      {
        title: "等云坡",
        label: "草坡游乐",
        x: 38,
        y: 33,
        icon: "⛰",
        action: "滑下云坡",
        text: "草地、秋千和攀爬坡组成户外成长空间，适合亲子研学任务。",
      },
      {
        title: "窑文化馆",
        label: "陶艺体验",
        x: 61,
        y: 41,
        icon: "◒",
        action: "烧制陶泥徽章",
        text: "由旧空间微改造而来，陶艺制作、上色和烧制可以变成小游戏任务。",
      },
      {
        title: "云朵栖息地",
        label: "咖啡休憩",
        x: 78,
        y: 58,
        icon: "☕",
        action: "盖一枚云咖啡章",
        text: "咖啡、白墙黛瓦和云朵 IP 形成更轻松的停留点。",
      },
      {
        title: "云集艺术空间",
        label: "共创展览",
        x: 56,
        y: 77,
        icon: "✺",
        action: "拼一块艺术墙",
        text: "青年艺术家和孩子的创作可以变成可拖拽、可点亮的艺术碎片。",
      },
    ],
  },
  jinxing: {
    eyebrow: "共富金星村落导览",
    title: "金叶茶乡共富线",
    route: "M11 75 C22 62 26 43 41 42 C55 41 56 22 70 24 C83 26 90 40 82 53 C75 64 86 69 82 82 C76 93 57 86 45 80 C31 73 22 86 11 75",
    terrain: "古银杏、龙顶茶、民宿农家乐与共富工坊串成一条从生态资源到村民增收的故事线。",
    photoLabel: "古银杏 / 龙顶茶 / 共富工坊",
    words: ["金", "茶", "富", "兴"],
    points: [
      {
        title: "银杏古树",
        label: "金叶记忆",
        x: 18,
        y: 68,
        icon: "🍂",
        action: "摇落金叶字卡",
        text: "一棵古树带出村庄年代感，也适合作为金色视觉纹样的核心来源。",
      },
      {
        title: "龙顶茶园",
        label: "茶乡体验",
        x: 42,
        y: 43,
        icon: "茶",
        action: "采一枚茶芽",
        text: "把茶芽、茶篓和包装样机做成可收集的村庄礼物。",
      },
      {
        title: "红色研学点",
        label: "红课堂",
        x: 69,
        y: 26,
        icon: "★",
        action: "点亮红课堂",
        text: "以党建和研学为入口，让共富故事有更清晰的叙事支点。",
      },
      {
        title: "民宿农家乐",
        label: "美丽经济",
        x: 80,
        y: 56,
        icon: "⌂",
        action: "预览一间民宿",
        text: "游客停留、餐饮和民宿共同构成金星村的美丽经济动线。",
      },
      {
        title: "共富工坊",
        label: "两有金星",
        x: 56,
        y: 81,
        icon: "✦",
        action: "合成共富徽章",
        text: "把“人人有事做，家家有收入”转化为可点击、可理解的互动节点。",
      },
    ],
  },
};

const app = document.querySelector("#app");
const dockItems = Array.from(document.querySelectorAll(".dock-item"));

const posterItems = [
  {
    id: "gaoqiao",
    name: "高桥村",
    line: "宠物友好村 / 城边友好生活地图",
    accent: "Paw Route",
    glyph: "✦",
  },
  {
    id: "yaoli",
    name: "窑里村",
    line: "儿童友好艺术村 / 向窑里，追云去",
    accent: "Cloud Trail",
    glyph: "☁",
  },
  {
    id: "jinxing",
    name: "金星村",
    line: "共富金星地图 / 人人有事做，家家有收入",
    accent: "Golden Co-op",
    glyph: "✺",
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
  gameVillage: "yaoli",
  gameActiveNode: 0,
  gameCollected: {
    gaoqiao: new Set(),
    yaoli: new Set(),
    jinxing: new Set(),
  },
  discovered: new Set(),
  toastTimer: null,
};

const gameOrder = ["gaoqiao", "yaoli", "jinxing"];

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
  const nodeRaw = url.searchParams.get("node");
  const nodeParam = nodeRaw === null ? NaN : Number(nodeRaw);
  const selectedNode = Number.isFinite(nodeParam) ? nodeParam : null;
  if (route === "detail" && village && villages[village]) {
    const fallbackNode = villages[village].mapFocus ?? 0;
    const node = selectedNode ?? fallbackNode;
    return { route: "detail", village, tab: tab || "map", selectedMapNode: node, selectedStoryNode: node };
  }
  if (route && ["home", "villages", "game", "scan", "exhibit"].includes(route)) {
    const nextVillage = village && villages[village] ? village : state.village;
    return {
      route,
      village: nextVillage,
      tab: tab || state.tab,
      gameVillage: route === "game" ? nextVillage : state.gameVillage,
      gameActiveNode: selectedNode ?? state.gameActiveNode,
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
  } else {
    url.searchParams.set("route", state.route);
    if (state.route === "detail" && state.village && villages[state.village]) {
      url.searchParams.set("village", state.village);
      url.searchParams.set("tab", state.tab || "map");
      url.searchParams.set("node", String(state.tab === "story" ? state.selectedStoryNode : state.selectedMapNode));
    } else if (state.route === "game" && state.gameVillage && villages[state.gameVillage]) {
      url.searchParams.set("village", state.gameVillage);
      url.searchParams.delete("tab");
      url.searchParams.set("node", String(state.gameActiveNode || 0));
    } else {
      url.searchParams.delete("village");
      url.searchParams.delete("tab");
      url.searchParams.delete("node");
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
  if (extras.gameVillage) state.gameVillage = extras.gameVillage;
  if (typeof extras.gameActiveNode === "number") state.gameActiveNode = extras.gameActiveNode;
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
  const highlight = villages[activeVillageId]?.regionKey || "杭州市";
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
          <span class="pin-core">✦</span>
          <span class="pin-label">${village.name}</span>
        </button>
      `;
    })
    .join("");
}

function homeView() {
  const homeVillage = villages.yaoli;
  return shell(`
    <section class="hero">
      <div class="hero-decor" aria-hidden="true">
        <span>✦</span><span>◇</span><span>✺</span><span>☁</span>
      </div>
      ${scenicRibbon(homeVillage)}
      <div class="hero-content">
        <div>
          <p class="eyebrow">浙江乡村艺术体验</p>
          <h1>向村行·浙里三村志</h1>
          <p>把真实村庄的气味、材质、路线和记忆压进一个会流动的数字展厅。</p>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><strong>3</strong><span>乡村样本</span></div>
          <div class="hero-stat"><strong>15</strong><span>故事节点</span></div>
          <div class="hero-stat"><strong>∞</strong><span>记忆收藏</span></div>
        </div>
      </div>
    </section>

    <section class="quick-grid">
      <button class="glass-card pressable quick-action" data-shortcut="map" data-village="${homeVillage.id}">
        <div class="orb-icon">⟡</div>
        <div class="quick-copy">
          <h3>艺术地图</h3>
          <p>直接进入窑里村的立体地图，点位会实时响应。</p>
        </div>
        <span class="quick-arrow">↗</span>
      </button>
      <button class="glass-card pressable quick-action" data-shortcut="materials" data-village="${homeVillage.id}">
        <div class="orb-icon" style="background:linear-gradient(145deg,#6f4cc9,#d7a849)">✺</div>
        <div class="quick-copy">
          <h3>带走物料</h3>
          <p>打开三村实拍瀑布流，像翻一本会发光的样本册。</p>
        </div>
        <span class="quick-arrow">↗</span>
      </button>
      <button class="glass-card pressable quick-action feature-wide" data-shortcut="game">
        <div class="orb-icon" style="background:linear-gradient(145deg,#1f2f3a,#69a0c7)">✦</div>
        <div class="quick-copy">
          <h3>互动收集</h3>
          <p>点亮记忆碎片，完成一段轻快的乡村探索。</p>
        </div>
        <span class="quick-arrow">↗</span>
      </button>
    </section>

    <section class="section-head">
      <div>
        <h2>三村样本</h2>
        <p>高桥的友好、窑里的云、金星的共富故事，在一条旅线里展开。</p>
      </div>
      <span class="mini-pill">${state.discovered.size}/3 已收集</span>
    </section>

    <section class="village-strip" data-drag-strip>
      ${Object.values(villages)
        .map(
          (v, index) => `
            <button class="village-card" data-village="${v.id}" style="background-image:url('${v.cover}')">
              <span class="card-glyph" aria-hidden="true">${posterItems[index]?.glyph || "✦"}</span>
              <div>
                <p class="eyebrow">${v.type}</p>
                <h3>${v.name}<br />${v.title}</h3>
                <p>${v.subtitle}</p>
                <div class="tag-row">${villageTagList(v)}</div>
              </div>
              <span class="glass-button">看地图</span>
            </button>
          `,
        )
        .join("")}
    </section>

    <section class="section-head">
      <div>
        <h2>现场印象</h2>
        <p>项目把村庄背景、场地氛围、展陈物料和观众互动连成一套乡村体验叙事。</p>
      </div>
    </section>

    <section class="memory-ribbon">
      <article><span>✦</span><strong>艺术地图</strong><small>把村庄变成可游览的视觉路线</small></article>
      <article><span>▧</span><strong>带走物料</strong><small>贴纸、卡片、书签与村庄记忆</small></article>
      <article><span>☁</span><strong>互动收集</strong><small>让观众在触碰里完成一次探索</small></article>
    </section>
  `);
}

function villagesView() {
  return shell(`
    <section class="page-title">
      <div>
        <p>三村索引</p>
        <h1>三村村志</h1>
        <p>每一张卡片都是一个村庄的入口：故事、地图、材料与可带走的记忆。</p>
      </div>
    </section>
    <section class="village-strip" data-drag-strip>
      ${Object.values(villages)
        .map(
          (v, index) => `
            <button class="village-card" data-village="${v.id}" style="background-image:url('${v.cover}')">
              <span class="card-glyph" aria-hidden="true">${posterItems[index]?.glyph || "✦"}</span>
              <div>
                <p class="eyebrow">${v.type}</p>
                <h3>${v.name}<br />${v.title}</h3>
                <p>${v.subtitle}</p>
                <div class="tag-row">${villageTagList(v)}</div>
              </div>
              <span class="glass-button">打开地图</span>
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
    ["story", "故事"],
    ["map", "地图"],
    ["materials", "周边"],
  ];
  const hero =
    state.tab === "map"
      ? `<section class="detail-map-head">
          <button class="back" data-go="villages">‹</button>
          <div>
            <p class="eyebrow">${village.type}</p>
            <h1>${village.name}地图</h1>
            <p>${village.title} · ${village.subtitle}</p>
          </div>
          <span class="mini-pill">村落导览</span>
        </section>`
      : `<section class="detail-hero" style="background-image:url('${village.cover}')">
          <div class="top-row">
            <button class="back" data-go="villages">‹</button>
            <span class="mini-pill">村志详情</span>
          </div>
          <div>
            <p class="eyebrow">${village.type}</p>
            <h1>${village.name}</h1>
            <p>${village.title} · ${village.subtitle}</p>
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
        <p class="context-label">项目背景</p>
        <h3>不是把村庄做成海报，而是把在地生活翻译成一套可被看见、可被触碰的体验语言。</h3>
        <p>观众进入页面的第一眼，应该先感受到村庄的空气、步行路线和人情味，再读懂它背后的叙事逻辑。</p>
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
        <h2>故事节点</h2>
        <p>这些节点会同时出现在展板、二维码和小游戏里。</p>
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
        <span>${activePoint?.label || "故事现场"}</span>
      </figure>
      <div class="story-detail-copy">
        <p class="context-label">节点 ${activeIndex + 1}</p>
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
          <span>地图定位</span>
          <strong>看这个点在哪里</strong>
        </button>
        <button class="story-action ${collected ? "is-done" : ""}" data-story-open-game="${activeIndex}">
          <span>${collected ? "已收集" : "互动任务"}</span>
          <strong>${activePoint?.action || "进入小游戏"}</strong>
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
          <p class="context-label">${guide?.eyebrow || "村落导览地图"}</p>
          <h2>${guide?.title || `${village.name}导览路线`}</h2>
          <p class="map-caption">${guide?.terrain || "点击地图上的游玩项目，查看对应故事与互动任务。"}</p>
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
            <em>${activePoint?.label || "游玩项目"}</em>
            <strong>${activePoint?.title || village.nodes[0][0]}</strong>
            <span>${activePoint?.text || village.nodes[0][1]}</span>
          </div>
          <button data-map-play="${activeIndex}" aria-label="进入${activePoint?.title || "互动"}小游戏">✦</button>
        </div>

        <div class="map-action-dock">
          <button class="map-action-primary" data-map-play="${activeIndex}">
            <span>开始互动</span>
            <strong>${activePoint?.action || "点亮这个点位"}</strong>
          </button>
          <button class="map-action-secondary" data-map-node-go="materials">
            <span>关联物料</span>
            <strong>查看可带走设计</strong>
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
          <p class="context-label">村字收集</p>
          <h3>点击字卡，拼出${village.name}的记忆词</h3>
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
          <strong>看这个点位的故事</strong>
          <span>把热区切到故事模式，适合讲解村庄背景。</span>
        </button>
        <button class="map-action-card" data-map-node-go="materials">
          <strong>看关联物料</strong>
          <span>进入物料展示，查看这个点位能延展出的带走物。</span>
        </button>
      </section>
    </section>
  `;
}

function materialsPanel(village) {
  const cards = village.materials;
  return `
    <section class="material-intro">
      <div>
        <p class="context-label">物料展陈</p>
        <h2>实拍物料瀑布流</h2>
        <p>把三村的照片、卡片、贴纸和样本以更轻快的方式铺开，像在翻一组会呼吸的展板。</p>
      </div>
    </section>
    <section class="material-grid masonry">
      ${cards
        .map(
          ([photo, title, text, size], index) => `
            <article class="material-card material-card-${size || "square"}">
              <figure class="material-photo" style="background-image:url('${photo}')"></figure>
              <div class="material-copy">
                <strong>${title}</strong>
                <span>${text}</span>
              </div>
            </article>
          `,
        )
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
        <p>互动小游戏</p>
        <h1>${village.name}任务地图</h1>
        <p>沿着村内路线寻找线索，点亮每个游玩项目，合成一枚专属村志徽章。</p>
      </div>
      <span class="mini-pill">${collection.size}/${guide.points.length}</span>
    </section>

    <section class="game-village-switch" aria-label="选择村落">
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
          <span>探索进度</span>
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
            ? `<div class="game-complete"><strong>${village.name}村志徽章已合成</strong><span>所有节点都已点亮，可以回到地图查看完整路线。</span></div>`
            : ""
        }
      </div>

      <section class="mission-console">
        <div class="mission-focus">
          <span>${activePoint.label}</span>
          <h2>${activePoint.title}</h2>
          <p>${activePoint.text}</p>
          <button class="mission-collect ${collection.has(activeIndex) ? "is-collected" : ""}" data-game-collect="${activeIndex}">
            ${collection.has(activeIndex) ? "已点亮这个节点" : activePoint.action}
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
        <button data-game-reset>重新探索</button>
        <button data-game-open-map>回到村落地图</button>
      </div>
    </section>
  `);
}

function scanView() {
  return shell(`
    <section class="scan-panel">
      <p class="eyebrow" style="color:rgba(17,31,26,.6)">扫码入口</p>
      <h1 class="scan-title">扫码开启村志</h1>
      <div class="qr-wrap"><div class="qr" aria-label="二维码占位"></div></div>
      <div class="scan-list">
        ${Object.values(villages)
          .map(
            (v, index) => `
              <button class="scan-item" data-village="${v.id}">
                <div>
                  <strong>${v.name}故事二维码</strong>
                  <span>${v.title} / ${v.subtitle}</span>
                </div>
                <span class="scan-code" style="background:${v.color}">0${index + 1}</span>
              </button>
            `,
          )
          .join("")}
        <button class="scan-item" data-go="exhibit">
          <div>
            <strong>展板巡游二维码</strong>
            <span>三张展板交替播放，打开现场导览</span>
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
        <p>展览巡游</p>
        <h1>三张展板</h1>
        <p>三村内容像展厅灯光一样轮流亮起，形成连续的视觉冲击。</p>
      </div>
    </section>

    <section class="poster-carousel">
      <button class="carousel-nav prev" data-poster-nav="-1" aria-label="上一张">‹</button>
      <button class="carousel-nav next" data-poster-nav="1" aria-label="下一张">›</button>
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
          .map((i) => `<button class="poster-dot ${i === posterIndex ? "is-active" : ""}" data-poster-dot="${i}" aria-label="展板 ${i + 1}"></button>`)
          .join("")}
      </div>
    </section>

    <section class="section-head">
      <div>
        <h2>体验组件</h2>
        <p>展板、桌面样本、循环影像和扫码入口共同构成现场记忆。</p>
      </div>
    </section>

    <section class="exhibit-steps">
      ${[
        ["三张展板", "高桥、窑里、金星轮流出现，形成连续视觉冲击。"],
        ["桌面样本", "卡片、贴纸、路线卡、周边和二维码集中陈列。"],
        ["循环视频", "画面可以离线播放，适合展厅角落持续运行。"],
        ["互动白板", "观众可以把自己最想带走的乡村体验贴出来。"],
        ["扫码入口", "扫码后能直接跳转到对应村志页面。"],
      ]
        .map(
          ([title, text]) => `
            <article class="exhibit-step">
              <span class="check">✓</span>
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
  const views = {
    home: homeView,
    villages: villagesView,
    detail: detailView,
    game: gameView,
    scan: scanView,
    exhibit: exhibitView,
  };
  app.innerHTML = views[state.route]() ;
  attachHandlers();
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

    strip.addEventListener("pointerdown", (event) => {
      isDown = true;
      startX = event.clientX;
      startScroll = strip.scrollLeft;
      hasDragged = false;
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
      const villageId = startVillageCard?.dataset.village;
      isDown = false;
      strip.classList.remove("is-dragging");
      if (!hasDragged && villageId && villages[villageId]) {
        setRoute("detail", {
          village: villageId,
          tab: "map",
          selectedMapNode: villages[villageId]?.mapFocus ?? 0,
          selectedStoryNode: villages[villageId]?.mapFocus ?? 0,
        });
      }
      startVillageCard = null;
    });

    ["pointercancel", "pointerleave"].forEach((type) => {
      strip.addEventListener(type, () => {
        isDown = false;
        hasDragged = false;
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
      if (dest === "villages" || dest === "scan" || dest === "game" || dest === "exhibit") {
        setRoute(dest);
      }
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
      setRoute("game", {
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
      setRoute("game", {
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
      showToast(`收集到「${button.dataset.wordChip}」字`);
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
      const guide = villageMapGuides[village.id];
      const index = Number(button.dataset.gameCollect);
      const collection = getGameCollection(village.id);
      collection.add(index);
      if (collection.size >= guide.points.length) {
        state.discovered.add(village.id);
        state.score = state.discovered.size;
      }
      showToast(`${guide.points[index]?.action || "节点"}完成`);
      render();
      vibrate(18);
    });
  });

  app.querySelectorAll("[data-game-reset]").forEach((button) => {
    button.addEventListener("click", () => {
      const villageId = state.gameVillage || "yaoli";
      state.gameCollected[villageId] = new Set();
      state.discovered.delete(villageId);
      state.score = state.discovered.size;
      state.gameActiveNode = villages[villageId]?.mapFocus ?? 0;
      showToast("已重新开始探索");
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
        showToast(`解锁 ${villages[token].name}`);
        vibrate(18);
        const fill = app.querySelector(".progress-fill");
        const score = app.querySelector(".score-num");
        if (fill) fill.style.setProperty("--progress", `${(state.score / 3) * 100}%`);
        if (score) score.textContent = `${state.score} / 3`;
        if (state.score >= 3) {
          setTimeout(() => render(), 520);
        }
      } else {
        showToast(`${villages[token].name} 已解锁`);
      }
    });
  });
}

dockItems.forEach((button) => {
  button.addEventListener("click", () => setRoute(button.dataset.route));
});

const initial = readRoute();
Object.assign(state, initial);

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
