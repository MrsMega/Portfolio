(() => {
  "use strict";
  const portfolio = window.Portfolio;
  const { CONTACT, PROFILE_LINKS } = portfolio.config;

  function setupNavigation() {
    const header = document.querySelector(".site-header");
    const toggle = header?.querySelector(".menu-toggle");
    if (!toggle) return;
    header.classList.add("is-enhanced");
    toggle.hidden = false;
    const setMenu = (open) => {
      header.classList.toggle("is-menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    header.querySelectorAll(".site-nav a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
    header.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia("(max-width: 800px)").addEventListener("change", () => setMenu(false));
    const links = [...header.querySelectorAll('.site-nav a[href^="#"]')];
    const sections = links.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean);
    let pending = false;
    function updateCurrent() {
      const offset = header.getBoundingClientRect().height + 80;
      let current = null;
      for (const section of sections) if (section.getBoundingClientRect().top <= offset) current = section.id;
      links.forEach((link) => {
        if (link.hash === `#${current}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      pending = false;
    }
    window.addEventListener("scroll", () => {
      if (!pending) { pending = true; window.requestAnimationFrame(updateCurrent); }
    }, { passive: true });
    updateCurrent();
  }

  function setupFeatureAnnotations() {
    const feature = document.querySelector(".featured-project");
    if (!feature) return;
    const controls = [...feature.querySelectorAll("[data-annotation]")];
    const regions = [...feature.querySelectorAll("[data-capture-region]")];
    const notes = [...feature.querySelectorAll("[data-capture-note]")];
    function select(name) {
      controls.forEach((control) => {
        const selected = control.dataset.annotation === name;
        control.classList.toggle("is-active", selected);
        control.setAttribute("aria-pressed", String(selected));
      });
      regions.forEach((region) => region.classList.toggle("is-active", region.dataset.captureRegion === name));
      notes.forEach((note) => note.classList.toggle("is-active", note.dataset.captureNote === name));
    }
    controls.forEach((control) => {
      control.setAttribute("role", "button");
      control.addEventListener("click", (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        select(control.dataset.annotation);
      });
      control.addEventListener("keydown", (event) => {
        if (event.key === " ") { event.preventDefault(); select(control.dataset.annotation); }
      });
    });
    select("progression");
  }

  function setupImageViewer() {
    const dialog = document.getElementById("image-viewer");
    if (!dialog || typeof dialog.showModal !== "function") return;
    let origin = null;
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-enlarge]");
      if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      origin = link;
      let image = dialog.querySelector("img");
      if (!image) { image = document.createElement("img"); dialog.querySelector("figure").prepend(image); }
      image.src = link.href;
      image.alt = link.querySelector("img")?.alt || link.dataset.caption || "Capture du projet";
      dialog.querySelector("figcaption").textContent = link.dataset.caption || "";
      dialog.showModal();
    });
    dialog.querySelector("button").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener("close", () => { origin?.focus(); dialog.querySelector("img")?.remove(); });
  }

  function setupProfileLinks() {
    document.querySelectorAll("[data-profile-link]").forEach((link) => {
      const url = PROFILE_LINKS[link.dataset.profileLink];
      if (url) link.href = url;
    });
  }

  function setupFramework() {
    const target = document.getElementById("framework-content");
    if (!target) return;
    const destinations = {
      realiser: "projet.html?projet=flotto#preuve-dates",
      optimiser: "projet.html?projet=sleep-space-game#preuve-parcours",
      administrer: "projet.html?projet=smartcart#preuve-architecture",
      gerer: "projet.html?projet=smartcart#preuve-architecture",
      conduire: "projet.html?projet=caisse-croute#preuve-conception",
      collaborer: "projet.html?projet=flotto#preuve-dates"
    };
    target.innerHTML = portfolio.data.competences.map((item) => `<article id="competence-${item.id}"><h3>${item.title}</h3><p>${item.short}</p><p>${item.level}</p><ul>${item.outcomes.map((outcome) => `<li><code>${outcome.code}</code> — ${outcome.text}</li>`).join("")}</ul><p>${item.reflection}</p><a href="${destinations[item.id]}">Voir une situation associée</a></article>`).join("");
  }

  function setupContact() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    const status = form.querySelector("[data-contact-status]");
    const button = form.querySelector('button[type="submit"]');
    const endpoint = String(CONTACT.formspreeEndpoint || "").trim();
    const label = endpoint ? "Envoyer le message" : "Préparer un e-mail";
    button.firstChild.textContent = label + " ";
    button.disabled = false;
    if (endpoint) form.action = /^[a-z0-9]+$/i.test(endpoint) ? `https://formspree.io/f/${endpoint}` : endpoint;
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      status.classList.remove("is-error");
      if (!endpoint) {
        if (!CONTACT.recipientEmail) {
          status.textContent = "La messagerie est indisponible. Vous pouvez me contacter sur LinkedIn.";
          status.classList.add("is-error");
          return;
        }
        const values = new FormData(form);
        const body = `Adresse de réponse : ${values.get("email")}\n\n${values.get("message")}`;
        window.location.href = `mailto:${CONTACT.recipientEmail}?subject=${encodeURIComponent(values.get("subject"))}&body=${encodeURIComponent(body)}`;
        status.textContent = "Votre messagerie va s’ouvrir. Vous pourrez y finaliser l’envoi.";
        return;
      }
      button.disabled = true;
      button.firstChild.textContent = "Envoi en cours… ";
      status.textContent = "Envoi en cours…";
      try {
        const response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error("submission-failed");
        form.reset();
        status.textContent = "Votre message a été envoyé. Merci pour votre retour !";
      } catch {
        status.textContent = "L’envoi n’a pas abouti. Votre texte est conservé : réessayez ou contactez-moi sur LinkedIn.";
        status.classList.add("is-error");
      } finally {
        button.disabled = false;
        button.firstChild.textContent = label + " ";
      }
    });
  }

  setupNavigation();
  setupFeatureAnnotations();
  setupImageViewer();
  setupProfileLinks();
  setupFramework();
  function revealHashTarget() {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) return;
    const details = target.closest("details");
    if (details) details.open = true;
    if (details) requestAnimationFrame(() => target.scrollIntoView({ behavior: "instant", block: "start" }));
  }
  revealHashTarget();
  window.addEventListener("hashchange", revealHashTarget);
  setupContact();
})();
