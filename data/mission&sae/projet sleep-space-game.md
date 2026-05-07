Spécification produit - jeu mobile Android de réduction d’écran du soir

Spécification complète de

l’application

Jeu mobile Android en Kotlin de progression spatiale, centré sur la réduction de

l’usage du smartphone au coucher et pendant la nuit.

Type de document Spécification produit et fonctionnelle

Plateforme cible Android

Technologie principale Kotlin,typescript ,utlisation de firebase/cloud function

Positionnement

Jeu de routine et de progression spatiale,

non médical

Version du périmètre

Document consolidé après arbitrages

produit et game design

Résumé exécutif

• Chaque utilisateur possède un vaisseau unique et persistant dans le système solaire.

• Le joueur choisit une destination ; le déplacement est ensuite géré par un trajet autopiloté en

plusieurs phases.

• La progression repose sur la réduction de l’usage du téléphone au moment du coucher et

pendant la nuit, non sur une mesure médicale du sommeil.

• Une bonne session du soir réduit intelligemment le temps restant du trajet, quelle que soit la

phase de vol.

• Le système social de cette version repose sur des groupes d’amis dont le seul objectif est de

maintenir une streak collective tolérante.

Le présent document décrit le produit cible, ses règles métier, son expérience utilisateur et ses

contraintes techniques. Il est destiné à servir de base commune de conception, d’alignement

produit et de développement.

Spécification produit - jeu mobile Android de réduction d’écran du soir

1\. Vue d’ensemble du produit

L’application est un jeu mobile Android développé en Kotlin dont l’objectif est d’améliorer la

qualité de vie de l’utilisateur en l’aidant à mieux protéger sa période de coucher et de repos.

Son levier principal consiste à réduire l’usage du smartphone au moment de

l’endormissement et pendant la nuit, en transformant cette habitude en progression visible

dans un univers spatial.

Chaque utilisateur incarne un vaisseau spatial personnel. Tous les joueurs commencent à

proximité de la Terre puis peuvent lancer des trajets vers d’autres astres du système solaire.

Le vaisseau progresse en permanence, mais il progresse davantage lorsque l’utilisateur active

une session du soir et laisse réellement son téléphone de côté.

L’application ne se présente pas comme un tracker médical du sommeil. Elle ne prétend pas

savoir avec certitude si l’utilisateur dort réellement. En revanche, elle vise explicitement à

améliorer l’hygiène de sommeil et à prévenir des usages nocturnes néfastes, comme

reprendre son téléphone à 1 h du matin pour scroller.

Le produit repose sur trois piliers : une progression spatiale longue et satisfaisante, une

boucle quotidienne extrêmement simple, et une motivation sociale douce fondée sur la

cohésion d’un groupe d’amis.

2\. Vision, objectifs et valeur utilisateur

La vision du produit est de transformer une habitude bénéfique du soir en une expérience de

jeu persistante, élégante et gratifiante. L’utilisateur doit avoir le sentiment que chaque soirée

bien gérée a une conséquence concrète sur un voyage spatial qu’il suit sur la durée.

L’objectif principal est d’encourager la réduction de l’exposition au smartphone pendant la

période de coucher et durant la nuit. Les objectifs secondaires sont d’améliorer la régularité

de la routine du soir, de rendre les progrès visibles, et d’offrir une motivation sociale légère

plutôt qu’une compétition lourde ou culpabilisante.

 Donner à l’utilisateur un cadre simple pour poser son téléphone à un moment cohérent avec le

coucher.

 Rendre chaque bonne soirée immédiatement utile grâce à un gain de progression spatial.

 Installer une continuité d’usage grâce à un vaisseau unique que l’on suit pendant plusieurs

semaines.

 Permettre un renforcement social par groupe sans faire disparaître la motivation personnelle.

3\. Périmètre fonctionnel

L’application permet de créer un profil joueur, de configurer une routine cible, de visualiser

un vaisseau dans un environnement spatial 3D, de choisir une destination dans le système

solaire, de suivre un trajet autopiloté, d’activer une session du soir, de convertir cette session

en progression, et de consulter des statistiques personnelles.

Spécification produit - jeu mobile Android de réduction d’écran du soir

L’application permet également de créer ou rejoindre un groupe d’amis. Dans cette version, le

seul objectif social du groupe est de maintenir une streak collective tolérante.

 Inclus : profil, routine du soir, vaisseau, carte du système solaire, trajets autopilotés,

progression, statistiques personnelles, groupe d’amis, streak collective.

 Hors périmètre : simulation spatiale exhaustive, pilotage manuel, atterrissage sur les astres,

mini-jeux, système d’énergie, dégâts, amélioration technique du vaisseau, social compétitif

complexe.

 Les courses ou défis synchrones entre amis ne constituent pas le système social principal de

cette version.

4\. Concept de jeu et fantasy

Le joueur incarne un vaisseau spatial unique, persistant et observable dans le temps. Ce

vaisseau n’est pas un avatar interchangeable : il constitue la représentation durable du

joueur dans le système solaire.

Le système solaire est représenté de manière crédible dans son échelle générale. Les astres

jouables sont : la Lune, Mercure, Vénus, Mars, Jupiter, Saturne, Uranus et Neptune. Le Soleil

n’est pas une destination jouable.

Chaque arrivée se fait sur une station orbitale proche de l’astre cible. Cette décision de design

permet de conserver une forte impression de réalisme visuel sans avoir à gérer l’atterrissage,

la surface ou la navigation locale.

Le jeu ne repose pas sur le pilotage du vaisseau, mais sur le comportement réel du joueur. La

satisfaction vient du fait de voir un voyage spatial crédible avancer grâce à une routine du

soir mieux tenue.

5\. Boucle de jeu principale

La boucle de jeu doit rester simple, compréhensible et répétable au quotidien.

 L’utilisateur ouvre l’application et consulte l’état de son vaisseau, sa destination, sa phase de

trajet et son temps restant estimé.

 S’il n’a pas de trajet en cours, il choisit une destination depuis la carte du système solaire.

 Le trajet est lancé ; le vaisseau entre alors dans un déplacement autopiloté.

 Le soir, lorsque l’utilisateur estime qu’il a terminé son usage du téléphone, il active une session

du soir.

 Tant que le téléphone reste compatible avec l’objectif de repos, la session génère des bonus de

progression.

 Le lendemain, l’utilisateur consulte le gain de la nuit : réduction du temps restant, progression

du trajet, streak personnelle et éventuelle contribution au groupe.

6\. Systèmes de progression

La progression repose sur trois mécanismes complémentaires : une progression passive

minimale, un bonus lié aux sessions du soir, et un bonus de régularité.

Spécification produit - jeu mobile Android de réduction d’écran du soir

La progression passive garantit qu’un trajet n’est jamais totalement bloqué. Elle conserve un

sentiment de mouvement permanent même lors d’une période imparfaite.

Le bonus de session du soir est le cœur du système. Il récompense le fait de poser son

téléphone, de ne plus le reprendre, et de respecter une période compatible avec un meilleur

coucher.

Le bonus de régularité renforce la valeur d’une routine stable. Il récompense la cohérence des

horaires mais ne doit jamais devenir si dominant qu’il écrase tous les autres efforts.

La progression personnelle reste la base du produit. Chaque joueur suit sa streak personnelle,

son historique quotidien, sa courbe d’évolution et plusieurs indicateurs de routine.

7\. Système de trajet spatial

Le déplacement du vaisseau prend la forme d’un trajet autopiloté. Le joueur choisit

uniquement une destination ; le système gère ensuite le départ, la mise en vitesse, la croisière,

le ralentissement et l’arrivée à la station orbitale.

Le système recherche un réalisme perçu et cohérent, mais non une simulation astronautique

complète. Les distances, tailles et positions des astres sont crédibles. Les vitesses, en revanche,

sont adaptées pour produire un bon rythme de jeu.

Le système solaire fonctionne en temps réel. Les positions des astres dépendent de la date

réelle ; les temps de trajet peuvent donc varier selon le moment du lancement. Cet aspect est

assumé comme partie intégrante de l’identité du produit.

Chaque joueur ne peut avoir qu’un seul trajet actif à la fois. Ce choix protège la clarté du

modèle mental : un seul vaisseau, une seule position réelle, un seul voyage courant.

7.1 Phases du trajet

Chaque trajet est découpé en trois grandes phases : départ, croisière et arrivée. Ces phases

sont gérées par l’autopilote et doivent être visibles, au moins de manière synthétique, dans

l’interface.

La phase de départ correspond à la sortie de l’orbite de départ et à la mise en vitesse initiale.

La phase de croisière représente l’essentiel du trajet interplanétaire. La phase d’arrivée

regroupe l’approche finale, le freinage automatique et la mise à quai sur la station orbitale.

7.2 Conversion intelligente des bonus

Les efforts du joueur ne doivent jamais sembler utiles uniquement au début du trajet. Le

système convertit donc le bonus de session différemment selon la phase en cours.

En phase de départ, le bonus aide surtout la mise en vitesse. En croisière, il réduit

principalement le temps restant estimé. En phase d’arrivée, il améliore l’efficacité de

l’approche finale et du ralentissement automatique.

Le principe produit central est la réduction intelligente du temps restant. Une bonne session

du soir doit toujours produire un bénéfice visible, y compris en fin de trajet.

Spécification produit - jeu mobile Android de réduction d’écran du soir

7.3 Temps de trajet et estimations

Les temps de référence communiqués au joueur correspondent à un usage globalement bon

des sessions du soir. À titre d’ordre de grandeur :

 Terre vers Lune : environ 3 jours dans un bon scénario d’usage.

 Terre vers Mars : environ 2 semaines dans un bon scénario d’usage.

 Trajet le plus long de la version : environ 2 mois dans un bon scénario d’usage.

Ces durées ne sont pas garanties. Si l’utilisateur respecte très peu les sessions du soir ou

reprend régulièrement son téléphone pendant la nuit, le trajet peut devenir nettement plus

long, jusqu’à doubler voire tripler selon le cas.

Lors de la planification d’un trajet, l’application affiche trois estimations : optimiste, de

référence et pessimiste. L’objectif est de rendre l’impact du comportement du joueur

immédiatement tangible.

7.4 Arrivée, annulation et destination

L’arrivée d’un trajet est atteinte lorsque le vaisseau se met à quai sur la station orbitale

associée à l’astre cible.

Le joueur ne peut pas réorienter librement un trajet en cours vers un autre astre. En cas

d’annulation volontaire, le trajet est abandonné et l’état du joueur revient à l’astre de départ,

afin d’éviter les situations incohérentes au milieu du vide spatial.

8\. Règles de validation des sessions du soir

Une session du soir commence lorsque l’utilisateur appuie explicitement sur le bouton

indiquant qu’il pose son téléphone pour le reste de sa soirée ou de sa période de repos.

L’application ne cherche pas à certifier le sommeil biologique. Elle mesure avant tout un

comportement : arrêter l’usage du téléphone à un moment cohérent avec le coucher, puis

éviter les reprises nocturnes.

La validation doit être intelligente et non binaire. Le système s’appuie sur une combinaison

de signaux disponibles sur Android, comme l’état d’interaction, l’écran, la reprise du

téléphone et des indices de mouvement cohérents.

8.1 Conservation des gains acquis

Les bonus de session sont gagnés progressivement, au fil de la période validée. Ils sont donc

acquis au fur et à mesure de la session.

Si l’utilisateur reprend réellement son téléphone pendant la nuit, les gains déjà obtenus ne

sont pas supprimés rétroactivement. En revanche, les bonus futurs de la session sont coupés

jusqu’au lendemain.

Cette règle évite qu’une soirée globalement réussie soit entièrement annulée à cause d’une

reprise tardive, tout en maintenant un signal clair contre le scroll nocturne.

Spécification produit - jeu mobile Android de réduction d’écran du soir

8.2 Zone de coucher et tolérance

Le système accorde une importance particulière au bon moment de lancement de la session,

c’est-à-dire à la zone de coucher définie par la routine cible de l’utilisateur. Une session

correctement placée dans cette fenêtre bénéficie d’un meilleur rendement.

La validation ne doit pas être excessivement punitive. Des micro-variations ou des

manipulations insignifiantes ne doivent pas automatiquement annuler ce qui a déjà été

gagné.

9\. Système social et groupes

Le système social de cette version est volontairement simple. Il ne repose pas sur la

compétition synchrone entre amis, mais sur la cohésion d’un groupe.

Chaque joueur peut créer ou rejoindre un groupe d’amis. Le groupe n’a qu’un seul objectif

social dans cette version : maintenir une streak collective.

Le groupe ne remplace jamais la motivation personnelle. Il agit comme une couche de soutien

et de responsabilité douce au-dessus de la progression individuelle.

9.1 Streak collective

La streak collective mesure la continuité du groupe dans le respect global des sessions du soir.

Elle doit être suffisamment simple pour être immédiatement compréhensible.

Cette streak doit également être tolérante. Le système ne doit pas casser brutalement toute la

dynamique du groupe à la moindre soirée imparfaite. La logique exacte peut reposer sur un

seuil souple de participation ou sur une tolérance équivalente, mais le principe produit est

celui d’une streak collective intelligente et non toxique.

9.2 Affichage groupe

 Nom du groupe et membres actifs.

 Streak collective en cours et meilleure streak historique.

 Statut récent de contribution de chaque membre.

 Résumé simple du jour ou de la veille pour savoir si la dynamique collective est maintenue.

9.3 Limites du social dans cette version

Les courses synchrones, les défis compétitifs multi-étapes ou les missions coopératives plus

complexes ne font pas partie du périmètre de cette version. Le produit privilégie d’abord un

social très lisible, utilisable tous les jours et sans friction spatiale.

10\. Écrans et parcours utilisateur

L’application est structurée autour de cinq écrans principaux : onboarding, écran principal,

carte du système solaire, groupe d’amis et statistiques. Un écran de paramètres complète

l’ensemble.

Spécification produit - jeu mobile Android de réduction d’écran du soir

Le parcours type est le suivant : configuration initiale, apparition sur Terre, choix d’une

première destination, activation des sessions du soir, suivi de la progression personnelle, puis

éventuelle intégration dans un groupe.

11\. Détail de chaque écran

Les sous-sections ci-dessous décrivent le rôle exact des écrans de l’application.

11.1 Onboarding

L’onboarding initialise le profil joueur et les paramètres nécessaires à la routine.

Afin de limiter la friction et les données sensibles inutiles, l’application ne nécessite pas un

âge exact. Elle utilise une tranche d’âge ou une information de profil plus légère, suffisante

pour contextualiser la routine proposée.

L’onboarding collecte au minimum le pseudo, le profil de routine ou la tranche d’âge, l’heure

cible de coucher et l’heure cible de réveil.

11.2 Écran principal

L’écran principal est le centre de l’expérience. Il montre le vaisseau 3D, l’environnement

spatial, la destination actuelle ou le statut à quai, ainsi que les indicateurs clés du trajet.

Pendant un trajet, l’utilisateur doit pouvoir comprendre ce que fait le vaisseau grâce à un

ensemble lisible d’informations : phase actuelle, vitesse, progression, temps écoulé, temps

restant estimé et destination.

L’écran principal donne également accès au bouton de session du soir et à un résumé des

gains récents.

11.3 Carte du système solaire

La carte permet de consulter les destinations jouables, de visualiser la position actuelle du

joueur et de sélectionner une destination.

Pour chaque destination, l’interface présente une estimation optimiste, de référence et

pessimiste du temps de trajet.

11.4 Groupe d’amis

Cet écran remplace la logique de défis compétitifs comme cœur du social. Il présente le

groupe, ses membres et sa streak collective.

L’utilisateur peut y créer un groupe, rejoindre un groupe existant, consulter l’état de

contribution des membres et voir si la dynamique collective a été maintenue.

11.5 Statistiques

L’écran Statistiques valorise la progression personnelle. Il présente la streak personnelle,

l’historique quotidien, la courbe d’évolution, la durée validée des sessions, la régularité par

rapport à l’heure cible et les reprises nocturnes éventuelles.

Spécification produit - jeu mobile Android de réduction d’écran du soir

Il présente également les destinations visitées, la fréquence de visite et quelques indicateurs

synthétiques de progression.

11.6 Paramètres

Les paramètres permettent de modifier le pseudo, les préférences de routine, la tranche d’âge

ou le profil de référence, ainsi que les options générales du compte et de l’expérience.

12\. Direction artistique et expérience visuelle

L’identité visuelle doit être moderne, technique, élégante et légèrement geek. La référence

esthétique est celle d’interfaces spatiales contemporaines : lisibles, premium et

volontairement sobres.

L’univers 3D vise un réalisme stylisé. Les astres sont représentés par des sphères texturées

haute résolution, complétées par des effets d’atmosphère ou de halo lorsque pertinent. Le

vaisseau doit être immédiatement identifiable et satisfaisant à observer.

L’interface privilégie les fonds sombres, une hiérarchie claire, des éléments de télémétrie

simples et un contraste élevé. Elle doit rester accueillante pour un non-spécialiste malgré un

habillage technique.

La progression du trajet et l’activation d’une bonne session du soir doivent être sensibles

visuellement, sans exiger de lire une grande quantité de texte.

13\. Données métier et modèle logique

Le modèle logique de l’application s’appuie sur les entités suivantes : utilisateur, profil de

routine, vaisseau, astre, station orbitale, trajet, session du soir, groupe, appartenance à un

groupe, historique statistique et badge.

Un utilisateur possède un vaisseau, un profil de routine, un historique de sessions, un

historique de trajets, et éventuellement une appartenance à un groupe.

Un trajet est défini par un astre de départ, une station orbitale de destination, une date de

lancement, un état, une phase courante, une progression et une estimation temporelle.

Une session du soir conserve son heure de début, son heure de fin, sa durée validée, son

statut, les bonus cumulés et une indication de coupure éventuelle des gains futurs.

Un groupe regroupe plusieurs joueurs et conserve au minimum sa composition, sa streak

collective et ses indicateurs récents de contribution.

14\. Règles métier détaillées

Les règles métier doivent garantir la cohérence du produit, la lisibilité de la progression et la

robustesse des données.

Spécification produit - jeu mobile Android de réduction d’écran du soir

14.1 Trajets

 Un trajet peut être créé si le joueur est à quai et choisit une destination valide différente de sa

position actuelle.

 Un joueur ne peut avoir qu’un seul trajet actif à la fois.

 Un trajet peut être dans l’un des états suivants : à quai, en cours, terminé, abandonné.

 Un trajet en cours possède toujours une phase courante : départ, croisière ou arrivée.

14.2 Sessions du soir

 Une session du soir commence explicitement par une action utilisateur.

 Le système calcule les gains au fil de la session et non uniquement à la fin.

 Une reprise significative du téléphone coupe les gains futurs sans supprimer les gains déjà

acquis.

 Une session correctement située dans la fenêtre de coucher bénéficie d’un meilleur

rendement.

14.3 Streaks

 La streak personnelle mesure la continuité de l’effort individuel.

 La streak collective mesure la continuité du groupe selon une logique tolérante.

 La streak collective ne doit pas être formulée d’une manière qui humilie ou stigmatise un

membre.

14.4 Estimations temporelles

 Les estimations optimiste, de référence et pessimiste tiennent compte de la destination, de la

date réelle du lancement et d’un scénario d’usage plus ou moins bon.

 Les temps communiqués au joueur doivent être cohérents, compréhensibles et suffisamment

stables pour éviter une sensation de chaos.

15\. Contraintes techniques et choix d’implémentation

L’application est développée nativement pour Android en Kotlin. Elle combine une couche

d’interface, une couche de rendu spatial 3D ou pseudo-3D, et une couche métier séparée pour

la logique des sessions et des trajets.

Les trajets, streaks, ETA et événements temporels critiques ne doivent pas dépendre

naïvement de l’horloge locale du téléphone. Une référence serveur ou un mécanisme

équivalent de temps fiable doit être utilisée afin d’éviter incohérences et triches simples.

La détection des sessions du soir doit respecter les contraintes Android d’exécution en

arrière-plan, d’usage des capteurs et de consommation énergétique. L’architecture doit

privilégier la robustesse et la sobriété batterie.

Un backend centralisé est nécessaire pour les comptes, la synchronisation des trajets, la

gestion des groupes, la streak collective et les temps de référence.

Le moteur de progression doit rester découplé de la mise en scène visuelle : la logique de

calcul d’un trajet et la conversion des bonus doivent rester déterministes côté métier.

Spécification produit - jeu mobile Android de réduction d’écran du soir

16\. Critères de réussite

Le produit est considéré comme réussi si le joueur comprend immédiatement que poser son

téléphone le soir le fait réellement progresser dans un voyage spatial qu’il suit sur la durée.

L’utilisateur doit pouvoir lancer une session du soir en un geste, visualiser un effet clair le

lendemain, et consulter des statistiques personnelles qui donnent du sens à sa progression.

Le système de trajet doit paraître crédible sans être complexe à jouer. Le joueur doit

comprendre qu’il existe plusieurs phases de vol et que ses efforts réduisent toujours

utilement le temps restant.

Le système social doit être simple, non culpabilisant et suffisamment motivant pour renforcer

l’effort quotidien sans jamais effacer la progression personnelle.

Enfin, l’application doit donner une impression générale de cohérence, de qualité visuelle, de

fluidité et de sérieux technique.
