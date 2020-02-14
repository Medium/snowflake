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
    case 3: return 10
    case 4: return 20
    case 5: return 30
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.0',
  '20': '2.0',
  '40': '3.0',
  '60': '4.0',
  '80': '5.0',
  '110': '6.0',
  '140': '7.0',
  '180': '8.0',
  '220': '9.0',
  '270': '10.0',
  '320': '11.0',
  '370': '12.0',
  '420': '13.0',
  '470': '14.0',
  '520': '15.0',
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
|}

export const tracks: Tracks = {
  "CHAPTER_ONE":{
      "milestone": "CHAPTER_ONE",
      "cohort": "DEFAULT",
      "category": "A",
      "displayName": "Servant Leadership",
      "description": "Demonstrates the capacity to engage with stakeholders both internally and externally, and to develop strong interpersonal relationships with teams and clients to unlock their potential",
      "milestones": [
          {
              "summary": "Helps unblock individuals by creating a supportive and engaging environment",
              "signals": [
                  "Demonstrates an understanding of an individual's roles, goals, and interests",
                  "Demonstrates concern for the well-being of colleagues",
                  "Actively listens",
                  "Treats others with respect"
              ],
              "examples": []
          },
          {
              "summary": "Manages expectations across teams and focuses on building long-term relationships",
              "signals": [
                  "Uses an understanding of the organization's processes, systems and policies to engage with people",
                  "Assumes positive intent of others, approaching every interaction with kindness and good humor",
                  "Empathetically listens",
                  "Communicates difficult or negative messages in an honest, accurate, and respectful manner"
              ],
              "examples": []
          },
          {
              "summary": "Manages expectations and provides support for individuals and clients to perform at their highest capabilities",
              "signals": [
                  "Helps people develop and perform as highly as possible",
                  "Uses awareness and understanding of the organization's culture to implement change initiatives",
                  "Is able to deeply understand and empathize with others",
                  "Delivers persuasive and compelling messages"
              ],
              "examples": []
          },
          {
              "summary": "Advocates for people's needs, interests, and goals and proactively works to support and enhance growth",
              "signals": [
                  "Always looks to enhance the development of their team members in ways that unlock potential, creativity, and sense of purpose",
                  "Uses an understanding of the organization's culture and environment to develop and implement strategic plans, implement necessary changes, and resolve talent needs and issues",
                  "Is able to engage with others to seek input and advice when making a decision. Makes sure all impacted have the necessary information.",
                  "Provides visible leadership that \"walks the talk.\" Sets high performance standards for self, acting as a role model for the team"
              ],
              "examples": []
          },
          {
              "summary": "Leads, inspires, and serves others, enabling people to achieve their goals and full potential",
              "signals": [
                  "Focus on bringing their best self to your work, and making space for others to do so as well",
                  "Uses an understanding of complex relationships among organizational leaders to facilitate the strategy, implementation, and maintenance of initiatives proposed by other leaders",
                  "Uses storytelling to create a positive and engaging environment for teams and clients",
                  "Leverages relationships to best support and develop individuals"
              ],
              "examples": []
          }
      ]
  },"CHAPTER_TWO":{
      "milestone": "CHAPTER_TWO",
      "cohort": "DEFAULT",
      "category": "A",
      "displayName": "Coaching",
      "description": "Helps people develop their own independent thinking, guiding them through processes and facilitating learning",
      "milestones": [
          {
              "summary": "Helps individuals think through the likely impacts of alternative decisions",
              "signals": [
                  "Helps individuals think for themselves about possible impacts and solutions to a problem by asking open-ended questions",
                  "Demonstrates a positive outlook"
              ],
              "examples": []
          },
          {
              "summary": "Helps individuals accomplish challenging goals",
              "signals": [
                  "Shows confidence in others' abilities and a willingness to face challenges and solve problems",
                  "Helps people gain awareness of current situations",
                  "Demonstrates curiosity"
              ],
              "examples": []
          },
          {
              "summary": "Coaches people proactively, and guides people to realizations rather than providing the answer\t",
              "signals": [
                  "Understands what issues exist that may limit an individual's ability to perform the task or accomplish the objectives",
                  "Determines whether colleagues need help to remove barriers or can overcome these obstacles unaided"
              ],
              "examples": []
          },
          {
              "summary": "Coaches and guides all level of individuals to develop and enhance on-the-job performance, knowledge, or behavior",
              "signals": [
                  "Partners with others to help define actions based on one's abilities and knowledge",
                  "Supports people's progress, celebrates their wins, and encourages them to find new paths if their original plan of action does not work out as expected",
                  "Encourages creative thinking in colleagues who are tyring to address challenges or improve their performance"
              ],
              "examples": []
          },
          {
              "summary": "Empowers others to improve their performance, overcome challenges, and thrive at an optimal level",
              "signals": [
                  "Focuses on empowering their team members to discover solutions for themselves",
                  "Coaches senior leaders on creating positive working relationships with their teams and clients"
              ],
              "examples": []
          }
      ]
  },"CHAPTER_THREE":{
      "milestone": "CHAPTER_THREE",
      "cohort": "DEFAULT",
      "category": "A",
      "displayName": "Facilitation",
      "description": "Comprehends the ability to lead people through processes towards agreed-upon objectives in a manner that encourages participation, ownership, and creativity",
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
                  "Is able to effectively deal with and understand views opposing their own views and is open to criticism and learning",
                  "Is becoming comfortable in mediating escalated conflicts",
                  "Builds consensus among people and teams"
              ],
              "examples": []
          },
          {
              "summary": "Mediates escalated situations, empowers people, and resolves conflict\t",
              "signals": [
                  "Understands intrinsic motivations of the project team, as well as their individual capabilities. Is aware of differences between the two",
                  "Resolves and\/or mediates conflicts in a respectful, appropriate, and impartial manner",
                  "Takes time to understand how individuals and teams are performing and working together to deliver the project outcomes"
              ],
              "examples": []
          },
          {
              "summary": "Guides and manages individuals both internally and externally to ensure that the their objectives are met effectively, with clear thinking, good participation, and full buy-in from everyone who is involved",
              "signals": [
                  "Understands themselves and the individuals in the project team, what motivates them intrinsically as well as their own individual capabilities",
                  "Is able to facilitate difficult interactions among stakeholders to achieve outcomes",
                  "Is focused on the big picture"
              ],
              "examples": []
          },
          {
              "summary": "Leads people through processes towards agreed-upon objectives in a manner that encourages participation, ownership, and creativity",
              "signals": [
                  "Uses their understanding of individuals and teams to make the project strategy tangible to individuals and teams",
                  "Serves as a positive role model for productive conflict",
                  "Encourages productive and respectful task-related conflict, using it to facilitate change",
                  "Resolves complex organizational dysfunction, or persistent conflict at senior levels\t"
              ],
              "examples": []
          }
      ]
  },"CHAPTER_FOUR":{
      "milestone": "CHAPTER_FOUR",
      "cohort": "DEFAULT",
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
              "summary": "Mobilizes individuals to develop goals, execute plans, and deliver client value        ",
              "signals": [
                  "Creates a fun and energetic environment that promotes creativity",
                  "Validates ongoing work and sustains motivation",
                  "Establishes challenging, yet realistic, performance goals that tap into people's interests"
              ],
              "examples": []
          },
          {
              "summary": "Inspires others to a greater effort by setting an example in his\/her\/their own behavior of dedication",
              "signals": [
                  "Recognizes individual and team performance, even when things go wrong",
                  "Empowers a team to drive forward amidst uncertainty",
                  "Models excellence and enthusiasm for the work"
              ],
              "examples": []
          },
          {
              "summary": "Conveys confidence in others' capabilities and appeals to others' unique needs, interests, and goals to motivate them to achieve",
              "signals": [
                  "Empowers the project team and individuals. Expresses positive expectations of others regarding their abilities or potentials, even in challenging cases. Believes others want to and can learn",
                  "Ensures that the self-realization and practical needs of the project team are met"
              ],
              "examples": []
          },
          {
              "summary": "Enables and directs generation of energy \u2014 motivation to act \u2014 among members of the organization and clients",
              "signals": [
                  "Demonstrates the ability to use others as a sounding board for generating ideas and plans; acknowledges their expertise or perspective when asking for their opinions",
                  "Ability to find and use successes to celebrate progress towards the vision",
                  "Sets clear goals and a desired future state that is compelling and realistic for stakeholders"
              ],
              "examples": []
          }
      ]
  },"PLANNING":{
      "milestone": "PLANNING",
      "cohort": "DEFAULT",
      "category": "B",
      "displayName": "Planning and Coordination",
      "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
      "milestones": [
          {
              "summary": "Effectively organizes and manages delivery of individual tasks",
              "signals": [
                  "Commits to and completes tasks within expected time frame, holding themselves accountable",
                  "Delivers tightly-scoped projects efficiently",
                  "Is learning how to break down tasks and accurately estimate tasks"
              ],
              "examples": []
          },
          {
              "summary": "Effectively organizes and manages delivery of small projects",
              "signals": [
                  "Is mastering the ability to break down tasks, plan, estimate, and cut scope in order to deliver on time",
                  "Researches and considers alternative approaches",
                  "Defines and hits interim milestones",
                  "Prioritizes in alignment with company goals",
                  "Consistently and accurately estimates the time a given task will take"
              ],
              "examples": []
          },
          {
              "summary": "Effectively organizes and manages delivery a small team to deliver a project",
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
              "summary": "Effectively organizes and manages delivery of complex and\/or multi-stakeholder projects on a large team",
              "signals": [
                  "Can successfully plan and execute projects involving multiple stakeholders and complex requirements, prioritizing strategically",
                  "Manages dependencies on other projects and teams",
                  "Leverages recognition of repeated project patterns",
                  "Reduces complexity and prioritizes the most important work for the company",
                  "Helps define roadmaps and set vision for long-term projects",
                  "Often \"sees around corners\" and addresses issues before they become critical"
              ],
              "examples": []
          },
          {
              "summary": "Facilitates major internal and external projects delivered by multiple teams",
              "signals": [
                  "Plans and executes large, complex projects with interdependencies across teams and systems",
                  "Leads teams of teams, and coordinates effective cross-functional collaboration",
                  "Considers external constraints, opportunities, and business objectives when planning",
                  "Can successfully manage (and adjust\/update plans for) large efforts that start out with unclear or competing goals",
                  "Creates plans that define the direction of the whole team moving forward",
                  "Demonstrates the ability to deal with any project or initiative that is critical to the future of the company"
              ],
              "examples": []
          }
      ]
  },"COLLABORATION":{
      "milestone": "COLLABORATION",
      "cohort": "DEFAULT",
      "category": "B",
      "displayName": "Communication and Collaboration",
      "description": "Focuses on teamwork, communication skills, asking for and giving feedback, collaboration, and documentation",
      "milestones": [
          {
              "summary": "Communicates and collaborates effectively with close stakeholders when called upon, and incorporates constructive feedback",
              "signals": [
                  "Communicates project status clearly and effectively",
                  "Is learning to work collaboratively on a team and communicate in meetings",
                  "Proactively asks questions and reaches out for help to get unblocked",
                  "Voices concerns or need for clarification to their project teams and, if necessary, discipline leaders or POD members",
                  "Is developing the ability to communicate complicated concepts simply and successfully to a non-technical audience",
                  "Accepts feedback graciously and learns from experience"
              ],
              "examples": []
          },
          {
              "summary": "Communicates and collaborates with the wider team appropriately, focusing on timeliness and good quality information",
              "signals": [
                  "Communicates clearly at team and client-facing meetings, escalating blockers quickly, clarifying requirements, and sharing assumptions",
                  "Collaborates professionally with teammates and peers",
                  "Adapts their message for a diverse audience, choosing appropriate tools and approach for accurate and timely communication",
                  "Seeks feedback to improve and receives it well. Gives timely, helpful feedback to peers",
                  "Makes effective presentations to smaller audiences"
              ],
              "examples": []
          },
          {
              "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
              "signals": [
                  "Communicates technical issues and decisions clearly and proactively to a cross-functional audience, sharing bad news quickly as well",
                  "Builds cross-functional relationships with project team, chapter members, and clients",
                  "Engages in productive dialog even when there are conflicting views, both inside and outside the team. Seeks to understand other points of viewue",
                  "Mastering ability to communicate complicated concepts simply and successfully to ensure understanding and appropriate action. Makes effective presentations to larger audiences"
              ],
              "examples": []
          },
          {
              "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
              "signals": [
                  "Communicates complex concepts and issues and easily makes compelling presentations to sophisticated audiences",
                  "Works with key stakeholders effectively to solve problems and make decisions",
                  "Demonstrates the ability to always share status with all stakeholders, and proactively remedy communication issues",
                  "Holds others and themselves accountable for their commitments and results by receiving and giving feedback",
                  "Spurs and facilitates meaningful discussion around complex issues",
                  "Offers insightful perspectives"
              ],
              "examples": []
          },
          {
              "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets default practices for others",
              "signals": [
                  "Comfortably communicates and presents complex issues to diverse audiences inside and outside the company",
                  "Coordinates communication among teams and stakeholders, including the right people at the right times",
                  "Is relied upon as one of the best communicators of complicated subjects, trade-offs, and decisions",
                  "Holds others and themselves accountable for their commitments and results by providing thoughtful feedback and openly receiving feedback",
                  "Clearly communicates company-level objectives and how they relate to experiments and initiatives",
                  "Proactively identifies and remedies communication gaps and issues"
              ],
              "examples": []
          }
      ]
  },"CLIENT_VALUE":{
      "milestone": "CLIENT_VALUE",
      "cohort": "DEFAULT",
      "category": "B",
      "displayName": "Client Value",
      "description": "Is focused on delivering repeatable value to our clients by ensuring excellent quality products and services internally and\/or externally",
      "milestones": [
          {
              "summary": "Delivers, with guidance, consistently quality work focused on highest value to the client and project",
              "signals": [
                  "Delivers consistently good outcomes within project scope and following quality standards",
                  "Understands how tasks impact and fit within the broader scope and objectives of the final product or service",
                  "Shows a willingness to do what it takes to achieve the desired results",
                  "Writes clear comments and documentation"
              ],
              "examples": []
          },
          {
              "summary": "Able to optimize work to deliver for client value as defined by the team",
              "signals": [
                  "Works efficiently and puts in the time and effort necessary to deliver great outcomes",
                  "Realizes when progress toward desired results is stalling and takes action to get back on track",
                  "Accepts difficult tasks and gets right to work",
                  "Devotes time to find the most effective ways to meet the commitments",
                  "Is focused on producing high-quality work"
              ],
              "examples": []
          },
          {
              "summary": "Helps others make good choices about how to optimize work to deliver client value",
              "signals": [
                  "Helps others identify the desired results of their assignments",
                  "Gives thoughtful feedback as a domain expert",
                  "Helps others focus on achieving results, supporting them when facing problems and issues",
                  "Holds others accountable for their commitments, results, and successful client outcomes",
                  "Required for eligibility to be a Project Owner",
                  "Required eligibility to be a Consultant"
              ],
              "examples": []
          },
          {
              "summary": "Advocates for and models how to be proactive to ensure client and team success",
              "signals": [
                  "Helps others maximize their potential through mentoring and coaching",
                  "Focuses on high-level client relationships and satisfaction",
                  "Anticipates unusual issues and problems, taking steps to minimize their impacts on results",
                  "Holds institutional knowledge",
                  "Required eligibility to be a Project Advocate",
                  "Required eligibility to be a Service Line Lead"
              ],
              "examples": []
          },
          {
              "summary": "Enables and encourages the entire organization to deliver client value as a central part of our work",
              "signals": [
                  "Defines policies for the organization that encourage quality work and maximize client value",
                  "Identifies and eliminates single points of failure throughout the organization",
                  "Secures time and resources from executive leadership to support great quality",
                  "Connects clients to strategic and technical solutions for complex business challenges"
              ],
              "examples": []
          }
      ]
  },"INITIATIVE":{
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
                  "Typically relies on senior teammates to set project goals and break down larger projects into discrete tasks",
                  "Asks leadership team probing questions"
              ],
              "examples": []
          },
          {
              "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
              "signals": [
                  "Regularly leads smaller projects or tasks, but relies on experienced teammates when working on major project investments",
                  "Often leans on others to help problem-solve project ambiguity",
                  "Proactively takes on executable tasks when blocked elsewhere. Seek help to get unblocked",
                  "Often relies on others to help cut scope when necessary",
                  "Consistently delivers on reasonably well-defined projects",
                  "Is becoming more comfortable defining project goals for more ambiguous projects"
              ],
              "examples": []
          },
          {
              "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
              "signals": [
                  "Regularly leads multiplee, large projects or initiatives",
                  "Takes ownership of tasks that nobody owns or wants",
                  "Seeks out others involved in a situation to learn their perspectives",
                  "Leaves things better than when they found them",
                  "Is comfortable with ambiguity and can be relied on to remove blockers when necessary",
                  "Demonstrates the ability to handle major tasks from definition through execution with consistently successful outcomes"
              ],
              "examples": []
          },
          {
              "summary": "Effects change that has a substantial positive impact on the organization or a major product\/service impact",
              "signals": [
                  "Develops and tests new ways to solve systemic issues",
                  "Exemplifies grit and determination in the face of persistent obstacles",
                  "Instigates major new company-wide initiatives",
                  "Seeks creative and innovative ways to improve and develop what they are doing",
                  "Can effectively cope with change"
              ],
              "examples": []
          },
          {
              "summary": "Effects change that has a substantial positive impact on the whole company",
              "signals": [
                  "Champions and pioneers new approaches and ideas to solve new classes of problems",
                  "Galvanizes the entire company and garners buy-in for new strategies",
                  "Improves complex organizational processes",
                  "Embraces ambiguity and a growth mindset"
              ],
              "examples": []
          }
      ]
  },"COMPLEXITY":{
      "milestone": "COMPLEXITY",
      "cohort": "DEFAULT",
      "category": "C",
      "displayName": "Maturity",
      "description": "Strengthens Palantir's values to create and collaborate in open, diverse, and inclusive environments",
      "milestones": [
          {
              "summary": "Is available and present on current teams, and works to contribute positively to company culture",
              "signals": [
                  "Is learning how to integrate complicated information to identify strategies and solutions with the assistance of teammates and senior colleagues",
                  "Breaks down complicated problems or concepts into clear and manageable components",
                  "Effectively deals with and understands opposing views and is open to learning from feedback"
              ],
              "examples": []
          },
          {
              "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
              "signals": [
                  "Quickly integrates complicated information to identify strategies and solutions with the assistance of teammates and senior colleagues",
                  "Demonstrates keen insights into situations",
                  "Assimilates large amounts of information",
                  "Responds flexibly and strategically to ongoing change"
              ],
              "examples": []
          },
          {
              "summary": "Contributes to improving team relatedness and helps build a culture of lending support",
              "signals": [
                  "Identifies and deals with complicated situations to provide the best solutions",
                  "Demonstrates a sense of agency",
                  "Adopts a proactive approach instead of a reactive one",
                  "Demonstrates critical inquiry",
                  "Promotes exploration and experimentation as a response to uncertainty"
              ],
              "examples": []
          },
          {
              "summary": "Creates an environment that provides people with autonomy, mastery, and purpose, and lifts everyone up",
              "signals": [
                  "Seeks to cultivate innovation in the face of uncertainty, both internally and externally",
                  "Offers new perspectives to overcome complexity constraints",
                  "Selects systems thinking approaches to fit with the level of complexity and the nature of the environment",
                  "Focuses on the core message or desired result of a complex plan or idea",
                  "Deals with change in an open and collaborative way to facilitate a beneficial resolution",
                  "Simplifies complexities by pulling together ideas, issues, and observations into a single concept or a clear presentation"
              ],
              "examples": []
          },
          {
              "summary": "Lives the company values, promotes a healthy work environment, and defines policies that support cohesion between teams",
              "signals": [
                  "Builds the capacity in other people to cope with complexity",
                  "Leads others through change",
                  "Has a holistic vision ",
                  "Creates an organizational framework that facilitates a positive work environment",
                  "Helps others to move through the change curve, from resistors to adopters",
                  "Has engergy and engergizes those around them"
              ],
              "examples": []
          }
      ]
  },"MATURITY":{
      "milestone": "MATURITY",
      "cohort": "DEFAULT",
      "category": "C",
      "displayName": "Complexity",
      "description": "Is able to deal with volatility, uncertainty, ambiguity, and an increasing rate of change in the Complex domain when the outcome is emergent",
      "milestones": [
          {
              "summary": "Identifies complicated situations with guidance, following best practices",
              "signals": [
                  "Learns and exhibits Palantir core values: collaboration, bringing out the best in each other, curiosity, thinking ahead, and accessibility",
                  "Treats colleagues and clients with respect",
                  "Objectively evaluates whether they've met their goals",
                  "Takes responsibility for their own words and actions"
              ],
              "examples": []
          },
          {
              "summary": "Integrates complicated ideas and approaches with guidance, following best practices",
              "signals": [
                  "Brings their best self to work and makes space for others to do so as well",
                  "Trusts teammates, assumes good intent, and is able to disagree and commit",
                  "Finds ways to ramp up and engage new hires quickly",
                  "Is able to deliver their work despite inevitable distractions",
                  "Exhibits a growth mindset with regard to feedback"
              ],
              "examples": []
          },
          {
              "summary": "Handles complicated situations and focuses on learning and creativity in the organization",
              "signals": [
                  "Is aware of their own strengths and weaknesses",
                  "Embraces big challenges as opportunities for growth and learning",
                  "Uses their position to raise difficult issues on behalf of others",
                  "Allows everyone the opportunity to contribute, regardless of their title or how many years they've been with the company",
                  "Is able to change direction quickly based on shifting company and project needs",
                  "Demonstrates humility and patience"
              ],
              "examples": []
          },
          {
              "summary": "Identifies and deals with complex situations by fostering innovation",
              "signals": [
                  "Goes above and beyond, serving the team without complaint",
                  "Implements concrete actions to significantly improve team inclusivity",
                  "Builds consensus for decisions",
                  "Devotes significant time to helping outside of direct responsibilities",
                  "Helps individuals maintain resilience in periods of change"
              ],
              "examples": []
          },
          {
              "summary": "Helps and supports others to deal with complexity by adapting and learning continuously",
              "signals": [
                  "Demonstrates the ability to de-escalate conflicts and build consensus between team members about technical matters",
                  "Holds individuals, teams, and leadership accountable to Palantir's values",
                  "Sets the tone, policy, and goals around maintaining an open, diverse, and inclusive company",
                  "Models maturity and cultivates similar development in others"
              ],
              "examples": []
          }
      ]
  },"LEARNING":{
      "milestone": "LEARNING",
      "cohort": "DEFAULT",
      "category": "D",
      "displayName": "Learning and Career Development",
      "description": "Provides strategic support to individuals to help them build the careers they want",
      "milestones": [
          {
              "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
              "signals": [
                  "Shares career and professional development options and areas of interest informally",
                  "Shares opportunities for improvements and recognizes achievements for themselves and others",
                  "Collects and delivers feedback"
              ],
              "examples": []
          },
          {
              "summary": "Supports and provides mentorship for one person",
              "signals": [
                  "Helps a group member have an appropriate role on the team",
                  "Offers effective career advice to group members, without being prescriptive",
                  "Creates space for people to talk through challenges",
                  "Provides help on how to have difficult conversations",
                  "Works closely with another to help them learn new skills or continue to improve skills"
              ],
              "examples": []
          },
          {
              "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
              "signals": [
                  "Discusses career paths and helps create plans for others' personal and professional growth",
                  "Advocates for aligning people with appropriate roles within organization",
                  "Works with POD leads to elevate emerging leaders",
                  "May participate in the hiring process meeting with candidates and offering thoughts to the discipline\/hiring lead",
                  "Promotes and exhibits psychological safety"
              ],
              "examples": []
          },
          {
              "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
              "signals": [
                  "Promotes and exhibits psychological safety, facilitation, and collaboration",
                  "Ensures all group members' roles are meeting their career needs (e.g., PODs, chapter)",
                  "Initiates and oversees the hiring process once approval is given for a new hire",
                  "Helps the team plan and implement discipline-related learning activities"
              ],
              "examples": []
          },
          {
              "summary": "Supports the development of a significant part of the team and is widely viewed as an advisor",
              "signals": [
                  "Works with others on their individual goals to understand how those goals align both with project work and Palantir service lines",
                  "Identifies leadership training opportunities for senior leadership",
                  "Pushes everyone to be as good as they can be, with empathy",
                  "Provides coaching to group leaders",
                  "Supports and develops senior leaders",
                  "Serves as an advisor to company leaders"
              ],
              "examples": []
          }
      ]
  },"MENTORSHIP":{
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
                  "Open to receiving feedback",
                  "Act as an onboarding buddy",
                  "Finds ways to ramp up and engage new team members"
              ],
              "examples": []
          },
          {
              "summary": "Informally mentors individuals on an ad hoc basis and contributes to Palantir's knowledge base",
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
                  "Finds approaches that work best for a team member's personality",
                  "Brings resources, critical readings, opportunities, or experiences to the attention of others",
                  "Acts as a sounding board for peers and more junior team members"
              ],
              "examples": []
          },
          {
              "summary": "Actively mentors people by providing knowledge, advice, and resources",
              "signals": [
                  "Defines an entire curriculum for a discipline",
                  "Draws positive attention to well-modeled mentor and teaching behaviors",
                  "Provides discipline support",
                  "Exhibits enthusiasm in sharing knowledge and expertise",
                  "Demonstrates a positive attitude and acts as a positive role model",
                  "Helps individuals find new and challenging opportunities within the organization"
              ],
              "examples": []
          },
          {
              "summary": "Instills and promotes a culture of learning and development within the entire team",
              "signals": [
                  "Empowers team members to develop themselves",
                  "Models productive and healthy mentor relationships",
                  "Is open to experimenting and learning practices that are new to the field",
                  "Helps individuals to move out their comfort zone"
              ],
              "examples": []
          }
      ]
  },"INFLUENCE":{
      "milestone": "INFLUENCE",
      "cohort": "DEFAULT",
      "category": "D",
      "displayName": "Influence",
      "description": "Impacts and promotes Palantir's culture and values positively through leadership and representation of our brand",
      "milestones": [
          {
              "summary": "Represents Palantir internally and externally in a manner aligned with Palantir's values",
              "signals": [
                  "Has project\/team-level impact",
                  "Shares personal and organizational successes with their network",
                  "Communicates genuine and honest excitement about their work externally",
                  "Represents their team well to others in the company"
              ],
              "examples": []
          },
          {
              "summary": "Represents Palantir well internally and externally in a manner aligned with Palantir's values and takes simple actions that positively influence groups of people",
              "signals": [
                  "Takes meaningful action to introduce people to Palantir",
                  "Represents Palantir appropriately and is well aligned with our core values",
                  "Finds ways to help teammates achieve their goals. Inspires teamwork",
                  "Shares their experience and expertise to help others grow",
                  "Listens to everyone's opinion, and encourages people to speak up"
              ],
              "examples": []
          },
          {
              "summary": "Works hard to positively influence large groups of people",
              "signals": [
                  "Acts as a highly-visible mentor or participant in organizations other than Palantir",
                  "Builds fruitful partnerships with clients",
                  "Uses the advice process to make decisions",
                  "Identifies and advocates for foundational work and practice improvements in their discipline",
                  "Starts to broaden their impact. Considers effects of their work on other team and identifies and helps resolves team issues",
                  "Builds network of influence to support project outcomes"
              ],
              "examples": []
          },
          {
              "summary": "Establishes Palantir as an agile, innovative company and workplace to the whole industry",
              "signals": [
                  "Establishes themself as an industry thought leader who attracts talent",
                  "Educates others about the work of the team",
                  "Leads initiatives across disciplines, even outside their core expertise. Coordinates large and complex projects, including with outside partners",
                  "Contributes to the foundational good of their discipline, defining patterns and plays",
                  "Effectively considers effects of their work on other teams and identifies and helps resolves team issues",
                  "Incredibly knowledgeable in their area of experitse, often to a degree recognized far beyond our walls"
              ],
              "examples": []
          },
          {
              "summary": "Serve as a strategic advisor to have positive impact in the industry",
              "signals": [
                  "Delivers key messages to broad, mainstream audiences",
                  "Influences industry thought leaders to speak favorably about Palantir",
                  "Has high impact on company's trajectory",
                  "Drives foundational work benefitting their discipline and entire organization",
                  "Serves as a strategic advisor to company leaders and is a positive and influential leader across the entire organization"
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
  {key: 'FRONTEND', label: 'Front-end Development'},
  {key: 'PM', label: 'Project Management'},
  {key: 'UX', label: 'User Experience Design'},
  {key: 'UI', label: 'User Interface Design'},
]
/* Get the title data */
export const titles = [
    {
        "label": "Engineer I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "Engineering"
    },
    {
        "label": "Engineer II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "Engineering"
    },
    {
        "label": "Engineer III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "Engineering"
    },
    {
        "label": "Engineer IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "Engineering"
    },
    {
        "label": "Engineer V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Engineer I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Engineer II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "Engineering"
    },
    {
        "label": "Technical Architect I",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "Engineering"
    },
    {
        "label": "Technical Architect II",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Technical Architect I",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Technical Architect II",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Technical Architect III",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "Engineering"
    },
    {
        "label": "Front-End Developer, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "Front-end Development"
    },
    {
        "label": "Front-End Developer, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "Front-end Development"
    },
    {
        "label": "Front-End Developer, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "Front-end Development"
    },
    {
        "label": "Front-End Developer, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "Front-end Development"
    },
    {
        "label": "Front-End Developer, V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Front-End Developer, I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Front-End Developer, II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "Front-end Development"
    },
    {
        "label": "Technical Architect I",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "Front-end Development"
    },
    {
        "label": "Technical Architect II",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Technical Architect I",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Technical Architect II",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Technical Architect III",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "Front-end Development"
    },
    {
        "label": "Web Strategist, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "User Experience Design"
    },
    {
        "label": "Web Strategist, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "User Experience Design"
    },
    {
        "label": "Web Strategist, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "User Experience Design"
    },
    {
        "label": "Web Strategist, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "User Experience Design"
    },
    {
        "label": "Web Strategist, V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. Strategist, I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. Strategist II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "User Experience Design"
    },
    {
        "label": "UX Architect, I",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "User Experience Design"
    },
    {
        "label": "UX Architect, II",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. UX Architect, I",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. UX Architect, II",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. UX Architect, III",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "User Experience Design"
    },
    {
        "label": "Designer, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "User Interface Design"
    },
    {
        "label": "Designer, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "User Interface Design"
    },
    {
        "label": "Designer, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "User Interface Design"
    },
    {
        "label": "Designer, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "User Interface Design"
    },
    {
        "label": "Designer, V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. Designer, I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. Designer, II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "User Interface Design"
    },
    {
        "label": "UX Architect, I",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "User Interface Design"
    },
    {
        "label": "UX Architect, II",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. UX Architect, I",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. UX Architect, II",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. UX Architect, III",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "User Interface Design"
    },
    {
        "label": "Project Manager, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "Project Management"
    },
    {
        "label": "Project Manager, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "Project Management"
    },
    {
        "label": "Project Manager, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "Project Management"
    },
    {
        "label": "Project Manager, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "Project Management"
    },
    {
        "label": "Project Manager, V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "Project Management"
    },
    {
        "label": "Sr. Project Manager, I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "Project Management"
    },
    {
        "label": "Sr. Project Manager, II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "Project Management"
    },
    {
        "label": "Sr. Project Manager, III",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "Project Management"
    },
    {
        "label": "Program Mgr, I",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "Project Management"
    },
    {
        "label": "Program Mgr, II",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "Project Management"
    },
    {
        "label": "Program Mgr, III",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "Project Management"
    },
    {
        "label": "Sr. Program Mgr, I",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "Project Management"
    },
    {
        "label": "Specialist, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "Management"
    },
    {
        "label": "Specialist, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "Management"
    },
    {
        "label": "Specialist, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "Management"
    },
    {
        "label": "Specialist, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "Management"
    },
    {
        "label": "Manager, I",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "Management"
    },
    {
        "label": "Manager, II",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "Management"
    },
    {
        "label": "Manager, III",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "Management"
    },
    {
        "label": "Manager, IV",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "Management"
    },
    {
        "label": "Sr. Manager, I",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "Management"
    },
    {
        "label": "Sr. Manager, II",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "Management"
    },
    {
        "label": "Director, I",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "Management"
    },
    {
        "label": "Director, II",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "Management"
    }
]

export const eligibleTitles = (milestoneMap: MilestoneMap, cohort: string): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)
  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints-50 <= title.maxPoints)
                             && (title.cohort === cohort))
    .map(title => title.label)
}

export const trackMap = (trackList: object[], cohort: string): object[] => {
  switch (cohort) {
    case 'Management':
      return defaultTracks(trackList)
    case 'Engineering':
      return engineeringTracks(trackList)
    case 'Front-end Development':
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
                  "Demonstrates an understanding of individuals' roles, goals, and interests",
                  "Demonstrates concern for the well-being of people",
                  "Actively listens",
                  "Treats people with respect"
              ],
              "examples": []
          },
          {
              "summary": "Manages expectations across teams and focuses on building long-term relationships",
              "signals": [
                  "Uses an understanding of the organization's processes, systems and policies to engage with colleagues",
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
                  "Is able to deeply understand and empathize with others",
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
                  "Provides visible leadership that \"walks the talk.\"  Sets high performance standards for self, acting as a role model for the team"
              ],
              "examples": []
          },
          {
              "summary": "Leads, inspires and servers others, enabling people to achieve their goals and full potential",
              "signals": [
                  "Focus on bringing their best self to your work, and making space for others to do so as well",
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
      "description": "Helps people to develop their own independent thinking, guiding them through processes and facilitating learning",
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
                  "Shows confidence in other's ability and willingness to face challenges and solve problems",
                  "Helps people to gain awareness of current situations",
                  "Demonstrates curiosity"
              ],
              "examples": []
          },
          {
              "summary": "Coaches people proactively, and guides people to realizations rather than providing the answer\t",
              "signals": [
                  "Demonstrates the ability to understand what issues exist that limit individual's ability to perform the task or accomplish the objectives",
                  "Determines whether people need help to remove barriers or if they are able to tackle challenges by themselves"
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
              "summary": "Empowers and engages with others to help them improve their performance and overcome challenges to thrive at an optimal level based on their own abilities, skills, and knowledge",
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
      "description": "Comprehends the ability to lead people through processes towards agreed-upon objectives in a manner that encourages participation, ownership, and creativity",
      "milestones": [
          {
              "summary": "Helps individuals resolve difficult issues, promoting an inclusive environment",
              "signals": [
                  "Actively seeks views from a range of colleagues to help gain understanding",
                  "Contributes to creating an inclusive environment"
              ],
              "examples": []
          },
          {
              "summary": "Helps people collectively move through a process",
              "signals": [
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
              "summary": "Guides and manages individuals both internally and externally to ensure that the their objectives are met effectively, with clear thinking, good participation, and full buy-in from everyone who is involved",
              "signals": [
                  "Understands themselves and the individuals in the project team, what drives and motivates them personally, and their individual capabilities",
                  "Is able to facilitate difficult interactions among stakeholders to achieve outcomes",
                  "Is focused on the big picture"
              ],
              "examples": []
          },
          {
              "summary": "Leads people through processes towards agreed-upon objectives in a manner that encourages participation, ownership, and creativity",
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
              "summary": "Fosters enthusiasm and common purpose among colleagues",
              "signals": [
                  "Contributes to generating commitment in individuals and the team",
                  "Speaks positively and enthusiastically about the organization's products\/services and future direction"
              ],
              "examples": []
          },
          {
              "summary": "Mobilizes individuals to develop goals, execute plans, and deliver client value        ",
              "signals": [
                  "Creates a fun and energetic environment that promotes creativity",
                  "Validates ongoing work and sustains motivation",
                  "Establishes challenging, yet realistic, performance goals that tap into people's interests"
              ],
              "examples": []
          },
          {
              "summary": "Inspires others to a greater effort by setting an example in his\/her\/their own behavior of dedication",
              "signals": [
                  "Recognizes individual and team performance, even when things go wrong",
                  "Empowers a team to drive forward amidst uncertainty",
                  "Models excellence and enthusiasm for the work"
              ],
              "examples": []
          },
          {
              "summary": "Conveys confidence in others' capabilities and appeals to others' unique needs, interests, and goals to motivate them to achieve",
              "signals": [
                  "Empowers the project team and individuals. Expresses positive expectations of others regarding their abilities or potentials, even in challenging cases. Believes others want to and can learn",
                  "Ensures that the self-realization and practical needs of the project team are met"
              ],
              "examples": []
          },
          {
              "summary": "Enables and directs generation of energy \u2014 motivation to act \u2014 among members of the organization and clients",
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
      "description": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas        ",
      "milestones": [
          {
              "summary": "Works effectively within established structures, following current best practices",
              "signals": [
                  "Is building proficiency with our tech stack and becoming comfortable with learning new technologies and skills",
                  "Has experience with development best practices, Palantir's chosen technology stack, web accessibility, and web development frameworks",
                  "Is able to perform assigned tasks and tickets with occasional assistance",
                  "Is able to hlep estimate tickets while working on refining estimation skills"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively within established structures, focusing on expanding experience and proficiency",
              "signals": [
                  "Focuses on expanding experience and proficiency in our code base, with solid understanding of relevant areas",
                  "Is well-versed with development best practices, Palantir's chosen technology stack, web accessibility, and core development tools",
                  "Able to perform assigned tasks and tickets close to estimated time with minimal assistance",
                  "Learns new areas of code base and new tech very quickly",
                  "Is able to provide reliable estimates for tickets with context"
              ],
              "examples": []
          },
          {
              "summary": "Able to design technical solutions of moderate complexity",
              "signals": [
                  "Independently scopes and implements solutions for their project\/team",
                  "Is proficient in all relevant technical skills, and is able to move quickly. Maintains awareness of industry trends and tools",
                  "Contributes to open source Work",
                  "Demonstrates the ability to come up with solid technical solutions to ambiguous or open-ended problems",
                  "Often gives support to others in their areas of strongest skill",
                  "Accurately estimates ticketed work"
              ],
              "examples": []
          },
          {
              "summary": "Builds complex, technical solutions that pioneer best practices for other engineers, or multi-system services",
              "signals": [
                  "Has a deep understanding of our architecture and how their domain fits within it. Systematically thinks through potential design impacts on other teams and the company",
                  "In an expert in our processes, also helps to define them. Keeps tests up to date",
                  "Independently scopes, designs, and delivers solutions for large, complex challenges",
                  "Debugs expertly within their primary focus area",
                  "Provides oversight, coaching, and guidance through code and design reviews",
                  "Incredibly knowledgeable in their aarea of expertise, often to a degree that is recogized far beyond our walls"
              ],
              "examples": []
          },
          {
              "summary": "Is considered an expert in multiple areas of our stack, deeply knowledgeable in several domains and sets strategic direction for the engineering team",
              "signals": [
                  "Is a primary expert in multiple areas of our technology stack, incredibly knowledgeable in several domains",
                  "Designs and builds industry-leading techniques to solve complex problems",
                  "Anticipates technical challenges, thoroughly explores alternatives and trade-offs",
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
      "description": "Develops expertise and proficiency in developing and supporting our code base, with solid understanding of relevant areas        ",
      "milestones": [
          {
              "summary": "Learning the ropes of our tech stack as well as our development practices",
              "signals": [
                  "Writes code that is sometimes production-ready, but usually requires iteration before shipping",
                  "Is becoming comfortable working with one or two specific disciplines",
                  "Receives and integrates feedback from code reviews to ship high-quality code",
                  "Participates in code reviews and technical design",
                  "Receives and incorporates feedback from PR reviews",
                  "Performs small PR reviews around functional behavior"
              ],
              "examples": []
          },
          {
              "summary": "Often writes production-ready code. Code reviews are sometimes perfect, but sometimes require a bit of explaining and effort from reviewers",
              "signals": [
                  "Writes code that usually ships promptly by receiving and successfully integrating critical input from code reviews. Work rarely needs to be rewritten before shipping",
                  "Follows style guides",
                  "Ships maintainable code that works and is understandable by teammates",
                  "Is becoming comfortable diving in and making changes to many areas of code, not just a single area of code",
                  "Provides helpful, timely code reviews",
                  "Is able to perform code audits"
              ],
              "examples": []
          },
          {
              "summary": "Writes production-ready code every day. Is beginning to master parts of our tech stack while also teaching others",
              "signals": [
                  "Consistently delivers code that sets the standard for quality, security, and maintainability",
                  "Understands large swaths of the code base with a deep knowledge and ability to \"reach in and touch the right levers.\" Able to move rapidly as a result",
                  "Writes consistently reliable code, so that input from code reviewers is high-level only",
                  "Provides code review feedback that is sought after, respected, and often instructional to others",
                  "Writes meaningful code reviews",
                  "Sets the standards for performing code audits"
              ],
              "examples": []
          },
          {
              "summary": "Possesses the development skills and stack expertise necessary to build our product and gives technical support to others on a daily basis",
              "signals": [
                  "Has mastered the skills necessary to ship quickly",
                  "Has built mastery in some relevant technical skills; good understanding of full stack",
                  "Provides mentorship and technical guidance to more junior teammates",
                  "Writes highly insightful, comprehensive code reviews"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert, is deeply knowledgeable in several domains, and sets strategic developing direction for the engineering team",
              "signals": [
                  "Is capable of building an entire complex product from scratch and requires significant R&D effort",
                  "Is seen as a leader who advances the state of the art and a contributor to the broader technical community",
                  "Demonstrates the ability to resolve technical problems without little context",
                  "Constantly learning new technologies, can navigate and make legacy code maintainable"
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
      "description": "Develops expertise and proficiency in DevOps        ",
      "milestones": [
          {
              "summary": "Works effectively within established DevOps practices, following current best practices",
              "signals": [
                  "Is building proficiency in creating solutions using tools and automation to improve operations",
                  "Understands common software development tools and processes, including version control, issue tracking, and continuous build"
              ],
              "examples": []
          },
          {
              "summary": "Develops new instances of existing practices, with assistance from senior engineers",
              "signals": [
                  "Focuses on expanding experience and proficiency in DevOps practices, with solid understanding of operating systems",
                  "Understands web application development, server deployment and upkeep, and general networking practices",
                  "Modifies existing software to correct errors with guidance",
                  "Supports and improves our tools for continuous integration, automated testing, and release management with guidance"
              ],
              "examples": []
          },
          {
              "summary": "Designs standalone systems of moderate complexity",
              "signals": [
                  "Enhances and streamlines operational processes through automation and integration without guidance",
                  "Deploys and administers server-hosted software solutions",
                  "Modifies existing software to correct errors, adapt to new hardware, or improve performance",
                  "Is able to debug problems throughout the stack"
              ],
              "examples": []
          },
          {
              "summary": "Designs complex solutions to take advantage of opportunities and new technologies, collaboratively working with the engineering team",
              "signals": [
                  "Analyzes user needs and software requirements to determine feasibility of design within time and cost constraints",
                  "Responds to the needs of project managers and engineers to customize hosted tools to improve team efficiency",
                  "Uses scientific analysis and mathematical models to predict and measure outcomes and consequences of design"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert, is deeply knowledgeable in DevOps practices, and sets strategic developing direction for the engineering team                ",
              "signals": [
                  "Drives capacity for triaging and handling operational issues while advising the team on the process of writing code and engineering systems that will make their entire code base more reliable, testable, and scalable",
                  "Is seen as an expert who aadvances the state of the art and is a contributer to the broader technical community",
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
              "summary": "Delivers consistently good quality, well-made work        ",
              "signals": [
                  "Tests new code thoroughly, both locally and in production once shipped",
                  "Writes tests for every new feature and bug fix with guidance",
                  "Writes clear comments and documentation",
                  "Works effectively within established web client architectures such as HTML, PHP, and JavaScript, following current best practices"
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
                  "Develops new instances of or minor improvements to existing architecture"
              ],
              "examples": []
          },
          {
              "summary": "Improves others' ability to deliver great quality work\t",
              "signals": [
                  "Implements systems that enable better testing",
                  "Gives thoughtful code reviews as a domain expert",
                  "Adds tooling to improve code quality, security, and maintainability"
              ],
              "examples": []
          },
          {
              "summary": "Proactively advocates for and models great quality and tackles difficult and subtle system issues        ",
              "signals": [
                  "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
                  "Consistently keeps the team focused on quality",
                  "Coordinates priorities and projects",
                  "Iterates repeatedly to develop and refine Palantir's best practices",
                  "Acts as primary maintainer for existing critical systems"
              ],
              "examples": []
          },
          {
              "summary": "Enables and encourages the entire discipline to make quality a central part of the development process",
              "signals": [
                  "Defines policies for the engineering discipline that encourage quality work",
                  "Identifies and eliminates single points of failure throughout the discipline",
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
      "description": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas        ",
      "milestones": [
          {
              "summary": "Works effectively within established structures, following current best practices",
              "signals": [
                  "Is building proficiency with our web technologies and becoming comfortable with learning new technologies and skills",
                  "Has experience with web development frameworks, HTML, CSS, JavaScript, and website accessibility",
                  "Is ble to perform assigned tasks and tickets with occasional assistance",
                  "Is able to help estimate tickets while working on refining estimation skills",
                  "Has an understanding of wireframing, UX design, and UI patterns",
                  "Has experience developing and testing across multiple browsers"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively within established structures, focusing on expanding experience and proficiency",
              "signals": [
                  "Focuses on expanding experience and proficiency in our web technology practices, with solid understanding of relevant areas",
                  "Is well versed with web development frameworks, HTML, CSS, JavaScript and website accessibility",
                  "Is able to perform assigned tasks and tickets close to estimated time with minimal assistance",
                  "Is able to provide reliable estimates for tickets given a complete context",
                  "Has a practical understanding of DevOps and how it is related to their work",
                  "Is able to make open source contributions and proactively does so"
              ],
              "examples": []
          },
          {
              "summary": "Able to design technical solutions of moderate complexity",
              "signals": [
                  "Independently scopes and implements solutions for their project\/team",
                  "Is proficient in all relevant technical skills, and is able to move quickly. Maintains awareness of industry trends and tools",
                  "Is able to complete tickets reasonably close to estimated time without needing to be reminded",
                  "Demonstrates the ability to come up with solid technical solutions to ambiguous or open-ended problems",
                  "Often gives support to others in their areas of strongest skill",
                  "Accurately estimates ticketed work"
              ],
              "examples": []
          },
          {
              "summary": "Builds complex, technical solutions that pioneer best practices for other FED, or multi-system services",
              "signals": [
                  "Has a deep understanding of our architecture and how their domain fits within it. Systematically thinks through potential design impacts on other teams and the company",
                  "Is expert in our processes, also helping define them. Keeps tests up to date",
                  "Independently scopes, designs, and delivers solutions for large, complex challenges",
                  "Debugs expertly within their primary focus area",
                  "Provides oversight, coaching, and guidance through code and design reviews",
                  "Incredibly knowledgeable in their area of expertise, oftern to a degree that is recongized far beyond our walls"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our stack, is deeply knowledgeable in several domains, and sets strategic direction for the FED team",
              "signals": [
                  "Is seen as a leader and contributor across the organization",
                  "Primary expert in multiple areas of our stack, incredibly knowledgeable in several domains",
                  "Designs and builds industry-leading techniques to solve complex problems",
                  "Anticipates technical challenges and thoroughly explores alternatives and trade-offs",
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
              "summary": "Learns the ropes of our tech stack as well as our development practices",
              "signals": [
                  "Writes front-end code that is sometimes production-ready, but usually requires iteration before shipping",
                  "Is becoming comfortable working with one or two areas of front-end code",
                  "Receives and integrates feedback from front-end code reviews to ship high-quality code",
                  "Participates in front-end code reviews and architecture design"
              ],
              "examples": []
          },
          {
              "summary": "Often writes production-ready front-end code. Code reviews are sometimes perfect, but sometimes require a bit of explaining and effort from reviewers",
              "signals": [
                  "Writes front-end code that usually ships promptly by receiving and successfully integrating critical input from code reviews. Work rarely needs to be rewritten before delivery",
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
                  "Understands large swaths of the code base with a deep knowledge and ability to \"reach in and touch the right levers.\" Able to move rapidly as a result",
                  "Writes consistently reliable code, so input from code reviewers is high-level only",
                  "Provides front-end code review feedback that is sought after, respected, and often instructional",
                  "Writes meaningful front-end code reviews",
                  "Translates design solutions into high-quality front-end code"
              ],
              "examples": []
          },
          {
              "summary": "Possesses the development skills and stack expertise necessary to build our product and gives technical support to others on a daily basis",
              "signals": [
                  "Has mastered the skills to ship quickly",
                  "Has mastery in some relevant technical skills; good understanding of full stack",
                  "Provides mentorship and technical guidance to more junior teammates",
                  "Provides highly insightful code review feedback that addresses high-level thoughts",
                  "Writes highly insightful, comprehensive front-end code reviews"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert, is deeply knowledgeable in several domains, and sets strategic developing direction for the engineering team",
              "signals": [
                  "Builds cutting-edge web applications, with a focus on client side",
                  "Leads code testing integration and oversees quality system performance",
                  "Is seen as a leader who advances the state of the art, and is a contributor to the broader technical community",
                  "Constantly learning new web technologies, can navigate and make legacy front-end code maintainable",
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
      "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript. Contributes to relevant open source projects      ",
      "milestones": [
          {
              "summary": "Works effectively within established web client architectures, following current best practices\t",
              "signals": [
                  "Makes minor modifications to existing work",
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
                  "Performs systemic tasks to significantly minimize bundle size",
                  "Acts a caretaker for all of web client code",
                  "Prototypes with code using modern front-end frameworks and digital pattern library"
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
              "summary": "Is an industry-leading expert and\/or sets strategic direction for the engineering discipline",
              "signals": [
                  "Invents new techniques to mitigate browser constraints when feasible",
                  "Identifies and solves systemic problems with current architecture",
                  "Defines a long-term vision for web client and ensures projects are in service of it",
                  "Implements omni directional data flow to completion"
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
              "summary": "Delivers consistently quality, well-made work        ",
              "signals": [
                  "Understands the entire web development process, including design, development, and deployment and has some back-end knowledge as well",
                  "Builds responsive and adaptive websites with guidance of senior FED"
              ],
              "examples": []
          },
          {
              "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems\t",
              "signals": [
                  "Understands and demonstrates knowledge of accessibility needs, concerns, design, and best practices",
                  "Builds semantic, accessible, and maintainable front-end interfaces",
                  "Accurately translates prototypes and design into working interfaces"
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
              "summary": "Proactively advocates for and models great quality and tackles difficult and subtle system issues        ",
              "signals": [
                  "Takes the lead on browser\/device acceptance testing and bug fixing",
                  "Collaborates with UX designers to promote and achieve optimal solutions for clients",
                  "Leads client demos",
                  "Maintains and improves front-end code bases across a wide variety of projects",
                  "Improves quality of work to meet the level of Palantir's best solutions through repeated iteration"
              ],
              "examples": []
          },
          {
              "summary": "Enables and encourages the entire team to make quality a central part of the development process",
              "signals": [
                  "Defines policies for the team that encourage quality work",
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
                  "Has experience with web accessibility, usability and core design tools. Understands web design constraints and opportunities",
                  "Understands and applies how to use an existing pattern library to create wireframes, working with a more senior designer as a guide or mentor",
                  "Has knowledge in marketing and consumer behavior trends applicable to their work",
                  "Develops user-centered website strategies with guidance, in alignment with client goals and objectives",
                  "Has hands-on experience with UX tools which may include Sketch, InVision, prototyping tools, and Google Analytics"
              ],
              "examples": []
          },
          {
              "summary": "Develops new instances for best practices, or minor improvements to existing practices and standards",
              "signals": [
                  "Focuses on expanding experience and proficiency in our user experience practice, and establishing and promoting brand guidelines, best practices, and standards",
                  "Is well-versed with web accessibility, usability, and core design tools. Has a deep understanding of web design constraints",
                  "Applies existing team pattern libraries, provides examples of patterns in the wild, and explores multiple design options",
                  "Works with other team members to understand constraints and design feasibility",
                  "Contributes to strategic positioning, organizational insight, and client road maps",
                  "Is well-versed in marketing and consumer behavior trends",
                  "Develops user-centered website strategies that support user tasks, satisfy client goals, and contribute original documentation for projects",
                  "Sketches and creates wireframes",
                  "Designs and performs competitive analysis, proactively researches examples in the wild, seeks out industry trends, and performs and analyzes usability test plans",
                  "Collaborates with project managers, designers, and engineers to scope time and effort involved in design projects"
              ],
              "examples": []
          },
          {
              "summary": "Designs complicated user experiences, mastering delivery",
              "signals": [
                  "Effectively leads and takes ownership of the UX process, articulates strategy, best practices, and process collaborating with designers to inform and define the project",
                  "Is always able to articulate the \"why\" of design decisions to clients and the Palantir team",
                  "Always explores multiple options, evaluates and articulates pros and cons of choices, recommends user experience decisions, understands when to use low- and high-fidelity design tools, and contributes to existing team pattern libraries",
                  "Constantly partners with engineers and developers to understand technology system constraints and align strategy and design work in an efficient and effective way at the project level",
                  "Designs, performs, and analyzes usability test plans",
                  "Is able to articulate the difference and relationship between the different IA and content strategy deliverables",
                  "Collaborates with project managers and engineers to define and implement innovative solutions for the product direction"
              ],
              "examples": []
          },
          {
              "summary": "Develops complex user experience strategies and guides other UX team members",
              "signals": [
                  "Efficiently balances and manages complex user, business, and technical requirements to make design decisions",
                  "Guides junior team members in critical, high-level, design problem solving",
                  "Strategically analyzes the risks, benefits, and opportunities of various solutions",
                  "Seeks out discipline-wide opportunities for improvement",
                  "Considers client constraints and technical feasibility of potential design solutions"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our business, is deeply knowledgeable in several domains, and sets strategic foundational direction for the UX team",
              "signals": [
                  "Guides UX team members by providing strategic direction that best honors the client's business",
                  "Develops a unique user experience practice approach that outlines and defines activities, deliverables, and value to be used in sales and marketing initiatives",
                  "Designs and builds industry-leading solutions to solve complex UX problems and advocates for the best user experience possible",
                  "Serves as client focal point for all UX practices",
                  "Anticipates technical challenges, exploring alternatives and trade-offs thoroughly",
                  "Is recognized as a leader and contributor across the organization"
              ],
              "examples": []
          }
      ]
  }
  trackList["CHAPTER_TWO"] = {
      "milestone": "CHAPTER_TWO",
      "cohort": "UX",
      "category": "A",
      "displayName": "Discovery and Definition",
      "description": "Comprehends the analysis of the business model, stakeholders, goals, key performance indicators, and existing technologies and workflows\t",
      "milestones": [
          {
              "summary": "Works in the discovery and definition process with guidance, following current best practices",
              "signals": [
                  "Gather business requirements and user insights through surveys, user tests, and interviews with the assistance of senior strategists",
                  "Uses basic feedback techniques to improve relatively simple strategy concepts and techniques",
                  "Through observation and interaction with senior strategists, is building the skills and expertise to plan information validation activities and incorporate user and stakeholder feedback into design iterations",
                  "Understands client business\/objectives and identifies opportunities for client \"wins\" through digital design, tools, and experiences"
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
                  "Works with FEDs and engineers to research technical documentation, APIs, integration with third party technologies, etc. to confirm project requirements and expectations "
              ],
              "examples": []
          },
          {
              "summary": "Effectively leads the discovery and definition process",
              "signals": [
                  "Plans moderately complicated requirements-gathering, analysis, design-validation, and usability-testing activities",
                  "Independently conducts information-validation activities with internal and external stakeholders",
                  "Conducts gap and task analysis",
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
                  "Independently conducts all aspects of complex user-research programs\u2014 from early-stage requirements to summative usability testing",
                  "Adapts user-research techniques to inform both new and ongoing, complex, product-development effort",
                  "Communicates usability findings, metrics, and associated design strategies to large, distributed product teams",
                  "Discusses usability metrics and their impact on product ROI"
              ],
              "examples": []
          },
          {
              "summary": "Guides and leads all stages of the discovery and definition process, developing new concepts",
              "signals": [
                  "Expertly conducts all stages of user research\u2014 including market analysis, requirements definition, early-to-mid-stage design validations, and summative usability--testing activities",
                  "Simultaneously plans and drives multiple user-research activities across widely divergent product domains",
                  "Drives and conducts all aspects of formal summative testing, including the use of metrics and competitive benchmark testing",
                  "Communicates usability metrics and findings to clients and the Palantir team",
                  "Clearly provides clients with a plan, tools, behaviors, and best practices for addressing their usability issues",
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
      "displayName": "Strategy and Design",
      "description": "Conducts analysis and creates content strategy",
      "milestones": [
          {
              "summary": "Works in the strategy and design process with guidance, following current best practices",
              "signals": [
                  "Understands learnings from discovery and research to inform audience definition and identify key personas",
                  "Synthesizes findings from discovery process, identifying opportunities and issues with guidance of senior strategists"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively in the strategy and design process with guidance, focusing on expanding experience and proficiency",
              "signals": [
                  "Synthesizes findings from discovery process, effectively identifying opportunities and issues",
                  "Leverages learnings from discovery and research to inform audience definition and identify key personas",
                  "Demonstrates user journeys through journey mapping"
              ],
              "examples": []
          },
          {
              "summary": "Effectively develops complicated content strategy",
              "signals": [
                  "Works with designers as appropriate to translate strategic recommendations into wireframes and documentation that lead to intuitive user experiences",
                  "Synthesizes findings from discovery process, identifying opportunities and issues, and recommends solutions that meet client objectives",
                  "Understands user needs and intents then translate that to information architecture and content outline(s), collaborating with designers",
                  "Collaborates with designers on design strategy and visual design application for projects",
                  "Conducts usability tests"
              ],
              "examples": []
          },
          {
              "summary": "Creates high-quality complex content strategy",
              "signals": [
                  "Synthesizes findings from discovery process, identifying opportunities and issues, and recommends solutions that meet client objectives, demonstrate a level of excellence, and may be achieved within budget",
                  "Provides high-level sitemap and wireframes or works with designers as appropriate to translate strategic recommendations into wireframes and documentation that lead to intuitive user experiences",
                  "Crafts high-level content strategy recommendations",
                  "Guides the creation of wireframes for key pages in the new website, and explains wireframes to the client"
              ],
              "examples": []
          },
          {
              "summary": "Delivers and guides high-quality content strategy, deeply knowledgeable and sets new trends and solutions for the UX team",
              "signals": [
                  "Demonstrates ability to generate and translate insights into actionable digital opportunities through reports, presentations, personas, user flows, journey maps, etc.",
                  "Balances creativity with structure, collaborating with designers, project managers, and engineers",
                  "Advocates for pushing the limits on a project's capabilities, both from a visual and functional perspective",
                  "Articulates a design strategy or approach that will impact the user experience across products or platforms and supports these ideas with sound reasoning and data"
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
      "description": "Relies on an understanding of the end user to guide decision making for product design and development",
      "milestones": [
          {
              "summary": "Works in the design validation process with guidance, following current best practices",
              "signals": [
                  "Conducts basic, early-stage design validations with stakeholders",
                  "Uses basic feedback techniques to improve relatively simple design concepts",
                  "Helps create clean and simple user-centred designs with guidance of senior teammates"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively in the design validation process with guidance, focusing on expanding experience and proficiency",
              "signals": [
                  "Conducts design validations with stakeholders with assistance of a more senior designer",
                  "Applies feedback techniques to improve design concepts",
                  "Works with more senior team members to plan design validation activities and incorporate user feedback into design iteration",
                  "Generates user profiles, recruitment copy, test scripts, and reports"
              ],
              "examples": []
          },
          {
              "summary": "Effectively leads the design process",
              "signals": [
                  "Designs and delivers wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interfaces",
                  "Independently conducts design validation activities with internal and external stakeholders",
                  "Translates concepts into user flows, wireframes, mockups, and prototypes that lead to intuitive user experiences",
                  "Assists the front-end developers to ensure the UX design achieves design goals and meets end-user needs"
              ],
              "examples": []
          },
          {
              "summary": "Independently leads all aspects of the design process",
              "signals": [
                  "Demonstrates the ability to identify design problems and devise solutions",
                  "Takes a user-centered design approach and rapidly tests and iterates the work",
                  "Ensures design production is efficient and delivers at the highest quality in accordance with UX's best practices and processes"
              ],
              "examples": []
          },
          {
              "summary": "Guides and leads all stages of the design process, developing new concepts",
              "signals": [
                  "Makes strategic design and user experience decisions related to both core and new functions, and features",
                  "Creates high-quality design deliverables and executes based on UX goals and priorities, acting as an expert in the field",
                  "Stays on top of UX design trends and looks for creative ways to inspire delightful experiences"
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
                  "Understands web design constraints, including CSS, HTML, browser usability, and cross-platform compatibility"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively within established structures, focusing on expanding experience and proficiency",
              "signals": [
                  "Focuses on expanding experience and proficiency in our design practice, establishing and promoting brand guidelines, best practices and standards",
                  "Is well-versed with web accessibility, usability, and core design tools",
                  "Collaborates with project managers, strategists, and engineers to scope time and effort involved in design projects",
                  "Serves as a strategic visual design resource",
                  "Has a deep understanding of web design constraints, including CSS, HTML, browser usability, and cross-platform compatibility",
                  "Designs a web experience that's best for the user and accurately reflects the client's goals, objectives, and brand identity"
              ],
              "examples": []
          },
          {
              "summary": "Designs complicated user experience design solutions, mastering delivery",
              "signals": [
                  "Is always able to articulate the \"why\" of design decisions",
                  "Constantly seeks input from the engineering and implementation team to validate and ensure that the design is executable",
                  "Executes all visual design stages from concept to HTML\/CSS browser",
                  "Has experience designing from user experience journeys, and realistic use cases to create functional and delightful designs",
                  "Drives the design process and serves as a gatekeeper and clients \"brand expert\"",
                  "Conceptualizes original ideas that bring simplicity and user friendliness to complex design roadblocks",
                  "Collaborates with project managers and engineers to define and implement innovative solutions for the product direction, design and interactions",
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
              "summary": "Is an industry-leading expert in multiple areas of business, deeply knowledgeable in several domains, and sets strategic foundational direction for the UI team",
              "signals": [
                  "Guides and directs UI team members by providing strategic direction to best deliver client's business goals",
                  "Is able to articulate a unique user experience approach that delivers client value for use in sales and marketing initiatives",
                  "Designs and builds industry-leading solutions to solve UI complex problems and advocates for the best user experience possible",
                  "Serves as client focal point for all UI practices",
                  "Anticipates technical challenges, exploring alternatives and trade offs thoroughly",
                  "Seen as a leader and contributor in the organization"
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
                  "Understands the basic usability principles and trade offs behind their own design concepts"
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
                  "Can explain the usability rationale and trade offs of one information architecture versus another"
              ],
              "examples": []
          },
          {
              "summary": "Organizes complex information elements into new product frameworks",
              "signals": [
                  "Creates new architectural design patterns for a product when necessary",
                  "Employs complex information-architecture concepts quickly and correctly",
                  "Explores multiple, alternative product information architectures to create a broad range of alternative design concepts",
                  "Understands the usability rationale and trade-offs for different product-level information architectures and can clearly articulate these to the team"
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
                  "Understands and can compellingly articulate the usability trade-offs of various information-architecture design approaches for entire product families and frameworks"
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
                  "Effectively solves routine interaction design problems, gathering the information necessary to weigh a limited set of options and arrive at sound conclusions",
                  "Escalates problems that are beyond the scope of their design capabilities for resolution by a more experienced designer",
                  "Writes select components of interaction design strategy documentation"
              ],
              "examples": []
          },
          {
              "summary": "Solves moderately difficult interaction-design problems and develops solutions with guidance",
              "signals": [
                  "Efficiently solves moderately difficult interaction design problems that impact people within their team or other related team",
                  "Applies existing interaction patterns, working with a more senior designer as a guide or mentor"
              ],
              "examples": []
          },
          {
              "summary": "Solves complicated interaction-design problems and creates new interaction-design patterns  with guidance",
              "signals": [
                  "Efficiently and creatively solves complicated interaction design problems that impact the stakeholders",
                  "Looks beyond obvious solutions and experiments with different approaches to solving problems",
                  "Develops solutions for problems that stretch their own design capabilities, but requests review and approval from a more senior designer",
                  "Facilitates effective problem solving in meetings and teams"
              ],
              "examples": []
          },
          {
              "summary": "Efficiently solves complex interaction-design problems and creates new interaction-design patterns",
              "signals": [
                  "Efficiently solves complex and difficult interaction design problems that impact the team or entire organization",
                  "Accurately defines the amount and kinds of information that is needed to gather for problem solving",
                  "Anticipates and proactively works to circumvent roadblocks to solutions",
                  "Creates new interaction design patterns for a product when necessary",
                  "Identifies underlying or hidden problems or trends across the organization"
              ],
              "examples": []
          },
          {
              "summary": "Efficiently leads and solves high-level complex interaction-design problems and creates new interaction-design patterns",
              "signals": [
                  "Efficiently and creatively solves even the most complex and difficult interaction design problems that impact the team or entire company",
                  "Creates new interaction design patterns that impact entire product lines and user interface frameworks",
                  "Asks critical, insightful questions and probes all fruitful sources for relevant information to facilitate problem solving",
                  "Leads the team in critical, high-level design problem solving",
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
                  "Competently creates basic layouts and produces mockups of designs with the guidance of senior designers",
                  "Turns image-based designs into a functional HTML and CSS code-based style guide"
              ],
              "examples": []
          },
          {
              "summary": "Creates accurate visual elements, following best practices",
              "signals": [
                  "Builds accurate wireframes, following visual design guidelines",
                  "Collaborates with other visual designers to produce graphics resource files for user interfaces"
              ],
              "examples": []
          },
          {
              "summary": "Creates sophisticated and complicated visual elements, following best practices\t",
              "signals": [
                  "Creates sophisticated layouts and produce mockups of designs",
                  "Builds complicated wireframes, following visual design guidelines",
                  "Uses various techniques to create drafts, models, and prototypes"
              ],
              "examples": []
          },
          {
              "summary": "Delivers complex visual elements and guides other designers",
              "signals": [
                  "Builds complex, accurate wireframes, following visual design guidelines",
                  "Collaborates with strategists, project managers, and engineers to understand how all aspects of a product's functionality would work within an established visual design framework",
                  "Maintains an awareness of trends in visual design and guides other visual designers in implementing cutting-edge, visual design solutions for their products",
                  "Has a strong understanding of web design systems and helps create a standardized toolbox of components to draw from"
              ],
              "examples": []
          },
          {
              "summary": "Delivers and guides high-quality visual elements, deeply knowledgeable and sets new trends and solutions for the UI team",
              "signals": [
                  "Expertly builds complex, accurate wireframes, following visual design guidelines",
                  "Guides and directs the UI design team to understand how all aspects of a product's functionality would work within an established visual design framework",
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
      "description": "Develops expertise and proficiency in our project management practice, with solid understanding of relevant areas        ",
      "milestones": [
          {
              "summary": "Works effectively within established structures, following current best practices",
              "signals": [
                  "Is building proficiency in our PM practice and becoming comfortable with learning new skills",
                  "Actively listens, understands, and responds to clients and team members",
                  "Measures project performance using appropriate tools and techniques",
                  "Creates and maintains comprehensive project documentation and presents it to the appropriate stakeholders",
                  "Is able to create, manage, and maintain agreements, budgets, scope of work, and timelines",
                  "Facilitates team through Agile practices, including daily scrums, grooming ,and retrospectives"
              ],
              "examples": []
          },
          {
              "summary": "Develops new instances for best practices, or minor improvements to existing practices and standards",
              "signals": [
                  "Is continuing to grow and establish proficiency in our project management practice, establishing and promoting best practices and standards",
                  "Is able to develop comprehensive projects plans with assistance of senior project managers",
                  "Closely monitors projects to ensure that they remain on track, meet deadlines, stay under budget, and proceed according to plan",
                  "Develops a detailed project plan to monitor and track progress",
                  "Monitors client satisfaction",
                  "Is able to present budgets, scope of work, and timelines to the appropriate stakeholders",
                  "Manages the relationship with the client and all stakeholders",
                  "Provides leadership with status reporting regarding project milestones, deliverables, dependencies, risks, and issues"
              ],
              "examples": []
          },
          {
              "summary": "Manages project plans of moderate complexity, mastering delivery",
              "signals": [
                  "Effectively leads and takes ownership of project from concept to completion, acting as the liaison between the project team and the client",
                  "Manages changes to the project scope, budget, and timeline using appropriate verification techniques",
                  "Delegates project tasks based on junior staff members' individual strengths, skill sets, and experience levels",
                  "Serves as an internal quality control check for the project",
                  "Is well-versed with project management methodologies and tools",
                  "Works within the given parameters delivered from Sales, such as problem statement, budget, deliverables, and timeline",
                  "Creates and maintains comprehensive project documentation and presents it to the appropriate stakeholders",
                  "Has a strong understanding of the fact that UX and Engineering use different terminology, have a different cadence to their work, provide different deliverables, and even different definitions of work"
              ],
              "examples": []
          },
          {
              "summary": "Develops complex project plans and guides other PM team members",
              "signals": [
                  "Helps the client and team define success criteria and disseminates these to involved parties throughout the project and program life cycle",
                  "Establishes practices, templates, policies, tools, and partnerships to expand and mature the project management capabilities for the organization",
                  "Sets and continually manages project expectations while delegating and managing deliverables with team members and stakeholders",
                  "Provides necessary context for the team so that team members can understand their roles on the project and tackle their tasks efficiently",
                  "Keeps an eye on latest strategies, tools, and terminologies used in project management worldwide",
                  "Accommodates project constraints around resources, budget, time, quality, and scope in order to meet desired outcomes",
                  "Is incredibly knowledgeable in their area of expertise, often to a degree that is recognized outside the organization"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our stack, is deeply knowledgeable in several domains, and sets strategic foundational direction for the project management team",
              "signals": [
                  "Guides project management team members by providing coaching and mentoring for team and project success",
                  "Manages dilemmas and paradoxes as they occur throughout the project life cycle by identifying and communicating trade-offs to key stakeholders",
                  "Is seen as a leader and contributor in the broader organization",
                  "Tracks project benefits realization and lessons learned to feed into ongoing improvements"
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
      "description": "Comprehends the processes and activities to identify, define, combine, unify, and coordinate the various elements within project management such as scope, budget, timelines, and resources        ",
      "milestones": [
          {
              "summary": "Works effectively to assist the business planning, lifecycle management, reporting and performance measurement systems",
              "signals": [
                  "Understands all project agreements, budgets, scopes of work, and timelines",
                  "With guidance, creates and maintains comprehensive project documentation",
                  "With guidance, creates and maintains a high-level project schedule with major milestones, and makes sure that the schedule is visible and accessible to the project team and client",
                  "With guidance, monitors and communicates project progress against scope, quality, time, and cost baselines, including approved changes",
                  "Updates the resource forecasting tool for all members of the team, based on project needs and budget limits, on a consistent and timely basis",
                  "Ensures resource availability and allocation"
              ],
              "examples": []
          },
          {
              "summary": "Works effectively to support the business planning, lifecycle management, reporting and performance measurement systems\t",
              "signals": [
                  "Assists in the definition of project scope and objectives, involving all relevant stakeholders and ensuring technical feasibility",
                  "Ensures that the client and project team work together to define, document, and estimate a scope of work that fits within the budget",
                  "Ensures any scope changes remain within the budget",
                  "Monitors and communicates project progress against scope, quality, time, and cost baselines, including approved changes",
                  "Monitors the billing schedule, and makes that schedule visible and accessible to the financial team and client",
                  "Creates and maintains a high-level project schedule with major milestones, and makes that schedule visible and accessible to the project team and client",
                  "Ensures that team members have awareness of and visibility into the amount of time they are resourced to the project each week"
              ],
              "examples": []
          },
          {
              "summary": "Designs and establishes the business planning, lifecycle management, reporting and performance measurement systems",
              "signals": [
                  "Develops a detailed project plan to monitor and track progress",
                  "Manages project progress against scope, quality, time, and cost baselines, including approved changes",
                  "Facilitates client conversations to categorize features in priority order",
                  "Ensures that changes are tangible, strategic, and achievable",
                  "Develops spreadsheets, diagrams, and process maps to document needs"
              ],
              "examples": []
          },
          {
              "summary": "Leads and guides the business planning, lifecycle management, reporting and performance measurement systems",
              "signals": [
                  "Leads discussions to review and finalize scope change requests",
                  "Ensures that changes fit within the project strategy and desired outcomes",
                  "Establishes a completion plan that includes all aspects of delivery of project outcomes across the entire project life cycle",
                  "Demonstrates ability to discuss the standard project process with the team and client, in order to ensure that timelines, schedules, and milestones reflect the appropriate path for the project to follow",
                  "Ensures that the finished project is strategically beneficial to the client"
              ],
              "examples": []
          },
          {
              "summary": "Is an industry-leading expert in multiple areas of our stack, is deeply knowledgeable in several domains, and sets strategic planning direction for the project management team",
              "signals": [
                  "Defends product integrity from misinformed decision-making both internally and externally",
                  "Assists in dispute, negotiation, arbitration, or litigation, as needed",
                  "Understands what it means to run a business-driven project management plan\u2014from strategy through execution to the realization of business benefits\u2014centered on the client"
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
      "description": "Comprehends the ability to conduct risk planning, identification, analysis, and response planning and controlling risk on a project        ",
      "milestones": [
          {
              "summary": "Works effectively within established project risk, following quality policies, objectives and responsibilities to satisfy project requirements",
              "signals": [
                  "Participates in ongoing risk assessments with guidance",
                  "Determines which risks may affect the project and documents the specifics with assistance of a senior team member",
                  "Actively seeks to understand and document potential consequences of risks as they occur"
              ],
              "examples": []
          },
          {
              "summary": "Develops and monitors risk mitigation with guidance",
              "signals": [
                  "Conducts ongoing risk assessments with guidance",
                  "Understands and documents potential consequences of risks as they occur",
                  "Monitors and communicates status of project risks with guidance"
              ],
              "examples": []
          },
          {
              "summary": "Performs risk mitigation to minimize project risks",
              "signals": [
                  "Oversees the risk identification and definition process",
                  "Prioritizes risks for further analysis or action by assessing their probabilities of occurrence and impact",
                  "Develops options and actions to enhance opportunities and reduce threats to project objectives",
                  "Initiates risk response plans when necessary",
                  "Ensures that the client is aware of the risks and understands their consequences, along with the mitigation plans for each of the risks"
              ],
              "examples": []
          },
          {
              "summary": "Develops and guides risk mitigation effectively, advocating for quality",
              "signals": [
                  "Establishes, updates, and utilizes key performance indicators",
                  "Develops guidance and direction on how risks will be managed throughout the project",
                  "Oversees and guides the risk analysis process and the development of risk responses",
                  "Maintains awareness and visibility of the risks to the client and team throughout the course of the project"
              ],
              "examples": []
          },
          {
              "summary": "Provides guidance and direction on project risk, fostering quality",
              "signals": [
                  "Expertly conducts all stages of risk mitigation\u2014including planning, identification, analysis, and response",
                  "Drives and leads creative actions to enhance opportunities and reduce threats to project objectives",
                  "Proactively handles project risks by identifying potential complications and conflicts and creating\/implementing timely mitigation strategies",
                  "Clearly articulates the risks to the client, including their negative impact on the company\u2019s overall business"
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
      "description": "Comprehends the effective exchanges of accurate, appropriate, and relevant information with stakeholders        ",
      "milestones": [
          {
              "summary": "Actively listens, understands and responds to stakeholders",
              "signals": [
                  "Actively listens to and understands stakeholders' needs, interests, and influences in order to achieve project success",
                  "Develops and adapts communication strategies with guidance",
                  "Provides accurate and factual information"
              ],
              "examples": []
          },
          {
              "summary": "Disseminates information effectively",
              "signals": [
                  "Effectively summarizes key points and issues in a clear and concise manner",
                  "Matches level of information to stakeholder",
                  "Develops and maintains project tracking, dashboards, and information systems",
                  "Undertakes analysis, evaluation of options (as appropriate), and takes\/recommends actions"
              ],
              "examples": []
          },
          {
              "summary": "Disseminates information effectively, engaging with stakeholders",
              "signals": [
                  "Engages with stakeholders proactively",
                  "Establishes regular interaction with stakeholders, including formal and informal channels",
                  "Disseminates information via appropriate communication methods",
                  "Appropriately matches level of formality to meetings and audience",
                  "Regularly conducts follow-up with stakeholders",
                  "Proactively responds to issues and concerns",
                  "Seeks validation of information"
              ],
              "examples": []
          },
          {
              "summary": "Ensures quality of information and guidance to proactive respond to stakeholders",
              "signals": [
                  "Engages with team members in developing reports, analyzing issues and options, and evaluating progress",
                  "Balances speed of provision of information against reliability of information",
                  "Provides feedback on templates and guidelines, including examples and methods based on experiences and lessons learned"
              ],
              "examples": []
          },
          {
              "summary": "Effectively manages high-level information to diverse audience, ensuring stakeholder engagement",
              "signals": [
                  "Evaluates, develops, and executes responses to provide an appropriate level of information to stakeholders and maintain their engagement throughout project life cycle",
                  "Builds processes and structures to ensure the transfer of information that influences strategic decisions and produces foundations for new capabilities",
                  "Continually seeks new information to assess the effectiveness of the project strategy"
              ],
              "examples": []
          }
      ]
  }

  return trackList
}
