// @flow
import * as d3 from "d3";

export type TrackId =
  | "MOBILE"
  | "WEB_CLIENT"
  | "FOUNDATIONS (PLATFORM)"
  | "SERVERS & API"
  | "PROJECT_MANAGEMENT"
  | "COMMUNICATION"
  | "CRAFT"
  | "INITIATIVE"
  | "CAREER_DEVELOPMENT"
  | "ORG_DESIGN"
  | "WELLBEING"
  | "ACCOMPLISHMENT"
  | "MENTORSHIP"
  | "EVANGELISM"
  | "RECRUITING"
  | "COMMUNITY";
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5;

export type MilestoneMap = {
  "MOBILE": Milestone,
  "WEB_CLIENT": Milestone,
  "FOUNDATIONS (PLATFORM)": Milestone,
  "SERVERS & API": Milestone,
  "PROJECT_MANAGEMENT": Milestone,
  "COMMUNICATION": Milestone,
  "CRAFT": Milestone,
  "INITIATIVE": Milestone,
  "CAREER_DEVELOPMENT": Milestone,
  "ORG_DESIGN": Milestone,
  "WELLBEING": Milestone,
  "ACCOMPLISHMENT": Milestone,
  "MENTORSHIP": Milestone,
  "EVANGELISM": Milestone,
  "RECRUITING": Milestone,
  "COMMUNITY": Milestone
};
export const milestones = [0, 1, 2, 3, 4, 5];

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 6;
    case 4:
      return 12;
    case 5:
      return 20;
    default:
      return 0;
  }
};

export const pointsToLevels = {
  "0": "1.1",
  "5": "1.2",
  "11": "1.3",
  "17": "2.1",
  "23": "2.2",
  "29": "2.3",
  "36": "3.1",
  "43": "3.2",
  "50": "3.3",
  "58": "4.1",
  "66": "4.2",
  "74": "4.3",
  "90": "5.1",
  "110": "5.2",
  "135": "5.3"
};

export const maxLevel = 135;

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
};

type Tracks = {|
  "MOBILE": Track,
  "WEB_CLIENT": Track,
  "FOUNDATIONS (PLATFORM)": Track,
  "SERVERS & API": Track,
  "PROJECT_MANAGEMENT": Track,
  "COMMUNICATION": Track,
  "CRAFT": Track,
  "INITIATIVE": Track,
  "CAREER_DEVELOPMENT": Track,
  "ORG_DESIGN": Track,
  "WELLBEING": Track,
  "ACCOMPLISHMENT": Track,
  "MENTORSHIP": Track,
  "EVANGELISM": Track,
  "RECRUITING": Track,
  "COMMUNITY": Track
|};

export const tracks: Tracks = {
  MOBILE: {
    displayName: "Mobile",
    category: "A",
    description: "Develops expertise in native mobile platform engineering, such as iOS or Android",
    milestones: [
      {
        summary: "Works effectively within established iOS or Android architectures, following current best practices",
        signals: [
          "Delivers features requiring simple local modifications",
          "Adds simple actions that call server endpoints",
          "Reuses existing components appropriately"
        ],
        examples: [
          "Added existing button to a different iOS surface",
          "Add follow button for publications on Android",
          "Fetched and displayed a new stream, using existing stream item styles"
        ]
      },
      {
        summary: "Develops new instances of existing architecture, or minor improvements to existing architecture",
        signals: [
          "Defines new useful and appropriate proto-generated objects",
          "Creates simple new activities on Android",
          "Migrates code from old patterns to new patterns"
        ],
        examples: [
          "Upgraded SDWebImage to a new major version",
          "Added support for a new type of promotion",
          "Prototyped a simple new feature quickly"
        ]
      },
      {
        summary: "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
        signals: [
          "Implements complex features with a large product surface area",
          "Works effectively with  Android reactive programming framework",
          "Adds support for new iOS features after a major iOS version upgrade"
        ],
        examples: [
          "Designed iOS caching strategy for product search",
          "Built series reader on Android",
          "Informed the team about recent best practice changes and deprecations"
        ]
      },
      {
        summary: "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
        signals: [
          "Pioneers architecture migration strategies that reduce programmer burden",
          "Fixes subtle memory management issues",
          "Implements interactive dismissals that bring delight"
        ],
        examples: [
          "Upgraded CocoaPods to a new major version",
          "Designed architecture for storing and synchronising sales",
          "Removed all Singletons in iOS app"
        ]
      },
      {
        summary: "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
        signals: [
          "Defines long-term goals and ensures active projects are in service of them",
          "Designs and builds innovative, industry-leading UI interactions",
          "Invents new techniques to responsibly stretch limits of the Android platform"
        ],
        examples: [
          "Defined and drove complete migration plan to Swift",
          "Implemented Android recycler views before platform support existed",
          "Pioneered application-level abstractions for multi-app environment"
        ]
      }
    ]
  },

  WEB_CLIENT: {
    displayName: "Web client",
    category: "A",
    description: "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    milestones: [
      {
        summary: "Works effectively within established web client architectures, following current best practices",
        signals: [
          "Makes minor modifications to existing screens",
          "Fixes simple design quality issues",
          "Uses CSS appropriately, following style guide"
        ],
        examples: [
          "Implemented new Houston confirmation banner in the Monoliph",
          "Hooked up the action to dismiss a card from the dashboard",
          "Reskinned customer list using existing customer badge"
        ]
      },
      {
        summary: "Develops new instances of existing architecture, or minor improvements to existing architecture",
        signals: [
          "Makes sensible abstractions based on template and code patterns",
          "Specs and builds interactive components independently",
          "Prototypes simple new features quickly"
        ],
        examples: [
          "Built credit card input component",
          "Created shared datepicker template in Houston",
          "Built modal system"
        ]
      },
      {
        summary: "Designs major new features and demonstrates a nuanced understanding of browser constraints",
        signals: [
          "Provides useful design feedback and suggests feasible alternatives",
          "Performs systemic tasks to significantly minimise bundle size",
          "Acts a caretaker for all of web client code"
        ],
        examples: [
          "Designed font loading strategy for Medium",
          "Researched utility of HTTP/2 for Vend",
          "Designed and implemented Add/Edit Product screen"
        ]
      },
      {
        summary: "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
        signals: [
          "Pioneers architecture migrations that reduce programmer burden",
          "Implements complex UI transitions that bring delight",
          "Makes architectural decisions that eliminate entire classes of bugs"
        ],
        examples: [
          "Designed Vend's frontend entity storage and syncronisation system",
          "Implemented Medium's scrolling text over image blur",
          "Defined and drove migration strategy from Angular 1.6 to 2"
        ]
      },
      {
        summary: "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
        signals: [
          "Invents new techniques to innovate and overcome browser constraints",
          "Identifies and solved systemic problems with current architecture",
          "Defines a long-term vision for web client and ensures projects are in service of it"
        ],
        examples: [
          "Invented CSS in JS",
          "Defined and drove migration strategy to Lite",
          "Implemented unidirectional data flow to completion"
        ]
      }
    ]
  },

  FOUNDATIONS: {
    displayName: "Platform",
    category: "A",
    description: "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    milestones: [
      {
        summary: "Works effectively within established structures, following current best practices",
        signals: [
          "Writes thorough postmortems for service outages",
          "Makes simple configuration changes to services"
        ],
        examples: [
          "Made safe and effective changes to app-gulp",
          "Added a new server role using Puppet and Terraform",
          "Resolved out of disk errors independently"
        ]
      },
      {
        summary: "Develops new instances of existing architecture, or minor improvements to existing architecture",
        signals: [
          "Made minor version upgrades to technologies",
          "Creates re-usable components for developers",
          "Triages service issues correctly and independently"
        ],
        examples: [
          "Upgraded a project from NPM to Yarn",
          "Created Go consumer package (river)",
          "Identified source of slow requests in a single service from the edge in"
        ]
      },
      {
        summary: "Designs standalone systems of moderate complexity, or major new features in existing systems",
        signals: [
          "Acts as primary maintainer for existing critical systems",
          "Designs moderately complex systems",
          "Makes major version upgrades to libraries"
        ],
        examples: [
          "Designed ENVS3 configuration management",
          "Built Vend log processing and storage pipeline",
          "Designed flexible framework for writing machine learning jobs"
        ]
      },
      {
        summary: "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
        signals: [
          "Designs complex projects that encompass multiple systems and technologies",
          "Demonstrates deep knowledge of foundational systems",
          "Introduces new databases and technologies to meet underserved needs"
        ],
        examples: [
          "Designed and built Duke",
          "Designed AWS configuration management",
          "Introduced stream processing with Maxwell and Hydrant"
        ]
      },
      {
        summary: "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
        signals: [
          "Designs transformational projects in service of long-term goals",
          "Defines the strategic vision for foundational work and supporting technologies",
          "Invents industry-leading techniques to solve complex problems"
        ],
        examples: [
          "Invented a novel ML technique that advanced the state of the art",
          "Defined and developed Medium's continuous delivery strategy",
          "Developed and implemented DR strategy"
        ]
      }
    ]
  },

  SERVERS: {
    displayName: "Services & APIs",
    category: "A",
    description: "Develops expertise in server side engineering, using technologies such as Go, Java, or PHP",
    milestones: [
      {
        summary: "Works effectively within established server side frameworks, following current best practices",
        signals: [
          "Adds PHP endpoints using Symfony",
          "Adds Go endpoints to a service",
          "Makes minor server changes to support client needs"
        ],
        examples: [
          "Fixed a small bug in the monoliph Shopify API client",
          "Created a backend tool to version entities",
          "Wrote a MySQL query that made good use of indexes"
        ]
      },
      {
        summary: "Develops new instances of existing architecture, or minor improvements to existing architecture",
        signals: [
          "Assesses correctness and utility of existing code and avoids blind copy-pasting",
          "Generalizes code when appropriate",
          "Determines data needs from product requirements"
        ],
        examples: [
          "Identified need for new index on Dynamo",
          "Re-worked ElasticSearch analyzers for better autocompletion results",
          "Added a new report type to the reporting service"
        ]
      },
      {
        summary: "Designs standalone systems of moderate complexity, or major new features in existing systems",
        signals: [
          "Acts as primary maintainer for existing critical systems",
          "Integrates third party services effectively",
          "Writes playbooks for new service maintenance"
        ],
        examples: [
          "Re-work reporting to use date-based indexes",
          "Implemented promotions service",
          "Built Xendo consumer"
        ]
      },
      {
        summary: "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
        signals: [
          "Delivers complex systems that achieve their goals",
          "Avoids subtle architectural mistakes when considering new systems",
          "Makes appropriate buy vs build choices"
        ],
        examples: [
          "Designed Medium's ranked feed architecture",
          "Designed historical inventory system",
          "Created standards and tools for writing Go microservices"
        ]
      },
      {
        summary: "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
        signals: [
          "Designs transformational projects of significant complexity and scope",
          "Makes decisions that have positive, long term, wide ranging consequences",
          "Identifies and solves systemic problems with current architecture"
        ],
        examples: [
          "Researched, vetted, and selected Go as Vend's statically typed language",
          "Defined microservices architecture and how services communicate",
          "Defined and implemented proprietary IP core to the company's success"
        ]
      }
    ]
  },

  PROJECT_MANAGEMENT: {
    displayName: "Project management",
    category: "B",
    description: "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    milestones: [
      {
        summary: "Effectively delivers individual tasks",
        signals: [
          "Estimates small tasks accurately",
          "Delivers tightly-scoped projects efficiently",
          "Writes effective technical specs outlining approach"
        ],
        examples: [
          "Wrote the technical spec for Quick User Switching",
          "Delivered low stock warning for iOS",
          "Delivered new User badge"
        ]
      },
      {
        summary: "Effectively delivers small personal projects",
        signals: [
          "Performs research and considers alternative approaches",
          "Balances pragmatism and polish appropriately",
          "Defines and hits interim milestones"
        ],
        examples: [
          "Delivered basic promotions API endpoint",
          "Delivered new View Customer design",
          "Executed the multiple image uploader for products"
        ]
      },
      {
        summary: "Effectively delivers projects through a small team",
        signals: [
          "Delegates tasks to others appropriately",
          "Integrates business needs into project planning",
          "Chooses appropriate project management strategy based on context"
        ],
        examples: [
          "Ran project retro to assess improvement opportunities",
          "Completed launch checklist unprompted for well controlled rollout",
          "Facilitated project kickoff meeting to get buy-in"
        ]
      },
      {
        summary: "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
        signals: [
          "Finds ways to deliver requested scope faster, and prioritizes backlog",
          "Manages dependencies on other projects and teams",
          "Leverages recognition of repeated project patterns"
        ],
        examples: [
          "Oversaw delivery of Promotions",
          "Built the features service",
          "Involved marketing, legal, and appropriate functions at project start"
        ]
      },
      {
        summary: "Manages major company pushes delivered by multiple teams",
        signals: [
          "Considers external constraints and business objectives when planning",
          "Leads teams of teams, and coordinates effective cross-functional collaboration",
          "Owns a key company metric"
        ],
        examples: [
          "Managed migration to AWS",
          "Managed delivery of Christmas 2017 priorities",
          "Delivered multi-month engineering project on time"
        ]
      }
    ]
  },

  COMMUNICATION: {
    displayName: "Communication",
    category: "B",
    description: "Shares the right amount of information with the right people, at the right time, and listens effectively",
    milestones: [
      {
        summary: "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
        signals: [
          "Communicates project status clearly and effectively",
          "Collaborates with others with empathy",
          "Asks for help at the appropriate juncture"
        ],
        examples: [
          "Updated oncall-engineers before running a resource-intensive task.",
          "Updated issue status changes in Jira promptly",
          "Gave thoughtful meeting check-in and check-out comments"
        ]
      },
      {
        summary: "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
        signals: [
          "Practises active listening and suspension of attention",
          "Ensures stakeholders are aware of current blockers",
          "Chooses the appropriate tools for accurate and timely communication"
        ],
        examples: [
          "Received and integrated critical feedback positively",
          "Created cross-team Slack channel for payments work",
          "Spoke to domain experts before writing spec"
        ]
      },
      {
        summary: "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
        signals: [
          "Resolves communication difficulties between others",
          "Anticipates and shares schedule deviations in plenty of time",
          "Manages project stakeholder expectations effectively"
        ],
        examples: [
          "Directed team response effectively during outages",
          "Gathered multiple stakeholders together to communicate a priority change",
          "Gave notice of upcoming related work in Band Practise"
        ]
      },
      {
        summary: "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
        signals: [
          "Communicates project risk and tradeoffs skillfully and with nuance",
          "Contextualizes and clarifies ambiguous direction and strategy for others",
          "Negotiates resourcing compromises with other teams"
        ],
        examples: [
          "Lead off-site workshop on interviewing",
          "Implemented Vend's engineering growth framework",
          "Aligned the entire organization around the release of Promotions"
        ]
      },
      {
        summary: "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
        signals: [
          "Defines processes for clear communication for the entire team",
          "Shares the right amount of information with the right people, at the right time",
          "Develops and delivers plans to execs, the board, and outside investors"
        ],
        examples: [
          "Organized half year check-in company offsite",
          "Created the communication plan for a large organizational change",
          "Presented to the board about key company metrics and projects"
        ]
      }
    ]
  },

  CRAFT: {
    displayName: "Craft",
    category: "B",
    description: "Embodies and promotes practices to ensure excellent quality products and services",
    milestones: [
      {
        summary: "Delivers consistently good quality work",
        signals: [
          "Tests new code thoroughly, both locally, and in production once shipped",
          "Writes tests for every new feature and bug fix",
          "Writes clear comments and documentation"
        ],
        examples: [
          "Caught a bug while playing with a feature before it went live",
          "Landed non-trivial PR with no caretaker comments",
          "Wrote good hermetic tests for a microservice"
        ]
      },
      {
        summary: "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
        signals: [
          "Refactors existing code to make it more testable",
          "Adds tests for uncovered areas",
          "Deletes unnecessary code and deprecates proactively when safe to do so"
        ],
        examples: [
          "Requested tests for a PR when acting as reviewer",
          "Removed unused feature flags in the monoliph",
          "Fixed a TODO for someone else in the codebase"
        ]
      },
      {
        summary: "Improves others' ability to deliver great quality work",
        signals: [
          "Implements systems that enable better testing",
          "Gives thoughtful code reviews as a domain expert",
          "Adds tooling to improve code quality"
        ],
        examples: [
          "Improved build pipeline to run the same volume of tests faster",
          "Improved dev container build speed and moved all containers from Quay to ECR",
          "Created a shared library after seeing multiple projects doing the same thing "
        ]
      },
      {
        summary: "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
        signals: [
          "Builds systems so as to eliminate entire classes of programmer error",
          "Focuses the team on quality with regular reminders",
          "Coordinates support team ticket volume meetings and prioritises findings"
        ],
        examples: [
          "Implemented a strategy to attack flakey build pipelines",
          "Iterated repeatedly to develop Medium's underlines solution",
          "Defined and oversaw plan for closing Heartbleed vulnerability"
        ]
      },
      {
        summary: "Enables and encourages the entire organization to make quality a central part of the development process",
        signals: [
          "Defines policies for the engineering org that encourage quality work",
          "Identifies and eliminates single points of failure throughout the organization",
          "Secures time and resources from execs to support great quality"
        ],
        examples: [
          "Negotiated resources for Standardisation Sprints",
          "",
          "Implemented compensation for on-call rotation"
        ]
      }
    ]
  },

  INITIATIVE: {
    displayName: "Initiative",
    category: "B",
    description: "Challenges the status quo and effects positive organizational change outside of mandated work",
    milestones: [
      {
        summary: "Identifies opportunities for organizational change or product improvements",
        signals: [
          "Writes Confluence page about improvement opportunities",
          "Raises meaningful tensions in tactical meetings",
          "Asks leadership team insightful questions at AMA "
        ],
        examples: [
          "Wrote about problems with ECS on Confluence",
          "",
          "Reported a site issue in Github"
        ]
      },
      {
        summary: "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
        signals: [
          "Picks bugs off the backlog proactively when blocked elsewhere",
          "Makes design quality improvements unprompted",
          "Takes on trust and safety tasks proactively when blocked elsewhere"
        ],
        examples: [
          "Advocated on own behalf for a change in role",
          "Implemented feature service API in Go Common",
          "Audited web client performance in Chrome and proposed fixes"
        ]
      },
      {
        summary: "Causes change to positively impact an entire team or instigates a minor feature or service",
        signals: [
          "Demonstrates concepts proactively with prototypes",
          "Fixes complicated bugs outside of regular domain",
          "Takes ownership of systems that nobody owns or wants"
        ],
        examples: [
          "Defined style guide to resolve style arguments",
          "Proposed and implemented at-mentions prototype",
          "Made significant improvments to Monoliph Jenkins pipeline, unprompted"
        ]
      },
      {
        summary: "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
        signals: [
          "Champions and pioneers new technologies to solve new classes of problem",
          "Exemplifies grit and determination in the face of persistent obstacles",
          "Instigates major new features, services, or architectures"
        ],
        examples: [
          "Created the interviewing rubric and booklet",
          "Implemented and secured support for 2FA login",
          "Migrated go-common to individual repos for maintainability"
        ]
      },
      {
        summary: "Effects change that has a substantial positive impact on the whole company",
        signals: [
          "Creates a new function to solve systemic issues",
          "Galvanizes the entire company and garners buy in for a new strategy",
          "Changes complex organizational processes"
        ],
        examples: [
          "Migrated team structure from Solutions to Product+Engineering",
          "Built Scanner prototype and convinced company to launch it",
          "Convinced leadership and engineering org to move from Rackspace to AWS"
        ]
      }
    ]
  },

  CAREER_DEVELOPMENT: {
    displayName: "Career development",
    category: "C",
    description: "Provides strategic support to engineers to help them build the career they want",
    milestones: [
      {
        summary: "Engages in the Engineering career development process",
        signals: [
          "Has a career plan or some form of growth plan in place",
          "Shares opportunities for improvements and recognises achievements",
          "Understands growth opportunities available to them"
        ],
        examples: [
          "Engaged in career development conversation with their manager",
          "Discussed career options and areas of interest informally",
          "Provided informal ideas for a team member's career growth"
        ]
      },
      {
        summary: "Formally supports and advocates for one person and provides tools to help them solve career problems",
        signals: [
          "Ensure a team member has an appropriate role on their team",
          "Offers effective career advice to team members, without being prescriptive",
          "Creates space for people to talk through challenges"
        ],
        examples: [
          "Set up and attended regular, constructive 1:1s ",
          "Provided coaching on how to have difficult conversations",
          "Taught team members the GROW model"
        ]
      },
      {
        summary: "Inspires and retains a small group of people and actively pushes them to stretch themselves",
        signals: [
          "Discusses paths, and creates plans for personal and professional growth",
          "Advocates to align people with appropriate roles within organization",
          "Works with team leads to elevate emerging leaders"
        ],
        examples: [
          "Reviewed individual team progression regularly",
          "Suggested appropriate team member for a new position",
          "Arranged a requested switch of discipline for a group member"
        ]
      },
      {
        summary: "Manages interactions and processes between groups, promoting best practices and setting a positive example",
        signals: [
          "Manages team transitions smoothly, respecting team and individual needs",
          "Develops best practices for conflict resolution",
          "Ensures all group members' roles are meeting their career needs"
        ],
        examples: [
          "Completed leadership training",
          "Built a resourcing plan based on company, team, and individual goals",
          "Prevented regretted attrition with intentional, targeted intervention"
        ]
      },
      {
        summary: "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
        signals: [
          "Supports and develops senior leaders",
          "Identified leadership training opportunities for senior leadership",
          "Pushes everyone to be as good as they can be, with empathy"
        ],
        examples: [
          "Provided coaching to team leads",
          "Devised growth plan for team leads",
          "Advocated to execs for engineer development resources and programs"
        ]
      }
    ]
  },

  ORG_DESIGN: {
    displayName: "Org design",
    category: "C",
    description: "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    milestones: [
      {
        summary: "Respects and participates in processes, giving meaningful feedback to help the organization improve",
        signals: [
          "Reflects on meetings that leave them inspired or frustrated",
          "Teaches others about existing processes",
          "Actively participates and makes contributions within organizational processes"
        ],
        examples: [
          "Facilitated effective meetings with empathy",
          "Explained sprint planning format to a new hire",
          "Provided feedback on sprint planning meeting"
        ]
      },
      {
        summary: "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
        signals: [
          "Defines meeting structure and cadence that meets team needs",
          "Engages in organizational systems thinking",
          "Advocates for improved diversity and inclusion, and proposes ideas to help"
        ],
        examples: [
          "Defined sprint planning structure for small team",
          "Improved on-call rotation scheduling",
          "Defined standard channels for inter-team communication"
        ]
      },
      {
        summary: "Develops processes and programs to solve ongoing organizational problems",
        signals: [
          "Creates programs that meaningfully improve organizational diversity",
          "Solves long-standing organizational problems",
          "Reallocates resources to meet organizational needs"
        ],
        examples: [
          "Developed 90-day plan template",
          "Created bug-rotation program to address ongoing quality issues",
          "Defined Frontend Guild manifesto"
        ]
      },
      {
        summary: "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
        signals: [
          "Evaluates incentive structures and their effect on execution",
          "Analyzes existing processes for bias and shortfall",
          "Ties abstract concerns to concrete organizational actions or norms"
        ],
        examples: [
          "Connected mobile recruiting difficulties to focus on excellence",
          "Raised leadership level discrepancies",
          "Analyzed the hiring process for false negative potential"
        ]
      },
      {
        summary: "Leads initiatives to address issues stemming from hidden dynamics and company norms",
        signals: [
          "Builds programs to train leadership in desired skills",
          "Creates new structures that provide unique growth opportunities",
          "Leads planning and communication for reorgs"
        ],
        examples: [
          "Lead efforts to increase investment in Engineering",
          "Directed resources to meaningfully improve diversity at all levels",
          "Reviewed and aligned salaries across similar levels."
        ]
      }
    ]
  },

  WELLBEING: {
    displayName: "Wellbeing",
    category: "C",
    description: "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    milestones: [
      {
        summary: "Uses tools and processes to help ensure colleagues are healthy and happy",
        signals: [
          "Keeps confidences unless legally or morally obliged to do otherwise",
          "Applies the reasonable person principle to others",
          "Avoids blame and focuses on positive change"
        ],
        examples: [
          "Ensured group members were taking enough vacation",
          "Put themself in another's shoes to understand their perspective",
          "Checked in with colleague showing signs of burnout"
        ]
      },
      {
        summary: "Creates a positive, supportive, engaging team environment for group members",
        signals: [
          "Sheds light on other experiences to build empathy and compassion",
          "Validates ongoing work and sustains motivation",
          "Proposes solutions when teams get bogged down or lose momentum"
        ],
        examples: [
          "Coordinated a small celebration for a project launch",
          "Connected tedious A|B testing project with overall company goals",
          "Noted a team without a recent win and suggested some easy quick wins"
        ]
      },
      {
        summary: "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
        signals: [
          "Trains group members to separate stimulus from response",
          "Maintains a pulse on individual and team morale",
          "Helps group members approach problems with curiosity"
        ],
        examples: [
          "Completed training on transference and counter transference",
          "Completed training on compromise and negotiation techniques",
          "Reframed a problem as a challenge, instead of a barrier, when appropriate"
        ]
      },
      {
        summary: "Advocates for the needs of teams and group members, and proactively works to calm the organization",
        signals: [
          "Ensures team environments are safe and inclusive, proactively",
          "Grounds group member anxieties in reality",
          "Tracks team retention actively and proposes solutions to strengthen it"
        ],
        examples: [
          "Relieved org tension around product direction by providing extra context",
          "Encouraged group members to focus on what they can control",
          "Guided people through complex organizational change"
        ]
      },
      {
        summary: "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
        signals: [
          "Recognizes and points out narratives when appropriate",
          "Works to reshape narratives from victimization to ownership",
          "Increases the psychological safety of the entire team"
        ],
        examples: [
          "Converted group member from a problem haver to a problem solver",
          "Challenged false narrative and redirected to compassion and empathy",
          "Cultivated and championed a culture of empathy within the entire team"
        ]
      }
    ]
  },

  ACCOMPLISHMENT: {
    displayName: "Accomplishment",
    category: "C",
    description: "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    milestones: [
      {
        summary: "Helps individuals identify blockers and helps them identify next steps for resolution",
        signals: [
          "Notices when someone is stuck and reaches out",
          "Helps others break down problems into feasible, tangible next steps",
          "Talks through problems non-judgmentally"
        ],
        examples: [
          "Completed training on diagnosing problems",
          "Unblocked a group member",
          "Reinforces and affirms positive feedback for good work"
        ]
      },
      {
        summary: "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
        signals: [
          "Gathers context outside the immediate problem",
          "Recognizes issues within local environment and suggests change",
          "Works to encourage ownership of actions and responsibilities"
        ],
        examples: [
          "Completed training on decision making",
          "Convinced a team member to solve a problem directly, rather than doing it for them",
          "Gave honest feedback about poor performance, with compassion"
        ]
      },
      {
        summary: "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
        signals: [
          "Aggregates signals of poor performance and creates process for improvement",
          "Investigates motivation and externalities for consistent poor performance",
          "Puts together comprehensive, achievable performance plans"
        ],
        examples: [
          "Worked with group member to address persistent communication failures",
          "Arranged a transfer to another team, resulting in improved performance",
          "Managed group member closely to maximise chances of PIP success"
        ]
      },
      {
        summary: "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
        signals: [
          "Recognizes heightened situations and toxic or aggressive interactions",
          "Inserts themself into conflict where appropriate to calm and mediate",
          "Encourages open dialog and builds trust between parties in conflict"
        ],
        examples: [
          "Empowered a team to drive forward amidst uncertainty",
          "Protected team from externalities so they could focus on goals",
          "Mediated sit-down between team members to address tension"
        ]
      },
      {
        summary: "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
        signals: [
          "Takes control of dysfunctional teams to organise chaos",
          "Repairs broken team dynamics and builds harmony",
          "Presides over a well-oiled team of teams"
        ],
        examples: [
          "Turned around the performance of a problematic team",
          "De-escalated serious tensions between teams",
          "Rebuilt trust between senior team leads"
        ]
      }
    ]
  },

  MENTORSHIP: {
    displayName: "Mentorship",
    category: "D",
    description: "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    milestones: [
      {
        summary: "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
        signals: [
          "Makes themself available for informal support and advice",
          "Acts as sounding board for peers and more junior members",
          "Provides sound advice when asked"
        ],
        examples: [
          "Acted as an onboarding buddy",
          "Paired with an engineer to help them with an unfamiliar area",
          "Helped a colleague understand their feelings"
        ]
      },
      {
        summary: "Mentors people proactively, and guides people to realizations rather than providing the answer",
        signals: [
          "Takes time to explain concepts and best practices",
          "Asks questions to illuminate concepts, rather than stating them",
          "Allows others to lead efforts when it will help their development"
        ],
        examples: [
          "Shared interesting article with a team member to help with their growth",
          "Offered unprompted feedback to help growth, with empathy",
          "Lead from behind to support someone new to a leadership role"
        ]
      },
      {
        summary: "Teaches small groups of engineers and contributes to Vend's shared knowledge base",
        signals: [
          "Avoids siloing information when it can be usefully shared with others",
          "Works to increase the bus factor of systems",
          "Finds tools that work best for a team member's personality"
        ],
        examples: [
          "Gave a lunch'n'learn presentation on Go",
          "Wrote Wiki page on how to run a complex db migration",
          "Answered multiple Confluence Questions with clarity"
        ]
      },
      {
        summary: "Encourages people to mentor each other, and creates ways for them to do so",
        signals: [
          "Defines an entire curriculum for a discipline",
          "Draws positive attention to well-modeled mentor and teaching behaviours",
          "Creates lunch-n-learn series and lines up speakers"
        ],
        examples: [
          "Created and lead Vend's Frontend platform group",
          "Organized an Eng All Hands with an outside speaker",
          "Designed and taught Go microservices curriculum"
        ]
      },
      {
        summary: "Instills and promotes a culture of learning and development within the entire engineering team",
        signals: [
          "Sets incentive structures to recognise and reward mentorship",
          "Empowers team members to develop themselves",
          "Role models productive and healthy mentor relationships"
        ],
        examples: [
          "Instituted the professional education budget for engineers",
          "Mentored mentors",
          "Took team members on visits to SF tech leaders"
        ]
      }
    ]
  },

  EVANGELISM: {
    displayName: "Evangelism",
    category: "D",
    description: "Promotes Vend to the outside world and establishes it as an attractive and thoughtful place to work",
    milestones: [
      {
        summary: "Represents Vend well externally, and influences individuals positively",
        signals: [
          "Shares personal and organizational successes with their network",
          "Attends Vend-hosted events and talks with guests",
          "Communicates genuine and honest excitement about their work externally"
        ],
        examples: [
          "Shared a Vend product launch post on Facebook",
          "Acted as a guide for a non-friend visitor to the office",
          "Supported PR efforts by giving a quote or having a photo taken"
        ]
      },
      {
        summary: "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
        signals: [
          "Takes meaningful action to introduce people to Vend",
          "Joined public Slack group and represented Vend appropriately, and well",
          "Organizes positive small- or medium-sized events that bring people to Vend"
        ],
        examples: [
          "Volunteered as a helper for Summer of Tech workshops",
          "Organized a short tour of the office by college students",
          "Talked at a Women Who Code event hosted at Vend"
        ]
      },
      {
        summary: "Works hard to positively influence large groups of people on their views of Vend",
        signals: [
          "Mentors or participates in a high visibility way in an external organization",
          "Builds fruitful partnerships with external organizations",
          "Writes blog posts about Vend that receive moderate traffic"
        ],
        examples: [
          "Represented Vend on a panel at a conference of industry experts",
          "Established close ties with Callaghan",
          "Built a durable, long-standing org relationship with industry bodies"
        ]
      },
      {
        summary: "Establishes Vend as an great, innovative company and workplace to the whole industry",
        signals: [
          "Establishes themself as an industry thought leader who attracts talent",
          "Publishes material about Vend's organizational or technical innovations",
          "Leverages significant following to evangelise Vend"
        ],
        examples: [
          "Published a paper on Vend technology in a peer-reviewed journal",
          "Authored press release on HTTPoxy",
          "Published a great technical post on the Vend engineering blog"
        ]
      },
      {
        summary: "Introduces Vend in a positive light to a wider audience outside the industry",
        signals: [
          "Delivers key messages to broad, mainstream audiences",
          "Influences people with large audiences to talk about Vend positively",
          "Drives recognition and adoption of Vend in significant numbers"
        ],
        examples: [
          "Published or interviewed in a mainstream newspaper or website outside tech",
          "Keynoted a conference with international attention",
          "Represented Vend in national televised media"
        ]
      }
    ]
  },

  RECRUITING: {
    displayName: "Recruiting",
    category: "D",
    description: "Strengthens Vend's team by bringing in excellent staff members",
    milestones: [
      {
        summary: "Brings new candidates into the pipeline and/or understands how to evaluate candidates at Vend",
        signals: [
          "Reviews existing network for hiring leads regularly",
          "Shadows interviews to gain familiarity with process",
          "Reviews current job postings regularly"
        ],
        examples: [
          "Completed interview calibration",
          "Set up casual sessions to practice asking questions",
          "Referred appropriate individuals for open positions"
        ]
      },
      {
        summary: "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
        signals: [
          "Provides clear, objective feedback on candidates (we should have an interview rubric)",
          "Interviews candidates with empathy and treats them all with equal respect",
          "Researches approaches for sourcing candidates and diversifying hiring"
        ],
        examples: [
          "Added observable evidence for interview feedback",
          "Started a monthly brunch for candidates to meet Vend employees",
          ""
        ]
      },
      {
        summary: "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
        signals: [
          "Teaches new interviewers how to interview with empathy",
          "Models great interview technique and feedback when shadowed",
          "Reverse shadows trainees and helps calibrate their feedback"
        ],
        examples: [
          "Wrote fantastic new interview questions that are measurable and insightful",
          "Brought candidates into our pipeline proactively, with a high conversion rate",
          "Proposed useful, tangible improvements to the interview process"
        ]
      },
      {
        summary: "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
        signals: [
          "Documents subtle cues in interviews that indicate values alignment",
          "Makes hiring decisions, resolving discrepancies between conflicting reports",
          "Top-grades candidates and teases out character traits"
        ],
        examples: [
          "Planned engineering summit on interview process and training",
          "Organized and lead Vend's presence at a recruitment fair",
          "Started internship program"
        ]
      },
      {
        summary: "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
        signals: [
          "Sets the tone, policy and goals around building a diverse, high-quality team",
          "Identifies and brings in promising acquisitions",
          "Tracks industry activity, identifying opportunities for critical roles"
        ],
        examples: [
          "Talked with a senior candidate over many months to fill a critical role",
          "Organized efforts around convincing acquired engineers to join and stay",
          "Set goals, then tracked and reported metrics on team demographics over time"
        ]
      }
    ]
  },

  COMMUNITY: {
    displayName: "Community",
    category: "D",
    description: "Builds community internally, gives of themself to the team, and champions and extols company values",
    milestones: [
      {
        summary: "Is available and present on current teams, and works to contribute positively to company culture",
        signals: [
          "Participates in team activities and offsites",
          "Treats colleagues and clients with respect",
          "Joins groups or committees outside regular duties"
        ],
        examples: [
          "Joined and actively participated in the Frontend platform group",
          "Brought a small gift back from vacation for the team",
          "Wrote entertaining and informative incident review updates on Confluence"
        ]
      },
      {
        summary: "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
        signals: [
          "Makes space for others to participate",
          "Collaborates with other engineers outside direct responsibilities",
          "Finds ways to ramp up and engage new hires quickly"
        ],
        examples: [
          "Created Fuck Yeah Fridays",
          "Brought shy and introverted people into a dominant conversation",
          ""
        ]
      },
      {
        summary: "Contributes to improving team relatedness, and helps build a culture of lending support",
        signals: [
          "Takes on additional on-call shifts at short notice",
          "Pitches in to help other teams hit deadlines, without missing own deadlines",
          "Uses position to raise difficult issues on someone's behalf"
        ],
        examples: [
          "Handles on-call with little support while still contributing to projects",
          "Started and drove the diversity and ally skills training",
          "Stayed positive and improved team morale during period after layoffs"
        ]
      },
      {
        summary: "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
        signals: [
          "Goes above and beyond on the Watch, serving the team without complaint",
          "Implements concrete programs to signficantly improve team inclusivity",
          "Takes on large amounts of tedious grunt work for the team without being asked"
        ],
        examples: [
          "Devoted large amount of time to helping outside direct responsibilities",
          "Refactored a multitude of legacy PHP issues",
          "Acted as sole maintainer of Jenkins for years"
        ]
      },
      {
        summary: "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
        signals: [
          "Brings separate teams together to build relatedness",
          "Holds individuals, teams, and leadership accountable to Vend's values",
          "Sets the tone, policy, and goals around maintaining an inclusive company"
        ],
        examples: [
          "Organized summer BBQ for the whole engineering org",
          "Devised, delivered and acted on findings from a CultureAmp survey",
          "Challenged and corrected exclusionary behaviour or policies"
        ]
      }
    ]
  }
};

export const trackIds: TrackId[] = Object.keys(tracks);

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category);
  return set;
}, new Set());

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map();
  trackIds.forEach(trackId => {
    const milestone = milestoneMap[trackId];
    const categoryId = tracks[trackId].category;
    let currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone)
    );
  });
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId);
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 };
  });
};

export const totalPointsFromMilestoneMap = (
  milestoneMap: MilestoneMap
): number =>
  trackIds
    .map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0);

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range(["#00abc2", "#428af6", "#e1439f", "#e54552"]);

export const titles = [
  { label: "Engineer I", minPoints: 0, maxPoints: 16 },
  { label: "Engineer II", minPoints: 17, maxPoints: 35 },
  { label: "Senior Engineer", minPoints: 36, maxPoints: 57 },
  { label: "Group Lead", minPoints: 36, maxPoints: 57 },
  { label: "Staff Engineer", minPoints: 58, maxPoints: 89 },
  { label: "Senior Group Lead", minPoints: 58, maxPoints: 89 },
  { label: "Principal Engineer", minPoints: 90 },
  { label: "Director of Engineering", minPoints: 90 }
];

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return titles
    .filter(
      title =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map(title => title.label);
};
