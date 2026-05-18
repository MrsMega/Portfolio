(() => {
  "use strict";

  const portfolio = window.Portfolio;
  const { injectContent } = portfolio.render;
  const {
    setupActiveNav,
    setupCompetenceTabs,
    setupFilters,
    setupHeroTerminal,
    setupReveal,
    setupScrollMeter
  } = portfolio.interactions;
  const { setupCanvasMap } = portfolio.graph;

  function initPortfolio() {
    injectContent();
    setupReveal();
    setupFilters();
    setupCompetenceTabs();
    setupScrollMeter();
    setupActiveNav();
    setupCanvasMap();
    setupHeroTerminal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortfolio, { once: true });
    return;
  }

  initPortfolio();
})();
