import { TrackDefinition, MilestoneDefinition } from "./tracks";

export enum Categories {
  Technical,
  Craft,
  Professional,
  Interpersonal,
};

export enum Tracks {
  // Technical
  Frontend,
  Backend,
  Database,
  Mobile,
  Testing,
  Ops,
  // Craft
  Architecture,
  Quantity,
  Quality,
  // Professional
  Independence,
  Organization,
  Process,
  // Interpersonal
  Communication,
  Culture,
  Mentoring,
  Management,
};

/**
 * For each milestone level, how many points are earned.
 * Higher levels earn more points to reflect the increased difficulty curve when mastering a skill.
 */
export const milestonesToPoints = {
  "0":  0,
  "1":  1,
  "2":  3,
  "3":  6,
  "4":  10,
  "5":  15,
};

/**
 * For a given point value, what level is earned.
 * Sub-levels indicated by a decimal receive different compensation but are grouped into the same title.
 */
export const pointsToLevels = {
  "0":   "0",
  "15":  "1.1", // 15x1
  "23":  "1.2",
  "31":  "1.3",
  "42":  "2.1", // 14x3
  "56":  "2.2",
  "70":  "2.3",
  "89":  "3.1", // 13x6
  "104": "3.2",
  "120": "4.1", // 12x10
  "140": "4.2", 
  "165": "5",   // 11x15
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
  "No experience in this area",
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
  "Weighs pros and cons of different approaches",
  "Resolves ambiguous tasks and clarifies for others",
];
const technicalBehaviorsL4 = [
  "Weighs pros and cons of different frameworks and libraries",
  "Gained a reputation as someone anyone would want to help out in this area",
  "Resolves ambiguous product requirements and clarifies for others",
];
const technicalBehaviorsL5 = [
  "Understands at least one framework top to bottom",
  "Defines roadmap/milestone-level technical projects"
];

export const trackDefinitions: TrackDefinition[] = [
  <TrackDefinition> {
    track: Tracks.Frontend,
    category: Categories.Technical,
    description: "Making web pages and sites (HTML, CSS, React, DOM/JSON/browser-based JS/TS)",
    milestones: [
      { // 0
        summary: technicalSummaryL0,
        exampleBehaviors: technicalBehaviorsL0,
        exampleResponsibilities: [
          "Editing the text on a page",
          "Fixing a simple bug, in any amount of time",
          "Reading documentation to learn more",
        ],
      },
      { // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Adding a new component from existing examples",
          "Fixing moderately complicated bugs",
        ],
      },
      { // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
          "Creating a new component from scratch, avoiding any anti-patterns",
        ],
      },
      { // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
        ],
      },
      { // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
        ],
      },
      { // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Backend,
    category: Categories.Technical,
    description: "Making application logic, services, and data pipelines (API, REST, Node-based JS/TS, C#, Java, Ruby)",
    milestones: [
      { // 0
        summary: technicalSummaryL0,
        exampleBehaviors: technicalBehaviorsL0,
        exampleResponsibilities: [
          "Adding a field to a data model",
          "Fixing a simple bug, in any amount of time",
          "Reading documentation to learn more",
        ],
      },
      { // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Adding a new data adapter implementation from existing examples",
          "Fixing moderately complicated bugs",
        ],
      },
      { // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
          "Creating a new API endpoint from scratch, avoiding any anti-patterns",
        ],
      },
      { // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
          "Creating a new service from scratch with specifications",
        ],
      },
      { // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
          "",
        ],
      },
      { // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [
          "Leading architecture for all backend systems",
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Database,
    category: Categories.Technical,
    description: "Designing and administering databases (SQL, NoSQL)",
    milestones: [
      { // 0
        summary: technicalSummaryL0,
        exampleBehaviors: technicalBehaviorsL0,
        exampleResponsibilities: [
          "Making modifications to existing queries",
          "Fixing a simple bug, in any amount of time",
          "Reading documentation to learn more",
        ],
      },
      { // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Writing basic CRUD queries to retrieve and store data",
          "Updating existing schema with guidance",
        ],
      },
      { // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
          "Designing new tables with appropriate schema",
        ],
      },
      { // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
          "Maintaining table indexes",
          "Optimizing data types for storage space and retrieval speed",
        ],
      },
      { // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
          "Advanced performance tuning",
        ],
      },
      { // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [
          "Choosing between database technologies",
          "Designing a comprehensive data storage architecture from scratch",
        ],
      },
    ],  },
  <TrackDefinition> {
    track: Tracks.Mobile,
    category: Categories.Technical,
    description: "Making native apps and publishing them to app stores (iOS, Android, UWP, Xamarin, Swift, ObjectiveC, Java, Kotlin, C#)",
    milestones: [
      { // 0
        summary: technicalSummaryL0,
        exampleBehaviors: technicalBehaviorsL0,
        exampleResponsibilities: [
          "Changing the text on a page",
          "Fixing a simple bug, in any amount of time",
          "Reading documentation to learn more",
        ],
      },
      { // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
        ],
      },
      { // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
        ],
      },
      { // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
        ],
      },
      { // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
        ],
      },
      { // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Testing,
    category: Categories.Technical,
    description: "Using manual and automated testing to ensure that software works as intended",
    milestones: [
      { // 0
        summary: technicalSummaryL0,
        exampleBehaviors:[...technicalBehaviorsL0],
        exampleResponsibilities: [
          "Running existing tests",
          "Modifying an existing test",
          "Finding critical and high severity bugs",
        ],
      },
      { // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Adding new tests from existing examples when updating a component",
          "Making a test plan for a dev story",
        ],
      },
      { // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
          "Creating new tests to catch obvious error paths",
          "Implementing and maintaining automated code coverage levels",
          "Making a test plan for a small epic",
        ],
      },
      { // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
          "Setting up complete functional test coverage for an entire project",
          "Mentoring other individuals in testing and QA practices",
        ],
      },
      { // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
          "Choosing between testing frameworks in any part of the stack",
          "Mentoring an entire team in effective testing practices",
        ],
      },
      { // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [
          "Setting the team testing & QA process",
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Ops,
    category: Categories.Technical,
    description: "Setting up and maintaining build scripts, deploy pipelines, servers, and cloud services (CI, CD, AWS, Azure, Google Cloud)",
    milestones: [
      { // 0
        summary: technicalSummaryL0,
        exampleBehaviors: technicalBehaviorsL0,
        exampleResponsibilities: [
          "Running existing build pipelines from the instructions",
          "Reading documentation to learn more",
        ],
      },
      { // 1
        summary: technicalSummaryL1,
        exampleBehaviors: technicalBehaviorsL1,
        exampleResponsibilities: [
          "Debugging basic build errors",
        ],
      },
      { // 2
        summary: technicalSummaryL2,
        exampleBehaviors: technicalBehaviorsL2,
        exampleResponsibilities: [
        ],
      },
      { // 3
        summary: technicalSummaryL3,
        exampleBehaviors: technicalBehaviorsL3,
        exampleResponsibilities: [
        ],
      },
      { // 4
        summary: technicalSummaryL4,
        exampleBehaviors: technicalBehaviorsL4,
        exampleResponsibilities: [
        ],
      },
      { // 5
        summary: technicalSummaryL5,
        exampleBehaviors: technicalBehaviorsL5,
        exampleResponsibilities: [
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Architecture,
    category: Categories.Craft,
    description: "The ability to put all the pieces of a system together well",
    milestones: [
      { // 0
        summary: technicalSummaryL0,
        exampleBehaviors: [
          "Routinely makes errors resulting from a lack of understanding of how the pieces of the system work together",
        ],
      },
      { // 1
        summary: technicalSummaryL1,
        exampleBehaviors: [
          "Makes modifications to one part of the system without actively breaking another part of the system",
        ],
        exampleResponsibilities: [
          "Well-defined development stories",
        ],
      },
      { // 2
        summary: technicalSummaryL2,
        exampleBehaviors: [
          "Demonstrates an awareness of how most of the pieces of the system fit together"
        ],
        exampleResponsibilities: [
          "Cross-boundary development stories",
          "Refactoring calls between the frontend and backend",
        ],
      },
      { // 3
        summary: technicalSummaryL3,
        exampleBehaviors: [
          "Recommends and implements reasonable changes to system architecture"
        ],
        exampleResponsibilities: [
          "Ambiguous tech debt resolution",
          "Basic system design",
        ],
      },
      { // 4
        summary: technicalSummaryL4,
        exampleBehaviors: [
          "Leads design of entire parts of the system"
        ],
        exampleResponsibilities: [
          "Advanced system design",
        ],
      },
      { // 5
        summary: technicalSummaryL5,
        exampleBehaviors: [
          "Demonstrates deep knowledge of architectural patterns"
        ],
        exampleResponsibilities: [
          "Overseeing application-wide architecture decisions",
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Quantity,
    category: Categories.Craft,
    description: "Amount of output divided by time (purely subjective for now)",
    milestones: [
      { // 0
        summary: "Lowest 15th percentile speed"
      },
      { // 1
        summary: ">15th percentile speed"
      },
      { // 2
        summary: ">30th percentile speed",
      },
      { // 3
        summary: ">45th percentile speed",
      },
      { // 4
        summary: ">60th percentile speed",
      },
      { // 5
        summary: ">75th percentile speed",
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Quality,
    category: Categories.Craft,
    description: "Number of bugs and errors divided by amount of output (purely subjective for now)",
    milestones: [
      { // 0
        summary: "Highest 15th percentile bugginess"
      },
      { // 1
        summary: "<85th percentile bugginess"
      },
      { // 2
        summary: "<70th percentile bugginess",
      },
      { // 3
        summary: "<55th percentile bugginess",
      },
      { // 4
        summary: "<40th percentile bugginess",
      },
      { // 5
        summary: "<25th percentile bugginess",
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Independence,
    category: Categories.Professional,
    description: "Ability to work independently and be self-directed",
    milestones: [
      { // 0
        summary: "Guided",
        exampleBehaviors: [
          "Requires daily check-ins to stay on track",
        ],
      },
      { // 1
        summary: "Some guidance",
        exampleBehaviors: [
          "Requires periodic check-ins to stay on track",
          "May ask for help too little and get stuck",
          "May ask for help too much rather than working independently",
        ],
      },
      { // 2
        summary: "Maintaining course",
        exampleBehaviors: [
          "Reliably completes assigned work without further oversight",
          "Resolves most task impediments without assistance",
          "Asks for help when appropriate and relevant",
          "Spontanously collaborates with others when appropriate and relevant",
        ],
      },
      { // 3
        summary: "Independent",
        exampleBehaviors: [
          "Resolves almost all task impediments without assistance or direction",
          "Reliably raises appropriate issues rather than simply continuing to work as assigned",
          "Organizes others to help solve challenging problems",
        ],
      },
      { // 4
        summary: "Leader",
        exampleBehaviors: [
          "Seeks and builds consensus where appropriate and relevant",
          "Forms and disbands groups as necessary",
        ],
      },
      { // 5
        summary: "Self-directed",
        exampleBehaviors: [
          "Autonomously directs self and others without any oversight",
          "Ensures synchronization with larger business strategy",
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Organization,
    category: Categories.Professional,
    description: "Personal and professional organization and documentation",
    milestones: [
      { // 0
        summary: technicalSummaryL0,
        exampleBehaviors: [
          "Irregular punctuality for meetings",
          "Forgetfulness or disorganization",
        ],
      },
      { // 1
        summary: technicalSummaryL1,
        exampleBehaviors: [
          "Generally shows up to meetings on time",
          "Keeps and maintains basic documentation",
          "Does not routinely lose or misplace information",
        ],
      },
      { // 2
        summary: technicalSummaryL2,
        exampleBehaviors: [
          "Takes organized notes in meetings and discussions and references them later",
          "Keeps ordered bookmarks for everyday sites",
          "Maintains a sensible file organization scheme for ",
        ],
      },
      { // 3
        summary: technicalSummaryL3,
        exampleBehaviors: [
          "Takes notes for the whole group in a meeting",
          "\"Refactors\" team documentation when it is disorganized",
        ],
      },
      { // 4
        summary: technicalSummaryL4,
        exampleBehaviors: [
          "Creates such effective documentation that it helps others stay organized",
          "Maintains an extensive personal organizational scheme to find and reference",
        ],
      },
      { // 5
        summary: technicalSummaryL5,
        exampleBehaviors: [
          "Organizes entire projects effectively",
          "Serves as a role model for personal and professional organization",
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Process,
    category: Categories.Professional,
    description: "Abillity to understand, follow, and improve our software development process",
    milestones: [
      { // 0
        summary: technicalSummaryL0,
        exampleBehaviors: [
          "Still learning processes",
        ],
        exampleResponsibilities: [
        ],
      },
      { // 1
        summary: technicalSummaryL1,
        exampleBehaviors: [
          "Reliably follows regular processes",
        ],
        exampleResponsibilities: [
        ],
      },
      { // 2
        summary: technicalSummaryL2,
        exampleBehaviors: [
          "Makes sure others follow processes",
          "Notices when stand-up is going off track and speaks up",
        ],
        exampleResponsibilities: [
        ],
      },
      { // 3
        summary: technicalSummaryL3,
        exampleBehaviors: [
          "Improves existing processes",
        ],
        exampleResponsibilities: [
        ],
      },
      { // 4
        summary: technicalSummaryL4,
        exampleBehaviors: [
          "Creates and maintains processes",
        ],
        exampleResponsibilities: [
          "Creating and documenting a new process",
        ],
      },
      { // 5
        summary: technicalSummaryL5,
        exampleBehaviors: [
          "Adjusts processes to fit broader business context",
        ],
        exampleResponsibilities: [
          "Designing an entire SDLC process from scratch",
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Communication,
    category: Categories.Interpersonal,
    description: "Communicating clearly and concisely; understanding others and being understood",
    milestones: [
      { // 0
        summary: "Communication issues",
        exampleBehaviors: [
          "Keeps to themselves except when approached",
          "Lack of language mastery makes communication difficult",
        ],
      },
      { // 1
        summary: "Basic communication",
        exampleBehaviors: [
          "Able to communicate effectively in everyday situations",
          "May make spelling and grammar errors, but not severe enough to significantly impede understanding",
        ],
        exampleResponsibilities: [
        ],
      },
      { // 2
        summary: "Resolving individual ambiguity",
        exampleBehaviors: [
          "Asks clarifying questions to resolve ambiguity",
          "Explains and understands complicated topics",
        ],
        exampleResponsibilities: [
        ],
      },
      { // 3
        summary: "Facilitating communication between others",
        exampleBehaviors: [
          "Stepping in to resolve conflict between others",
          "Rephrasing someone's point for greater clarity without making the original speaker feel upstaged",
        ],
        exampleResponsibilities: [
        ],
      },
      { // 4
        summary: "Targeted communication",
        exampleBehaviors: [
          "Adjusts communication style to audience",
          "Identifies and corrects subtle but important miscommunications",
        ],
        exampleResponsibilities: [
          "Explaining a highly complicated technical topic to non-technical people",
        ],
      },
      { // 5
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
  <TrackDefinition> {
    track: Tracks.Culture,
    category: Categories.Interpersonal,
    description: "Creating a positive, productive, professional, and inclusive environment for others",
    milestones: [
      { // 0
        summary: "Professional issues",
        exampleBehaviors: [
          "Excludes or singles out coworkers in workplace social interactions",
          "Makes inappropriate comments or jokes that make others feel uncomfortable",
          "Hygiene issues make it difficult for coworkers to be in close proximity",
        ],
      },
      { // 1
        summary: "Professional conduct",
        exampleBehaviors: [
          "Adheres to expected professional workplace norms",
          "Keeps confidental or personal information in confidence",
        ],
      },
      { // 2
        summary: "Going above and beyond",
        exampleBehaviors: [
          "Maintains a positive demeanor in challenging situations",
          "Assumes positive intent in others",
        ],
      },
      { // 3
        summary: "Actively reinforcing culture",
        exampleBehaviors: [
          "Helps others who are struggling personally or professionally",
          "Shares articles or other resources to help the team become more inclusive",
        ],
      },
      { // 4
        summary: "Moving culture forward",
        exampleBehaviors: [
          "Proactively ensures that team environments are safe and inclusive",
          "Tracks and improves team retention"
        ],
      },
      { // 5
        summary: "Setting the standard",
        exampleBehaviors: [
          "Serves as a role model for others",
          "Makes everyone feel heard and understood",
          "Organizes and leads trainings or workshops on interpersonal skills",
        ],
      },
    ],
  },
  <TrackDefinition> {
    track: Tracks.Mentoring,
    category: Categories.Interpersonal,
    description: "Ability to help others resolve impediments and improve their skills",
    milestones: [
      { // 0
        summary: "Not applicable",
      },
      { // 1
        summary: "Mutual assitance",
        exampleBehaviors: [
          "Pairs effectively with others on tasks",
        ],
        exampleResponsibilities: [
          "Teaching someone how a specific component works",
        ],
      },
      { // 2
        summary: "Basic instruction",
        exampleBehaviors: [
          "Teaches others in areas of strength",
        ],
        exampleResponsibilities: [
          "Teaching someone about a new technology",
          "Introducing someone to a new piece of our stack",
          "Being an on-boarding buddy",
        ],
      },
      { // 3
        summary: "Individual mentoring",
        exampleBehaviors: [
          "Provides open-ended guidance and assistance to others",
          "Uses PR reviews as an opportunity to teach about best practices",
        ],
        exampleResponsibilities: [
          "Acting as a subject matter expert for the entire team",
          "Managing someone's professional development",
        ],
      },
      { // 4
        summary: "Team mentoring",
        exampleBehaviors: [
          "Improves the entire team's knowledge and performance in areas of personal expertise",
        ],
        exampleResponsibilities: [
          "Mentoring the team in several different areas simultaneously",
        ],
      },
      { // 5
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
  <TrackDefinition> {
    track: Tracks.Management,
    category: Categories.Interpersonal,
    description: "Ability to effectively and humanely manage individuals and teams",
    milestones: [
      { // 0
        summary: "Not Applicable",
        exampleBehaviors: [
          "No management experience"
        ],
      },
      { // 1
        summary: "Manager",
        exampleBehaviors: [
          "Holds 1:1s every 1-2 weeks",
          "Holds quarterly performance reviews",
        ],
        exampleResponsibilities: [
          "Having any direct reports",
          "Core people management responsibilities"
        ],
      },
      { // 2
        summary: "Growing people",
        exampleBehaviors: [
          "Provides useful assistance to direct reports to resolve impediments",
          "Counsels direct reports on career growth",
          "Tailors guidance to individuals",
          "Avoids harming diversity & inclusion",
        ],
        exampleResponsibilities: [
          "Managing a team of 3+ direct reports",
        ],
      },
      { // 3
        summary: "Advanced management",
        exampleBehaviors: [
          "Consistently addresses performance issues, either by improving performance or managing employee exit",
          "Mediates conflict between team members",
          "Actively promotes diversity & inclusion on own team and others",
        ],
        exampleResponsibilities: [
          "Managing a team of 5-6 direct reports",
        ],
      },
      { // 4
        summary: "Leader",
        exampleBehaviors: [
          "Consistently earns trust of direct reports"
        ],
        exampleResponsibilities: [
          "Improving and standardizing annual review procedures across teams",
        ],
      },
      { // 5
        summary: "Role model",
        exampleBehaviors: [
          "Universally trusted by direct reports",
        ],
        exampleResponsibilities: [
          "Managing managers",
          "Defining a career growth framework from scratch",
          "Managing department-wide HR procedures",
        ],
      },
    ],
  },
];
