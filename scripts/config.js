(() => {
  "use strict";

  const portfolio = (window.Portfolio = window.Portfolio || {});

  const SELECTORS = Object.freeze({
    competencePanel: "#competence-panel",
    competenceTab: ".competence-tab",
    competenceTabs: "#competence-tabs",
    contactForm: "[data-contact-form]",
    contactStatus: "[data-contact-status]",
    experienceCard: ".experience-card",
    experienceScreen: ".experience-screen",
    experiencesList: "#experiences-list",
    filterButton: ".filter-button",
    hero: ".hero",
    heroTerminal: ".hero-terminal",
    mapCanvas: "#map-canvas",
    navLink: ".site-nav a",
    progressionList: "#progression-list",
    profileLink: "[data-profile-link]",
    reveal: ".reveal",
    screenClose: "[data-screen-close]",
    screenCarousel: "[data-screen-carousel]",
    screenCarouselNext: "[data-screen-carousel-next]",
    screenCarouselPrev: "[data-screen-carousel-prev]",
    screenCarouselSelect: "[data-screen-carousel-select]",
    screenCarouselSlide: "[data-screen-carousel-slide]",
    screenHeader: "[data-screen-header]",
    screenToggle: "[data-screen-toggle]",
    scrollMeter: ".scroll-meter span",
    terminalCursor: ".terminal-cursor",
    terminalOutput: "[data-terminal-output]"
  });

  const BREAKPOINTS = Object.freeze({
    compactGraph: "(max-width: 760px)"
  });

  const CONTACT = Object.freeze({
    recipientEmail: "nathanael.bayard05@gmail.com",
    formspreeEndpoint: "https://formspree.io/f/mdajkbyr"
  });

  const PROFILE_LINKS = Object.freeze({
    cv: "cv.html",
    linkedin: "https://www.linkedin.com/in/nathanael-bayard-9137b3331"
  });

  const SECTION_IDS = Object.freeze(["profil", "experiences", "competences", "bilan", "contact"]);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  portfolio.config = Object.freeze({
    BREAKPOINTS,
    CONTACT,
    PROFILE_LINKS,
    SECTION_IDS,
    SELECTORS,
    reduceMotion
  });
})();
