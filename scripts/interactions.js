(() => {
  "use strict";

  const portfolio = window.Portfolio;
  const { CONTACT, PAYMENT_LINKS, PROFILE_LINKS, SECTION_IDS, SELECTORS, reduceMotion } = portfolio.config;
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
    const screens = document.querySelectorAll("[data-expandable-screen]");
    const toggles = document.querySelectorAll(SELECTORS.screenToggle);
    const closeButtons = document.querySelectorAll(SELECTORS.screenClose);
    const headers = document.querySelectorAll(SELECTORS.screenHeader);

    function getNextScreenState(screen) {
      return screen?.classList.contains("is-minimized") ? "normal" : "minimized";
    }

    function setScreenState(screen, state) {
      if (!screen) {
        return;
      }

      const isMinimized = state === "minimized";
      const screenTitle = screen.dataset.screenTitle || "";
      const labelAction = isMinimized ? "Restaurer" : "Minimiser";
      const hint = screen.querySelector(".screen-hint");
      const screenToggles = screen.querySelectorAll(SELECTORS.screenToggle);

      screen.classList.remove("is-expanded");
      screen.classList.toggle("is-minimized", isMinimized);

      screenToggles.forEach((toggle) => {
        toggle.setAttribute("aria-expanded", String(!isMinimized));
        toggle.setAttribute("aria-label", `${labelAction} la capture ${screenTitle}`.trim());

        if (toggle.classList.contains("screen-control")) {
          toggle.textContent = isMinimized ? "+" : "-";
        }
      });

      if (hint) {
        hint.textContent = isMinimized ? "Cliquer pour restaurer" : "Cliquer pour minimiser";
      }
    }

    screens.forEach((screen) => {
      setScreenState(screen, screen.classList.contains("is-minimized") ? "minimized" : "normal");
    });

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

  const DELETE_MODE_COMMAND = /^(?:sudo\s+)?chmod\s+(?:-R\s+)?777\s+(?:\.\/)?portfolio_intro\.sh$/i;
  const WIPE_SITE_COMMAND = /^(?:sudo\s+)?rm\s+-rf(?:\s+(?:\.|\.\/|\*|\/|--no-preserve-root|portfolio|site|all))*$/i;
  const SCHREK_COMMAND = /^schrek$/i;
  const HELP_TEXT = `Commandes disponibles:
help
whoami
ls
cat bilan.md
open experiences
open profil
open competences
open parcours
open bilan
open contact
clear
theme hacker
theme normal
matrix
fortune
buymeacoffee
schrek
chmod 777 portfolio_intro.sh
sudo hire nathanael
sudo rm -rf *`;
  const LS_TEXT = `portfolio_intro.sh
experiences/
competences/
bilan.md
contact.sh
cv.html
asset/`;
  const BILAN_TEXT = `# bilan.md
Acquis: passer d'une idee a une structure exploitable.
Progression: renforcer la pratique dans un contexte professionnel.
Suite: actualiser le portfolio au fil des missions de stage.`;
  const FORTUNES = [
    "Un bug compris vaut mieux que trois bugs contournes.",
    "Le meilleur commit est petit, lisible, et pousse avant le cafe froid.",
    "Chaque projet devient plus clair quand on peut expliquer ce qu'il ne fait pas.",
    "Un portfolio vivant bat toujours une vitrine trop parfaite.",
    "Aujourd'hui: une petite amelioration, demain: une competence solide."
  ];
  const MATRIX_CHARS = "01<>/\\{}[]$#@&%";
  const SCHREK_ASCII = `⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉`;
  const DELETE_TARGET_SELECTOR = [
    ".site-header",
    ".brand-mark",
    ".site-nav",
    ".hero-copy",
    ".hero-terminal",
    ".hero-actions",
    ".section",
    ".section-heading",
    ".principle",
    ".filter-bar",
    ".experience-card",
    ".experience-logo-wrap",
    ".experience-company",
    ".experience-link-block",
    ".site-preview-frame",
    ".experience-screen",
    ".analysis-grid section",
    ".evidence-row",
    ".competence-index",
    ".competence-card",
    ".code-row",
    ".tag-row",
    ".progression-item",
    ".bilan-card",
    ".contact-form",
    ".contact-field",
    ".contact-actions",
    ".contact-shortcuts",
    ".site-footer"
  ].join(",");
  let deleteModeEnabled = false;
  let deleteModeObserver = null;

  function isDeleteTarget(element) {
    return (
      element instanceof HTMLElement &&
      element.matches(DELETE_TARGET_SELECTOR) &&
      !element.matches(".portfolio-delete-button, script, style, template")
    );
  }

  function getDeleteTargets(root = document) {
    const targets = [];

    if (isDeleteTarget(root)) {
      targets.push(root);
    }

    root.querySelectorAll?.(DELETE_TARGET_SELECTOR).forEach((element) => {
      if (isDeleteTarget(element)) {
        targets.push(element);
      }
    });

    return targets;
  }

  function decorateDeleteTarget(element) {
    if (element.dataset.deleteReady === "true") {
      return;
    }

    element.dataset.deleteReady = "true";
    element.classList.add("portfolio-delete-target");

    if (window.getComputedStyle(element).position === "static") {
      element.style.position = "relative";
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "portfolio-delete-button";
    button.textContent = "x";
    button.setAttribute("aria-label", "Supprimer ce module");

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      element.remove();
    });

    element.append(button);
  }

  function decorateDeleteTargets(root = document) {
    getDeleteTargets(root).forEach(decorateDeleteTarget);
  }

  function enableDeleteMode() {
    if (!document.body) {
      return false;
    }

    document.body.classList.add("is-delete-mode");
    decorateDeleteTargets();

    if (!deleteModeObserver && "MutationObserver" in window) {
      deleteModeObserver = new MutationObserver((mutations) => {
        if (!deleteModeEnabled) {
          return;
        }

        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => decorateDeleteTargets(node));
        });
      });
      deleteModeObserver.observe(document.body, { childList: true, subtree: true });
    }

    const wasEnabled = deleteModeEnabled;
    deleteModeEnabled = true;
    return !wasEnabled;
  }

  function wipeVisibleSite() {
    if (!document.body) {
      return 0;
    }

    const elements = [...document.body.children].filter(
      (element) => !element.matches("script, style, template")
    );

    elements.forEach((element) => element.remove());
    deleteModeObserver?.disconnect();
    deleteModeObserver = null;
    deleteModeEnabled = false;
    document.body.classList.remove("is-delete-mode");

    return elements.length;
  }

  function normalizeTerminalCommand(command) {
    return command
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function setupHeroTerminal() {
    const terminal = document.querySelector(SELECTORS.heroTerminal);
    const output = document.querySelector(SELECTORS.terminalOutput);

    if (!terminal || !output) {
      return;
    }

    const text = terminal.dataset.terminalText || "";
    const cursor = terminal.querySelector(SELECTORS.terminalCursor);
    const promptText = terminal.querySelector(".terminal-prompt")?.textContent || "nathanael@portfolio:~$";
    const inputPromptText = promptText.endsWith(" ") ? promptText : `${promptText} `;
    const inputLine = document.createElement("span");
    const inputPrompt = document.createElement("span");
    const input = document.createElement("span");
    let inputValue = "";
    let draftInputValue = "";
    let index = 0;
    let started = false;
    let introComplete = false;
    let typingTimer = 0;
    let matrixTimer = 0;
    let matrixRun = 0;
    let matrixOverlay = null;
    let matrixState = null;
    let commandHistoryIndex = 0;
    const commandHistory = [];
    let isInputReady = false;

    terminal.tabIndex = 0;
    terminal.setAttribute("role", "textbox");
    terminal.setAttribute("aria-label", "Terminal interactif du portfolio");
    terminal.setAttribute("aria-multiline", "true");

    function scrollTerminalToBottom() {
      const terminalBody = terminal.querySelector(".hero-intro");
      terminalBody?.scrollTo({ top: terminalBody.scrollHeight });
    }

    inputLine.className = "terminal-line terminal-input-line";
    inputLine.hidden = true;
    inputPrompt.className = "terminal-prompt";
    inputPrompt.textContent = inputPromptText;
    input.className = "terminal-input";
    input.setAttribute("data-terminal-input", "");
    inputLine.append(document.createElement("br"), inputPrompt, input);

    if (cursor) {
      cursor.before(inputLine);
    } else {
      output.after(inputLine);
    }

    function renderInput() {
      input.textContent = inputValue;
      scrollTerminalToBottom();
    }

    function rememberCommand(command) {
      if (!command) {
        commandHistoryIndex = commandHistory.length;
        return;
      }

      if (commandHistory.at(-1) !== command) {
        commandHistory.push(command);
      }

      commandHistoryIndex = commandHistory.length;
      draftInputValue = "";
    }

    function showInputLine() {
      isInputReady = true;
      inputLine.hidden = false;
      renderInput();
    }

    function addTerminalLine(value, suffix = "") {
      const line = document.createElement("span");
      const linePrompt = document.createElement("span");
      const lineInput = document.createElement("span");

      line.className = "terminal-line terminal-history-line";
      linePrompt.className = "terminal-prompt";
      linePrompt.textContent = inputPromptText;
      lineInput.className = "terminal-input";
      lineInput.textContent = value;
      line.append(document.createElement("br"), linePrompt, lineInput);

      if (suffix) {
        const marker = document.createElement("span");
        marker.className = "terminal-cancel";
        marker.textContent = suffix;
        line.append(marker);
      }

      inputLine.before(line);
      scrollTerminalToBottom();
    }

    function addTerminalOutput(value, className = "") {
      const line = document.createElement("span");

      line.className = `terminal-line terminal-output-line${className ? ` ${className}` : ""}`;
      line.append(document.createElement("br"), value);
      inputLine.before(line);
      scrollTerminalToBottom();
    }

    function stopMatrix() {
      window.clearInterval(matrixTimer);
      matrixTimer = 0;
      matrixRun += 1;
      matrixOverlay?.remove();
      matrixOverlay = null;
      matrixState = null;
      terminal.classList.remove("is-matrix-active");
    }

    function clearTerminal() {
      stopMatrix();
      terminal.querySelectorAll(".terminal-history-line, .terminal-output-line").forEach((line) => line.remove());
      terminal.querySelectorAll(".hero-intro > .terminal-cancel").forEach((marker) => marker.remove());
      inputValue = "";
      renderInput();
    }

    function getRandomMatrixChar() {
      return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
    }

    function createMatrixDrop(rows) {
      return {
        head: -Math.floor(Math.random() * rows * 1.7),
        speed: Math.random() > 0.72 ? 2 : 1,
        trail: 4 + Math.floor(Math.random() * Math.max(4, rows * 0.45))
      };
    }

    function createMatrixState(columns, rows) {
      return {
        columns,
        rows,
        drops: Array.from({ length: columns }, () => createMatrixDrop(rows))
      };
    }

    function renderMatrixFrame(target) {
      const terminalRect = terminal.getBoundingClientRect();
      const columns = Math.max(32, Math.floor(terminalRect.width / 10));
      const rows = Math.max(10, Math.floor(terminalRect.height / 15));
      const lines = Array.from({ length: rows }, () => Array.from({ length: columns }, () => " "));

      if (!matrixState || matrixState.columns !== columns || matrixState.rows !== rows) {
        matrixState = createMatrixState(columns, rows);
      }

      matrixState.drops.forEach((drop, columnIndex) => {
        for (let trailIndex = 0; trailIndex < drop.trail; trailIndex += 1) {
          const rowIndex = drop.head - trailIndex;

          if (rowIndex >= 0 && rowIndex < rows) {
            lines[rowIndex][columnIndex] = getRandomMatrixChar();
          }
        }

        drop.head += drop.speed;

        if (drop.head - drop.trail > rows + 2) {
          Object.assign(drop, createMatrixDrop(rows));
        }
      });

      target.textContent = lines.map((line) => line.join("")).join("\n");
    }

    function startMatrix() {
      stopMatrix();

      const currentRun = matrixRun;
      const overlay = document.createElement("div");
      const content = document.createElement("span");

      overlay.className = "terminal-matrix-overlay";
      overlay.setAttribute("aria-hidden", "true");
      content.className = "terminal-matrix-rain";
      overlay.append(content);
      terminal.append(overlay);
      matrixOverlay = overlay;
      terminal.classList.add("is-matrix-active");

      renderMatrixFrame(content);
      matrixTimer = window.setInterval(() => {
        renderMatrixFrame(content);
      }, 170);

      window.setTimeout(() => {
        if (currentRun !== matrixRun) {
          return;
        }

        stopMatrix();
      }, 6200);
    }

    function scrollToSection(id) {
      const target = document.getElementById(id);

      if (!target) {
        return false;
      }

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
      return true;
    }

    function openPortfolioSection(sectionName) {
      const normalizedSectionName = sectionName.replace(/\/+$/, "");
      const sections = {
        profil: "profil",
        profile: "profil",
        parcours: "parcours",
        experiences: "experiences",
        experience: "experiences",
        projets: "experiences",
        competences: "competences",
        competence: "competences",
        skills: "competences",
        bilan: "bilan",
        contact: "contact"
      };
      const sectionId = sections[normalizedSectionName];

      if (!sectionId || !scrollToSection(sectionId)) {
        addTerminalOutput(`open: section introuvable: ${normalizedSectionName}`, "is-error");
        return;
      }

    }

    function setTerminalTheme(theme) {
      if (!document.body) {
        return;
      }

      document.body.classList.toggle("is-theme-hacker", theme === "hacker");
    }

    function hireNathanael() {
      scrollToSection("contact");
    }

    function openPaypalTransfer() {
      let paypalUrl = String(PAYMENT_LINKS.paypal || "").trim();

      if (!paypalUrl) {
        addTerminalOutput("paypal: ajoute ton lien PayPal dans scripts/config.js pour activer la commande.", "is-error");
        return;
      }

      if (!/^https?:\/\//i.test(paypalUrl)) {
        paypalUrl = `https://${paypalUrl}`;
      }

      window.open(paypalUrl, "_blank", "noopener,noreferrer");
    }

    function stopIntro(showCancelMarker = false) {
      if (introComplete) {
        return;
      }

      window.clearTimeout(typingTimer);
      introComplete = true;
      cursor?.classList.add("is-idle");

      if (showCancelMarker) {
        const marker = document.createElement("span");
        marker.className = "terminal-cancel";
        marker.textContent = " ^C";
        output.after(marker);
      }
    }

    function finish() {
      window.clearTimeout(typingTimer);
      output.textContent = text;
      introComplete = true;
      cursor?.classList.add("is-idle");
    }

    function typeNext() {
      if (introComplete) {
        return;
      }

      output.textContent = text.slice(0, index);

      if (index >= text.length) {
        introComplete = true;
        cursor?.classList.add("is-idle");

        return;
      }

      const current = text[index];
      index += 1;
      const delay = current === "." || current === ":" || current === "," ? 90 : 22;
      typingTimer = window.setTimeout(typeNext, delay);
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

    function handleCancel() {
      if (!introComplete) {
        stopIntro(true);
        showInputLine();
        return;
      }

      showInputLine();
      addTerminalLine(inputValue, " ^C");
      inputValue = "";
      renderInput();
    }

    function runTerminalCommand(command) {
      const normalizedCommand = normalizeTerminalCommand(command);

      if (!normalizedCommand) {
        return;
      }

      if (normalizedCommand === "help") {
        addTerminalOutput(HELP_TEXT);
        return;
      }

      if (normalizedCommand === "whoami") {
        addTerminalOutput("nathanael - etudiant BUT Informatique, developpeur web/mobile en progression.");
        return;
      }

      if (/^ls(?:\s+-la?)?$/.test(normalizedCommand)) {
        addTerminalOutput(LS_TEXT);
        return;
      }

      if (normalizedCommand === "cat bilan.md") {
        addTerminalOutput(BILAN_TEXT);
        return;
      }

      if (normalizedCommand.startsWith("open ")) {
        openPortfolioSection(normalizedCommand.replace(/^open\s+/, ""));
        return;
      }

      if (normalizedCommand === "clear") {
        clearTerminal();
        return;
      }

      if (normalizedCommand === "theme hacker") {
        setTerminalTheme("hacker");
        return;
      }

      if (normalizedCommand === "theme normal") {
        setTerminalTheme("normal");
        return;
      }

      if (normalizedCommand === "matrix") {
        startMatrix();
        return;
      }

      if (normalizedCommand === "fortune") {
        addTerminalOutput(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]);
        return;
      }

      if (normalizedCommand === "buymeacoffee" || normalizedCommand === "buymeacoffee") {
        openPaypalTransfer();
        return;
      }

      if (normalizedCommand === "sudo hire nathanael") {
        hireNathanael();
        return;
      }

      if (SCHREK_COMMAND.test(normalizedCommand)) {
        addTerminalOutput(SCHREK_ASCII, "is-ascii-art");
        return;
      }

      if (DELETE_MODE_COMMAND.test(normalizedCommand)) {
        const isFirstUnlock = enableDeleteMode();
        addTerminalOutput(
          isFirstUnlock
            ? "chmod: droits 777 appliques, mode suppression active."
            : "chmod: droits deja appliques."
        );
        return;
      }

      if (WIPE_SITE_COMMAND.test(normalizedCommand)) {
        addTerminalOutput("rm: suppression recursive du portfolio...");
        window.setTimeout(wipeVisibleSite, 420);
        return;
      }

      if (/^(?:sudo\s+)?chmod\b/.test(normalizedCommand)) {
        addTerminalOutput("chmod: cible refusee ou introuvable.", "is-error");
        return;
      }

      if (/^(?:sudo\s+)?rm\b/.test(normalizedCommand)) {
        addTerminalOutput("rm: utilisez sudo rm -rf pour vider le portfolio.", "is-error");
        return;
      }

      addTerminalOutput(`${command}: commande pas encore implementee.`, "is-muted");
    }

    function handleInputKeydown(event) {
      const isCancelShortcut = event.key.toLowerCase() === "c" && (event.ctrlKey || event.metaKey);
      const isPrintableKey = event.key.length === 1 && !event.altKey && !event.ctrlKey && !event.metaKey;

      if (isCancelShortcut) {
        event.preventDefault();
        handleCancel();
        return;
      }

      if (!isInputReady) {
        if (isPrintableKey || event.key === "Backspace" || event.key === "Enter") {
          event.preventDefault();
        }

        return;
      }

      if (event.key === "Backspace") {
        event.preventDefault();
        inputValue = inputValue.slice(0, -1);
        commandHistoryIndex = commandHistory.length;
        draftInputValue = inputValue;
        renderInput();
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        if (!commandHistory.length) {
          return;
        }

        if (commandHistoryIndex === commandHistory.length) {
          draftInputValue = inputValue;
        }

        commandHistoryIndex = Math.max(0, commandHistoryIndex - 1);
        inputValue = commandHistory[commandHistoryIndex];
        renderInput();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        if (!commandHistory.length) {
          return;
        }

        commandHistoryIndex = Math.min(commandHistory.length, commandHistoryIndex + 1);
        inputValue = commandHistoryIndex === commandHistory.length ? draftInputValue : commandHistory[commandHistoryIndex];
        renderInput();
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        const command = inputValue.trim();
        addTerminalLine(inputValue);
        rememberCommand(command);
        inputValue = "";
        renderInput();
        runTerminalCommand(command);
        return;
      }

      if (isPrintableKey) {
        event.preventDefault();
        inputValue += event.key;
        commandHistoryIndex = commandHistory.length;
        draftInputValue = inputValue;
        renderInput();
      }
    }

    terminal.addEventListener("click", () => {
      terminal.focus({ preventScroll: true });
    });

    terminal.addEventListener("focus", () => {
      terminal.classList.add("is-focused");
    });

    terminal.addEventListener("blur", () => {
      terminal.classList.remove("is-focused");
    });

    terminal.addEventListener("keydown", handleInputKeydown);

    terminal.addEventListener("paste", (event) => {
      if (!isInputReady) {
        return;
      }

      const pastedText = event.clipboardData?.getData("text");

      if (!pastedText) {
        return;
      }

      event.preventDefault();
      showInputLine();
      inputValue += pastedText.replace(/\r?\n/g, " ");
      commandHistoryIndex = commandHistory.length;
      draftInputValue = inputValue;
      renderInput();
    });

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

  function getFormspreeEndpoint() {
    const endpoint = String(CONTACT.formspreeEndpoint || "")
      .trim()
      .replace(/\/+$/, "");

    if (!endpoint) {
      return "";
    }

    if (/^[a-z0-9]+$/i.test(endpoint)) {
      return `https://formspree.io/f/${endpoint}`;
    }

    return endpoint;
  }

  function getSubmitButton(form) {
    return form.querySelector('button[type="submit"]');
  }

  function setSubmitText(form, text) {
    const submitButton = getSubmitButton(form);

    if (!submitButton) {
      return;
    }

    submitButton.dataset.originalText = text;
    submitButton.textContent = text;
  }

  function setSubmitState(form, isSubmitting) {
    const submitButton = getSubmitButton(form);

    if (!submitButton) {
      return;
    }

    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? "Envoi..." : submitButton.dataset.originalText;
  }

  function getFormspreeErrorMessage(result) {
    const errors = Array.isArray(result?.errors) ? result.errors : [];
    const message = errors
      .map((error) => error.message || error.field)
      .filter(Boolean)
      .join(" ");

    return message || "L'envoi a echoue. Vous pouvez reessayer dans un instant.";
  }

  async function submitWithFormspree(form, endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(getFormspreeErrorMessage(result));
    }
  }

  function submitWithMailto(form) {
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

    const endpoint = getFormspreeEndpoint();

    if (endpoint) {
      form.action = endpoint;
      setSubmitText(form, "Envoyer le message");
    } else {
      setSubmitText(form, "Preparer le mail");
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const currentEndpoint = getFormspreeEndpoint();

      if (!currentEndpoint) {
        submitWithMailto(form);
        return;
      }

      setContactStatus("Envoi du message...");
      setSubmitState(form, true);

      try {
        await submitWithFormspree(form, currentEndpoint);
        form.reset();
        setContactStatus("Message envoye. Merci, je reviens vers vous rapidement.");
      } catch (error) {
        setContactStatus(error.message || "L'envoi a echoue. Vous pouvez reessayer dans un instant.", true);
      } finally {
        setSubmitState(form, false);
      }
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
