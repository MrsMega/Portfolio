Découverte d'une nouvelle techno encore pas apprise à l'iut c'est le framework angular je vais participer un un projet nommer flotto qui est une app web permettant de gerer des parcs et flotte de voiture.
mon but est d'apprendre le framework et d'essayer de commencer à résoudre des tickets simple pour prendre le projet en main.

1er ticket réaliser : Refactoriser les inputs date/heure en composants réutilisables
Description

Contexte

Les inputs de date (mat-datepicker) et d'heure (mat-timepicker) sont utilisés dans 9 templates de l'application, avec du code dupliqué et des incohérences visuelles et comportementales entre les différentes vues.

Problèmes identifiés
Duplication de code

Chaque occurrence réécrit le même bloc de 4 à 6 lignes :

<mat-form-field class="...">
  <input matInput [matDatepicker]="picker" formControlName="..." />
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
Classes CSS incohérentes selon les vues :

Fichier
Classe(s) appliquée(s)
reservation-form-fields
reservation-form-fields\_\_date-time
cars-form (leasing)
car-form-input-container-full date-pill
cars-form (entrée fleet)
car-form-input-container-full custom-calendar_container date-pill
cars-details
custom-calendar_container date-pill archive-date-field
settings
custom-calendar, date-pill (virgule dans l'attribut class — bug)
onboarding-add-first-car
custom-calendar_container date-pill
maintenance-form-schedule, journeys-form, journeys-list
aucune classe spécifique
Attribut du toggle inconsistant
matIconSuffix utilisé dans : reservation-form-fields, journeys-list, maintenance-form-schedule
matSuffix utilisé dans : journeys-form, maintenance-form-schedule (timepicker)
Convention de nommage des template refs inconsistante
camelCase : #startDatePicker, #endDatePicker (reservation, journeys-list, maintenance)
PascalCase : #StartDatePicker, #ReturnDatePicker, #ArchiveDatePicker (journeys-form, cars-details)
Style de fermeture de balise inconsistant
Self-closing : <mat-datepicker #picker /> (journeys-form, maintenance timepicker)
Fermant explicite : <mat-datepicker #picker></mat-datepicker> (tous les autres)
Comportement on-error non uniforme
Les mat-form-field Material n'étant pas intégrés dans app-form-fieldset, la gestion des erreurs de validation et les styles d'erreur varient selon les contextes (focus, état invalide, message d'erreur).

Fichiers concernés
reservation-form-fields.component.html — lignes 74–140 (datepicker + timepicker start/end)

journeys-form.component.html — lignes 235–328
journeys-list.component.html — lignes 446–456
maintenance-form-schedule.component.html — lignes 36–101
cars-form.component.html — lignes 533, 693, 855
cars-details.component.html — lignes 113–157
settings.component.html — ligne 452
onboarding-add-first-car.component.html — lignes 506, 651, 779
Travail attendu
Créer deux composants dans le module shared :
app-date-input — wrapping du mat-datepicker
Inputs : formControlName, min?, max?, disabled?
app-time-input — wrapping du mat-timepicker
Inputs : formControlName, min?, disabled?
Les deux composants doivent :
implémenter ControlValueAccessor pour s'intégrer aux reactive forms
appliquer des classes CSS uniformes et cohérentes avec le design system
avoir un comportement on-focus et on-error standardisé (aligné avec app-form-fieldset)
respecter les conventions de nommage du projet (app- + kebab-case)
Critères d'acceptance
Les 9 fichiers ci-dessus utilisent app-date-input / app-time-input à la place du code inline
Rendu visuel identique dans toutes les vues (notamment le cas settings avec le bug de virgule corrigé)
Comportement d'erreur/focus uniforme

Pour ce 1er ticket il s'agit d'ameliorer la qualite du code apres une montee de version d'angular sur le projet
les differentes diffuculté rencontré ont été un existant assez grand donc compliqué d'identifier tout les forms et leur connexion a travers tout le code surtout que je decouvrais a peine angular surtout que le refacton etais pas le meme partout car les form étais parfois different
