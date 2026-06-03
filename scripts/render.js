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

  function createLearningOutcomes(outcomes) {
    return outcomes
      .map(
        (outcome) => `
          <li>
            <span class="ac-code">${outcome.code}</span>
            <span>${outcome.text}</span>
          </li>
        `
      )
      .join("");
  }

  function createMissionCompetences(items) {
    return items
      .map(
        (item) => `
          <article>
            <p class="card-label">${item.competence}</p>
            <h5>${item.title}</h5>
            <p><strong>Action :</strong> ${item.action}</p>
            <p><strong>Preuve :</strong> ${item.proof}</p>
            <p><strong>Axe de progr&egrave;s :</strong> ${item.progress}</p>
          </article>
        `
      )
      .join("");
  }

  function createMissionFocus(mission) {
    if (!mission) {
      return "";
    }

    return `
      <details class="mission-focus">
        <summary class="mission-summary">
          <p class="card-label">${mission.label}</p>
          <h4>${mission.title}</h4>
          <p>${mission.summary}</p>
          <span>Voir le d&eacute;tail</span>
        </summary>

        <div class="mission-focus-body">
          <section class="mission-context">
            <p>${mission.context}</p>
          </section>

          <div class="mission-grid">
            <section>
              <h5>Objectif</h5>
              <p>${mission.objective}</p>
            </section>
            <section>
              <h5>D&eacute;marche</h5>
              <ul>${createList(mission.approach)}</ul>
            </section>
          </div>

          <div class="mission-grid mission-grid-three">
            <section>
              <h5>Difficult&eacute;s</h5>
              <ul>${createList(mission.difficulties)}</ul>
            </section>
            <section>
              <h5>R&eacute;sultat</h5>
              <p>${mission.result}</p>
            </section>
            <section>
              <h5>Recul personnel</h5>
              <p>${mission.selfReview}</p>
            </section>
          </div>

          <section class="mission-competences">
            <p class="card-label">Comp&eacute;tences prouv&eacute;es par la mission</p>
            <div>${createMissionCompetences(mission.competences)}</div>
          </section>
        </div>
      </details>
    `;
  }

  function createExperienceAnalysis(experience) {
    if (experience.mission || !experience.actions?.length) {
      return "";
    }

    return `
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
    `;
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

    const isExpandable = experience.screenLayout === "phone";
    const screenClass = `experience-screen${isExpandable ? " experience-screen-phone is-expandable is-minimized" : ""}`;
    const screenAttributes = isExpandable
      ? ` data-expandable-screen data-screen-default-state="minimized" data-screen-title="${experience.title}"`
      : "";
    const phoneControls = isExpandable
      ? `
        <span class="phone-screen-controls">
          <button class="screen-control" type="button" data-screen-toggle aria-expanded="false" aria-label="Restaurer la capture ${experience.title}">+</button>
          <button class="screen-control screen-control-close" type="button" data-screen-close aria-label="Fermer la capture ${experience.title}">x</button>
        </span>
      `
      : "";
    const screenControls = isExpandable
      ? `
        <span class="screen-controls">
          <button class="screen-control" type="button" data-screen-toggle aria-expanded="false" aria-label="Restaurer la capture ${experience.title}">+</button>
          <button class="screen-control screen-control-close" type="button" data-screen-close aria-label="Fermer la capture ${experience.title}">x</button>
        </span>
      `
      : "";
    const imageContent = `
      <img src="${experience.screenImage}" alt="${experience.screenAlt}" loading="lazy">
      ${isExpandable ? '<span class="screen-hint" aria-hidden="true">Cliquer pour restaurer</span>' : ""}
    `;
    const windowHeader = `
      <div class="site-preview-bar"${isExpandable ? " data-screen-header" : ""}>
        <span></span>
        <strong>${experience.title}</strong>
        ${screenControls}
      </div>
    `;

    if (isExpandable) {
      return `
        <figure class="${screenClass}"${screenAttributes}>
          <div class="phone-device">
            ${phoneControls}
            <div class="phone-device-frame" data-screen-header>
              <div class="phone-dynamic-island" aria-hidden="true">
                <span></span>
              </div>
              <button class="screen-preview-button phone-screen-button" type="button" data-screen-toggle aria-expanded="false" aria-label="Restaurer la capture ${experience.title}">
                ${imageContent}
              </button>
            </div>
          </div>
          <figcaption>${experience.screenCaption}</figcaption>
        </figure>
      `;
    }

    return `
      <figure class="${screenClass}"${screenAttributes}>
        <div class="experience-screen-window">
          ${windowHeader}
          ${
            isExpandable
              ? `<button class="screen-preview-button" type="button" data-screen-toggle aria-expanded="false" aria-label="Restaurer la capture ${experience.title}">${imageContent}</button>`
              : imageContent
          }
        </div>
        <figcaption>${experience.screenCaption}</figcaption>
      </figure>
    `;
  }

  function createExperienceLogo(experience) {
    const logo = `<img class="experience-logo" src="${experience.logo}" alt="${experience.logoAlt}" loading="lazy">`;

    if (!experience.logoUrl) {
      return logo;
    }

    return `
      <div class="experience-logo-link-block">
        <a
          class="experience-logo-link"
          href="${experience.logoUrl}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${experience.logoUrlLabel || `Ouvrir le site de ${experience.title}`}"
        >
          ${logo}
        </a>
        <div class="site-preview logo-site-preview" aria-hidden="true">
          <div class="site-preview-bar">
            <span></span>
            <strong>${experience.logoPreviewTitle || experience.logoUrl}</strong>
          </div>
          <div class="site-preview-frame site-preview-frame-live">
            <iframe
              src="${experience.logoUrl}"
              title="${experience.logoPreviewTitle || experience.title}"
              loading="lazy"
              tabindex="-1"
            ></iframe>
          </div>
          ${experience.logoPreviewText ? `<p>${experience.logoPreviewText}</p>` : ""}
        </div>
      </div>
    `;
  }

  function createCompanyLogo(experience) {
    if (!experience.companyLogo) {
      return "";
    }

    const logo = `<img src="${experience.companyLogo}" alt="${experience.companyLogoAlt}" loading="lazy">`;
    const logoContent = experience.companyUrl
      ? `<a class="experience-company-logo-link" href="${experience.companyUrl}" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le site officiel de ${experience.companyName}">${logo}</a>`
      : logo;

    return `
      <div class="experience-company">
        <p>${experience.companyLabel}</p>
        <div class="experience-company-lockup">
          ${logoContent}
          <strong>${experience.companyName}</strong>
        </div>
      </div>
    `;
  }

  function createExperienceCard(experience) {
    return `
      <article class="experience-card reveal" data-category="${experience.category}">
        <div class="experience-side">
          <div class="experience-logo-wrap">
            ${createExperienceLogo(experience)}
          </div>
          ${createCompanyLogo(experience)}
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
          ${createMissionFocus(experience.mission)}
          ${createExperienceAnalysis(experience)}

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
        <section class="ac-section" aria-label="Apprentissages critiques">
          <p class="card-label">Apprentissages critiques</p>
          <ul class="ac-list">${createLearningOutcomes(competence.outcomes)}</ul>
        </section>
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
