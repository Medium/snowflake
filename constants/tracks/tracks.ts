import { CategoryId, SpecialtyId, Track, TrackId } from "./types";

export const tracks: Record<TrackId, Track> = {
  [TrackId.MOBILE]: {
    displayName: "Mobile",
    category: CategoryId.BUILD,
    specialty: SpecialtyId.FE,
    description:
      "Develops expertise in mobile platform engineering, such as reach native",
  },

  [TrackId.WEB_CLIENT]: {
    displayName: "Web client",
    category: CategoryId.BUILD,
    specialty: SpecialtyId.FE,
    description:
      "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
  },

  [TrackId.SOFTWARE_ENGINEERING]: {
    displayName: "Software Engineering",
    category: CategoryId.BUILD,
    specialty: SpecialtyId.BE,
    description:
      "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
  },
  [TrackId.DEV_OPS]: {
    displayName: "DevOps",
    category: CategoryId.BUILD,
    specialty: SpecialtyId.BE,
    description:
      "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
  },

  [TrackId.SERVERS]: {
    displayName: "Servers",
    category: CategoryId.BUILD,
    specialty: SpecialtyId.BE,
    description:
      "Develops expertise in server side engineering, using technologies such as Go, NodeJS, Python or Scala",
  },

  [TrackId.PROJECT_MANAGEMENT]: {
    displayName: "Project management",
    category: CategoryId.EXECUTE,
    description:
      "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
  },

  [TrackId.CRAFT]: {
    displayName: "Craft",
    category: CategoryId.EXECUTE,
    description:
      "Embodies and promotes practices to ensure excellent quality products and services",
  },

  [TrackId.ANALYTICAL_THINKING]: {
    displayName: "Analytical Thinking",
    category: CategoryId.EXECUTE,
    description:
      "The methodical and data driven approach you demonstrate to understand requirements, analyze and solve problems, and make decisions",
  },

  [TrackId.LEADERSHIP_INITIATIVE]: {
    displayName: "Leadership Initiative",
    category: CategoryId.LEAD,
    description:
      "Challenges the status quo and effects positive organizational change outside of mandated work",
  },

  [TrackId.BUSINESS_ACUMEN]: {
    displayName: "Business Acumen",
    category: CategoryId.LEAD,
    description:
      "The level you understand and contribute to business and strategic decisions",
  },

  [TrackId.COMMUNICATION]: {
    displayName: "Communication",
    category: CategoryId.LEAD,
    description:
      "Shares the right amount of information with the right people, at the right time, and listens effectively",
  },
};

export const trackIds = Object.values(TrackId);
