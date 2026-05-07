# Dossier de conception

## SAE S3-S4 Développement d’une application

**G2S3B BAYARD Nathanaël - BUEB Séléna - HERNANDEZ Julie - LOPEZ Nicolas**

Projet : **Caisse-Croûte**  
Slogan : **Caisse-Croûte, croque la victoire !**

---

# Sommaire

I. Description du projet 3  
A. Contexte 3  
B. Périmètre 3  
C. Objectifs 4  
D. Définition des fonctionnalités 4  

II. Diagrammes 5  
A. Diagramme de cas d’utilisation 5  
B. Diagramme de séquence 5  
C. Diagramme de classe 6  

III. Planification du projet 7  
A. Découpage du projet 7  
B. Méthodes Agile 8  
C. Diagramme de Gantt 10  

IV. Maquettes 10  

V. Technologies 12  
A. Analyse de l’existant et comparaisons 12  
B. Choix technologiques du projet 13  

---

# I. Description du projet

## A. Contexte

Ce projet est réalisé dans le cadre de la SAE Développement d’une application englobant les 2 semestres de deuxième année du BUT. Les objectifs principaux du projet sont d’apprendre à travailler en équipe, d’apprendre à gérer un projet de sa conception jusqu’à son développement et sa présentation, et de mettre en œuvre les connaissances acquises en cours dans un contexte pratique.

Les acteurs du projet sont :

- BAYARD Nathanaël
- BUEB Séléna
- HERNANDEZ Julie
- LOPEZ Nicolas

Nous faisons partie du G2S3B.

Un premier prototype du projet doit être présenté en décembre. Le projet doit pouvoir être fonctionnel à la fin du 1er semestre, en janvier 2026. Les améliorations qu’il faudra apporter seront réalisées lors du second semestre et le rendu final sera courant mars-avril 2026, avant la période dédiée au stage.

## B. Périmètre

Les enjeux du projet sont multiples. Tout d’abord, nous devons nous démarquer des projets des étudiants des années précédentes et de ce qui existe déjà sur Internet. Ensuite, nous devons proposer un projet en accès libre sur Internet parfaitement fonctionnel et sécurisé.

Nous sommes cependant soumis à plusieurs contraintes que nous devons impérativement respecter :

- utiliser une base de données
- utiliser un serveur afin d’héberger le projet
- utiliser en priorité les langages de programmation vus en cours
- adopter un modèle de développement du projet selon les méthodes Agile
- utiliser GitLab de la forge de l’IUT pour travailler en collaboration sur le projet
- utiliser un outil de gestion de projet auquel notre enseignant tuteur aura accès, notamment la fiche de suivi du projet

## C. Objectifs

Afin de définir des objectifs précis, nous utilisons la méthode SMART. Nous sommes ainsi arrivés à cette conclusion :

L’objectif spécifique du projet est de créer un jeu de cuisine et d’ouverture de loot boxes original sous la forme d’un site internet, aussi appelé jeu par navigateur, en tenant compte des contraintes imposées.

Le plus pertinent pour nous est de créer un jeu permettant d’avoir assez de matière pour travailler à 4 collaborateurs dessus et mais aussi qui nous plaise. Ensuite, afin de mesurer l’atteinte des objectifs, nous souhaitons que l’utilisateur reste connecté plus de 10 minutes.

Le niveau d’atteinte des objectifs est la mise en place et le bon déroulement pour les utilisateurs des fonctionnalités principales du projet : pouvoir se connecter et créer un compte, créer des recettes, accéder à l’inventaire, ouvrir des loot boxes et pouvoir avoir un marché avec les autres joueurs.

Au niveau temporel, le projet doit être terminé pour le 19 janvier 2026. Des améliorations seront apportées après cette date et devront être présentées en mars-avril 2026.

## D. Définition des fonctionnalités

Nous définissons des fonctionnalités précises et nous les classons selon la méthode MoSCoW.

### Must (vital)

- gérer l’inscription et la connexion de l’utilisateur
- créer les 4 types de loot boxes
- créer les recettes
- créer l’inventaire

### Should (essentiel)

- créer le marché de vente des recettes, affichage des produits, outil de recherche
- gérer la récupération de l’énergie d’ouverture des loot boxes, fouets, en fonction du temps
- gérer le nombre de fouets et de pièces, BaldCoins

### Could (confort)

- définir les probabilités en fonction des paliers de recettes, du niveau et surtout du nombre de loot boxes ouvertes
- créer les possibilités d’achat et de revente de certains objets de l’inventaire, shop administrateur

### Won’t (luxe)

- pouvoir acheter des fouets grâce aux BaldCoins

---

# II. Diagrammes

## A. Diagramme de cas d’utilisation

Voici le diagramme de cas d’utilisation de notre jeu intitulé « Caisse-Croûte ».

### Contenu du diagramme de cas d’utilisation

Système : **Système de Caisse-Croûte**

Acteurs :

- Joueur
- Système de gestion de la base de données

Cas d’utilisation visibles dans le diagramme :

- Créer un compte
- Se connecter
- Réaliser une recette
- Acheter/vendre des ingrédients/recettes entre joueurs
- Vérifier la disponibilité des ingrédients/recettes
- Ouvrir une lootbox
- Ouvrir l’inventaire
- Acheter des ingrédients au shop administrateur

Relations visibles :

- `Se connecter` étend `Créer un compte` avec la relation `<<extend>>`.
- `Réaliser une recette` inclut `Vérifier la disponibilité des ingrédients/recettes` avec la relation `<<include>>`.
- `Acheter/vendre des ingrédients/recettes entre joueurs` inclut `Vérifier la disponibilité des ingrédients/recettes` avec la relation `<<include>>`.
- Plusieurs cas d’utilisation sont reliés au système de gestion de la base de données, notamment la vérification de disponibilité, l’ouverture d’une lootbox, l’ouverture de l’inventaire et l’achat au shop administrateur.

## B. Diagramme de séquence

Le diagramme de séquence que nous avons choisi de représenter est celui de l’ouverture d’une loot box par le joueur.

### Contenu du diagramme de séquence

Participants :

- Joueur
- Navigateur
- Serveur
- Service de loot
- Base de données

Déroulement visible :

1. Le joueur clique sur **« Ouvrir boîte »**.
2. Le navigateur envoie au serveur une demande d’ouverture de boîte : `Demande ouverture de boîte (boxId, userId)`.
3. Le serveur vérifie dans la base de données que le joueur possède l’argent nécessaire.
4. La base de données renvoie le résultat de la vérification : `true/false`.
5. Le serveur demande au service de loot d’effectuer le tirage aléatoire.
6. Le service de loot renvoie les ingrédients gagnés.
7. Le serveur ajoute les ingrédients à l’inventaire du joueur dans la base de données.
8. Le serveur renvoie une réponse au navigateur.
9. Le navigateur affiche l’animation et le résultat au joueur.

## C. Diagramme de classe

Le diagramme de classe de notre projet est représenté ci-dessous.

### Classes visibles dans le diagramme

#### Transaction

Attributs :

- `id : int`
- `acheteurid : int`
- `vendeurid : int`
- `annonceid : int`
- `ingredientid : int`
- `quantite : int`
- `montant : int`
- `date : Date`
- `etat : string`

Relations visibles :

- relation avec `Utilisateur` : acheteur
- relation avec `Utilisateur` : vendeur
- relation avec `Annonce`

#### Utilisateur

Attributs :

- `id : int`
- `pseudo : String`
- `email : String`
- `motDePasse : String`
- `role : String`
- `dateCreation : Date`
- `nbpieces : int`
- `nbfouets : int`
- `nivUtilisateur : int`
- `BoitesOuvertesParType : int`

Méthodes :

- `supprimerCompte()`
- `modifierProfil()`
- `s’inscrire()`
- `seConnecter()`

Relations visibles :

- peut ouvrir une `Boite`
- peut faire des `Recette`
- possède un `Inventaire`
- génère des `Log`
- publie des `Annonce`
- intervient comme acheteur ou vendeur dans une `Transaction`

#### Recette

Attributs :

- `id : int`
- `nom : String`
- `resultatIngredientid : int`
- `quantiteRequise : int`

Méthode :

- `creerRecette()`

Relation visible :

- est stockée dans `Inventaire`
- peut être faite par `Utilisateur`

#### Boite

Attributs :

- `id : int`
- `nom : String`
- `rarete : int`
- `prix : int`
- `ingredientid : int`
- `poids : double`
- `quantiteMin : int`
- `quantiteMax : int`

Méthode :

- `ouvrirBoite(userid : int) : List<Ingredient>`

Relations visibles :

- peut être ouverte par `Utilisateur`
- est composée d’`Ingredient`

#### Annonce

Attributs :

- `id : int`
- `vendeurid : int`
- `ingredientid : int`
- `quantite : int`
- `prix : int`
- `dateCreation : Date`
- `Statut : string`

Méthodes :

- `publier()`
- `retirer()`

Relations visibles :

- est publiée par `Utilisateur`
- est liée à `Transaction`
- concerne un `Ingredient`

#### Log

Attributs :

- `id : int`
- `type : String`
- `utilisateurid : int`
- `message : string`
- `date : Date`

Relation visible :

- est généré par `Utilisateur`

#### Inventaire

Attributs :

- `id : int`
- `utilisateurid : int`
- `ingredientid : int`
- `quantite : int`
- `dateAcquisition : Date`

Méthodes :

- `ajouter(qty : int)`
- `consommer(qty : int)`

Relations visibles :

- est possédé par `Utilisateur`
- stocke des `Ingredient`
- stocke des `Recette`

#### Ingredient

Attributs :

- `id : int`
- `nom : String`
- `type : String`
- `rarete : int`
- `meta : string`

Méthode :

- `getDescription()`

Relations visibles :

- compose les `Boite`
- est stocké dans `Inventaire`
- est concerné par une `Annonce`

---

# III. Planification du projet

## A. Découpage du projet

Ci-dessous vous pouvez consulter le découpage WBS de notre projet.

### Découpage WBS visible

Projet principal : **Projet SAE - Jeu de cuisine et lootboxes (caisse croute)**

#### Authentification et Profil

- Page de présentation du jeu
- Page de connexion
  - connexion
  - Inscription
  - Lien base de données
  - Réinitialisation du mot de passe
- Profil joueur
  - Modification pseudo
  - Modification photo de profil
  - Suppression de compte

#### Lootboxes et tirages

- Liste des lootboxes
- Ouverture d’une lootbox
- Tirage aléatoire côté serveur
- Configuration lootboxes, admin

#### Inventaire/gestion et market

- Page inventaire
  - Tri / filtrage
  - Affichage des quantités

#### Crafting / Recettes

- Liste des recettes
- Fabrication d’une recette
- Vérification ingrédients
- CRUD recettes, admin

#### Marketplace et échanges

- Tri / filtrage
- Affichage des quantités du prix et du nombre restant
- Ajout dans l’inventaire
- Vente d’objets
- Liste des annonces
- Achat d’objets
- Gestion des annonces
- Transactions et soldes
- Shop administrateur
- Gestion litiges / rollback

## B. Méthodes Agile

Le projet est conduit grâce aux méthodes Agile. Le Scrum Master est Christophe JALOUX. Le Product Owner du projet est lui aussi Christophe JALOUX. L’équipe de réalisation est composée de Nathanaël BAYARD, Séléna BUEB, Julie HERNANDEZ et Nicolas LOPEZ.

Les Keys Users font partie de l’entourage plus ou moins proches des membres de l’équipe de réalisation, que ce soient les camarades ou la famille.

Le projet peut être découpé en besoins élémentaires, EPIC, puis en User stories.

### EPIC 1 — Authentification et Profil

1. En tant que visiteur, je veux m’inscrire avec un email et un mot de passe afin de créer un compte joueur.
2. En tant qu'utilisateur, je veux me connecter avec mon email et mon mot de passe afin d' accéder à mon compte.
3. En tant qu'utilisateur, je veux pouvoir réinitialiser mon mot de passe, email de récupération, afin de retrouver l’accès à mon compte en cas d’oubli.
4. En tant que joueur, je veux modifier mon pseudo et ma photo de profil afin de personnaliser mon compte.
5. En tant que joueur, je veux supprimer mon compte afin de retirer définitivement mes données si je le souhaite.

### EPIC 2 — Lootboxes et tirages

1. En tant que joueur, je veux voir la liste des loot boxes disponibles afin de choisir laquelle ouvrir.
2. En tant que joueur, je veux ouvrir une loot box et recevoir des items aléatoires afin d' obtenir des ingrédients pour le craft.
3. En tant que système, je veux assurer le tirage aléatoire côté serveur afin d'éviter la triche côté client.
4. En tant qu’administrateur, je veux configurer la composition et les probabilités d’une loot box afin de changer l’équilibrage du jeu.

### EPIC 3 — Inventaire et gestion des possessions

1. En tant que joueur, je veux voir mon inventaire avec les quantités d’ingrédients afin de savoir ce que je possède.
2. En tant que joueur, je veux utiliser un ingrédient afin de l’employer dans une recette.
3. En tant que joueur, je veux trier et filtrer mon inventaire, par rareté, type, date, afin de gérer plus facilement mes ressources.

### EPIC 4 — Crafting / Recettes

1. En tant que joueur, je veux consulter la liste des recettes disponibles afin de savoir quelles combinaisons je peux fabriquer.
2. En tant que joueur, je veux lancer la fabrication d’une recette afin de consommer les ingrédients et obtenir le résultat.
3. En tant que système, je veux vérifier que le joueur possède les quantités nécessaires afin de bloquer la fabrication en cas d’insuffisance.
4. En tant qu'administrateur, je veux créer / éditer / supprimer des recettes afin de mettre à jour le contenu du jeu.

### EPIC 5 — Marketplace et échanges

1. En tant que joueur, je veux mettre en vente un item de mon inventaire à un prix défini afin de le proposer aux autres joueurs.
2. En tant que joueur, je veux voir la liste des annonces actives sur le marketplace afin d' acheter des items proposés par d’autres joueurs.
3. En tant qu'acheteur, je veux acheter une annonce et payer le vendeur afin de recevoir l’item dans mon inventaire.
4. En tant que vendeur, je veux retirer ou modifier une annonce active afin de gérer mes ventes.
5. En tant que système, je veux enregistrer les transactions et soldes, si monnaie interne, afin de garantir la traçabilité financière.
6. En tant qu'admin, je veux publier des articles via un MarketPlace officiel, admin shop, afin d'approvisionner le marché.
7. En tant que système, je veux prévoir un mécanisme de résolution des conflits, litiges / rollback, afin de gérer les erreurs de transaction.

## C. Diagramme de Gantt

Ci-dessous, vous pouvez consulter le diagramme de Gantt associé au projet.

### Contenu visible du diagramme de Gantt

Période organisée en 5 sprints :

- Sprint 1 : 20/10, 27/10, 3/11
- Sprint 2 : 10/11, 17/11, 24/11
- Sprint 3 : 1/12, 8/12
- Sprint 4 : 15/12, 22/12, 29/12, 5/1
- Sprint 5 : 12/1, 19/1

Tâches visibles :

- Création de la base de données, tables + relations
- Remplissage de la base de données
- Réalisation de la page d’accueil avant la connexion
- Réalisation de la page de connexion
- Réalisation de la page de création de compte
- Réalisation de la page d’accueil après la connexion
- Réalisation des lootboxes, contenu, animation, probabilités
- Réalisation de la page de l’inventaire
- Réalisation de la page du MarketPlace
- Réalisation de la page du shop admin
- Gestion des fouets avec l’heure du serveur d’hébergement
- Gestion des niveaux, fouets et BaldCoins
- Mise en lien de chaque page concernée avec la base de données
- Tests avec le serveur d’hébergement

---

# IV. Maquettes

Ci-dessous vous pouvez observer les maquettes principales de notre jeu Caisse-Croûte.

## Menu de connexion

Ici nous avons imaginé le menu de connexion au jeu.

### Éléments visibles dans la maquette du menu de connexion

Formulaire d’inscription :

- Titre : **S’inscrire**
- Champ : **Nom d’utilisateur**
- Champ : **Mail**
- Champ : **Mot de passe**
- Champ : **Confirmation mot de passe**
- Lien : **Se connecter**
- Bouton : **S’inscrire**

Logo affiché sur la partie droite : **CAISSE CROÛTE**.

## Menu d’accueil, loot boxes et recettes

Maintenant en arrière-plan on peut observer le menu d’accueil avec les différentes loot boxes, leur prix etc. Puis sur le côté on voit notre menu de recettes qui lorsqu’on clique sur une recette l’ouvre et nous permet de la créer. Par la suite nous imaginons peut-être créer un autre menu qui nous permettra de faire glisser les ingrédients nécessaires à la réalisation de la recette, pour ajouter une touche de réalisme et aussi pour la satisfaction de nos utilisateurs.

### Éléments visibles dans la maquette d’accueil

- Barre de progression de recettes : **3/5 recettes**
- Texte : **Info recettes complété**
- Catégories visibles :
  - **Palier 1**
  - **Palier 2**
- Boutons ou entrées :
  - Recettes
  - Recettes
  - Recettes
  - Recettes
- Carte recette :
  - Nom : **Omelette**
  - Rareté : **Palier 1**
  - Description : **Des oeufs parfaitement cuits et battus.**
  - Ingrédients : **2 oeufs**
  - Bouton : **Cuisiner**
  - Coût affiché : **25**
- Loot boxes visibles :
  - **RARE**
  - **ÉPIQUE**
  - **LÉGENDAIRE**
- Prix visibles sous les loot boxes :
  - **50**
  - **75**
  - **100**
- Menu de navigation visible :
  - Boutique
  - Inventaire
  - Accueil
  - Marché
- Compteurs en haut à droite avec pictogrammes de fouets et de pièces.

## Marketplace

Ici on peut observer le marketplace, où les articles, recettes et ingrédients, sont vendus par les utilisateurs. On peut donc les acheter mais aussi en vendre.

### Éléments visibles dans la maquette du marketplace

- Barre de progression de recettes : **3/5 recettes**
- Texte : **Info recettes complété**
- Onglets :
  - Achat
  - Vente
  - Mes transactions
- Barre de recherche : **Rechercher par nom**
- Bouton : **Filtre**
- Zone filtres :
  - **Type**
    - Légume
    - Fruit
    - Assaisonnement
    - Viande
  - **Rareté**
  - **Autre**
- Bouton : **Trier**
- Icônes d’affichage en grille ou en liste
- Cartes d’articles visibles, notamment :
  - **Tomate**
  - **Pois chiche**
- Informations visibles sur les cartes :
  - Type : Légume
  - Rareté : Commun
  - Vendu par
  - Prix total
  - Prix unité
- Menu de navigation visible :
  - Boutique
  - Inventaire
  - Accueil
  - Marché

## Inventaire

Pour terminer sur nos maquettes principales vous avez ici une idée de ce à quoi l’inventaire des ingrédients ressemblera.

### Éléments visibles dans la maquette de l’inventaire

- Barre de progression de recettes : **3/5 recettes**
- Texte : **Info recettes complété**
- Grille d’ingrédients, avec plusieurs cases affichant :
  - **tomate**
  - **x4**
- Menu de navigation visible :
  - Boutique
  - Inventaire
  - Accueil
  - Marché
- Panneau de détail de l’ingrédient sélectionné :
  - Nom : **Tomate**
  - Quantité : **x4**
  - Type : **Légume**
  - Rareté : **Commun**
  - Description : **Rouge et juteuse, elle apporte fraîcheur et saveur à tous tes plats, de la salade à la sauce.**

---

# V. Technologies

## A. Analyse de l’existant et comparaisons

Le jeu vidéo “I Can’t Believe It’s Not Gambling”, disponible sur Steam, est un jeu permettant d’ouvrir des loot boxes et de collectionner des objets. Il n’y a pas de marché d’échange entre les joueurs.

Les jeux par navigateur de cuisine sont pour la plupart construits sur 2 modèles : avoir des ingrédients, les sélectionner par catégorie, base, sauce, toppings, et les assembler; avoir des ingrédients, les découper/mixer/faire cuire et les assembler. En général, ils n’ont pas de marché direct entre les joueurs.

Le serveur Minecraft Paladium intègre un marketplace et un shop administrateur. Le marketplace est un marché entre les joueurs et le shop administrateur est un marché interne avec le système de jeu. Ce dernier permet d’acheter des objets manquants pour la réalisation de recettes et qui sont toujours disponibles.

Tous ces types de jeux intègrent un inventaire.

Nous avons repris et mélangé les principes de tous ces jeux : nous pourrons ouvrir des loot boxes, assembler des ingrédients entre eux pour réaliser des recettes et les stocker dans un inventaire et nous pourrons acheter et vendre des ingrédients via un shop administrateur et un market-place.

## B. Choix technologiques du projet

La gestion de projet ne se fera pas par un outil technologique particulier, la fiche de suivi Excel fournie est suffisamment claire, précise et axée sur notre projet.

La communication entre les membres du groupe se fait essentiellement en présentiel, lors des cours dédiés à la SAE ou lors des pauses. Nous utilisons aussi la boîte mail de l’université pour communiquer entre nous.

Nous avons ouvert un Google Docs où nous pouvons aussi communiquer et écrire nos idées et changements.

Les fichiers de code et les images sont partagés entre nous grâce au GitLab de la forge de l’IUT Lyon1.

Nous avons choisi de réaliser les maquettes sur Figma, car c’est un logiciel que nous avons découvert l’an dernier en cours, nous savons donc tous l’utiliser.

Les langages de programmation utilisés pour réaliser la SAE sont le HTML, le CSS, le JavaScript et le PHP. Ce sont des langages que nous avons appris ou que nous allons apprendre en cours.

---

# Pied de page du document

Texte répété dans le pied de page :

**G2S3B BAYARD Nathanaël - BUEB Séléna - HERNANDEZ Julie - LOPEZ Nicolas**

Pages du document : 1 à 13.
