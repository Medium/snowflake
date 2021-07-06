// @flow
import * as d3 from "d3";

export type TrackId =
  | "MOBILE"
  | "WEB_CLIENT"
  | "FOUNDATIONS"
  | "SERVERS"
  | "PROJECT_MANAGEMENT"
  | "COMMUNICATION"
  | "CRAFT"
  | "LEADERSHIP_INITIATIVE"
  | "ANALYTICAL_THINKING"
  | "BUSINESS_ACUMEN";

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5;

export type MilestoneMap = {
  MOBILE: Milestone,
  WEB_CLIENT: Milestone,
  FOUNDATIONS: Milestone,
  SERVERS: Milestone,
  PROJECT_MANAGEMENT: Milestone,
  COMMUNICATION: Milestone,
  CRAFT: Milestone,
  LEADERSHIP_INITIATIVE: Milestone,
  CAREER_DEVELOPMENT: Milestone,
  ANALYTICAL_THINKING: Milestone,
  BUSINESS_ACUMEN: Milestone,
};
export const milestones = [0, 1, 2, 3, 4, 5];

const DEFAULT_MILESTONE_POINT_MAP = [0, 1, 3, 6, 12, 20];

const TRACK_WEIGHT_MAP = {
  MOBILE: 1,
  WEB_CLIENT: 1,
  FOUNDATIONS: 1,
  SERVERS: 1,
  PROJECT_MANAGEMENT: 1,
  COMMUNICATION: 0.5,
  CRAFT: 1,
  LEADERSHIP_INITIATIVE: 1,
  CAREER_DEVELOPMENT: 1,
  ANALYTICAL_THINKING: 1,
  BUSINESS_ACUMEN: [0, 1, 2, 3, 4, 5],
};

export const pointsToLevels = {
  "0": "1.1",
  "5": "1.2",
  "11": "1.3",
  "15": "2.1",
  "21": "2.2",
  "27": "2.3",
  "33": "3.1",
  "39": "3.2",
  "42": "3.3",
  "47": "4.1",
  "54": "4.2",
};

export const titles = [
  { label: "Engineer I", minPoints: 0, maxPoints: 14 },
  { label: "Engineer II", minPoints: 15, maxPoints: 32 },
  { label: "Senior Engineer", minPoints: 33, maxPoints: 50 },
];

export const maxLevel = 50;

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[],
  }[],
};

type Tracks = {|
  MOBILE: Track,
  WEB_CLIENT: Track,
  FOUNDATIONS: Track,
  SERVERS: Track,
  PROJECT_MANAGEMENT: Track,
  COMMUNICATION: Track,
  CRAFT: Track,
  LEADERSHIP_INITIATIVE: Track,
  ANALYTICAL_THINKING: Track,
  BUSINESS_ACUMEN: Track,
|};

export const tracks: Tracks = {
  MOBILE: {
    displayName: "Mobile",
    category: "A",
    description:
      "Develops expertise in mobile platform engineering, such as reach native",
    milestones: [
      {
        summary:
          "Works effectively within established react native architectures, following current best practices. Requires supervision",
        signals: [
          "Delivers features requiring simple local modifications",
          "Adds simple actions that call server endpoints",
          "Reuses existing components appropriately",
        ],
        examples: [
          "Added existing button to a different iOS surface",
          "Add follow button for a stock on Android",
          "Fetched and displayed a new stream, using existing stream item styles",
        ],
      },
      {
        summary:
          "Develops new instances of existing architecture, or minor improvements to existing architecture",
        signals: [
          "Defines new useful and appropriate proto-generated objects",
          "Creates simple new activities on Android",
          "Migrates code from old patterns to new patterns",
        ],
        examples: [
          "Upgraded SDWebImage to a new major version",
          "Added support for rendering a new type of stream item",
          "Prototyped a simple new feature quickly",
        ],
      },
      {
        summary:
          "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
        signals: [
          "Implements complex features with a large product surface area",
          "Works effectively with  Android reactive programming framework",
          "Adds support for new iOS features after a major iOS version upgrade",
        ],
        examples: [
          "Designed iOS caching strategy for offline reading",
          "Built series reader on Android",
          "Informed the team about recent best practice changes and deprecations",
        ],
      },
    ],
  },

  WEB_CLIENT: {
    displayName: "Web client",
    category: "A",
    description:
      "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    milestones: [
      {
        summary:
          "Works effectively within established web client architectures, following current best practices",
        signals: [
          "Makes minor modifications to existing screens",
          "Fixes simple design quality issues",
          "Uses CSS appropriately, following style guide",
        ],
        examples: [
          "Implemented sticky footer on the post page",
          "Hooked up the action to dismiss a post from a stream",
          "Built PaymentHistory screen using ResponseScreen",
        ],
      },
      {
        summary:
          "Develops new instances of existing architecture, or minor improvements to existing architecture",
        signals: [
          "Makes sensible abstractions based on template and code patterns",
          "Specs and builds interactive components independently",
          "Prototypes simple new features quickly",
        ],
        examples: [
          "Built credit card input component",
          "Created shared buttons template",
          "Built modal system",
        ],
      },
      {
        summary:
          "Designs major new features and demonstrates a nuanced understanding of browser constraints",
        signals: [
          "Provides useful design feedback and suggests feasible alternatives",
          "Performs systemic tasks to significantly minimise bundle size",
          "Acts a caretaker for all of web client code",
        ],
        examples: [
          "Designed font loading strategy for Thndr",
          "Researched utility of service workers for Thndr",
          "Designed and implemented ResponseScreen",
        ],
      },
    ],
  },

  FOUNDATIONS: {
    displayName: "Foundations",
    category: "A",
    description:
      "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    milestones: [
      {
        summary:
          "Works effectively within established structures, following current best practices",
        signals: [
          "Writes thorough postmortems for service outages",
          "Makes simple configuration changes to services",
          "Performs backfills safely and effectively, without causing pages",
        ],
        examples: [
          "Made safe and effective Ansible changes",
          "Implemented new ETL pipelines based on existing ones",
          "Resolved out of disk errors independently",
        ],
      },
      {
        summary:
          "Develops new instances of existing architecture, or minor improvements to existing architecture",
        signals: [
          "Made minor version upgrades to technologies",
          "Builds machine learning jobs within the ML framework",
          "Triages service issues correctly and independently",
        ],
        examples: [
          "Upgraded NodeJS from 8.0 to 8.1.1",
          "Built custom packages for RPMs",
          "Improved ETL efficiency by improving Dynamo to S3 loading",
        ],
      },
      {
        summary:
          "Designs standalone systems of moderate complexity, or major new features in existing systems",
        signals: [
          "Acts as primary maintainer for existing critical systems",
          "Designs moderately complex systems",
          "Makes major version upgrades to libraries",
        ],
        examples: [
          "Designed Ansible configuration management",
          "Built Thndr's realtime stats pipeline",
          "Designed flexible framework for writing machine learning jobs",
        ],
      },
    ],
  },

  SERVERS: {
    displayName: "Servers",
    category: "A",
    description:
      "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    milestones: [
      {
        summary:
          "Works effectively within established server side frameworks, following current best practices",
        signals: [
          "Adds NodeJS endpoints using layers architecture",
          "Adds golang endpoints using Gotham architecture",
          "Makes minor server changes to support client needs",
        ],
        examples: [
          "Added IFTTT trigger for new bookmark to Thndr2",
          "Added delete audio route to Buggle",
          "Queried a Dynamo LSI appropriately",
        ],
      },
      {
        summary:
          "Develops new instances of existing architecture, or minor improvements to existing architecture",
        signals: [
          "Assesses correctness and utility of existing code and avoids blind copy-pasting",
          "Generalizes code when appropriate",
          "Determines data needs from product requirements",
        ],
        examples: [
          "Identified need for new index on Dynamo",
          "Acted as caretaker for routes protos",
          "Updated Facebook API version and codebase dependencies",
        ],
      },
      {
        summary:
          "Designs standalone systems of moderate complexity, or major new features in existing systems",
        signals: [
          "Acts as primary maintainer for existing critical systems",
          "Integrates third party services effectively",
          "Writes playbooks for new service maintenance",
        ],
        examples: [
          "Implemented Google Auth login to Thndr",
          "Implemented payments integration with Stripe",
          "Built Textshots server",
        ],
      },
    ],
  },

  PROJECT_MANAGEMENT: {
    displayName: "Project management",
    category: "B",
    description:
      "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    milestones: [
      {
        summary: "Effectively delivers Bugs, Small Features, Single Flows",
        signals: [
          "Estimates small tasks accurately",
          "Delivers tightly-scoped projects efficiently",
          "Writes effective technical specs outlining approach",
        ],
        examples: [
          "Wrote the technical spec for featured post images",
          "Delivered stream item support for email digests",
          "Delivered payment history dashboard",
        ],
      },
      {
        summary: "Effectively delivers Full Flows, Minor Domains",
        signals: [
          "Performs research and considers alternative approaches",
          "Balances pragmatism and polish appropriately",
          "Defines and hits interim milestones",
        ],
        examples: [
          "Delivered promo editor",
          "Delivered audio uploading for web client",
          "Executed the recommends to claps backfill",
        ],
      },
      {
        summary: "Effectively delivers Domains, Applications",
        signals: [
          "Delegates tasks to others appropriately",
          "Integrates business needs into project planning",
          "Chooses appropriate project management strategy based on context",
        ],
        examples: [
          "Ran project retro to assess improvement opportunities",
          "Completed launch checklist unprompted for well controlled rollout",
          "Facilitated project kickoff meeting to get buy-in",
        ],
      },
    ],
  },

  CRAFT: {
    displayName: "Craft",
    category: "B",
    description:
      "Embodies and promotes practices to ensure excellent quality products and services",
    milestones: [
      {
        summary: "Delivers consistently good quality work",
        signals: [
          "Tests new code thoroughly, both locally, and in production once shipped",
          "Writes tests for every new feature and bug fix",
          "Writes clear comments and documentation",
        ],
        examples: [
          "Caught a bug on Stagging before it went Production",
          ,
          "Wrote hermetic tests for the happy and sad cases",
        ],
      },
      {
        summary:
          "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
        signals: [
          "Refactors existing code to make it more testable",
          "Adds tests for uncovered areas",
          "Deletes unnecessary code and deprecates proactively when safe to do so",
        ],
        examples: [],
      },
      {
        summary: "Improves others' ability to deliver great quality work",
        signals: [
          "Implements systems that enable better testing",
          "Gives thoughtful code reviews as a domain expert",
          "Adds tooling to improve code quality",
        ],
        examples: [],
      },
    ],
  },

  ANALYTICAL_THINKING: {
    displayName: "Analytical Thinking",
    category: "B",
    description:
      "The methodical and data driven approach you demonstrate to understand requirements, analyze and solve problems, and make decisions",
    milestones: [
      {
        summary:
          "Applies structured ways to decompose and solve simple well defined problems.",
        signals: [
          "Accepts and understands the product requirements.",
          "Learns to use standard problem solving tools (aka profiler/debugger, system monitoring, incident management tools",
        ],
        examples: [],
      },
      {
        summary:
          "Applies structured ways to investigate how parts of the system interact with each other or with external systems using problem solving tools",
        signals: [
          "Discusses the conflicts between stated requirements and problems in implementing them",
          "Can find gaps in product requirements and suggest alternate views on the requirements",
          "Discovers and incorporates tacit requirements",
        ],
        examples: [],
      },
      {
        summary:
          "Can resolve conflicts (technical and design) across teams by balancing arguments in qualitative and quantitative ways; considers and reasons with all assumptions",
        signals: [
          "Deals with ambiguity",
          "Understands requirements (performance, data, ownership of feature) between different systems",
          "Can analyze and suggest solutions to mitigate cross system issues",
          "provides guidance on how to proceed in solving complex problems",
        ],
        examples: [],
      },
    ],
  },

  LEADERSHIP_INITIATIVE: {
    displayName: "Leadership Initiative",
    category: "C",
    description:
      "Challenges the status quo and effects positive organizational change outside of mandated work",
    milestones: [
      {
        summary:
          "Leads self and Identifies opportunities for organizational change or product improvements",
        signals: [
          "Seeks relevant knowledge on related technlogy standards",
          "Raises meaningful tensions in tactical meetings",
          "Asks leadership team probing questions at All Hands",
          "Strives to be valued in the team and contrubutes connstructively",
        ],
        examples: [
          "Wrote about problems with testing on Staging",
          "Reported a site issue in Github",
        ],
      },
      {
        summary:
          "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
        signals: [
          "Constuctive party in conflict situations within the team",
          "Understand the needs for change and acts as an influencer rarther than passive detractor",
          "Seeks and takes opportunities within the team",
          "Is a role model",
        ],
        examples: [
          "Advocated on own behalf for a change in role",
          "Audited web trading performance in Chrome and proposed fixes",
        ],
      },
      {
        summary:
          "Causes change to positively impact an entire team or instigates a minor feature or service",
        signals: [
          "Demonstrates concepts proactively with prototypes",
          "Fixes complicated bugs outside of regular domain",
          "Influences and proactively heps juniors and peers through mentorship and coaching",
          "Is a role model in owning failures and celebrating successes",
        ],
        examples: [],
      },
    ],
  },

  BUSINESS_ACUMEN: {
    displayName: "Business Accumen",
    category: "C",
    description:
      "The level you understand and contribute to business and strategic decisions",
    milestones: [
      {
        summary:
          "Understands the value the features provide to the team or users",
        signals: [
          "Learns about fintech and Thndr business",
          "Aware of the business unit structure of Thndr and understand the numbers presented in the all hands",
          "Have an investor account",
        ],
        examples: [],
      },
      {
        summary:
          "Understands the business KPIs and the impact of the features / projects on those KPIs",
        signals: [
          "Collaborates with business teams in understanding product requirements",
          "Aware of main KPIs",
        ],
        examples: [],
      },
      {
        summary:
          "Develops solutions that support and impact the long term strategic business vision and growth (2-3 years)",
        signals: [
          "Finds ways to optimize and simplify existing systems (aka infrastructure costs) that impact operational efficiency of the business",
        ],
        examples: [],
      },
    ],
  },

  COMMUNICATION: {
    displayName: "Communication",
    category: "C",
    description:
      "Shares the right amount of information with the right people, at the right time, and listens effectively",
    milestones: [
      {
        summary:
          "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
        signals: [
          "Communicates project status clearly and effectively",
          "Collaborates with others with empathy",
          "Asks for help at the appropriate juncture",
        ],
        examples: [
          "Updated The Watch before running a backfill",
          "Updated project status changes in GitHub promptly",
          "Gave thoughtful check-in and check-out comments",
        ],
      },
      {
        summary:
          "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
        signals: [
          "Practises active listening and suspension of attention",
          "Ensures stakeholders are aware of current blockers",
          "Chooses the appropriate tools for accurate and timely communication",
        ],
        examples: [
          "Received and integrated critical feedback positively",
          "Created cross-team Slack channel for payments work",
          "Spoke to domain experts before writing spec",
        ],
      },
      {
        summary:
          "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
        signals: [
          "Resolves communication difficulties between others",
          "Anticipates and shares schedule deviations in plenty of time",
          "Manages project stakeholder expectations effectively",
        ],
        examples: [
          "Directed team response effectively during outages",
          "Gave a substantial Eng All Hands presentation on React",
          "Gave notice of upcoming related work in Eng Briefing",
        ],
      },
    ],
  },
};

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return titles
    .filter(
      (title) =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map((title) => title.label);
};

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map();
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId];
    const categoryId = tracks[trackId].category;
    let currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone, trackId)
    );
  });
  return Array.from(categoryIds.values()).map((categoryId) => {
    const points = pointsByCategory.get(categoryId);
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 };
  });
};

export const totalPointsFromMilestoneMap = (
  milestoneMap: MilestoneMap
): number =>
  trackIds
    .map((trackId) => milestoneToPoints(milestoneMap[trackId], trackId))
    .reduce((sum, addend) => sum + addend, 0);

export const trackIds: TrackId[] = Object.keys(tracks);

export const milestoneToPoints = (
  milestone: Milestone,
  trackId: TrackId
): number => {
  const trackWeight = TRACK_WEIGHT_MAP[trackId] || 1;
  if (typeof trackWeight === "number") {
    return trackWeight * (DEFAULT_MILESTONE_POINT_MAP[milestone] || 0);
  } else {
    return trackWeight[milestone] || 0;
  }
};

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category);
  return set;
}, new Set());

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range(["#00abc2", "#428af6", "#e1439f", "#e54552"]);
