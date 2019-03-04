import COMMON_TRACKS from './shared';

const tracks = {
  "1": {
    "displayName": "Frontend",
    "category": "A",
    "description": "Develops expertise in frontend development. Knowledgeable about browser APIS, the DOM, CSS,  performance, and frameworks like React.",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Makes minor modifications to existing screens",
        "Fixes simple design quality issues",
        "Uses JS and CSS appropriately, following documented best practices",
      ],
      "examples": [
        "Implemented pre-existing sticky footer on a report",
        "Solved text alignment or overflow issues for a responsive mobile view",
        "Built a dashboard widget using established components and style guide acceptable CSS",
      ],
    }, {
      "summary": "Works effectively within established client side frameworks, following current best practices and makes suggestions on potential improvements",
      "signals": [
        "Specs and builds interactive components independently",
        "Prototypes new features or behaviours quickly",
        "Makes sensible abstractions based on template and code patterns",
      ],
      "examples": [
        "Created a brand-new reusable component in Storybook",
        "Built a WIP feature branch to drive a discussion around changes to clicky-shifter shared component",
        "Refactored a teacher specific app component to our shared component pool",
      ],
    }, {
      "summary": "Makes changes to existing front-end systems to improve conditions for other developers, or to make product possible.",
      "signals": [
        "Improves existing developer experience by creating high-impact enablers",
        "Engages in research tasks to identify high value libraries and design patterns",
        "Performs optimizations to improve build speed, render speed, and reduce client-side jank",
      ],
      "examples": [
        "Added helper functions to improve testing in React",
        "Investigated and implemented an alternative library for form management",
        "Improved report generation speed",
      ],
    }, {
      "summary": "Builds complex and reusable improvements to established shared components, SPAs, build processes, and drives large-scale change",
      "signals": [
        "Intimately understands SPA build tools and uses them effectively",
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
      ],
      "examples": [
        "Improved build process speed",
        "Introduced and lead a change to adopt a mono-repo structure for React projects to promote and reinforce shared component use ",
        "Designed and implemented education badge animations",
      ],
    }, {
      "summary": "Is an industry-leading expert in front-end development and sets strategic front-end direction for our engineering teams",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for SPAs and ensures projects are in service of it",
      ],
      "examples": [
        "Actively contributes high impact value to open-source projects that Prodigy uses",
        "Defined and drove a migration strategy towards React development",
        "Introduced, actively maintains, and is a knowledge expert on React+Hydra",
      ],
    }],
  },

  "2": {
    "displayName": "Backend",
    "category": "A",
    "description": "Develops expertise in server-side development using technologies like Node, Express, and GraphQL. Also is knowledgeable about persistence layers.",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Implements client changes to access an endpoint",
        "Has basic knowledge of web protocols and how to run a local development environment",
        "Debugs server calls at the client-level",
      ],
      "examples": [
        "Added new endpoint handling functions to APIClient/NetworkManager",
        "Understands how to run a basic development environment and how to set up QA environments using our QA tools",
        "Used the Chrome Network tab to analyze payload of the character update call",
      ],
    }, {
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Has basic knowledge of Prodigy's server environment",
        "Contributes to to APIs and GraphQL",
        "Debugs backend calls using 3rd-party tools",
      ],
      "examples": [
        "Ran Prodigy-GraphQL locally to debug a misbehaving mutation",
        "Added new RESTful endpoints or GraphQL schema changes for new product features",
        "Used Postman to simulate client calls when developing a new endpoint",
      ],
    }, {
      "summary": "Makes changes to existing back-end systems and databases to improve conditions for other developers",
      "signals": [
        "Determines data needs from product requirements",
        "Able to extract and modify stored data",
        "Knows when application logic should exist on the client or server",
      ],
      "examples": [
        "Making informed decisions between relational and document stores",
        "Wrote a DB query to bulk update item prices",
        "Migrated report generation off of the client",
      ],
    }, {
      "summary": "Builds complex and reusable improvements to established back-end services, and can confidently drive large scale data migrations",
      "signals": [
        "Optimizes existing endpoints",
        "Makes appropriate choice to determine how data should be stored and accessed",
        "Integrates third party services or libraries confidently and effectively while understanding the limits and contraints",
      ],
      "examples": [
        "Reduced the query complexity or round trips for expensive lookups",
        "Migrated Education Data into a querable DB",
        "Migrated Prodigy-API from Restify to Express",
      ],
    }, {
      "summary": "Is an industry-leading expert on back-end development, scalability, database theory, and sets strategic back-end direction for our engineering teams",
      "signals": [
        "Delivers appropriately complex systems that achieve their goals",
        "Performs system-wide optimizations",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Implemented, actively maintains, and is a knowledge expert on authorization and authentication",
        "Refactored services to reduce the amount of communication needed between services",
        "Used machine learning load balancer for connecting players to PVP servers",
      ],
    }],
  },

  "3": {
    "displayName": "Foundations",
    "category": "A",
    "description": "Develops expertise in providing foundational infrastructure for development. This includes working on build processes, pipelines, or frameworks, and general infrastructure knowledge.",
    "milestones": [{
      "summary": "Understands established infrastructure, deployment processes, and local development environments ",
      "signals": [
        "Writes thorough postmortems for service outages",
        "Can run and debug code through local development environments",
        "responds promptly to alerts and issues that are made visible through telemetry services",
      ],
      "examples": [
        "Contributes to postmortem conversations and helps establish important action items",
        "Understands how to launch and run a local Docker environment",
        "Prioritizes bugs that impact millions of users over a game of ping-pong",
      ],
    }, {
      "summary": "Works effectively with established infrastructure, deployment processes, and local development environments ",
      "signals": [
        "When they see something, they say something.",
        "Made minor version upgrades to technologies",
        "Builds on top of existing infrastructure that provides high capacity throughput",
      ],
      "examples": [
        "Reports issues to relevent teams and GitHub issue trackers",
        "Updates to minor versions of React",
        "Extends GraphQL mutations with new business logic",
      ],
    }, {
      "summary": "Builds minor improvements to established infrastructure, deployment processes, and local development environments ",
      "signals": [
        "When implementing product, pushes back if technology changes would limit technical liabilities and better support the development of the product.",
        "Acts as primary maintainer for existing critical systems",
        "Writes comprehensive documentation to support their changes.",
      ],
      "examples": [
        "\"We don't have a generalized solution for this. Let's build one first.\"",
        "Owns and responds quickly to Authentication outages",
        "Updates GraphQL documentation with descriptions around schema changes",
      ],
    }, {
      "summary": "Builds complex and reusable improvements to established infrastructure, deployment processes, and local development environments ",
      "signals": [
        "Designs complex systems that use a full gamut of infrastructure tools",
        "Demonstrates deep knowledge of foundational systems and build processes",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Develops and maintains a deferred job queue",
        "Updates production AWS build pipelines",
        "Migrating Character data to DynamoDB",
      ],
    }, {
      "summary": "Is an industry-leading expert in infrastructure, deployment processes, scaling, and container orchestration",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Builds large scale changes while also providing as much training, documentation, and support as possible during the adoption of the project",
        "Establishment and propagation of GraphQL as a new leading backend service",
        "Successfully built and integrated Prodigy Idenity Services",
      ],
    }],
  },

  "4": {
    "displayName": "Programming",
    "category": "A",
    "description": "Develops expertise in foundational high-quality programming. Focus on clean-code, refactoring, naming, testing, software design, etc.",
    "milestones": [{
      "summary": "Works effectively with guidance to deliver high-quality software",
      "signals": [
        "Writes and maintains unit tests for changes",
        "Pull requests are well formed, readable, and contain steps for testing the feature",
        "Follows established patterns and naming conventions",
      ],
      "examples": [
        "Updates direct and adjacent unit tests when developing features",
        "Follows the established GitHub PR template format",
        "Variables are sensibly named and err on the side of readability",
      ],
    }, {
      "summary": "Works effectively with established patterns and design decisions and makes suggestions on potential improvements",
      "signals": [
        "Contributes to Technical Design Document discussions",
        "Identifies refactoring opportunities and safely applies refactored changes to isolated systems ",
        "Builds features and upgrades while not compromising test coverage",
      ],
      "examples": [
        "Contributes thoughts and suggestions for an Admin referral system database Schema",
        "Refactored to Modal views with similar functionallity to be a single component",
        "Ships Pull Requests with new tests that aren't brittle",
      ],
    }, {
      "summary": "Consistently delivers high quality code, promotes improvement suggestions, and enables other team-members to deliver quality software",
      "signals": [
        "Designs and leads moderately complex systems through discussions, TDDs, and impact analysis",
        "Provides descriptive and actional feedback in code review with logical reasoning around suggestions for change",
        "Actively works with a PO/PM to address technical challenges and reduce technical debt during project planning",
      ],
      "examples": [
        "Develops a well formed TDD for a new Progress Report with thoughts on database schema changes, technical challenges, and missing enablers",
        "Understands the difference between nitpicks and crucial feedback. Actively gaurds against low quality code through providing examples on what can be done better",
        "Works with POs to evaluate the ROI on migrating a report over to React versus updating an old BackBone report",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Designs complex systems that use a full gamut of front-end, back-end, and DevOps solutions",
        "Designs systems and infrastructure that gracefully fails over",
        "Introduces/creates new frameworks or enablers",
      ],
      "examples": [
        "Implemented a rate limiting solution using AWS Lambda, client, and server changes.",
        "Implemented a queue system with good error reporting and exponential backoff",
        "GraphQL job queue",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Designs and archtitects destributed computing solutions at scale",
        "Applies expert level knowledge of systems at Prodigy to stratigize with leadership",
        "Implemented a fundamental change to the way developers work across all projects",
      ],
      "examples": [
        "Develops a distributed platform for headless Lambda services",
        "Coordinates long-term technical strategical thinking with Product Leads  to make informed product decisions",
        "Introduced new tooling for complex data aggregation ",
      ],
    }],
  },
}

export default {
  ...tracks,
  ...COMMON_TRACKS
}
