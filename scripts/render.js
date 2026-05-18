(() => {
  "use strict";

  const portfolio = window.Portfolio;
  const { SELECTORS } = portfolio.config;
  const { competences, experiences, progressionSteps } = portfolio.data;

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
    const panel = document.querySelector(SELECTORS.competencePanel);
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
    document.querySelector(SELECTORS.experiencesList).innerHTML = experiences.map(createExperienceCard).join("");
    document.querySelector(SELECTORS.competenceTabs).innerHTML = competences.map(createCompetenceButton).join("");
    document.querySelector(SELECTORS.progressionList).innerHTML = progressionSteps
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

  portfolio.render = Object.freeze({
    injectContent,
    renderCompetencePanel
  });
})();
