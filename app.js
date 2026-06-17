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
    color: "#789262",
    map: { a: "#e5ead5", b: "#b8c9a5" },
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
    color: "#425066",
    map: { a: "#d6ecf0", b: "#9fb8c3" },
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
    color: "#c89b40",
    map: { a: "#f2ecde", b: "#bce672" },
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
      ["./assets/ip/jinxing/tea-box-1.jpg", "金星龙顶茶包装", "把茶园、茶芽和共富叙事做成可陈列的包装样机。", "wide"],
      ["./assets/ip/jinxing/postcard-1.jpg", "银杏故事书签", "用金色叶片记录村庄年代感和乡土记忆。", "square"],
      ["./assets/ip/jinxing/sticker-1.jpg", "红课堂学习卡", "对应红色研学点，适合展板旁扫码领取。", "square"],
      ["./assets/ip/jinxing/badge-1.jpg", "共富工坊徽章", "把村民协作、产业增收和共同富裕做成轻量识别。", "tall"],
      ["./assets/ip/jinxing/around-1.jpg", "金星茶礼周边", "把金星龙顶茶、银杏角色和伴手礼做成完整陈列。", "square"],
      ["./assets/ip/jinxing/around-2.jpg", "共富纪念周边", "适合在产品系列里继续查看细节与放大图。", "square"],
    ],
  },
};

const ipShowcases = {
  gaoqiao: {
    kicker: "人宠探索员",
    title: "高桥村 IP 动作剧场",
    copy: "把猫岛、田野步道和宠物友好路线收进一个会动的探索角色。",
    mark: "Paw Map",
    accent: "#789262",
    panels: [
      {
        title: "人宠探索员展板",
        label: "主视觉",
        image: "./assets/ip/gaoqiao/board.jpg",
        copy: "角色、路线和村内宠物友好节点被压进同一张高桥导览展板。",
      },
      {
        title: "三视图设定",
        label: "角色设定",
        image: "./assets/ip/gaoqiao/threeview.jpg",
        copy: "正侧背造型保持清爽，方便延展到导览牌和互动按钮。",
      },
      {
        title: "出发动作",
        label: "动作延展",
        image: "./assets/ip/gaoqiao/action-3.jpg",
        copy: "适合对应田野步道、宠物牵引和村口打卡的轻快状态。",
      },
      {
        title: "打卡动作",
        label: "动作延展",
        image: "./assets/ip/gaoqiao/action-4.jpg",
        copy: "用更明显的姿态回应市集、休憩点和友好商户。",
      },
    ],
    emojis: [
      { image: "./assets/ip/gaoqiao/emoji-pack-1.jpg", label: "高桥表情" },
      { image: "./assets/ip/gaoqiao/emoji-pack-2.jpg", label: "高桥表情" },
      { image: "./assets/ip/gaoqiao/emoji-pack-3.jpg", label: "高桥表情" },
      { image: "./assets/ip/gaoqiao/emoji-pack-4.jpg", label: "高桥表情" },
      { image: "./assets/ip/gaoqiao/emoji-pack-5.jpg", label: "高桥表情" },
      { image: "./assets/ip/gaoqiao/emoji-pack-6.jpg", label: "高桥表情" },
    ],
  },
  yaoli: {
    kicker: "云朵艺术村",
    title: "窑里村云朵角色剧场",
    copy: "把云朵书吧、草坡和陶艺体验做成轻盈的儿童艺术角色组。",
    mark: "Cloud Play",
    accent: "#425066",
    panels: [
      {
        title: "云朵场景",
        label: "场景插画",
        image: "./assets/ip/yaoli/scene-1.jpg",
        copy: "云朵、村路和儿童视角形成第一眼就能进入的窑里场景。",
      },
      {
        title: "水乡场景",
        label: "场景插画",
        image: "./assets/ip/yaoli/scene-2.jpg",
        copy: "把水乡、白墙和柔软色彩接到研学动线里。",
      },
      {
        title: "角色展板",
        label: "主视觉",
        image: "./assets/ip/yaoli/board.jpg",
        copy: "古风女孩和云朵小伙伴共同成为窑里故事的入口。",
      },
      {
        title: "角色三视图",
        label: "角色设定",
        image: "./assets/ip/yaoli/threeview.jpg",
        copy: "适合继续扩展到地图按钮、贴纸和任务动画。",
      },
      {
        title: "云坡动作",
        label: "动作延展",
        image: "./assets/ip/yaoli/action-8.jpg",
        copy: "对应滑下云坡、云朵书页和儿童任务完成瞬间。",
      },
    ],
    emojis: [
      { image: "./assets/ip/yaoli/emoji-pack-1.jpg", label: "窑里表情" },
      { image: "./assets/ip/yaoli/emoji-pack-2.jpg", label: "窑里表情" },
      { image: "./assets/ip/yaoli/emoji-pack-3.jpg", label: "窑里表情" },
      { image: "./assets/ip/yaoli/emoji-pack-4.jpg", label: "窑里表情" },
      { image: "./assets/ip/yaoli/emoji-pack-5.jpg", label: "窑里表情" },
      { image: "./assets/ip/yaoli/emoji-pack-6.jpg", label: "窑里表情" },
    ],
  },
  jinxing: {
    kicker: "金叶茶礼",
    title: "金星村 IP 与衍生品展台",
    copy: "把银杏、龙顶茶和共富工坊变成可收藏、可带走、可互动的金色视觉系统。",
    mark: "Golden Set",
    accent: "#c89b40",
    panels: [
      {
        title: "金星主海报",
        label: "主视觉",
        image: "./assets/ip/jinxing/poster.jpg",
        copy: "金色村落、茶园和银杏意象成为金星村的第一视觉锚点。",
      },
      {
        title: "角色展板",
        label: "角色设定",
        image: "./assets/ip/jinxing/board.jpg",
        copy: "女孩与小精灵形成亲近、明亮的村庄导览角色。",
      },
      {
        title: "茶园动作",
        label: "动作延展",
        image: "./assets/ip/jinxing/action-1.jpg",
        copy: "对应龙顶茶园、采茶和茶礼包装的互动节点。",
      },
      {
        title: "金叶动作",
        label: "动作延展",
        image: "./assets/ip/jinxing/action-2.jpg",
        copy: "银杏叶脉与共富礼物形成可被收集的动态反馈。",
      },
      {
        title: "工坊动作",
        label: "动作延展",
        image: "./assets/ip/jinxing/action-3.jpg",
        copy: "适合连接供销社、共富工坊和村民增收故事。",
      },
    ],
    emojis: [
      { image: "./assets/ip/jinxing/emoji-2.jpg", label: "金叶表情" },
      { image: "./assets/ip/jinxing/emoji-3.jpg", label: "茶香表情" },
      { image: "./assets/ip/jinxing/emoji-5.jpg", label: "小精灵" },
      { image: "./assets/ip/jinxing/action-2.jpg", label: "金叶" },
    ],
    products: [
      { image: "./assets/ip/jinxing/tea-box-1.jpg", title: "龙顶茶盒 A", type: "茶礼" },
      { image: "./assets/ip/jinxing/tea-box-2.jpg", title: "龙顶茶盒 B", type: "茶礼" },
      { image: "./assets/ip/jinxing/tea-box-3.jpg", title: "龙顶茶盒 C", type: "茶礼" },
      { image: "./assets/ip/jinxing/tea-box-4.jpg", title: "龙顶茶盒 D", type: "茶礼" },
      { image: "./assets/ip/jinxing/postcard-1.jpg", title: "金星明信片 A", type: "明信片" },
      { image: "./assets/ip/jinxing/postcard-2.jpg", title: "金星明信片 B", type: "明信片" },
      { image: "./assets/ip/jinxing/postcard-3.jpg", title: "金星明信片 C", type: "明信片" },
      { image: "./assets/ip/jinxing/postcard-4.jpg", title: "金星明信片 D", type: "明信片" },
      { image: "./assets/ip/jinxing/badge-1.jpg", title: "金叶徽章 A", type: "徽章" },
      { image: "./assets/ip/jinxing/badge-2.jpg", title: "金叶徽章 B", type: "徽章" },
      { image: "./assets/ip/jinxing/badge-3.jpg", title: "金叶徽章 C", type: "徽章" },
      { image: "./assets/ip/jinxing/badge-4.jpg", title: "金叶徽章 D", type: "徽章" },
      { image: "./assets/ip/jinxing/sticker-1.jpg", title: "金星贴纸 A", type: "贴纸" },
      { image: "./assets/ip/jinxing/sticker-2.jpg", title: "金星贴纸 B", type: "贴纸" },
      { image: "./assets/ip/jinxing/sticker-3.jpg", title: "金星贴纸 C", type: "贴纸" },
      { image: "./assets/ip/jinxing/sticker-4.jpg", title: "金星贴纸 D", type: "贴纸" },
      { image: "./assets/ip/jinxing/around-1.jpg", title: "金星周边 A", type: "周边" },
      { image: "./assets/ip/jinxing/around-2.jpg", title: "金星周边 B", type: "周边" },
      { image: "./assets/ip/jinxing/around-3.jpg", title: "金星周边 C", type: "周边" },
      { image: "./assets/ip/jinxing/around-4.jpg", title: "金星周边 D", type: "周边" },
      { image: "./assets/ip/jinxing/around-5.jpg", title: "金星周边 E", type: "周边" },
      { image: "./assets/ip/jinxing/around-6.jpg", title: "金星周边 F", type: "周边" },
      { image: "./assets/ip/jinxing/around-7.jpg", title: "金星周边 G", type: "周边" },
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
    icon: "✦",
    title: "艺术地图",
    subtitle: "把村庄变成可游览的视觉路线",
    text: "三维扫描感地图把村口、书屋、茶园、工坊和展览点串成一条可点击的游览动线。观众不需要先读说明，只要点亮地图上的项目，就能进入对应故事和互动小游戏。",
    action: "打开窑里村地图",
    route: "detail",
    tab: "map",
  },
  materials: {
    icon: "▧",
    title: "带走物料",
    subtitle: "贴纸、卡片、书签与村庄记忆",
    text: "物料区把实拍图、贴纸、卡片、书签、徽章和包装样机做成瀑布流展柜。它像一张可以翻动的样本桌，让观众看到每个村的视觉语言可以怎样被带走。",
    action: "进入物料展柜",
    route: "detail",
    tab: "materials",
  },
  game: {
    icon: "☁",
    title: "互动收集",
    subtitle: "让观众在触碰里完成一次探索",
    text: "互动区不只是播放动画，而是让观众完成节点任务：点击步骤、触发场景、点亮进度，最后把每个村的五个项目合成为一枚村志徽章。",
    action: "进入任务地图",
    route: "game",
    tab: "map",
  },
};

const nodePlayScenes = {
  gaoqiao: [
    {
      type: "paw",
      title: "友好足迹",
      verb: "跟着足迹进村",
      hint: "轻触开始，宠物脚印会沿着田野路线跑向第一个休憩点。",
      button: "放出友好足迹",
      steps: ["脚印出现", "穿过水线", "抵达猫岛"],
      layers: ["高桥宠物友好入口", "田野水线亮起", "猫岛休憩点解锁"],
    },
    {
      type: "leaf",
      title: "植物纹样",
      verb: "生成叶片卡",
      hint: "叶片会在屏幕里展开，变成一张可以带走的植物纹样。",
      button: "吹开叶片",
      steps: ["采一片叶", "描出叶脉", "合成纹样"],
      layers: ["知物堂叶片采集", "叶脉纹样描摹", "植物美学卡完成"],
    },
    {
      type: "market",
      title: "青年摊位",
      verb: "点亮市集灯",
      hint: "灯串会依次亮起，像傍晚的乡创市集慢慢开场。",
      button: "点亮摊位",
      steps: ["支起小摊", "亮起灯串", "出现徽章"],
      layers: ["青年市集摊位展开", "高桥夜灯亮起", "乡创徽章出现"],
    },
    {
      type: "walk",
      title: "田野慢行",
      verb: "开启慢行计步",
      hint: "一条发光路线会从脚下延伸，记录田埂上的慢行节奏。",
      button: "开始慢行",
      steps: ["迈出第一步", "经过田埂", "收集风声"],
      layers: ["田野入口定位", "慢行路线延伸", "风声步数收集"],
    },
    {
      type: "jade",
      title: "良渚碎片",
      verb: "拼合玉色纹样",
      hint: "玉色碎片会旋转合拢，形成高桥的文化记忆章。",
      button: "拼合碎片",
      steps: ["找到碎片", "旋转对位", "点亮玉色"],
      layers: ["良渚记忆碎片", "玉色纹样对位", "文化锚点点亮"],
    },
  ],
  yaoli: [
    {
      type: "book",
      title: "云朵书页",
      verb: "翻开云朵书页",
      hint: "书页翻动时，村里的关键词会像云一样从书屋里飘出来。",
      button: "翻开书页",
      steps: ["打开书屋", "云字浮起", "收进护照"],
      layers: ["云朵书吧门牌出现", "云 / 童 / 艺 字卡飘出", "窑里研学护照盖章"],
    },
    {
      type: "slope",
      title: "等云坡滑行",
      verb: "滑下云坡",
      hint: "小小的云朵滑板会沿着草坡下滑，经过光点后冲到终点。",
      button: "开始滑坡",
      steps: ["站上云坡", "顺坡滑下", "冲过云门"],
      layers: ["等云坡坡顶准备", "草坡滑行轨迹亮起", "云门终点打卡"],
    },
    {
      type: "clay",
      title: "陶泥徽章",
      verb: "烧制陶泥徽章",
      hint: "陶泥会被压印、旋转、上色，最后烧成一枚窑里徽章。",
      button: "开始烧制",
      steps: ["揉开陶泥", "压下印章", "窑火上色"],
      layers: ["窑文化馆陶泥坯", "窑里云纹印章压下", "陶艺徽章烧成"],
    },
    {
      type: "coffee",
      title: "云咖啡章",
      verb: "盖一枚云咖啡章",
      hint: "杯口升起云朵热气，最后落成一枚柔软的咖啡章。",
      button: "盖下咖啡章",
      steps: ["热气升起", "云朵成形", "盖章完成"],
      layers: ["云朵栖息地咖啡杯", "白墙水乡热气成云", "云咖啡章落下"],
    },
    {
      type: "mosaic",
      title: "艺术碎片墙",
      verb: "拼一块艺术墙",
      hint: "散落的色块会聚拢成一面共创墙，点亮孩子的作品。",
      button: "拼合色块",
      steps: ["拾起色块", "贴上墙面", "展墙发光"],
      layers: ["云集艺术空间色块", "儿童共创墙拼贴", "艺术展墙点亮"],
    },
  ],
  jinxing: [
    {
      type: "ginkgo",
      title: "金叶字卡",
      verb: "摇落金叶字卡",
      hint: "银杏叶会从树冠落下，收集成金星村的金色记忆。",
      button: "摇落金叶",
      steps: ["叶片落下", "金光聚拢", "字卡出现"],
      layers: ["金星银杏古树", "金叶光点聚拢", "金叶记忆字卡"],
    },
    {
      type: "tea",
      title: "龙顶茶芽",
      verb: "采一枚茶芽",
      hint: "茶芽从山线里冒出，被轻轻采下后装进茶乡礼盒。",
      button: "采下茶芽",
      steps: ["山线苏醒", "茶芽生长", "装入礼盒"],
      layers: ["龙顶茶园山线苏醒", "茶芽从垄间冒出", "龙顶茶礼盒装入"],
    },
    {
      type: "star",
      title: "红课堂星火",
      verb: "点亮红课堂",
      hint: "星火从讲台亮起，沿着研学路线传到下一站。",
      button: "点亮星火",
      steps: ["星火点燃", "路线发光", "课堂开启"],
      layers: ["红色研学点讲台", "星火沿路线传递", "红课堂学习卡开启"],
    },
    {
      type: "home",
      title: "民宿灯窗",
      verb: "预览一间民宿",
      hint: "小屋的窗灯会一格格亮起，展示游客停留的夜晚。",
      button: "亮起窗灯",
      steps: ["推开院门", "窗灯亮起", "夜色停留"],
      layers: ["金星民宿院门", "窗灯逐格亮起", "农家乐夜晚停留"],
    },
    {
      type: "workshop",
      title: "共富徽章",
      verb: "合成共富徽章",
      hint: "工坊里的齿轮、茶叶和金色叶片会合成一枚共富徽章。",
      button: "合成徽章",
      steps: ["工坊运转", "产业合流", "徽章完成"],
      layers: ["共富工坊开始运转", "茶叶与金叶合流", "两有金星徽章完成"],
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
  const heroPanel = show?.panels?.find((panel) => panel.label === "主视觉") || show?.panels?.[0];
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
  const homeVillage = villages.jinxing;
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
        <div class="orb-icon quick-asset-icon">
          <img src="./assets/ui/quick-map.png" alt="" loading="lazy">
        </div>
        <div class="quick-copy">
          <h3>艺术地图</h3>
          <p>直接进入窑里村的立体地图，点位会实时响应。</p>
        </div>
        <span class="quick-arrow">↗</span>
      </button>
      <button class="glass-card pressable quick-action" data-shortcut="materials" data-village="${homeVillage.id}">
        <div class="orb-icon quick-asset-icon">
          <img src="./assets/ui/quick-materials.png" alt="" loading="lazy">
        </div>
        <div class="quick-copy">
          <h3>带走物料</h3>
          <p>打开三村实拍瀑布流，像翻一本会发光的样本册。</p>
        </div>
        <span class="quick-arrow">↗</span>
      </button>
      <button class="glass-card pressable quick-action feature-wide" data-shortcut="game">
        <div class="orb-icon quick-asset-icon">
          <img src="./assets/ui/quick-game.png" alt="" loading="lazy">
        </div>
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
            <button class="village-card" data-village="${v.id}" style="background-image:url('${villageCardCover(v)}')">
              <span class="card-glyph" aria-hidden="true">${posterItems[index]?.glyph || "✦"}</span>
              <div>
                <p class="eyebrow">${v.type}</p>
                <h3>${v.name}<br />${v.title}</h3>
                <p>${v.subtitle}</p>
                <div class="tag-row">${villageTagList(v)}</div>
              </div>
              <span class="glass-button" data-village-profile="${v.id}">村志详情</span>
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
        <p>三村索引</p>
        <h1>三村村志</h1>
        <p>每一张卡片都是一个村庄的入口：故事、地图、材料与可带走的记忆。</p>
      </div>
    </section>
    <section class="village-strip" data-drag-strip>
      ${Object.values(villages)
        .map(
          (v, index) => `
            <button class="village-card" data-village="${v.id}" style="background-image:url('${villageCardCover(v)}')">
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

function profileView() {
  const village = villages[state.village] || villages.yaoli;
  const guide = villageMapGuides[village.id];
  return shell(`
    <section class="profile-hero" style="--village:${village.color}; background-image:url('${village.cover}')">
      <div class="top-row">
        <button class="back" data-go="villages">‹</button>
        <span class="mini-pill">村志详情</span>
      </div>
      <div class="profile-title">
        <p>${village.type}</p>
        <h1>${village.name}</h1>
        <span>${village.location} · ${village.subtitle}</span>
      </div>
    </section>

    <section class="profile-story-card" style="--village:${village.color}">
      <p class="context-label">村志概览</p>
      <h2>${village.title}</h2>
      <p>${village.story}</p>
      <div class="profile-actions">
        <button data-profile-open="map">打开村落地图</button>
        <button data-profile-open="story">查看故事节点</button>
        <button data-profile-open="materials">浏览带走物料</button>
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
      <button class="back" data-go="home">‹</button>
      <div>
        <span>${item.icon}</span>
        <p>现场印象</p>
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

function ipShowcasePanel(village) {
  const show = ipShowcases[village.id];
  if (!show) return "";
  const stagePanels = [
    ...show.panels,
    ...(show.emojis?.length
      ? [
          {
            title: "表情包",
            label: "表情包",
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
        <button class="back" data-go-product-back>‹</button>
        <div>
          <p class="context-label">${village.name}周边</p>
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
        <p class="context-label">物料展陈</p>
        <h2>IP 物料剧场</h2>
        <p>角色、表情包、贴纸和村落物料在这里一起流动，形成可以停留、切换和收集的展示面。</p>
      </div>
    </section>
    ${ipShowcasePanel(village)}
    <section class="material-grid masonry">
      ${cards
        .map(([photo, title, text, size], index) => {
          const productIndex = productIndexForMaterial(village, photo);
          const isProduct = productIndex >= 0;
          const tag = isProduct ? "button" : "article";
          const action = isProduct ? `data-material-product-open="${productIndex}" aria-label="查看${title}"` : "";
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
      <div class="slope-cloud">☁</div>
      <div class="slope-rider">✦</div>
      <div class="slope-gate">云门</div>
      <span class="trail-dot d1"></span><span class="trail-dot d2"></span><span class="trail-dot d3"></span>
    `,
    clay: `
      ${common}
      <div class="clay-wheel"></div>
      <div class="clay-disc">窑</div>
      <div class="clay-stamp">印</div>
      <div class="kiln-fire"><span></span><span></span><span></span></div>
    `,
    book: `
      ${common}
      <div class="magic-book"><span></span><span></span></div>
      <span class="floating-word w1">云</span><span class="floating-word w2">童</span><span class="floating-word w3">艺</span>
    `,
    coffee: `
      ${common}
      <div class="coffee-cup"></div>
      <span class="steam st1">☁</span><span class="steam st2">☁</span><span class="stamp-ring">章</span>
    `,
    mosaic: `
      ${common}
      <div class="mosaic-wall">${["", "", "", "", "", "", "", "", ""].map((_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
    `,
    paw: `
      ${common}
      <div class="paw-path">${["🐾", "🐾", "🐾", "🐾"].map((paw, i) => `<i style="--i:${i}">${paw}</i>`).join("")}</div>
      <div class="rest-island">猫岛</div>
    `,
    leaf: `
      ${common}
      <div class="leaf-card"><i></i><i></i><i></i></div>
      <span class="leaf-float l1">叶</span><span class="leaf-float l2">纹</span>
    `,
    market: `
      ${common}
      <div class="market-stand"><i></i><i></i><i></i></div>
      <div class="light-string">${["", "", "", "", ""].map((_, i) => `<span style="--i:${i}"></span>`).join("")}</div>
    `,
    walk: `
      ${common}
      <div class="walk-route"></div>
      <div class="walker">走</div>
      <span class="wind-line wl1"></span><span class="wind-line wl2"></span>
    `,
    jade: `
      ${common}
      <div class="jade-pieces">${["◆", "◇", "◆", "◇"].map((piece, i) => `<span style="--i:${i}">${piece}</span>`).join("")}</div>
      <div class="jade-core">玉</div>
    `,
    ginkgo: `
      ${common}
      <div class="ginkgo-tree"></div>
      ${["金", "叶", "兴", "富"].map((leaf, i) => `<span class="ginkgo-leaf" style="--i:${i}">${leaf}</span>`).join("")}
    `,
    tea: `
      ${common}
      <div class="tea-mountain"></div>
      <div class="tea-sprout">茶</div>
      <div class="tea-box">龙顶</div>
    `,
    star: `
      ${common}
      <div class="star-classroom"></div>
      <span class="star-burst">★</span>
      <span class="star-path p1"></span><span class="star-path p2"></span>
    `,
    home: `
      ${common}
      <div class="homestay-house">${["", "", "", ""].map((_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
      <span class="moon-dot">月</span>
    `,
    workshop: `
      ${common}
      <div class="workshop-gear">⚙</div>
      <div class="workshop-badge">富</div>
      <span class="workshop-part a">茶</span><span class="workshop-part b">叶</span><span class="workshop-part c">工</span>
    `,
  };
  return variants[scene.type] || variants.slope;
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
      showToast(`${scene.steps[step]} 已触发`);
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
        showToast(`还需要点亮 ${scene.steps.length - state.playSteps.size} 个互动步骤`);
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
      showToast(`${scene.verb || guide.points[index]?.action || "节点"}完成`);
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
