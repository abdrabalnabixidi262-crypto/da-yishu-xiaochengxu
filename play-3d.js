(() => {
  const THREE = window.THREE || null;
  const vector = (x, y, z) =>
    THREE
      ? new THREE.Vector3(x, y, z)
      : {
          x,
          y,
          z,
          set(nx, ny, nz) {
            this.x = nx;
            this.y = ny;
            this.z = nz;
            return this;
          },
          copy(next) {
            this.x = next.x;
            this.y = next.y;
            this.z = next.z;
            return this;
          },
          lerp() {
            return this;
          },
        };
  const stage = {
    root: null,
    wrap: null,
    renderer: null,
    scene: null,
    camera: null,
    world: null,
    clock: null,
    raf: 0,
    step: 0,
    nodeIndex: 0,
    villageId: "yaoli",
    sceneType: "slope",
    rotationX: -0.1,
    rotationY: -0.34,
    cameraGoal: vector(0, 4.8, 8.8),
    lookAt: vector(0, 0.1, 0),
    animators: [],
    resize: null,
    drag: null,
    frameTimer: 0,
  };

  const frameSlugs = {
    gaoqiao: ["paw", "leaf", "market", "walk", "jade"],
    yaoli: ["book", "slope", "clay", "coffee", "mosaic"],
    jinxing: ["ginkgo", "tea", "star", "home", "workshop"],
  };

  function frameBase(villageId, nodeIndex) {
    const slug = frameSlugs[villageId]?.[nodeIndex] || "slope";
    return `./assets/anim/${villageId}/${String(nodeIndex + 1).padStart(2, "0")}-${slug}/`;
  }

  const palette = {
    gaoqiao: {
      sky: 0xd7ebe3,
      fog: 0xd7ebe3,
      base: 0x91bd8c,
      dark: 0x173226,
      accent: 0x5f9d66,
      warm: 0xf1c76e,
      water: 0x8ac6c3,
    },
    yaoli: {
      sky: 0xd9eafd,
      fog: 0xd9eafd,
      base: 0x92bee1,
      dark: 0x172d45,
      accent: 0x5d91c2,
      warm: 0xf2c86c,
      water: 0xaed8f4,
    },
    jinxing: {
      sky: 0xf5e6b6,
      fog: 0xf5e6b6,
      base: 0xbacb79,
      dark: 0x342715,
      accent: 0xd7a849,
      warm: 0xf6cf53,
      water: 0x97c9ad,
    },
  };

  const typeGlyph = {
    paw: "宠",
    leaf: "叶",
    market: "集",
    walk: "行",
    jade: "玉",
    book: "书",
    slope: "坡",
    clay: "陶",
    coffee: "咖",
    mosaic: "墙",
    ginkgo: "杏",
    tea: "茶",
    star: "星",
    home: "宿",
    workshop: "富",
  };

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function numberAttr(element, name, fallback = 0) {
    const value = Number(element?.getAttribute(name));
    return Number.isFinite(value) ? value : fallback;
  }

  function color(hex) {
    return new THREE.Color(hex);
  }

  function ctx() {
    const appState = window.state || {};
    const villages = window.villages || {};
    const villageId = appState.gameVillage || appState.village || stage.villageId || "yaoli";
    const village = villages[villageId] || villages.yaoli || Object.values(villages)[0];
    const guide = window.villageMapGuides?.[village?.id] || {};
    const nodeIndex = guide.points?.[appState.gameActiveNode] ? appState.gameActiveNode : village?.mapFocus || 0;
    const point = guide.points?.[nodeIndex] || guide.points?.[0] || {};
    const sceneInfo = window.nodePlayScenes?.[village?.id]?.[nodeIndex] || window.nodePlayScenes?.yaoli?.[1] || {
      type: "slope",
      title: "3D互动",
      verb: "开始互动",
      button: "完成任务",
      steps: ["搭建场景", "触发运动", "完成打卡"],
      layers: ["场景出现", "动作发生", "节点完成"],
    };

    return { village, guide, nodeIndex, point, sceneInfo, colors: palette[village?.id] || palette.yaoli };
  }

  function material(hex, options = {}) {
    return new THREE.MeshStandardMaterial({
      color: hex,
      roughness: options.roughness ?? 0.62,
      metalness: options.metalness ?? 0.08,
      transparent: Boolean(options.transparent),
      opacity: options.opacity ?? 1,
      emissive: options.emissive ?? 0x000000,
      emissiveIntensity: options.emissiveIntensity ?? 0,
      flatShading: Boolean(options.flatShading),
      side: options.side ?? THREE.FrontSide,
    });
  }

  function makeGroup(name) {
    const group = new THREE.Group();
    group.name = name;
    return group;
  }

  function mesh(geometry, mat, position = [0, 0, 0], rotation = [0, 0, 0]) {
    const item = new THREE.Mesh(geometry, mat);
    item.position.set(position[0], position[1], position[2]);
    item.rotation.set(rotation[0], rotation[1], rotation[2]);
    item.castShadow = true;
    item.receiveShadow = true;
    return item;
  }

  function box(w, h, d, mat, position, rotation) {
    return mesh(new THREE.BoxGeometry(w, h, d), mat, position, rotation);
  }

  function cyl(top, bottom, h, radial, mat, position, rotation = [0, 0, 0]) {
    return mesh(new THREE.CylinderGeometry(top, bottom, h, radial, 1), mat, position, rotation);
  }

  function sphere(r, mat, position, scale = [1, 1, 1]) {
    const item = mesh(new THREE.SphereGeometry(r, 32, 20), mat, position);
    item.scale.set(scale[0], scale[1], scale[2]);
    return item;
  }

  function torus(r, tube, mat, position, rotation = [Math.PI / 2, 0, 0]) {
    return mesh(new THREE.TorusGeometry(r, tube, 16, 96), mat, position, rotation);
  }

  function tube(points, mat, radius = 0.04) {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
    return mesh(new THREE.TubeGeometry(curve, 80, radius, 10, false), mat);
  }

  function labelSprite(text, options = {}) {
    const canvas = document.createElement("canvas");
    const size = options.size || 256;
    canvas.width = size * 2;
    canvas.height = size;
    const c = canvas.getContext("2d");
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = options.bg || "rgba(17, 31, 26, 0.72)";
    c.beginPath();
    c.roundRect(18, 24, canvas.width - 36, canvas.height - 48, 34);
    c.fill();
    c.fillStyle = options.color || "#ffffff";
    c.font = `${options.weight || 900} ${options.fontSize || 72}px "Microsoft YaHei", "PingFang SC", sans-serif`;
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(text, canvas.width / 2, canvas.height / 2 + 2, canvas.width - 72);
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
      }),
    );
    sprite.scale.set(options.w || 1.65, options.h || 0.82, 1);
    sprite.userData.texture = texture;
    return sprite;
  }

  function disposeObject(object) {
    object.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach((m) => {
          if (m.map) m.map.dispose();
          if (m.dispose) m.dispose();
        });
      }
      if (child.userData?.texture) child.userData.texture.dispose();
    });
  }

  function clearWorld() {
    if (!stage.world) return;
    while (stage.world.children.length) {
      const child = stage.world.children.pop();
      disposeObject(child);
      child.parent = null;
    }
    stage.animators = [];
  }

  function addCloud(group, x, y, z, scale = 1, opacity = 0.96) {
    const mat = material(0xffffff, { roughness: 0.32, transparent: true, opacity });
    const cloud = makeGroup("cloud");
    cloud.add(sphere(0.38 * scale, mat, [x, y, z], [1.28, 0.76, 0.8]));
    cloud.add(sphere(0.28 * scale, mat, [x + 0.34 * scale, y + 0.04 * scale, z + 0.04], [1, 0.8, 0.8]));
    cloud.add(sphere(0.24 * scale, mat, [x - 0.32 * scale, y - 0.02 * scale, z - 0.02], [1, 0.74, 0.8]));
    group.add(cloud);
    return cloud;
  }

  function addHouse(group, x, z, colors, scale = 1) {
    const house = makeGroup("house");
    house.add(box(1.1 * scale, 0.78 * scale, 0.9 * scale, material(0xf7f2df), [x, -0.72 + 0.39 * scale, z]));
    house.add(box(1.28 * scale, 0.28 * scale, 1.02 * scale, material(colors.accent, { roughness: 0.42 }), [x, -0.16 + 0.78 * scale, z], [0, 0, Math.PI / 4]));
    house.add(box(0.22 * scale, 0.3 * scale, 0.05 * scale, material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.24 }), [x - 0.26 * scale, -0.28 + 0.46 * scale, z - 0.46 * scale]));
    house.add(box(0.22 * scale, 0.3 * scale, 0.05 * scale, material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.24 }), [x + 0.26 * scale, -0.28 + 0.46 * scale, z - 0.46 * scale]));
    group.add(house);
    return house;
  }

  function addTree(group, x, z, colors, scale = 1, golden = false) {
    const tree = makeGroup("tree");
    tree.add(cyl(0.15 * scale, 0.22 * scale, 1.05 * scale, 12, material(0x745232, { roughness: 0.9 }), [x, -0.86 + 0.52 * scale, z]));
    const leafMat = material(golden ? 0xf1c345 : colors.accent, { roughness: 0.45, flatShading: true });
    tree.add(mesh(new THREE.DodecahedronGeometry(0.78 * scale, 0), leafMat, [x, 0.18 + 0.72 * scale, z]));
    tree.add(mesh(new THREE.DodecahedronGeometry(0.54 * scale, 0), leafMat, [x - 0.42 * scale, 0.04 + 0.68 * scale, z + 0.12]));
    tree.add(mesh(new THREE.DodecahedronGeometry(0.54 * scale, 0), leafMat, [x + 0.44 * scale, 0.08 + 0.7 * scale, z - 0.06]));
    group.add(tree);
    return tree;
  }

  function addBadge(group, text, colors, x = 0, y = 1.2, z = 0) {
    const badge = makeGroup("badge");
    const metal = material(colors.warm, {
      roughness: 0.26,
      metalness: 0.45,
      emissive: colors.warm,
      emissiveIntensity: 0.24,
    });
    badge.add(cyl(0.7, 0.7, 0.12, 64, metal, [x, y, z], [Math.PI / 2, 0, 0]));
    const sprite = labelSprite(text, { bg: "rgba(20, 35, 30, 0.78)", fontSize: 76, w: 1.08, h: 0.55 });
    sprite.position.set(x, y + 0.08, z + 0.1);
    badge.add(sprite);
    group.add(badge);
    stage.animators.push((t) => {
      badge.rotation.y = Math.sin(t * 1.4) * 0.12;
      badge.position.y = Math.sin(t * 2.2) * 0.05;
    });
    return badge;
  }

  function addParticles(group, colors, count = 18, radius = 2.8, y = 1.2) {
    const mat = material(colors.warm, {
      roughness: 0.25,
      emissive: colors.warm,
      emissiveIntensity: 0.55,
      transparent: true,
      opacity: 0.82,
    });
    const particles = makeGroup("particles");
    for (let i = 0; i < count; i += 1) {
      const p = sphere(0.035 + (i % 3) * 0.014, mat, [
        Math.cos(i * 1.47) * radius * (0.45 + (i % 5) * 0.09),
        y + (i % 4) * 0.18,
        Math.sin(i * 1.47) * radius * (0.45 + (i % 5) * 0.09),
      ]);
      p.userData.seed = i;
      particles.add(p);
    }
    group.add(particles);
    stage.animators.push((t) => {
      particles.children.forEach((p) => {
        p.position.y += Math.sin(t * 1.8 + p.userData.seed) * 0.002;
        p.material.opacity = 0.46 + Math.sin(t * 2.6 + p.userData.seed) * 0.24;
      });
      particles.rotation.y = t * 0.12;
    });
    return particles;
  }

  function addSparkTrail(group, colors, points, count = 18) {
    const path = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
    const ribbon = tube(points, material(0xffffff, {
      roughness: 0.18,
      emissive: 0xffffff,
      emissiveIntensity: 0.42,
      transparent: true,
      opacity: 0.86,
    }), 0.035);
    ribbon.name = "step-motion-ribbon";
    group.add(ribbon);
    for (let i = 0; i < count; i += 1) {
      const dot = sphere(0.045 + (i % 3) * 0.014, material(i % 2 ? colors.warm : 0xffffff, {
        roughness: 0.2,
        emissive: i % 2 ? colors.warm : 0xffffff,
        emissiveIntensity: 0.75,
        transparent: true,
        opacity: 0.78,
      }), [0, 0, 0]);
      dot.userData.seed = i;
      group.add(dot);
      stage.animators.push((t) => {
        const p = (i / count + t * 0.18) % 1;
        const pos = path.getPointAt(p);
        dot.position.copy(pos);
        dot.position.y += Math.sin(t * 5 + i) * 0.035;
        dot.material.opacity = 0.35 + Math.max(0, Math.sin(t * 4.2 - i)) * 0.58;
      });
    }
    return ribbon;
  }

  function addPhaseSpectacle(context) {
    if (stage.step <= 0) return;
    const { colors } = context;
    const cue = makeGroup(`phase-cue-${stage.step}`);
    const accentMat = material(colors.warm, {
      roughness: 0.2,
      metalness: 0.18,
      emissive: colors.warm,
      emissiveIntensity: 0.72,
      transparent: true,
      opacity: 0.88,
    });
    const whiteMat = material(0xffffff, {
      roughness: 0.18,
      emissive: 0xffffff,
      emissiveIntensity: 0.52,
      transparent: true,
      opacity: 0.76,
    });

    if (stage.step === 1) {
      for (let i = 0; i < 3; i += 1) {
        const ring = torus(0.82 + i * 0.42, 0.012, i % 2 ? accentMat : whiteMat, [0, -0.44 + i * 0.22, 0], [Math.PI / 2, 0, 0]);
        ring.userData.seed = i;
        cue.add(ring);
        stage.animators.push((t) => {
          ring.rotation.z = t * (0.42 + i * 0.12);
          ring.scale.setScalar(0.9 + Math.sin(t * 1.8 + i) * 0.06);
        });
      }
      cue.add(cyl(0.04, 0.72, 1.55, 32, material(colors.accent, {
        transparent: true,
        opacity: 0.22,
        emissive: colors.accent,
        emissiveIntensity: 0.36,
      }), [0, 0.22, 0]));
    }

    if (stage.step === 2) {
      const orbit = makeGroup("motion-orbit");
      const points = [[-1.9, 0.32, 0.86], [-0.68, 0.82, 0.16], [0.78, 0.42, -0.52], [1.9, 0.76, 0.36]];
      addSparkTrail(orbit, colors, points, 20);
      orbit.position.y = 0.2;
      cue.add(orbit);
      const mover = sphere(0.16, accentMat, [-1.9, 0.52, 0.86], [1.2, 1.2, 1.2]);
      cue.add(mover);
      const path = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(p[0], p[1] + 0.2, p[2])));
      stage.animators.push((t) => {
        const pos = path.getPointAt((t * 0.18) % 1);
        mover.position.copy(pos);
        mover.scale.setScalar(1 + Math.sin(t * 8) * 0.14);
      });
    }

    if (stage.step === 3) {
      const portal = torus(1.34, 0.04, accentMat, [0, 0.62, -0.48], [0.35, 0.1, 0]);
      cue.add(portal);
      const inner = torus(0.92, 0.018, whiteMat, [0, 0.62, -0.48], [0.35, 0.1, 0]);
      cue.add(inner);
      const glyph = labelSprite(typeGlyph[stage.sceneType] || "志", {
        bg: "rgba(255,255,255,0.88)",
        color: "#14231e",
        fontSize: 92,
        w: 0.74,
        h: 0.58,
      });
      glyph.position.set(0, 0.68, -0.38);
      cue.add(glyph);
      addParticles(cue, colors, 28, 1.72, 0.9);
      stage.animators.push((t) => {
        portal.rotation.z = t * 0.72;
        inner.rotation.z = -t * 0.96;
        glyph.position.y = 0.68 + Math.sin(t * 2.2) * 0.06;
      });
    }

    stage.world.add(cue);
  }

  function buildBase(context) {
    const { colors, village, point } = context;
    const sky = color(colors.sky);
    if (stage.step === 2) sky.lerp(color(colors.water), 0.18);
    if (stage.step === 3) sky.lerp(color(colors.warm), 0.22);
    stage.scene.background = sky;
    stage.scene.fog = new THREE.Fog(sky, 7.6, 17);
    const cameraByStep = [
      [0, 3.85, 7.55, 0, 0.18, 0],
      [0.1, 3.45, 7.15, -0.08, 0.18, 0],
      [0.26, 3.05, 6.55, 0.26, 0.12, -0.02],
      [0.16, 3.08, 6.35, 0.42, 0.24, -0.12],
    ][stage.step] || [0, 3.08, 6.08, 0, 0.16, 0];
    stage.cameraGoal.set(cameraByStep[0], cameraByStep[1], cameraByStep[2]);
    stage.lookAt.set(cameraByStep[3], cameraByStep[4], cameraByStep[5]);

    const base = makeGroup("base");
    base.add(cyl(3.82, 4.18, 0.3, 96, material(colors.base, { roughness: 0.92 }), [0, -1.42, 0]));
    base.add(cyl(3.95, 3.95, 0.05, 96, material(0xffffff, { transparent: true, opacity: 0.17 }), [0, -1.22, 0]));
    base.add(torus(3.02, 0.018, material(0xffffff, { transparent: true, opacity: 0.44, emissive: 0xffffff, emissiveIntensity: 0.14 }), [0, -1.16, 0]));
    base.add(torus(2.08, 0.014, material(colors.water, { transparent: true, opacity: 0.34, emissive: colors.water, emissiveIntensity: 0.12 }), [0, -1.13, 0]));

    const routeMat = material(0xffffff, {
      roughness: 0.18,
      emissive: 0xffffff,
      emissiveIntensity: stage.step > 0 ? 0.3 : 0.08,
      transparent: true,
      opacity: stage.step > 1 ? 0.92 : 0.48,
    });
    base.add(tube([[-2.95, -0.98, 1.18], [-1.74, -0.9, 0.12], [-0.3, -0.88, 0.68], [1.02, -0.9, -0.38], [2.66, -0.95, -0.98]], routeMat, 0.035));

    const title = labelSprite(`${village.name} · ${point.label || "互动节点"}`, {
      bg: "rgba(13, 24, 20, 0.74)",
      fontSize: 48,
      w: 2.45,
      h: 0.64,
    });
    title.position.set(0, 2.34, -2.28);
    base.add(title);

    if (stage.step >= 1) {
      const scan = torus(4.15, 0.01, material(colors.accent, {
        transparent: true,
        opacity: 0.48,
        emissive: colors.accent,
        emissiveIntensity: 0.32,
      }), [0, -1.04, 0]);
      base.add(scan);
      stage.animators.push((t) => {
        scan.scale.setScalar(0.96 + Math.sin(t * 1.7) * 0.035);
        scan.rotation.z = t * 0.12;
      });
    }

    stage.world.add(base);
  }

  function buildPaw(context) {
    const { colors } = context;
    const group = makeGroup("paw-scene");
    if (stage.step >= 1) {
      addHouse(group, -2.6, 0.9, colors, 0.7);
      const arch = makeGroup("pet-arch");
      arch.add(cyl(0.08, 0.08, 1.18, 16, material(colors.dark), [-3.15, -0.48, 1.7]));
      arch.add(cyl(0.08, 0.08, 1.18, 16, material(colors.dark), [-2.05, -0.48, 1.7]));
      arch.add(torus(0.56, 0.06, material(colors.accent), [-2.6, 0.12, 1.7], [0, 0, 0]));
      group.add(arch);
    }
    if (stage.step >= 2) {
      const trail = makeGroup("running-paws");
      for (let i = 0; i < 7; i += 1) {
        const paw = makeGroup("paw");
        paw.add(sphere(0.12, material(0xffffff), [0, 0, 0], [1, 0.28, 0.72]));
        paw.add(sphere(0.04, material(0xffffff), [-0.08, 0.04, -0.1], [1, 0.38, 1]));
        paw.add(sphere(0.04, material(0xffffff), [0, 0.04, -0.13], [1, 0.38, 1]));
        paw.add(sphere(0.04, material(0xffffff), [0.08, 0.04, -0.1], [1, 0.38, 1]));
        paw.position.set(-2.8 + i * 0.72, -0.68 + i * 0.012, 1.35 - i * 0.42);
        paw.rotation.y = -0.42 + i * 0.08;
        paw.userData.seed = i;
        trail.add(paw);
      }
      group.add(trail);
      stage.animators.push((t) => {
        trail.children.forEach((paw) => {
          const pulse = Math.sin(t * 4.2 - paw.userData.seed * 0.72);
          paw.scale.setScalar(0.82 + Math.max(0, pulse) * 0.32);
        });
      });
    }
    if (stage.step >= 3) {
      const island = makeGroup("cat-island");
      island.add(cyl(0.98, 1.12, 0.18, 48, material(colors.water, { transparent: true, opacity: 0.8 }), [2.25, -0.66, -1.35]));
      island.add(cyl(0.62, 0.72, 0.18, 48, material(0xf5f0df), [2.25, -0.49, -1.35]));
      island.add(sphere(0.18, material(colors.accent), [2.02, -0.22, -1.5], [1.2, 0.42, 0.8]));
      island.add(sphere(0.18, material(colors.accent), [2.46, -0.22, -1.2], [1.2, 0.42, 0.8]));
      group.add(island);
      addBadge(group, "友", colors, 0.92, 1.05, -0.5);
    }
    stage.world.add(group);
  }

  function buildLeaf(context) {
    const { colors } = context;
    const group = makeGroup("leaf-scene");
    if (stage.step >= 1) {
      for (let i = 0; i < 5; i += 1) {
        const leaf = mesh(new THREE.SphereGeometry(0.56, 32, 14), material(colors.accent, { roughness: 0.38 }), [
          -1.7 + i * 0.82,
          -0.34 + i * 0.04,
          -0.1 + Math.sin(i) * 0.2,
        ], [0.2, 0.1, -0.8 + i * 0.38]);
        leaf.scale.set(0.42, 0.08, 1.0);
        group.add(leaf);
      }
      addTree(group, -2.6, 1.2, colors, 0.84);
    }
    if (stage.step >= 2) {
      const veinMat = material(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.45, transparent: true, opacity: 0.9 });
      for (let i = 0; i < 5; i += 1) {
        group.add(tube([[-1.7 + i * 0.82, -0.2, -0.62], [-1.62 + i * 0.82, -0.08, -0.1], [-1.56 + i * 0.82, 0.08, 0.46]], veinMat, 0.018));
      }
    }
    if (stage.step >= 3) {
      const card = makeGroup("leaf-card");
      card.add(box(1.65, 0.1, 2.15, material(0xfffbeb, { roughness: 0.32 }), [1.55, -0.18, 0.15], [0.24, -0.25, 0]));
      card.add(tube([[0.9, 0.05, -0.7], [1.5, 0.16, 0], [2.16, 0.05, 0.76]], material(colors.accent, { emissive: colors.accent, emissiveIntensity: 0.28 }), 0.025));
      group.add(card);
      addBadge(group, "纹", colors, -0.55, 1.22, -0.45);
    }
    stage.world.add(group);
  }

  function buildMarket(context) {
    const { colors } = context;
    const group = makeGroup("market-scene");
    if (stage.step >= 1) {
      for (let i = 0; i < 3; i += 1) {
        const stall = makeGroup("stall");
        const x = -1.7 + i * 1.7;
        stall.add(box(1.05, 0.52, 0.74, material(0xfff5d6), [x, -0.62, 0.2]));
        stall.add(box(1.2, 0.16, 0.86, material(colors.accent), [x, -0.22, 0.18], [0, 0, i % 2 ? -0.1 : 0.1]));
        stall.add(cyl(0.04, 0.04, 0.7, 8, material(colors.dark), [x - 0.48, -0.48, -0.24]));
        stall.add(cyl(0.04, 0.04, 0.7, 8, material(colors.dark), [x + 0.48, -0.48, -0.24]));
        group.add(stall);
      }
    }
    if (stage.step >= 2) {
      const line = tube([[-2.4, 0.48, -0.22], [-0.6, 0.74, -0.55], [1.2, 0.64, -0.18], [2.5, 0.42, -0.42]], material(0xffffff, { transparent: true, opacity: 0.75 }), 0.012);
      group.add(line);
      for (let i = 0; i < 9; i += 1) {
        const bulb = sphere(0.07, material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.8 }), [-2.25 + i * 0.58, 0.48 + Math.sin(i * 0.7) * 0.18, -0.32]);
        bulb.userData.seed = i;
        group.add(bulb);
        stage.animators.push((t) => {
          bulb.material.emissiveIntensity = 0.35 + Math.max(0, Math.sin(t * 4 + i)) * 1.05;
        });
      }
    }
    if (stage.step >= 3) {
      addParticles(group, colors, 24, 2.7, 0.7);
      addBadge(group, "集", colors, 0, 1.28, -0.1);
    }
    stage.world.add(group);
  }

  function buildWalk(context) {
    const { colors } = context;
    const group = makeGroup("walk-scene");
    if (stage.step >= 1) {
      group.add(cyl(0.14, 0.18, 1.15, 12, material(colors.dark), [-2.7, -0.45, 1.2]));
      const sign = labelSprite("田野入口", { bg: "rgba(255,255,255,0.86)", color: "#14231e", fontSize: 52, w: 1.25, h: 0.5 });
      sign.position.set(-2.7, 0.38, 1.2);
      group.add(sign);
      addTree(group, -3.25, 0.35, colors, 0.7);
    }
    if (stage.step >= 2) {
      const path = tube([[-2.65, -0.64, 1.1], [-1.2, -0.48, -0.2], [0.35, -0.44, 0.85], [1.55, -0.45, -0.25], [2.72, -0.54, -1.28]], material(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.55 }), 0.055);
      group.add(path);
      const walker = sphere(0.18, material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.45 }), [-2.65, -0.42, 1.1]);
      group.add(walker);
      stage.animators.push((t) => {
        const p = (Math.sin(t * 0.9) + 1) / 2;
        walker.position.set(-2.65 + p * 5.3, -0.28 + Math.sin(p * Math.PI) * 0.3, 1.1 - p * 2.3 + Math.sin(p * 10) * 0.2);
      });
    }
    if (stage.step >= 3) {
      for (let i = 0; i < 5; i += 1) {
        const wind = tube([[-1.8 + i * 0.8, 0.55 + i * 0.04, -0.8], [-1.25 + i * 0.8, 0.64, -0.58], [-0.82 + i * 0.8, 0.52, -0.74]], material(0xffffff, { transparent: true, opacity: 0.58, emissive: 0xffffff, emissiveIntensity: 0.22 }), 0.015);
        wind.userData.seed = i;
        group.add(wind);
        stage.animators.push((t) => {
          wind.position.x = Math.sin(t * 1.6 + i) * 0.18;
        });
      }
      addBadge(group, "行", colors, 1.15, 1.26, -0.55);
    }
    stage.world.add(group);
  }

  function buildJade(context) {
    const { colors } = context;
    const group = makeGroup("jade-scene");
    const jadeMat = material(0x8bd4bd, { roughness: 0.22, metalness: 0.18, emissive: stage.step >= 3 ? 0x4ecaa7 : 0x000000, emissiveIntensity: stage.step >= 3 ? 0.28 : 0 });
    if (stage.step >= 1) {
      for (let i = 0; i < 6; i += 1) {
        const shard = mesh(new THREE.TetrahedronGeometry(0.44, 0), jadeMat, [
          Math.cos(i) * (stage.step >= 2 ? 1.1 : 2.3),
          -0.15 + (i % 2) * 0.26,
          Math.sin(i) * (stage.step >= 2 ? 0.95 : 1.9),
        ], [i * 0.4, i * 0.9, i * 0.2]);
        shard.userData.seed = i;
        group.add(shard);
        stage.animators.push((t) => {
          shard.rotation.x += 0.01 + i * 0.001;
          shard.rotation.y += 0.012;
          if (stage.step >= 2) {
            shard.position.x += Math.sin(t * 1.6 + i) * 0.002;
          }
        });
      }
    }
    if (stage.step >= 2) {
      group.add(torus(1.12, 0.035, material(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.38, transparent: true, opacity: 0.86 }), [0, 0.16, 0], [Math.PI / 2, 0, 0]));
      group.add(tube([[-0.74, 0.16, 0], [0, 0.34, 0.34], [0.74, 0.16, 0]], material(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.32 }), 0.025));
    }
    if (stage.step >= 3) {
      group.add(cyl(0.64, 0.64, 0.12, 64, jadeMat, [0, 0.28, 0], [Math.PI / 2, 0, 0]));
      addBadge(group, "玉", colors, 0, 1.38, -0.48);
    }
    stage.world.add(group);
  }

  function buildBook(context) {
    const { colors } = context;
    const group = makeGroup("book-scene");
    if (stage.step >= 1) {
      const book = makeGroup("open-book");
      book.add(box(1.25, 0.08, 1.55, material(0xfffbef), [-0.62, -0.52, 0], [0, 0, -0.18]));
      book.add(box(1.25, 0.08, 1.55, material(0xf5f7ff), [0.62, -0.52, 0], [0, 0, 0.18]));
      book.add(cyl(0.055, 0.055, 1.6, 16, material(colors.accent), [0, -0.49, 0], [Math.PI / 2, 0, 0]));
      group.add(book);
      addCloud(group, -1.8, 0.5, -0.52, 0.74);
      addHouse(group, 2.25, 0.8, colors, 0.65);
      stage.animators.push((t) => {
        book.children[0].rotation.z = -0.28 + Math.sin(t * 1.8) * 0.07;
        book.children[1].rotation.z = 0.28 - Math.sin(t * 1.8) * 0.07;
      });
    }
    if (stage.step >= 2) {
      ["云", "童", "艺", "窑"].forEach((word, i) => {
        const sprite = labelSprite(word, { bg: i % 2 ? "rgba(93,145,194,0.82)" : "rgba(255,255,255,0.86)", color: i % 2 ? "#fff" : "#14231e", fontSize: 86, w: 0.72, h: 0.5 });
        sprite.position.set(-1.25 + i * 0.84, 0.52 + (i % 2) * 0.42, -0.12 + Math.sin(i) * 0.35);
        sprite.userData.seed = i;
        group.add(sprite);
        stage.animators.push((t) => {
          sprite.position.y = 0.55 + (i % 2) * 0.36 + Math.sin(t * 1.5 + i) * 0.18;
          sprite.rotation.z = Math.sin(t * 1.4 + i) * 0.08;
        });
      });
    }
    if (stage.step >= 3) {
      const passport = makeGroup("passport");
      passport.add(box(1.3, 0.1, 0.9, material(colors.accent), [1.2, 0.08, -1.05], [0.24, -0.28, 0.02]));
      passport.add(labelSprite("护照", { bg: "rgba(255,255,255,0.9)", color: "#14231e", fontSize: 54, w: 0.9, h: 0.42 }));
      passport.children[1].position.set(1.2, 0.26, -1.1);
      group.add(passport);
      addBadge(group, "书", colors, -0.76, 1.36, -0.56);
    }
    stage.world.add(group);
  }

  function buildSlope(context) {
    const { colors } = context;
    const group = makeGroup("slope-scene");
    group.scale.set(0.82, 0.82, 0.82);
    group.position.set(0, 0.02, 0.05);

    const slopeMat = material(colors.accent, {
      roughness: 0.38,
      metalness: 0.08,
      emissive: colors.accent,
      emissiveIntensity: stage.step >= 2 ? 0.22 : 0.08,
    });
    const snowMat = material(0xffffff, {
      roughness: 0.26,
      transparent: true,
      opacity: 0.5,
      emissive: 0xffffff,
      emissiveIntensity: 0.16,
    });
    const makeSlope = (length = 2.8, y = 0.1, z = 0) => {
      const hill = makeGroup("cloud-slope");
      hill.add(box(length, 0.3, 1.2, slopeMat, [0, y, z], [0, 0, -0.2]));
      hill.add(box(length + 0.05, 0.045, 1.22, snowMat, [0, y + 0.18, z], [0, 0, -0.2]));
      hill.add(tube([[-length * 0.38, y + 0.36, z + 0.34], [-0.28, y + 0.12, z + 0.28], [length * 0.36, y - 0.16, z + 0.18]], material(0xffffff, {
        roughness: 0.18,
        emissive: 0xffffff,
        emissiveIntensity: 0.62,
        transparent: true,
        opacity: 0.88,
      }), 0.04));
      group.add(hill);
      return hill;
    };

    if (stage.step === 1) {
      makeSlope(2.65, 0.08, 0.08);
      addCloud(group, -1.65, 0.74, -0.52, 0.72);
      addCloud(group, 1.52, -0.28, 0.2, 0.52, 0.78);
      const start = labelSprite("等云坡", { bg: "rgba(255,255,255,0.88)", color: "#14231e", fontSize: 56, w: 1.1, h: 0.46 });
      start.position.set(-0.42, 1.35, -0.72);
      group.add(start);
      const startGate = makeGroup("slope-start-gate");
      startGate.add(cyl(0.06, 0.06, 1.12, 16, material(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.28 }), [-0.82, 0.24, 0.5]));
      startGate.add(cyl(0.06, 0.06, 1.12, 16, material(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.28 }), [-0.1, 0.24, 0.5]));
      startGate.add(tube([[-0.82, 0.8, 0.5], [-0.46, 1.02, 0.5], [-0.1, 0.8, 0.5]], material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.58 }), 0.035));
      group.add(startGate);
    }

    if (stage.step === 2) {
      makeSlope(3.25, 0.0, 0);
      const rider = makeGroup("rider");
      rider.add(box(0.9, 0.16, 0.48, material(colors.warm, { roughness: 0.22, metalness: 0.18, emissive: colors.warm, emissiveIntensity: 0.34 }), [0, 0, 0], [0, 0, 0.06]));
      rider.add(sphere(0.24, material(0xffffff, { roughness: 0.26 }), [0.05, 0.3, 0], [1, 0.82, 1]));
      rider.add(sphere(0.13, material(colors.dark), [-0.1, 0.48, 0.02], [0.9, 1, 0.9]));
      rider.add(box(0.16, 0.46, 0.1, material(colors.dark), [-0.07, 0.15, 0.04], [0, 0, -0.42]));
      group.add(rider);
      const slidePath = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.36, 0.54, 0.44),
        new THREE.Vector3(-0.42, 0.25, 0.34),
        new THREE.Vector3(0.56, -0.1, 0.24),
        new THREE.Vector3(1.48, -0.42, 0.12),
      ]);
      stage.animators.push((t) => {
        const p = 0.08 + ((t * 0.26) % 0.84);
        const pos = slidePath.getPointAt(Math.min(1, p));
        rider.position.copy(pos);
        rider.position.y += Math.sin(t * 10) * 0.035;
        rider.rotation.z = -0.42 + p * 0.62;
        rider.rotation.y = Math.sin(t * 1.4) * 0.16;
      });
      addSparkTrail(group, colors, [[-1.36, 0.46, 0.52], [-0.42, 0.22, 0.48], [0.56, -0.12, 0.36], [1.48, -0.44, 0.2]], 22);
      addCloud(group, -0.12, 0.38, 0.78, 0.44, 0.72);
    }

    if (stage.step === 3) {
      makeSlope(2.72, -0.08, 0.08);
      const gate = makeGroup("cloud-gate");
      gate.add(cyl(0.08, 0.08, 1.54, 16, material(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.42 }), [0.72, -0.2, -0.1]));
      gate.add(cyl(0.08, 0.08, 1.54, 16, material(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.42 }), [1.52, -0.2, -0.1]));
      gate.add(torus(0.48, 0.075, material(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.62 }), [1.12, 0.56, -0.1], [0, 0, 0]));
      gate.add(labelSprite("云门打卡", { bg: "rgba(20,35,30,0.82)", color: "#fff", fontSize: 52, w: 1.22, h: 0.42 }));
      gate.children[3].position.set(1.12, 1.34, -0.16);
      group.add(gate);
      addParticles(group, colors, 34, 2.2, 0.9);
      addBadge(group, "坡", colors, -0.72, 1.32, -0.62);
      const halo = torus(1.28, 0.022, material(colors.warm, {
        transparent: true,
        opacity: 0.82,
        emissive: colors.warm,
        emissiveIntensity: 0.8,
      }), [0.35, 0.72, 0.08], [0.8, 0.35, 0]);
      group.add(halo);
      stage.animators.push((t) => {
        halo.rotation.z = t * 0.9;
        halo.scale.setScalar(0.92 + Math.sin(t * 2.4) * 0.08);
      });
    }
    stage.world.add(group);
  }

  function buildClay(context) {
    const { colors } = context;
    const group = makeGroup("clay-scene");
    if (stage.step >= 1) {
      const wheel = makeGroup("pottery-wheel");
      wheel.add(cyl(1.22, 1.22, 0.22, 64, material(0x7b6a56, { roughness: 0.42 }), [0, -0.66, 0]));
      wheel.add(cyl(0.74, 0.92, 0.36, 64, material(0xbf8055, { roughness: 0.86 }), [0, -0.34, 0]));
      wheel.add(cyl(0.5, 0.38, 0.52, 64, material(0xc48c62, { roughness: 0.9 }), [0, 0.05, 0]));
      group.add(wheel);
      stage.animators.push((t) => {
        wheel.rotation.y = t * 1.3;
      });
    }
    if (stage.step >= 2) {
      const stamp = makeGroup("stamp");
      stamp.add(cyl(0.28, 0.28, 1.0, 24, material(colors.dark), [0, 1.14, 0]));
      stamp.add(cyl(0.56, 0.56, 0.18, 48, material(colors.accent), [0, 0.54, 0]));
      const mark = labelSprite("窑", { bg: "rgba(255,255,255,0.9)", color: "#14231e", fontSize: 84, w: 0.72, h: 0.48 });
      mark.position.set(0, 0.62, 0.1);
      stamp.add(mark);
      group.add(stamp);
      stage.animators.push((t) => {
        stamp.position.y = -Math.max(0, Math.sin(t * 2.3)) * 0.54;
      });
    }
    if (stage.step >= 3) {
      const kiln = makeGroup("kiln-fire");
      for (let i = 0; i < 7; i += 1) {
        const flame = mesh(new THREE.ConeGeometry(0.18, 0.72, 18), material(i % 2 ? 0xffb347 : 0xff7040, { emissive: i % 2 ? 0xffb347 : 0xff7040, emissiveIntensity: 0.65, transparent: true, opacity: 0.86 }), [-1.2 + i * 0.4, -0.1, -0.84]);
        flame.userData.seed = i;
        kiln.add(flame);
      }
      group.add(kiln);
      stage.animators.push((t) => {
        kiln.children.forEach((f) => {
          f.scale.y = 0.74 + Math.max(0, Math.sin(t * 4 + f.userData.seed)) * 0.42;
        });
      });
      addBadge(group, "陶", colors, 0.85, 1.36, -0.58);
    }
    stage.world.add(group);
  }

  function buildCoffee(context) {
    const { colors } = context;
    const group = makeGroup("coffee-scene");
    if (stage.step >= 1) {
      const cup = makeGroup("coffee-cup");
      cup.add(cyl(0.7, 0.54, 0.78, 48, material(0xfff8ec), [0, -0.35, 0]));
      cup.add(torus(0.74, 0.045, material(colors.accent), [0, 0.06, 0]));
      cup.add(torus(0.34, 0.04, material(0xfff8ec), [0.72, -0.24, 0], [Math.PI / 2, 0, 0]));
      cup.add(cyl(0.58, 0.58, 0.04, 48, material(0x6b4228), [0, 0.09, 0]));
      group.add(cup);
      addCloud(group, -1.65, 0.64, -0.4, 0.54);
    }
    if (stage.step >= 2) {
      for (let i = 0; i < 5; i += 1) {
        const steam = tube([[Math.sin(i) * 0.24, 0.26, -0.08 + i * 0.06], [0.16 * Math.cos(i), 0.76, 0.02], [0.28 * Math.sin(i + 1), 1.28, 0.1]], material(0xffffff, { transparent: true, opacity: 0.62, emissive: 0xffffff, emissiveIntensity: 0.18 }), 0.018);
        steam.userData.seed = i;
        group.add(steam);
        stage.animators.push((t) => {
          steam.position.y = Math.sin(t * 1.4 + i) * 0.12;
          steam.rotation.y = Math.sin(t * 0.7 + i) * 0.2;
        });
      }
    }
    if (stage.step >= 3) {
      group.add(torus(1.06, 0.055, material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.45 }), [0, 0.74, -0.02], [Math.PI / 2, 0, 0]));
      addBadge(group, "咖", colors, 1.22, 1.28, -0.55);
    }
    stage.world.add(group);
  }

  function buildMosaic(context) {
    const { colors } = context;
    const group = makeGroup("mosaic-scene");
    const swatches = [colors.accent, colors.warm, 0xffffff, colors.water, 0xff9d7b];
    if (stage.step >= 1) {
      for (let i = 0; i < 18; i += 1) {
        const row = Math.floor(i / 6);
        const col = i % 6;
        const scattered = stage.step === 1;
        const tile = box(0.44, 0.1, 0.44, material(swatches[i % swatches.length], { roughness: 0.32 }), [
          scattered ? -2.2 + Math.random() * 4.4 : -1.35 + col * 0.54,
          scattered ? -0.48 + Math.random() * 0.8 : -0.24 + row * 0.52,
          scattered ? -0.8 + Math.random() * 1.4 : -0.18,
        ], [scattered ? Math.random() * 0.8 : 0, 0, scattered ? Math.random() * 0.8 : 0]);
        tile.userData.seed = i;
        group.add(tile);
        if (stage.step >= 2) {
          stage.animators.push((t) => {
            tile.position.z = -0.18 + Math.sin(t * 2 + i) * 0.018;
          });
        }
      }
    }
    if (stage.step >= 2) {
      group.add(box(3.62, 0.08, 1.78, material(0xffffff, { transparent: true, opacity: 0.26 }), [0, 0.3, -0.26], [Math.PI / 2, 0, 0]));
    }
    if (stage.step >= 3) {
      const frame = box(3.92, 0.12, 2.05, material(colors.dark, { emissive: colors.accent, emissiveIntensity: 0.14 }), [0, 0.26, -0.34], [Math.PI / 2, 0, 0]);
      group.add(frame);
      addBadge(group, "墙", colors, 1.82, 1.34, -0.62);
      addParticles(group, colors, 18, 2.2, 1.05);
    }
    stage.world.add(group);
  }

  function buildGinkgo(context) {
    const { colors } = context;
    const group = makeGroup("ginkgo-scene");
    if (stage.step >= 1) {
      addTree(group, -0.85, -0.15, colors, 1.28, true);
      addTree(group, 0.72, 0.18, colors, 0.88, true);
    }
    if (stage.step >= 2) {
      for (let i = 0; i < 18; i += 1) {
        const leaf = mesh(new THREE.CircleGeometry(0.13 + (i % 3) * 0.02, 16), material(0xf6c945, { roughness: 0.25, side: THREE.DoubleSide, emissive: 0xf6c945, emissiveIntensity: 0.12 }), [
          -1.6 + (i % 6) * 0.62,
          1.2 + Math.floor(i / 6) * 0.38,
          -0.55 + Math.sin(i) * 0.8,
        ], [Math.PI / 2, 0, i]);
        leaf.userData.seed = i;
        group.add(leaf);
        stage.animators.push((t) => {
          leaf.position.y = 0.96 + ((t * 0.34 + i * 0.16) % 1.6);
          leaf.rotation.z = t + i;
          leaf.position.x += Math.sin(t * 1.2 + i) * 0.0025;
        });
      }
    }
    if (stage.step >= 3) {
      const card = labelSprite("银杏记忆", { bg: "rgba(255,255,255,0.88)", color: "#14231e", fontSize: 54, w: 1.45, h: 0.5 });
      card.position.set(1.42, 0.86, -0.8);
      group.add(card);
      addBadge(group, "杏", colors, 0, 1.56, -0.4);
    }
    stage.world.add(group);
  }

  function buildTea(context) {
    const { colors } = context;
    const group = makeGroup("tea-scene");
    if (stage.step >= 1) {
      for (let i = 0; i < 5; i += 1) {
        const terrace = box(3.8 - i * 0.42, 0.12, 0.44, material(i % 2 ? colors.base : colors.accent, { roughness: 0.78 }), [0, -0.72 + i * 0.24, -1.2 + i * 0.5], [0.1, 0, 0]);
        group.add(terrace);
      }
    }
    if (stage.step >= 2) {
      for (let i = 0; i < 16; i += 1) {
        const sprout = makeGroup("tea-sprout");
        const x = -1.75 + (i % 8) * 0.5;
        const z = -0.84 + Math.floor(i / 8) * 0.7;
        sprout.add(cyl(0.018, 0.018, 0.42, 8, material(0x356f3c), [x, -0.46, z]));
        sprout.add(mesh(new THREE.SphereGeometry(0.12, 18, 10), material(0x66aa5a), [x - 0.08, -0.22, z], [0, 0, 0.7]));
        sprout.add(mesh(new THREE.SphereGeometry(0.12, 18, 10), material(0x66aa5a), [x + 0.08, -0.22, z], [0, 0, -0.7]));
        sprout.userData.seed = i;
        sprout.scale.y = 0.2;
        group.add(sprout);
        stage.animators.push((t) => {
          sprout.scale.y = 0.72 + Math.max(0, Math.sin(t * 1.8 + i * 0.4)) * 0.38;
        });
      }
    }
    if (stage.step >= 3) {
      const boxGift = makeGroup("tea-gift");
      boxGift.add(box(1.25, 0.58, 0.92, material(0xf9e1a0), [1.5, -0.28, -0.35]));
      boxGift.add(box(1.36, 0.16, 1.02, material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.2 }), [1.5, 0.1, -0.35], [0, 0, 0.08]));
      boxGift.add(labelSprite("龙顶茶", { bg: "rgba(20,35,30,0.82)", color: "#fff", fontSize: 52, w: 1.05, h: 0.42 }));
      boxGift.children[2].position.set(1.5, 0.42, -0.54);
      group.add(boxGift);
      addBadge(group, "茶", colors, -0.75, 1.34, -0.62);
    }
    stage.world.add(group);
  }

  function buildStar(context) {
    const { colors } = context;
    const group = makeGroup("star-scene");
    if (stage.step >= 1) {
      group.add(box(2.2, 0.28, 0.8, material(0xb8493d), [0, -0.56, 0.18]));
      group.add(box(1.4, 0.72, 0.12, material(0xffffff), [0, 0.02, -0.32]));
      const title = labelSprite("红色研学", { bg: "rgba(184,73,61,0.88)", color: "#fff", fontSize: 52, w: 1.35, h: 0.48 });
      title.position.set(0, 0.62, -0.48);
      group.add(title);
    }
    if (stage.step >= 2) {
      for (let i = 0; i < 9; i += 1) {
        const spark = mesh(new THREE.TetrahedronGeometry(0.13, 0), material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.7 }), [0, 0.42, 0]);
        spark.userData.seed = i;
        group.add(spark);
        stage.animators.push((t) => {
          const a = t * 0.9 + i * 0.7;
          spark.position.set(Math.cos(a) * (0.7 + i * 0.06), 0.55 + Math.sin(a * 1.3) * 0.32, Math.sin(a) * (0.6 + i * 0.05));
          spark.rotation.y += 0.03;
        });
      }
      group.add(tube([[-1.6, 0.12, 0], [-0.4, 0.62, -0.25], [0.8, 0.4, 0.2], [1.7, 0.78, -0.2]], material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.42 }), 0.018));
    }
    if (stage.step >= 3) {
      addBadge(group, "星", colors, 0.8, 1.34, -0.68);
      addParticles(group, colors, 20, 2.1, 0.9);
    }
    stage.world.add(group);
  }

  function buildHome(context) {
    const { colors } = context;
    const group = makeGroup("home-scene");
    if (stage.step >= 1) {
      addHouse(group, -0.8, 0.1, colors, 1.12);
      addHouse(group, 1.0, -0.7, colors, 0.82);
      group.add(cyl(0.08, 0.08, 1.0, 16, material(colors.dark), [-2.0, -0.52, 0.62]));
      group.add(cyl(0.08, 0.08, 1.0, 16, material(colors.dark), [2.1, -0.52, 0.62]));
      group.add(tube([[-2.0, 0.02, 0.62], [-0.2, 0.18, 0.62], [2.1, 0.02, 0.62]], material(colors.dark), 0.035));
    }
    if (stage.step >= 2) {
      for (let i = 0; i < 7; i += 1) {
        const light = sphere(0.065, material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.85 }), [-1.8 + i * 0.62, 0.18 + Math.sin(i) * 0.1, 0.58]);
        light.userData.seed = i;
        group.add(light);
        stage.animators.push((t) => {
          light.material.emissiveIntensity = 0.35 + Math.max(0, Math.sin(t * 2.8 + i)) * 0.9;
        });
      }
    }
    if (stage.step >= 3) {
      const moon = sphere(0.22, material(0xffffee, { emissive: 0xffffee, emissiveIntensity: 0.6 }), [1.95, 1.56, -1.25]);
      group.add(moon);
      addParticles(group, colors, 16, 2.4, 1.2);
      addBadge(group, "宿", colors, -1.2, 1.32, -0.68);
    }
    stage.world.add(group);
  }

  function buildWorkshop(context) {
    const { colors } = context;
    const group = makeGroup("workshop-scene");
    if (stage.step >= 1) {
      group.add(box(2.2, 0.76, 1.25, material(0xf7f0dc), [0, -0.5, 0]));
      group.add(box(2.45, 0.24, 1.42, material(colors.accent), [0, 0.02, 0], [0, 0, 0.08]));
      const sign = labelSprite("共富工坊", { bg: "rgba(20,35,30,0.82)", color: "#fff", fontSize: 54, w: 1.45, h: 0.48 });
      sign.position.set(0, 0.58, -0.72);
      group.add(sign);
      for (let i = 0; i < 3; i += 1) {
        group.add(torus(0.32 + i * 0.08, 0.035, material(colors.warm, { metalness: 0.4, emissive: stage.step >= 2 ? colors.warm : 0x000000, emissiveIntensity: stage.step >= 2 ? 0.25 : 0 }), [-0.72 + i * 0.72, -0.1, -0.72], [0, 0, 0]));
      }
    }
    if (stage.step >= 2) {
      const flowMat = material(colors.warm, { emissive: colors.warm, emissiveIntensity: 0.48, transparent: true, opacity: 0.86 });
      group.add(tube([[-2.6, -0.35, 1.4], [-1.2, 0.22, 0.6], [0, 0.32, 0.1]], flowMat, 0.03));
      group.add(tube([[2.6, -0.35, 1.2], [1.2, 0.2, 0.42], [0, 0.32, 0.1]], flowMat, 0.03));
      group.add(tube([[0, -0.35, -2.0], [0.4, 0.2, -0.78], [0, 0.32, 0.1]], flowMat, 0.03));
      addHouse(group, -2.65, 1.4, colors, 0.45);
      addHouse(group, 2.55, 1.2, colors, 0.45);
    }
    if (stage.step >= 3) {
      for (let i = 0; i < 5; i += 1) {
        group.add(cyl(0.26, 0.26, 0.12, 32, material(colors.warm, { metalness: 0.5, roughness: 0.2, emissive: colors.warm, emissiveIntensity: 0.2 }), [1.45 + i * 0.02, -0.5 + i * 0.13, 0.75]));
      }
      addBadge(group, "富", colors, 0, 1.36, -0.74);
    }
    stage.world.add(group);
  }

  const builders = {
    paw: buildPaw,
    leaf: buildLeaf,
    market: buildMarket,
    walk: buildWalk,
    jade: buildJade,
    book: buildBook,
    slope: buildSlope,
    clay: buildClay,
    coffee: buildCoffee,
    mosaic: buildMosaic,
    ginkgo: buildGinkgo,
    tea: buildTea,
    star: buildStar,
    home: buildHome,
    workshop: buildWorkshop,
  };

  function buildScene() {
    const context = ctx();
    if (!context.village) return;
    stage.villageId = context.village.id;
    stage.nodeIndex = context.nodeIndex;
    stage.sceneType = context.sceneInfo.type || "slope";
    clearWorld();
    buildBase(context);
    const builder = builders[stage.sceneType] || buildSlope;
    builder(context);
    addPhaseSpectacle(context);
    const glyph = typeGlyph[stage.sceneType] || "志";
    if (stage.step === 0) {
      const ready = labelSprite(glyph, { bg: "rgba(255,255,255,0.82)", color: "#14231e", fontSize: 104, w: 0.9, h: 0.72 });
      ready.position.set(0, 0.32, 0);
      stage.world.add(ready);
      stage.animators.push((t) => {
        ready.position.y = 0.32 + Math.sin(t * 1.8) * 0.08;
        ready.rotation.z = Math.sin(t * 1.2) * 0.08;
      });
    }
    syncPanel(context);
  }

  function syncPanel(context = ctx()) {
    if (!stage.root) return;
    const shell = stage.root.querySelector(".play-3d-shell");
    if (shell) shell.dataset.step = String(stage.step);
    const title = stage.root.querySelector("[data-play-3d-title]");
    const kicker = stage.root.querySelector("[data-play-3d-kicker]");
    const progress = stage.root.querySelector("[data-play-3d-progress]");
    const finish = stage.root.querySelector("[data-play-3d-complete]");
    if (title) title.textContent = context.sceneInfo.title || context.point.title || "3D互动";
    if (kicker) kicker.textContent = `${context.village.name} · ${context.point.title || context.point.label || ""}`;
    if (progress) progress.textContent = `${stage.step}/3`;
    if (finish) {
      const done = window.getGameCollection?.(context.village.id)?.has(context.nodeIndex);
      finish.disabled = stage.step < 3 && !done;
      finish.textContent = done ? "已收集" : stage.step >= 3 ? "收进任务地图" : "完成三步后收集";
    }
    stage.root.querySelectorAll("[data-play-3d-step]").forEach((button) => {
      const step = numberAttr(button, "data-play-3d-step");
      button.classList.toggle("is-done", stage.step >= step);
      button.classList.toggle("is-current", stage.step === step);
    });
  }

  function setStep(step, source = "button") {
    const nextStep = Number(step);
    stage.step = Number.isFinite(nextStep) ? clamp(nextStep, 0, 3) : 0;
    const appState = window.state;
    if (appState) {
      appState.playSteps = new Set();
      for (let i = 0; i < stage.step; i += 1) appState.playSteps.add(i);
    }
    if (stage.scene) buildScene();
    else syncPanel(ctx());
    if (stage.root) startFrameLoop(stage.root);
    if (source !== "silent") {
      const context = ctx();
      const label = context.sceneInfo.steps?.[stage.step - 1] || "互动阶段";
      window.showToast?.(stage.step > 0 ? `已点亮：${label}` : "回到初始场景");
      navigator.vibrate?.(stage.step >= 3 ? 18 : 10);
    }
  }

  function startFrameLoop(root) {
    if (stage.frameTimer) window.clearInterval(stage.frameTimer);
    const img = root.querySelector("[data-frame-img]");
    const host = root.querySelector("[data-frame-anim]");
    const base = host?.dataset.frameAnim || host?.dataset.base;
    if (!img || !base) return;
    let frame = Math.max(0, stage.step - 1) * 4;
    img.src = `${base}frame-${String(frame % 16).padStart(2, "0")}.jpg`;
    stage.frameTimer = window.setInterval(() => {
      if (!document.body.contains(root)) {
        window.clearInterval(stage.frameTimer);
        stage.frameTimer = 0;
        return;
      }
      frame = (frame + 1) % 16;
      img.src = `${base}frame-${String(frame).padStart(2, "0")}.jpg`;
    }, 62.5);
  }

  function completeNode() {
    const context = ctx();
    const collection = window.getGameCollection?.(context.village.id);
    if (collection) {
      collection.add(context.nodeIndex);
      if (collection.size >= context.guide.points.length && window.state) {
        window.state.discovered.add(context.village.id);
        window.state.score = window.state.discovered.size;
      }
    }
    window.showToast?.(`${context.sceneInfo.verb || context.point.action || "互动"}完成`);
    window.setRoute?.("game", {
      village: context.village.id,
      gameVillage: context.village.id,
      gameActiveNode: context.nodeIndex,
      selectedMapNode: context.nodeIndex,
    });
  }

  function renderShell(root, context) {
    const steps = context.sceneInfo.steps || ["搭建场景", "触发运动", "完成打卡"];
    const nodes = context.guide.points || [];
    root.innerHTML = `
        <div class="play-3d-shell" data-step="${stage.step}">
        <button class="play-3d-tap-layer" type="button" data-play-3d-tap aria-label="推进互动步骤"></button>
        <div class="play-3d-sheen" aria-hidden="true"></div>
        <figure class="play-frame-anim" data-frame-anim data-base="${frameBase(context.village.id, context.nodeIndex)}" aria-hidden="true">
          <img src="${frameBase(context.village.id, context.nodeIndex)}frame-00.jpg" alt="" data-frame-img loading="eager" />
        </figure>
        <header class="play-3d-head" style="--village:${context.village.color}">
          <button class="back" type="button" data-play-3d-back aria-label="返回">‹</button>
          <div>
            <p data-play-3d-kicker>${context.village.name} · ${context.point.title || ""}</p>
            <h1 data-play-3d-title>${context.sceneInfo.title}</h1>
          </div>
          <button class="play-map-jump" type="button" data-play-3d-map>地图</button>
        </header>

        <div class="play-3d-progress-pill">
          <span data-play-3d-progress>${stage.step}/3</span>
          <strong>${context.sceneInfo.verb || context.point.action || "3D互动"}</strong>
        </div>

        <section class="play-3d-controls" style="--village:${context.village.color}">
          <div class="play-3d-step-row">
            ${steps
              .map(
                (step, index) => `
                  <button class="play-3d-step ${stage.step >= index + 1 ? "is-done" : ""}" type="button" data-play-3d-step="${index + 1}">
                    <em>${index + 1}</em>
                    <span>${step}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
          <button class="play-3d-complete" type="button" data-play-3d-complete ${stage.step < 3 ? "disabled" : ""}>${stage.step >= 3 ? "收进任务地图" : "完成三步后收集"}</button>
        </section>

        <nav class="play-3d-node-switch" aria-label="切换互动项目">
          ${nodes
            .map(
              (node, index) => `
                <button class="${index === context.nodeIndex ? "is-active" : ""}" type="button" data-play-3d-node="${index}" style="--village:${context.village.color}">
                  <i>${node.icon || "✦"}</i>
                  <span>${window.nodePlayScenes?.[context.village.id]?.[index]?.title || node.label || node.title}</span>
                </button>
              `,
            )
            .join("")}
        </nav>
      </div>
    `;
  }

  function initThree(wrap) {
    const canvas = document.createElement("canvas");
    canvas.className = "play-3d-canvas";
    wrap.appendChild(canvas);
    stage.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    stage.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    stage.renderer.shadowMap.enabled = true;
    stage.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    stage.scene = new THREE.Scene();
    stage.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    stage.camera.position.copy(stage.cameraGoal);
    stage.clock = new THREE.Clock();
    stage.world = new THREE.Group();
    stage.scene.add(stage.world);

    const ambient = new THREE.HemisphereLight(0xffffff, 0x7d927c, 1.45);
    stage.scene.add(ambient);
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(4, 7.2, 5.5);
    key.castShadow = true;
    key.shadow.mapSize.width = 1024;
    key.shadow.mapSize.height = 1024;
    stage.scene.add(key);
    const rim = new THREE.DirectionalLight(0xb8dcff, 1.05);
    rim.position.set(-5, 2.4, -3.5);
    stage.scene.add(rim);

    stage.resize = () => {
      if (!stage.wrap || !stage.renderer || !stage.camera) return;
      const rect = stage.wrap.getBoundingClientRect();
      stage.renderer.setSize(rect.width, rect.height, false);
      stage.camera.aspect = rect.width / Math.max(1, rect.height);
      stage.camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", stage.resize);
    stage.resize();
  }

  function attachEvents(root) {
    root.addEventListener("click", (event) => {
      const target = event.target.closest("[data-play-3d-step], [data-play-3d-complete], [data-play-3d-back], [data-play-3d-map], [data-play-3d-node], [data-play-3d-tap]");
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      const context = ctx();
      if (target.matches("[data-play-3d-step]")) {
        setStep(numberAttr(target, "data-play-3d-step"));
        return;
      }
      if (target.matches("[data-play-3d-tap]")) {
        setStep(stage.step >= 3 ? 0 : stage.step + 1);
        return;
      }
      if (target.matches("[data-play-3d-complete]")) {
        if (stage.step < 3) {
          window.showToast?.("先点亮三个3D步骤");
          return;
        }
        completeNode();
        return;
      }
      if (target.matches("[data-play-3d-back]")) {
        window.setRoute?.("game", {
          village: context.village.id,
          gameVillage: context.village.id,
          gameActiveNode: context.nodeIndex,
          selectedMapNode: context.nodeIndex,
        });
        return;
      }
      if (target.matches("[data-play-3d-map]")) {
        window.setRoute?.("detail", {
          village: context.village.id,
          tab: "map",
          selectedMapNode: context.nodeIndex,
          selectedStoryNode: context.nodeIndex,
        });
        return;
      }
      if (target.matches("[data-play-3d-node]")) {
        const next = numberAttr(target, "data-play-3d-node", context.nodeIndex);
        window.setRoute?.("play", {
          village: context.village.id,
          gameVillage: context.village.id,
          gameActiveNode: next,
          selectedMapNode: next,
        });
      }
    });

    const canvasWrap = root.querySelector("[data-play-3d-canvas-wrap]");
    if (!canvasWrap) return;
    canvasWrap.addEventListener("pointerdown", (event) => {
      stage.drag = {
        x: event.clientX,
        y: event.clientY,
        rx: stage.rotationX,
        ry: stage.rotationY,
        moved: false,
      };
      canvasWrap.setPointerCapture?.(event.pointerId);
    });
    canvasWrap.addEventListener("pointermove", (event) => {
      if (!stage.drag) return;
      const dx = event.clientX - stage.drag.x;
      const dy = event.clientY - stage.drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) stage.drag.moved = true;
      stage.rotationY = stage.drag.ry + dx * 0.006;
      stage.rotationX = clamp(stage.drag.rx + dy * 0.004, -0.55, 0.22);
    });
    canvasWrap.addEventListener("pointerup", () => {
      if (!stage.drag) return;
      const wasTap = !stage.drag.moved;
      stage.drag = null;
      if (wasTap) setStep(stage.step >= 3 ? 0 : stage.step + 1);
    });
  }

  function animate() {
    if (!stage.renderer || !stage.scene || !stage.camera) return;
    const t = stage.clock.getElapsedTime();
    stage.camera.position.lerp(stage.cameraGoal, 0.08);
    stage.camera.lookAt(stage.lookAt);
    if (stage.world) {
      stage.world.rotation.x += (stage.rotationX - stage.world.rotation.x) * 0.08;
      stage.world.rotation.y += (stage.rotationY + Math.sin(t * 0.28) * 0.035 - stage.world.rotation.y) * 0.08;
    }
    stage.animators.forEach((fn) => fn(t));
    stage.renderer.render(stage.scene, stage.camera);
    stage.raf = requestAnimationFrame(animate);
  }

  function dispose() {
    if (stage.raf) cancelAnimationFrame(stage.raf);
    stage.raf = 0;
    if (stage.frameTimer) window.clearInterval(stage.frameTimer);
    stage.frameTimer = 0;
    if (stage.resize) window.removeEventListener("resize", stage.resize);
    stage.resize = null;
    if (stage.world) disposeObject(stage.world);
    if (stage.renderer) {
      stage.renderer.dispose();
      stage.renderer.forceContextLoss?.();
    }
    stage.root = null;
    stage.wrap = null;
    stage.renderer = null;
    stage.scene = null;
    stage.camera = null;
    stage.world = null;
    stage.clock = null;
    stage.animators = [];
  }

  function mount() {
    const page = document.querySelector("[data-play-3d-page]");
    const root = page?.querySelector("[data-play-3d-root]");
    if (!root) return;
    dispose();
    const context = ctx();
    stage.root = root;
    stage.step = clamp(window.state?.playSteps?.size || 0, 0, 3);
    stage.nodeIndex = context.nodeIndex;
    stage.villageId = context.village.id;
    renderShell(root, context);
    attachEvents(root);
    syncPanel(context);
    startFrameLoop(root);
  }

  window.play3d = {
    mount,
    dispose,
    setStep,
    state: stage,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      if (window.state?.route === "play") mount();
    }, { once: true });
  } else if (window.state?.route === "play") {
    mount();
  }
})();
