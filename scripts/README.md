# Architecture du portfolio

Le site reste statique, sans framework, bundler ni dépendance à installer.
Pour le consulter localement depuis la racine :

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Ouvrir ensuite `http://127.0.0.1:8765/`.

## Pages et scripts actifs

- `index.html` : accueil éditorial, projet vedette, sélection de réalisations,
  index de preuves, parcours et formulaire de contact.
- `projet.html?projet=<identifiant>` : gabarit commun des quatre dossiers.
  Identifiants : `caisse-croute`, `flotto`, `sleep-space-game`, `smartcart`.
- `cv.html` : lecteur du CV PDF existant, retour au portfolio et accès direct au PDF.
- `styles.css` : système papier/forêt partagé, établi ouvert, compositions de projets,
  index de preuves, registre de parcours, contact et dossiers. Le hero et les
  scripts fonctionnels sont préservés par la passe polish.
- `config.js` : coordonnées du formulaire, liens du profil et paramètres partagés.
- `data.js` : contenu des expériences, missions, compétences et apprentissages.
- `project.js` : sélection du dossier, mise en forme du contenu et liens de preuve.
- `site.js` : navigation mobile, sélection des repères de la vedette, captures agrandissables,
  référentiel dépliable et formulaire. Les pages partagent `window.Portfolio`.

Les scripts sont chargés avec `defer`, dans l’ordre configuration, données,
script de dossier si nécessaire, puis interactions partagées. Les modules
`main.js`, `render.js`, `interactions.js` et `graph.js` de l’ancienne page restent
conservés dans le dépôt ; ils ne sont plus chargés par ces pages.

## Mettre le contenu à jour

- Modifier les descriptions longues dans `data.js` et les résumés de l’accueil
  dans `index.html`.
- Conserver la correspondance des quatre entrées `catalog` de `project.js` avec
  les expériences de `data.js` si leur ordre est changé.
- Garder les identifiants de preuve stables : `preuve-conception`,
  `preuve-dates`, `preuve-tableaux`, `preuve-parcours`, `preuve-architecture`.
- Les liens de retour vers `index.html#competence-…` ouvrent automatiquement
  le référentiel avant de rejoindre la compétence.
- Les repères de la vedette sont des ancres sans JavaScript. `site.js` les enrichit
  en commandes `aria-pressed` : Entrée/Espace sélectionnent la zone et sa légende.
  La note d’atelier utilise un `details` natif ; les légendes restent visibles.
- Les captures s’ouvrent dans un dialogue natif ; sans JavaScript, les liens
  restent des accès aux images originales.
- Flotto décrit le stage 2026. L’alternance actuelle porte sur Tick n Trip ;
  ses missions ne doivent pas être déduites de celles du stage.
- Sleep Space Game est présenté comme un travail de conception/spécification.

## Contact et vérifications

L’endpoint Formspree et les liens CV/LinkedIn restent dans `config.js`. Sans
endpoint, le formulaire prépare un e-mail dans le logiciel de messagerie.
Un échec conserve le texte saisi. Sans JavaScript, l’envoi est désactivé et
un lien LinkedIn est proposé.

Vérifications locales sans dépendance :

```sh
node --check scripts/site.js
node --check scripts/project.js
git diff --check
```

Pour vérifier le formulaire, ne pas déclencher d’envoi réel sans autorisation.
Tester les champs obligatoires, puis utiliser un environnement de test pour
les réponses réseau. Les notes et captures Impeccable sont des éléments de
travail, pas des ressources à publier avec le site.
