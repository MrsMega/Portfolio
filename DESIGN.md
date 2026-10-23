---
name: "Portfolio de Nathanaël Bayard"
description: "Papier et forêt : un carnet d’atelier numérique chaleureux, ludique et personnel."
colors:
  paper: "#f2e8d5"
  paper-soft: "#e6d2b5"
  surface: "#fff7e8"
  surface-strong: "#ffd8ad"
  ink: "#1f2a24"
  ink-soft: "#3d4a42"
  muted: "#625e4e"
  line-soft: "#c8ad88"
  green: "#116c61"
  blue: "#28483f"
  white: "#fff7e8"
typography:
  display:
    fontFamily: "Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(2.6rem, 4.4vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-.035em"
  hero-display:
    fontFamily: "Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(2.8rem,4.7vw,4.25rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-.035em"
  featured-title:
    fontFamily: "Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(2rem,3vw,2.8rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(2.2rem, 3.1vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.025em"
  project-title:
    fontFamily: "Georgia, \"Times New Roman\", serif"
    fontSize: "2.1rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-.025em"
  body:
    fontFamily: "\"Segoe UI\", Aptos, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "\"Segoe UI\", Aptos, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: ".85rem"
    fontWeight: 650
    lineHeight: 1.6
  navigation:
    fontFamily: "\"Segoe UI\", Aptos, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: ".9rem"
    fontWeight: 400
    lineHeight: 1.6
  context:
    fontFamily: "\"Segoe UI\", Aptos, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: ".75rem"
    fontWeight: 400
    lineHeight: 1.4
  case-display:
    fontFamily: "Georgia, \"Times New Roman\", serif"
    fontSize: "clamp(2.6rem, 5vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-.035em"
rounded:
  square: "0"
  control: "6px"
  surface: "8px"
spacing:
  inline: ".5rem"
  stack: "1rem"
  card: "1.5rem"
  project-columns: "4rem"
  project-rows: "3rem"
  columns: "3.5rem"
  section: "5.5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: ".65rem .9rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: ".65rem .9rem"
  button-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.surface}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: ".85rem .25rem"
  input-focus:
    backgroundColor: "{colors.white}"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.navigation}"
    padding: ".7rem 0"
  navigation-current:
    textColor: "{colors.green}"
  menu:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: ".55rem .7rem"
  capture-pin:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    width: "44px"
    height: "44px"
  capture-pin-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  featured-stage:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  workshop-note:
    textColor: "{colors.ink-soft}"
    padding: ".8rem 0"
  proof-callout:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.square}"
    padding: "1.25rem 0"
  proof-index:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    padding: "1.25rem 0"
  image-viewer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "1rem"
    width: "min(1200px, calc(100% - 2rem))"
---

# Design System: Portfolio de Nathanaël Bayard

## Overview

**Creative North Star: "Le carnet d’atelier numérique"**

Le portfolio conserve son ambiance chaleureuse, ludique et personnelle. Le papier chaud, les titres Georgia et l’encre forêt donnent au carnet sa voix ; les captures et les contributions documentées donnent leur substance aux surfaces. Les composants restent affirmés et chaleureux ; le cadre d’encre, les filets et les états des contrôles portent le relief graphique.

La version livrée privilégie une composition aérée, des filets et des notes éditoriales. La vedette est ouverte, sans carte ni ombre portée ; son cadre d’encre distingue la capture. Les autres zones se distinguent surtout par les variations de papier et les séparations. Les intentions de page restent dans le contrat de surface, sans devenir une obligation pour chaque nouvelle page.

**Key Characteristics:**

- Papier chaud et encre forêt ; accents sarcelle lisibles.
- Georgia pour les titres, sans-serif pour les contenus et contrôles.
- Cadre d’encre autour de la capture ; filets pour les subdivisions.
- Composants rectangulaires, coins discrets, interactions courtes.

Source normative : `styles.css`, confrontée à `index.html`, `projet.html`,
`scripts/site.js` et `scripts/project.js`. Ce document réconcilie le système
antérieur avec le changement approuvé ; il ne modifie pas l’interface.
Le frontmatter contient les primitives, le compagnon v2 leurs extensions.
Les variables déclarées mais sans usage courant (`red`, `gold`, `line`,
`line-strong`, `shadow`) ne sont pas promues en rôles actifs. Les anciennes palettes du
terminal et du canvas n’appartiennent plus au système des surfaces livrées.

## Colors

Le papier est chaud, l’encre est forestière ; le sarcelle distingue les actions
et les mots accentués, sans remplacer le contraste principal.

### Primary

- **Encre forêt** (`ink`) : titres, texte principal, boutons sombres, cadres et fond du registre de compétences.
- **Vert sarcelle** (`green`) : liens, emphases des titres, état courant et focus.

### Secondary

- **Forêt profonde** (`blue`) : couverture Sleep, avec texte crème.

### Neutral

- **Papier parchemin** (`paper`) : fond principal et bandeau sticky.
- **Papier soutenu** (`paper-soft`) : contact et fonds de captures/couvertures.
- **Papier crème** (`surface`, alias `white`) : cartes, champs et texte clair des fonds sombres.
- **Papier abricot** (`surface-strong`) : primitive conservée, sans usage courant après la passe polish.
- **Encre secondaire** (`ink-soft`) : paragraphes, statut actuel, texte du contact et statut du formulaire.
- **Olive grisée** (`muted`) : dates, légendes et métadonnées sur les papiers suffisamment clairs.
- **Trait sable** (`line-soft`) : séparations de navigation, listes et dossiers.

**The Paper and Ink Rule.** Conserver l’encre et les papiers comme contraste principal ; réserver le sarcelle aux liens, accents typographiques et repères actifs.

Les nuances `green` et `muted` ont été assombries pour la lisibilité. Ne pas les
employer en petit texte sur `paper-soft`. Le contrôle réalisé porte sur
(17 couples texte/fond effectivement utilisés), tous au moins à (4.5:1) ;
il ne constitue pas un audit d’accessibilité global. Les rampes OKLCH du
compagnon sont **synthétiques, réservées à l’aperçu**, non normatives.

## Typography

**Display Font:** Georgia, Times New Roman, serif.

**Body Font:** Segoe UI, Aptos, system-ui, -apple-system, BlinkMacSystemFont, sans-serif.

**Label/Mono Font:** la même sans-serif pour les métadonnées ; la monospace native
du navigateur pour les courts codes du référentiel. Aucune police web chargée.

Le frontmatter donne les rôles observés ; aucune progression à ratio fixe n’est
établie. Le titre de dossier possède son propre rôle. Les titres de projet sont
Georgia, les h3 ordinaires sans-serif (1.3rem, interligne 1.3, graisse native
bold). Les contrôles sont en casse naturelle, sans famille globale de surtitres
en capitales. Les tailles des titres changent aux paliers décrits dans Layout.

### Hierarchy

- **Display** : rôle global des h1 hors adaptations locales.
- **Hero display** : titre d’accueil, maximum courant (4.25rem), largeur guidée par sa colonne.
- **Featured title** : titre de la vedette, maximum courant (2.8rem).
- **Headline** : titres des sections, maximum courant (3rem).
- **Project title** : titres des projets secondaires (2.1rem, Georgia 400), Flotto (2.75rem sur grand écran).
- **Body** : corps (1rem), paragraphes secondaires autour de (.85–.95rem) ; introduction (.91rem, 1.65 d’interligne, 48ch maximum), dossier (70–72ch).
- **Button** : (.85rem, 650) et hauteur **minimale** (44px), jamais hauteur fixe imposée au texte.
- **Context** : métadonnées (.75rem, interligne 1.4) ; dates (.78rem).
- **Case display** : titre de dossier, maximum (4.5rem), réduit à (2.8rem) sur téléphone.

**The Reading Voices Rule.** Employer Georgia pour les titres expressifs, la sans-serif pour les explications et les contrôles ; la monospace reste locale aux codes du référentiel.

## Layout

Conteneur centré (1180px maximum), largeur `min(calc(100% - 4rem), 1180px)`.
Le dossier limite sa largeur à (1040px). Le bandeau reste en haut du viewport
(sticky, top 0, z-index 50), hauteur minimale (88px) et filet inférieur.
Les sections ont un espace vertical de (5.5rem). Les valeurs de spacing
nomment des usages observés, sans imposer une grille arithmétique nouvelle.

L’introduction de l’accueil combine le titre et la biographie sur deux colonnes
(1.4fr / 1fr), séparées de (3rem), avec une marge basse (2.5rem). Le hero garde
une marge verticale (2rem / 3.5rem). L’établi aligne un index de dossiers (158px),
une capture fluide et une marge de contribution (222px), avec un intervalle
(1.5rem, soit 24px). Le titre et le lien du dossier précèdent la capture.
Les projets secondaires ont deux colonnes (intervalle horizontal 4rem, vertical 3rem).
La mission Flotto occupe une ligne complète, avec feuillet de mission et texte
côte à côte ; Sleep conserve un aperçu mobile sur fond forêt et SmartCart
présente une liste métier ouverte entre filets. Les couvertures ont une hauteur
(320px), le feuillet Flotto suit son contenu avec un minimum (250px). Les compétences combinent
(.85fr / 1.15fr), le contact (.8fr / 1.2fr), intervalle (5rem).
Le parcours est un registre de trois lignes. Chaque ligne répartit date, titre
et description sur (.65fr / 1fr / 1.4fr), avec (2.5rem) entre colonnes ; le lien
suit la description. Dans un dossier, sommaire
(200px) et contenu sont séparés de (3.5rem) ; le sommaire est sticky (top 7rem).
La galerie de dossier a trois colonnes et un intervalle de (1.25rem).

| Palier CSS | Adaptation livrée |
| --- | --- |
| max-width 1100px, hero | Introduction (1.2fr / 1fr), intervalle (2rem) ; titre `clamp(2.6rem,4.7vw,3.5rem)` ; établi (140px / fluide / 205px), intervalle (1rem) ; cadre de capture (7px). |
| max-width 900px, hero | Contribution et légendes sous la capture, en deux colonnes ; note d’atelier sur leur largeur. |
| max-width 1100px | Navigation resserrée ; grille projets (2.5rem d’intervalle), compétences/contact (3rem). |
| max-width 800px | Gouttière totale (2.5rem), bandeau (76px minimum) ; menu repliable avec JavaScript ; introduction en une colonne, titre `clamp(2.2rem,6vw,3.5rem)` ; index des dossiers horizontal sur quatre colonnes ; projets empilés mais chaque aperçu garde deux colonnes ; parcours avec date (125px) et texte ; compétences, contact et dossier en une colonne ; sommaire dans le flux, séparé par un filet inférieur ; sections (3.75rem). |
| max-width 520px | Gouttière totale (2rem), bandeau (68px minimum), navigation en deux colonnes ouverte ; titre d’accueil `clamp(1.9rem,8.6vw,2.6rem)`, titre vedette (2.15rem) ; index sur deux colonnes, contribution dans le flux et légendes sur deux colonnes, cadre (6px) ; projets en blocs, couvertures (300px), feuillets Flotto et SmartCart suivant leur contenu ; preuves et parcours empilés, champs et galerie en une colonne ; sections (3rem). |

La note marginale de l’index et celle des compétences sont masquées à
(800px) ; la note d’atelier reste disponible dans un `details` natif, sans
ratio imposé. Sans JavaScript, les repères restent des ancres entre capture et
légendes et les liens du menu restent visibles ; les dossiers annoncent leur
besoin de JavaScript et proposent des ressources documentaires. Le statut BUT3
figure dans la biographie, à droite du titre puis sous celui-ci sur mobile ; il
n’instaure pas une famille de kickers universelle.

## Elevation & Depth

L’établi de la vedette est plat et ouvert : filets pour séparer les zones,
cadre d’encre autour de la capture, sans ombre de carte. Les repères de capture
utilisent une petite ombre locale pour rester distincts de l’image. Les autres
sections privilégient des surfaces ouvertes et des filets. Le contact et les
liens documentaires restent sans ombre, y compris au survol ; les boutons du
hero et du dialog conservent leur état existant.

### Shadow Vocabulary

- **Repère de capture** : `0 2px 6px rgba(31,42,36,.2)`, séparation locale sur l’image.
- L’ancienne variable `--shadow` reste déclarée, sans usage livré ; elle ne définit plus la vedette.
- **Bouton survolé** : `3px 3px 0 var(--ink)`, aucune ombre au repos.
- **Focus clavier** : contour sarcelle (3px), décalage (5px), sans ombre.
- **Capture agrandie** : voile `rgba(31,42,36,.85)` ; la fenêtre utilise un contour d’encre (2px).

**The Structural Relief Rule.** Articuler l’établi par les filets et le cadre d’encre ; conserver le relief des contrôles dans leurs états établis.

Les transitions d’état sont courtes (160ms ease), les flèches de projet se
translatent au survol ou au focus (180ms ease-out). Le visuel Sleep est fixe.
La préférence de réduction des animations neutralise ces durées. La sélection des repères ne possède que des transitions de couleur et d’opacité
(180ms ease-out), sous `prefers-reduced-motion: no-preference`, sans animation
continue. Aucune lueur de terminal ni animation canvas n’est une règle actuelle.

## Shapes

Les surfaces sont rectangulaires : coins de surface (8px), contrôles et encarts
(6px). Le dialog garde son contour (2px) ; boutons et champs (1px). Le cadre de la
capture vedette est rectangulaire sans arrondi (10px, puis 7px et 6px aux paliers
décrits dans Layout), ses repères circulaires (44px) ont un contour (2px). Les portraits sont circulaires. Les couvertures et les champs du contact
sont rectangulaires ; les repères décoratifs de la frise ne sont plus utilisés. Les couvertures recadrent leur contenu ; les captures de
dossier gardent leurs proportions avec `object-fit: contain`.

## Components

### Buttons

Affirmés, compacts et chaleureux : encre/crème pour le principal, crème/encre
pour le secondaire ; marges du frontmatter et hauteur **minimale** (44px).
Au survol : fond sarcelle, texte crème et petite ombre franche. Focus commun
sarcelle ; bouton désactivé (opacité .65, curseur wait), sans ombre.
Aucun nouvel état « actif » pressé n’est défini par le CSS.

### Inputs / Fields

Dans le contact, les champs simples ont un fond transparent, une ligne d’encre
inférieure (1px), des angles droits et une marge (.85rem .25rem). Leur focus
passe au papier crème et conserve le contour sarcelle visible. Les placeholders
utilisent l’encre secondaire sur le papier soutenu, comme le statut. Le champ
multiligne garde son contour d’encre complet, une marge (1rem) et une hauteur
minimale (150px). Labels (.85rem, 650), texte (.95rem), statut (.85rem). Le statut
réserve (1.5em) de hauteur ; erreur en encre, graisse (650). Validation native,
envoi et conservation du texte en cas d’erreur inchangés.

### Navigation

Bandeau papier avec filet, liens (.9rem), survol/état courant sarcelle souligné.
Le CV ajoute un contour et des coins de contrôle. À (800px), le bouton Menu
commande `aria-expanded` ; Échap ferme le menu et lui rend le focus, et un lien
referme le menu. À (520px), les liens ouverts forment une grille de deux colonnes.
Le lien d’évitement apparaît au focus. Pas de puces ou filtres d’expériences dans
l’interface livrée : les anciennes familles ne sont pas des primitives courantes.

### Cards / Containers

La vedette reste ouverte sur le papier, avec un filet supérieur et un index
séparé par un filet sable ; la capture porte un cadre d’encre et une légende
crème sur encre. La contribution et les notes suivent la grille de Layout.
Les aperçus secondaires restent ouverts, séparés par les espaces et adaptés
aux traces disponibles. Les encarts de preuve sont des passages de texte entre
deux filets sable, fond transparent et marge (1.25rem 0).
Aucun mouvement de carte générique n’est établi.

Dans le hero, les petits libellés de l’index, l’invitation à agrandir et la
légende sous la capture gardent (.75rem, soit 12px) à tous les paliers. Leurs
marges conservent l’air de lecture : invitation (.5rem .65rem), légende
(.5rem .8rem .75rem), puis (.5rem .65rem .65rem) sur téléphone. Cette règle
locale ne change pas l’échelle typographique des autres sections.

### Capture annotations and workshop note

Deux repères numérotés (44px) et leurs légendes relient progression et équipements
à la capture réelle intacte. Les ancres fonctionnent sans JavaScript ; avec
JavaScript, elles exposent `role="button"` et `aria-pressed`. Entrée et Espace
sélectionnent le repère, la zone et la légende associée ; la progression est
sélectionnée initialement. La sélection passe encre/crème ; le focus sur l’image
est crème (3px), décalé de (3px). Les textes des légendes restent visibles.
Chaque note garde un retrait supérieur (.5rem, soit 8px) et inférieur (.65rem).

« Note d’atelier » est un `details` natif, avec résumé de hauteur minimale (44px),
filet d’encre et contenu sur le papier, marge intérieure verticale (.8rem).
Le texte existant est conservé, titre Georgia (1.35rem), texte secondaire
(.8rem) en encre secondaire, lien sarcelle vers la preuve de conception.

### Proof index and dossiers

L’index de preuves est un registre sur fond encre, avec textes crème et papier.
Les titres Georgia (1.2rem, 400) distinguent les actions ; le nom du projet
(.75rem) reste secondaire. Lignes séparées de filets sable, marges verticales
(1.25rem). Le survol souligne le titre ; le focus est crème (3px). Le référentiel
natif conserve cette palette lorsqu’il est déplié, sans nouveaux panneaux.
Les liens retour ouvrent toujours la compétence précise.

Dans les dossiers, le sommaire a un filet droit et des liens de (44px minimum) ;
sur petit écran il rejoint le flux avec un filet inférieur. Les captures ont un
cadre d’encre (8px), sans arrondi. Ressources et preuves sont des liens textuels
soulignés, sans boutons flottants. Retour initial et liens de fin de dossier
gardent une cible de (44px minimum). Les identifiants des preuves restent stables.

Le lecteur de CV utilise le même papier et Georgia dans sa barre d’outils.
« Retour au portfolio » et « Ouvrir le PDF » restent visibles au-dessus du
document original. Le lecteur occupe la hauteur restante du viewport dynamique ;
la barre se replie sur téléphone. Le PDF lui-même n’est pas modifié et son lien
direct reste accessible indépendamment du lecteur intégré.

### Image viewer

Dialog natif, largeur `min(1200px,calc(100% - 2rem))`, hauteur bornée au viewport,
coins de surface, contour d’encre et fond crème. Bouton Fermer et Échap ; la
fermeture restitue le focus au lien d’origine. L’image n’est ajoutée qu’à
l’ouverture, puis retirée. Le body est bloqué au défilement quand le dialog est
ouvert. Sur mobile, l’invitation à agrandir reste visible.

## Do's and Don'ts

### Do:

- **Do** reprendre les variables CSS et les rôles du frontmatter avant de créer une nouvelle valeur.
- **Do** conserver les états de focus visibles et les contrôles de hauteur minimale (44 px) là où ils sont déjà établis.
- **Do** conserver des captures réelles, des contributions explicites et des notes lisibles sur les fonds sombres.
- **Do** utiliser l’encre secondaire pour les petits textes du contact sur papier soutenu.

### Don't:

- **Don’t** utiliser `green` ou `muted` en petit texte sur `paper-soft` : ces associations ne sont pas validées à (4.5:1).
- **Don’t** rétablir les palettes hacker, le terminal à commandes ou le canvas comme familles du système actuel.
- **Don’t** réintroduire une ombre de carte dans l’établi ouvert de la vedette.
- **Don’t** imposer une carte identique aux missions, captures, compétences et étapes du parcours.
- **Don’t** traiter les rampes synthétiques du compagnon comme des couleurs livrées ou approuvées.

Contrôles rapportés pour cette livraison : vues (1440×900), (1280×720),
(390×844), quatre dossiers sans débordement ni image cassée, anciens onglets au clavier (avant cette évolution),
dialog avec Échap et restitution du focus, menu mobile et aller-retour des ancres
preuves/compétences. Les trois champs requis vides ont déclenché leur validation
native. Le formulaire a aussi été vérifié contre un serveur simulé strictement
local : bouton désactivé pendant l’attente ; réponse (503) avec texte conservé,
erreur française et bouton réactivé ; réponse (200) avec confirmation, champs
vidés et bouton réactivé. Les données étaient fictives ; la configuration de
production n’a pas été modifiée. Aucun envoi externe ni contrôle de livraison
réelle, aucun autre navigateur ni audit global d’accessibilité n’est attesté.
Le mobile a été contrôlé par viewport, sans appareil physique. Le détail des
contrôles figure dans `.impeccable/review/validation.json`.
Pour l’évolution de l’établi : huit largeurs (320, 390, 520, 732, 800, 900,
1280 et 1440px) sans débordement ; sélection des repères avec Entrée/Espace ;
note native ouverte au clavier ; zoom avec Entrée, Échap et retour du focus ;
menu mobile ouvert puis fermé par Échap. `node --check` et `git diff --check`
réussis ; sections à partir de `#projets` identiques octet pour octet à la
baseline. Les couples de couleurs du hero calculés vont de (5.17:1 à 13.94:1).
Captures finales : `.impeccable/review/hero-1440.png`, `hero-1280.png`,
`hero-800.png`, `hero-390.png`, `hero-320.png`, `desktop.png` et `mobile.png` ;
mesures dans `.impeccable/review/viewport-checks.json`. Les captures
`hero-selection.png` et `hero-note.png` montrent le second repère et la note
ouverte avant le dernier ajustement de lisibilité ; leur interaction est inchangée.
Les captures principales ont été renouvelées avec `styles.css?v=etabli-ouvert-3`.
Les mesures DOM dans `.impeccable/review/legibility-checks.json` confirment
un texte visible de (12px minimum), le retrait supérieur des notes (8px) et
l’absence de débordement aux largeurs (1440, 1280, 800, 390 et 320px).
Une fixture locale sans scripts a confirmé les ancres et l’ouverture
clavier du détail (`.impeccable/review/no-script-checks.json`). La réduction des
animations a été vérifiée dans le code et les règles CSSOM, sans émulation navigateur ; aucun test
avec lecteur d’écran ni vérification sur plusieurs navigateurs n’est attesté.
Les assets préexistants restent inchangés ;
leur provenance figure dans `.impeccable/review/asset-origins.json`.

Non canonisé : les anciens composants terminal/canvas et leurs effets ne sont
plus chargés. Le statut BUT3 conserve sa place dans la biographie de l’accueil ; cette
exception de composition n’est pas une nouvelle règle visuelle à généraliser.


Passe polish du reste du portfolio : contrôle aux largeurs (320, 390, 520, 800,
900, 1280, 1440px), sans débordement ni image cassée. Quatre dossiers vérifiés à
(1440 et 390px). Parcours clavier accueil → preuve Flotto → référentiel ouvert
sur la compétence contrôlé ; les ancres ne sont pas masquées par le bandeau.
Les 89 éléments textuels de l’index et du référentiel déplié contrôlés ont un
contraste minimum (10.07:1). Validation native du formulaire vide vérifiée sans
envoi, scripts fonctionnels inchangés. Le retour du CV et l’accès au PDF original
sont présents ; la compatibilité du lecteur PDF n’est pas certifiée sur plusieurs
navigateurs. La réduction des animations reste inspectée dans les règles CSS ;
pas d’émulation de préférence, d’appareil physique ni de test avec lecteur d’écran.
Preuves : `.impeccable/review/polish/`.
