(() => {
  "use strict";

  const portfolio = window.Portfolio;
  const { CONTACT, PROFILE_LINKS, SECTION_IDS, SELECTORS, reduceMotion } = portfolio.config;
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

  function setupExpandableScreens() {
    const toggles = document.querySelectorAll(SELECTORS.screenToggle);
    const closeButtons = document.querySelectorAll(SELECTORS.screenClose);
    const headers = document.querySelectorAll(SELECTORS.screenHeader);

    function getNextScreenState(screen) {
      if (screen?.classList.contains("is-minimized")) {
        return "expanded";
      }

      return screen?.classList.contains("is-expanded") ? "normal" : "expanded";
    }

    function setScreenState(screen, state) {
      if (!screen) {
        return;
      }

      const isExpanded = state === "expanded";
      const isMinimized = state === "minimized";
      const screenTitle = screen.dataset.screenTitle || "";
      const labelAction = isExpanded ? "Reduire" : isMinimized ? "Restaurer" : "Agrandir";
      const hint = screen.querySelector(".screen-hint");
      const screenToggles = screen.querySelectorAll(SELECTORS.screenToggle);

      screen.classList.toggle("is-expanded", isExpanded);
      screen.classList.toggle("is-minimized", isMinimized);

      screenToggles.forEach((toggle) => {
        toggle.setAttribute("aria-expanded", String(isExpanded));
        toggle.setAttribute("aria-label", `${labelAction} la capture ${screenTitle}`.trim());

        if (toggle.classList.contains("screen-control")) {
          toggle.textContent = isExpanded ? "-" : "+";
        }
      });

      if (hint) {
        hint.textContent = isExpanded ? "Cliquer pour reduire" : "Cliquer pour agrandir";
      }
    }

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const screen = toggle.closest(SELECTORS.experienceScreen);

        setScreenState(screen, getNextScreenState(screen));
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setScreenState(button.closest(SELECTORS.experienceScreen), "minimized");
      });
    });

    headers.forEach((header) => {
      header.addEventListener("click", (event) => {
        if (event.target.closest("button")) {
          return;
        }

        const screen = header.closest(SELECTORS.experienceScreen);
        setScreenState(screen, getNextScreenState(screen));
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

  function setContactStatus(message, isError = false) {
    const status = document.querySelector(SELECTORS.contactStatus);

    if (!status) {
      return;
    }

    status.textContent = message;
    status.classList.toggle("is-error", isError);
  }

  function setupProfileLinks() {
    const links = document.querySelectorAll(SELECTORS.profileLink);

    links.forEach((link) => {
      const linkKey = link.dataset.profileLink;
      const url = PROFILE_LINKS[linkKey];

      if (!url) {
        link.setAttribute("aria-disabled", "true");
        link.addEventListener("click", (event) => {
          event.preventDefault();
          setContactStatus("Ce lien est pret cote interface, il reste a renseigner son URL dans scripts/config.js.", true);
        });
        return;
      }

      link.href = url;
      link.removeAttribute("aria-disabled");
    });
  }

  function setupContactForm() {
    const form = document.querySelector(SELECTORS.contactForm);

    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (!CONTACT.recipientEmail) {
        setContactStatus("Ajoute ton adresse mail dans scripts/config.js pour activer l'envoi.", true);
        return;
      }

      const formData = new FormData(form);
      const senderEmail = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const body = [`Mail de contact : ${senderEmail}`, "", message].join("\n");
      const mailtoUrl = `mailto:${CONTACT.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      setContactStatus("Votre client mail va s'ouvrir avec le message prepare.");
      window.location.href = mailtoUrl;
    });
  }

  portfolio.interactions = Object.freeze({
    setupActiveNav,
    setupContactForm,
    setupCompetenceTabs,
    setupExpandableScreens,
    setupFilters,
    setupHeroTerminal,
    setupProfileLinks,
    setupReveal,
    setupScrollMeter
  });
})();
