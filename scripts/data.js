(() => {
  "use strict";

  const portfolio = (window.Portfolio = window.Portfolio || {});

  const experiences = [
    {
      category: "SAE",
      period: "S3-S4 2025-2026",
      title: "Caisse-Cro&ucirc;te",
      subtitle: "Jeu web de cuisine, loot boxes et marketplace",
      logo: "asset/caissecroutelogo.png",
      logoAlt: "Logo Caisse-Cro&ucirc;te",
      url: "https://caisse-croute.alwaysdata.net/sae-s3/public/pages/dashboard.php",
      urlLabel: "Ouvrir Caisse-Cro&ucirc;te",
      previewImage: "asset/screen-caisse-croute.png",
      previewAlt: "Capture d'ecran du tableau de bord Caisse-Cro&ucirc;te",
      summary:
        "Projet men&eacute; en &eacute;quipe de quatre dans le cadre de la SAE D&eacute;veloppement d'une application. L'objectif &eacute;tait de concevoir puis d&eacute;velopper un jeu par navigateur original, accessible en ligne, avec compte joueur, inventaire, recettes, loot boxes et marketplace.",
      role:
        "Participation &agrave; la conception fonctionnelle, &agrave; la structuration du projet, aux choix de fonctionnalit&eacute;s, aux maquettes, au d&eacute;coupage agile et &agrave; la pr&eacute;paration du d&eacute;veloppement web.",
      actions: [
        "Formalisation du besoin avec une m&eacute;thode SMART et une priorisation MoSCoW.",
        "Construction d'un dossier de conception : cas d'utilisation, s&eacute;quence d'ouverture de loot box, classes m&eacute;tier et WBS.",
        "D&eacute;finition des modules principaux : authentification, inventaire, recettes, marketplace, shop administrateur, tirage c&ocirc;t&eacute; serveur.",
        "Organisation en sprints avec suivi de projet, maquettes Figma et collaboration via la forge GitLab de l'IUT."
      ],
      learning:
        "Cette SAE m'a surtout fait progresser sur le passage entre une id&eacute;e de jeu et une application structur&eacute;e. Je n'ai pas seulement list&eacute; des fonctionnalit&eacute;s : j'ai appris &agrave; les relier &agrave; des utilisateurs, des donn&eacute;es, des r&egrave;gles m&eacute;tier et un planning r&eacute;aliste.",
      contribution:
        "Elle montre ma capacit&eacute; &agrave; travailler dans un cadre collectif, &agrave; produire une conception exploitable et &agrave; anticiper les contraintes d'une application web avec base de donn&eacute;es, serveur et interactions entre joueurs.",
      skills: ["R&eacute;aliser", "G&eacute;rer", "Conduire", "Collaborer", "Administrer"],
      proofs: [
        "Dossier de conception SAE S3-S4",
        "Diagramme de cas d'utilisation",
        "Diagramme de s&eacute;quence sur l'ouverture d'une loot box",
        "Diagramme de classes : utilisateur, inventaire, recette, transaction, annonce",
        "WBS, EPIC, user stories, Gantt",
        "Maquettes Figma : connexion, accueil, marketplace, inventaire"
      ]
    },
    {
      category: "Projet",
      period: "Projet personnel",
      title: "Sleep Space Game",
      subtitle: "Sp&eacute;cification d'une application Android de routine du soir",
      logo: "asset/logo_ssg.jpg",
      logoAlt: "Logo Sleep Space Game",
      screenImage: "asset/screen-ssg.png",
      screenAlt: "Capture d'ecran de Sleep Space Game",
      screenCaption: "Aper&ccedil;u visuel du projet Sleep Space Game.",
      screenLayout: "phone",
      summary:
        "Concept de jeu mobile Android en Kotlin, avec TypeScript, Firebase et Cloud Functions, qui transforme la r&eacute;duction de l'usage du t&eacute;l&eacute;phone au coucher en progression spatiale. Le joueur suit un vaisseau, choisit une destination et avance davantage quand sa session du soir est respect&eacute;e.",
      role:
        "Conception produit et fonctionnelle : vision, boucle de jeu, progression, r&egrave;gles m&eacute;tier, parcours utilisateur, mod&egrave;le logique et contraintes techniques.",
      actions: [
        "D&eacute;finition d'une boucle quotidienne simple : lancer une session du soir, poser le t&eacute;l&eacute;phone, constater le gain le lendemain.",
        "Conception d'un syst&egrave;me de trajet spatial autopilot&eacute; avec phases de d&eacute;part, croisi&egrave;re et arriv&eacute;e.",
        "Formalisation des r&egrave;gles de validation : gains progressifs, tol&eacute;rance, protection contre une logique trop punitive.",
        "Identification des contraintes techniques : temps fiable c&ocirc;t&eacute; serveur, sobri&eacute;t&eacute; batterie, donn&eacute;es m&eacute;tier, backend centralis&eacute;."
      ],
      learning:
        "Ce projet m'a permis de travailler la conception avant le code : clarifier une intention, &eacute;viter les fonctionnalit&eacute;s inutiles, penser les r&egrave;gles m&eacute;tier et anticiper les limites techniques d'une application mobile.",
      contribution:
        "Il apporte au portfolio une dimension produit plus personnelle : je montre ma capacit&eacute; &agrave; concevoir une exp&eacute;rience coh&eacute;rente, &agrave; justifier les arbitrages et &agrave; penser l'impact utilisateur sans pr&eacute;tendre produire un outil m&eacute;dical.",
      skills: ["R&eacute;aliser", "Optimiser", "G&eacute;rer", "Conduire"],
      proofs: [
        "Sp&eacute;cification produit et fonctionnelle",
        "P&eacute;rim&egrave;tre inclus et hors p&eacute;rim&egrave;tre",
        "R&egrave;gles de progression et de session du soir",
        "Mod&egrave;le logique : utilisateur, routine, vaisseau, trajet, session, groupe",
        "Contraintes techniques Android, backend, Firebase et Cloud Functions"
      ]
    },
    {
      category: "Stage",
      period: "En cours",
      title: "Flotto",
      subtitle: "D&eacute;couverte d'Angular sur une application de gestion de flottes",
      logo: "asset/flotto-logo.png",
      logoAlt: "Logo Flotto",
      companyLogo: "asset/amiltone.png",
      companyLogoAlt: "Logo Amiltone",
      companyUrl: "https://www.amiltone.com",
      companyLabel: "Entreprise d'accueil",
      companyName: "Amiltone",
      summary:
        "D&eacute;but de stage chez Amiltone, une ESN, autour de Flotto : une application web permettant de g&eacute;rer des parcs et flottes de voitures. Ce contexte me permet de d&eacute;couvrir le fonctionnement d'un projet professionnel port&eacute; par une entreprise de services num&eacute;riques. La premi&egrave;re phase consiste &agrave; d&eacute;couvrir Angular, technologie non encore abord&eacute;e &agrave; l'IUT, puis &agrave; prendre progressivement en charge des tickets simples.",
      role:
        "Int&eacute;gration progressive dans un projet existant au sein d'Amiltone : apprentissage du framework, lecture de la base de code, compr&eacute;hension du domaine m&eacute;tier et premiers correctifs ou petites &eacute;volutions.",
      actions: [
        "Comprendre l'architecture Angular du projet et la logique des composants.",
        "Identifier les conventions de l'application avant de modifier du code.",
        "R&eacute;soudre des tickets simples pour prendre confiance dans le contexte technique.",
        "Documenter au fil du stage les missions significatives, les apprentissages et les preuves anonymisables."
      ],
      learning:
        "Cette exp&eacute;rience est encore en construction. Son int&eacute;r&ecirc;t principal est de m'obliger &agrave; apprendre dans une base de code r&eacute;elle, avec une technologie nouvelle et des contraintes professionnelles.",
      contribution:
        "Elle servira &agrave; montrer ma capacit&eacute; d'adaptation : passer d'exercices ou de SAE &agrave; un projet existant, comprendre les tickets, demander les bons retours et livrer des changements simples mais utiles.",
      skills: ["R&eacute;aliser", "Collaborer", "Conduire"],
      proofs: [
        "Notes de prise en main Angular",
        "Tickets trait&eacute;s ou suivis",
        "Captures ou extraits anonymis&eacute;s si autoris&eacute;s",
        "Documentation personnelle des conventions du projet",
        "Bilan hebdomadaire des apprentissages"
      ]
    }
  ];

  const competences = [
    {
      id: "realiser",
      title: "R&eacute;aliser",
      level: "Niveau 2 en consolidation",
      short: "Concevoir, d&eacute;velopper, tester et int&eacute;grer une solution.",
      ac: ["AC21.01", "AC21.02", "AC21.03", "AC21.04"],
      evidence:
        "Caisse-Cro&ucirc;te mobilise les sp&eacute;cifications, les interfaces, les choix de conception et la qualit&eacute; attendue d'une application compl&egrave;te. Flotto ajoute le travail sur une base de code existante avec Angular.",
      traces: ["Dossier SAE", "Maquettes", "Tickets Flotto", "Code et tests &agrave; ajouter au fil du stage"]
    },
    {
      id: "optimiser",
      title: "Optimiser",
      level: "Comp&eacute;tence en &eacute;mergence",
      short: "Choisir des structures, analyser des contraintes et justifier des r&eacute;sultats.",
      ac: ["AC22.01", "AC22.03", "AC22.04"],
      evidence:
        "Sleep Space Game demande d'anticiper des contraintes de temps fiable, de batterie, de progression et de comportement utilisateur. La comp&eacute;tence reste &agrave; renforcer avec des mesures et tests plus concrets.",
      traces: ["R&egrave;gles de progression", "Contraintes Android", "Sc&eacute;narios optimiste / r&eacute;f&eacute;rence / pessimiste"]
    },
    {
      id: "administrer",
      title: "Administrer",
      level: "Niveau 2 &agrave; consolider",
      short: "D&eacute;ployer, s&eacute;curiser et maintenir des services.",
      ac: ["AC23.01", "AC23.02", "AC23.03"],
      evidence:
        "La SAE impose un serveur, une base de donn&eacute;es et un projet accessible en ligne. Le projet Sleep Space Game ajoute la question d'un backend centralis&eacute; et d'une r&eacute;f&eacute;rence serveur pour limiter les incoh&eacute;rences.",
      traces: ["Architecture SAE", "Choix serveur", "R&egrave;gles c&ocirc;t&eacute; serveur", "S&eacute;curisation &agrave; documenter"]
    },
    {
      id: "gerer",
      title: "G&eacute;rer",
      level: "Niveau 2 en construction",
      short: "Concevoir, exploiter et prot&eacute;ger les donn&eacute;es.",
      ac: ["AC24.01", "AC24.02", "AC24.03", "AC24.04"],
      evidence:
        "Caisse-Cro&ucirc;te repose sur des donn&eacute;es de compte, inventaire, ingr&eacute;dients, recettes, annonces et transactions. Sleep Space Game formalise aussi des entit&eacute;s m&eacute;tier : routine, trajet, session, groupe et historique.",
      traces: ["Diagramme de classes", "Mod&egrave;le logique Sleep Space Game", "Marketplace", "Inventaire"]
    },
    {
      id: "conduire",
      title: "Conduire",
      level: "Niveau 2 solide",
      short: "Organiser un projet, formaliser le besoin et suivre l'avancement.",
      ac: ["AC25.02", "AC25.03", "AC25.04"],
      evidence:
        "La SAE montre une d&eacute;marche projet compl&egrave;te : objectif SMART, MoSCoW, EPIC, user stories, WBS, Gantt et maquettes. Le projet personnel montre aussi une capacit&eacute; &agrave; arbitrer un p&eacute;rim&egrave;tre.",
      traces: ["Objectifs SMART", "MoSCoW", "EPIC et user stories", "Gantt", "P&eacute;rim&egrave;tre produit"]
    },
    {
      id: "collaborer",
      title: "Collaborer",
      level: "Niveau 2 en situation",
      short: "Travailler efficacement dans une &eacute;quipe informatique.",
      ac: ["AC26.01", "AC26.02", "AC26.03", "AC26.04"],
      evidence:
        "La SAE a &eacute;t&eacute; men&eacute;e en &eacute;quipe de quatre avec outils partag&eacute;s, r&eacute;partition des sujets et communication r&eacute;guli&egrave;re. Le stage va enrichir cette comp&eacute;tence dans une organisation professionnelle.",
      traces: ["GitLab de l'IUT", "Google Docs", "Fiche de suivi", "Retours de stage &agrave; ajouter"]
    }
  ];

  const progressionSteps = [
    {
      marker: "01",
      title: "Structurer une application en &eacute;quipe",
      text:
        "Avec Caisse-Cro&ucirc;te, j'ai travaill&eacute; sur un projet suffisamment large pour demander une vraie organisation : fonctionnalit&eacute;s, donn&eacute;es, maquettes, planning, r&ocirc;les et contraintes techniques."
    },
    {
      marker: "02",
      title: "Concevoir une exp&eacute;rience produit coh&eacute;rente",
      text:
        "Avec Sleep Space Game, je suis parti d'une id&eacute;e personnelle pour produire une sp&eacute;cification compl&egrave;te : objectifs, boucle utilisateur, r&egrave;gles m&eacute;tier, mod&egrave;le logique et limites assum&eacute;es."
    },
    {
      marker: "03",
      title: "Entrer dans une base de code professionnelle",
      text:
        "Avec Flotto, je commence &agrave; apprendre Angular dans un contexte r&eacute;el. Le but est de transformer la d&eacute;couverte d'une technologie en contributions simples, tra&ccedil;ables et utiles."
    }
  ];

  portfolio.data = Object.freeze({
    competences,
    experiences,
    progressionSteps
  });
})();
