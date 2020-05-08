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
  Server,
  Ops,
  Architecture,
  // Craft
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
  "2":  2,
  "3":  3,
  "4":  5,
  "5":  7,
  "6":  9,
  "7":  12,
  "8":  15,
  "9":  18,
  "10": 22,
};

/**
 * For a given point value, what level is earned.
 * Sub-levels indicated by a decimal receive different compensation but are grouped into the same title.
 */
export const pointsToLevels = {
  "0": "0",
  "6": "1.1",
  "12": "1.2",
  "18": "1.3",
  "26": "2.1",
  "33": "2.2",
  "40": "2.3",
  "48": "3.1",
  "56": "3.2",
  "68": "4.1",
  "80": "4.2",
  "100": "5",
};

/**
 * For each base level, what titles are available.
 * Maker (Engineer) and Manager tracks are created equal in order to avoid having to go into management to advance.
 */
export const levelToTitles = {
  "0": ["[E0] Apprentice Software Engineer"],
  "1": ["[E1] Junior Software Engineer"],
  "2": ["[E2] Software Engineer"],
  "3": ["[E3] Senior Software Engineer", "[M3] Engineering Manager"],
  "4": ["[E4] Staff Software Engineer", "[M4] Senior Engineering Manager"],
  "5": ["[E5] Principal Software Engineer", "[M5] Director of Engineering"],
};

/**
 * For each base level, the minimum number of points that must be earned in every category.
 * This ensures a minimum level of performance in all areas.
 */
export const levelsToMinCategoryPoints = {
  "0": 0,
  "1": 1,
  "2": 3,
  "3": 6,
  "4": 10,
  "5": 15,
};

/**
 * The maximum number of points that can be earned in a single category.
 * Reaching the highest levels requires branching out into multiple areas of mastery.
 */
export const maxPointsFromCategory = 50;

export const trackDefinitions: TrackDefinition[] = [
  <TrackDefinition> {
    track: Tracks.Frontend,
    category: Categories.Technical,
    description: "Making web pages and sites (HTML, CSS, React, DOM/JSON/browser-based JS/TS)",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Backend,
    category: Categories.Technical,
    description: "Making application logic, services, and data pipelines (API, REST, Node-based JS/TS, C#, Java, Ruby)",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Database,
    category: Categories.Technical,
    description: "Designing and administering databases",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Mobile,
    category: Categories.Technical,
    description: "Making native apps and publishing them to app stores (iOS, Android, UWP, Xamarin, Swift, ObjectiveC, Java, Kotlin, C#)",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Server,
    category: Categories.Technical,
    description: "Managing and configuring servers and cloud services (AWS, Azure, Google, Linux, Windows)",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Ops,
    category: Categories.Technical,
    description: "Setting up and managing build and deploy piplines (CI, CD)",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Architecture,
    category: Categories.Technical,
    description: "The ability to put all the pieces of a system together well",
    milestones: [
      { // 0
        summary: "None",
        examples: [
          "No professional experience",
          "No understanding of architectural context",
        ]
      },
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Quantity,
    category: Categories.Craft,
    description: "Amount of output divided by time",
    milestones: [
      { // 0
        summary: "Unproven",
        examples: ["No professional track record yet"]
      },
      { // 1
        summary: "Minimum",
        examples: ["Minimum acceptable working speed"]
      },
      { // 2
        summary: "Basic",
        examples: ["Average working speed for a junior engineer"]
      },
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: ["Average working speed for a mid-level engineer"]
      },
      undefined, // 5
      { // 6
        summary: "Advanced",
        examples: ["Average working speed for a senior engineer"]
      },
      undefined, // 7
      { // 8
        summary: "Expert",
        examples: ["Average working speed for a staff engineer"]
      },
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: ["The fastest output any of us have ever seen"]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Quality,
    category: Categories.Craft,
    description: "Number of bugs created divided by amount of output",
    milestones: [
      { // 0
        summary: "Unproven",
        examples: ["No professional track record yet"]
      },
      { // 1
        summary: "Minimum",
        examples: ["Minimum acceptable level of quality"]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Independence,
    category: Categories.Professional,
    description: "Ability to work independently and be self-directed",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Organization,
    category: Categories.Professional,
    description: "Personal and professional organization",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Process,
    category: Categories.Professional,
    description: "Abillity to understand, follow, and improve our software development process",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Communication,
    category: Categories.Interpersonal,
    description: "Communicating clearly and concisely; understanding others and being understood",
    milestones: [
      { // 0
        summary: "Unproven",
        examples: [
          "Unknown or unproven communication skills",
       ]
      },
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Culture,
    category: Categories.Interpersonal,
    description: "Creating a positive, productive, and inclusive environment for others",
    milestones: [
      { // 0
        summary: "Unproven",
        examples: [
          "Unknown or unproven culture impact",
        ]
      },
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Mentoring,
    category: Categories.Interpersonal,
    description: "Ability to help others resolve impediments and improve their skills",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Management,
    category: Categories.Interpersonal,
    description: "Ability to effectively and humanely manage individuals and teams",
    milestones: [
      undefined, // 0
      { // 1
        summary: "Basic",
        examples: [
          "Does stuff",
        ]
      },
      undefined, // 2
      undefined, // 3
      { // 4
        summary: "Intermediate",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 5
      undefined, // 6
      { // 7
        summary: "Advanced",
        examples: [
            "Does stuff",
        ]
      },
      undefined, // 8
      undefined, // 9
      { // 10
        summary: "Expert",
        examples: [
            "Does stuff",
        ]
      },
    ]
  },
];