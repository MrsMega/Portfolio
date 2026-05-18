(() => {
  "use strict";

  const portfolio = window.Portfolio;
  const { BREAKPOINTS, SELECTORS, reduceMotion } = portfolio.config;

  function setupCanvasMap() {
    const canvas = document.querySelector(SELECTORS.mapCanvas);
    const hero = canvas.closest(SELECTORS.hero);
    const ctx = canvas.getContext("2d");
    const compactGraph = window.matchMedia(BREAKPOINTS.compactGraph);
    const nodes = [
      { id: "sae", label: "SAE", x: 0.22, y: 0.46, color: "#d6533a", filter: "SAE", target: "experiences" },
      { id: "projet", label: "Projet", x: 0.58, y: 0.24, color: "#00766d", filter: "Projet", target: "experiences" },
      { id: "stage", label: "Stage", x: 0.78, y: 0.58, color: "#26324d", filter: "Stage", target: "experiences" },
      { id: "preuves", label: "Preuves", x: 0.42, y: 0.68, color: "#b38a1f", target: "competences" },
      { id: "bilan", label: "Bilan", x: 0.68, y: 0.82, color: "#5a4b7a", target: "bilan" }
    ];
    const links = [
      ["sae", "projet"],
      ["projet", "stage"],
      ["stage", "bilan"],
      ["bilan", "preuves"],
      ["preuves", "sae"],
      ["projet", "preuves"]
    ];
    const pointer = { x: 0.5, y: 0.5 };
    const drag = {
      node: null,
      offsetX: 0,
      offsetY: 0,
      startX: 0,
      startY: 0,
      lastX: 0,
      lastY: 0,
      moved: false
    };
    const physics = {
      spring: 0.018,
      repulsion: 8200,
      damping: 0.88,
      centerPull: 0.0016,
      floatForce: 0.045,
      maxSpeed: 26
    };
    let hoverNode = null;
    let width = 0;
    let height = 0;
    let frame = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes.forEach((node) => {
        if (typeof node.px !== "number" || typeof node.py !== "number") {
          node.px = node.x * width;
          node.py = node.y * height;
          node.vx = 0;
          node.vy = 0;
          return;
        }

        node.px = clamp(node.px, 48, width - 48);
        node.py = clamp(node.py, 58, height - 58);
      });
    }

    function getNode(id) {
      return nodes.find((node) => node.id === id);
    }

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function getCanvasPoint(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        ratioX: rect.width > 0 ? (event.clientX - rect.left) / rect.width : 0.5,
        ratioY: rect.height > 0 ? (event.clientY - rect.top) / rect.height : 0.5
      };
    }

    function setNodePosition(node, x, y) {
      const nextX = clamp(x, 48, width - 48);
      const nextY = clamp(y, 58, height - 58);
      node.vx = (nextX - node.px) * 0.45;
      node.vy = (nextY - node.py) * 0.45;
      node.px = nextX;
      node.py = nextY;
      node.x = node.px / width;
      node.y = node.py / height;
    }

    function hitTest(x, y) {
      return [...nodes].reverse().find((node) => {
        const radius = node.radius || 22;
        const dx = x - node.px;
        const dy = y - node.py;
        return Math.hypot(dx, dy) <= radius + 6;
      });
    }

    function drawRoundedRect(x, y, rectWidth, rectHeight, radius) {
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(x, y, rectWidth, rectHeight, radius);
        return;
      }

      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + rectWidth - radius, y);
      ctx.quadraticCurveTo(x + rectWidth, y, x + rectWidth, y + radius);
      ctx.lineTo(x + rectWidth, y + rectHeight - radius);
      ctx.quadraticCurveTo(x + rectWidth, y + rectHeight, x + rectWidth - radius, y + rectHeight);
      ctx.lineTo(x + radius, y + rectHeight);
      ctx.quadraticCurveTo(x, y + rectHeight, x, y + rectHeight - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
    }

    function activateNode(node) {
      if (node.filter) {
        const filterButton = document.querySelector(`${SELECTORS.filterButton}[data-filter="${node.filter}"]`);
        filterButton?.click();
      }

      document.getElementById(node.target)?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
    }

    function getRestLength() {
      return clamp(Math.min(width, height) * 0.29, 138, 230);
    }

    function applySpring(from, to, restLength) {
      const dx = to.px - from.px;
      const dy = to.py - from.py;
      const distance = Math.max(1, Math.hypot(dx, dy));
      const force = (distance - restLength) * physics.spring;
      const fx = (dx / distance) * force;
      const fy = (dy / distance) * force;

      if (drag.node !== from) {
        from.vx += fx;
        from.vy += fy;
      }

      if (drag.node !== to) {
        to.vx -= fx;
        to.vy -= fy;
      }
    }

    function applyRepulsion(a, b) {
      const dx = b.px - a.px;
      const dy = b.py - a.py;
      const distance = Math.max(36, Math.hypot(dx, dy));
      const force = physics.repulsion / (distance * distance);
      const fx = (dx / distance) * force;
      const fy = (dy / distance) * force;

      if (drag.node !== a) {
        a.vx -= fx;
        a.vy -= fy;
      }

      if (drag.node !== b) {
        b.vx += fx;
        b.vy += fy;
      }
    }

    function stepPhysics() {
      const restLength = getRestLength();
      const centerX = width * 0.56;
      const centerY = height * 0.52;

      nodes.forEach((node) => {
        node.vx ??= 0;
        node.vy ??= 0;
      });

      links.forEach(([fromId, toId]) => {
        applySpring(getNode(fromId), getNode(toId), restLength);
      });

      for (let index = 0; index < nodes.length; index += 1) {
        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          applyRepulsion(nodes[index], nodes[nextIndex]);
        }
      }

      nodes.forEach((node, index) => {
        if (drag.node === node) {
          node.vx *= 0.68;
          node.vy *= 0.68;
          return;
        }

        const homeX = node.x * width;
        const homeY = node.y * height;
        const targetX = homeX * 0.68 + centerX * 0.32;
        const targetY = homeY * 0.68 + centerY * 0.32;
        const floatX = Math.cos(frame * 1.35 + index * 1.9) * physics.floatForce;
        const floatY = Math.sin(frame * 1.1 + index * 1.4) * physics.floatForce;

        node.vx += (targetX - node.px) * physics.centerPull + floatX;
        node.vy += (targetY - node.py) * physics.centerPull + floatY;
        node.vx *= physics.damping;
        node.vy *= physics.damping;

        const speed = Math.hypot(node.vx, node.vy);
        if (speed > physics.maxSpeed) {
          node.vx = (node.vx / speed) * physics.maxSpeed;
          node.vy = (node.vy / speed) * physics.maxSpeed;
        }

        node.px = clamp(node.px + node.vx, 42, width - 42);
        node.py = clamp(node.py + node.vy, 52, height - 52);
        node.x = node.px / width;
        node.y = node.py / height;
      });
    }

    function drawLabel(text, x, y, isActive) {
      ctx.font = "600 12px Segoe UI, sans-serif";
      const textWidth = ctx.measureText(text).width;
      ctx.fillStyle = isActive ? "rgba(255, 250, 240, 0.92)" : "rgba(244, 240, 229, 0.78)";
      ctx.strokeStyle = isActive ? "rgba(35, 43, 59, 0.34)" : "rgba(35, 43, 59, 0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      drawRoundedRect(x + 12, y - 12, textWidth + 18, 24, 6);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(35, 43, 59, 0.72)";
      ctx.fillText(text, x + 21, y + 4);
    }

    function draw() {
      frame += reduceMotion ? 0 : 0.018;
      ctx.clearRect(0, 0, width, height);

      const scrollRatio = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));

      ctx.fillStyle = "rgba(244, 240, 229, 0.84)";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(38, 50, 77, 0.08)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 44) {
        ctx.beginPath();
        ctx.moveTo(x + scrollRatio * 18, 0);
        ctx.lineTo(x - 70 + scrollRatio * 18, height);
        ctx.stroke();
      }

      if (!reduceMotion) {
        stepPhysics();
      }

      nodes.forEach((node) => {
        const isHeld = drag.node === node;
        node.radius = isHeld || hoverNode === node ? 22 : 17;
      });

      const restLength = getRestLength();
      links.forEach(([fromId, toId]) => {
        const from = getNode(fromId);
        const to = getNode(toId);
        const highlighted = hoverNode && (hoverNode === from || hoverNode === to);
        const dx = to.px - from.px;
        const dy = to.py - from.py;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const tension = clamp(Math.abs(distance - restLength) / restLength, 0, 1);
        const middleX = (from.px + to.px) / 2;
        const middleY = (from.py + to.py) / 2;
        const wave = Math.sin(frame * 2.2 + distance * 0.015) * (highlighted ? 8 : 4);
        const controlX = middleX + (-dy / distance) * wave;
        const controlY = middleY + (dx / distance) * wave;

        ctx.beginPath();
        ctx.moveTo(from.px, from.py);
        ctx.quadraticCurveTo(controlX, controlY, to.px, to.py);
        ctx.strokeStyle = highlighted
          ? `rgba(38, 50, 77, ${0.42 + tension * 0.18})`
          : `rgba(38, 50, 77, ${0.18 + tension * 0.2})`;
        ctx.lineWidth = highlighted ? 2.4 + tension : 1.25 + tension * 0.8;
        ctx.stroke();
      });

      nodes.forEach((point) => {
        const isActive = hoverNode === point || drag.node === point;
        ctx.beginPath();
        ctx.arc(point.px, point.py, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(244, 240, 229, 0.92)";
        ctx.fill();
        ctx.lineWidth = isActive ? 3 : 2;
        ctx.strokeStyle = point.color;
        ctx.stroke();

        if (isActive) {
          ctx.beginPath();
          ctx.arc(point.px, point.py, point.radius + 7, 0, Math.PI * 2);
          ctx.strokeStyle = `${point.color}44`;
          ctx.lineWidth = 8;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(point.px, point.py, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();

        drawLabel(point.label, point.px, point.py, isActive);
      });

      if (!reduceMotion) {
        requestAnimationFrame(draw);
      }
    }

    resize();
    draw();

    window.addEventListener("resize", () => {
      resize();

      if (compactGraph.matches) {
        drag.node = null;
        hoverNode = null;
        hero.classList.remove("is-graph-hover", "is-graph-dragging");
        canvas.classList.remove("is-dragging");
      }
    });
    hero.addEventListener(
      "pointermove",
      (event) => {
        if (compactGraph.matches) {
          return;
        }

        const point = getCanvasPoint(event);
        pointer.x = point.ratioX;
        pointer.y = point.ratioY;

        if (drag.node) {
          setNodePosition(drag.node, point.x - drag.offsetX, point.y - drag.offsetY);
          drag.moved ||= Math.hypot(point.x - drag.startX, point.y - drag.startY) > 5;
          event.preventDefault();
          return;
        }

        hoverNode = hitTest(point.x, point.y) || null;
        hero.classList.toggle("is-graph-hover", Boolean(hoverNode));

        if (reduceMotion) {
          draw();
        }
      },
      { passive: false }
    );

    hero.addEventListener("pointerdown", (event) => {
      if (compactGraph.matches) {
        return;
      }

      if (event.button !== 0 || event.target.closest("a, button")) {
        return;
      }

      const point = getCanvasPoint(event);
      const node = hitTest(point.x, point.y);

      if (!node) {
        return;
      }

      drag.node = node;
      drag.offsetX = point.x - node.px;
      drag.offsetY = point.y - node.py;
      drag.startX = point.x;
      drag.startY = point.y;
      drag.moved = false;
      node.userPlaced = true;
      setNodePosition(node, node.px, node.py);
      hero.classList.add("is-graph-dragging");
      canvas.classList.add("is-dragging");
      hero.setPointerCapture?.(event.pointerId);
      event.preventDefault();
    });

    hero.addEventListener("pointerup", (event) => {
      if (!drag.node) {
        return;
      }

      const node = drag.node;
      drag.node = null;
      hero.classList.remove("is-graph-dragging");
      canvas.classList.remove("is-dragging");
      hero.releasePointerCapture?.(event.pointerId);

      if (!drag.moved) {
        activateNode(node);
      }

      if (reduceMotion) {
        draw();
      }
    });

    hero.addEventListener("pointerleave", () => {
      if (!drag.node) {
        hoverNode = null;
        hero.classList.remove("is-graph-hover");
      }
    });

    hero.addEventListener("pointercancel", () => {
      drag.node = null;
      hoverNode = null;
      hero.classList.remove("is-graph-hover", "is-graph-dragging");
      canvas.classList.remove("is-dragging");
    });
  }

  portfolio.graph = Object.freeze({
    setupCanvasMap
  });
})();
