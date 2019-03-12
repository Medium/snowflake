const projectManagementTrack = {
  "displayName": "Project Management",
  "category": "B",
  "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
  "milestones": [{
    "summary": "Effectively delivers individual tasks",
    "signals": [
      "Estimates small tasks accurately",
      "Delivers tightly-scoped projects efficiently",
      "Writes effective technical specs outlining approach",
    ],
    "examples": [
      "Wrote the technical spec (TDD/GDD) for a small project",
      "Delivered dashboard widget updates",
      "Delivered customer.io event updates that allowed email marketing to build out a new segment",
    ],
  }, {
    "summary": "Effectively delivers small personal projects",
    "signals": [
      "Performs research and considers alternative approaches",
      "Balances pragmatism and polish appropriately",
      "Defines and hits interim milestones",
    ],
    "examples": [
      "Drove pro/con conversations for StyledComponents and Emotion",
      "Delivered Planner updates in BackBone",
      "Consistently meets sprint commitments",
    ],
  }, {
    "summary": "Effectively delivers projects through a small team",
    "signals": [
      "Delegates tasks to others appropriately",
      "Integrates business needs into project planning",
      "Chooses appropriate project management strategy based on context",
    ],
    "examples": [
      "Ran project retro to assess improvement opportunities",
      "Completed launch checklist unprompted for well controlled rollout",
      "Facilitated project kickoff meeting to get buy-in",
    ],
  }, {
    "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
    "signals": [
      "Finds ways to deliver requested scope faster, and prioritizes backlog",
      "Manages dependencies on other projects and teams",
      "Leverages recognition of repeated project patterns",
    ],
    "examples": [
      "Oversaw technical delivery of Aurora Migration",
      "Managed infrastructure migration to VPC",
      "Involved marketing, legal, and appropriate functions at project start",
    ],
  }, {
    "summary": "Manages major company pushes delivered by multiple teams",
    "signals": [
      "Considers external constraints and business objectives when planning",
      "Leads teams of teams, and coordinates effective cross- functional collaboration",
      "Owns a key company metric",
    ],
    "examples": [
      "Managed technical migration to SOA",
      "Aligns engineering OKRs to company milestones and drives those OKRs through dedicated platform and services teams",
      "Delivered multi-month engineering project on time",
    ],
  }],
}

const communicationTrack = {
  "displayName": "Communication",
  "category": "B",
  "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
  "milestones": [{
    "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
    "signals": [
      "Communicates project status clearly and effectively",
      "Collaborates with others with empathy",
      "Asks for help at the appropriate juncture",
    ],
    "examples": [
      "Reports required updates to PMs prior to DemoDays",
      "Updated project status changes in Trello/Jira promptly",
      "Gave thoughtful Pull Request comments",
    ],
  }, {
    "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
    "signals": [
      "Practises active listening and suspension of attention",
      "Received and integrated radical candor positively",
      "Ensures stakeholders are aware of current blockers",
    ],
    "examples": [
      "Created cross-team Slack channel for a small project",
      "Chooses the appropriate tools for accurate and timely communication",
      "Spoke to domain experts before writing TDD/GDD",
    ],
  }, {
    "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
    "signals": [
      "Resolves communication difficulties between others",
      "Anticipates and shares schedule deviations in plenty of time",
      "Manages project stakeholder expectations effectively",
    ],
    "examples": [
      "Directed team response effectively during outages",
      "Gave a substantial Developer Meetup presentation on React",
      "Gave notice of upcoming related work in the Developer SoS",
    ],
  }, {
    "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
    "signals": [
      "Communicates project risk and tradeoffs skillfully and with nuance",
      "Contextualizes and clarifies ambiguous direction and strategy for others",
      "Negotiates resourcing compromises with other teams",
    ],
    "examples": [
      "Lead off-site workshop on interviewing",
      "Wrote Prodigy's growth framework and rationale",
      "Aligned the entire organization around a change initiative",
    ],
  }, {
    "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
    "signals": [
      "Defines processes for clear communication for the entire team",
      "Shares the right amount of information with the right people, at the right time",
      "Develops and delivers plans to execs, the board, and outside investors",
    ],
    "examples": [
      "Organized half year check-in company offsite",
      "Created a communication plan for a large organizational change",
      "Presented to the board about key company metrics and projects",
    ],
  }],
}

const craftTrack = {
  "displayName": "Craft",
  "category": "B",
  "description": "Embodies and promotes practices to ensure excellent quality products and services",
  "milestones": [{
    "summary": "Delivers consistently good quality work",
    "signals": [
      "Tests new code thoroughly, both locally, and in production once shipped",
      "Writes tests for every new feature and bug fix",
      "Writes clear comments and documentation",
    ],
    "examples": [
      "Caught a bug in the job queue before it went live",
      "Landed non-trivial PR with no caretaker comments",
      "Wrote hermetic tests for the happy and sad cases",
    ],
  }, {
    "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
    "signals": [
      "Refactors existing code to make it more testable",
      "Adds tests for uncovered areas",
      "Deletes unnecessary code and deprecates proactively when safe to do so",
    ],
    "examples": [
      "Requested tests for a PR when acting as reviewer",
      "Reduced the number of brittle tests",
      "Fixed a TODO for someone else in the codebase",
    ],
  }, {
    "summary": "Improves others' ability to deliver great quality work",
    "signals": [
      "Implements systems that enable better testing",
      "Gives thoughtful code reviews as a domain expert",
      "Adds tooling to improve code quality",
    ],
    "examples": [
      "Improved GraphQL to run the same volume of tests faster",
      "Simplified hermetic test data modification",
      "Integrated ESLint with agreed upon rules",
    ],
  }, {
    "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
    "signals": [
      "Builds systems so as to eliminate entire classes of programmer error",
      "Focuses the team on quality with regular reminders",
      "Coordinates Watch priorities and projects",
    ],
    "examples": [
      "Added code coverage reporting and build failures to DataDog",
      "Iterated repeatedly to develop Prodigy-Hydra shared component methodologies",
      "Defined and oversaw plan for resolving NPM token leak",
    ],
  }, {
    "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
    "signals": [
      "Defines policies for the engineering org that encourage quality work",
      "Identifies and eliminates single points of failure throughout the organization",
      "Secures time and resources from execs to support great quality",
    ],
    "examples": [
      "Negotiated resources for Sprint 0 week with exec team",
      "Instituted and ensured success of a 20% time policy",
      "Negotiated resources for Sprint 0 week with exec team",
    ],
  }],
}

const initiativeTrack = {
  "displayName": "Initiative",
  "category": "B",
  "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
  "milestones": [{
    "summary": "Identifies opportunities for organizational change or product improvements",
    "signals": [
      "Writes posts and documentation about improvement opportunities",
      "Raises meaningful tensions in tactical meetings",
      "Asks leadership team probing questions at FAM",
    ],
    "examples": [
      "Wrote about problems with developer onboarding",
      "Brings up meaningful blockers in agile ceremonies",
      "Reported a site issue in Jira",
    ],
  }, {
    "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
    "signals": [
      "Picks bugs off the backlog proactively when blocked elsewhere",
      "Makes design quality improvements unprompted",
      "Takes on trust and safety tasks proactively when blocked elsewhere",
    ],
    "examples": [
      "Advocated on own behalf for a change in role",
      "Introduced better testing tools",
      "Audited web client performance in Chrome and proposed fixes",
    ],
  }, {
    "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
    "signals": [
      "Demonstrates concepts proactively with prototypes",
      "Fixes complicated bugs outside of regular domain",
      "Takes ownership of systems that nobody owns or wants",
    ],
    "examples": [
      "Defined style guide to resolve style arguments",
      "Proposed and implemented a migration towards Express.js",
      "Actively supports legacy customer support tooling",
    ],
  }, {
    "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
    "signals": [
      "Champions and pioneers new technologies to solve new classes of problem",
      "Exemplifies grit and determination in the face of persistent obstacles",
      "Instigates major new features, services, or architectures",
    ],
    "examples": [
      "Introduced and lead TypeScript migration for game",
      "Implemented and secured support for native login",
      "Build the answer pipeline",
    ],
  }, {
    "summary": "Effects change that has a substantial positive impact on the whole company",
    "signals": [
      "Creates a new function to solve systemic issues",
      "Galvanizes the entire company and garners buy in for a new strategy",
      "Changes complex organizational processes",
    ],
    "examples": [
      "Migrated the organization from Holacracy",
      "Leads tribe restructuring efforts ",
      "Convinced leadership and engineering org to move to The Growth Framework",
    ],
  }],
}

export default {
  "5": projectManagementTrack,
  "6": communicationTrack,
  "7": craftTrack,
  "8": initiativeTrack,
}
