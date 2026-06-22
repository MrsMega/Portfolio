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
        "J'y ai appris &agrave; travailler dans un cadre collectif, &agrave; produire une conception exploitable et &agrave; anticiper les contraintes d'une application web avec base de donn&eacute;es, serveur et interactions entre joueurs.",
      skills: ["R&eacute;aliser", "G&eacute;rer", "Conduire", "Collaborer", "Administrer"],
      resources: [
        {
          label: "Application en ligne",
          url: "https://caisse-croute.alwaysdata.net/sae-s3/public/pages/dashboard.php"
        },
        {
          label: "Dossier de conception",
          url: "data/mission%26sae/SAE%20S3-S4.pdf"
        },
        {
          label: "Maquette Figma",
          url: "https://www.figma.com/proto/Gf0ncUJW9Bdsv2r7ZikVRS/SAE-S3-S4?node-id=0-1&t=C3qbLNFbvWCqGwnC-1"
        }
      ]
    },
    {
      category: "Projet",
      period: "Projet personnel",
      title: "Sleep Space Game",
      subtitle: "Sp&eacute;cification d'une application Android de routine du soir",
      logo: "asset/logo_ssg.jpg",
      logoAlt: "Logo Sleep Space Game",
      screenGallery: [
        {
          src: "asset/sleep-space-game-photos/routine-ssg.png",
          alt: "Ecran de configuration de la routine dans Sleep Space Game",
          caption: "Configuration de la routine"
        },
        {
          src: "asset/sleep-space-game-photos/profil-ssg.png",
          alt: "Ecran de profil et statistiques dans Sleep Space Game",
          caption: "Profil et statistiques"
        },
        {
          src: "asset/sleep-space-game-photos/moon-medal-ssg.png",
          alt: "Ecran de la destination Lune dans Sleep Space Game",
          caption: "Choix d'une destination"
        }
      ],
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
        "J'y ai con&ccedil;u une exp&eacute;rience produit coh&eacute;rente, justifi&eacute; mes arbitrages fonctionnels et pris en compte l'impact utilisateur sans pr&eacute;senter l'application comme un outil m&eacute;dical.",
      skills: ["R&eacute;aliser", "Optimiser", "G&eacute;rer", "Conduire"],
      resources: [
        {
          label: "Sp&eacute;cification de l'App",
          url: "data/mission%26sae/app-specification.pdf"
        },
        {
          label: "Maquette Figma",
          url: "https://www.figma.com/make/Samsl2xFBtdjD8WEz14KVM/Polished-UI-Design?fullscreen=1&t=fNspWmuV4Mf9yatv-1"
        }
      ]
    },
    {
      category: "Projet",
      period: "Projet scolaire S4",
      title: "SmartCart",
      subtitle: "Projet Symfony compl&eacute;mentaire de gestion de courses",
      logo: "asset/logoSmartCart.png",
      logoAlt: "Logo SmartCart",
      summary:
        "Application Symfony de gestion de listes de courses. Elle permet &agrave; un utilisateur de cr&eacute;er ses listes, ajouter des articles, suivre les achats et consulter des statistiques de d&eacute;penses. Le projet int&egrave;gre aussi un espace administrateur pour g&eacute;rer le catalogue, les magasins, les prix et les disponibilit&eacute;s.",
      role:
        "Participation au d&eacute;veloppement d'une application web structur&eacute;e avec Symfony : mod&egrave;le de donn&eacute;es Doctrine, contr&ocirc;leurs, services m&eacute;tier, templates Twig, s&eacute;curit&eacute; et interface d'administration.",
      actions: [
        "Structuration du domaine autour des utilisateurs, listes de courses, articles, magasins, prix et statuts de liste.",
        "Mise en place de fonctionnalit&eacute;s de gestion : cr&eacute;ation de listes, ajout d'articles, changement de quantit&eacute;, validation d'achat et suppression.",
        "S&eacute;paration progressive de la logique dans des services Symfony pour garder des contr&ocirc;leurs plus lisibles.",
        "Ajout d'&eacute;l&eacute;ments plus avanc&eacute;s : statistiques de d&eacute;penses, recherche catalogue, recommandations de magasins et contr&ocirc;le d'acc&egrave;s aux listes."
      ],
      learning:
        "Ce projet m'a permis de consolider l'utilisation d'un framework back-end complet. J'ai mieux compris l'int&eacute;r&ecirc;t de s&eacute;parer les responsabilit&eacute;s entre entit&eacute;s, contr&ocirc;leurs, services, repositories et templates.",
      contribution:
        "SmartCart m'a fait travailler la construction d'une application web c&ocirc;t&eacute; serveur avec une logique m&eacute;tier structur&eacute;e, une base de donn&eacute;es relationnelle et des acc&egrave;s diff&eacute;renci&eacute;s entre utilisateur et administrateur.",
      skills: ["R&eacute;aliser", "G&eacute;rer", "Administrer"],
      resources: [
        {
          label: "Sp&eacute;cification / maquette Figma",
          url: "https://www.figma.com/make/Q3vuJnue5S6rdkl9U385wb/Complete-Product-Specification?code-node-id=0-9&p=f&t=o7BGcTQWMMkyhziN-0&fullscreen=1"
        },
        {
          label: "D&eacute;p&ocirc;t GitLab",
          url: "https://forge.univ-lyon1.fr/p2401303/s4-jackass.git"
        }
      ]
    },
    {
      category: "Stage",
      period: "Stage 2026",
      title: "Flotto",
      subtitle: "Contributions Angular sur une application existante",
      logo: "asset/flotto-logo.png",
      logoAlt: "Logo Flotto",
      logoUrl: "https://www.flotto-app.com/",
      logoUrlLabel: "Ouvrir le site Flotto",
      logoPreviewTitle: "flotto-app.com",
      logoPreviewText:
        "Site officiel de Flotto, solution de gestion de flotte automobile.",
      companyLogo: "asset/amiltone.png",
      companyLogoAlt: "Logo Amiltone",
      companyUrl: "https://www.amiltone.com",
      companyLabel: "Entreprise d'accueil",
      companyName: "Amiltone",
      summary:
        "Pendant mon stage chez Amiltone, une ESN qui accompagne des entreprises dans la conception et l'&eacute;volution d'applications web, j'ai travaill&eacute; sur Flotto. Cette application de gestion de parcs automobiles centralise les v&eacute;hicules, trajets, r&eacute;servations et op&eacute;rations de maintenance. J'y ai d&eacute;couvert Angular dans une base de code d&eacute;j&agrave; utilis&eacute;e en production.",
      role:
        "Interventions progressives sur plusieurs tickets front : comprendre l'existant, respecter les conventions du projet, d&eacute;velopper les &eacute;volutions et int&eacute;grer les retours de l'&eacute;quipe.",
      technologies: ["Angular", "TypeScript", "Angular Material", "RxJS / Signals", "SCSS", "Jest", "WSL", "Docker"],
      skills: ["R&eacute;aliser", "Collaborer", "Conduire"],
      missions: [
        {
          label: "Mission 1",
          title: "Mutualiser les champs de date et d'heure",
          summary:
            "Deux composants Angular partag&eacute;s pour harmoniser plusieurs formulaires de Flotto.",
          intervention:
            "Les champs &eacute;taient dupliqu&eacute;s dans plusieurs formulaires. J'ai cr&eacute;&eacute; deux composants communs, puis remplac&eacute; progressivement les anciennes impl&eacute;mentations sans modifier les r&egrave;gles m&eacute;tier.",
          outcome:
            "Les champs sont maintenant plus homog&egrave;nes et le code moins dupliqu&eacute;. J'ai appris qu'une refactorisation cibl&eacute;e doit &ecirc;tre v&eacute;rifi&eacute;e selon tous les modes d'utilisation.",
          competences: [
            {
              competence: "R&eacute;aliser",
              text: "Modifier un existant sans changer le comportement attendu."
            },
            {
              competence: "Collaborer",
              text: "Int&eacute;grer les retours de l'&eacute;quipe et respecter son processus de validation."
            }
          ]
        },
        {
          label: "Mission 2",
          title: "Cr&eacute;er et uniformiser des tableaux de gestion",
          summary:
            "Nouveaux tableaux, page Membres r&eacute;organis&eacute;e et styles SCSS mutualis&eacute;s.",
          intervention:
            "J'ai d&eacute;velopp&eacute; le tableau des sites de rattachement, r&eacute;organis&eacute; la page Membres en trois onglets et extrait les styles communs des tableaux dans des mixins SCSS.",
          outcome:
            "Le tableau des sites fonctionne dans l'environnement local d'int&eacute;gration, la page Membres est plus claire et les styles sont moins dupliqu&eacute;s. J'ai mieux compris la logique cach&eacute;e derri&egrave;re un tableau : &eacute;tat, API, pagination et styles h&eacute;rit&eacute;s.",
          competences: [
            {
              competence: "R&eacute;aliser",
              text: "Structurer des &eacute;crans Angular avec &eacute;tat, services, recherche et pagination."
            },
            {
              competence: "Collaborer",
              text: "&Eacute;changer avec les d&eacute;veloppeurs concern&eacute;s pour aligner le frontend et le backend."
            }
          ]
        }
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
      outcomes: [
        {
          code: "AC21.01",
          text:
            "Transformer un besoin en sp&eacute;cifications puis en fonctionnalit&eacute;s d'application."
        },
        {
          code: "AC21.02",
          text:
            "Penser les interfaces pour qu'elles restent lisibles, utilisables et coh&eacute;rentes."
        },
        {
          code: "AC21.03",
          text:
            "Structurer le code et les choix de conception avec des pratiques maintenables."
        },
        {
          code: "AC21.04",
          text:
            "V&eacute;rifier que l'application fonctionne comme pr&eacute;vu par des tests ou validations."
        }
      ],
      reflection:
        "Ces exp&eacute;riences m'ont appris &agrave; passer d'un besoin &agrave; une application structur&eacute;e, puis &agrave; intervenir dans du code existant. Je progresse encore sur la v&eacute;rification des diff&eacute;rents cas d'usage.",
      traces: ["Caisse-Cro&ucirc;te", "SmartCart", "Missions Flotto"]
    },
    {
      id: "optimiser",
      title: "Optimiser",
      level: "Comp&eacute;tence en &eacute;mergence",
      short: "Choisir des structures, analyser des contraintes et justifier des r&eacute;sultats.",
      ac: ["AC22.01", "AC22.03", "AC22.04"],
      outcomes: [
        {
          code: "AC22.01",
          text:
            "Choisir des structures de donn&eacute;es adapt&eacute;es aux r&egrave;gles du produit."
        },
        {
          code: "AC22.03",
          text:
            "Rep&eacute;rer les risques de s&eacute;curit&eacute; li&eacute;s aux donn&eacute;es, au code et au serveur."
        },
        {
          code: "AC22.04",
          text:
            "Questionner l'impact de la solution : usages encourag&eacute;s, batterie, sobri&eacute;t&eacute; et limites."
        }
      ],
      reflection:
        "Avec Sleep Space Game, j'ai d&ucirc; tenir compte du temps, de la batterie et du comportement utilisateur d&egrave;s la conception. Il me manque encore des mesures et des tests concrets pour aller plus loin.",
      traces: ["Sleep Space Game"]
    },
    {
      id: "administrer",
      title: "Administrer",
      level: "Niveau 2 &agrave; consolider",
      short: "D&eacute;ployer, s&eacute;curiser et maintenir des services.",
      ac: ["AC23.01", "AC23.02", "AC23.03"],
      outcomes: [
        {
          code: "AC23.01",
          text:
            "Concevoir une application qui communique avec un serveur, une base de donn&eacute;es ou un backend."
        },
        {
          code: "AC23.02",
          text:
            "Utiliser des services h&eacute;berg&eacute;s ou r&eacute;seau pour rendre le projet accessible."
        },
        {
          code: "AC23.03",
          text:
            "Identifier les points &agrave; prot&eacute;ger : comptes, sessions, donn&eacute;es et acc&egrave;s serveur."
        }
      ],
      reflection:
        "J'ai travaill&eacute; avec des applications reli&eacute;es &agrave; un serveur et &agrave; une base de donn&eacute;es, puis avec des r&ocirc;les et des contr&ocirc;les d'acc&egrave;s dans SmartCart. Je dois encore approfondir le d&eacute;ploiement et la s&eacute;curisation.",
      traces: ["Caisse-Cro&ucirc;te", "SmartCart", "Sleep Space Game"]
    },
    {
      id: "gerer",
      title: "G&eacute;rer",
      level: "Niveau 2 en construction",
      short: "Concevoir, exploiter et prot&eacute;ger les donn&eacute;es.",
      ac: ["AC24.01", "AC24.02", "AC24.03", "AC24.04"],
      outcomes: [
        {
          code: "AC24.01",
          text:
            "Construire des mod&egrave;les de donn&eacute;es coh&eacute;rents avec les besoins m&eacute;tier."
        },
        {
          code: "AC24.02",
          text:
            "Pr&eacute;voir l'int&eacute;grit&eacute; et la confidentialit&eacute; des donn&eacute;es manipul&eacute;es."
        },
        {
          code: "AC24.03",
          text:
            "Organiser l'affichage ou la restitution des donn&eacute;es pour aider l'utilisateur."
        },
        {
          code: "AC24.04",
          text:
            "Manipuler plusieurs types de donn&eacute;es : comptes, inventaire, sessions, historique ou transactions."
        }
      ],
      reflection:
        "J'ai appris &agrave; construire des mod&egrave;les de donn&eacute;es &agrave; partir des besoins d'une application. Caisse-Cro&ucirc;te et SmartCart m'ont surtout aid&eacute; &agrave; comprendre les relations entre ces donn&eacute;es et leur restitution &agrave; l'utilisateur.",
      traces: ["Caisse-Cro&ucirc;te", "SmartCart", "Sleep Space Game"]
    },
    {
      id: "conduire",
      title: "Conduire",
      level: "Niveau 2 solide",
      short: "Organiser un projet, formaliser le besoin et suivre l'avancement.",
      ac: ["AC25.02", "AC25.03", "AC25.04"],
      outcomes: [
        {
          code: "AC25.02",
          text:
            "Clarifier les besoins des utilisateurs avant de d&eacute;finir les fonctionnalit&eacute;s."
        },
        {
          code: "AC25.03",
          text:
            "Evaluer ce qui est faisable avec le temps, les outils, l'&eacute;quipe et les contraintes."
        },
        {
          code: "AC25.04",
          text:
            "Suivre l'avancement avec des objectifs, un d&eacute;coupage, des priorit&eacute;s et des jalons."
        }
      ],
      reflection:
        "J'ai appris &agrave; d&eacute;couper un projet, fixer des priorit&eacute;s et adapter son p&eacute;rim&egrave;tre au temps disponible. En stage, j'ai d&eacute;couvert un cadre plus pr&eacute;cis, centr&eacute; sur des tickets et leur fonctionnement attendu.",
      traces: ["Caisse-Cro&ucirc;te", "Sleep Space Game", "Missions Flotto"]
    },
    {
      id: "collaborer",
      title: "Collaborer",
      level: "Niveau 2 en situation",
      short: "Travailler efficacement dans une &eacute;quipe informatique.",
      ac: ["AC26.01", "AC26.02", "AC26.03", "AC26.04"],
      outcomes: [
        {
          code: "AC26.01",
          text:
            "Comprendre comment un projet informatique s'inscrit dans une organisation : IUT, &eacute;quipe ou ESN."
        },
        {
          code: "AC26.02",
          text:
            "S'int&eacute;grer progressivement &agrave; une &eacute;quipe, &agrave; ses outils et &agrave; ses habitudes."
        },
        {
          code: "AC26.03",
          text:
            "Communiquer, demander des retours et coordonner son travail avec les autres membres."
        },
        {
          code: "AC26.04",
          text:
            "Rendre compte de ce qui est fait, de ce qui bloque et de ce qui reste &agrave; faire."
        }
      ],
      reflection:
        "Les projets de groupe m'ont appris &agrave; r&eacute;partir le travail et &agrave; partager l'avancement. En stage, j'ai d&ucirc; m'adapter aux habitudes de l'&eacute;quipe, demander des retours et corriger mon travail.",
      traces: ["Caisse-Cro&ucirc;te", "Stage Amiltone / Flotto"]
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
        "Avec Flotto, j'ai travaill&eacute; sur plusieurs &eacute;volutions Angular : composants partag&eacute;s, tableaux de gestion et styles communs. J'ai appris &agrave; comprendre un existant, respecter ses conventions et v&eacute;rifier mes modifications dans plusieurs contextes."
    }
  ];

  portfolio.data = Object.freeze({
    competences,
    experiences,
    progressionSteps
  });
})();
