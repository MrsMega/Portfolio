const experiences = [
  {
    category: "SAE",
    period: "S3-S4 2025-2026",
    title: "Caisse-Cro&ucirc;te",
    subtitle: "Jeu web de cuisine, loot boxes et marketplace",
    logo: "asset/caissecroutelogo.png",
    logoAlt: "Logo Caisse-Cro&ucirc;te",
    url: "https://caisse-croute.alwaysdata.net/sae-s3/public/pages/dashboard.php",
    urlLabel: "Ouvrir Caisse-Cro&ucirc;te",
    previewImage: "asset/screen-caisse-croute.png",
    previewAlt: "Capture d'ecran du tableau de bord Caisse-Cro&ucirc;te",
    summary:
      "Projet men&eacute; en &eacute;quipe de quatre dans le cadre de la SAE D&eacute;veloppement d'une application. L'objectif &eacute;tait de concevoir puis d&eacute;velopper un jeu par navigateur original, accessible en ligne, avec compte joueur, inventaire, recettes, loot boxes et marketplace.",
    role:
      "Participation &agrave; la conception fonctionnelle, &agrave; la structuration du projet, aux choix de fonctionnalit&eacute;s, aux maquettes, au d&eacute;coupage agile et &agrave; la pr&eacute;paration du d&eacute;veloppement web.",
    actions: [
      "Formalisation du besoin avec une m&eacute;thode SMART et une priorisation MoSCoW.",
      "Construction d'un dossier de conception : cas d'utilisation, s&eacute;quence d'ouverture de loot box, classes m&eacute;tier et WBS.",
      "D&eacute;finition des modules principaux : authentification, inventaire, recettes, marketplace, shop administrateur, tirage c&ocirc;t&eacute; serveur.",
      "Organisation en sprints avec suivi de projet, maquettes Figma et collaboration via la forge GitLab de l'IUT."
    ],
    learning:
      "Cette SAE m'a surtout fait progresser sur le passage entre une id&eacute;e de jeu et une application structur&eacute;e. Je n'ai pas seulement list&eacute; des fonctionnalit&eacute;s : j'ai appris &agrave; les relier &agrave; des utilisateurs, des donn&eacute;es, des r&egrave;gles m&eacute;tier et un planning r&eacute;aliste.",
    contribution:
      "Elle montre ma capacit&eacute; &agrave; travailler dans un cadre collectif, &agrave; produire une conception exploitable et &agrave; anticiper les contraintes d'une application web avec base de donn&eacute;es, serveur et interactions entre joueurs.",
    skills: ["R&eacute;aliser", "G&eacute;rer", "Conduire", "Collaborer", "Administrer"],
    proofs: [
      "Dossier de conception SAE S3-S4",
      "Diagramme de cas d'utilisation",
      "Diagramme de s&eacute;quence sur l'ouverture d'une loot box",
      "Diagramme de classes : utilisateur, inventaire, recette, transaction, annonce",
      "WBS, EPIC, user stories, Gantt",
      "Maquettes Figma : connexion, accueil, marketplace, inventaire"
    ]
  },
  {
    category: "Projet",
    period: "Projet personnel",
    title: "Sleep Space Game",
    subtitle: "Sp&eacute;cification d'une application Android de routine du soir",
    logo: "asset/logo_ssg.jpg",
    logoAlt: "Logo Sleep Space Game",
    screenImage: "asset/screen-ssg.png",
    screenAlt: "Capture d'ecran de Sleep Space Game",
    screenCaption: "Aper&ccedil;u visuel du projet Sleep Space Game.",
    screenLayout: "phone",
    summary:
      "Concept de jeu mobile Android en Kotlin, avec TypeScript, Firebase et Cloud Functions, qui transforme la r&eacute;duction de l'usage du t&eacute;l&eacute;phone au coucher en progression spatiale. Le joueur suit un vaisseau, choisit une destination et avance davantage quand sa session du soir est respect&eacute;e.",
    role:
      "Conception produit et fonctionnelle : vision, boucle de jeu, progression, r&egrave;gles m&eacute;tier, parcours utilisateur, mod&egrave;le logique et contraintes techniques.",
    actions: [
      "D&eacute;finition d'une boucle quotidienne simple : lancer une session du soir, poser le t&eacute;l&eacute;phone, constater le gain le lendemain.",
      "Conception d'un syst&egrave;me de trajet spatial autopilot&eacute; avec phases de d&eacute;part, croisi&egrave;re et arriv&eacute;e.",
      "Formalisation des r&egrave;gles de validation : gains progressifs, tol&eacute;rance, protection contre une logique trop punitive.",
      "Identification des contraintes techniques : temps fiable c&ocirc;t&eacute; serveur, sobri&eacute;t&eacute; batterie, donn&eacute;es m&eacute;tier, backend centralis&eacute;."
    ],
    learning:
      "Ce projet m'a permis de travailler la conception avant le code : clarifier une intention, &eacute;viter les fonctionnalit&eacute;s inutiles, penser les r&egrave;gles m&eacute;tier et anticiper les limites techniques d'une application mobile.",
    contribution:
      "Il apporte au portfolio une dimension produit plus personnelle : je montre ma capacit&eacute; &agrave; concevoir une exp&eacute;rience coh&eacute;rente, &agrave; justifier les arbitrages et &agrave; penser l'impact utilisateur sans pr&eacute;tendre produire un outil m&eacute;dical.",
    skills: ["R&eacute;aliser", "Optimiser", "G&eacute;rer", "Conduire"],
    proofs: [
      "Sp&eacute;cification produit et fonctionnelle",
      "P&eacute;rim&egrave;tre inclus et hors p&eacute;rim&egrave;tre",
      "R&egrave;gles de progression et de session du soir",
      "Mod&egrave;le logique : utilisateur, routine, vaisseau, trajet, session, groupe",
      "Contraintes techniques Android, backend, Firebase et Cloud Functions"
    ]
  },
  {
    category: "Stage",
    period: "En cours",
    title: "Flotto",
    subtitle: "D&eacute;couverte d'Angular sur une application de gestion de flottes",
    logo: "asset/flotto-logo.png",
    logoAlt: "Logo Flotto",
    summary:
      "D&eacute;but de stage sur Flotto, une application web permettant de g&eacute;rer des parcs et flottes de voitures. La premi&egrave;re phase consiste &agrave; d&eacute;couvrir Angular, technologie non encore abord&eacute;e &agrave; l'IUT, puis &agrave; prendre progressivement en charge des tickets simples.",
    role:
      "Int&eacute;gration progressive dans un projet existant : apprentissage du framework, lecture de la base de code, compr&eacute;hension du domaine m&eacute;tier et premiers correctifs ou petites &eacute;volutions.",
    actions: [
      "Comprendre l'architecture Angular du projet et la logique des composants.",
      "Identifier les conventions de l'application avant de modifier du code.",
      "R&eacute;soudre des tickets simples pour prendre confiance dans le contexte technique.",
      "Documenter au fil du stage les missions significatives, les apprentissages et les preuves anonymisables."
    ],
    learning:
      "Cette exp&eacute;rience est encore en construction. Son int&eacute;r&ecirc;t principal est de m'obliger &agrave; apprendre dans une base de code r&eacute;elle, avec une technologie nouvelle et des contraintes professionnelles.",
    contribution:
      "Elle servira &agrave; montrer ma capacit&eacute; d'adaptation : passer d'exercices ou de SAE &agrave; un projet existant, comprendre les tickets, demander les bons retours et livrer des changements simples mais utiles.",
    skills: ["R&eacute;aliser", "Collaborer", "Conduire"],
    proofs: [
      "Notes de prise en main Angular",
      "Tickets trait&eacute;s ou suivis",
      "Captures ou extraits anonymis&eacute;s si autoris&eacute;s",
      "Documentation personnelle des conventions du projet",
      "Bilan hebdomadaire des apprentissages"
    ]
  }
];

const competences = [
  {
    id: "realiser",
    title: "R&eacute;aliser",
    level: "Niveau 2 en consolidation",
    short: "Concevoir, d&eacute;velopper, tester et int&eacute;grer une solution.",
    ac: ["AC21.01", "AC21.02", "AC21.03", "AC21.04"],
    evidence:
      "Caisse-Cro&ucirc;te mobilise les sp&eacute;cifications, les interfaces, les choix de conception et la qualit&eacute; attendue d'une application compl&egrave;te. Flotto ajoute le travail sur une base de code existante avec Angular.",
    traces: ["Dossier SAE", "Maquettes", "Tickets Flotto", "Code et tests &agrave; ajouter au fil du stage"]
  },
  {
    id: "optimiser",
    title: "Optimiser",
    level: "Comp&eacute;tence en &eacute;mergence",
    short: "Choisir des structures, analyser des contraintes et justifier des r&eacute;sultats.",
    ac: ["AC22.01", "AC22.03", "AC22.04"],
    evidence:
      "Sleep Space Game demande d'anticiper des contraintes de temps fiable, de batterie, de progression et de comportement utilisateur. La comp&eacute;tence reste &agrave; renforcer avec des mesures et tests plus concrets.",
    traces: ["R&egrave;gles de progression", "Contraintes Android", "Sc&eacute;narios optimiste / r&eacute;f&eacute;rence / pessimiste"]
  },
  {
    id: "administrer",
    title: "Administrer",
    level: "Niveau 2 &agrave; consolider",
    short: "D&eacute;ployer, s&eacute;curiser et maintenir des services.",
    ac: ["AC23.01", "AC23.02", "AC23.03"],
    evidence:
      "La SAE impose un serveur, une base de donn&eacute;es et un projet accessible en ligne. Le projet Sleep Space Game ajoute la question d'un backend centralis&eacute; et d'une r&eacute;f&eacute;rence serveur pour limiter les incoh&eacute;rences.",
    traces: ["Architecture SAE", "Choix serveur", "R&egrave;gles c&ocirc;t&eacute; serveur", "S&eacute;curisation &agrave; documenter"]
  },
  {
    id: "gerer",
    title: "G&eacute;rer",
    level: "Niveau 2 en construction",
    short: "Concevoir, exploiter et prot&eacute;ger les donn&eacute;es.",
    ac: ["AC24.01", "AC24.02", "AC24.03", "AC24.04"],
    evidence:
      "Caisse-Cro&ucirc;te repose sur des donn&eacute;es de compte, inventaire, ingr&eacute;dients, recettes, annonces et transactions. Sleep Space Game formalise aussi des entit&eacute;s m&eacute;tier : routine, trajet, session, groupe et historique.",
    traces: ["Diagramme de classes", "Mod&egrave;le logique Sleep Space Game", "Marketplace", "Inventaire"]
  },
  {
    id: "conduire",
    title: "Conduire",
    level: "Niveau 2 solide",
    short: "Organiser un projet, formaliser le besoin et suivre l'avancement.",
    ac: ["AC25.02", "AC25.03", "AC25.04"],
    evidence:
      "La SAE montre une d&eacute;marche projet compl&egrave;te : objectif SMART, MoSCoW, EPIC, user stories, WBS, Gantt et maquettes. Le projet personnel montre aussi une capacit&eacute; &agrave; arbitrer un p&eacute;rim&egrave;tre.",
    traces: ["Objectifs SMART", "MoSCoW", "EPIC et user stories", "Gantt", "P&eacute;rim&egrave;tre produit"]
  },
  {
    id: "collaborer",
    title: "Collaborer",
    level: "Niveau 2 en situation",
    short: "Travailler efficacement dans une &eacute;quipe informatique.",
    ac: ["AC26.01", "AC26.02", "AC26.03", "AC26.04"],
    evidence:
      "La SAE a &eacute;t&eacute; men&eacute;e en &eacute;quipe de quatre avec outils partag&eacute;s, r&eacute;partition des sujets et communication r&eacute;guli&egrave;re. Le stage va enrichir cette comp&eacute;tence dans une organisation professionnelle.",
    traces: ["GitLab de l'IUT", "Google Docs", "Fiche de suivi", "Retours de stage &agrave; ajouter"]
  }
];

const progressionSteps = [
  {
    marker: "01",
    title: "Structurer une application en &eacute;quipe",
    text:
      "Avec Caisse-Cro&ucirc;te, j'ai travaill&eacute; sur un projet suffisamment large pour demander une vraie organisation : fonctionnalit&eacute;s, donn&eacute;es, maquettes, planning, r&ocirc;les et contraintes techniques."
  },
  {
    marker: "02",
    title: "Concevoir une exp&eacute;rience produit coh&eacute;rente",
    text:
      "Avec Sleep Space Game, je suis parti d'une id&eacute;e personnelle pour produire une sp&eacute;cification compl&egrave;te : objectifs, boucle utilisateur, r&egrave;gles m&eacute;tier, mod&egrave;le logique et limites assum&eacute;es."
  },
  {
    marker: "03",
    title: "Entrer dans une base de code professionnelle",
    text:
      "Avec Flotto, je commence &agrave; apprendre Angular dans un contexte r&eacute;el. Le but est de transformer la d&eacute;couverte d'une technologie en contributions simples, tra&ccedil;ables et utiles."
  }
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function createTags(items) {
  return items.map((item) => `<span class="tag">${item}</span>`).join("");
}

function createList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function createExperienceLink(experience) {
  if (!experience.url) {
    return "";
  }

  return `
    <div class="experience-link-block">
      <a
        class="project-link"
        href="${experience.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${experience.urlLabel}
        <span aria-hidden="true">&#8599;</span>
      </a>
      <div class="site-preview" aria-hidden="true">
        <div class="site-preview-bar">
          <span></span>
          <strong>caisse-croute.alwaysdata.net</strong>
        </div>
        <div class="site-preview-frame">
          <img src="${experience.previewImage}" alt="${experience.previewAlt}" loading="lazy">
        </div>
      </div>
    </div>
  `;
}

function createExperienceScreen(experience) {
  if (!experience.screenImage) {
    return "";
  }

  return `
    <figure class="experience-screen${experience.screenLayout === "phone" ? " experience-screen-phone" : ""}">
      <div class="experience-screen-window">
        <div class="site-preview-bar">
          <span></span>
          <strong>${experience.title}</strong>
        </div>
        <img src="${experience.screenImage}" alt="${experience.screenAlt}" loading="lazy">
      </div>
      <figcaption>${experience.screenCaption}</figcaption>
    </figure>
  `;
}

function createExperienceCard(experience) {
  return `
    <article class="experience-card reveal" data-category="${experience.category}">
      <div class="experience-side">
        <div class="experience-logo-wrap">
          <img class="experience-logo" src="${experience.logo}" alt="${experience.logoAlt}" loading="lazy">
        </div>
        <p class="card-label">${experience.category}</p>
        <span>${experience.period}</span>
      </div>
      <div class="experience-main">
        <div class="experience-heading">
          <p class="card-label">${experience.subtitle}</p>
          <h3>${experience.title}</h3>
        </div>
        <p class="experience-summary">${experience.summary}</p>
        <p class="experience-role"><strong>Mon r&ocirc;le :</strong> ${experience.role}</p>
        ${createExperienceLink(experience)}
        ${createExperienceScreen(experience)}

        <div class="analysis-grid">
          <section>
            <h4>Ce que j'ai r&eacute;alis&eacute;</h4>
            <ul>${createList(experience.actions)}</ul>
          </section>
          <section>
            <h4>Ce que cela m'apporte</h4>
            <p>${experience.learning}</p>
            <p>${experience.contribution}</p>
          </section>
        </div>

        <div class="evidence-row">
          <div>
            <p class="card-label">Comp&eacute;tences travaill&eacute;es</p>
            <div class="tag-row">${createTags(experience.skills)}</div>
          </div>
          <details>
            <summary>Preuves et traces</summary>
            <ul>${createList(experience.proofs)}</ul>
          </details>
        </div>
      </div>
    </article>
  `;
}

function createCompetenceButton(competence, index) {
  return `
    <button
      class="competence-tab${index === 0 ? " is-active" : ""}"
      type="button"
      data-competence="${competence.id}"
    >
      <span>${competence.title}</span>
      <small>${competence.level}</small>
    </button>
  `;
}

function renderCompetencePanel(competence) {
  const panel = document.querySelector("#competence-panel");
  panel.innerHTML = `
    <article class="competence-card">
      <p class="card-label">${competence.level}</p>
      <h3>${competence.title}</h3>
      <p class="competence-short">${competence.short}</p>
      <div class="code-row" aria-label="Apprentissages critiques">
        ${competence.ac.map((code) => `<span>${code}</span>`).join("")}
      </div>
      <p>${competence.evidence}</p>
      <div>
        <p class="card-label">Preuves associ&eacute;es</p>
        <div class="tag-row">${createTags(competence.traces)}</div>
      </div>
    </article>
  `;
}

function injectContent() {
  document.querySelector("#experiences-list").innerHTML = experiences.map(createExperienceCard).join("");
  document.querySelector("#competence-tabs").innerHTML = competences.map(createCompetenceButton).join("");
  document.querySelector("#progression-list").innerHTML = progressionSteps
    .map(
      (step) => `
        <article class="progression-item reveal">
          <span>${step.marker}</span>
          <div>
            <h3>${step.title}</h3>
            <p>${step.text}</p>
          </div>
        </article>
      `
    )
    .join("");

  renderCompetencePanel(competences[0]);
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entriesList) => {
      entriesList.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll(".experience-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      cards.forEach((card) => {
        const visible = filter === "all" || card.dataset.category === filter;
        card.hidden = !visible;
      });
    });
  });
}

function setupCompetenceTabs() {
  const buttons = document.querySelectorAll(".competence-tab");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const competence = competences.find((item) => item.id === button.dataset.competence);
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      renderCompetencePanel(competence);
    });
  });
}

function setupScrollMeter() {
  const meter = document.querySelector(".scroll-meter span");

  function update() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    meter.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupActiveNav() {
  const sections = ["parcours", "experiences", "competences", "bilan"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const links = [...document.querySelectorAll(".site-nav a")];

  function update() {
    const current = sections
      .filter((section) => section.getBoundingClientRect().top < window.innerHeight * 0.42)
      .pop();

    links.forEach((link) => {
      link.classList.toggle("is-active", current && link.getAttribute("href") === `#${current.id}`);
    });
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupCanvasMap() {
  const canvas = document.querySelector("#map-canvas");
  const hero = canvas.closest(".hero");
  const ctx = canvas.getContext("2d");
  const compactGraph = window.matchMedia("(max-width: 760px)");
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
      const filterButton = document.querySelector(`.filter-button[data-filter="${node.filter}"]`);
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

function setupScrollCompanion() {
  const companion = document.querySelector(".scroll-companion");
  const character = document.querySelector(".companion-character");

  if (!companion || !character) {
    return;
  }

  const pointer = {
    x: window.innerWidth * 0.46,
    y: window.innerHeight * 0.42
  };
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;
  let ticking = false;

  function clampValue(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function updateCompanion() {
    ticking = false;

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    const minY = clampValue(window.innerHeight * 0.16, 94, 150);
    const maxY = Math.max(minY + 80, window.innerHeight - 174);
    const nextY = minY + (maxY - minY) * ratio;
    const delta = window.scrollY - lastScrollY;

    scrollVelocity = scrollVelocity * 0.72 + delta * 0.28;
    lastScrollY = window.scrollY;

    const bounds = character.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = nextY + bounds.height / 2;
    const lookX = clampValue((pointer.x - centerX) / 24, -4.5, 4.5);
    const lookY = clampValue((pointer.y - centerY) / 34, -3.5, 3.5);
    const turn = clampValue((pointer.x - centerX) / 31, -15, 11);
    const tilt = clampValue(scrollVelocity * 0.04, -9, 9);

    companion.style.setProperty("--companion-y", `${nextY.toFixed(1)}px`);
    companion.style.setProperty("--look-x", `${lookX.toFixed(2)}px`);
    companion.style.setProperty("--look-y", `${lookY.toFixed(2)}px`);
    companion.style.setProperty("--turn", `${turn.toFixed(2)}deg`);
    companion.style.setProperty("--tilt", `${tilt.toFixed(2)}deg`);
  }

  function requestUpdate() {
    if (ticking) {
      return;
    }

    ticking = true;
    requestAnimationFrame(updateCompanion);
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      requestUpdate();
    },
    { passive: true }
  );
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  requestUpdate();
}

injectContent();
setupReveal();
setupFilters();
setupCompetenceTabs();
setupScrollMeter();
setupActiveNav();
setupCanvasMap();
setupScrollCompanion();
