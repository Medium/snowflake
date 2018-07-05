// @flow
import * as d3 from "d3";

export type TrackId =
  | "WEB_CLIENT"  // market assessment.
  | "FOUNDATIONS" // product strategy
  | "SERVERS" // product execution
  | "PROJECT_MANAGEMENT"
  | "COMMUNICATION"
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
  WEB_CLIENT: Milestone,
  FOUNDATIONS: Milestone,
  SERVERS: Milestone,
  PROJECT_MANAGEMENT: Milestone,
  COMMUNICATION: Milestone,
  INITIATIVE: Milestone,
  CAREER_DEVELOPMENT: Milestone,
  ORG_DESIGN: Milestone,
  WELLBEING: Milestone,
  ACCOMPLISHMENT: Milestone,
  MENTORSHIP: Milestone,
  EVANGELISM: Milestone,
  RECRUITING: Milestone,
  COMMUNITY: Milestone
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
  WEB_CLIENT: Track,
  FOUNDATIONS: Track,
  SERVERS: Track,
  PROJECT_MANAGEMENT: Track,
  COMMUNICATION: Track,
  INITIATIVE: Track,
  CAREER_DEVELOPMENT: Track,
  ORG_DESIGN: Track,
  WELLBEING: Track,
  ACCOMPLISHMENT: Track,
  MENTORSHIP: Track,
  EVANGELISM: Track,
  RECRUITING: Track,
  COMMUNITY: Track
|};

export const tracks: Tracks = {
  WEB_CLIENT: {
    displayName: "Market understanding",
    category: "A",
    description:
      "Assess and value market opportunities, monitor competitors, identify trends",
    milestones: [
      {
        summary:
          "Understand the job to be done for a product",
        signals: [
          "Gather feedback from stakeholders to identify minimum viable product or minimum marketable feature",
          "Communicate requirements to the engineering team"
        ],
        examples: [
          "Wrote up description of Blackbird user-defined crosswalks and reviewed with team",
        ]
      },
      {
        summary:
          "Understand the market demand for a feature or product",
        signals: [
          "Understands the competitive landscape, approximate pricing and total market size",
          "Understands the target user and communicates it to the team",
          "Prototypes simple new features quickly"
        ],
        examples: [
          "Built a product canvas / product requirements document for Launchpad demographics",
          "Built a competitive matrix for longitudinal patient analysis"
        ]
      },
      {
        summary:
          "Indentifies the total addressable market for specific products",
        signals: [
          "Works with other departments to approximate total market and provides realistic revenue goals",
          "Uses market opportunities to prioritize one product or feature request over another"
        ],
        examples: [
          "Worked with sales to determine competitor average pricing for healthcare utilization projections and identified total market opportunity, influenced internal pricing discussion",
          "Worked with marketing department to craft message specific to target users",
        ]
      },
      {
        summary:
          "Independently identifies, assesses and communicates market opportunities",
        signals: [
          "Familiarity with healthcare domain allows PM to identify adjacent market opportunities",
          "Proposes alternative paths forward to management team",
        ],
        examples: [
          "Demonstrated that minor changes to Launchpad would make it applicable to post-acute healthcare and assessed total market opportunity, presented to management"
        ]
      },
      {
        summary:
          "Is considered an expert on company strategy to identify and assess market opportunities",
        signals: [
          "Has systemized methodology for assessing opportunities and regularly develops strategy to address",
          "Clearly compares competing opportunities and evaluates which present the highest opportunity for growth"
        ],
        examples: [
          "Identified market opportunity, effectively created organizational alignment around it and changed company direction"
        ]
      }
    ]
  },

  FOUNDATIONS: {
    displayName: "Product Strategy",
    category: "A",
    description:
      "Understands competitive advantages to create product vision",
    milestones: [
      {
        summary:
          "Understands the product's job to be done",
        signals: [
          "Discusses job to be done with stakeholders and communicates it during product meetings",
          "Influences design of product or feature at hand in order to influence design, priority, value",
          "Understands what the product doesn't do",
        ],
        examples: [
          "Interviews various potential users to confirm understanding of the job to be done",
          "Rules out scope creep that doesn't contribute to the goal at hand",
        ]
      },
      {
        summary:
          "Identifies new value that a product can deliver",
        signals: [
          "Evaluates value of new product to identify prioritization against competing products that we might tackle",
          "Interviews potential users to see how the product or feature might be used",
        ],
        examples: [
          "????"
        ]
      },
      {
        summary:
          "Shapes product strategy to continually provide competitive advantage",
        signals: [
          "Gathers feedback from users that identifies how a product can be differentiated from competitors",
          "Influences decisions based on gathered metrics",
        ],
        examples: [
          "Presents report on user confusion based on metrics, provides suggestions to alleviate",
          "Researches competition and comes up with novel ways to address gaps in user experience"
        ]
      },
      {
        summary:
          "Guides long-term strategy for some products or services",
        signals: [
          "Is considered the expert on specific products and services and consulted for changes",
          "Works cross-departmentally to promote visibility of changes to products and services",
        ],
        examples: [
          "Worked with the sales and marketing team to develop material for new product release.",
        ]
      },
      {
        summary:
          "Guides long-term strategy for all products and services offered by Stratasan",
        signals: [
          "Is familiar with the health care strategic planning market and how our product fits in the overall landscape",
          "Influences organizational direction by presenting compelling cases for product development focus",
        ],
        examples: [
          "Recommended product focus based on reading industry white papers",
        ]
      },
    ]
  },

  SERVERS: {
    displayName: "Product Execution",
    category: "A",
    description:
      "Develops expertise in server side engineering, using Python & Django",
    milestones: [
      {
        summary:
          "Works effectively within established structures, following current best practices",
        signals: [
          "Edits pathways endpoints using DRF",
          "Edits and adds analytics views & templates using standard methods"
        ],
        examples: [
          "Modified pathways serializers to improve API structure",
          "Added backoffice templates and views to provide new reports"
        ]
      },
      {
        summary:
          "Develops new instances of existing architecture, or minor improvements to existing architecture",
        signals: [
          "Assesses correctness and utility of existing code and avoids blind copy-pasting",
          "Generalizes code when appropriate",
          "Determines data needs from product requirements"
        ],
        examples: [
          "Wrote migrations, verifying on staging and planned rollout to production",
          "Improved endpoint performance through caching and wrote jobs to maintain cache",
          "Wrote new features for AlchemyBuilder, explorer.py, canvas reports, etc"
        ]
      },
      {
        summary:
          "Designs standalone systems of moderate complexity, or major new features in existing systems",
        signals: [
          "Acts as primary maintainer for existing critical systems",
          "Writes new Canvas reports and Pathways aggregation schemes"
        ],
        examples: [
          "Developed new Loyalty Slices",
          "Added caching layer to slices",
          "Ported demographics to Esri API"
        ]
      },
      {
        summary:
          "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
        signals: [
          "Delivers complex systems that achieve their goals",
          "Avoids subtle architectural mistakes when considering new systems",
          "Makes appropriate buy vs build choices"
        ],
        examples: [
          "Introduced Peach to improve event-driven ETL",
          "Ported background processing from Pyres to RQ",
          "Introduced docker to health"
        ]
      },
      {
        summary:
          "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
        signals: [
          "Designs transformational projects of significant complexity and scope",
          "Makes decisions that have positive, long term, wide ranging consequences",
          "Identifies and solves systemic problems with current architecture"
        ],
        examples: [
          "Wrote significant parts of Django, pandas and/or sqlalchemy",
          "Defined curated view structure in health"
        ]
      }
    ]
  },

  PROJECT_MANAGEMENT: {
    displayName: "Project management",
    category: "B",
    description:
      "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    milestones: [
      {
        summary: "Effectively delivers individual tasks",
        signals: [
          "Estimates small tasks accurately",
          "Delivers tightly-scoped projects efficiently",
          "Writes effective technical specs outlining approach"
        ],
        examples: [
          "Wrote the technical spec to backoffice gallery improvements",
          "Delivered email template updates",
          "Built new account templates"
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
          "Delivered promo editor",
          "Delivered audio uploading for web client",
          "Executed the recommends to claps backfill"
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
        summary:
          "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
        signals: [
          "Finds ways to deliver requested scope faster, and prioritizes backlog",
          "Manages dependencies on other projects and teams",
          "Leverages recognition of repeated project patterns"
        ],
        examples: [
          "Oversaw technical delivery of Stylish update",
          "Managed postgres migration from heroku to RDS",
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
          "Managed technical introduction of Peach",
          "Oversaw migration to python 3",
          "Delivered multi-month engineering project on time"
        ]
      }
    ]
  },

  COMMUNICATION: {
    displayName: "Communication",
    category: "B",
    description:
      "Shares the right amount of information with the right people, at the right time, and listens effectively",
    milestones: [
      {
        summary:
          "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
        signals: [
          "Communicates project status clearly and effectively",
          "Collaborates with others with empathy",
          "Asks for help at the appropriate juncture"
        ],
        examples: [
          "Took notes from meetings, dissimenated to interested parties",
          "Communicated project status to individuals that requested it",
          "Appropriately sought clarification in feature specifications"
        ]
      },
      {
        summary:
          "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
        signals: [
          "Practises active listening and suspension of attention",
          "Ensures stakeholders are aware of current blockers",
          "Chooses the appropriate tools for accurate and timely communication"
        ],
        examples: [
          "Received and integrated critical feedback positively",
          "Kept team members (sales, marketing) informed about timeline confidence and required adjustments",
          "Spoke to domain experts before writing specifications"
        ]
      },
      {
        summary:
          "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
        signals: [
          "Shares the necessary information to facilitate stakeholder discussion about product strategy and direction",
          "Resolves communication difficulties between others",
          "Anticipates and shares schedule deviations in plenty of time",
          "Manages project stakeholder expectations effectively"
        ],
        examples: [
          "Gave a substantial lunch and learn presentation of new product or feature",
          "Craft marketing and sales messaging around new product or features"
        ]
      },
      {
        summary:
          "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
        signals: [
          "Communicates project risk and tradeoffs skillfully and with nuance",
          "Contextualizes and clarifies ambiguous direction and strategy for others",
          "Negotiates resourcing compromises with other teams"
        ],
        examples: [
          "Establishes cross-departmental alignment around product strategy within the organization",
        ]
      },
      {
        summary:
          "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
        signals: [
          "Defines processes for clear communication for the entire team",
          "Shares the right amount of information with the right people, at the right time",
          "Develops and delivers plans to execs, the board, and outside investors"
        ],
        examples: [
          "Organized company town-hall",
          "Created the communication plan for a large organizational change",
          "Presented key company metrics and projects to the company leadership team"
        ]
      }
    ]
  },

  INITIATIVE: {
    displayName: "Initiative",
    category: "B",
    description:
      "Challenges the status quo and effects positive organizational change outside of mandated work",
    milestones: [
      {
        summary:
          "Identifies opportunities for organizational change or product improvements",
        signals: [
          "Sparks meaningful conversations in iteration meetings",
          "Asks leadership team probing questions at all-hands",
          "Reads articles about Product Management best practices",
          "Documents workflows to create repeatable processes"
        ],
        examples: [
          "Triage feature request list",
          "Take meeting notes",
          "Follow up on items to make sure they are completed"
        ]
      },
      {
        summary:
          "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
        signals: [
          "Makes design quality improvements unprompted",
          "Takes on trust and safety tasks proactively when blocked elsewhere"
        ],
        examples: [
          "Advocated on own behalf for a change in role",
          "Implemented flow typing for promises",
          "Audited pandas performance issues and proposed fixes"
        ]
      },
      {
        summary:
          "Causes change to positively impact an entire team or instigates a minor feature or service",
        signals: [
          "Demonstrates concepts proactively with prototypes",
          "Documents complicated bugs outside of regular domain",
          "Takes ownership of systems that nobody owns or wants"
        ],
        examples: [
          "Defined style guide to resolve style arguments",
          "Documented and cataloged all places where date formatting should be standardized",
          "Proposed user improvements to product, gathered data to support, and communicated with team"
        ]
      },
      {
        summary:
          "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
        signals: [
          "Champions and pioneers new technologies to solve new classes of problem",
          "Exemplifies grit and determination in the face of persistent obstacles",
          "Instigates major new features, services, or architectures"
        ],
        examples: ["Implemented new plan to gather user metrics", "Worked with customer success team to roll out new training materials"]
      },
      {
        summary:
          "Effects change that has a substantial positive impact on the whole company",
        signals: [
          "Create new organizational processes to solve systemic issues",
          "Galvanizes the entire company and garners buy in for a new strategy",
          "Changes complex organizational processes"
        ],
        examples: ["Work with customer success, marketing, and sales to communicate new market opportunity"]
      }
    ]
  },

  CAREER_DEVELOPMENT: {
    displayName: "Career development",
    category: "C",
    description:
      "Provides strategic support to colleagues to help them build the career they want",
    milestones: [
      {
        summary:
          "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
        signals: [
          "Advocates on behalf and in defense of a group member",
          "Shares opportunities for improvements and recognises achievements",
          "Explains appropriate available industry paths"
        ],
        examples: [
          "Collected and delivered feedback",
          "Discussed career options and areas of interest informally",
          "Paired with development interns"
        ]
      },
      {
        summary:
          "Formally supports and advocates for one person and provides tools to help them solve career problems",
        signals: [
          "Ensure a group member has an appropriate role on their team",
          "Offers effective career advice to group members, without being prescriptive",
          "Creates space for people to talk through challenges"
        ],
        examples: [
          "Set up and attended regular, constructive 1:1s",
          "Provided coaching on how to have difficult conversations"
        ]
      },
      {
        summary:
          "Inspires and retains a small group of people and actively pushes them to stretch themselves",
        signals: [
          "Discusses paths, and creates plans for personal and professional growth",
          "Advocates to align people with appropriate roles within organization",
          "Works with team leads to elevate emerging leaders"
        ],
        examples: [
          "Reviewed individual group member progression every quarter",
          "Suggested appropriate group member for Tech Lead position"
        ]
      },
      {
        summary:
          "Manages interactions and processes between groups, promoting best practices and setting a positive example",
        signals: [
          "Manages team transitions smoothly, respecting team and individual needs",
          "Develops best practices for conflict resolution",
          "Ensures all group members' roles are meeting their career needs"
        ],
        examples: [
          "Completed training on situational leadership",
          "Built a resourcing plan based on company, team, and individual goals",
          "Prevented regretted attrition with intentional, targeted intervention"
        ]
      },
      {
        summary:
          "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
        signals: [
          "Supports and develops senior leaders",
          "Identified leadership training opportunities for senior leadership",
          "Pushes everyone to be as good as they can be, with empathy"
        ],
        examples: [
          "Provided coaching to group leads",
          "Devised curriculum for group leads",
          "Advocated to execs for engineer development resources and programs"
        ]
      }
    ]
  },

  ORG_DESIGN: {
    displayName: "Org design",
    category: "C",
    description:
      "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    milestones: [
      {
        summary:
          "Respects and participates in processes, giving meaningful feedback to help the organization improve",
        signals: [
          "Reflects on meetings that leave them inspired or frustrated",
          "Teaches others about existing processes",
          "Actively participates and makes contributions within organizational processes"
        ],
        examples: [
          "Facilitated effective tactical meeting with empathy",
          "Explained iteration meeting format to a new hire",
          "Provided feedback on iteration meeting"
        ]
      },
      {
        summary:
          "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
        signals: [
          "Defines meeting structure and cadence that meets team needs",
          "Engages in organizational systems thinking",
          "Advocates for improved diversity and inclusion, and proposes ideas to help"
        ],
        examples: [
          "Defined Launch meeting structure for small team",
          "Defined standard channels for inter-team communication"
        ]
      },
      {
        summary: "Develops processes to solve ongoing organizational problems",
        signals: [
          "Creates programs that meaningfully improve organizational diversity",
          "Solves long-standing organizational problems",
          "Reallocates resources to meet organizational needs"
        ],
        examples: [
          "Created 🚒 write-up program to address ongoing quality issues",
          "Defined and/or contributed to engineering.stratasan.com"
        ]
      },
      {
        summary:
          "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
        signals: [
          "Evaluates incentive structures and their effect on execution",
          "Analyzes existing processes for bias and shortfall",
          "Ties abstract concerns to concrete organizational actions or norms"
        ],
        examples: ["???", "???", "???"]
      },
      {
        summary:
          "Leads initiatives to address issues stemming from hidden dynamics and company norms",
        signals: [
          "Builds programs to train leadership in desired skills",
          "Creates new structures that provide unique growth opportunities",
          "Leads planning and communication for reorgs"
        ],
        examples: [
          "???",
          "Directed resources to meaningfully improve diversity at all levels",
          "???"
        ]
      }
    ]
  },

  WELLBEING: {
    displayName: "Wellbeing",
    category: "C",
    description:
      "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    milestones: [
      {
        summary:
          "Uses tools and processes to help ensure colleagues are healthy and happy",
        signals: [
          "Keeps confidences unless legally or morally obliged to do otherwise",
          "Assumes positive intent",
          "Avoids blame and focuses on positive change"
        ],
        examples: [
          "Ensured group members were taking enough vacation",
          "Put themself in another's shoes to understand their perspective",
          "Checked in with colleague showing signs of burnout"
        ]
      },
      {
        summary:
          "Creates a positive, supportive, engaging team environment for group members",
        signals: [
          "Sheds light on other experiences to build empathy and compassion",
          "Validates ongoing work and sustains motivation",
          "Proposes solutions when teams get bogged down or lose momentum"
        ],
        examples: [
          "Coordinated a small celebration for a project launch",
          "Connected tedious data ETL with overall company goals",
          "Noted a team without a recent win and suggested some easy quick wins"
        ]
      },
      {
        summary:
          "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
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
        summary:
          "Advocates for the needs of teams and group members, and proactively works to calm the organization",
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
        summary:
          "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
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
    description:
      "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    milestones: [
      {
        summary:
          "Helps individuals identify blockers and helps them identify next steps for resolution",
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
        summary:
          "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
        signals: [
          "Gathers context outside the immediate problem",
          "Recognizes issues within local environment and suggests change",
          "Works to encourage ownership of actions and responsibilities"
        ],
        examples: [
          "Completed training on decision making",
          "Convinced a group member to solve a problem directly, rather than doing it for them",
          "Gave honest feedback about poor performance, with compassion"
        ]
      },
      {
        summary:
          "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
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
        summary:
          "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
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
        summary:
          "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
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
    description:
      "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    milestones: [
      {
        summary:
          "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
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
        summary:
          "Mentors people proactively, and guides people to realizations rather than providing the answer",
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
        summary:
          "Teaches small groups of colleagues and contributes to Stratasan's shared knowledge base",
        signals: [
          "Avoids siloing information when it can be usefully shared with others",
          "Works to increase the bus factor of systems",
          "Finds tools that work best for a team member's personality"
        ],
        examples: [
          "Gave a brown bag presentation on payments",
          "Wrote customer support documentation on dealing with issues with large service areas in Launch",
          "Wrote Stratasan blog posts"
        ]
      },
      {
        summary:
          "Encourages people to mentor each other, and creates ways for them to do so",
        signals: [
          "Defines an entire curriculum for a discipline",
          "Draws positive attention to well-modeled mentor and teaching behaviours",
          "Creates brown bag series and lines up speakers"
        ],
        examples: [
          "Created and lead Medium's Women in Eng group",
          "Organized an Eng All Hands with an outside speaker",
          "Designed and taught web client guild curriculum"
        ]
      },
      {
        summary:
          "Instills and promotes a culture of learning and development within the team",
        signals: [
          "Sets incentive structures to recognise and reward mentorship",
          "Empowers team members to develop themselves",
          "Role models productive and healthy mentor relationships"
        ],
        examples: [
          "Instituted the professional education budget for engineers",
          "Mentored mentors",
          "Started the eng advisor program and lined up external mentors"
        ]
      }
    ]
  },

  EVANGELISM: {
    displayName: "Evangelism",
    category: "D",
    description:
      "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
    milestones: [
      {
        summary:
          "Represents Medium well externally, and influences individuals positively",
        signals: [
          "Shares personal and organizational successes with their network",
          "Attends Medium-hosted events and talks with guests",
          "Communicates genuine and honest excitement about their work externally"
        ],
        examples: [
          "Shared a Medium product launch post on Facebook",
          "Acted as a guide for a non-friend visitor to the office",
          "Supported PR efforts by giving a quote or having a photo taken"
        ]
      },
      {
        summary:
          "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
        signals: [
          "Takes meaningful action to introduce people to Medium",
          "Joined public Slack group and represented Medium appropriately, and well",
          "Organizes positive small- or medium-sized events that bring people to Medium"
        ],
        examples: [
          "Volunteered as a helper for CODE2040 writing workshop",
          "Organized a short tour of the office by college students",
          "Talked at a Women Who Code event hosted at Medium"
        ]
      },
      {
        summary:
          "Works hard to positively influence large groups of people on their views of Medium",
        signals: [
          "Mentors or participates in a high visibility way in an external organization",
          "Builds fruitful partnerships with external organizations",
          "Writes blog posts about Medium that receive moderate traffic"
        ],
        examples: [
          "Represented Medium on a panel at a conference of industry experts",
          "Established close ties with Creative Commons",
          "Built a durable, long-standing relationship with Code2040"
        ]
      },
      {
        summary:
          "Establishes Medium as an great, innovative company and workplace to the whole industry",
        signals: [
          "Establishes themself as an industry thought leader who attracts talent",
          "Publishes material about Medium's organizational or technical innovations",
          "Leverages significant following to evangelise Medium"
        ],
        examples: [
          "Published a paper on Medium technology in a peer-reviewed journal",
          "Authored joint-press release with EFF on DNT",
          "Published “Why Content Editable Is Terrible” on the Medium engineering blog"
        ]
      },
      {
        summary:
          "Introduces Medium in a positive light to a wider audience outside the industry",
        signals: [
          "Delivers key messages to broad, mainstream audiences",
          "Influences people with large audiences to talk about Medium positively",
          "Drives recognition and adoption of Medium in significant numbers"
        ],
        examples: [
          "Published or interviewed in a mainstream newspaper or website outside tech",
          "Keynoted a conference with international attention",
          "Represented Medium in national televised media"
        ]
      }
    ]
  },

  RECRUITING: {
    displayName: "Recruiting",
    category: "D",
    description:
      "Strengthens Medium's team by bringing in excellent staff members",
    milestones: [
      {
        summary:
          "Brings new candidates into the pipeline and understands how to evaluate candidates at Medium",
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
        summary:
          "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
        signals: [
          "Uses interview rubric to provide clear, objective feedback on candidates",
          "Interviews candidates with empathy and treats them all with equal respect",
          "Researches approaches for sourcing candidates and diversifying hiring"
        ],
        examples: [
          "Added observable evidence for every rating",
          "Started a monthly brunch for candidates to meet Medium employees",
          "Tested a new service for quality and diversity of candidates"
        ]
      },
      {
        summary:
          "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
        signals: [
          "Teaches new interviewers how to interview with empathy",
          "Models great interview technique and feedback when shadowed",
          "Reverse shadows trainees and helps calibrate their feedback"
        ],
        examples: [
          "Wrote new interview question which meets our question quality criteria",
          "Brought candidates into our pipeline proactively, with a high conversion rate",
          "Proposed useful, tangible improvements to the interview process"
        ]
      },
      {
        summary:
          "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
        signals: [
          "Documents subtle cues in interviews that indicate values alignment",
          "Makes hiring decisions, resolving discrepancies between conflicting reports",
          "Top-grades candidates and teases out character traits"
        ],
        examples: [
          "Planned engineering summit on interview process and training",
          "Organized and lead Medium's presence at a recruitment fair",
          "Started CODE2040 internship program"
        ]
      },
      {
        summary:
          "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
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
    description:
      "Builds community internally, gives of themself to the team, and champions and extols company values",
    milestones: [
      {
        summary:
          "Is available and present on current teams, and works to contribute positively to company culture",
        signals: [
          "Participates in team activities and offsites",
          "Treats colleagues and clients with respect",
          "Joins groups or committees outside regular duties"
        ],
        examples: [
          "Joined and actively participated in the web client guild",
          "Wrote entertaining and informative blog post on product management for Stratasan blog"
        ]
      },
      {
        summary:
          "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
        signals: [
          "Makes space for others to participate",
          "Collaborates with other colleagues outside direct responsibilities",
          "Proactively build team culture"
        ],
        examples: [
          "Created onboarding bingo",
          "Brought shy and introverted people into a dominant conversation",
          "Volunteered as note taker for a team"
        ]
      },
      {
        summary:
          "Contributes to improving team relatedness, and helps build a culture of lending support",
        signals: [
          "Pitches in to help other teams hit deadlines, without missing own deadlines",
          "Uses position to raise difficult issues on someone's behalf"
        ],
        examples: [
          "Encourages team members to remember core values during difficult conversations",
          "Started and drove outreach to local campuses to connect with interns, provide professional guidance",
          "Stayed positive and improved team morale during period after layoffs"
        ]
      },
      {
        summary:
          "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
        signals: [
          "Actively participates in user groups, conferences while reflecting company values",
          "Implements concrete programs to signficantly improve team inclusivity",
          "Takes on large amounts of tedious grunt work for the team without being asked"
        ],
        examples: [
          "Devoted large amount of time to helping outside direct responsibilities",
          "Elevated company culture by commending others for positive behavior"
        ]
      },
      {
        summary:
          "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
        signals: [
          "Brings separate teams together to build relatedness",
          "Holds individuals, teams, and leadership accountable to company values",
          "Sets the tone, policy, and goals around maintaining an inclusive company"
        ],
        examples: [
          "Organized offsite for the whole technical team",
          "Devised, delivered and acted on findings from an employment satisfaction survey",
          "Challenged and corrected exclusionary behavior or policies"
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
  { label: "Product Manager Associate", minPoints: 0, maxPoints: 35 },
  { label: "Product Manager", minPoints: 36, maxPoints: 80 },
  { label: "Senior Product Manager", minPoints: 81, maxPoints: 90 },
  { label: "Director of Product Management", minPoints: 91, maxPoints: 150 },
  { label: "Senior Director of Product Management", minPoints: 151, maxPoints: 220},
  { label: "Vice President of Product Management", minPoints: 221, maxPoints: 250 }
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
