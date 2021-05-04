import { TrackDefinition, MilestoneDefinition } from "./tracks";

export enum Categories {
  Technical,
  Craft,
  Professional,
  Interpersonal,
}

export enum Tracks {
  // Technical
  Frontend,
  Backend,
  Database,
  Testing,
  Ops,
  // Craft
  Architecture,
  Quantity,
  Quality,
  Product,
  // Professional
  Independence,
  Organization,
  Process,
  // Interpersonal
  Communication,
  Culture,
  Mentoring,
}

/**
 * For each milestone level, how many points are earned.
 * Higher levels earn more points to reflect the increased difficulty curve when mastering a skill.
 */
export const milestonesToPoints = {
  "0": 0,
  "1": 1,
  "2": 3,
  "3": 6,
  "4": 10,
  "5": 15,
};

/**
 * For a given point value, what level is earned.
 * Sub-levels indicated by a decimal receive different compensation but are grouped into the same title.
 */
export const pointsToLevels = {
  "0": "0",
  "15": "1.1", // 15x1
  "23": "1.2",
  "31": "1.3",
  "42": "2.1", // 14x3
  "56": "2.2",
  "70": "2.3",
  "89": "3.1", // 13x6
  "104": "3.2",
  "120": "4.1", // 12x10
  "140": "4.2",
  "165": "5", // 11x15
};

/**
 * For each base level, what titles are available.
 * Maker (Engineer) and Manager tracks are created equal in order to avoid having to go into management to advance.
 */
export const levelToTitles = {
  "0": ["E0 (Apprentice Software Engineer)"],
  "1": ["E1 (Junior Software Engineer)"],
  "2": ["E2 (Software Engineer)"],
  "3": ["E3 (Senior Software Engineer)", "M3 (Engineering Manager)"],
  "4": ["E4 (Staff Software Engineer)", "M4 (Senior Engineering Manager)"],
  "5": ["E5 (Principal Software Engineer)", "M5 (Director of Engineering)"],
};

/**
 * For each base level, the minimum number of points that must be earned in every category.
 * This ensures a minimum level of performance in all areas.
 */
export const levelsToMinCategoryPoints = {
  "0": 0,
  "1": 2,
  "2": 5,
  "3": 9,
  "4": 14,
  "5": 20,
};

// TODO: minTracksAtLevel?
// "0": 0,
// "1": 10,
// "2": 9,
// "3": 8,
// "4": 7,
// "5": 6,

/**
 * The maximum number of points that can be earned in a single category.
 * Reaching the highest levels requires branching out into multiple areas of mastery.
 */
export const maxPointsFromCategory = 50;

const technicalSummaryL0 = "Inexperienced";
const technicalSummaryL1 = "Beginner";
const technicalSummaryL2 = "Competent";
const technicalSummaryL3 = "Experienced";
const technicalSummaryL4 = "Advanced";
const technicalSummaryL5 = "Expert";

const technicalBehaviorsL0 = [
  "No significant experience in this area",
  "Needs daily assistance to complete tasks",
];
const technicalBehaviorsL1 = [
  "Demonstrates a working understanding of at least one language / framework",
  "Completes well-defined tasks with occasional assistance",
];
const technicalBehaviorsL2 = [
  "Reliably completes most tasks without assistance",
];
const technicalBehaviorsL3 = [
  "Weighs pros and cons of different soultions to a technical problem",
  "Resolves ambiguous tasks and clarifies for others",
  "Identifies when refactoring is required to reduce tech debt",
];
const technicalBehaviorsL4 = [
  "Effectively weighs pros and cons of different frameworks and libraries",
  "Gained a reputation as someone anyone would want to help out in this area",
  "Resolves ambiguous product requirements and clarifies for others",
];
const technicalBehaviorsL5 = [
  "Understands at least one framework top to bottom",
  "Defines roadmap/milestone-level technical projects",
];

const technicalResponsibilitiesL0 = [
  "Fixing a simple bug, in any amount of time",
  "Reading documentation to learn more",
];

export const trackDefinitions: TrackDefinition[] = [
  <TrackDefinition>{
    track: Tracks.Frontend,
    category: Categories.Technical,
    description:
      "Making web pages and sites (HTML, CSS, React, DOM/JSON/browser-based JS/TS)",
    milestones: [
      {
        // 0
        summary: technicalSummaryL0,
        exampleBehaviors: technicalBehaviorsL0,
        exampleResponsibilities: [
          "Editing the text on a page",
          ...technicalResponsibilitiesL0,
        ],
      },
      {
        // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Adding a new component from existing examples",
          "Fixing moderately complicated bugs",
          "Writing effetive unit tests",
          "Giving PR feedback that generally consists of validating acceptance criteria, and catching oversights or typos",
        ],
      },
      {
        // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
          "Creating a new component from scratch, avoiding any anti-patterns",
          "Giving substantive code review feedback at a Class-level based on code quality and best practices",
        ],
      },
      {
        // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
          "Championing best practices and appropriate design patterns",
          "Designing components and abstractions that are reusable across classes and applications",
          "Giving substantive code review feedback at a System-level (Frontend Architecture)",
        ],
      },
      {
        // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
          "Identifying technical debt, and frontend performance bottlenecks, bringing solutions to the table",
          "Staying on top of emerging changes in frontend tech and brings relevant knowlege to the team",
          "Refactoring a major part of an existing system",
          "Designing a major component or system, breaking down large tasks and delegating",
        ],
      },
      {
        // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [
          'Guiding team in decisions a la "refactor v.s. rebuild", or "build v.s. buy"',
          "Accurately defining value, scope, impact, risk, and dependencies across application/s",
          "Effectively breaking down frontend projects into small chunks of work and delegate",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Backend,
    category: Categories.Technical,
    description:
      "Making application logic, services, and data pipelines (API, REST, Node-based JS/TS, C#, Java, Ruby)",
    milestones: [
      {
        // 0
        summary: technicalSummaryL0,
        exampleBehaviors: technicalBehaviorsL0,
        exampleResponsibilities: [
          "Adding a field to a data model",
          ...technicalResponsibilitiesL0,
        ],
      },
      {
        // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Adding a new data adapter implementation from existing examples",
          "Fixing moderately complicated bugs",
          "Writing effective unit tests",
          "Giving code review feedback that generally consists of validating Acceptance Criteria, and catching oversights or typeos",
        ],
      },
      {
        // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
          "Creating a new API endpoint from scratch, avoiding any anti-patterns",
          "Giving substantive code review feedback at a Class-level based on quality and best practices",
        ],
      },
      {
        // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
          "Championing best practices and appropriate design patterns",
          "Creating a new service from scratch with specifications",
          "Giving substantive code review feedback at a System-level (Backend Architecture)",
        ],
      },
      {
        // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
          "Debugging complex system-level issues without guidance",
          "Identifying technical debt, and API performance bottlenecks, bringing solutions to the table",
          "Gaining expertise in security best practices and lead by example",
          "Designing a major feature or system, breaking down large tasks and delegating",
        ],
      },
      {
        // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [
          "Leading architecture for all backend systems",
          "Leading security efforts across all API surface areas, communicating concerns and risk to leadership",
          'Guides team in decisions a la "refactor v.s. rebuild", or "build v.s. buy"',
          "Accurately define value, scope, impact, risk, and dependencies across application/s",
          "Effectively break down frontend projects into small chunks of work and delegate",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Database,
    category: Categories.Technical,
    description: "Designing and administering databases (SQL, NoSQL)",
    milestones: [
      {
        // 0
        summary: technicalSummaryL0,
        exampleBehaviors: technicalBehaviorsL0,
        exampleResponsibilities: [
          "Making modifications to existing queries",
          ...technicalResponsibilitiesL0,
        ],
      },
      {
        // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Writing basic CRUD queries to retrieve and store data",
          "Updating existing schema with guidance",
        ],
      },
      {
        // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
          "Designing new tables with appropriate schema",
        ],
      },
      {
        // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
          "Maintaining table indexes",
          "Optimizing data types for storage space and retrieval speed",
        ],
      },
      {
        // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
          "Advanced performance tuning",
          "Writing complex queries to debug and solve application data anomalies",
        ],
      },
      {
        // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [
          "Choosing between database technologies",
          "Designing a comprehensive data storage architecture from scratch",
          "Owns upgrade and security concerns as it pertains to the architecture and querly language",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Testing,
    category: Categories.Technical,
    description:
      "Using manual and automated testing to ensure that software works as intended",
    milestones: [
      {
        // 0
        summary: technicalSummaryL0,
        exampleBehaviors: [...technicalBehaviorsL0],
        exampleResponsibilities: [
          "Running existing tests",
          "Modifying an existing test",
          "Finding critical and high severity bugs",
        ],
      },
      {
        // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Adding new tests from existing examples when updating a component",
          "Making a test plan for a dev story",
        ],
      },
      {
        // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
          "Creating new tests to catch obvious error paths",
          "Implementing and maintaining automated code coverage levels",
          "Making a test plan for a small epic",
        ],
      },
      {
        // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
          "Setting up complete functional test coverage for an entire project",
          "Mentoring other individuals in testing and QA practices",
        ],
      },
      {
        // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
          "Choosing between testing frameworks in any part of the stack",
          "Mentoring an entire team in effective testing practices",
        ],
      },
      {
        // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: ["Setting the team testing & QA process"],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Ops,
    category: Categories.Technical,
    description:
      "Setting up and maintaining build scripts, deploy pipelines, servers, and cloud services (CI, CD, AWS, Azure, Google Cloud)",
    milestones: [
      {
        // 0
        summary: technicalSummaryL0,
        exampleBehaviors: technicalBehaviorsL0,
        exampleResponsibilities: [
          "Running existing build pipelines from the instructions",
          ...technicalResponsibilitiesL0,
        ],
      },
      {
        // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Debugging basic build errors",
          "Knows how to read error logs",
        ],
      },
      {
        // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
          "Has familiarity with setting up pipelines, automated jobs test suites. Has the ability to make small changes to configuration files.",
        ],
      },
      {
        // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
          "Has good flexibility skills and is able to read and execute documentation from various dev ops infrastructure apps",
          "Is able to implement a confuration file by looking at documentation",
          "Has the ability to implement a new check or small feature inside of a given service.",
        ],
      },
      {
        // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [],
      },
      {
        // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Architecture,
    category: Categories.Craft,
    description: "The ability to put all the pieces of a system together well",
    milestones: [
      {
        // 0
        summary: technicalSummaryL0,
        exampleBehaviors: [
          "Routinely makes errors resulting from a lack of understanding of how the pieces of the system work together",
        ],
      },
      {
        // 1
        summary: technicalSummaryL1,
        exampleBehaviors: [
          "Makes modifications to one part of the system without actively breaking another part of the system",
        ],
        exampleResponsibilities: ["Well-defined development stories"],
      },
      {
        // 2
        summary: technicalSummaryL2,
        exampleBehaviors: [
          "Demonstrates an awareness of how most of the pieces of the system fit together",
        ],
        exampleResponsibilities: [
          "Cross-boundary development stories",
          "Refactoring calls between the frontend and backend",
        ],
      },
      {
        // 3
        summary: technicalSummaryL3,
        exampleBehaviors: [
          "Recommends and implements reasonable changes to system architecture",
        ],
        exampleResponsibilities: [
          "Ambiguous tech debt resolution",
          "Basic system design",
        ],
      },
      {
        // 4
        summary: technicalSummaryL4,
        exampleBehaviors: ["Leads design of entire parts of the system"],
        exampleResponsibilities: ["Advanced system design"],
      },
      {
        // 5
        summary: technicalSummaryL5,
        exampleBehaviors: [
          "Demonstrates deep knowledge of architectural patterns",
        ],
        exampleResponsibilities: [
          "Overseeing application-wide architecture decisions",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Quantity,
    category: Categories.Craft,
    description: "Amount of output divided by time (purely subjective for now)",
    milestones: [
      {
        // 0
        summary: "Lowest 15th percentile speed",
      },
      {
        // 1
        summary: ">15th percentile speed",
      },
      {
        // 2
        summary: ">30th percentile speed",
      },
      {
        // 3
        summary: ">45th percentile speed",
      },
      {
        // 4
        summary: ">60th percentile speed",
      },
      {
        // 5
        summary: ">75th percentile speed",
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Quality,
    category: Categories.Craft,
    description:
      "Number of bugs and errors divided by amount of output (purely subjective for now)",
    milestones: [
      {
        // 0
        summary: "Highest 15th percentile bugginess",
      },
      {
        // 1
        summary: "<85th percentile bugginess",
      },
      {
        // 2
        summary: "<70th percentile bugginess",
      },
      {
        // 3
        summary: "<55th percentile bugginess",
      },
      {
        // 4
        summary: "<40th percentile bugginess",
      },
      {
        // 5
        summary: "<25th percentile bugginess",
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Product,
    category: Categories.Craft,
    description:
      "As a product engineer, you're expected to increasingly understand the product we are building, the problems we are solving, and the industry and stakeholders that we are working to provide value to. Beyond understanding, it's part of your core responsibilities to actively participate in the partnership we have with the product team to identify, and design solutions to those problems we are solving.  This track is heavily weighted in your growth and advancement with Forager.",
    milestones: [
      {
        // 0
        summary: "New to Forager, new to Freight",
        exampleBehaviors: [
          "You are listening in meetings",
          "You're asking questions of your peers, manager, and PMs to understand the nature of the feature/bug you're working on.",
        ],
        exampleResponsibilities: [
          "Learning about cross-border freight, the industry and the different stakeholders of our product",
        ],
      },
      {
        // 1
        summary: "Learning the biz",
        exampleBehaviors: [
          "In design meetings, you're regularly asking for clarification around concepts you don't understand in attempt to understand the problem.",
          "You are demonstrating the desire to understand beyond the code and seeking out new knowledge.",
        ],
        exampleResponsibilities: [
          "Understanding the different types of users of our tools and how the features relate to their job.",
          "Contributing where you can by asking naive questions and offering opinions.",
        ],
      },
      {
        // 2
        summary: "Reliable Contributor",
        exampleBehaviors: [
          " Taking or finding opportunities to better understand our roadmap and why what you're doing is important",
          "Throughout the design process, you are:",
          " -- Demonstrating an empathy for the different types of users of our tools",
          " -- Asking questions that highlight edge cases demonstrating a strong grasp on the problem",
          " -- Expressing your own opinions solutions discussed",
          " -- Beginning to proffer solutions that align with the goals of the problem",
        ],
        exampleResponsibilities: [
          "Contributing to solution design and technical design by offering opinions and continuing to ask questions",
          "Understanding how the problem you're solving relates to the bigger company priorities",
        ],
      },
      {
        // 3
        summary: "Starting to lead",
        exampleBehaviors: [
          "You've gained a reputation as someone who understands at least one other area of our product or business inside and out (e.g. pricing, carrier onboarding, carrier networks, Support Ops).",
          "You understand the needs of our stakeholders because you have gone out of your way to understand how they use our tools and what their motivations are.",
          "During design sessions, you recognize and correct course when the team starts to veer away from the core problem.",
          "You're a driving force in designing phase, proffering multiple solutions and understand which is best suited to our product roadmap.",
        ],
        exampleResponsibilities: [
          "Understanding Forager's short term priorities and longer term goals as they relate to the product roadmap",
          "Guiding your team to stay focused on the current priorities, solving the problem that was determined to have the biggest impact",
          "Directly contributing to, and beginning to lead solution and technical designs that are appropriately sophisticated and within scope. (i.e. the projects you work on are considered successful, and your contributions are considered essential to that success)",
        ],
      },
      {
        // 4
        summary: "Dependable Leader",
        exampleBehaviors: [
          "You're leading design meetings more than contributing to coach others, teaching them how to fish",
          "Occasionally working directly with product and stakeholders to do research outside of typical team sessions",
        ],
        exampleResponsibilities: [
          "Directly responsible for leading your team in producing solutions that align with Forager's Product Roadmap",
          "Work with leadership, product, and stakeholders in longer term strategic research",
          "Ensuring that others on your team understand how current design work impacts Forager's shorter and longer term goals",
        ],
      },
      {
        // 5
        summary: "Role model",
        exampleBehaviors: [
          "You understand all of our major systems from a business/product perspective and the value or limitations that come with them",
          "You've learned enough about the freight and cross-border freight industry to provide solutions or insights into new or existing integrations",
        ],
        exampleResponsibilities: [
          "Working with Product and Senior Leadership to provide input at a business strategy level",
          "You have a clear understanding of the business needs and our roadmap. You provide technical recommendations to product managers as they begin new projects in regards to how a new project would fit in with our current ecosystem.",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Independence,
    category: Categories.Professional,
    description: "Ability to work independently and be self-directed",
    milestones: [
      {
        // 0
        summary: "Guided",
        exampleBehaviors: [
          "Requires daily check-ins to stay on track",
          "Has little to no sense of what work should come next",
        ],
      },
      {
        // 1
        summary: "Some guidance",
        exampleBehaviors: [
          "Requires periodic check-ins to stay on track",
          "May ask for help too little, get stuck and stays stuck for an extended period of time.",
          "May ask for help too much rather than working independently",
        ],
        exampleResponsibilities: ["Working on a task without supervision"],
      },
      {
        // 2
        summary: "Maintaining course",
        exampleBehaviors: [
          "Reliably completes assigned work without further oversight",
          "Resolves most task impediments without assistance",
          "Asks for help when appropriate and relevant",
          "Spontanously collaborates with others when appropriate and relevant",
          "May occasionally still ask for help too much or too little",
        ],
        exampleResponsibilities: [
          "Working on a series of tasks without supervision",
          "Working on fairly complex tasks without supervision",
        ],
      },
      {
        // 3
        summary: "Independent",
        exampleBehaviors: [
          "Resolves almost all task impediments without assistance or direction",
          "Reliably raises appropriate issues rather than simply continuing to work as assigned",
          "Organizes others to help solve challenging problems",
        ],
        exampleResponsibilities: [
          "Effectively working on tasks that are not fully defined",
          "Generating tasks from high level objectives",
        ],
      },
      {
        // 4
        summary: "Leader",
        exampleBehaviors: [
          "Seeks and builds consensus where appropriate and relevant",
          "Forms and disbands groups as necessary",
        ],
        exampleResponsibilities: [
          "Defining high level objectives for a project",
          "Supervising others",
        ],
      },
      {
        // 5
        summary: "Self-directed",
        exampleBehaviors: [
          "Autonomously directs self and others without any oversight",
          "Ensures synchronization with larger business strategy",
        ],
        exampleResponsibilities: [
          "Defining business goals",
          "Guiding an entire team to accomplish not-fully-defined objectives",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Organization,
    category: Categories.Professional,
    description:
      "Personal and professional organization and documentation (at lower levels, having your shit together; at higher levels, helping others have their shit together just by being around you)",
    milestones: [
      {
        // 0
        summary: technicalSummaryL0,
        exampleBehaviors: [
          "Irregular punctuality for meetings",
          "Regular forgetfulness or disorganization",
          "Tasks regularly get missed or forgotten due to lack of personal organization.",
        ],
      },
      {
        // 1
        summary: technicalSummaryL1,
        exampleBehaviors: [
          "Generally shows up to meetings on time",
          "Keeps and maintains basic documentation",
          "Does not routinely lose or misplace information",
          "Irregularly takes notes or documents",
        ],
      },
      {
        // 2
        summary: technicalSummaryL2,
        exampleBehaviors: [
          "Takes organized notes in meetings and discussions and references them later",
          "Keeps ordered bookmarks for everyday sites",
          "Maintains a sensible file organization scheme on their computer",
        ],
      },
      {
        // 3
        summary: technicalSummaryL3,
        exampleBehaviors: [
          "Runs effective meetings",
          "Takes notes for the whole group in a meeting",
          '"Refactors" team documentation when it is disorganized',
        ],
      },
      {
        // 4
        summary: technicalSummaryL4,
        exampleBehaviors: [
          "Creates such effective documentation that it helps others stay organized",
          "Maintains an extensive personal organizational scheme to find and reference detailed and complete information",
          "Creates and maintains organized meeting schedules",
        ],
      },
      {
        // 5
        summary: technicalSummaryL5,
        exampleBehaviors: [
          "Organizes entire projects effectively",
          "Serves as a role model for personal and professional organization",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Process,
    category: Categories.Professional,
    description:
      "Abillity to understand, follow, and improve our software development process",
    milestones: [
      {
        // 0
        summary: "Learning process",
      },
      {
        // 1
        summary: "Follows process",
        exampleBehaviors: [
          "Gives a stand-up status that follows guidelines",
          "Usually posts for open-ended help in the team help channel rather than asking one-on-one",
          "Fills out all required information on pull requests",
        ],
      },
      {
        // 2
        summary: "Enforces process",
        exampleBehaviors: [
          "Makes sure others follow processes",
          "Notices when stand-up is going off track and speaks up, either publicly or privately",
          "When reviewing a pull request, makes sure the requester provided all required information",
        ],
      },
      {
        // 3
        summary: "Improves process",
        exampleBehaviors: [
          "Offers helpful suggestions for how to make stand-up run more smoothly",
          "Improves pull request templates to make sure requesters are prompted for required information",
          "Proposes an expanded retro format that pulls out previously missing information",
        ],
        exampleResponsibilities: [
          "Acting as maintainer or steward for a system or process",
        ],
      },
      {
        // 4
        summary: "Creates process",
        exampleBehaviors: [
          "Creates, prunes, and generally maintains processes as necessary",
        ],
        exampleResponsibilities: [
          "Creating and documenting a new process",
          "Forming a new team without an existing process to model",
        ],
      },
      {
        // 5
        summary: "Directs process creation",
        exampleBehaviors: ["Adjusts processes to fit broader business context"],
        exampleResponsibilities: [
          "Designing an entire SDLC process from scratch",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Communication,
    category: Categories.Interpersonal,
    description:
      "Communicating clearly and concisely; understanding others and being understood",
    milestones: [
      {
        // 0
        summary: "Communication issues",
        exampleBehaviors: [
          "Keeps to themselves except when approached",
          "Lack of language mastery makes communication difficult",
        ],
      },
      {
        // 1
        summary: "Basic communication",
        exampleBehaviors: [
          "Able to communicate effectively in everyday situations",
          "May make spelling and grammar errors, but not severe enough to significantly impede understanding",
        ],
        exampleResponsibilities: [
          "Articulating logic behind technical descisions to the Engineering team",
        ],
      },
      {
        // 2
        summary: "Resolving individual ambiguity",
        exampleBehaviors: [
          "Asks clarifying questions to resolve ambiguity",
          "Explains and understands complicated topics",
        ],
        exampleResponsibilities: [
          "Actively participating in team meetings, including Product folks, to clarify requirements",
          "Actively participating in performance discussions with your manager to clarify feedback or guidance",
        ],
      },
      {
        // 3
        summary: "Facilitating communication between others",
        exampleBehaviors: [
          "Stepping in to resolve conflict between others",
          "Rephrasing someone's point for greater clarity without making the original speaker feel upstaged",
        ],
        exampleResponsibilities: [
          "Writing documentation that provides clarity to dense or complex subjects",
          "Recognizing when PR comments, Slack chat, or other async methods of communication might benefit from a meeting or personal discussion",
        ],
      },
      {
        // 4
        summary: "Targeted communication",
        exampleBehaviors: [
          "Adjusts communication style to audience",
          "Identifies and corrects subtle but important miscommunications",
        ],
        exampleResponsibilities: [
          "Explaining a highly complicated technical topic to non-technical people",
          "Helping to clairfy others' messages in team meetings whenever possible as you recognize a breakdown in communication",
          "Organizing and leading meetings where you recognize the benefit of verbal or personal communication over other forms",
        ],
      },
      {
        // 5
        summary: "Advanced communication",
        exampleBehaviors: [
          "Speaks extemporaneously in high-pressure situations",
        ],
        exampleResponsibilities: [
          "Create and present a workshop on effective documentation practices",
          "Give a presentation to executives or investors",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Culture,
    category: Categories.Interpersonal,
    description:
      "Creating a positive, productive, professional, and inclusive environment for others",
    milestones: [
      {
        // 0
        summary: "Professional issues",
        exampleBehaviors: [
          "Excludes or singles out coworkers in workplace social interactions",
          "Makes inappropriate comments or jokes that make others feel uncomfortable",
          "Hygiene issues make it difficult for coworkers to be in close proximity",
        ],
      },
      {
        // 1
        summary: "Professional conduct",
        exampleBehaviors: [
          "Adheres to expected professional workplace norms",
          "Keeps confidental or personal information in confidence",
        ],
      },
      {
        // 2
        summary: "Maintaining positive culture",
        exampleBehaviors: [
          "Maintains a positive demeanor in challenging situations like a heated debate",
          "Assumes positive intent in others",
        ],
        exampleResponsibilities: [
          "Reaching out to teammates who are newer or less senior to offer assistance or clarity",
        ],
      },
      {
        // 3
        summary: "Actively reinforcing positive culture",
        exampleBehaviors: [
          "Helps others who are struggling personally or professionally",
          "Actively cultivates a good reputation among teammates",
          "Shares articles or other resources to help the team become more inclusive",
        ],
        exampleResponsibilities: [
          "Regularly checking in with less senior folks when explaining something to ensure clarity",
          "Asking input of less senior folks on the team",
          "Giving credit to the work of others and recognizing efforts and achievements",
        ],
      },
      {
        // 4
        summary: "Moving culture forward",
        exampleBehaviors: [
          "Proactively ensures that team environments are safe and inclusive",
          "Tracks and improves team retention",
        ],
        exampleResponsibilities: [
          "Regularly checking in with less senior folks when explaining something to ensure clarity",
          "Regularly Asking input of less senior folks on the team during meetings",
          "Giving credit to the work of others and recognizing efforts and achievements",
          "Organizing or leading a workshop on diversity & inclusion",
        ],
      },
      {
        // 5
        summary: "Setting the standard",
        exampleBehaviors: [
          "Serves as a role model for others",
          "Makes everyone feel heard and understood",
          "Organizes and leads trainings or workshops on interpersonal skills",
        ],
      },
    ],
  },
  <TrackDefinition>{
    track: Tracks.Mentoring,
    category: Categories.Interpersonal,
    description:
      "Ability to help others resolve impediments and improve their skills",
    milestones: [
      {
        // 0
        summary: "Not applicable",
      },
      {
        // 1
        summary: "Mutual assitance",
        exampleBehaviors: ["Pairs effectively with others on tasks"],
        exampleResponsibilities: [
          "Teaching someone how a specific component works",
        ],
      },
      {
        // 2
        summary: "Basic instruction",
        exampleBehaviors: [
          "Teaches others in areas of strength",
          "Proactively reaches out to others to offer assistance or guidance",
        ],
        exampleResponsibilities: [
          "Teaching someone about a new technology",
          "Introducing someone to a new piece of our stack",
          "Being an on-boarding buddy",
        ],
      },
      {
        // 3
        summary: "Individual mentoring",
        exampleBehaviors: [
          "Provides open-ended guidance and assistance to others",
          "Uses pull request reviews as an opportunity to teach about best practices",
        ],
        exampleResponsibilities: [
          "Acting as a subject matter expert for the entire team",
          "Managing someone's professional development",
        ],
      },
      {
        // 4
        summary: "Team mentoring",
        exampleBehaviors: [
          "Improves the entire team's knowledge and performance in areas of personal expertise",
        ],
        exampleResponsibilities: [
          "Mentoring the team in several different areas simultaneously",
        ],
      },
      {
        // 5
        summary: "Mentoring mentors",
        exampleBehaviors: [
          "Grows others even in areas where personal expertise is lacking",
        ],
        exampleResponsibilities: [
          "Teaching others how to mentor more effectively",
        ],
      },
    ],
  },
];
