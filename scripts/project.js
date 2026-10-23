(() => {
  "use strict";
  const { experiences } = window.Portfolio.data;
  const catalog = {
    "caisse-croute": { index: 0, status: "Projet collectif · Équipe de quatre", proofId: "preuve-conception", proofTitle: "Transformer une idée en conception exploitable", skillIds: ["conduire", "collaborer", "realiser"], proofIntro: "Ma contribution porte notamment sur la formalisation du besoin, la structuration fonctionnelle et l’organisation du projet. Le dossier de conception et la maquette permettent de suivre cette démarche.", proofCaption: "Le dossier présente les cas d’utilisation, la séquence d’ouverture d’une loot box, les classes métier et le découpage du travail.", limit: "Cette capture montre l’application collective. Elle ne constitue pas, à elle seule, une preuve d’une réalisation individuelle de tous les écrans ou modules." },
    "sleep-space-game": { index: 1, status: "Projet personnel · Conception et spécification", proofId: "preuve-parcours", proofTitle: "Relier une routine à une progression compréhensible", skillIds: ["realiser", "optimiser", "conduire"], proofIntro: "Le projet part d’un parcours simple : préparer une routine, lancer une session du soir, puis découvrir sa progression le lendemain. Mon travail porte sur la vision produit, les règles et les contraintes, documentées dans la spécification.", proofCaption: "Les écrans illustrent le parcours conçu. La spécification détaille la boucle quotidienne, la progression et les règles de validation.", limit: "Le dossier présente un travail de conception et de spécification. Il ne revendique ni une application finalisée et distribuée, ni des résultats mesurés sur le sommeil." },
    "smartcart": { index: 2, status: "Projet scolaire · Application Symfony", proofId: "preuve-architecture", proofTitle: "Séparer les responsabilités pour structurer l’application", skillIds: ["realiser", "gerer", "administrer"], proofIntro: "Le domaine relie des utilisateurs, des listes, des articles, des magasins et des prix. La logique est répartie entre les entités Doctrine, les contrôleurs, les services métier, les repositories et les templates Twig.", proofCaption: "Le dépôt GitLab est la ressource de code associée. La spécification et la maquette complètent la présentation fonctionnelle ; l’accès aux ressources dépend de leurs permissions.", limit: "Les fonctionnalités décrites correspondent au projet documenté. Aucun résultat de performance ou de sécurité chiffré n’est revendiqué ici." },
    "flotto": { index: 3, status: "Stage chez Amiltone · 2026", proofId: "preuve-dates", proofTitle: "Mutualiser les champs de date et d’heure", skillIds: ["realiser", "collaborer", "conduire"], limit: "Ces interventions appartiennent au stage 2026. Elles ne sont pas présentées comme les missions de l’alternance actuelle. Le dossier décrit le travail réalisé, sans publier de code interne ou de capture professionnelle." }
  };
  const slug = new URLSearchParams(window.location.search).get("projet");
  const item = Object.prototype.hasOwnProperty.call(catalog, slug) ? catalog[slug] : null;
  const container = document.getElementById("case-content");
  if (!item) {
    document.title = "Dossier introuvable — Nathanaël Bayard";
    container.innerHTML = '<div class="case-empty"><h1>Ce dossier n’existe pas.</h1><p>Retrouvez les quatre réalisations et leurs preuves dans le carnet de projets.</p><a class="button button-primary" href="index.html#projets">Revenir aux projets</a></div>';
    return;
  }
  const project = experiences[item.index];
  const decode = document.createElement("textarea");
  decode.innerHTML = project.title;
  document.title = `${decode.value} — Dossier de projet · Nathanaël Bayard`;
  const resources = project.resources || [];
  const external = (url) => /^https?:\/\//.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "";
  const resourceLinks = resources.map((resource) => `<a class="button" href="${resource.url}"${external(resource.url)}>${resource.label}</a>`).join("");
  const skills = item.skillIds.map((id) => {
    const skill = window.Portfolio.data.competences.find((entry) => entry.id === id);
    return `<a href="index.html#competence-${id}">${skill.title} — retrouver les compétences</a>`;
  }).join("");
  const image = project.previewImage ? `<figure class="case-figure"><a class="image-link" href="${project.previewImage}" data-enlarge data-caption="Caisse-Croûte — interface du projet collectif"><img src="${project.previewImage}" width="1920" height="1080" alt="${project.previewAlt}" fetchpriority="high" /></a><figcaption>Vue de l’application collective Caisse-Croûte. Sélectionnez la capture pour l’agrandir.</figcaption></figure>` : "";
  const gallerySizes = [[431,906],[425,894],[447,910]];
  const gallery = project.screenGallery ? `<div class="case-gallery">${project.screenGallery.map((screen, index) => `<figure><a href="${screen.src}" data-enlarge data-caption="${screen.caption}"><img src="${screen.src}" width="${gallerySizes[index][0]}" height="${gallerySizes[index][1]}" alt="${screen.alt}" loading="lazy" /></a><figcaption>${screen.caption}. Sélectionnez l’écran pour l’agrandir.</figcaption></figure>`).join("")}</div>` : "";
  const actions = project.actions ? `<ul>${project.actions.map((action) => `<li>${action}</li>`).join("")}</ul>` : "";
  const missionSections = (project.missions || []).map((mission, index) => `<section class="case-section" id="${index === 0 ? "preuve-dates" : "preuve-tableaux"}"><h2>${mission.title}</h2><p>${mission.summary}</p><h3>Mon intervention</h3><p>${mission.intervention}</p><h3>Résultat et apprentissage</h3><p>${mission.outcome}</p><div class="proof-callout"><strong>Ce que cette situation mobilise</strong>${mission.competences.map((competence) => `<p><strong>${competence.competence}.</strong> ${competence.text}</p>`).join("")}<p>Cette contribution est décrite dans ce dossier ; aucun extrait de code interne n’est publié.</p></div><div class="proof-links">${skills}</div></section>`).join("");
  const proofSection = missionSections || `<section id="${item.proofId}" class="case-section"><h2>${item.proofTitle}</h2><p>${item.proofIntro}</p>${gallery}${actions}<div class="proof-callout"><p><strong>Lire la trace.</strong> ${item.proofCaption}</p><div class="proof-links">${resourceLinks}</div></div><div class="proof-links">${skills}</div></section>`;
  const reflection = project.learning ? `<section class="case-section" id="recul"><h2>Ce que j’en retiens.</h2><p>${project.learning}</p><p>${project.contribution}</p></section>` : "";
  container.innerHTML = `
    <a class="breadcrumb" href="index.html#projets">Retour à l’établi des applications</a>
    <header class="case-header"><h1>${project.title}</h1><p class="case-subtitle">${project.subtitle}</p><div class="case-meta"><span>${item.status}</span><span>${project.period}</span></div><p class="case-summary">${project.summary}</p><p class="case-role"><strong>Ma contribution.</strong> ${project.role}</p></header>
    ${image}
    <div class="case-layout"><nav class="case-index" aria-label="Sommaire du dossier"><a href="#${item.proofId}">Contribution &amp; preuves</a>${project.missions?.length > 1 ? '<a href="#preuve-tableaux">Tableaux de gestion</a>' : ""}${project.learning ? '<a href="#recul">Apprentissages</a>' : ""}<a href="#limites">Périmètre du dossier</a><a href="#ressources">Ressources</a><a href="index.html#competences">Compétences en pratique</a></nav><div>
    ${proofSection}${reflection}
    <section id="limites" class="case-section"><h2>Un périmètre explicite.</h2><p>${item.limit}</p></section>
    <section id="ressources" class="case-section"><h2>Pour aller plus loin.</h2><div class="proof-links">${resourceLinks || '<p>Les ressources internes de ce projet ne sont pas publiées.</p>'}</div>${project.logoUrl ? `<p><a href="${project.logoUrl}"${external(project.logoUrl)}>Consulter le site public de Flotto</a> — ce site présente le produit, pas le détail de mes contributions.</p>` : ""}</section>
    </div></div><div class="case-next"><a class="text-link" href="index.html#projets">Toutes les réalisations</a><a class="text-link" href="index.html#contact">Échanger sur ce projet</a></div>`;
  // Le contenu du dossier est généré avant de résoudre un lien de preuve.
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: "instant", block: "start" }));
  }
})();
