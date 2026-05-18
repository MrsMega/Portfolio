# JavaScript Architecture

Le portfolio reste un site statique, sans bundler ni framework. Les fichiers sont
charges dans un ordre explicite depuis `index.html` et partagent uniquement le
namespace `window.Portfolio`.

- `config.js` : selecteurs DOM, breakpoints et preferences globales.
- `data.js` : contenu editable du portfolio.
- `render.js` : generation du HTML a partir des donnees.
- `interactions.js` : filtres, navigation active, reveal au scroll et terminal.
- `graph.js` : carte canvas et physique des noeuds.
- `main.js` : point d'entree qui initialise l'application.

Regles de maintenance :

- Ajouter ou modifier le contenu dans `data.js`.
- Eviter de generer du HTML depuis les fichiers d'interaction.
- Garder les selecteurs reutilises dans `config.js`.
- Ajouter une nouvelle fonctionnalite dans le fichier correspondant a sa
  responsabilite avant de toucher `main.js`.
