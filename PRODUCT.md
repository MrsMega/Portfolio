# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Product Purpose

Portfolio personnel de Nathanaël Bayard : présenter son parcours en informatique,
ses réalisations, ses contributions et sa progression, avec des preuves reliées
aux compétences mobilisées.

Situation confirmée par le propriétaire le 23 octobre 2026 :

- Étudiant en troisième année de BUT Informatique.
- Actuellement en alternance chez Amiltone sur le projet Tick n Trip.
- Le portfolio a déjà été évalué. La préparation de cette évaluation et la
  recherche d'une alternance ne sont plus des objectifs actuels.

## Users

Les documents du dépôt identifient historiquement les enseignants évaluateurs,
les tuteurs ou jurys de stage et les recruteurs comme lecteurs du portfolio.
Le contenu doit aussi rester compréhensible pour une personne qui ne connaît
pas le référentiel du BUT Informatique.

La priorité actuelle entre les publics professionnels et universitaires reste
à préciser. Ne pas déduire de la recherche d'alternance passée une recherche
d'emploi actuelle.

## Operating Context

L’accueil approuvé présente la situation actuelle (BUT3 et alternance chez
Amiltone sur Tick n Trip), Caisse-Croûte en vedette, trois autres projets, les compétences
reliées aux preuves, le parcours et le contact. Les dossiers donnent accès aux
contributions, limites, ressources et liens de retour vers les compétences.
Le CV PDF actualisé (BUT3, alternance Amiltone sur Tick n Trip) reste accessible, avec un retour au portfolio et un lien
direct au document au-dessus du lecteur. Le reste de l’accueil décline l’établi
ouvert : compositions adaptées aux projets, index de preuves sur fond forêt,
parcours daté et formulaire sobre. Les dossiers conservent leurs contenus et
leurs ancres dans une présentation à filets.

La direction retenue est « l’établi des applications », avec un hero « établi
ouvert » : introduction horizontale, index des dossiers, capture réelle de
Caisse-Croûte et contribution accompagnée de deux légendes. La note d’atelier
conserve son texte dans un détail natif. La construction reste directement en
code, sans comp ni tirage, selon le plan validé ;
aucune nouvelle étape d’entretien ou de choix de concept n’est requise pour
cette livraison.

Les documents d'évaluation et de soutenance conservés dans `data/` décrivent le
contexte historique du portfolio. Ils servent de références sur les preuves et
la réflexion personnelle, sans constituer une nouvelle échéance d'évaluation.

## Capabilities and Constraints

Constats issus du code et de la documentation du dépôt :

- Site statique en HTML, CSS et JavaScript, sans framework ni bundler.
- `index.html` est la page principale ; `cv.html` affiche le CV PDF existant.
- `projet.html?projet=…` utilise un gabarit commun pour Caisse-Croûte, Flotto,
  Sleep Space Game et SmartCart. Les dossiers sont rendus côté navigateur par
  `scripts/project.js`, à partir des données existantes et du catalogue explicite
  des contributions ; ils nécessitent JavaScript pour leur lecture complète.
- Le contenu des expériences et compétences est centralisé dans
  `scripts/data.js` ; les paramètres et liens dans `scripts/config.js`.
- Les scripts partagent le namespace `window.Portfolio` et suivent un ordre
  de chargement explicite décrit dans `scripts/README.md`.
- `scripts/site.js` gère la navigation par sections, le menu mobile, la sélection
  des repères et légendes de la vedette (ancres sans JavaScript, commandes avec
  `aria-pressed` avec JavaScript), le dialog natif d’agrandissement des
  captures, le référentiel détaillé et le formulaire. Les preuves et compétences
  disposent de liens dans les deux sens. Le graphe et le terminal historiques
  ne sont plus chargés par les nouvelles surfaces ; leurs anciens fichiers
  ne définissent plus les fonctionnalités de l’accueil.
- Le formulaire de contact prévoit un envoi par Formspree si un endpoint est
  configuré, sinon la préparation d'un message dans le client mail. La livraison
  des messages n’a pas été vérifiée auprès du service réel : aucun envoi externe.
  La validation native des trois champs requis vides a été contrôlée.
- Préserver une architecture simple et maintenable ; ne pas ajouter de
  dépendance sans nécessité.
- Ne pas publier de données confidentielles, de secrets ou de preuves de stage
  ou d'alternance sans autorisation de partage.

## Brand Commitments

Le portfolio porte le nom de son propriétaire. Les textes actuels sont en
français, rédigés à la première personne et centrés sur des actions, des
apprentissages et des limites concrètes.
La direction confirmée est chaleureuse, ludique et personnelle ; ses composants
sont affirmés et chaleureux, avec un relief graphique structurant. La palette
papier/forêt et les familles typographiques existantes sont conservées.
Les règles visuelles de la livraison figurent dans `DESIGN.md`.

## Evidence on Hand

- `scripts/data.js` : présentations de Caisse-Croûte, Sleep Space Game,
  SmartCart et du stage sur Flotto chez Amiltone, avec rôles, apprentissages,
  compétences et ressources.
- `asset/` : portrait, logos, captures et CV PDF utilisés par le site.
- `data/mission&sae/` : documentation de conception et éléments sur les projets
  et missions de stage.
- `data/referentiel_competences.md` : référence pour les compétences du BUT.
- `data/evaluation-portfolio.md` et
  `data/12-synthese-portfolio-actionnable.md` : attentes de l'évaluation passée.

La présence de ces ressources ne garantit ni leur actualité, ni la disponibilité
des liens externes, ni leur autorisation de publication. Ne pas inventer de
résultats chiffrés, de témoignages ou de validation des compétences.

## Product Principles

- Relier chaque compétence mise en avant à une réalisation et à une preuve
  compréhensible.
- Distinguer la contribution individuelle du travail collectif et préciser les
  limites plutôt que surévaluer la maîtrise.
- Rendre le parcours lisible pour un lecteur extérieur au contexte universitaire.
- Distinguer les expériences historiques de la situation actuelle du propriétaire.
- Préserver la confidentialité des informations professionnelles.

## Open Decisions and Content Updates

- L’accueil affiche désormais la troisième année de BUT et l’alternance actuelle.
  Les données et documents historiques peuvent encore décrire le contexte de
  formation ou de stage de leur époque ; ils ne doivent pas être interprétés
  comme une recherche d’alternance actuelle.
- Le projet de l’alternance actuelle s’appelle Tick n Trip, nom confirmé par
  le propriétaire. Les missions, dates, technologies et résultats de cette alternance ne
  sont pas précisés. Ne pas attribuer automatiquement à l'alternance les missions
  du stage précédent sur Flotto.
- Une lecture adaptée à un professionnel extérieur au BUT a été proposée ;
  la hiérarchie durable des publics et les éventuelles échéances restent à
  préciser. Cela n’établit aucune recherche d’emploi actuelle.
- Flotto reste le stage 2026 ; Sleep Space Game reste une conception et une
  spécification. Aucun résultat mesuré ni mission d’alternance supplémentaire
  ne sont revendiqués.
- Aucun niveau de conformité d'accessibilité n'a été établi. Le code contient
  des libellés ARIA et une prise en compte de la réduction des animations ; cela
  ne constitue pas une validation d'accessibilité.


## Validation de la livraison

Contrôles rapportés : vues 1440×900, 1280×720 et 390×844 ; quatre dossiers sans
débordement ni image cassée ; anciens onglets au clavier (avant l’évolution du
hero) ; dialog avec Échap et retour
du focus ; menu mobile ; ancres entre preuves et compétences dans les deux sens.
Les 17 couples de contraste des usages contrôlés atteignent au moins 4.5:1.
Ce périmètre ne vaut ni audit d’accessibilité global, ni validation sur d’autres
navigateurs. Le formulaire a également été testé contre un serveur simulé
strictement local : attente avec bouton désactivé ; réponse 503 avec message
d’erreur français, texte conservé et bouton réactivé ; réponse 200 avec
confirmation, champs vidés et bouton réactivé. Ces essais utilisent des données
fictives et une configuration remappée en mémoire, sans modifier la production.
Aucun envoi externe, contrôle de livraison réelle ou déploiement. Le mobile a
été contrôlé par viewport, sans appareil physique ; la disponibilité et les
permissions des ressources externes restent non vérifiées. Détail des contrôles :
`.impeccable/review/validation.json`.
Les captures préexistantes sont inchangées ; leur provenance est enregistrée dans
`.impeccable/review/asset-origins.json`. Le CV PDF a ensuite été actualisé :
recherche d’alternance retirée, troisième année et projet Tick n Trip précisés.
Le profil et le statut utilisent Montserrat Regular incorporée, comme la famille
d’origine. Les dix séparateurs ont leurs extrémités alignées sur les marges de
chaque colonne. Les mentions BUT3 et Tick n Trip sont conservées. Le PDF a été
rendu puis vérifié visuellement ; les marges et la police du profil ont aussi
été contrôlées par extraction des objets PDF.
