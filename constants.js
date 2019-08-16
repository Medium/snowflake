// @flow
import * as d3 from 'd3'

export type TrackId = 'CHAPTER_ONE' | 'CHAPTER_TWO' | 'CHAPTER_THREE' | 'CHAPTER_FOUR' |
  'PLANNING' | 'COLLABORATION' | 'CLIENT_VALUE' |
  'INITIATIVE' | 'COMPLEXITY' | 'MATURITY' |
  'LEARNING' | 'INFLUENCE' | 'MENTORSHIP'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'CHAPTER_ONE': Milestone,
  'CHAPTER_TWO': Milestone,
  'CHAPTER_THREE': Milestone,
  'CHAPTER_FOUR': Milestone,
  'PLANNING': Milestone,
  'COLLABORATION': Milestone,
  'CLIENT_VALUE': Milestone,
  'INITIATIVE': Milestone,
  'MATURITY': Milestone,
  'COMPLEXITY': Milestone,
  'MATURITY': Milestone,
  'LEARNING': Milestone,
  'INFLUENCE': Milestone,
  'MENTORSHIP': Milestone,
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
  'CHAPTER_ONE': Track,
  'CHAPTER_TWO': Track,
  'CHAPTER_THREE': Track,
  'CHAPTER_FOUR': Track,
  'PLANNING': Track,
  'COLLABORATION': Track,
  'CLIENT_VALUE': Track,
  'INITIATIVE': Track,
  'COMPLEXITY': Track,
  'MATURITY': Track,
  'LEARNING': Track,
  'INFLUENCE': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
|}

// @TODO: Array?
export const tracks: Tracks = {
  "CHAPTER_ONE": {"category": "A"},
  "CHAPTER_TWO": {"category": "A"},
  "CHAPTER_THREE": {"category": "A"},
  "CHAPTER_FOUR": {"category": "A"},
  "PLANNING":{
    "milestone": "PLANNING",
    "cohort": "DEFAULT",
    "category": "B",
    "displayName": "Plan and Coordination",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [
        {
            "summary": "Effectively delivers individual tasks",
            "signals": [
                "Commits to and completes tasks within expected time frame, holding themselves accountable",
                "Delivers tightly-scoped projects efficiently",
                "Is learning how to break down tasks and make accurate task estimation",
                "Writes effective technical specs outlining approach"
            ],
            "examples": []
        },
        {
            "summary": "Effectively delivers small projects",
            "signals": [
                "Mastering ability to break down tasks, plan, estimate, and cut scope to ship on time",
                "Performs research and considers alternative approaches",
                "Defines and hits interim milestones",
                "Prioritizes in alignment with company goals",
                "Consistently and accurately estimates the time a given task will take"
            ],
            "examples": []
        },
        {
            "summary": "Effectively delivers projects through a small team",
            "signals": [
                "Can smoothly and successfully execute an initiative, set milestones for a team, and proactively ensure all core goals are hit, even if plans need to be changed to do so",
                "Integrates business needs into project planning",
                "Chooses appropriate project management strategy based on context",
                "Demonstrates the ability to prioritize the most important work for the company\/team",
                "Delegates tasks to others appropriately",
                "When working on a series of related projects or an initiative, is constantly aware of the bigger picture and what they're going to be delivering in the next few projects"
            ],
            "examples": []
        },
        {
            "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
            "signals": [
                "Can successfully plan and execute projects involving multiple stakeholders and complex requirements, prioritizing strategically",
                "Manages dependencies on other projects and teams",
                "Leverages recognition of repeated project patterns",
                "Able to reduce complexity and prioritize the most important work for the company",
                "Helps define roadmaps and set vision for long-term projects",
                "Often \"sees around corners\" and addresses issues before they become critical"
            ],
            "examples": []
        },
        {
            "summary": "Manages major company pushes delivered by multiple teams",
            "signals": [
                "Able to plan and execute large, complex projects with interdependencies across teams and systems",
                "Leads teams of teams, and coordinates effective cross- functional collaboration",
                "Considers external constraints and business objectives when planning",
                "Can successfully manage (and adjust\/update plans for) large efforts that start out with unclear or competing goals",
                "Creates plans that define the direction of the whole team moving forward",
                "Demonstrates the ability to deal with any project or initiative that is critical to the future of the company"
            ],
            "examples": []
        }
    ]
  },
  "COLLABORATION":{
    "milestone": "COLLABORATION",
    "cohort": "DEFAULT",
    "category": "B",
    "displayName": "Communication & Collaboration",
    "description": "Focus on teamwork, communication skills, asking for and giving feedback, collaboration, and documentation",
    "milestones": [
        {
            "summary": "Communicates and Collaborates effectively to close stakeholders when called upon, and incorporates constructive feedback",
            "signals": [
                "Communicates project status clearly and effectively",
                "Learning to work collaboratively on a team and communicate in meetings",
                "Proactively asks questions and reaches out for help to get unblocked",
                "Voices concerns or need for clarification to their project teams and, if necessary, chapter leads or POD members",
                "Developing ability to communicate complicated concepts simply and successfully w\/ a non-technical audience",
                "Accepts feedback graciously and learns from experience"
            ],
            "examples": []
        },
        {
            "summary": "Communicates and Collaborates with the wider team appropriately, focusing on timeliness and good quality information",
            "signals": [
                "Communicates clearly at team and client-facing meetings, escalating blockers quickly, clarifying requirements and sharing assumption",
                "Collaborates professionally with teammates and peers",
                "Adapts their message for a diverse technical audience, choosing appropriate tools and approach for accurate and timely communication",
                "Seeks feedback to improve and receives it well. Gives timely, helpful feedback to peers",
                "Makes effective presentations to smaller audiences",
                "Proactively adds documentation to help others"
            ],
            "examples": []
        },
        {
            "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
            "signals": [
                "Communicates technical issues and decisions clearly and proactively to a cross-functional audience, sharing bad news quickly as well",
                "Builds relationships cross-functionally, with project team, chapter members and clients",
                "Engages in productive dialog even when there are conflicting views, both inside and outside team. Seeks to understand other points of view",
                "Actively seeks feedback to improve and receives it well. Gives timely, helpful feedback to peers",
                "Mastering ability to communicate complicated concepts simply and successfully w\/ a non-technical audience. Makes effective presentations to larger audiences"
            ],
            "examples": []
        },
        {
            "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
            "signals": [
                "Communicates complex concepts, issues, and easily makes compelling presentations to sophisticated audiences",
                "Works with key stakeholders effectively to solve problems and make decisions",
                "Demonstrates the ability to always share status with all stakeholders, and proactively remedy communication issue",
                "Holds others and themselves accountable for their commitments and results by recieving and giving feedback",
                "Spurs and facilitates meaningful discussion around complex issues",
                "Writes insightful documentation"
            ],
            "examples": []
        },
        {
            "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
            "signals": [
                "Comfortably communicates and presents complex issues to diverse audiences inside and outside the company",
                "Coordinates communication among teams and stakeholders, including the right people at the right times",
                "Relied upon as one of the best communicators of complicated technical subjects, tradeoffs, and decisions",
                "Holds others and themselves accountable for their commitments and results by providing thoughtful feedback",
                "Communicates company-level objectives clearly and how they relate to initiatives and projects",
                "Proactively identifies and remedies communication gaps and issues"
            ],
            "examples": []
        }
    ]
  },
  "CLIENT_VALUE":{
    "milestone": "CLIENT_VALUE",
    "cohort": "DEFAULT",
    "category": "B",
    "displayName": "Client Value",
    "description": "Focus on delivering repeatable value to our clients by ensuring excellent quality products and services in our Value Stream Delivery",
    "milestones": [
        {
            "summary": "Delivers consistently good quality work",
            "signals": [
                "Delivers consistently good outcomes within project scope and following quality standards",
                "Understands how the tasks impact and fit within the broader scope and objectives of the final product or service",
                "Shows a willingness to do what it takes to achieve the desired results",
                "Writes clear comments and documentation"
            ],
            "examples": []
        },
        {
            "summary": "Increases the robustness and reliability of work, and devotes time to polishing products and systems",
            "signals": [
                "Works efficiently and puts in the time and effort necessary to deliver great outcomes",
                "Realizes when progress toward desired results is stalling and takes action to get back on track",
                "Accepts difficult tasks and gets right to work",
                "Devotes time to find the most effective ways to meet the commitments"
            ],
            "examples": []
        },
        {
            "summary": "Improves others' ability to deliver great quality work",
            "signals": [
                "Guides others in defining their assignments as results to accomplish",
                "Gives thoughtful feedback as a domain expert",
                "Helps others to orient toward achieving results, supporting them when facing problems and issues",
                "Holds others accountable for their commitments and results and a succesful client release",
                "Required for eligibility to be a Project Owner",
                "Required eligibility to be a Consultant"
            ],
            "examples": []
        },
        {
            "summary": "Advocates for and models great quality with proactive actions ensuring project and team success",
            "signals": [
                "Helps others to maximize their potential through mentoring and coaching",
                "Focuses on high-level client relationship and satisfaction",
                "Anticipates unusual issues and problems, taking steps to minimize their impacts on results",
                "Holds institutional knowledge",
                "Required eligibility to be a Project Advocate",
                "Required eligibility to be a Service Line Lead"
            ],
            "examples": []
        },
        {
            "summary": "Enables and encourages the entire organization to deliver client value as a central part of the development process",
            "signals": [
                "Defines policies for the organization that encourage quality work and maximize client value",
                "Identifies and eliminates single points of failure throughout the organization",
                "Secures time and resources from execs to support great quality",
                "Connects clients to strategic and technical solutions to solve complex business challenges"
            ],
            "examples": []
        }
    ]
  },
  "INITIATIVE":{
    "milestone": "INITIATIVE",
    "cohort": "DEFAULT",
    "category": "C",
    "displayName": "Initiative",
    "description": "Challenges the status quo and takes ownership and initiative outside of mandated work",
    "milestones": [
        {
            "summary": "Identifies opportunities for organizational change and\/or product\/service improvements",
            "signals": [
                "Is becoming comfortable owning small tasks independently, but typically relies on more experienced teammates when tackling larger issues",
                "Typically relies on teammates and senior people for setting project goals and breaking down larger projects into discrete tasks",
                "Asks leadership team probing questions"
            ],
            "examples": []
        },
        {
            "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
            "signals": [
                "Regularly leads smaller projects or tasks, but relies on experienced teammates when working on major project investments",
                "Often leans on others to help problem-solve project ambiguity",
                "Takes on safety tasks proactively when blocked elsewhere",
                "Often relies on others to help cut scope when necessary",
                "Consistently delivers on reasonably well-defined projects",
                "Is becoming more comfortable to define project goals for more ambiguous projects"
            ],
            "examples": []
        },
        {
            "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
            "signals": [
                "Regularly leads multiple and large projects or initiatives",
                "Takes ownership of tasks that nobody owns or wants",
                "Seeks out others involved in a situation to learn their perspectives",
                "Leaves things better than when found them",
                "Comfortable with ambiguity; relied on to remove it when necessary",
                "Demonstrates the ability to handle significant major tasks from definition through execution with the successful outcome never seriously in doubt"
            ],
            "examples": []
        },
        {
            "summary": "Effects change that has a substantial positive impact on the organization or a major product\/service impact",
            "signals": [
                "Develops and Tests new ways to solve systemic issues",
                "Exemplifies grit and determination in the face of persistent obstacles",
                "Instigates major new features, services, or architectures",
                "Seeks creative and innovative ways to improve and develop what they are doing",
                "Can effectively cope with change"
            ],
            "examples": []
        },
        {
            "summary": "Effects change that has a substantial positive impact on the whole company",
            "signals": [
                "Champions and pioneers new technologies and ideas to solve new classes of problem",
                "Galvanizes the entire company and garners buy in for a new strategy",
                "Changes complex organizational processes",
                "Embraces ambiguity and a Growth mindset"
            ],
            "examples": []
        }
    ]
  },
  "COMPLEXITY":{
    "milestone": "COMPLEXITY",
    "cohort": "DEFAULT",
    "category": "C",
    "displayName": "Maturity",
    "description": "Strenghtens Palantir's values to create and collaborate in open, diverse, and inclusive environments",
    "milestones": [
        {
            "summary": "Is available and present on current teams, and works to contribute positively to company culture",
            "signals": [
                "Is learning how to integrate complicated information to identify strategies and solutions with the assistance of teammates and senior people",
                "Breaks down complicated problems or concepts into clear and manageable components",
                "Is able to effectively deal and understand views opposing their own views and is open to criticism and learning"
            ],
            "examples": []
        },
        {
            "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
            "signals": [
                "Quickly integrates complicated information to identify strategies and solutions with the assitance of teammates and senior people",
                "Demonstrates keen insights into situtations",
                "Assimilates large amounts of information",
                "Responds flexibly and strategically to ongoing change"
            ],
            "examples": []
        },
        {
            "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
            "signals": [
                "Identifies and deals with complicated situations to provide the best solutions",
                "Demonstrates a sense of agency",
                "Adopts a proactive approach instead of a reactive one",
                "Demonstrates humility and patience",
                "Demonstrates critical inquiry",
                "Promotes exploration as a response to uncertainty"
            ],
            "examples": []
        },
        {
            "summary": "Creates an environment that provides people with autonomy, master, and purpose, and lifts everyone up",
            "signals": [
                "Seeks to cultivate innovation in the face of uncertainty, both internally and externally",
                "Offers new perspectives to overcome complexity constraints in organizations",
                "Selects systems thinking approaches to fit with the level of complexity and the nature of the environment",
                "Focuses on the core message or desired result of a complex plan or idea",
                "Deals with change in an open and collaborative way to facilitate a beneficial resolution",
                "Simplifies complexities by pulling together ideas, issues, and observations into a single concept or a clear presentation"
            ],
            "examples": []
        },
        {
            "summary": "Lives the company values, guards healthy work environment, and defines policies that support relatedness between teams",
            "signals": [
                "Builds the capacity in other people to cope with complexity",
                "Leads change strategies to facilitate human resource management",
                "Has an holistic vision -- is driven by an holistic vision of the project outcomes",
                "Creates an organizational architecture that facilitates a positive work environment",
                "Helps others to move through the change curve, from resistors to adopters",
                "Has high energy - gives energy to those around them"
            ],
            "examples": []
        }
    ]
  },
  "MATURITY":{
    "milestone": "MATURITY",
    "cohort": "DEFAULT",
    "category": "C",
    "displayName": "Compexity",
    "description": "Ability to deal with volatility, uncertainty, ambiguity, and an increasing rate of change in the Complex domain",
    "milestones": [
        {
            "summary": "Identifies complicated situations with guidance, following best practices",
            "signals": [
                "Learns and exhibits Palantir core values: collaboration, bringing out the best in each other, curiosity, thinking ahead, and accessibility.",
                "Treats colleagues and clients with respect",
                "Objectively evaluates whether they've met their goals",
                "Takes responsibility of own words and actions"
            ],
            "examples": []
        },
        {
            "summary": "Integrates complicated ideas and approaches with guidance, following best practices",
            "signals": [
                "Brings your best self to your work, and makes space for others to do so as well",
                "Trusts teammates, assumes good intent, and able to disagree and commit",
                "Finds ways to ramp up and engage new hires quickly",
                "Able to deliver their work despite inevitable distractions",
                "Exhibits a growth mindset with regard to feedback"
            ],
            "examples": []
        },
        {
            "summary": "Handles complicated situations and focus on learning and creativity in the organization",
            "signals": [
                "Self-aware of strengths and weaknesses",
                "Embraces big challenges as opportunities for growth and learning",
                "Uses position to raise difficult issues on someone's behalf",
                "Allows everyone the opportunity to contribute, regardless of their title or how many years they've been with the company",
                "Able to change direction quickly based on shifting company and project needs"
            ],
            "examples": []
        },
        {
            "summary": "Identifies and deals with complex situations by fostering innovation",
            "signals": [
                "Goes above and beyond, serving the team without complaint",
                "Implements concrete action to signficantly improve team inclusivity",
                "Builds consensus for decisions",
                "Devotes large amount of time to helping outside direct responsibilities",
                "Helps individuals maintain resilience in periods of change"
            ],
            "examples": []
        },
        {
            "summary": "Helps and supports others to deal with complexity by adapating and learning continuously",
            "signals": [
                "Demonstrates the ability to de-escalate conflicts and build consensus between team members about technical matters",
                "Holds individuals, teams, and leadership accountable to Palantir's values",
                "Sets the tone, policy, and goals around maintaining an open, diverse and inclusive company",
                "Models and engages others around developing maturity"
            ],
            "examples": []
        }
    ]
  },
  "LEARNING":{
    "milestone": "LEARNING",
    "cohort": "DEFAULT",
    "category": "D",
    "displayName": "Learning & Career Development",
    "description": "Provides strategic support to individuals to help them build the career they want",
    "milestones": [
        {
            "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
            "signals": [
                "Discusses career options and areas of interest informally",
                "Shares opportunities for improvements and recognizes achievements",
                "Collects and deliveres feedback"
            ],
            "examples": []
        },
        {
            "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
            "signals": [
                "Ensures a group member has an appropriate role on their team",
                "Offers effective career advice to group members, without being prescriptive",
                "Creates space for people to talk through challenges",
                "Provides help on how to have difficult conversations"
            ],
            "examples": []
        },
        {
            "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
            "signals": [
                "Discusses career paths, and creates plans for personal and professional growth",
                "Advocates to align people with appropriate roles within organization",
                "Works with POD leads to elevate emerging leaders",
                "May participate in the hiring process meeting with candidates and offering thoughts to the chapter lead",
                "Promotes and exhibits psychological safety",
                "Required elegibility to be a Chapter Peer POD member"
            ],
            "examples": []
        },
        {
            "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
            "signals": [
                "Promotes and exhibits psychological safety, facilitation and collaboration",
                "Ensures all group members' roles are meeting their career needs",
                "Initiates the hiring process once approval is given for a new hire",
                "Helps the team plan and implement discipline-related learning activities",
                "Required elegibility to be a Chapter Lead"
            ],
            "examples": []
        },
        {
            "summary": "Supports the development of a signficant part of the management chapter, and widely viewed as an advisor",
            "signals": [
                "Works with others on their individual goals to understand how those goals align both with project work and Palantir service lines",
                "Identifies leadership training opportunities for senior leadership",
                "Pushes everyone to be as good as they can be, with empathy",
                "Provides coaching to group leads",
                "Supports and develops senior leaders",
                "Serves as an advisor to the CEOs and other key company leaders"
            ],
            "examples": []
        }
    ]
  },
  "MENTORSHIP":{
    "milestone": "MENTORSHIP",
    "cohort": "DEFAULT",
    "category": "D",
    "displayName": "Mentorship",
    "description": "Provides support to others, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [
        {
            "summary": "Receives support from others, assists new hires, and conveys institutional knowledge",
            "signals": [
                "Asks for support and advice",
                "Open to listen and receive feedback",
                "Act as an onboarding buddy",
                "Finds ways to ramp up and engage new team members"
            ],
            "examples": []
        },
        {
            "summary": "Informally mentors individuals in an ad-hoc way and contributes to Palantir's knowledge base",
            "signals": [
                "Takes time to understand and explain concepts and best practices",
                "Makes themself available for informal support and advice",
                "Provides sound advice when asked",
                "Offers unprompted feedback to help growth, with empathy",
                "Avoids siloing information when it can be usefully shared with others"
            ],
            "examples": []
        },
        {
            "summary": "Teaches small groups of people and guides people to realizations rather than providing the answer",
            "signals": [
                "Asks questions to illuminate concepts, rather than stating them",
                "Uses lessons learned to guide individuals and teams",
                "Finds tools that work best for a team member's personality",
                "Brings resources, critical readings, opportunities, or experiences to the attention of others",
                "Act as sounding board for peers and more junior members"
            ],
            "examples": []
        },
        {
            "summary": "Actively mentors people by providing knowledge, advice, and resources",
            "signals": [
                "Defines an entire curriculum for a discipline",
                "Draws positive attention to well-modeled mentor and teaching behaviours",
                "Provides discipline support",
                "Exhibits enthusiasm in sharing knowledge and expertise",
                "Demonstrates a positive attitude and acts as a positive role mode",
                "Helps individuals to find new and challenging opportunities within the organization"
            ],
            "examples": []
        },
        {
            "summary": "Instills and promotes a culture of learning and development within the entire team",
            "signals": [
                "Sets incentive structures to recognize and reward mentorship",
                "Empowers team members to develop themselves",
                "Role models productive and healthy mentor relationships",
                "Open to experimenting and learning practices that are new to the field",
                "Helps individuals to move out their comfort zone"
            ],
            "examples": []
        }
    ]
  },
  "INFLUENCE":{
    "milestone": "INFLUENCE",
    "cohort": "DEFAULT",
    "category": "D",
    "displayName": "Influence",
    "description": "Impacts and promotes Palantir's culture and values positively through leadership and representation of our brand",
    "milestones": [
        {
            "summary": "Represents Palantir well internally and externally, and influences individuals positively",
            "signals": [
                "Has project\/team-level impact",
                "Shares personal and organizational successes with their network",
                "Communicates genuine and honest excitement about their work externally",
                "Represents their team well to others in the company"
            ],
            "examples": []
        },
        {
            "summary": "Represents Palantir well internally and externally, and takes simple actions that positively influence groups of people",
            "signals": [
                "Takes meaningful action to introduce people to Palantir",
                "Represents Palantir appropriately, and well aligned with our core values",
                "Finds ways to help teammates achieve their goals. Inspires teamwork",
                "Shares their experience and expertise to help others grow",
                "Listens to everyone's opinion, and encourages people to speak up"
            ],
            "examples": []
        },
        {
            "summary": "Works hard to positively influence large groups of people",
            "signals": [
                "Mentors or participates in a high visibility way in an external organization",
                "Builds fruitful partnerships with clients",
                "Convinces others about technical tradeoffs and decisions",
                "Identifies and advocates for foundational work and practice improvements in their discipline",
                "Starting to broaden impact. Considers effects of their work on other teams, as well as identifying and helping to resolve problems facing team",
                "Builds network of influence to support project otucomes"
            ],
            "examples": []
        },
        {
            "summary": "Establishes Palantir as an agile, innovative company and workplace to the whole industry",
            "signals": [
                "Establishes themself as an industry thought leader who attracts talent",
                "Educates others about the work of the team",
                "Leads initiatives across disciplines, even outside their core expertise. Coordinates large and complex projects, including with outside partners",
                "Contributes to the foundational good of their discipline, defining patterns",
                "Effectively considers effects of their work on other teams, as well as identifying and helping to resolve problems facing team"
            ],
            "examples": []
        },
        {
            "summary": "Serve as a strategic advisor to have positive impact in the industry",
            "signals": [
                "Delivers key messages to broad, mainstream audiences",
                "Influences people with large audiences to talk about Palantir positively",
                "Has high impact on company's trajectory",
                "Drives foundational work benefitting their discipline and entire organization",
                "Serves as a strategic advisor to the CEOs and other key company leaders and be a positive and influential leader across the entire organization"
            ],
            "examples": []
        }
    ]
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
  .range(['#9fc855', '#11a9a1', '#fb6500', '#a7d1bc'])

export const cohorts = [
  {key: 'MANAGEMENT', label: 'Management'},
  {key: 'ENGINEERING', label: 'Engineering'},
  {key: 'FRONTEND', label: 'Front End Development'},
  {key: 'PM', label: 'Project Management'},
  {key: 'UX', label: 'User Experience Design'},
  {key: 'UI', label: 'User Interface Design'},
]
/* Get the title data */
export const titles = [{"label":"Engineer I","minPoints":"0","maxPoints":"16","cohort":"Engineering"},{"label":"Engineer II","minPoints":"17","maxPoints":"35","cohort":"Engineering"},{"label":"Senior Engineer","minPoints":"36","maxPoints":"57","cohort":"Engineering"},{"label":"Group Lead","minPoints":"36","maxPoints":"57","cohort":"Engineering"},{"label":"Staff Engineer","minPoints":"58","maxPoints":"89","cohort":"Engineering"},{"label":"Senior Group Lead","minPoints":"58","maxPoints":"89","cohort":"Engineering"},{"label":"Principal Engineer","minPoints":"90","maxPoints":"900","cohort":"Engineering"},{"label":"Director of Engineering","minPoints":"90","maxPoints":"900","cohort":"Engineering"},{"label":"Manager I","minPoints":"0","maxPoints":"16","cohort":"Management"},{"label":"Manager II","minPoints":"17","maxPoints":"35","cohort":"Management"},{"label":"Senior Manager","minPoints":"36","maxPoints":"57","cohort":"Management"},{"label":"Group Lead","minPoints":"36","maxPoints":"57","cohort":"Management"},{"label":"Staff Manager","minPoints":"58","maxPoints":"89","cohort":"Management"},{"label":"Senior Manager","minPoints":"58","maxPoints":"89","cohort":"Management"},{"label":"Principal Manager","minPoints":"90","maxPoints":"900","cohort":"Management"},{"label":"Director of Management","minPoints":"90","maxPoints":"900","cohort":"Management"},{"label":"Front End Developer I","minPoints":"0","maxPoints":"16","cohort":"Front End Development"},{"label":"Front End Developer II","minPoints":"17","maxPoints":"35","cohort":"Front End Development"},{"label":"Senior Front End Developer","minPoints":"36","maxPoints":"57","cohort":"Front End Development"},{"label":"Group Lead","minPoints":"36","maxPoints":"57","cohort":"Front End Development"},{"label":"Staff Front End Developer","minPoints":"58","maxPoints":"89","cohort":"Front End Development"},{"label":"Senior Front End Developer","minPoints":"58","maxPoints":"89","cohort":"Front End Development"},{"label":"Principal Front End Developer","minPoints":"90","maxPoints":"900","cohort":"Front End Development"},{"label":"Director of Front End Development","minPoints":"90","maxPoints":"900","cohort":"Front End Development"},{"label":"Strategist I","minPoints":"0","maxPoints":"16","cohort":"User Experience Design"},{"label":"Strategist II","minPoints":"17","maxPoints":"35","cohort":"User Experience Design"},{"label":"Senior Strategist","minPoints":"36","maxPoints":"57","cohort":"User Experience Design"},{"label":"Group Lead","minPoints":"36","maxPoints":"57","cohort":"User Experience Design"},{"label":"Staff Strategist","minPoints":"58","maxPoints":"89","cohort":"User Experience Design"},{"label":"Senior Strategist","minPoints":"58","maxPoints":"89","cohort":"User Experience Design"},{"label":"Principal Strategist","minPoints":"90","maxPoints":"900","cohort":"User Experience Design"},{"label":"Director of User Experience Design","minPoints":"90","maxPoints":"900","cohort":"User Experience Design"},{"label":"Designer I","minPoints":"0","maxPoints":"16","cohort":"User Interface Design"},{"label":"Designer II","minPoints":"17","maxPoints":"35","cohort":"User Interface Design"},{"label":"Senior Designer","minPoints":"36","maxPoints":"57","cohort":"User Interface Design"},{"label":"Group Lead","minPoints":"36","maxPoints":"57","cohort":"User Interface Design"},{"label":"Staff Designer","minPoints":"58","maxPoints":"89","cohort":"User Interface Design"},{"label":"Senior Designer","minPoints":"58","maxPoints":"89","cohort":"User Interface Design"},{"label":"Principal Designer","minPoints":"90","maxPoints":"900","cohort":"User Interface Design"},{"label":"Director of User Interface Design","minPoints":"90","maxPoints":"900","cohort":"User Interface Design"},{"label":"Project Manager I","minPoints":"0","maxPoints":"16","cohort":"Project Management"},{"label":"Project Manager II","minPoints":"17","maxPoints":"35","cohort":"Project Management"},{"label":"Senior Project Manager","minPoints":"36","maxPoints":"57","cohort":"Project Management"},{"label":"Group Lead","minPoints":"36","maxPoints":"57","cohort":"Project Management"},{"label":"Staff Project Manager","minPoints":"58","maxPoints":"89","cohort":"Project Management"},{"label":"Senior Project Manager","minPoints":"58","maxPoints":"89","cohort":"Project Management"},{"label":"Principal Project Manager","minPoints":"90","maxPoints":"900","cohort":"Project Management"},{"label":"Director of Project Management","minPoints":"90","maxPoints":"900","cohort":"Project Management"}]

export const eligibleTitles = (milestoneMap: MilestoneMap, cohort: string): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)
  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints)
                             && (title.cohort === cohort))
    .map(title => title.label)
}

export const trackMap = (trackList: object[], cohort: string): object[] => {
  switch (cohort) {
    case 'Management':
      return defaultTracks(trackList)
    case 'Engineering':
      return engineeringTracks(trackList)
    case 'Front End Development':
      return frontendTracks(trackList)
    case 'User Experience Design':
      return uxTracks(trackList)
    case 'User Interface Design':
      return uiTracks(trackList)
    case 'Project Management':
      return pmTracks(trackList)

    default:
      return defaultTracks(trackList)
  }
  return trackList
}

export const defaultTracks = (trackList: object[]): object[] => {
  trackList["CHAPTER_ONE"] = {
      "milestone": "CHAPTER_ONE",
      "cohort": "MANAGEMENT",
      "category": "A",
      "displayName": "Servant Leadership",
      "description": "Comprehends the capacity to engage with stakeholders both internally and externally, and to develop strong interpersonal relationships with teams and clients to unlock their potential",
      "milestones": [
          {
              "summary": "Helps individuals to get unblocked creating a supporting and engaging environment",
              "signals": [
                  "Demonstrates an understanding of individuals' roles, goals and interests",
                  "Demonstrates concern for the well-being of people",
                  "Actively listens",
                  "Treats people with respect"
              ],
              "examples": []
          },
          {
              "summary": "Manages expectations across teams and focus on building long-term relationships",
              "signals": [
                  "Uses an understanding of the organization's processes, systems and policies to engage with people",
                  "Assumes positive intent of others, approaching every interaction with kindness and good humor",
                  "Empathetically listens",
                  "Communicates difficult or negative messages in an honest, accurate, and respectful manner"
              ],
              "examples": []
          },
          {
              "summary": "Manages expectations supporting individuals and clients to perform at their highest capabilities",
              "signals": [
                  "Helps people develop and perform as highly as possible",
                  "Uses awareness and understanding of the organization's culture to implement change initiatives",
                  "Is able to deeply understand and empathise with others",
                  "Delivers persuasive and compelling messages"
              ],
              "examples": []
          },
          {
              "summary": "Advocates for people's needs, interests and goals and proactively works to support and enhance growth",
              "signals": [
                  "Always looks to enhance the development of their team members in ways that unlock potential, creativity and sense of purpose",
                  "Uses an understanding of the organization's culture and environment to develop and implement strategic plans, implement needed changes, and resolve talent needs and issues",
                  "Informs a person affected by a decision about what is happening, ensuring that the group has all of the necessary information",
                  "Provides visible leadership that \"walks the talk\". Sets high performance standards for self, acting as a role model for the team"
              ],
              "examples": []
          },
          {
              "summary": "Leads, inspires and servers others, enabling people to achieve their goals and full potential",
              "signals": [
                  "Focus on bringuing their best self to your work, and making space for others to do so as well",
                  "Uses an understanding of complex relationships among organizational leaders to facilitate the strategy, implementation and maintenance of initiatives proposed by other executives",
                  "Uses storytelling to create a positive and engaging environment for teams and clients",
                  "Leverages relationships to best support and develop individuals"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_TWO"] = {
      "milestone": "CHAPTER_TWO",
      "cohort": "MANAGEMENT",
      "category": "A",
      "displayName": "Coaching",
      "description": "Helps people to develop their own independent thinking, guiding them through processes",
      "milestones": [
          {
              "summary": "Helps individuals to think through the likely impacts of alternative decisions",
              "signals": [
                  "Helps individuals to think for themselves about possible impacts and solutions to a problem by asking open ended questions",
                  "Demonstrates a positive outlook on things"
              ],
              "examples": []
          },
          {
              "summary": "Helps individuals to act or perform in the face of challenging goals",
              "signals": [
                  "Shows confidence in other's ability and willingness to face challenges and solve problem",
                  "Helps people to gain awareness of current situations",
                  "Demonstrates curiosity"
              ],
              "examples": []
          },
          {
              "summary": "Coaches people proactively, and guides people to realizations rather than providing the answer\t",
              "signals": [
                  "Demonstrates the ability to understand what issues exist that limit individuals's ability to perform the task or accomplish the objectives",
                  "Determines whether people need help to remove barriers or if they are able to tackle them by themselves"
              ],
              "examples": []
          },
          {
              "summary": "Coaches and guides all level of individuals to develop and enhance on-the-job performance, knowledge or behavior",
              "signals": [
                  "Partners with people to define actions based on their own abilities and knowledge",
                  "Supports people's progress, celebrates their wins and encourages them to find new paths if their original plan of action does not work out as expected",
                  "Demonstrates the ability to encourage meaningful thoughts that can help the other person address a challenge or break through to a new level of performance"
              ],
              "examples": []
          },
          {
              "summary": "Empowers and engages with others to help them improve their performance and overcome challenges to thrive at an optimal level based on their own abilities, skills and knowledge",
              "signals": [
                  "Focuses on empowering their team members to discover solutions for themselves",
                  "Coaches senior leaders on creating positive working relationships with their teams and clients"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_THREE"] = {
      "milestone": "CHAPTER_THREE",
      "cohort": "MANAGEMENT",
      "category": "A",
      "displayName": "Facilitation",
      "description": "Comprehends the ability to lead people through processes towards agreed-upon objectives in a manner that encourages participation, ownership and creativity",
      "milestones": [
          {
              "summary": "Helps individuals resolve difficult issues, promoting an inclusive environment",
              "signals": [
                  "Actively seeks many external views to help people gain understanding",
                  "Creates an inclusive environment"
              ],
              "examples": []
          },
          {
              "summary": "Helps people collectively move through a process",
              "signals": [
                  "Is able to effectively deal and understand views opposing their own views and is open to criticism and learning",
                  "Is becoming comfortable in mediating escalated conflicts",
                  "Builds consensus among people and teams"
              ],
              "examples": []
          },
          {
              "summary": "Mediates escalated situations, empowers people, and resolves conflict\t",
              "signals": [
                  "Understands what drives and motivates the project team, and their capabilities and is aware of differences",
                  "Resolves and\/or mediates conflicts in a respectful, appropriate and impartial manner",
                  "Takes time to understand how individuals and teams are performing and working together to deliver the project outcomes"
              ],
              "examples": []
          },
          {
              "summary": "Guides and manages individuals both internally and externally to ensure that the their objectives are met effectively, with clear thinking, good participation and full buy-in from everyone who is involved",
              "signals": [
                  "Understands themselves and the individuals in the project team, what drives and motivates them personally, and their individual capabilities",
                  "Is able to facilitate difficult interactions among stakeholders to achieve outcomes",
                  "Is focused on the big picure"
              ],
              "examples": []
          },
          {
              "summary": "Leads people through processes towards agreed-upon objectives in a manner that encourages participation, ownership and creativity",
              "signals": [
                  "Uses their understanding of individuals and teams to make the project strategy tangible to individuals and teams",
                  "Serves as a positive role model for productive conflict",
                  "Encourages productive and respectful task-related conflict, using it to facilitate change",
                  "Resolves complex organizational dysfunction, or persistent conflict at senior levels\t"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_FOUR"] = {
      "milestone": "CHAPTER_FOUR",
      "cohort": "MANAGEMENT",
      "category": "A",
      "displayName": "Motivation",
      "description": "Comprehends the ability to energize people to achieve their goals",
      "milestones": [
          {
              "summary": "Fosters enthusiasm and common purpose across people",
              "signals": [
                  "Generates commitment in individuals and the team",
                  "Speaks positively and enthusiastically about the organization's products\/services and future direction"
              ],
              "examples": []
          },
          {
              "summary": "Mobilizes individuals to develop goals, execut plans and deliver client value\t",
              "signals": [
                  "Creates a fun and energetic environment that promotes creativity",
                  "Validates ongoing work and sustains motivation",
                  "Establishes challenging, yet realistic, performance goals that tap into people's interests"
              ],
              "examples": []
          },
          {
              "summary": "Inspires others to a greater effort by setting an example in his\/her own behavior of dedication",
              "signals": [
                  "Recognises individual and team performance, even when things go wrong",
                  "Empowers a team to drive forward amidst uncertainty",
                  "Models excellence and enthusiasm for the work"
              ],
              "examples": []
          },
          {
              "summary": "Conveys confidence in others' capabilities and appeals to others' unique needs, interests, and goals to motivate them to achieve",
              "signals": [
                  "Empowers the project team and individuals. Expresses positive expectations of others regarding their abilities or potentials, even in challenging cases. Believes others want to and can learn",
                  "Ensures that the self-realisation and practical needs of the project team are met"
              ],
              "examples": []
          },
          {
              "summary": "Enables and directs generation of energy - motivation to act - among members of the organization and clients",
              "signals": [
                  "Demonstrates the ability to use others as a sounding board for generating ideas and plans; acknowledges their expertise or perspective when asking for their opinions",
                  "Ability to find and use successes to celebrate progress towards the vision",
                  "Sets clear goals and a desired future state that is compelling and realistic for stakeholders"
              ],
              "examples": []
          }
      ]
  }

  return trackList
}

export const engineeringTracks = (trackList: object[]): object[] => {
  trackList["CHAPTER_ONE"] = {
      "milestone": "CHAPTER_ONE",
      "cohort": "ENGINEERING",
      "category": "A",
      "displayName": "Foundations",
      "description": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas\t",
      "milestones": [
          {
              "summary": "Works effectively within established structures, following current best practices",
              "signals": [
                  "Is building proficiency with our tech stack and becoming comfortable with learning new technologies and skills",
                  "Has experience with development best practices, Drupal, PHP, web accessibility, and web development frameworks",
                  "Able to perform assigned tasks and tickets with ocassional assistance",
                  "Able to help with the estimation of tickets while working on the refinement of that skill"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively within established structures, focusing on expanding experience and proficiency",
              "signals": [
                  "Focuses on expanding experience and proficiency in our code base, with solid understanding of relevant areas",
                  "Is well-versed with development best practices, Drupal, PHP, web accessibility, and core development tools",
                  "Able to perform assigned tasks and tickets close to estimated time with minimal assitance",
                  "Learns new areas of codebase and new tech very quickly",
                  "Able to provide reliable estimates for tickets"
              ],
              "examples": []
          },
          {
              "summary": "Designs technical solutions of moderate complexity",
              "signals": [
                  "Independently scopes and implements solutions for their project\/team",
                  "Proficient in all relevant technical skills, and able to move quickly. Maintains awareness of industry trends and tools",
                  "Contributes to Open Source Work",
                  "Demonstrates the ability to come up with solid technical solutions to ambiguous or open-ended problems",
                  "Often gives support to others in their areas of strongest skill",
                  "Provides accurate estimation for tickets"
              ],
              "examples": []
          },
          {
              "summary": "Builds complex, technical solutions that pioneer best practices for other engineers, or multi-system services",
              "signals": [
                  "Has a deep understanding of our architecture and how their domain fits within it. Systematically thinks through potential design impacts on other teams and the company",
                  "Expert in our processes, also helping to define them. Keeps tests up to date",
                  "Independently scopes, designs, and delivers solutions for large, complex challenges",
                  "Debugs expertly within their primary focus area",
                  "Provides oversight, coaching and guidance through code and design reviews"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our stack, deeply knowledgeable in several domains and sets strategic direction for the engineering team",
              "signals": [
                  "Seen as a leader and contributor in the broader technical side across the organization",
                  "Primary expert in multiple areas of our stack, incredibly knowledgable in several domains",
                  "Designs and builds industry-leading techniques to solve complex problems",
                  "Anticipates technical challenges, exploring alternatives and tradeoffs thoroughly",
                  "Focuses on technical decision making, leading work that affects one or more complex systems and mission-critical areas",
                  "Explores technologies with sizable potential impact for Palantir"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_TWO"] = {
      "milestone": "CHAPTER_TWO",
      "cohort": "ENGINEERING",
      "category": "A",
      "displayName": "Coding",
      "description": "Develops expertise and proficiency in our code base, with solid understanding of relevant areas\t",
      "milestones": [
          {
              "summary": "Learning the ropes of our tech stack as well as our development practices",
              "signals": [
                  "Writes code that is sometimes production-ready, but usually requires iteration before shipping",
                  "Is becoming comfortable working with one or two specific disciplines",
                  "Receives and integrates feedback from code reviews to ship high-quality code",
                  "Participates in code reviews and technical design",
                  "Receives and incorporates feedback from PR reviews",
                  "Does small PR reviews around functional behavior"
              ],
              "examples": []
          },
          {
              "summary": "Often writes production-ready code. Code reviews are sometimes perfect, but sometimes require a bit of explaining and effort from reviewers.",
              "signals": [
                  "Writes code that usually ships promptly by receiving and successfully integrating critical input from code reviews. Work rarely needs to be rewritten before shipping",
                  "Follows style guides",
                  "Ships maintainable code that works and is understandable by teammates",
                  "Is becoming comfortable diving in and making changes to many areas of code, not just a single area of code",
                  "Provides helpful, timely code reviews",
                  "Ability to perform code audit"
              ],
              "examples": []
          },
          {
              "summary": "Writes production-ready code every day. Is beginning to master parts of our tech stack while also teaching others",
              "signals": [
                  "Consistently delivers code that sets the standard for quality, security and maintainability",
                  "Understands large swaths of the codebase with a deep knowledge and ability to \"reach in and touch the right levers.\" Able to move rapidly as a result",
                  "Most input from code reviewers is at a high level - already writes reliable code",
                  "Code review feedback is sought after, respected, and often the source of others' learning",
                  "Writes meaningful code reviews",
                  "Sets the standards for performing code audits"
              ],
              "examples": []
          },
          {
              "summary": "Possesses the development skills and stack expertise necessary to build our product and gives technical support to others on a daily basis",
              "signals": [
                  "Uses mastery to ship quickly",
                  "Has built mastery in some relevant technical skills; good understanding of full stack",
                  "Provides mentorship and technical guidance to more junior teammates",
                  "Writes highly insightful, comprehensive code reviews"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert, deeply knowledgeable in several domains and sets strategic developing direction for the engineering team",
              "signals": [
                  "Capable of building an entire product from scratch that starts out ill-defined and requires significant R&D effort",
                  "Seen as a leader and contributor in the broader technical community who advances the state of the art",
                  "Demonstrates the ability to resolve technical problems without little context",
                  "Constantly learning new technologies, can navigate and make legacy code maintainable",
                  "Incredibly knowledgable in their area of expertise, often to a degree that is recognized far beyond our walls"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_THREE"] = {
      "milestone": "CHAPTER_THREE",
      "cohort": "ENGINEERING",
      "category": "A",
      "displayName": "DevOps",
      "description": "Develops expertise and proficiency in DevOps\t",
      "milestones": [
          {
              "summary": "Works effectively within established DevOps practices, following current best practices",
              "signals": [
                  "Is building proficiency in creating solutions using tools and automation to improve operations",
                  "Knowledge and understanding of common software development tools and processes, including version control, issue tracking, and continuous build processes"
              ],
              "examples": []
          },
          {
              "summary": "Develops new instances of existing practices, with assistance of senior engineers",
              "signals": [
                  "Focuses on expanding experience and proficiency in DevOps practices, with solid understanding of operating system",
                  "Understanding of web application development, server deployment and upkeep, and general networking practices",
                  "Modifies existing software to correct errors with guidance",
                  "Supports and improves our tools for continuous integration, automated testing and release management with guidance"
              ],
              "examples": []
          },
          {
              "summary": "Designs standalone systems of moderate complexity",
              "signals": [
                  "Ability to enhance and streamline operational processes though automation and integration without guidance",
                  "Ability to deploy and administer server-hosted software solutions",
                  "Modifies existing software to correct errors, adapt to new hardware, or to improve performance",
                  "Ability to debug problems throughout the stack"
              ],
              "examples": []
          },
          {
              "summary": "Designs complex solutions to take advantage of opportunities and new technologies, acting as a partner to and a team member of the Engineering chapter",
              "signals": [
                  "Ability to analyze user needs and software requirements to determine feasibility of design within time and cost constraints",
                  "Responds to the needs of PM and Engineering to customize hosted tools to improve team efficiency",
                  "Uses scientific analysis and mathematical models to predict and measure outcome and consequences of design"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert, deeply knowledgeable in DevOps practices and sets strategic developing direction for the engineering team        \t",
              "signals": [
                  "Drives capacity for triaging and handling operational issues while advising the team on the process of writing code and engineering systems that will make their entire codebase more reliable, testable, and scalable",
                  "Seen as an expert and contributor in the broader technical community who advances the state of the art",
                  "Creates innovative and comprehensive tools and practices to improve deployment and testing"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_FOUR"] = {
      "milestone": "CHAPTER_FOUR",
      "cohort": "ENGINEERING",
      "category": "A",
      "displayName": "Craft",
      "description": "Embodies and promotes practices to ensure excellent quality products and services",
      "milestones": [
          {
              "summary": "Delivers consistently good quality work\t",
              "signals": [
                  "Tests new code thoroughly, both locally, and in production once shipped",
                  "Writes tests for every new feature and bug fix with guidance",
                  "Writes clear comments and documentation",
                  "Works effectively within established web client architectures, such as HTML, PHP and JavaScript, following current best practices"
              ],
              "examples": []
          },
          {
              "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems\t",
              "signals": [
                  "Refactors existing code to make it more testable",
                  "Adds tests for uncovered areas",
                  "Deletes unnecessary code and deprecates proactively when safe to do so",
                  "Assesses correctness and utility of existing code and avoids blind copy-pasting",
                  "Generalizes code when appropriate",
                  "Develops new instances of existing architecture, or minor improvements to existing architecture"
              ],
              "examples": []
          },
          {
              "summary": "Improves others' ability to deliver great quality work\t",
              "signals": [
                  "Implements systems that enable better testing",
                  "Gives thoughtful code reviews as a domain expert",
                  "Adds tooling to improve code quality, security and maintability",
                  "Acts as primary maintainer for existing critical systems",
                  "Designs major new features and demonstrates a nuanced understanding of browser constraints"
              ],
              "examples": []
          },
          {
              "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues\t",
              "signals": [
                  "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
                  "Focuses the team on quality with regular reminders",
                  "Coordinates priorities and projects",
                  "Iterates repeatedly to develop Palantir's underlying solution",
                  "Designs custom domain architecture"
              ],
              "examples": []
          },
          {
              "summary": "Enables and encourages the entire chapter to make quality a central part of the development process",
              "signals": [
                  "Defines policies for the engineering chapter that encourage quality work",
                  "Identifies and eliminates single points of failure throughout the chapter",
                  "Identifies and solves systemic problems with current architecture",
                  "Creates a compelling technical vision with company-level impact, anticipating future needs"
              ],
              "examples": []
          }
      ]
  }
  return trackList
}

export const frontendTracks = (trackList: object[]): object[] => {
  trackList["CHAPTER_ONE"] = {
      "milestone": "CHAPTER_ONE",
      "cohort": "FRONTEND",
      "category": "A",
      "displayName": "Foundations",
      "description": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas\t",
      "milestones": [
          {
              "summary": "Works effectively within established structures, following current best practices",
              "signals": [
                  "Is building proficiency with our web technologies and becoming comfortable with learning new technologies and skills",
                  "Has experience with web development frameworks, HTML, CSS, JavaScript and webiste accessibility",
                  "Able to perform assigned tasks and tickets with ocassional assistance",
                  "Able to help with the estimation of tickets while working on the refinement of that skill",
                  "Has an understanding of wireframing, UX design or UI patterns",
                  "Has experience developing and testing across multiple browsers"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively within established structures, focusing on expanding experience and proficiency",
              "signals": [
                  "Focuses on expanding experience and proficiency in our web technology practices, with solid understanding of relevant areas",
                  "Is well versed with web development frameworks, HTML, CSS, JavaScript and website accessibility",
                  "Able to perform assigned tasks and tickets close to estimated time with minimal assitance",
                  "Able to provide reliable estimates for tickets",
                  "Has an understanding of DevOps",
                  "Ability to work with open source technology"
              ],
              "examples": []
          },
          {
              "summary": "Designs technical solutions of moderate complexity",
              "signals": [
                  "Independently scopes and implements solutions for their project\/team",
                  "Proficient in all relevant technical skills, and able to move quickly. Maintains awareness of industry trends and tools",
                  "Able to complete tickets reasonably close to estimated time without needing to be prodded by the PM or Lead",
                  "Demonstrates the ability to come up with solid technical solutions to ambiguous or open-ended problems",
                  "Often gives support to others in their areas of strongest skill",
                  "Provides accurate estimation for tickets"
              ],
              "examples": []
          },
          {
              "summary": "Builds complex, technical solutions that pioneer best practices for other FED, or multi-system services",
              "signals": [
                  "Has a deep understanding of our architecture and how their domain fits within it. Systematically thinks through potential design impacts on other teams and the company.",
                  "Expert in our processes, also helping to define them. Keeps tests up to date",
                  "Independently scopes, designs, and delivers solutions for large, complex challenges",
                  "Debugs expertly within their primary focus area",
                  "Provides oversight, coaching and guidance through code and design reviews"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our stack, deeply knowledgeable in several domains and sets strategic direction for the FED team",
              "signals": [
                  "Seen as a leader and contributor in the broader technical side across the organization",
                  "Primary expert in multiple areas of our stack, incredibly knowledgable in several domains",
                  "Designs and builds industry-leading techniques to solve complex problems",
                  "Anticipates technical challenges, exploring alternatives and tradeoffs thoroughly",
                  "Focuses on technical decision making, leading work that affects one or more complex systems and mission-critical areas",
                  "Explores technologies with sizable potential impact for Palantir"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_TWO"] = {
      "milestone": "CHAPTER_TWO",
      "cohort": "FRONTEND",
      "category": "A",
      "displayName": "Coding",
      "description": "Develops expertise and proficiency in our front-end code base, with solid understanding of relevant areas\t",
      "milestones": [
          {
              "summary": "Learning the ropes of our tech stack as well as our development practices",
              "signals": [
                  "Writes front-end code that is sometimes production-ready, but usually requires iteration before shipping",
                  "Is becoming comfortable working with one or two areas of front-end code",
                  "Receives and integrates feedback from front-end code reviews to ship high-quality code",
                  "Participates in front-end code reviews and architecture design"
              ],
              "examples": []
          },
          {
              "summary": "Often writes production-ready front-end code. Code reviews are sometimes perfect, but sometimes require a bit of explaining and effort from reviewers.",
              "signals": [
                  "Writes front-end code that usually ships promptly by receiving and successfully integrating critical input from code reviews. Work rarely needs to be rewritten before shipping",
                  "Follows style guides",
                  "Ships maintainable front-end code that works and is understandable by teammates",
                  "Is becoming comfortable diving in and making changes to many areas of code, not just a single area of code",
                  "Provides helpful, timely front-end code reviews"
              ],
              "examples": []
          },
          {
              "summary": "Writes production-ready front-end code every day. Is beginning to master parts of our tech stack while also teaching others",
              "signals": [
                  "Consistently delivers front-end code that sets the standard for quality and maintainability",
                  "Understands large swaths of the codebase with a deep knowledge and ability to \"reach in and touch the right levers.\" Able to move rapidly as a result",
                  "Most input from front-end code reviewers is at a high leve - already writes reliable code",
                  "Front-end code review feedback is sought after, respected, and often the source of others' learning",
                  "Writes meaningful front-end code reviews",
                  "Translates design solutions into high quality front-end code"
              ],
              "examples": []
          },
          {
              "summary": "Possesses the development skills and stack expertise necessary to build our product and gives technical support to others on a daily basis",
              "signals": [
                  "Uses mastery to ship quickly",
                  "Built mastery in some relevant technical skills; good understanding of full stack",
                  "Provides mentorship and technical guidance to more junior teammates",
                  "Code review feedback is highly insightful, addressing high-level thoughts",
                  "Writes highly insightful, comprehensive front-end code reviews"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert, deeply knowledgeable in several domains and sets strategic developing direction for the engineering team",
              "signals": [
                  "Builds cutting-edge web applications, with a focus on client side",
                  "Leads code testing integration and oversees quality system performance",
                  "Seen as a leader and contributor in the broader technical community who advances the state of the art",
                  "Constantly learning new web technologies, can navigate and make legacy front-end code maintainable",
                  "Incredibly knowledgable in their area of expertise, often to a degree that is recognized far beyond our walls",
                  "Leads code reviews and guides software architecture decisions"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_THREE"] = {
      "milestone": "CHAPTER_THREE",
      "cohort": "FRONTEND",
      "category": "A",
      "displayName": "Web Technologies",
      "description": "Develops expertise in web client technologies, such as HTML, CSS and JavaScript\t",
      "milestones": [
          {
              "summary": "Works effectively within established web client architectures, following current best practices\t",
              "signals": [
                  "Makes minor modifications to existing screens",
                  "Fixes simple design quality issues",
                  "Uses CSS appropriately, following style guide"
              ],
              "examples": []
          },
          {
              "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture\t",
              "signals": [
                  "Makes sensible abstractions based on template and code patterns",
                  "Specs and builds interactive components independently",
                  "Prototypes simple new features quickly",
                  "Builds modal systems"
              ],
              "examples": []
          },
          {
              "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints\t",
              "signals": [
                  "Provides useful design feedback and suggests feasible alternatives",
                  "Performs systemic tasks to significantly minimise bundle size",
                  "Acts a caretaker for all of web client code",
                  "Prototypes with code using modern front-end frameworks and digital pattern librarie"
              ],
              "examples": []
          },
          {
              "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively\t",
              "signals": [
                  "Pioneers architecture migrations that reduce programmer burden",
                  "Implements complex UI transitions that bring delight",
                  "Makes architectural decisions that eliminate entire classes of bugs"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in web client or sets strategic web client direction for the engineering chapter",
              "signals": [
                  "Invents new techniques to innovate and overcome browser constraints",
                  "Identifies and solves systemic problems with current architecture",
                  "Defines a long-term vision for web client and ensures projects are in service of it",
                  "Able to inventive CSS in JS",
                  "Implements omni-directional data flow to completion"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_FOUR"] = {
      "milestone": "CHAPTER_FOUR",
      "cohort": "FRONTEND",
      "category": "A",
      "displayName": "Craft",
      "description": "Embodies and promotes practices to ensure excellent quality products and services",
      "milestones": [
          {
              "summary": "Delivers consistently good quality work\t",
              "signals": [
                  "Understands the entire web development process, including design, development, deployment with some back-end knowledge",
                  "Builds responsive and adaptive websites with guidance of senior FED"
              ],
              "examples": []
          },
          {
              "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems\t",
              "signals": [
                  "Understands and demonstrates knowledge of accessibility needs, concerns, design and best practices",
                  "Builds semantic, accessible and maintainable front-end interfaces",
                  "Accurately translats prototypes and design into working interfaces"
              ],
              "examples": []
          },
          {
              "summary": "Improves others' ability to deliver great quality work\t",
              "signals": [
                  "Supports complex and secure components for modern browsers written in the latest web standards",
                  "Works with UX to develop and maintain processes that ensure our tools and practices are up to date",
                  "Gives thoughtful front-end code reviews as a domain expert",
                  "Implements systems that enable better testing",
                  "Adds tooling to improve front-end code base quality",
                  "Maintains high coding standards and practices to exercise quality control on all aspects of web development"
              ],
              "examples": []
          },
          {
              "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues\t",
              "signals": [
                  "Takes the lead on browser\/device acceptance testing and bug fixing",
                  "Collaborates with UX designers to promote and achieve optimal solutions for clients",
                  "Leads client demos",
                  "Maintains and improves front-end code bases across a wide variety of projects",
                  "Iterates repeatedly to develop Palantir's underlines solution"
              ],
              "examples": []
          },
          {
              "summary": "Enables and encourages the entire chapter to make quality a central part of the development process",
              "signals": [
                  "Defines policies for the FED chapter that encourage quality work",
                  "Identifies and eliminates single points of failure throughout the chapter",
                  "Secures time and resources from execs to support great quality",
                  "Creates a compelling technical vision with company-level impact, anticipating future needs"
              ],
              "examples": []
          }
      ]
  }

  return trackList
}

export const uxTracks = (trackList: object[]): object[] => {
  trackList["CHAPTER_ONE"] = {
      "milestone": "CHAPTER_ONE",
      "cohort": "UX",
      "category": "A",
      "displayName": "Foundations",
      "description": "Develops expertise and proficiency in our strategy practice, with solid understanding of relevant areas\t",
      "milestones": [
          {
              "summary": "Works effectively within established structures, following current best practices",
              "signals": [
                  "Is building proficiency in our user experience practice and becoming comfortable with learning new technologies and skills",
                  "Has experience with web accessibility, usability and core development tools. Understands web design constraints",
                  "Applies existing team patterns library, working with a more senior designer as a guide or mentor",
                  "Has knowledge in marketing and consumer behavior trends",
                  "Develops user-centered website strategies with guidance, in alignment with client goals and objective",
                  "Hands-on experience with UX tools such as Sketch, InVision, prototyping tools, Google Analytics and Adobe Creative Suite"
              ],
              "examples": []
          },
          {
              "summary": "Develops new instances for best practices, or minor improvements to existing practices and standards",
              "signals": [
                  "Focuses on expanding experience and proficiency in our user experience practice, establishing and promoting brand guidelines, best practices and standards",
                  "Is well-versed with web accessibility, usability and core development tools. Has a deep understanding of web design constraints",
                  "Applies existing team pattern libraries, provides examples of patterns in the wild, and explores multiple design options",
                  "Works with other team members to understand constraints and design feasibility",
                  "Contributes to strategic positioning, oranizational insight, and client road maps",
                  "Is well- versed in marketing and consumer behavior trends",
                  "Develops user-centered website strategies that supports user tasks, satisfies client goals and contributes orginal documentation for projects",
                  "Sketches and creates wireframes",
                  "Designs and perform competitive analyses, proactively researches examples in the wild, seeks out industry trends, and performs and analyzes usability test plans",
                  "Collaborates with Product Management, Design and Engineering to scope time and effort involved in design projects"
              ],
              "examples": []
          },
          {
              "summary": "Designs complicated user experience, mastering delivery",
              "signals": [
                  "Effectively leads and takes ownership of the UX process: Articulates strategy, best practices, and process collaborating with designers to inform and define the project",
                  "Is always able to articulate the \"why\" of design decisions",
                  "Always explores multiple options, evaluates and articulates pros and cons to choices, recommends user experience decisions, understands when to use low and high-fidelity design tools, and contributes to existing team pattern libraries",
                  "Constantly partners with engineering to understand technology system constraints and align strategy and design work in an efficient and effective way at the project level",
                  "Designs, performs, and analyzes usability test plans",
                  "Ability to articulate the difference and relationship between the different IA and Content Strategy deliverables",
                  "Collaborates with PM and Engineering to define and implement innovative solutions for the product direction"
              ],
              "examples": []
          },
          {
              "summary": "Develops complex user experience strategies and guides other UX team members",
              "signals": [
                  "Efficiently balances and manages complex user, business, and technical requirements to make design decisions",
                  "Guides junior team members in critical, high-level, design problem solving",
                  "Strategically analyzes the risks, benefits, and opportunities of various solutions",
                  "Seeks out chapter-wide opportunities for improvements",
                  "Ability to understand constraints and technical feasibility prior to client presentations"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our stack, deeply knowledgeable in several domains and sets strategic foundational direction for an UX team",
              "signals": [
                  "Guides and directs UX team members by providing strategic direction that best honor's client's business",
                  "Develops a unique user experience practice approach that outlines and defines activities, deliverables, and value to be used in sales and marketing initiatives",
                  "Designs and builds industry-leading solutions to solve UX complex problems and advocates for the best user experience possible",
                  "Serves as client focal point for all UX practices",
                  "Anticipates technical challenges, exploring alternatives and tradeoffs thoroughly",
                  "Seen as a leader and contributor in the broader technical side across the organization"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_TWO"] = {
      "milestone": "CHAPTER_TWO",
      "cohort": "UX",
      "category": "A",
      "displayName": "Discovery & Definition",
      "description": "Comprehends the analysis of the business model, stakeholders, goals, key performance indicators, and existing technologies and workflows\t",
      "milestones": [
          {
              "summary": "Works in the discovery and definition process with guidance, following current best practices",
              "signals": [
                  "Gather business requirements and user insights through surveys, user tests, and interviews with the assitance of senior startegists",
                  "Uses basic feedback techniques to improve relatively simple strategy concepts and techniques",
                  "Is building the ability to plan information validation activities and incorporate user and stakeholders into design changes by observing and interaction with senior strategists",
                  "Understands client business\/objectives and identifies opportunities for client \"wins\" through digital design, tools and experiences"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively in the discovery and definition process with guidance, focusing on expanding experience and proficiency",
              "signals": [
                  "Conducts validations\/interviews with users and stakeholders with assistance of a more senior strategist",
                  "Applies feedback techniques to improve discovery and definition strategies",
                  "Works with more senior team members to plan information validation activities and incorporate user feedback into design changes",
                  "Generates users and stakeholders interview questions and documentation",
                  "Works with the designers to research technical documentation, APIs, integration with 3rd party technologies etc. to confirm project requirements and expectations "
              ],
              "examples": []
          },
          {
              "summary": "Effectively leads the discovery and definition process",
              "signals": [
                  "Plans moderately complicated requirements-gathering, analysis, design-validation, and usability-testing activities",
                  "Independently conducts information-validation activities with internal and external stakeholders",
                  "Conducts Gap and Task analysis",
                  "Communicates usability findings and provides recommendations for improving user-interface experience",
                  "Facilitates the planning and execution of on-site discovery workshops",
                  "Conducts comparative analysis",
                  "Perform content audits and competitor site analysis"
              ],
              "examples": []
          },
          {
              "summary": "Independently leads all aspects of the discovery and definition process",
              "signals": [
                  "Independently conducts all aspects of complex user-research programs--from early-stage requirements to summative usability testing",
                  "Adapts user-research techniques to inform both new and on-going, complex, product-development effort",
                  "Communicates usability findings, metrics, and associated design strategies to large, distributed product teams",
                  "Discusses usability metrics and their impact on product ROI"
              ],
              "examples": []
          },
          {
              "summary": "Guides and leads all stages of the discovery and definition process, developing new concepts",
              "signals": [
                  "Expertly conducts all stages of user research--including market analysis, requirements definition, early-to-mid-stage design validations, and summative usability--testing activities",
                  "Simultaneously plans and drives multiple user-research activities across widely divergent product domains",
                  "Drives and conducts all aspects of formal summative testing, including the use of metrics and competitive benchmark testing",
                  "Communicates usability metrics and findings to engineers, designers, PM and executives",
                  "Clearly articulates the impacts of perpetuating usability issues, including their negative impact on the company's overall business",
                  "Creates new user-elicitation methods and techniques to suit novel research needs and requirements"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_THREE"] = {
      "milestone": "CHAPTER_THREE",
      "cohort": "UX",
      "category": "A",
      "displayName": "Strategy & Design",
      "description": "Comprehends the analysis and creation of content strategy\t",
      "milestones": [
          {
              "summary": "Works in the strategy and design process with guidance, following current best practices",
              "signals": [
                  "Understands lessons from discovery and research to inform audience definition and identify key personas",
                  "Synthesizes findings from discovery process, identifying opportunities and issues with guidance of senior strategists"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively in the strategy and design process with guidance, focusing on expanding experience and proficiency",
              "signals": [
                  "Synthesizes findings from discovery process, effectively identifying opportunities and issues",
                  "Leverages lessons from discovery and research to inform audience definition and identify key personas",
                  "Demonstrates user journeys through journey mapping"
              ],
              "examples": []
          },
          {
              "summary": "Effectively develops complicated content strategy",
              "signals": [
                  "Works with designers as appropriate to translate strategic recommendations into wireframes and documentation that lead to intuitive user experiences",
                  "Synthesizes findings from discovery process, identifying opportunities and issues, and recommends solutions that meet the client objectives",
                  "Understands user needs and intents then translate that to information architecture and content outline(s), collaborating with designers",
                  "Collaborates with designers on design strategy and visual design application for projects",
                  "Conducts usability tests"
              ],
              "examples": []
          },
          {
              "summary": "Creates high-quality complex content strategy",
              "signals": [
                  "Synthesizes findings from discovery process, identifying opportunities and issues, and recommends solutions that meet the client objectives, demonstrate a level of excellence, and may be achieved within budget",
                  "Provides high-level sitemap and wireframes or work with designers as appropriate to translate strategic recommendations into wireframes and documentation that lead to intuitive user experiences",
                  "Craft high-level content strategy recommendations",
                  "Guides the creation of wireframes for key pages in the new website, and explains such wireframes to the client"
              ],
              "examples": []
          },
          {
              "summary": "Delivers and guides high-quality content strategy, deeply knowledgeable and sets new trends and solutions for the UX team",
              "signals": [
                  "Demonstrates ability to generate and translat insights into actionable digital opportunities through reports\/presentations, personas, user flows, journey maps,..",
                  "Balances creativity with structure, collaborating with designers, PM, and  engineers",
                  "Advocates for pushing the limits on a project's capabilities, both from a visual and functional perspective",
                  "Articulates a design strategy or approach that will impact the user experience across products or platforms and support own ideas with sound reasoning and\/or data"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_FOUR"] = {
      "milestone": "CHAPTER_FOUR",
      "cohort": "UX",
      "category": "A",
      "displayName": "User-centered Design",
      "description": "Comprehends an understanding of the end user to guide decision making for product design and development\t",
      "milestones": [
          {
              "summary": "Works in the design validation process with guidance, following current best practices",
              "signals": [
                  "Conducts basic, early-stage design validations with stakeholders",
                  "Uses basic feedback techniques to improve relatively simple design concepts",
                  "Helps to create clean and simple user-centred designs with guidance of senior teammates"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively in the design validation process with guidance, focusing on expanding experience and proficiency",
              "signals": [
                  "Conducts design validations with stakeholders with assistance of a more senior designer",
                  "Applies feedback techniques to improve design concepts",
                  "Works with more senior team members to plan design-validation activities and incorporate user feedback into design changes",
                  "Generates user profiles, recruiting screeners, study scripts, and reports"
              ],
              "examples": []
          },
          {
              "summary": "Effectively leads the design process",
              "signals": [
                  "Designs and delivers wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interface",
                  "Independently conducts design-validation activities with internal and external stakeholders",
                  "Translates concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences",
                  "Assist the front-end developers to ensure the UX design achieves design goals and meets end-user needs"
              ],
              "examples": []
          },
          {
              "summary": "Independently leads all aspects of the design process",
              "signals": [
                  "Demonstrates the ability to identify design problems and devise solutions",
                  "Takes a user-centered design approach and rapidly test and iterate your designs",
                  "Ensures design production is efficient and deliver at the highest quality in accordance with UX's best practices and processes"
              ],
              "examples": []
          },
          {
              "summary": "Guides and leads all stages of the design process, developing new concepts",
              "signals": [
                  "Makes strategic design and user-experience decisions related to core, and new, functions and features",
                  "Creates high quality design deliverables and executes based on UX goals and priorities, acting as an expert in the field",
                  "Stays on top of UX design trends and looking for creative ways to inspire delightful experiences"
              ],
              "examples": []
          }
      ]
  }

  return trackList
}

export const uiTracks = (trackList: object[]): object[] => {
  trackList["CHAPTER_ONE"] = {
      "milestone": "CHAPTER_ONE",
      "cohort": "UI",
      "category": "A",
      "displayName": "Foundations",
      "description": "Develops expertise and proficiency in our design practice, with solid understanding of relevant areas",
      "milestones": [
          {
              "summary": "Works effectively within established structures, following current best practices",
              "signals": [
                  "Is building proficiency in our design practice and becoming comfortable with learning new technologies and skills",
                  "Has experience with web accessibility, usability and core development tools",
                  "Understands web design constraints, including CSS, HTLM, browser usability, and crosss-platform compatibility"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively within established structures, focusing on expanding experience and proficiency",
              "signals": [
                  "Focuses on expanding experience and proficiency in our design practice, establishing and promoting brand guidelines, best practices and standards",
                  "Is well-versed with web accessibility, usability and core development tools",
                  "Collaborates with PM, Strategy and Engineering to scope time and effort involved in design projects",
                  "Serves as a strategic visual design resource",
                  "Has a deep understanding of web design constraints, including CSS, HTLM, browser usability, and crosss-platform compatibility",
                  "Develops a web experience that's best for the user and accurately reflects the client's goals, objectives, and brand identity"
              ],
              "examples": []
          },
          {
              "summary": "Designs complicated user experience design solutions, mastering delivery",
              "signals": [
                  "Is always able to articulate the \"why\" of design decisions",
                  "Constantly seeks input from the engineering and implementation team to validate and ensure that the design visual is executable",
                  "Executes all visual design stages from concept to HTLM\/CSS browser",
                  "Has experience designing from user experience journeys, and realistic use cases to create functional and delightful designs",
                  "Drives the design process and serves as a gatekeeper and clients \"brand expert\"",
                  "Conceptualizes original ideas that bring simplicity and user friendliness to complex design roadblocks",
                  "Collaborates with PM and Engineering to define and implement innovative solutions for the product direction, design and interactions",
                  "Serves as a resident expert of digital tools and is skilled in developing digital design concepts"
              ],
              "examples": []
          },
          {
              "summary": "Develops complex user experience strategies and guides other UI team members",
              "signals": [
                  "Efficiently balances and manages complex user, business, and technical requirements to make design decisions",
                  "Guides junior team members in critical, high-level, design problem solving",
                  "Strategically analyzes the risks, benefits, and opportunities of various solutions",
                  "Seeks out chapter-wide opportunities for improvements",
                  "Ability to understand constraints and technical feasibility prior to client presentations"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our stack, deeply knowledgeable in several domains and sets strategic foundational direction for an UI team",
              "signals": [
                  "Guides and directs UI team members by providing strategic direction that best honor's client's business",
                  "Develops a unique user experience practice approach that outlines and defines activities, deliverables, and value to be used in sales and marketing initiatives",
                  "Designs and builds industry-leading solutions to solve UI complex problems and advocates for the best user experience possible",
                  "Serves as client focal point for all UI practices",
                  "Anticipates technical challenges, exploring alternatives and tradeoffs thoroughly",
                  "Seen as a leader and contributor in the broader technical side across the organization"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_TWO"] = {
      "milestone": "CHAPTER_TWO",
      "cohort": "UI",
      "category": "A",
      "displayName": "Information Architecture",
      "description": "Comprehends the structural designs and organizing principles for information environments, Web sites, and software products",
      "milestones": [
          {
              "summary": "Organizes simple informational elements within an existing product framework with guidance",
              "signals": [
                  "Employs basic information-architecture concepts correctly",
                  "Evaluates structural design decisions for feature sets that are well defined or limited in scope with the assistance of senior designers",
                  "Understands the basic usability principles and tradeoffs behind their own design concepts"
              ],
              "examples": []
          },
          {
              "summary": "Organizes complicated informational elements within an existing product framework",
              "signals": [
                  "Employs complicated information-architecture concepts correctly",
                  "Makes good structural design decisions for feature sets that are well defined or limited in scope",
                  "Applies existing information patterns, working with a more senior designer as a guide"
              ],
              "examples": []
          },
          {
              "summary": "Organizes relatively complicated information elements within an existing product framework",
              "signals": [
                  "Explores multiple, alternative information-architecture solutions before choosing a design direction",
                  "Balances relatively complicated user, business, and technical requirements to arrive at sound information-architecture designs",
                  "Can explain the usability rationale and tradeoffs of one information architecture versus another"
              ],
              "examples": []
          },
          {
              "summary": "Organizes complex information elements into new product frameworks",
              "signals": [
                  "Creates new architectural design patterns for a product when necessary",
                  "Employs complex information-architecture concepts quickly and correctly",
                  "Explores multiple, alternative product information architectures to create a broad range of alternative design concepts",
                  "Understands the usability rationale and tradeoffs for different product-level information architectures and can clearly articulate these to the team"
              ],
              "examples": []
          },
          {
              "summary": "Designs and structures the key information elements of entire products and families of products",
              "signals": [
                  "Creates new architectural design patterns that impact entire product lines and user-interface frameworks",
                  "Creates insightful, timely, compelling information-architecture designs for highly complex problem spaces",
                  "Efficiently balances and manages complex user, business, and technical requirements to make sound information-architecture design decisions",
                  "Anticipates and thinks through the entire breadth of impacts that information-architecture decisions can have on users, product teams, and UX designers",
                  "Understands and can compellingly articulate the usability tradeoffs of various information-architecture design approaches for entire product families and frameworks"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_THREE"] = {
      "milestone": "CHAPTER_THREE",
      "cohort": "UI",
      "category": "A",
      "displayName": "Interaction Design",
      "description": "Comprehends the application's workflows and behaviors in response to a user's actions",
      "milestones": [
          {
              "summary": "Solves routine interaction-design problems effectively with guidance",
              "signals": [
                  "Effectively solves routine interaction-design problems, gathering the information necessary to weigh a limited set of options and arrive at sound conclusions",
                  "Escalates problems that are beyond the scope of his design capabilities for resolution by a more senior designer",
                  "Writes select components of interaction design strategy documentation"
              ],
              "examples": []
          },
          {
              "summary": "Solves moderately difficult interaction-design problems and develops solutions with guidance",
              "signals": [
                  "Efficiently solves moderately difficult interaction-design problems that impact people within their team or other related team",
                  "Applies existing interaction patterns, working with a more senior designer as a guide or mentor"
              ],
              "examples": []
          },
          {
              "summary": "Solves complicated interaction-design problems and creates new interaction-design patterns  with guidance",
              "signals": [
                  "Efficiently and creatively solves complicated interaction-design problems that impact the stakeholders",
                  "Looks beyond obvious solutions and experiments with different approaches to solving problems",
                  "Develops solutions for problems that stretch his\/her design capabilities, but requests a more senior design to review and approve them",
                  "Facilitates effective problem solving in meetings and teams"
              ],
              "examples": []
          },
          {
              "summary": "Efficiently solves complex interaction-design problems and creates new interaction-design patterns",
              "signals": [
                  "Efficiently solves complex and difficult interaction-design problems that impact the team or entire organization",
                  "Accurately defines the amount and kinds of information it is needed to gather for problem solving",
                  "Anticipates and proactively works to circumvent roadblocks to solutions",
                  "Creates new interaction-design patterns for a product when necessary",
                  "Identifies underlying or hidden problems or trends across group"
              ],
              "examples": []
          },
          {
              "summary": "Efficiently leads and solves high-level complex interaction-design problems and creates new interaction-design patterns",
              "signals": [
                  "Efficiently and creatively solves even the most complex and difficult interaction-design problems that impact the team or entire company",
                  "Creates new interaction-design patterns that impact entire product lines and user-interface frameworks",
                  "Asks critical, insightful questions and probes all fruitful sources for relevant information to facilitate problem solving",
                  "Leads the team in critical, high-level, design problem solving",
                  "Strategically analyzes the risks, benefits, and opportunities of various solutions"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_FOUR"] = {
      "milestone": "CHAPTER_FOUR",
      "cohort": "UI",
      "category": "A",
      "displayName": "Visual Design",
      "description": "Comprehends the creation of visual elements and application of visual treatments and branding to Web sites and products",
      "milestones": [
          {
              "summary": "Creates basic visual elements with guidance",
              "signals": [
                  "Competently creates basic layouts and produce mockups of designs with the guidance of senior designers",
                  "Turns the image-based designs into a functional HTML & CSS code-based style guide"
              ],
              "examples": []
          },
          {
              "summary": "Creates accurate visual elements, following best practices",
              "signals": [
                  "Builds accurate wireframes, following visual-design guidelines",
                  "Collaborates with other visual designers to produce graphics resource files for user interfaces"
              ],
              "examples": []
          },
          {
              "summary": "Creates sophisticated and complicated visual elements, following best practices\t",
              "signals": [
                  "Creates sophisticated layouts and produce mockups of designs",
                  "Builds complicated wireframes, following visual-design guidelines",
                  "Uses various techniques to create drafts, models and prototypes"
              ],
              "examples": []
          },
          {
              "summary": "Delivers complex visual elements and guides other designers",
              "signals": [
                  "Builds complex, accurate wireframes, following visual-design guidelines",
                  "Collaborates with strategists, PM and engineers to understand how all aspects of a product's functionality would work within an established visual-design framework",
                  "Maintains an awareness of trends in visual design and guides other visual designers in implementing cutting-edge, visual-design solutions for their products",
                  "Has a strong understanding of web design systems and helps create a standardized toolbox of components to draw from"
              ],
              "examples": []
          },
          {
              "summary": "Delivers and guides high-quality visual elements, deeply knowledgeable and sets new trends and solutions for the UI team",
              "signals": [
                  "Expertly builds complex, accurate wireframes, following visual-design guidelines",
                  "Guides and directs the UI design team to understand how all aspects of a product's functionality would work within an established visual-design framework",
                  "Stays abreast of trends in visual design and expertly guides other visual designers in implementing cutting-edge solutions for their products",
                  "Advocates for pushing the limits on a project's capabilities, both from a visual and functional perspective"
              ],
              "examples": []
          }
      ]
  }

  return trackList
}

export const pmTracks = (trackList: object[]): object[] => {
  trackList["CHAPTER_ONE"] = {
      "milestone": "CHAPTER_ONE",
      "cohort": "PM",
      "category": "A",
      "displayName": "Foundations",
      "description": "Develops expertise and proficiency in our PM practice, with solid understanding of relevant areas\t",
      "milestones": [
          {
              "summary": "Works effectively within established structures, following current best practices",
              "signals": [
                  "Is building proficiency in our PM practice and becoming comfortable with learning new skills",
                  "Able to develop comprehensice projects plans with assistance of seniors project managers",
                  "Closely monitors projects to ensure that they remain on track, meet deadlines, stay under budget, and develop according to plan",
                  "Is well-versed with project management methodologies and Microsoft Office",
                  "Actively listens, understands, and responds to clients and team members"
              ],
              "examples": []
          },
          {
              "summary": "Develops new instances for best practices, or minor improvements to existing practices and standards",
              "signals": [
                  "Focused on expanding experience and proficiency in our PM practice, establishing and promoting brand guidelines, best practices and standards",
                  "Develops a detailed project plan to monitor and track progress",
                  "Manages the relationship with the client and all stakeholders",
                  "Has a strong understanding of the fact that UX and Engineering use different terminology, have a different cadence to their work, provide different deliverables, might have different responses from the client, and even different definitions of work",
                  "Monitors client satisfaction",
                  "Creates and maintains comprehensive project documentation and presents it to the appropriate stakeholders",
                  "Able to create, manage and maitain agreements, budgets, scope of work, and timelines",
                  "Works within the given parameteres delivered from Sales, such as problem statetment, budget,.."
              ],
              "examples": []
          },
          {
              "summary": "Manages project plans of moderate complexity, mastering delivery",
              "signals": [
                  "Effectively leads and takes ownership of project from concept to completion, acting as the liaison between the project team and clients",
                  "Facilitates team through Agile practices, including daily SCRUMS, grooming and retrospectives",
                  "Manages changes to the project scope, budget and timeline using appropriate verification techniques",
                  "Delegates project tasks based on junior staff members' individual strengths, skill sets and experience levels",
                  "Measures project performance using appropriate tools and techniques",
                  "Participates and\/or drives feasibility studies and proposals for evaluation by appropriate key stakeholders",
                  "Serves as an internal quality control check for the project",
                  "Provides status reporting regarding project milestones, deliverables, dependencies, risks and issues, communicating across leadership"
              ],
              "examples": []
          },
          {
              "summary": "Develops complex project plans and guides other PM team members",
              "signals": [
                  "Defines success criteria and disseminate them to involved parties throughout project and program life cycle",
                  "Establishes practices, templates, policies, tools and partnerships to expand and mature the PM capabilities for the organization",
                  "Sets and continually manages project expectations while delegating and managing deliverable with team members and stakeholders",
                  "Guides team members about every aspect of the project so that the team members can understand their tasks fully and act on them efficiently",
                  "Keeps an eye of latest strategies, tools and terminologies used in project management worldwide"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our stack, deeply knowledgeable in several domains and sets strategic foundational direction for a PM team",
              "signals": [
                  "Guides and directs PM team members by providing direction to team and project success",
                  "Leverages constraints that exist for projects around resources, budget, time, quality and scope in order to meet project outcomes",
                  "Manages dilemmas and paradoxes as they occur throughout the project lifecycle by identifying and communicating trade-offs with key stakeholders",
                  "Seen as a leader and contributor in the broader technical side across the organization",
                  "Capability to track project benefits realisation and lessons learnt activities to feed into on-going improvements"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_TWO"] = {
      "milestone": "CHAPTER_TWO",
      "cohort": "PM",
      "category": "A",
      "displayName": "Plan",
      "description": "Comprehends the processes and activities to identify, define, combine, unify, and coordinate the various elements within PM such as scope, budget, timelines and resources\t",
      "milestones": [
          {
              "summary": "Works effectively to assist the business planning, lifecycle management, reporting and performance measurement systems",
              "signals": [
                  "Understands all the agreements, budgets,scope of work, and timeline",
                  "Creates and maintains comprehensive project documentation with guidance",
                  "Assists in the definition of project scope and objectives, involving all relevant stakeholders and ensuring technical feasibility"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively to support the business planning, lifecycle management, reporting and performance measurement systems\t",
              "signals": [
                  "Ensures that the client and project team work together to define, document, and estimate a scope of work that fits within the budget",
                  "Ensures whether any changes to scope and its estimates remain within the budget",
                  "Updates the resource forecasting tool for all members of the team, based on project needs and budget limits, on a consistent and timely basis",
                  "Monitors progress of the project against scope, quality, safety, time and cost baselines including approved changes with guidance",
                  "Maintain a high-level project schedule with major milestones, and makes that schedule visible and accessible to the project team and client with guidance",
                  "Monitors the billing schedule, and makes that schedule visible and accessible to the financial team and client"
              ],
              "examples": []
          },
          {
              "summary": "Designs and establishes the business planning, lifecycle management, reporting and performance measurement systems",
              "signals": [
                  "Develops a detailed project plan to monitor and track progress",
                  "Manages progress of the project against scope, quality, safety, time and cost baselines including approved changes",
                  "Categorizes needs versus wants",
                  "Ensures that changes are tangible, strategic and achievable",
                  "Creates and maintains a high-level project schedule with major milestones, and makes that schedule visible and accessible to the project team and client",
                  "Creates and maintains a billing schedule, and makes that schedule visible and accessible to the financial team and client",
                  "Ensures resource availability and allocation",
                  "Develops spreadsheets, diagrams and process maps to document needs"
              ],
              "examples": []
          },
          {
              "summary": "Leads and guides the business planning, lifecycle management, reporting and performance measurement systems",
              "signals": [
                  "Leads discussions to review and disposition scope change requests",
                  "Ensures that change fits with the project strategy and desired outcomes",
                  "Establishes a completion plan that includes all aspects of delivery of project outcomes across the entire project life cycle",
                  "Demonstrates ability to discuss the standard project process with the team and client, in order to ensure that timelines, schedules and milestones reflect the appropriate path for the project to follow",
                  "Ensures that team members have awareness and visibility into the amount of time they are resourced to the project each week"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our stack, deeply knowledgeable in several domains and sets strategic planning direction for a PM team",
              "signals": [
                  "Ensures that the project is adding to the strategic advantage of the client",
                  "Defends product integrity from misinformed decision making either externally or internally",
                  "Assists in dispute, negotiation, arbitration or litigation, as needed",
                  "Understands what it means to run a business-driven PM plan; from strategy through execution to the realization of business benefits; with the clients at the center of it all"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_THREE"] = {
      "milestone": "CHAPTER_THREE",
      "cohort": "PM",
      "category": "A",
      "displayName": "Risk Mitigation",
      "description": "Comprehends the ability to conduct risk planning, identification, analysis, and response planning and controlling risk on a project\t",
      "milestones": [
          {
              "summary": "Works effectively within established project risk, following quality polices, objectives and responsibilities to satisfy project requirements",
              "signals": [
                  "Determines which risks may affect the project and documents their characteristics with assistance of senior PM",
                  "Ability to understand and document potential consequences of risks as they occur",
                  "Documents how project will demonstrate quality compliance",
                  "Builds quality metrics and quality checklists with guidance"
              ],
              "examples": []
          },
          {
              "summary": "Develops and monitors risk mitigation with guidance",
              "signals": [
                  "Effectively determines which risks may affect the project and documents their characteristices with some assistance of senior PM",
                  "Conducts ongoing risk assessments with guidance",
                  "Monitors status of project risks with guidance",
                  "Audits quality requirements and results from quality control measurements with guidance"
              ],
              "examples": []
          },
          {
              "summary": "Performs risk mitigation to minimize project risks",
              "signals": [
                  "Oversses the risk identification and definition process",
                  "Ability to prioritize risks for further analysis or action by assessing their probabilities of occurence and impact",
                  "Develops options and actions to enhance opportunities and reduce threats to project objectives",
                  "Initiates risk response plans when necessary",
                  "Ensures that the client is aware of the risks and understands their consequences, along with the mitigation plans for each of the risks",
                  "Regurlay review quality metrics with the team",
                  "Establishes, updates, and utilizes key performance indicators"
              ],
              "examples": []
          },
          {
              "summary": "Develops and guides risk mitigation effectively, advocating for quality",
              "signals": [
                  "Develops guidance and direction on how the project risks will be managed throughout the project",
                  "Oversees and guides the risk analysis process and the development of risk responses",
                  "Links the outcomes to the organisational goals and the client's vision and mission statements through measurable key performance indicators and a review and assurance process",
                  "Maintains awareness and visibility of the risks to the client and team throughout the course of the project",
                  "Ensures audits of quality process are executed in accordance with quality management plan"
              ],
              "examples": []
          },
          {
              "summary": "Provides guidance and direction on project risk, fostering quality",
              "signals": [
                  "Expertly conducts all stages of risk mitigation--including planning, identification, analysis, and response",
                  "Drives and leads creative actions to enhance opportunities and reduce threats to project objectives",
                  "Deals with project risk proactively including providing advice and guidance on the identification of the factors that may affect the project and assurance of the timely resolution of novel and contentious issue",
                  "Clearly articulates the risks to the client, including their negative impact on the company's overall business",
                  "Identifies quality standards for use by the team that establish performance and quality expectations"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_FOUR"] = {
      "milestone": "CHAPTER_FOUR",
      "cohort": "PM",
      "category": "A",
      "displayName": "Information",
      "description": "Comprehends the effective exchanges of accurate, appropriate and relevant information with stakeholders\t",
      "milestones": [
          {
              "summary": "Actively listens, understands and responds to stakeholders",
              "signals": [
                  "Actively listens and understands stakeholders needs, interests, and influence for project success",
                  "Develops and adapts communication strategies with guidance"
              ],
              "examples": []
          },
          {
              "summary": "Disseminates information effectively",
              "signals": [
                  "Undertakes analysis, evaluation of options (as appropriate), and takes\/recommends actions",
                  "Matches level of information to stakeholder",
                  "Provides accurate and factual information",
                  "Develops and maintains project tracking, dashboards and information systems"
              ],
              "examples": []
          },
          {
              "summary": "Disseminates information effectively, egaging with stakeholders",
              "signals": [
                  "Engages with stakeholders proactively",
                  "Establishes regular interaction w\/ stakeholders, including formal and informal channels",
                  "Uses appropriate communications method for information diseeminated",
                  "Appropriately matches level of formality to meetings and audience",
                  "Able to effectively summarize key points and issues in a clear and concise manner",
                  "Regularly conducts follow-up with stakeholders"
              ],
              "examples": []
          },
          {
              "summary": "Ensures quality of information and guidance to proactive respond to stakeholders",
              "signals": [
                  "Engages with team members in developing reports, analysing issues, evaluating progress, and option analysis",
                  "Proactively responds to issues and concerns",
                  "Balances speed of provision of information against reliability of information",
                  "Seeks validation of information",
                  "Provides feedback on templates and guidelines including examples and methods based on experiences and lessons learned"
              ],
              "examples": []
          },
          {
              "summary": "Effectively manages high-level information to diverse audience, ensuring stakeholder engagement",
              "signals": [
                  "Evaluates, develops and execute responses to provide appropriate level of information to stakeholders and maintain their engagement throughout project life cycle",
                  "Builds processes and structures that ensure transfer of information as a whole that influence strategic decisions and produce foundations for new capabilities",
                  "Continually seeks new information to assess the effectiveness of the project strategy"
              ],
              "examples": []
          }
      ]
  }

  return trackList
}
