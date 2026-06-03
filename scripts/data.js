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
        "Ce projet montre ma capacit&eacute; &agrave; concevoir une exp&eacute;rience produit coh&eacute;rente, &agrave; justifier des arbitrages fonctionnels et &agrave; penser l'impact utilisateur sans pr&eacute;tendre produire un outil m&eacute;dical.",
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
      period: "Sprint 6 - Stage 2026",
      title: "Flotto",
      subtitle: "Apprentissage d'Angular au sein d'un projet concret",
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
        "Stage chez Amiltone, une ESN qui accompagne des entreprises dans la conception et l'&eacute;volution d'applications web. J'interviens sur Flotto, une application de gestion de parcs automobiles qui centralise des informations li&eacute;es aux v&eacute;hicules, trajets, r&eacute;servations, maintenances et param&egrave;tres de flotte. Cette premi&egrave;re contribution front m'a permis de travailler dans une base Angular existante.",
      role:
        "Intervention encadr&eacute;e sur un ticket front : comprendre l'existant, proposer une refactorisation, corriger les retours de recette et faire valider le r&eacute;sultat avec l'&eacute;quipe.",
      skills: ["R&eacute;aliser", "Collaborer", "Conduire"],
      proofs: [
        "Ticket Jira : [FRONT] Refactoriser les inputs date/heure en composants r&eacute;utilisables",
        "Deux composants Angular partag&eacute;s pour les champs de date et d'heure",
        "Corrections int&eacute;gr&eacute;es apr&egrave;s recette et validation par un d&eacute;veloppeur de l'&eacute;quipe"
      ],
      mission: {
        label: "Mission de stage - Ticket Jira",
        title: "[FRONT] Refactoriser les inputs date/heure en composants r&eacute;utilisables",
        summary:
          "Mission termin&eacute;e : harmonisation des champs date/heure, moins de duplication et un comportement plus fiable dans les formulaires.",
        context:
          "Les champs de date et d'heure &eacute;taient pr&eacute;sents dans plusieurs parcours de Flotto : v&eacute;hicules, trajets, r&eacute;servations, maintenance, param&egrave;tres et onboarding. Avant la mission, ils &eacute;taient impl&eacute;ment&eacute;s s&eacute;par&eacute;ment dans plusieurs &eacute;crans, ce qui rendait les corrections plus longues et pouvait cr&eacute;er des diff&eacute;rences de comportement.",
        objective:
          "Regrouper ces champs dans deux composants r&eacute;utilisables afin de centraliser leur rendu et leur comportement, sans modifier les r&egrave;gles m&eacute;tier existantes.",
        approach: [
          "Comparer les formulaires concern&eacute;s pour rep&eacute;rer les points communs et les cas particuliers.",
          "Construire deux composants communs capables de s'int&eacute;grer aux formulaires existants.",
          "Remplacer progressivement les anciens champs, puis corriger les retours observ&eacute;s en recette."
        ],
        difficulties: [
          "Trouver le bon &eacute;quilibre entre composant commun et besoins propres &agrave; certains formulaires.",
          "Conserver les usages attendus, comme la saisie au clavier ou les champs d&eacute;sactiv&eacute;s.",
          "Corriger des &eacute;tats d'erreur qui restaient affich&eacute;s alors que la valeur avait &eacute;t&eacute; modifi&eacute;e."
        ],
        result:
          "La mission est termin&eacute;e et valid&eacute;e. Flotto dispose maintenant de composants date/heure partag&eacute;s, ce qui rend le code plus homog&egrave;ne et facilitera les futures &eacute;volutions.",
        selfReview:
          "J'ai compris qu'une refactorisation doit &ecirc;tre test&eacute;e dans ses vrais contextes d'utilisation : une petite diff&eacute;rence entre formulaires peut suffire &agrave; cr&eacute;er une r&eacute;gression.",
        competences: [
          {
            competence: "R&eacute;aliser - AC21.03 / AC21.04",
            title: "Concevoir et valider une &eacute;volution maintenable",
            action:
              "Cr&eacute;ation de composants r&eacute;utilisables, puis int&eacute;gration progressive dans plusieurs formulaires.",
            proof:
              "Composants partag&eacute;s, formulaires mis &agrave; jour et corrections apr&egrave;s recette.",
            progress:
              "Mieux anticiper les cas &agrave; tester avant la recette et formaliser davantage les points de v&eacute;rification."
          },
          {
            competence: "Collaborer - AC26.02 / AC26.04",
            title: "S'int&eacute;grer dans un flux d'&eacute;quipe",
            action:
              "Prise en compte des retours de recette et validation du ticket avec un d&eacute;veloppeur de l'&eacute;quipe.",
            proof:
              "Corrections int&eacute;gr&eacute;es apr&egrave;s retours et mission valid&eacute;e.",
            progress:
              "Demander plus t&ocirc;t des retours cibl&eacute;s sur les points sensibles d'un composant partag&eacute;."
          }
        ]
      }
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
      evidence:
        "Caisse-Cro&ucirc;te mobilise les sp&eacute;cifications, les interfaces, les choix de conception et la qualit&eacute; attendue d'une application compl&egrave;te. La mission FLT-1517 sur Flotto ajoute le travail sur une base de code Angular existante, avec la cr&eacute;ation de composants partag&eacute;s et une validation dans plusieurs formulaires.",
      traces: ["Dossier SAE", "Maquettes", "Ticket Jira", "Composants date/heure partag&eacute;s", "Validation apr&egrave;s recette"]
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
      evidence:
        "La SAE montre une d&eacute;marche projet compl&egrave;te : objectif SMART, MoSCoW, EPIC, user stories, WBS, Gantt et maquettes. Le projet personnel montre aussi une capacit&eacute; &agrave; arbitrer un p&eacute;rim&egrave;tre. La mission Flotto ajoute la lecture d'un ticket professionnel, de ses crit&egrave;res d'acceptance et des v&eacute;rifications n&eacute;cessaires avant validation.",
      traces: ["Objectifs SMART", "MoSCoW", "EPIC et user stories", "Gantt", "Ticket FLT-1517", "Validation de recette"]
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
      evidence:
        "La SAE a &eacute;t&eacute; men&eacute;e en &eacute;quipe de quatre avec outils partag&eacute;s, r&eacute;partition des sujets et communication r&eacute;guli&egrave;re. Le stage enrichit cette comp&eacute;tence dans une organisation professionnelle : lecture d'un ticket, int&eacute;gration de retours de recette et validation avec un d&eacute;veloppeur de l'&eacute;quipe.",
      traces: ["GitLab de l'IUT", "Google Docs", "Fiche de suivi", "Retours de recette FLT-1517", "Validation par un d&eacute;veloppeur"]
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
        "Avec Flotto, j'ai travaill&eacute; sur un ticket Angular concret : refactoriser des champs date/heure utilis&eacute;s dans plusieurs formulaires. Cette mission m'a fait passer de la d&eacute;couverte d'une technologie &agrave; une contribution trac&eacute;e, test&eacute;e et valid&eacute;e."
    }
  ];

  portfolio.data = Object.freeze({
    competences,
    experiences,
    progressionSteps
  });
})();
