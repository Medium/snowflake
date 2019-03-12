import commonTracks from './shared';

const tracks = {
  "1": {
    "displayName": "Game",
    "category": "A",
    "description": "Develops expertise in building game systems and technologies",
    "milestones": [{
      "summary": "Works effectively within established piplines and automation, following current best practices",
      "signals": [
        "Delivers features requiring simple modifications",
        "Fixes simple design quality issues",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Built a new UI menu to advertise memberships",
        "Created a new item type in the game that can be added to the backpack",
        "Improved a cutscene by adding a screen shake when an NPC appears",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes sensible abstractions based on template and code patterns",
        "Migrates code from old patterns to new patterns",
        "Prototypes simple new features quickly",
      ],
      "examples": [
        "Created a new UI component to support grid layouts",
        "Added support for quests to have a different NPC used for completion",
        "Added a new zone and questline",
      ],
    }, {
      "summary": "Develops standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as a primary maintainer of existing critical systems",
        "Acts as a caretaker for all game system and technologies code",
        "Designs moderately complex systems",
      ],
      "examples": [
        "Developed a system for creating and modifying a house for the player",
        "Defined strategy for storing and retrieving items for a backpack",
        "Added custom UI pooling components to support a performant infinite scroll list",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Demonstrates deep knowledge of game systems and patterns",
        "Pioneers architecture strategies that reduce engineer burden",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Designed scene management system and plan to migrate UI system",
        "Designed game service model for sharing logic between systems",
        "Built state machine system that can be used for any custom action sequence",
      ],
    }, {
      "summary": "Is an industry-leading expert in game development or sets strategic game development direction",
      "signals": [
        "Defines long-term vision for game tech and ensures projects are in service of it",
        "Identifies and solved systemic problems with current architecture",
        "Invents new techniques to stretch the limits of game development",
      ],
      "examples": [
        "Defined and drove philosophy change from inheritance to composition",
        "Invented new strategy for lighting in pixelated games",
        "Defined and implemented strategy for data and asset retrieval",
      ],
    }],
  },

  "2": {
    "displayName": "Web",
    "category": "A",
    "description": "Develops expertise in web technologies, such as HTML5, JavaScript, or TypeScript",
    "milestones": [{
      "summary": "Works effectively within established web architectures, following current best practices",
      "signals": [
        "Makes minor changes to support client needs",
        "Makes simple configuration changes to modules",
        "Uses web technologies appropriately, understands core concepts",
      ],
      "examples": [
        "Fixed an issue with the DOM InputField class",
        "Hooked up an action to externally load the toy unlock page",
        "Interacted with the education module appropriately",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Made minor version upgrades to technologies",
        "Makes sensible abstractions when appropriate",
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
      ],
      "examples": [
        "Upgraded Phaser to a new minor version",
        "Added an embedded video player support using the DOM",
        "Added fullscreen support for the mobile Safari browser",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Performs systemic tasks to significantly minimize bundle size",
        "Upgrades major versions of libraries",
        "Adds support for new browser features with backwards compatibility",
      ],
      "examples": [
        "Implemented WebFont support into the game client",
        "Profiled web client and found subtle memory management issues",
        "Fixed Android web browser issues with WebGL rendering",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Demonstrates deep knowledge of web technologies",
        "Delivers complex, reusable systems that achieve their goals",
        "Introduces new or improved technologies to meet underserved needs",
      ],
      "examples": [
        "Developed tools to assist in profiling memory and performance issues",
        "Designed and implemented custom login system and connected it to Google",
        "Wrote a proprietary WebGL renderer with seamless Canvas fallback",
      ],
    }, {
      "summary": "Is an industry-leading expert in web or sets strategic web direction",
      "signals": [
        "Designs and builds innovatve, industry-leading open-source modules",
        "Invents new techniques to innovate and overcome browser constraints",
        "Defines long-term vision for web tech and ensures projects are in service of it",
      ],
      "examples": [
        "Researched, vetted, and selected TypeScript as our statically typed language",
        "Defined a complete migration plan to WebAssembly",
        "Defined and drove plan for an open-source HTML5 engine and editor suite",
      ],
    }],
  },

  "3": {
    "displayName": "Infrastructure",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, automation or tools",
    "milestones": [{
      "summary": "Works effectively within established piplines and automation, following current best practices",
      "signals": [
        "Writes effective unit tests for existing components",
        "Makes simple configuration changes to existing pipelines",
        "Updates release documentation to match new process changes",
      ],
      "examples": [
        "Wrote a thorough postmortem on a production issue",
        "Added automation support to a new Button class",
        "Solved an issue with the automated asset pipeline independently",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes version updates to foundational technologies in a safe and reliable way",
        "Builds variations of pipelines based on existing architecture",
        "Triages production issues correctly and independently",
      ],
      "examples": [
        "Added Spine export support to the art pipeline",
        "Wrote a small script to calculate texture memory at runtime",
        "Made an optimization to the release pipeline to reduce build times",
      ],
    }, {
      "summary": "Develops standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Identifies scale issues before they become problems",
        "Builds pipelines for new technologies or processes",
        "Acts as a primary maintainer for existing critical systems",
      ],
      "examples": [
        "Built a new pipeline to support mobile builds",
        "Designed and drove plan to optimize asset pipeline disk usage",
        "Built a system for automating toy code unlocking",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable teams to deliver better",
      "signals": [
        "Delivers complex projects that encompass multiple systems and technologies",
        "Demonstrates deep knowledge of foundational systems",
        "Introduces flexible, reusable systems to improve our pipelines",
      ],
      "examples": [
        "Designed flexible framework for scripting automated tests",
        "Wrote a complex tool used to find unused assets and optimize atlas storage",
        "Wrote a custom framework to define build options through a data format",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational systems or sets strategic foundational system direction",
      "signals": [
        "Designs transformational projects in service of long-term goals",
        "Defines the strategic vision for foundational and supporting technologies",
        "Invents new techniques to improve the cadence and reliability of our pipelines",
      ],
      "examples": [
        "Defined and drove plan for a completely revamped art pipeline",
        "Defined and developed our continuous delivery strategy",
        "Defined plan for automating native mobile builds using code transpilation",
      ],
    }],
  },

  "4": {
    "displayName": "Core",
    "category": "A",
    "description": "Develops expertise in core technologies, such as game engines, networking, multi-threading or AI",
    "milestones": [{
      "summary": "Works effectively within established core technologies, following current best practices",
      "signals": [
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
        "Makes minor changes to support client needs",
      ],
      "examples": [
        "Fixed a minor issue with a pixel shader",
        "Hooked up a new Titan endpoint that reduces its health by a value",
        "Added new branch for a simple decision tree AI system",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Creates new engine components based on existing architecture",
        "Makes sensible abstractions when appropriate",
        "Considers implications of change to all platforms and stakeholders",
      ],
      "examples": [
        "Added socket communication for new multiplayer feature",
        "Wrote a new blur shader for use in a cutscene",
        "Moved our asset loading to a web worker",
      ],
    }, {
      "summary": "Develops standalone systems and demonstrates a nuanced understanding of core technologies",
      "signals": [
        "Acts as a primary maintainer for existing critical systems",
        "Designs moderately complex systems",
        "Works effectively with the OpenGL shader language",
      ],
      "examples": [
        "Added support for Google protocol buffers",
        "Designed and developed asset caching strategy for mobile devices",
        "Implemented socket support and defined best practices",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best pracrtices, scalability and performance",
      "signals": [
        "Delivers complex systems that achieve the goals of multiple stakeholders",
        "Demonstrates deep knowledge of core tech across platforms",
        "Pioneers architecture migration strategies that reduce engineer burden",
      ],
      "examples": [
        "Defined our multi-threading strategy in the game client",
        "Redesigned multiplayer architecture to handle scalability issues",
        "Designed and developed cross-platform payment libraries",
      ],
    }, {
      "summary": "Is an industry-leading expert incore technologies or sets the strategic direction for our use of core technologies",
      "signals": [
        "Defines transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic issues with current architecture",
      ],
      "examples": [
        "Defined and drove a new machine-learning strategy for AI",
        "Defined our strategy and best practices for all game networking",
        "Defined and drove plan to migrate game engine to true ECS",
      ],
    }],
  },
}

export default {
  ...tracks,
  ...commonTracks
}
