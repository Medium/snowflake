// @flow
import * as d3 from 'd3'

export type TrackId = 'SELF' | 'TEAM' | 'PEERS' | 'SUPERIORS' |
  'BUSINESS' | 'HEALTH'

  // 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  //   'PROJECT_MANAGEMENT' | 'COMMUNICATION'

export type Milestone = 0 | 1 | 2 | 3

export type MilestoneMap = {
  'SELF': Milestone,
  'TEAM': Milestone,
  'PEERS': Milestone,
  'SUPERIORS': Milestone,
  'BUSINESS': Milestone,
  'HEALTH': Milestone
}
export const milestones = [0, 1, 2, 3]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
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
  '36': '3.1'
}

export const maxLevel = 36

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
  'SELF': Track,
  'TEAM': Track,
  'PEERS': Track,
  'SUPERIORS': Track,
  'BUSINESS': Track,
  'HEALTH': Track,
|}

export const tracks: Tracks = {
  "SELF": {
    "displayName": "Self",
    "category": "A",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
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
    "displayName": "Team",
    "category": "B",
    "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
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
    "displayName": "Peers",
    "category": "C",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
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
    "displayName": "Superiors",
    "category": "D",
    "description": "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
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
    "displayName": "Business",
    "category": "E",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
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

  "HEALTH": {
    "displayName": "Health",
    "category": "F",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "description": "Manages their own time and Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
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
  .range(['#E18132', '#454E52', '#E53332', '#2BC237', '#327DF6', '#4B2366'])
