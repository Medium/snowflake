// @flow
import * as d3 from 'd3'

export type TrackId = 'SELF' | 'TEAM' | 'PEERS' | 'SUPERIORS' |
  'BUSINESS' | 'WORK/LIFE'

  // 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  //   'PROJECT_MANAGEMENT' | 'COMMUNICATION'

export type Milestone = 0 | 1 | 2 | 3

export type MilestoneMap = {
  'SELF': Milestone,
  'TEAM': Milestone,
  'PEERS': Milestone,
  'SUPERIORS': Milestone,
  'BUSINESS': Milestone,
  'WORK/LIFE': Milestone
}

export type QuizResults = {
  'name': string,
  'answerValues': number
}

export const milestones = [0, 1, 2, 3]

export const milestoneToPoints = (milestone: Milestone): number => {
  return Math.floor(milestone/3);
}

// export const pointsToLevels = {
//   '0': '1.1',
//   '5': '1.2',
//   '11': '1.3',
//   '17': '2.1',
//   '23': '2.2',
//   '29': '2.3',
//   '36': '3.1'
// }

// export const maxLevel = 36

export type Track = {
  shortDisplayName: string,
  longDisplayName: string,
  category: string, // TK categoryId type?
  description: string,
  questions: QuestionsList,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }
}

export type QuestionsList = [string, string, string];

type Tracks = {|
  'SELF': Track,
  'TEAM': Track,
  'PEERS': Track,
  'SUPERIORS': Track,
  'BUSINESS': Track,
  'WORK/LIFE': Track,
|}

export const tracks: Tracks = {
  "SELF": {
    "shortDisplayName": "Self",
    "longDisplayName": "Managing Yourself",
    "category": "A",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    "questions": [
      "I take time to prioritize what I need to get done and always work on the most important things first.",
      "I control my calendar, and regularly weed out meetings and other demands on my time if I don't know their importance.",
      "I take time away from the day-to-day needs of my job to focus on the big picture."
    ],
    "milestones": [{
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing streamline table and move on",
        "Override the digital divide with clickthroughs from DevOps",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "TEAM": {
    "shortDisplayName": "Team",
    "longDisplayName": "Managing Your Team",
    "category": "B",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    "questions": [
      "My team comes to me with solutions, not just problems.",
      "I know what each of my team members hope to do with their career and what keeps them up at night.",
      "My team works effectively together—they help each other with their work even if they have different roles."
    ],
    "milestones": [{
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing streamline table and move on",
        "Override the digital divide with clickthroughs from DevOps",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "PEERS": {
    "shortDisplayName": "Peers",
    "longDisplayName": "Managing Your Peers",
    "category": "C",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    "questions": [
      "The manager team in my department works effectively together to accomplish the needs of the business.",
      "I regularly connect with managers outside my department and understand how my work impacts them.",
      "I am able to put the needs of the business and my department ahead of the needs of my team."
    ],
    "milestones": [{
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing streamline table and move on",
        "Override the digital divide with clickthroughs from DevOps",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "SUPERIORS": {
    "shortDisplayName": "Superiors",
    "longDisplayName": "Managing Up",
    "category": "D",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    "questions": [
      "I am able to approach my boss when I'm facing a difficult situation.",
      "I know what I can do to help my boss without having to ask.",
      "I know my boss's top three priorities at any given time."
    ],
    "milestones": [{
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing streamline table and move on",
        "Override the digital divide with clickthroughs from DevOps",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "BUSINESS": {
    "shortDisplayName": "Business",
    "longDisplayName": "Managing Your Business",
    "category": "E",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    "questions": [
      "I know the major objectives of the company and how I contribute to their success.",
      "My team understands how their work impacts the bigger picture.",
      "I understand the how the business works—how a dollar enters, moves through, and leaves the organization."
    ],
    "milestones": [{
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing streamline table and move on",
        "Override the digital divide with clickthroughs from DevOps",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "WORK/LIFE": {
    "shortDisplayName": "Work/Life",
    "longDisplayName": "Managing Work & Life",
    "category": "F",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    "questions": [
      "I am happy with the amount of hours I work each week.",
      "My friends and family would say I have a full life outside of work.",
      "My coworkers know and respect my life outside of work."
    ],
    "milestones": [{
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing streamline table and move on",
        "Override the digital divide with clickthroughs from DevOps",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      "signals": [
        "User generated content in real-time will have touchpoints",
        "Adds simple actions that call attainable endpoints",
        "Reuses existing strategies appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Capitalize on low hanging fruit to identify a ballpark value",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  }
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

// export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
//   let pointsByCategory = new Map()
//   trackIds.forEach((trackId) => {
//     const milestone = milestoneMap[trackId]
//     const categoryId = tracks[trackId].category
//     let currentPoints = pointsByCategory.get(categoryId) || 0
//     pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
//   })
//   return Array.from(categoryIds.values()).map(categoryId => {
//     const points = pointsByCategory.get(categoryId)
//     return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
//   })
// }

// export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
//   trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
//     .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#E18132', '#454E52', '#E53332', '#2BC237', '#327DF6', '#4B2366'])
