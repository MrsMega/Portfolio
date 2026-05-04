const entries = [
  {
    type: "SAE a venir",
    title: "Bloc SAE #01",
    status: "placeholder",
    period: "A renseigner",
    summary:
      "Cet emplacement accueillera une SAE importante avec son contexte, ses objectifs et sa valeur dans ton parcours.",
    prompts: [
      {
        label: "Ce que j'ai realise",
        text: "Decrire les fonctionnalites, livrables ou missions prises en charge.",
      },
      {
        label: "Pourquoi c'est pertinent",
        text: "Expliquer pourquoi cette SAE dit quelque chose d'utile sur ton profil.",
      },
      {
        label: "Ce que j'ai appris",
        text: "Nommer des apprentissages concrets, dans leur contexte precis.",
      },
      {
        label: "Preuves a joindre",
        text: "Captures, code, documentation, schema, soutenance, demo ou resultat mesurable.",
      },
    ],
    tags: ["Analyse", "Developpement", "Travail d'equipe"],
  },
  {
    type: "Projet marquant",
    title: "Projet academique ou personnel",
    status: "placeholder",
    period: "A renseigner",
    summary:
      "Reserve pour un projet significatif a traiter comme une entree coherente, sans se perdre dans des details repetitifs.",
    prompts: [
      {
        label: "Contexte",
        text: "Dans quel cadre le projet a eu lieu et quel etait ton role exact ?",
      },
      {
        label: "Apport au profil",
        text: "Ce projet montre une methode, une autonomie ou une competence particuliere ?",
      },
      {
        label: "Competences mobilisees",
        text: "Relier le projet a des savoir-faire reels plutot qu'a une simple liste de technologies.",
      },
      {
        label: "Trace concrete",
        text: "Ajouter une capture d'ecran, un repository, une architecture ou une documentation.",
      },
    ],
    tags: ["Organisation", "Conception", "Communication"],
  },
  {
    type: "SAE a venir",
    title: "Bloc SAE #02",
    status: "placeholder",
    period: "A renseigner",
    summary:
      "Deuxieme espace pret a accueillir une experience differente si elle apporte une vraie valeur a la lecture du portfolio.",
    prompts: [
      {
        label: "Probleme traite",
        text: "Quel besoin, quelle consigne ou quelle difficulte devait etre resolue ?",
      },
      {
        label: "Ce qui a change",
        text: "Montrer la progression : meilleure rigueur, nouveaux outils, meilleure comprehension du sujet.",
      },
      {
        label: "Resultat obtenu",
        text: "Presenter un resultat visible, un retour, un indicateur ou un livrable final.",
      },
      {
        label: "Point a expliciter",
        text: "Eviter les formulations vagues : toujours donner du contexte a l'apprentissage.",
      },
    ],
    tags: ["Methodologie", "Resolution", "Qualite"],
  },
  {
    type: "Stage",
    title: "Missions de stage",
    status: "a venir",
    period: "Apres la periode de stage",
    summary:
      "Le stage n'est pas encore effectue. Cette carte est deja prete pour accueillir les missions retenues, leur analyse et les preuves associees.",
    prompts: [
      {
        label: "Missions selectionnees",
        text: "Ne garder que les missions significatives ou apportant un element nouveau.",
      },
      {
        label: "Lien avec le referentiel",
        text: "Associer chaque mission a des competences clairement argumentees.",
      },
      {
        label: "Apprentissage professionnel",
        text: "Expliquer ce qui a ete appris sur le plan technique, organisationnel ou humain.",
      },
      {
        label: "Preuves de terrain",
        text: "Captures, livrables, documentation, schema, temoignage, elements anonymises si necessaire.",
      },
    ],
    tags: ["Professionnalisation", "Competences", "Experience reelle"],
  },
];

const skills = [
  {
    title: "Lire une experience avec recul",
    meta: "Analyse",
    text:
      "Transformer une experience en argument : distinguer ce qui releve de l'action, de l'apprentissage et de la competence.",
    level: 78,
  },
  {
    title: "Structurer des preuves",
    meta: "Documentation",
    text:
      "Conserver des traces utiles et les presenter proprement pour soutenir un acquis ou une progression.",
    level: 72,
  },
  {
    title: "Relier a un referentiel",
    meta: "Competences",
    text:
      "Faire correspondre les projets et missions a des competences explicites et defendables.",
    level: 69,
  },
  {
    title: "Construire un bilan reflechi",
    meta: "Autoevaluation",
    text:
      "Aller au-dela de la liste des taches pour expliquer ce qui a vraiment ete compris et consolide.",
    level: 74,
  },
];

const timelineSteps = [
  {
    meta: "Etape 01",
    title: "Selectionner les experiences les plus representatives",
    text:
      "Le portfolio doit privilegier les experiences pertinentes plutot qu'une accumulation exhaustive d'elements.",
  },
  {
    meta: "Etape 02",
    title: "Donner une place aux SAE marquantes",
    text:
      "Chaque SAE retenue doit faire apparaitre l'action menee, ce qu'elle apporte et ce qu'elle a permis d'apprendre.",
  },
  {
    meta: "Etape 03",
    title: "Integrer le stage comme preuve de professionnalisation",
    text:
      "Quand les missions de stage seront connues, elles viendront completer la lecture du profil avec des situations reelles.",
  },
  {
    meta: "Etape 04",
    title: "Conclure par une progression visible",
    text:
      "L'ensemble du portfolio doit raconter une evolution sur l'annee et non une juxtaposition de vignettes.",
  },
];

function createEntryCard(entry) {
  const promptsMarkup = entry.prompts
    .map(
      (prompt) => `
        <div class="prompt-item">
          <strong>${prompt.label}</strong>
          <span>${prompt.text}</span>
        </div>
      `
    )
    .join("");

  const chipsMarkup = entry.tags
    .map((tag) => `<span class="chip">${tag}</span>`)
    .join("");

  return `
    <article class="entry-card tilt-card">
      <div class="entry-header">
        <div class="entry-title-block">
          <p class="entry-meta">${entry.type} // ${entry.period}</p>
          <h3>${entry.title}</h3>
        </div>
        <span class="entry-status">${entry.status}</span>
      </div>
      <p class="entry-summary">${entry.summary}</p>
      <div class="prompt-grid">${promptsMarkup}</div>
      <div class="chip-row">${chipsMarkup}</div>
    </article>
  `;
}

function createSkillCard(skill) {
  return `
    <article class="skill-card tilt-card">
      <p class="skill-meta">${skill.meta}</p>
      <h3>${skill.title}</h3>
      <p>${skill.text}</p>
      <div class="skill-level" aria-label="Niveau estime a ${skill.level}%">
        <div class="skill-track">
          <div class="skill-fill" style="width: ${skill.level}%"></div>
        </div>
      </div>
    </article>
  `;
}

function createTimelineCard(step) {
  return `
    <article class="timeline-card reveal">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-body">
        <p class="timeline-meta">${step.meta}</p>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </div>
    </article>
  `;
}

function injectContent() {
  const entryTarget = document.querySelector("#entries-grid");
  const skillsTarget = document.querySelector("#skills-grid");
  const timelineTarget = document.querySelector("#timeline");

  entryTarget.innerHTML = entries.map(createEntryCard).join("");
  skillsTarget.innerHTML = skills.map(createSkillCard).join("");
  timelineTarget.innerHTML = timelineSteps.map(createTimelineCard).join("");
}

function observeReveal() {
  const observer = new IntersectionObserver(
    (entriesList) => {
      entriesList.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function updateScrollProgress() {
  const progressBar = document.querySelector(".progress-bar");

  const handleScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progressBar.style.width = `${ratio * 100}%`;
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
}

function followCursorGlow() {
  const glow = document.querySelector(".cursor-glow");

  window.addEventListener("pointermove", (event) => {
    glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  });
}

function setupTilt() {
  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (window.innerWidth < 900) {
        return;
      }

      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      card.style.transform = `rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

injectContent();
observeReveal();
updateScrollProgress();
followCursorGlow();
setupTilt();
