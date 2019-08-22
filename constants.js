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
    "displayName": "Career development",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Advocates on behalf and in defense of a group member",
        "Shares opportunities for improvements and recognises achievements",
        "Explains appropriate available industry paths",
      ],
      "examples": [
        "Collected and delivered feedback",
        "Discussed career options and areas of interest informally",
        "Hosted a Floodgate Academy intern",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Ensure a group member has an appropriate role on their team",
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive 1:1s",
        "Provided coaching on how to have difficult conversations",
        "Taught group members the GROW model",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression every 6 weeks",
        "Suggested appropriate group member for Tech Lead position",
        "Arranged a requested switch of discipline for a group member",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Completed training on situational leadership",
        "Built a resourcing plan based on company, team, and individual goals",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identified leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to group leads",
        "Devised Pathwise curriculum for group leads",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Org design",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": [
        "Reflects on meetings that leave them inspired or frustrated",
        "Teaches others about existing processes",
        "Actively participates and makes contributions within organizational processes",
      ],
      "examples": [
        "Facilitated effective tactical meeting with empathy",
        "Explained tactical meeting format to a new hire",
        "Provided feedback on sprint planning meeting",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organizational systems thinking",
        "Advocates for improved diversity and inclusion, and proposes ideas to help",
      ],
      "examples": [
        "Defined Frankenmeeting structure for small team",
        "Improved Watch on-call rotation scheduling",
        "Defined standard channels for inter-team communication",
      ],
    }, {
      "summary": "Develops processes to solve ongoing organizational problems",
      "signals": [
        "Creates programs that meaningfully improve organizational diversity",
        "Solves long-standing organizational problems",
        "Reallocates resources to meet organizational needs",
      ],
      "examples": [
        "Developed baseline team templates for consistency",
        "Created bug-rotation program to address ongoing quality issues",
        "Defined Guilds manifesto and charter",
      ],
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyzes existing processes for bias and shortfall",
        "Ties abstract concerns to concrete organizational actions or norms",
      ],
      "examples": [
        "Connected mobile recruiting difficulties to focus on excellence",
        "Raised leadership level change discrepancies",
        "Analyzed the hiring rubric for false negative potential",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for reorgs",
      ],
      "examples": [
        "Lead efforts to increase number of mobile engineers",
        "Directed resources to meaningfully improve diversity at all levels",
        "Built the growth framework rubric",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Wellbeing",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
        "Keeps confidences unless legally or morally obliged to do otherwise",
        "Applies the reasonable person principle to others",
        "Avoids blame and focuses on positive change",
      ],
      "examples": [
        "Ensured group members were taking enough vacation",
        "Put themself in another's shoes to understand their perspective",
        "Checked in with colleague showing signs of burnout",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Sheds light on other experiences to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
      "examples": [
        "Coordinated a small celebration for a project launch",
        "Connected tedious A|B testing project with overall company goals",
        "Noted a team without a recent win and suggested some easy quick wins",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": [
        "Trains group members to separate stimulus from response",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "Completed training on transference and counter transference",
        "Completed training on compromise and negotiation techniques",
        "Reframed a problem as a challenge, instead of a barrier, when appropriate",
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
    "displayName": "Accomplishment",
    "category": "C",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
        "Notices when someone is stuck and reaches out",
        "Helps others break down problems into feasible, tangible next steps",
        "Talks through problems non-judgmentally",
      ],
      "examples": [
        "Completed training on diagnosing problems",
        "Unblocked a group member",
        "Reinforces and affirms positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Completed training on decision making",
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
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to Medium's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase the bus factor of systems",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave a brown bag presentation on payments",
        "Wrote Hatch post on avoiding RDS backfill issues",
        "Wrote Medium-U content module",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
      ],
      "examples": [
        "Created and lead Medium's Women in Eng group",
        "Organized an Eng All Hands with an outside speaker",
        "Designed and taught web client guild curriculum",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Mentored mentors",
        "Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "EVANGELISME": {
    "displayName": "Evangélisme",
    "category": "D",
    "description": "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents Medium well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Attends Medium-hosted events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shared a Medium product launch post on Facebook",
        "Acted as a guide for a non-friend visitor to the office",
        "Supported PR efforts by giving a quote or having a photo taken",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to Medium",
        "Joined public Slack group and represented Medium appropriately, and well",
        "Organizes positive small- or medium-sized events that bring people to Medium",
      ],
      "examples": [
        "Volunteered as a helper for CODE2040 writing workshop",
        "Organized a short tour of the office by college students",
        "Talked at a Women Who Code event hosted at Medium",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Medium",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes blog posts about Medium that receive moderate traffic",
      ],
      "examples": [
        "Represented Medium on a panel at a conference of industry experts",
        "Established close ties with Creative Commons",
        "Built a durable, long-standing relationship with Code2040",
      ],
    }, {
      "summary": "Establishes Medium as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about Medium's organizational or technical innovations",
        "Leverages significant following to evangelise Medium",
      ],
      "examples": [
        "Published a paper on Medium technology in a peer-reviewed journal",
        "Authored joint-press release with EFF on DNT",
        "Published “Why Content Editable Is Terrible” on the Medium engineering blog",
      ],
    }, {
      "summary": "Introduces Medium in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about Medium positively",
        "Drives recognition and adoption of Medium in significant numbers",
      ],
      "examples": [
        "Published or interviewed in a mainstream newspaper or website outside tech",
        "Keynoted a conference with international attention",
        "Represented Medium in national televised media",
      ],
    }],
  },

  "RECRUTEMENT": {
    "displayName": "Recrutement",
    "category": "D",
    "description": "Strengthens Medium's team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at Medium",
      "signals": [
        "Reviews existing network for hiring leads regularly",
        "Shadows interviews to gain familiarity with process",
        "Reviews current job postings regularly",
      ],
      "examples": [
        "Completed interview calibration",
        "Set up casual sessions to practice asking questions",
        "Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": [
        "Uses interview rubric to provide clear, objective feedback on candidates",
        "Interviews candidates with empathy and treats them all with equal respect",
        "Researches approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "Added observable evidence for every rating",
        "Started a monthly brunch for candidates to meet Medium employees",
        "Tested a new service for quality and diversity of candidates",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": [
        "Teaches new interviewers how to interview with empathy",
        "Models great interview technique and feedback when shadowed",
        "Reverse shadows trainees and helps calibrate their feedback",
      ],
      "examples": [
        "Wrote new interview question which meets our question quality criteria",
        "Brought candidates into our pipeline proactively, with a high conversion rate",
        "Proposed useful, tangible improvements to the interview process",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Documents subtle cues in interviews that indicate values alignment",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Top-grades candidates and teases out character traits",
      ],
      "examples": [
        "Planned engineering summit on interview process and training",
        "Organized and lead Medium's presence at a recruitment fair",
        "Started CODE2040 internship program",
      ],
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": [
        "Sets the tone, policy and goals around building a diverse, high-quality team",
        "Identifies and brings in promising acquisitions",
        "Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
        "Talked with a senior candidate over many months to fill a critical role",
        "Organized efforts around convincing acquired engineers to join and stay",
        "Set goals, then tracked and reported metrics on team demographics over time",
      ],
    }],
  },

  "CULTURE": {
    "displayName": "Culture",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": [
        "Participates in team activities and offsites",
        "Treats colleagues and clients with respect",
        "Joins groups or committees outside regular duties",
      ],
      "examples": [
        "Joined and actively participated in the web client guild",
        "Brought a small gift back from vacation for the team",
        "Wrote entertaining and informative Prod Ops writeups on Hatch",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other engineers outside direct responsibilities",
        "Finds ways to ramp up and engage new hires quickly",
      ],
      "examples": [
        "Created onboarding bingo",
        "Brought shy and introverted people into a dominant conversation",
        "Volunteered as secretary for a team",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
        "Takes on additional Watch shifts at short notice",
        "Pitches in to help other teams hit deadlines, without missing own deadlines",
        "Uses position to raise difficult issues on someone's behalf",
      ],
      "examples": [
        "Lead Watch cycles with little support while still contributing to projects",
        "Started and drove the LGBTQIA ERG",
        "Stayed positive and improved team morale during period after layoffs",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Goes above and beyond on the Watch, serving the team without complaint",
        "Implements concrete programs to signficantly improve team inclusivity",
        "Takes on large amounts of tedious grunt work for the team without being asked",
      ],
      "examples": [
        "Devoted large amount of time to helping outside direct responsibilities",
        "Refactored hundreds of legacy Shepherd nodes",
        "Acted as sole maintainer of Boxen for years",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness",
        "Holds individuals, teams, and leadership accountable to Medium's values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "Organized wine and olive tasting offsite to Napa for the whole engineering org",
        "Devised, delivered and acted on findings from an engineer happiness survey",
        "Challenged and corrected exclusionary behaviour or policies",
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

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
