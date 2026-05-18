(() => {
  "use strict";

  const portfolio = window.Portfolio;
  const { injectContent } = portfolio.render;
  const {
    setupActiveNav,
    setupContactForm,
    setupCompetenceTabs,
    setupExpandableScreens,
    setupFilters,
    setupHeroTerminal,
    setupProfileLinks,
    setupReveal,
    setupScrollMeter
  } = portfolio.interactions;
  const { setupCanvasMap } = portfolio.graph;

  function initPortfolio() {
    injectContent();
    setupReveal();
    setupFilters();
    setupCompetenceTabs();
    setupExpandableScreens();
    setupScrollMeter();
    setupActiveNav();
    setupProfileLinks();
    setupContactForm();
    setupCanvasMap();
    setupHeroTerminal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortfolio, { once: true });
    return;
  }

  initPortfolio();
})();
