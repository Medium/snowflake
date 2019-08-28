// @flow
import * as d3 from 'd3'

export type TrackId = 'MOBILE' | 'FRONTEND' | 'SYSTEME' | 'BACKEND' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISME' | 'RECRUTEMENT' | 'CULTURE'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MOBILE': Milestone,
  'FRONTEND': Milestone,
  'SYSTEME': Milestone,
  'BACKEND': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISME': Milestone,
  'RECRUTEMENT': Milestone,
  'CULTURE': Milestone
}

export const milestones = [0, 1, 2, 3, 4, 5]

export type Title = {
  label: string,
  urlId: Number
}

export type Titles = {|
  'SCRUM_MASTER': Title,
  'EXTERNAL_REFERENT': Title,
  'ENGINEER_PROJECT_OWNER': Title,
  'ARCHITECTURE_OWNER': Title
|}

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'MOBILE': Track,
  'FRONTEND': Track,
  'SYSTEME': Track,
  'BACKEND': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISME': Track,
  'RECRUTEMENT': Track,
  'CULTURE': Track
|}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Mobile",
    "category": "A",
    "description": "Développer une expertise dans l'ingénierie de plate-forme mobile native, telle que iOS ou Android",
    "milestones": [{
      "summary": "Travaille efficacement dans les architectures iOS ou Android, en suivant les meilleures pratiques actuelles",
      "signals": [
        "Corrige un bug mineur dans l'application",
        "Modifier un composant UI existant",
        "Ajoute une fonctionalité mineure à une interface utilisateur existante",
        "Sait utiliser un gestionnaire de dépendance pour ajouter une nouvelle lib à l'application",
        "Développe une nouvelle fonctionalité en faisant un appel à une API externe",
      ],
      "examples": [
        "Fixer un problème de label tronqué dans l’écran du détail d’une campagne",
        "Ajoute la configuration d’une nouvelle animation au composant de “Loader” dans la librairie de composants UI interne",
        "Ajouter un deuxième bouton “candidater” dans l’écran du détail d’une campagne ibbü",
        "Intègre une nouvelle lib en utilisant Cocoapods ou Gradle",
        "Intégrer l’API permettant d’enregistrer le push token de l’expert ibbü sur le serveur iAdvize"
      ],
    }, {
      "summary": "Développe de nouvelles instances de l'architecture existante ou apporte des améliorations mineures à l'architecture existante",
      "signals": [
        "Sait utiliser les outils de gestion des applications mobiles",
        "Autonome sur le détection, l'analyse et la résolution de bugs 'classiques'",
      ],
      "examples": [
        "A publié une nouvelle version de l'application sur le Store (Apple/Google)",
      ],
    }, {
      "summary": "Conçoit de nouvelles fonctionnalités majeures et démontre une compréhension des contraintes de plate-forme mobileDesigns major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": [
        "Autonome sur la détection, l'analyse et la résolution de bugs 'complexes'",
        "Maîtrise l'architecture MVC et connaît au moins un autre type d'architecture",
        "Maîtrise les outils de gestion des applications mobiles",
        "Ajout du support d'une nouvelle feature iOS après une maj majeur de iOS"
      ],
      "examples": [
        "Correction d’une fuite mémoire dans la gestion des messages de conversation",
        "Connaît MVC et comprend MVVM (iOS) / MVP (Android)",
        "Maîtrise le workflow de publication d'apps sur le store",
        "Maîtrise la création et la mise en place de notifications push sur une app (création du certificat jusqu'à l'implémentation côté mobile)",
        "Support du Dark Mode",
        "A ajouté le support de l'accessibilité dans l'app ibbu",
        "Refacto du module de conversations",
      ],
    }, {
      "summary": "Construit des architectures complexes et réutilisables qui impulsent les meilleures pratiques et permettent aux ingénieurs de travailler plus efficacement",
      "signals": [
        "A impulser des changements  de l'architecture qui réduisent le fardeau du programmeur",
        "Maîtrise les architectures mobiles 'classiques'",
        "Comprend et sait implémenter des notions plus avancées du framework iOS/Android",
      ],
      "examples": [
        "Mise en place d'une architecture modulaire pour le partage de code ibbü/CTY",
        "Maîtrise MVC et MVVM (iOS) / MVP (Android)",
        "Implémentation des coroutines Kotlin",
        "Gestion de téléchargement multiples avec queuing/threads",
      ],
    }, {
      "summary": "Définit une direction mobile stratégique pour une équipe d'ingénieurs",
      "signals": [
        "Définit la vision technique mobile à long terme et s'assure que les projets en cours sont alignés avec cette dernière",
        "A une connaissance appronfondi de l'écosystème et peux faire des choix en toute objectivité",
        "Introduit des choix technologiques et des patterns applicatifs majeurs dans l'application",
        "Industrialise le workflow de développement et de production des apps pour augmenter la productivité de l'équipe entière",
      ],
      "examples": [],
    }],
  },

  "FRONTEND": {
    "displayName": "Frontend",
    "category": "A",
    "description": "Developper une expertise dans les technologies web coté client, telle que HTML, CSS, et JavaScript",
    "milestones": [{
      "summary": "Travaille efficacement dans les architectures web client, apporte des améliorations mineures à des applications existantes",
      "signals": [
        "Sait fixer un bug dans une application existante",
        "Fait des changements mineures dans des pages existantes (static ou au sein d’une application react)",
        "Utilise CSS/JS correctement en suivant les guides lines de base",
        "Sait utiliser le débug tool",
        "Sait créer un composant react simple au sein de la FUIL",
      ],
      "examples": [],
    }, {
      "summary": "Développe de nouvelles applications en suivant les process recommandés",
      "signals": [
        "Sait adapter et rendre des pages responsive",
        "Sait transformer du code impératif en fonctionnel",
        "Implémente les normes w3c / a11y",
        "Connait et sait configuer les outils de build front end utilisés (web pack, rollup..)",
        "Connait les outils de test",
      ],
      "examples": [
        "A migré les campagnes ibbu en Rx au sein du core-admin-app en redux",
        "A mi en place un formulaire avec redux-form",
        "A implémenté la suppression d'un message dans le livefeed (appel serveur, action, reducer, saga basique)",
        "A implémenté un middleware from scratch",
        "A remis en question le design d'un composant pour son manque d'a11y",
        "A améliorer la conf webpack d'une app",
        "A testé toute la logique de son code avec des tests unitaires (reducer, sagas, selecteurs)",
      ],
    }, {
      "summary": "Connait la stack technique dans laquelle il évolue et démontre une compréhension des contraintes",
      "signals": [
        "Créer des outils ou automatise pour faciliter le développement et/ou le workflow",
        "Automatise et assure la qualité de son développement (et de ceux de son équipe)",
        "Fournit des feedbacks utiles sur la conception et suggère des alternatives réalisables",
        "Mise en place de composants complexe",
        "Sait organiser le state d'une application avec redux",
      ],
      "examples": [
        "A créé une librairie de composants déjà compilés avec webpack ou rolloup",
        "Défini et met en avant le worflow du CI",
        "A implémenté sentry au sein de son app",
        "A fait des présentations au comité front sur sa veille",
        "A remis en question le code de l'app ibbu",
        "A créé un provider de thèmes pour les composants fixes",
        "A créé un provider de traduction",
        "A refacto une feature du desk en redux",
      ],
    }, {
      "summary": "Construit des architectures complexes en contournant les limites du légacy et/ou des librairies implémentés",
      "signals": [
        "Connait autres frameworks / librairies en-dehors des utilisés aujourd’hui chez iAdvize",
        "Sait contourner les limites des librairies ou du légacy",
        "Démontre une compréhension profonde du comment marchent les librairies",
        "A impulser des changements d'architecture / Fait des choix architecturaux impactants",
        "Sait s’intégrer dans du légacy, améliorer le code de manière itérative et est conscient de l'impact des modifications faites",
        "Impulse la standardisation des bonnes pratiques front",
      ],
      "examples": [
        "A fait des POC sur de nouveaux outils / librairies et apporte un regard objectif sur l’utilisation d’autre librairies",
        "A fait une prez dans un meetup ou dans un event local",
        "Développement d’une rétrocompatibilité pour assurer la migration vers react 17",
        "A créé une lib pemettant de définir l'état de la data",
        "A fait le choix d'implémenter la chatbox du livechat dans une iframe",
        "A splitté le core-admin-app afin de pouvoir implémenter typescript",
        "A élaboré une stratégie de refonte afin de bien l'intégrer dans le légacy (statebox / thread de conversation / chatbox côté livechat)",
        "Remet en question l’architecture implémenté pour assurer le développement futur de manière itérative (refonte de la chatbox côté livechat, refonte du livefeed)",
        "A créé la lib des types permettant de standardiser les typescript types",
      ],
    }, {
      "summary": "Définit une direction frontend stratégique pour une équipe d'ingénieurs",
      "signals": [
        "Défini une vision long terme et s’assure que les projets suivent cette vision",
        "Identifie des problèmes récurrents dans différents projets",
        "Choix des technologies à employer",
      ],
      "examples": [
        "Création du playground", 
        "Passage à storybook",
        "Création des master reviewers",
        "Split de la FUIL idz / ibbu",
        "Partir sur du react / redux",
        "Mise en place du typage",
      ],
    }],
  },

  "SYSTEME": {
    "displayName": "Système",
    "category": "A",
    "description": "Développe une expertise dans l’ingénierie système en utilisant des technologies comme AWS , terraform , nomad, docker ….",
    "milestones": [{
      "summary": "Travaille efficacement dans les architectures système, en suivant les meilleures pratiques actuelles",
      "signals": [
        "Effectue des modifications de configuration simples",
        "Savoir utiliser les outils de monitoring pour lire des logs, collecter des datas , les ressources système utilisées",
        "Etre capable de se connecter en SSH sur sa devbox",
      ],
      "examples": [
        "A modifié une image Docker de base (PHP, scala, etc.)",
        "A écrie un fichier de conf inframe pour deployer un service",
        "A executer un chef-client",
        "A modifié une var d'env directement dans consul pour permettre de vérifier un bug",
      ],
    }, {
      "summary": "Connait l'architecture existante et y apporte des améliorations mineures",
      "signals": [
        "Etre capable de troubleshooter une devbox",
        "Comprendre les metrics cloudwatch et prometeus",
        "Pratique une veille techno active",
      ],
      "examples": [
        "A créé un job générique sur rundeck pour pouvoir déployer n'importe quel service sous inframe ***",
        "A déployé une nouvelle instance d'un env complet sur AWS",
        "A développer un component inframe simple",
        "Killer un server qui ne marche plus",
        "Tuer une instance depuis la console AWS / CLI"
      ],
    }, {
      "summary": "Fait évoluer l'architecture existante et y apporte des améliorations majeures",
      "signals": [
        "Effectue des mises à jour de la plateforme vers des version majeures",
        "Conçoit des systèmes modérément complexes",
        "Comprend et implémente es applications possibles des nouvelles techno et pratiques",
        "Maitrise les usages spécifiques de iadvize",
      ],
      "examples": [
        "A concu Inframe",
        "A concu et déployé avec inframe un auto-scalling group avec des instances mixtes",
        "A permis de réduire les couts du datamining en implémentant une nouvelle fonctionnalité AWS",
      ],
    }, {
      "summary": "Construit des architectures complexes et réutilisables qui impulsent les meilleures pratiques et permettent aux ingénieurs de travailler plus efficacement",
      "signals": [
        "Conçoit des projets complexes qui englobent plusieurs systèmes et technologies",
        "Participe à stabiliser et améliorer la qualité de la plateforme en automatisant les taches récurrente , ( réductio des erreurs humaines )",
        "Introduit des nouvelles technologies pour répondre aux besoins mal déservies",
      ],
      "examples": [
        "A mis en place du continuous delivery avec Jenkins pour la plateforme .",
        "A mis en place la stack de monitoring prometheus grafana",
      ],
    }, {
      "summary": "Définit une direction stratégique pour une SWARM et/ou la R&D",
      "signals": [
        "Developpe et implémente la stratégie de Haute Dispo",
      ],
      "examples": [
        "Définie et développe la stratégie de continuous delivery",
      ],
    }],
  },

  "BACKEND": {
    "displayName": "Backend",
    "category": "A",
    "description": "Développe une expertise dans l'ingénierie côté serveur, en utilisant des technologies telles que Scala, PHP, ou Elixir",
    "milestones": [{
      "summary": "Connait les frameworks backend et suit les meilleures pratiques d'iAdvize",
      "signals": [
        "Copie un fonctionnement sur un autre service et l'adapte à sa problématique",
        "Crée un endpoint scala Play",
        "Effectue des changements mineures dans un service pour adapter une feature",
      ],
      "examples": [
        "A créé un endpoint dans l'admin pour pouvoir afficher les pages ibbü",
        "A ajouté le champ 'status' sur l'API de ongoingconversation",
        "A ajouté un filtre sur le legacy ID dans la conversation API",
      ],
    }, {
      "summary": "Construit un service de bout en bout en autonomie",
      "signals": [
        "Évalue l'exactitude et l'utilité du code existant et évite le copier-coller aveugle",
        "Factorise quand c'est nécessaire",
        "Dessine les tables / bdd nécessaires pour l'implémentation d'une feature",
      ],
      "examples": [
        "A intégré twitter4s pour le social",
        "A construit la machine a état dans le employment-campaign-api-service",
        "A créé un service avec Lagom pour faire du CQRS / ES",
      ],
    }, {
      "summary": "Construit des architectures multi-service performantes et robustes",
      "signals": [
        "Est maintainer principal pour un service inclus dans le critical path",
        "Profite de l'implémentation de nouvelles feature pour revoir le fonctionnement de plusieurs services et de l'architecture du domaine",
        "Fournit des feedbacks utiles sur la conception et suggère des alternatives réalisables",
      ],
      "examples": [
        "A développé des worker de resynchro des conversations onsite et social",
        "A créé un service de crédit et une interface avec MangoPay pour la rémunérations des experts ibbü",
        "A créé le système de webhook dans le domaine integration permettant de diffuser des events",
        "A conçu et développé l'architecture de récolte des transactions visiteur",
      ],
    }, {
      "summary": "Impulse les meilleures pratiques et standardise le développement backend chez iAdvize. Porte les chantiers techniques stratégiques",
      "signals": [
        "Porte une vision de l'évolution du domaine et de son architecture logicielle",
        "Évite les erreurs architecturales subtiles lors de l'examen de nouveaux systèmes",
        "Crée des outils qui rendent plus efficace le développement backend",
      ],
      "examples": [
        "A conçu et développé le nouveau workflow asynchrone des conversations",
        "A standardisé la consommations d'API depuis un service Scala",
        "A conçu et développé la plate-forme graphQL",
      ],
    }, {
      "summary": "Définit une direction stratégique pour une équipe d'ingénieurs",
      "signals": [
        "Conçoit des projets d'une complexité et d'une portée significatives",
        "Concoit la structure backend chez iAdvize",
        "Identifie et résout les problèmes systémiques avec l'architecture actuelle",
      ],
      "examples": [
        "A introduit un nouveau langage backend",
        "A défini l'architecture microservices et le plan de migration vers cette archi",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "B",
    "description": "Fournit des plans d'action bien définis qui répondent à leurs objectifs, respectent les délais",
    "milestones": [{
      "summary": "Delivre efficacement les tâches assignées",
      "signals": [
        "S'implique dans les estimations des tâches du sprint et estime avec précision",
        "Participe activement à réaliser les objectifs du sprint",
        "Ecrit les acceptances tests de sa tâche pour la recette",
      ],
      "examples": [
        "A terminé son sprint sans surprise : les tickets qui devaient passer sont passé, ceux qui ne passent pas on sait pourquoi",
        "S'est assuré que ses tickets passent la revue de code et que la fonctionnalité soit testée par un autre développeur",
      ],
    }, {
      "summary": "Délivre efficacement un petit projet",
      "signals": [
        "Découpe les product backlog items avec la dev team en prenant en compte les contraintes produit",
        "Planifie le sprint et exprime clairement la capacité de la dev team à délivrer ce qui est défini dans le sprint backlog",
        "Fait des compromis avec le produit pour avoir un incrément à la fin du sprint",
        "Écrit des spécifications techniques nécessaire au démarrage du projet",
        "Mène un projet de 2 sprints ou moins",
      ],
      "examples": [
        "A géré le projet SMS de bout en bout",
        "A pris en compte les métriques des sprints précédent pour planifier le suivant",
        "A préparé et animé une démo en review à des parties prenantes",
        "A géré le projet des notifications emails de l'asynchrone",
      ],
    }, {
      "summary": "Coordonne et s'assure que l'équipe délivre un projet de cycle",
      "signals": [
        "Réagit rapidement à un imprévu et trouve une solution sans compromettre les objectifs du sprint ou du cycle",
        "Anime, pousse à la décision et aligne l'équipe dans les projets sur les choix fonctionnels ou technique",
        "Accompagne le produit dans la construction de la roadmap et la planification des cycles",
        "Prends régulièrement le rôle d'Engineering Project Manager sur un projet",
      ],
      "examples": [
        "A ajouté / supprimé un ou des tickets dans le sprint pour s'adapter à la situation",
        "A délivré le projet GDPR en temps et en heure malgré les imprévus et les deadlines serrées",
        "A provoqué un refinement pour estimer la mise place de webhook via Kafka",
      ]
    }, {
      "summary": "Délivre des projets demandant de planifier sur plusieurs cycles",
      "signals": [
        "Trouve les moyens de fournir le scope demandé plus rapidement et de prioriser le backlog",
        "Gère les dépendances sur d'autres projets et équipes",
        "Capitalise sur les expériences de projets précédents et créer du cadre",
      ],
      "examples": [
        "A été Engineering Project Manager le projet SDK ou Asynchrone",
        "A mis en place le point hebdo asynchrone pour coordonner les développements des 3 équipes impliquées",
        "A organisé la rétro sur les customs data en incluant tous les pôles concernés",
      ],
    }, {
      "summary": "Gère les projets majeures livrées par plusieurs équipes",
      "signals": [
        "Considère les contraintes externes et les objectifs business lors de la planification",
        "Structure de nouvelles méthodes de project management",
      ],
      "examples": [
        "A mis en place le 6.6 Framework",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Partage la bonne quantité d'informations avec les bonnes personnes, au bon moment, et écoute efficacement",
    "milestones": [{
      "summary": "Communique efficacement avec PM, Designers ou développeurs concernés (travaillant sur le même projet)",
      "signals": [
        "Communique le statut et les avancés du projet clairement et efficacement",
        "Collabore avec les autres avec empathie",
        "Demande de l'aide au moment opportun",
      ],
      "examples": [
        "A su remonter un blocage ou un retard sur le projet qui impactait l’objectif du sprint",
        "Les commentaires apportés aux CR sont constructifs et suggèrent des alternatives",
        "S’est rapproché d’un développeur aillant plus d’expertise lors d’une difficulté rencontré",
      ],
    }, {
      "summary": "Communique de manière appropriée avec sa swarm, en mettant l'accent sur la rapidité et la qualité des conversations",
      "signals": [
        "Pratique l'écoute active",
        "Pratique l’écoute de son entourage",
        "S'assure que les intervenants sont au courant des points bloquants",
        "Choisit les outils appropriés pour une communication précise et opportune",
        "Communique efficacement avec les bons outils aux bons moments",
      ],
      "examples": [
        "A recu et intégré un feedback critique positivement",
        "Est au courant de l’avancé du travail des intégrants de sa swarm",
        "A validé avec les développeurs front concernés les retours de l’api", 
        "A discuté avec les archi lors d’un engineering council avant la rédaction des spec techniques",
        "Est concis lors des dailys",
        "Privilégie le chat pour poser des questions non urgentes",
        "Utilise une rétro pour remonter des soucis organisationnels",
      ],
    }, {
      "summary": "Communique de manière proactive l'information, sollicite activement les feedback et facilite la communication pour de multiples parties prenantes",
      "signals": [
        "Résout les difficultés de communication entre les autres",
        "Va chercher de manière proactive l’information des parties prenantes",
        "Gère efficacement les attentes des parties prenantes du projet",
        "Communique de manière proactive les avancés du projet",
      ],
      "examples": [
        "A réglé des débuts de discussions tendus afin de privilégier une communication productive et constructive",
        "A leadé une réunion entre 5 personnes et plus en s’assurant d’être efficace et répondre aux attentes de chacun",
        "Sollicite les besoin des autres swarms et a informé une autre équipe un retard qui impacterait la roadmap de leur swarm",
        "A organisé des points réguliers entre les développeurs concernés de plusieurs swarms pour assurer un alignement d’information",
        "A échangé avec ibbü concernant les impacts du projet asynchrone en tenant compte des contraintes",
        "A partagé les écarts de calendrier en avance",
      ],
    }, {
      "summary": "Communique des idées complexes habilement et avec nuance à des interlocuteurs variés",
      "signals": [
        "Communique habilement et avec nuance les risques et les compromis du projet",
        "Contextualise et clarifie la direction ambiguë et la stratégie pour les autres",
        "Négocie des compromis de ressource avec d'autres équipes",
      ],
      "examples": [
        "Présente le projet afin qu’il soit compris par des profils non techniques ou par des personnes ne connaissant pas le projet",
        "Présente un sujet complexe lors d’un engineering council en expliquant les limites et difficultés rencontrés",
        "A impacté la roadmap produit en expliquant les besoins techniques afin de sortir un sujet prioritaire",
      ],
    }, {
      "summary": "Influence les résultats au plus haut niveau, dépasse la simple diffusion et établit les best practices pour les autres",
      "signals": [
        "Cherche à améliorer la communication entre les différents pôles de l’entreprise",
        "Améliorer la communication et établit l’alignement au sein de l’entreprise",
        "Influence les résultats au plus haut niveau",
      ],
      "examples": [
        "Création du plan de communication pour un A préparer un kickoff pour présenter les différents sujets de la r&d en début d’année changement organisationnel",
        "A créer un plan de communication pour un grand changement organisationnel",
        "A impulsé un nouveau process à mettre en place au sein de la r&d afin d’améliorer l’organisation du pôle",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Craft",
    "category": "B",
    "description": "Incorpore et encourage les pratiques pour assurer une excellente qualité de produit et de service",
    "milestones": [{
      "summary": "Offre un travail de qualité constante",
      "signals": [
        "Teste soigneusement le nouveau code, localement et en production une fois expédié",
        "Écrit des tests pour les nouvelles fonctionnalités et correction de bug, maintient la couverture de code",
        "Rédige des commentaires et de la documentation claires",
      ],
      "examples": [
        "A ajouté une section dans le readme d'ibbü-app pour expliquer comment gérer les traductions",
        "A refusé et commenté la PR sur l'employment-livefeed-service qui permettait de moins couvrir le code par des tests",
        "A proposé une PR qui n'a pas suscité de commentaires triviaux",
      ],
    }, {
      "summary": "Augmente la robustesse et la fiabilité du code base, et consacre du temps pour améliorer produits et systèmes",
      "signals": [
        "Refactorise le code existant pour le rendre plus testable",
        "Ajoute des tests pour les zones non couvertes",
        "Supprime le code inutile et déprécie de manière proactive lorsqu'il est sans danger de le faire",
        "Teste les performances de son code sur des copies de données de production",
      ],
      "examples": [
        "A demandé des tests sur une PR en tant que reviewer",
        "A mis en place le changelog generator sur le connectors-app",
        "A conçu le système à état de l'employment-campaign-api-service",
      ],
    }, {
      "summary": "Améliore la capacité des autres à fournir un travail de grande qualité",
      "signals": [
        "Implémente des systèmes qui permettent de meilleurs tests",
        "Donne des avis réfléchis sur le code en tant qu'expert",
        "Ajoute des outils pour améliorer la qualité du code",
      ],
      "examples": [
        "A écrit le cahier de recette des apps mobiles",
        "A développé le site http://internal-apis-doc.iadvize.net pour centraliser les documentations swagger de différents micro-services",
        "A développé et poussé le service version-badge-api",
      ],
    }, {
      "summary": "Promeut et modèle la qualité avec des actions proactives, et s'attaque aux problèmes de système difficiles, subtils et de performance",
      "signals": [
        "Pousse régulièrement des PR pour améliorer les performances de services stratégiques",
        "Focalise l'équipe sur la qualité avec des rappels réguliers",
        "Implémente des services hautement scalables / Propose les tests de simulation de scalabilité",
      ],
      "examples": [
        "A mis en place une plateforme pour faire des tests E2E et fait adopter cette plate-forme à toute la P&E",
        "A démontré et mis en place grafana et a formé l'équipe à l'utiiser",
      ],
    }, {
      "summary": "Permet et encourage l'ensemble de l'organisation à faire de la qualité un élément central du processus de développement",
      "signals": [
        "Définit les politiques pour l'organisation d'ingénierie qui encouragent un travail de qualité",
        "Identifie et élimine les spof à travers toute l'organisation",
      ],
      "examples": [
        "A négocié avec les managers ou les VP pour mettre en place la winter force",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "B",
    "description": "Défie le statu quo et impulse un changement positif en dehors des missions confiées",
    "milestones": [{
      "summary": "Identifie les opportunités de changement organisationnel ou d'amélioration du produit",
      "signals": [
        "Pointe du doigt un oubli ou une problématique qui n'a pas été identifiée",
        "Suggère une approche ingénieuse  sur un projet",
        "S'assure qu'un problème de prod est pris en charge",
      ],
      "examples": [
        "A créé un ticket de refacto ou d'amélioration d'une feature",
        "A trouvé un bug et crée un ticket en informant la swarm concernée",
        "A signalé à son manager des choses étonnantes concernant iAdvize",
      ],
    }, {
      "summary": "Apporte des améliorations mineures au produit ou au mode d’organisation d’une swarm ",
      "signals": [
        "Prend un bug du backlog  de manière proactive",
        "Apporte des améliorations de la qualité du design spontanément",
      ],
      "examples": [
        "A changé le model de donnée d'un table MySQL pour améliorer les performances globales",
        "A poussé une interface responsive pour les experts ibbü",
        "A fait et publié un hotfix en dehors des travaux habituels",
      ],
    }, {
      "summary": "Faire en sorte que les changements entraînent un impact positif sur toute une équipe, une fonctionnalité ou un service mineur",
      "signals": [
        "Démontre des concepts de manière proactive avec des prototypes",
        "Corrige les bug compliqués en dehors du domaine normal",
        "Prend possession des problématiques que personne ne possède ou ne veut",
        "Prend en charge des taches lorsqu'elle sont bloquantes pour les autres",
      ],
      "examples": [
        "A définie des style guide pour résoudre des débats",
        "A pris possesion du sujet launch darkly et l'a intégré dans le workflow de dev",
        "A rédigé et conduit la RFC sur les API REST pour combler un manque",
      ],
    }, {
      "summary": "Effectue des changements qui ont un impact positif sur l'organisation d'ingénierie ou un impact majeur sur le produit",
      "signals": [
        "Défends et promeut des nouvelles technologies pour résoudre des nouveaux types de problèmes",
        "Exprime du courage et de la détermination face aux obstacles persistants",
        "Suscite de nouvelles fonctionnalités, services et architectures majeurs",
      ],
      "examples": [
        "A fait des choix empiriques pour passer de la stack front legacy à react", 
        "A pris en charge la transition vers AWS",
        "A améliorer le workflow de release en mettant en place un système de changelog et de release",
        "A mis en place et organise le comptoir agile",
      ],
    }, {
      "summary": "Effectuer un changement qui a un impact positif substantiel sur la société",
      "signals": [
        "Modifie les processus organisationnels complexes",
        "Propose la création d'un nouveau job pour résoudre des problèmes organisationnels",
        "Propose un nouveau process pour améliorer la priorisation et planification des bugs avec les Customer Angels",
      ],
      "examples": [
        "A mis en place l'organisation en swarm",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Développement de carrière",
    "category": "C",
    "description": "Fournit un soutien stratégique aux ingénieurs pour les aider à bâtir la carrière qu'ils souhaitent",
    "milestones": [{
      "summary": "Donne un aperçu des opportunités et aide à identifier les forces et les faiblesses des individus.",
      "signals": [
        "Plaide et défends à la place d'un membre d'un groupe",
        "Partage les possibilités d'amélioration, sait reconnaître les réalisations et les performances",
        "Explique les évolutions possibles",
      ],
      "examples": [
        "A receuilli et restitué des feedback depuis le formulaire de peer",
        "A discuté des options de carrières et domaines d'intérêt de façon informelle",
      ],
    }, {
      "summary": "Appuie et défend formellement une personne et fournit des outils pour l'aider à résoudre des problèmes de carrière",
      "signals": [
        "S'assurer qu'un membre du groupe a un rôle approprié au sein de son équipe",
        "Offre des conseils de carrière efficaces aux membres du groupe, sans être prescriptif",
        "Crée de l'espace pour que les gens puissent parler des défis à relever",
      ],
      "examples": [
        "Mise en place, participation régulière et constructive de 1:1", 
        "Accompagne sur la façon d'avoir des conversations difficiles",
      ],
    }, {
      "summary": "Inspire un petit groupe de personnes et les pousse activement à s'améliorer",
      "signals": [
        "Etudie des chemins possibles et crée des plans de croissance personnel et professionnel",
        "Recommande d'aligner les personnes avec les rôles appropriés au sein de l'organisation",
        "Travaille avec les équipes pour élever le niveau des leaders émergents",
      ],
      "examples": [
        "Passe en revue la progression individuelle des membres du groupe toutes les 6 semaines",
        "Suggestion d'un membre approprié pour le poste de d'architecte",
      ],
    }, {
      "summary": "Gérer les interactions et les processus entre les équipes, promouvoir les meilleures pratiques et donner l'exemple",
      "signals": [
        "Gérer les transitions d'équipe en douceur, en respectant l'équipe et les besoins individuels",
        "Élabore des best practices pour la résolution des conflits",
        "S'assure que les rôles des personnes répondent à leurs besoins de carrière",
      ],
      "examples": [],
    }, {
      "summary": "Soutient le développement d'une partie importante des membres d'ingénierie et est largement considéré comme un conseiller de confiance",
      "signals": [
        "Soutenir et former les cadres",
        "Identifier des possibilités de formation en leadership pour les cadres",
        "Pousse tout le monde à être aussi bon qu'il peut l'être, avec empathie",
      ],
      "examples": [
        "Accompagnement des leads d'équipe",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Org design",
    "category": "C",
    "description": "Définit les processus et les structures qui permettent une forte croissance et la bonne exécution d'une organisation diversifiée",
    "milestones": [{
      "summary": "Respecte et participe aux processus, en donnant des feedbacks significatifs pour aider l'organisation à s'améliorer",
      "signals": [
        "Prend le temps de réfléchir sur les réunions qui les inspirent ou les frustrent",
        "Enseigne aux autres les processus existants",
        "Participe activement aux processus organisationnels et y apporte des contributions",
      ],
      "examples": [
        "A facilité une réunion efficace avec empathie",
        "Fournit un feedback d'améliortation sur des events scrum",
        "Pousse l'équipe à réfléchir en rétrospective sur l'organisation actuelle et comment être plus efficace",
      ],
    }, {
      "summary": "Identifie les occasions d'améliorer les processus existants et apporte des changements qui ont une incidence positive sur l'équipe",
      "signals": [
        "Définit la structure et la cadence des réunions qui répondent aux besoins de l'équipe",
        "S'engage dans la réflexion sur les systèmes organisationnels",
        "Plaide en faveur de l'amélioration de la diversité et de l'inclusion, et propose des idées pour aider à y arriver",
      ],
      "examples": [],
    }, {
      "summary": "Élaborer des processus et des programmes pour résoudre des problèmes organisationnels",
      "signals": [
        "Résout des problèmes organisationnels de longue date",
        "Réaffecte les ressources pour répondre aux besoins organisationnels",
      ],
      "examples": [
        "Developed baseline team templates for consistency",
      ],
    }, {
      "summary": "Réfléchit profondément aux problèmes organisationnels et identifie les dynamiques cachées qui y contribuent",
      "signals": [
        "Évalue les structures d'encouragement / récompense et leur effet sur l'exécution",
        "Analyser les processus existants pour déceler les biais et les lacunes",
        "Relie des problèmes abstraits aux actions ou normes organisationnelles concrètes",
      ],
      "examples": [],
    }, {
      "summary": "Dirige des initiatives pour résoudre des problèmes découlant de dynamiques cachées et de normes d'entreprise",
      "signals": [
        "Construit des programmes pour améliorer le leadership dans des compétences clés",
        "Crée de nouvelles structures qui offrent des possibilités de croissance uniques",
        "Dirige la planification et la communication pour les réformes d'organistion",
      ],
      "examples": [
        "Lead efforts to increase number of mobile engineers",
        "Direction de projet pour l'amélioration significative de la diversité à tous les niveaux",
        "A penser et construit le growth framework",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Bien-être",
    "category": "C",
    "description": "Soutient le bien-être émotionnel des membres de l'équipe dans les moments difficiles et célèbre leurs succès",
    "milestones": [{
      "summary": "Utilise des outils et des processus pour s'assurer que les collègues sont en bonne santé et heureux",
      "signals": [
        "Conserve la confidentialité, sauf obligation légale ou morale de faire autrement",
        "Évite de critiquer et met l'accent sur le changement positif",
        "Applique le 'Reasonable Person Principle' aux autres",
      ],
      "examples": [
        "A demandé à un collègue de se déconnecter de Chat pendant ses vacances",
        "S'est mis à la place de l'autre pour comprendre son point de vue",
        "S'est soucié d'un collègue montrant des signes d'épuisement", 
      ],
    }, {
      "summary": "Crée un environnement d'équipe positif, encourageant et engageant pour tout le monde",
      "signals": [
        "Valide le travail en cours et soutient la motivation",
        "Propose des solutions lorsque les équipes s'enlisent ou perdent leur élan",
      ],
      "examples": [
        "A coordonné une petite fête pour le lancement d'un projet",
        "A remarqué une équipe sans victoire récente et a suggéré des quick win",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": [
        "Trains group members to separate stimulus from response",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "A suivi une formation sur l'assertivité",
        "A suivi une formation sur les techniques de compromis et de négociation",
        "A reformulé un problème comme un défi, au lieu d'un obstacle, le cas échéant",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Grounds group member anxieties in reality",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension around product direction by providing extra context",
        "Encouraged group members to focus on what they can control",
        "Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and points out narratives when appropriate",
        "Works to reshape narratives from victimization to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Converted group member from a problem haver to a problem solver",
        "Challenged false narrative and redirected to compassion and empathy",
        "Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "ACCOMPLISHMENT": {
    "displayName": "Accomplissement",
    "category": "C",
    "description": "Inspire l'excellence quotidienne, maximise le potentiel et résoud les problèmes de performance efficacement avec compassion",
    "milestones": [{
      "summary": "Aide les individus à identifier les points bloquant et les aide à identifier les étapes suivante pour trouver une solution",
      "signals": [
        "Remarque quand quelqu'un est coincé et propose son aide",
        "Aide les autres à découper les probèmes en étapes faisable et tangible",
        "Parle de problèmes sans porter de jugement",
      ],
      "examples": [
        "A débloqué un membre du groupe",
        "Renforce et affirme un feedback positif pour un bon travail",
      ],
    }, {
      "summary": "Aide les individus à résoudre des problèmes de performance difficile avec perspicacité, compassion et compétence",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Convinced a group member to solve a problem directly, rather than doing it for them",
        "Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": [
        "Aggregates signals of poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "Worked with group member to address persistent communication failures",
        "Arranged a transfer to another team, resulting in improved performance",
        "Managed group member closely to maximise chances of PIP success",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions",
        "Inserts themself into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Protected team from externalities so they could focus on goals",
        "Mediated sit-down between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-oiled team of teams",
      ],
      "examples": [
        "Turned around the performance of a problematic team",
        "De-escalated serious tensions between teams",
        "Rebuilt trust between senior team leads",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Fournit un soutien aux collègues, diffuse des connaissances et fait monter en compétences l'équipe",
    "milestones": [{
      "summary": "Mentore les individus de façon ad-hoc, soutient les nouveaux employés et transmet les connaissances institutionnelles",
      "signals": [
        "Se rend disponible pour un soutien et des conseils informels quand sollicité",
        "Fournit des conseils judicieux lorsque demandé",
        "Pousse un membre de son équipe à partager son avis",
      ],
      "examples": [
        "A présenté à un nouvel arrivant notre organisation P&E ou l'architecture d'un domaine",
        "A expliqué comment fonctionne le stats-indexer-app et comment désactiver l'indexation d'un indicateur",
        "A expliqué le fonctionnement des notifications push pour aider à résoudre un bug",
      ],
    }, {
      "summary": "Mentore les gens de façon proactive, et guide les gens vers des réalisations plutôt que de fournir la réponse",
      "signals": [
        "Intervient auprès d'un autre développeur pour lui expliquer les concepts et les best practices",
        "Pose des questions pour éclairer les concepts, plutôt que de les énoncer",
        "Laisse les autres leader quand cela aidera leur développement",
      ],
      "examples": [
        "A proposé une session de pair-programming à un.e collègue pour implémenter les push notifications",
        "A apporté une aide non sollicitée pour aider à progresser avec empatie",
        "A donné des conseils à un.e collègue pour animer une rétrospective",
      ],
    }, {
      "summary": "Enseigne à des petits groupes d'ingénieurs et s'assure de l'appropriation des concepts enseignés",
      "signals": [
        "Évite de faire des silos d'information quand il peut être utilement partagé avec d'autres (bus factor)",
        "Identifie la ou les personnes suseptibles d'intégrer un concept présenté et s'assure de la bonne implémentation",
        "Consacre du temps à mettre à niveau toute une équipe par des présentations et des workshops réguliers",
      ],
      "examples": [
        "A mené une présentation du fonctionnement d'un composant du produit (les stats, le paiement ibbü, le workflow conversationnel) dans le but de résoudre un problème ou faire avancer un projet",
        "A présenté le concept Type Safety, défendu le besoin de l'intégrer à nos pratiques, et effectué des code reviews auprès des équipes l'ayant implémenté",
        "A contribué avec les membres de l'équipe Value à implémenter la nouvelle Supervision en s'assurant de la bonne utilisation de Kafka et Avro",
      ],
    }, {
      "summary": "Encourage les gens à se guider les uns les autres, et crée des moyens pour qu'ils le fassent",
      "signals": [
        "Formalise et enseigne les bonnes pratiques de mentoring",
        "Accompagne un collègue pour qu'il présente son travail et enseigne aux autres",
        "Crée des espaces pour que les gens s'entraident",
      ],
      "examples": [
        "A enseigné à un.e collègue comment enseigner git",
        "A démocratisé le mob programming et a proposé un cadre pour le pratiquer efficacement",
      ],
    }, {
      "summary": "Insuffle et promeut une culture d'apprentissage et de développement au sein de toute l'équipe d'ingénierie",
      "signals": [
        "Établit des structures incitatives pour reconnaître et récompenser le mentorat",
        "Permet/incite les membres de l'équipe à se développer",
      ],
      "examples": [
        "A responsabilisé les bonnes personnes en mastering des guildes et s'est assuré de leur succès",
      ],
    }],
  },

  "EVANGELISME": {
    "displayName": "Evangélisme",
    "category": "D",
    "description": "Promeut iAdvize vers le monde extérieur et l'établit comme un lieu de travail attrayant",
    "milestones": [{
      "summary": "Représente bien iAdvize extérieurement et influence positivement les individus",
      "signals": [
        "Partage les succès personnels et organisationnels avec leur réseau",
        "Participe à des événements hébergés par iAdvize et discute avec les invités",
        "Communique une excitation authentique et honnête à propos de leur travail à l'extérieur",
      ],
      "examples": [
        "A agi comme guide pour un visiteur non-ami au bureau",
        "A présenté son rôle et son poste à des visiteurs",
        "A porté des vêtements au couleur d'iAdvize en dehors du cadre du travail",
      ],
    }, {
      "summary": "Participe à de petits événements et prend des mesures simples qui influencent positivement des groupes de personnes",
      "signals": [
        "Prend des mesures significatives pour présenter les gens à iAdvize",
        "Organise des événements positifs de petite ou moyenne envergure qui amènent les gens à iAdvize",
      ],
      "examples": [
        "S'est porté volontaire comme aide aux évènements 'Conversation'",
        "A organisé un petit tour des locaux à un groupe d'élèves",
        "A représenté iAdvize de façon approprié auprès des intégrateurs ou clients via téléphone ou Slack",
      ],
    }, {
      "summary": "S’investi pour influencer positivement de grands groupes de personnes sur leurs vision de iAdvize",
      "signals": [
        "Mentors ou participe de manière très visible à une organisation externe",
        "Construit des partenariats fructueux avec des organisations externes",
        "Écrit des articles de blog à propos de iAdvize qui génèrent un trafic modéré",
      ],
      "examples": [
        "A Représenté iAdvize lors d'une conférence d'experts de l'industrie",
        "A participé activement à un programme Genius Care",
      ],
    }, {
      "summary": "Établit iAdvize comme une grande entreprise innovante et lieu de travail pour l'ensemble de l'industrie",
      "signals": [
        "S'établit comme un leader d'opinion de l'industrie qui attire les talents",
        "Publie du matériel sur les innovations organisationnelles ou techniques de iAdvize",
        "Utilise un nombre significative de followers pour évangéliser iAdvize",
      ],
      "examples": [
        "Publication d'un article sur la technologie iAdvize dans une revue",
      ],
    }, {
      "summary": "Introduit iAdvize sous un jour positif pour un public plus large en dehors de l'industrie",
      "signals": [
        "Fournit des messages clés à un large public",
        "Influence les personnes ayant un large public pour parler positivement de iAdvize",
        "Favorise la reconnaissance et l'adoption de iAdvize en nombre significatif",
      ],
      "examples": [
        "Publié ou interviewé dans un journal grand public ou un site Web hors technologie",
        "Présenter une keynote à une conférence avec une attention internationale",
        "Représenté iAdvize dans les médias télévisés nationaux",
      ],
    }],
  },

  "RECRUTEMENT": {
    "displayName": "Recrutement",
    "category": "D",
    "description": "Renforce l'équipe en amenant d'excellents membres",
    "milestones": [{
      "summary": "Filtre les nouveaux candidats dans le pipeline et comprend comment évaluer les candidats",
      "signals": [
        "Possède un compte Smartrecruiters et est familier avec l'outil",
        "Examine régulièrement les offres d'emploi actuelles",
        "Examine le pipe existant pour review les candidats",
      ],
      "examples": [
        "A rejoins la 'room' sur le chat d'hangout : 'Tech recruitment'",
        "A proposer des candidats qualifiés pour des postes ouverts",
      ],
    }, {
      "summary": "Participe à des entretiens régulierement et aide l'équipe à prendre des décisions d'embauche",
      "signals": [
        "Utilise la rubrique de review pour fournir un feedback claire et objectif sur les candidats après entretien",
        "Participe sans leader à des Interviews de candidats avec empathie et les traite tous avec le même respect",
        "A été briefé et/ou formé pour participer à des entretiens techniques",
      ],
      "examples": [
        "A publié des reviews construites et argumenté dans Smart recruiter",
        "A fait des reviews de tests techniques",
        "A participé à des entretiens techniques",
      ],
    }, {
      "summary": "Maintient et renforce le processus actuel, et valide régulièrement de bons candidats",
      "signals": [
        "Dirige les entretiens techniques",
        "Enseigne aux nouveaux intervieweurs comment interviewer avec empathie",
        "Participe à la rédaction des offres",
      ],
      "examples": [
        "A rédigé des nouvelles questions d'entrevue répondant à nos critères de qualité",
        "A proposé des améliorations utiles et tangibles au processus de tests techniques",
        "A leader la création des tests techniques scala ou front",
      ],
    }, {
      "summary": "Contribue activement à la prise de décisions en matière d'embauche, et est en mesure de détecter les excellents candidats",
      "signals": [
        "Fait de la veille et/ou étudie les pratiques des autres sociétés",
        "Prends des décisions d'embauche, résouds les divergences entre les feedbacks contradictoires",
        "Comprend et mesure les problématiques liés à la diversification des profiles et des niveaux de salaires",
      ],
      "examples": [
        "A conduit des entretiens finaux axés sur le fit et la personalité des candidats",
        "A rédigé des feedbacks constructif et ettayés suite à des entretiens axès sur le fit et la personalité",
        "A contribué à une décision argumenté en prenant en compte tous les paramètres , salaire , fit , besoin vs compétences",
      ],
    }, {
      "summary": "Définit une stratégie de recrutement et investit dans des relations à long terme pour des rôles critiques",
      "signals": [
        "Définit le ton et la politique de la constitution d'une équipe diversifiée et de haute qualité",
        "Dresse des profils de candidats en utilisant le growth framework",
        "Développe et entretien un reseau de futur candidats pour des postes de haut niveau",
      ],
      "examples": [
        "A défini une stratégie en matière de proposition de salaires",
      ],
    }],
  },

  "CULTURE": {
    "displayName": "Culture",
    "category": "D",
    "description": "Développe le sentiment de communauté en interne et se donne à l'équipe",
    "milestones": [{
      "summary": "Est disponible, présent et s'efforce de contribuer positivement à l'esprit d'équipe",
      "signals": [
        "Participe de manière active et constructif aux réunions d'équipe",
        "Applique le 'Reasonable Person Principle' aux autres",
        "Se joint à des groupes ou à des comités en dehors des tâches régulières.",
      ],
      "examples": [
        "Est présent et attentif pendant les démos internes",
        "Est parti du principe que l'autre personne est raisonable lors d'un désaccord",
        "A évité de couper la parole et est resté à l'écoute lors d'un débat",
      ],
    }, {
      "summary": "Construit et renforce les liens et prend des mesures concrètes pour promouvoir une culture inclusive au sein de la swarm",
      "signals": [
        "Cultive un espace inclusive",
        "Cultive l’esprit d’équipe",
        "Cultive un espace de confiance",
      ],
      "examples": [
        "A expliqué la difficulté d’un ticket back à un junior afin qu’il puisse donné son avis",
        "A demandé l’avis d’un collègue introverti en rétro de sprint pour développer une ambiance de confiance pendant les réunion d’équipe",
        "A fait du peer programming",
        "A organisé un escape game en équipe",
        "A poussé ses collègues pour travailler ensemble sur le même projet au lieu de chacun dans son coin",
        "Propose et pousse régulièrement des projets collaboratifs Cagnotte",
        "Est intervenu lors d’une discussion tendu afin d’aider les deux parties à arriver à un consensus",
      ],
    }, {
      "summary": "Aide à bâtir une culture d'entraide et donne l'exemple du dévouement",
      "signals": [
        "Prend des sujets fastidieux pour l'équipe sans qu'on lui demande",
        "Consacre du temps à aider en dehors de ses responsabilités directes",
        "Organise des séances de peer programming au sein de la swarm",
      ],
      "examples": [
        "S'est proposé pour changer de swarm afin d'aider une autre équipe",
        "A refactoré des centaines de lignes de codes dans l'admin, le desk ou le livechat en dehors de ses responsabilités",
      ],
    }, {
      "summary": "Aide à renforcer l'esprit d'équipe au sein de P&E",
      "signals": [
        "Est au courant des difficultés rencontrés dans les autres swarms et s'efforce d'apporter de l'aide",
        "Créer des espaces et évenements pour créer du lien avec gens",
      ],
      "examples": [
        "A mis en place des workshop pour aider les autres à monter en compétences afin qu'ils puissent avancer sur leur sujet technique",
        "A participé à l'organisation du sortons du cadre de la r&d",
        "A mis en place la genius roulette",
        "A mis en place les jeudize",
      ],
    }, {
      "summary": "Protège la culture positive et définit les politiques qui soutiennent les relations entre les équipes",
      "signals": [
        "Rassembler des équipes distinctes pour créer des liens",
        "Définit le ton, la politique et les objectifs concernant le maintien d'une entreprise inclusive et participative",
      ],
      "examples": [
        "Organise les genius beer",
        "Organise les Conversation with",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles: Titles = {
  'SCRUM_MASTER': {
    label: 'Scrum Master',
    urlId: 0
  },
  'EXTERNAL_REFERENT': {
    label: 'External Referent',
    urlId: 0
  },
  'ENGINEER_PROJECT_OWNER': {
    label: 'Engineering Project Owner',
    urlId: 0
  },
  'ARCHITECTURE_OWNER': {
    label: 'Architecture Owner',
    urlId: 0
  },
}

export const titlesIds = Object.keys(titles)
