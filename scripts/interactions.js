(() => {
  "use strict";

  const portfolio = window.Portfolio;
  const { SECTION_IDS, SELECTORS, reduceMotion } = portfolio.config;
  const { competences } = portfolio.data;
  const { renderCompetencePanel } = portfolio.render;

  function setupReveal() {
    const elements = document.querySelectorAll(SELECTORS.reveal);

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
    const buttons = document.querySelectorAll(SELECTORS.filterButton);
    const cards = document.querySelectorAll(SELECTORS.experienceCard);

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
    const buttons = document.querySelectorAll(SELECTORS.competenceTab);

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const competence = competences.find((item) => item.id === button.dataset.competence);
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        renderCompetencePanel(competence);
      });
    });
  }

  function setupScrollMeter() {
    const meter = document.querySelector(SELECTORS.scrollMeter);

    function update() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      meter.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setupActiveNav() {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const links = [...document.querySelectorAll(SELECTORS.navLink)];
    let activeId = "";
    let ticking = false;

    function getActiveId() {
      const current = sections
        .filter((section) => section.getBoundingClientRect().top < window.innerHeight * 0.42)
        .pop();

      return current?.id || sections[0]?.id || "";
    }

    function applyActiveState(nextActiveId) {
      if (nextActiveId === activeId) {
        return;
      }

      activeId = nextActiveId;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
      });
    }

    function update() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        applyActiveState(getActiveId());
        ticking = false;
      });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setupHeroTerminal() {
    const terminal = document.querySelector(SELECTORS.heroTerminal);
    const output = document.querySelector(SELECTORS.terminalOutput);

    if (!terminal || !output) {
      return;
    }

    const text = terminal.dataset.terminalText || "";
    const cursor = terminal.querySelector(SELECTORS.terminalCursor);
    let index = 0;
    let started = false;

    function finish() {
      output.textContent = text;
      cursor?.classList.add("is-idle");
    }

    function typeNext() {
      output.textContent = text.slice(0, index);

      if (index >= text.length) {
        cursor?.classList.add("is-idle");
        return;
      }

      const current = text[index];
      index += 1;
      const delay = current === "." || current === ":" || current === "," ? 90 : 22;
      window.setTimeout(typeNext, delay);
    }

    function start() {
      if (started) {
        return;
      }

      started = true;

      if (reduceMotion) {
        finish();
        return;
      }

      typeNext();
    }

    if (!("IntersectionObserver" in window)) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      (entriesList) => {
        if (entriesList.some((entry) => entry.isIntersecting)) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(terminal);
  }

  portfolio.interactions = Object.freeze({
    setupActiveNav,
    setupCompetenceTabs,
    setupFilters,
    setupHeroTerminal,
    setupReveal,
    setupScrollMeter
  });
})();
