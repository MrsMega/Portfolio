# Mission de stage - Flotto

## Refactoriser les inputs date/heure en composants reutilisables

### Contexte

Cette mission a ete realisee pendant le sprint 6 de mon stage chez Amiltone, sur l'application Flotto. Flotto est une application web de gestion de parcs et de flottes de voitures.

Les champs de date et d'heure etaient utilises dans plusieurs parties du produit : formulaires vehicules, trajets, reservations, maintenance, parametres et onboarding. Avant mon intervention, ces champs etaient directement codes dans les templates avec `mat-datepicker` et `mat-timepicker`.

Cette solution fonctionnait, mais elle entrainait une duplication importante de code dans neuf templates, avec des classes CSS, des conventions de nommage et une gestion des erreurs parfois differentes selon les formulaires.

### Objectif

L'objectif du ticket Jira etait de creer deux composants partages dans le module commun de l'application :

- `app-date-input` pour les champs de date ;
- `app-time-input` pour les champs d'heure.

Ces composants devaient pouvoir etre utilises comme des champs Angular classiques dans les formulaires reactifs, notamment avec `formControlName`. Ils devaient aussi prendre en charge les parametres utiles comme `min`, `max` ou `disabled`, tout en harmonisant le rendu visuel, les etats de focus et les etats d'erreur.

Cette mission ne consistait pas a ajouter une fonctionnalite visible, mais a ameliorer la maintenabilite de l'existant sans modifier le comportement metier attendu.

### Probleme initial

Chaque occurrence reecrivait un bloc proche de celui-ci :

```html
<mat-form-field class="...">
  <input matInput [matDatepicker]="picker" formControlName="..." />
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
```

Les principaux problemes etaient :

- duplication de blocs date/heure dans plusieurs templates ;
- classes CSS incoherentes selon les vues ;
- usage variable de `matIconSuffix` et `matSuffix` ;
- conventions de nommage differentes pour les references de templates ;
- gestion des erreurs et des bordures visuelles non uniforme ;
- cas particulier dans `settings` avec une virgule dans l'attribut `class`.

### Fichiers concernes

- `reservation-form-fields.component.html`
- `journeys-form.component.html`
- `journeys-list.component.html`
- `maintenance-form-schedule.component.html`
- `cars-form.component.html`
- `cars-details.component.html`
- `settings.component.html`
- `onboarding-add-first-car.component.html`

### Demarche

1. Identifier tous les usages des champs de date et d'heure dans l'application.
2. Comparer les differences entre les formulaires pour eviter de creer un composant trop rigide.
3. Utiliser `ControlValueAccessor` afin que les composants personnalises s'integrent aux formulaires reactifs Angular.
4. Conserver Angular Material a l'interieur des nouveaux composants pour limiter les risques de regression.
5. Remplacer progressivement les anciennes implementations dans les templates concernes.
6. Adapter les imports, les bindings Angular et les regles SCSS.
7. Tester les composants dans plusieurs contextes fonctionnels.

### Verifications effectuees

| Element verifie | Objectif |
| --- | --- |
| Selection via calendrier ou selecteur d'heure | Verifier que les composants Angular Material restaient utilisables apres encapsulation. |
| Saisie manuelle au clavier | Verifier que l'utilisateur pouvait toujours saisir une valeur sans passer uniquement par le calendrier. |
| Contraintes `min` et `max` | S'assurer que les limites de dates continuaient a etre respectees. |
| Etat `disabled` | Verifier que les champs desactives ne pouvaient pas etre modifies. |
| Etats de focus et d'erreur | Controler l'affichage visuel des bordures, messages et retours utilisateur. |

### Difficultes rencontrees

La principale difficulte a ete de creer des composants assez generiques pour couvrir les usages existants sans imposer un comportement trop rigide. Certains formulaires avaient des besoins proches, mais pas strictement identiques.

Apres integration, plusieurs problemes sont apparus en recette :

- certaines dates ne pouvaient pas etre saisies correctement au clavier ;
- des bordures d'erreur restaient affichees alors que le champ semblait corrige ;
- l'etat d'erreur persistant pouvait empecher la validation du formulaire.

Ces retours ont montre qu'une refactorisation ne se valide pas uniquement avec la compilation du projet. Il faut aussi verifier les parcours reels et les cas d'usage complets.

### Solutions apportees

J'ai ajuste :

- la gestion des saisies manuelles ;
- la perte de focus ;
- la synchronisation avec les formulaires reactifs ;
- la gestion visuelle des erreurs ;
- la disparition des bordures rouges lorsque la valeur redevient valide.

### Resultat

La mission est terminee. Les corrections demandees apres recette ont ete integrees et validees par un developpeur de l'equipe.

Le projet dispose maintenant de deux composants partages pour les champs de date et d'heure. Le resultat reduit la duplication, rend le code plus homogene et facilitera les futures evolutions si l'equipe doit modifier le comportement ou le style de ces champs.

### Competences mobilisees

#### Realiser

- Creer deux composants Angular reutilisables.
- Utiliser `ControlValueAccessor`.
- Integrer les composants dans des formulaires reactifs.
- Verifier le comportement dans plusieurs contextes.

Preuves :

- `app-date-input`
- `app-time-input`
- remplacement des anciens champs dans les formulaires ;
- corrections apres recette.

#### Collaborer

- Comprendre un ticket Jira et ses criteres d'acceptance.
- Prendre en compte les retours de recette.
- Faire valider les corrections par un developpeur de l'equipe.

Preuves :

- ticket Jira associe ;
- retours de recette integres ;
- validation de la mission.

### Recul personnel

Cette mission m'a permis de mieux comprendre l'architecture d'une application Angular reelle. Elle m'a fait travailler sur les composants partages, les formulaires reactifs, les bindings, la gestion des etats et l'organisation du SCSS.

Elle m'a aussi appris a etre prudent avec les refactorisations : meme lorsqu'on ne change pas volontairement une regle metier, une modification technique peut provoquer des regressions si tous les cas d'usage ne sont pas verifies.
