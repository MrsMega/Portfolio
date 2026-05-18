(() => {
  "use strict";

  const portfolio = (window.Portfolio = window.Portfolio || {});

  const SELECTORS = Object.freeze({
    competencePanel: "#competence-panel",
    competenceTab: ".competence-tab",
    competenceTabs: "#competence-tabs",
    experienceCard: ".experience-card",
    experiencesList: "#experiences-list",
    filterButton: ".filter-button",
    hero: ".hero",
    heroTerminal: ".hero-terminal",
    mapCanvas: "#map-canvas",
    navLink: ".site-nav a",
    progressionList: "#progression-list",
    reveal: ".reveal",
    scrollMeter: ".scroll-meter span",
    terminalCursor: ".terminal-cursor",
    terminalOutput: "[data-terminal-output]"
  });

  const BREAKPOINTS = Object.freeze({
    compactGraph: "(max-width: 760px)"
  });

  const SECTION_IDS = Object.freeze(["parcours", "experiences", "competences", "bilan"]);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  portfolio.config = Object.freeze({
    BREAKPOINTS,
    SECTION_IDS,
    SELECTORS,
    reduceMotion
  });
})();
