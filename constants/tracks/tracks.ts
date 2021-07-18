import { exclude } from "../../logic/utils";
import { categoryIds } from "./categories";
import { CategoryId, SpecialtyId, Track, TrackId } from "./types";

export const tracks: Record<TrackId, Track> = {
  [TrackId.MOBILE]: {
    displayName: "Mobile",
    category: CategoryId.STR,
    specialty: [
      SpecialtyId.MOBILE,
      SpecialtyId.RN,
      SpecialtyId.Android,
      SpecialtyId.IOS,
      SpecialtyId.FLutter,
    ],
    description:
      "Develops expertise in mobile platform engineering, such as reach native",
  },

  [TrackId.WEB_CLIENT]: {
    displayName: "Web client",
    category: CategoryId.STR,
    specialty: [SpecialtyId.WEB],
    description:
      "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
  },

  [TrackId.DEV_OPS]: {
    displayName: "DevOps",
    category: CategoryId.STR,
    specialty: [SpecialtyId.SRE],
    description:
      "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
  },

  [TrackId.SERVERS]: {
    displayName: "Servers",
    category: CategoryId.STR,
    specialty: [SpecialtyId.BE],
    description:
      "Develops expertise in server side engineering, using technologies such as Go, NodeJS, Python or Scala",
  },

  [TrackId.SOFTWARE_ENGINEERING]: {
    displayName: "Software Engineering",
    category: CategoryId.STR,
    description:
      "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
  },

  [TrackId.PROJECT_MANAGEMENT]: {
    displayName: "Project management",
    category: CategoryId.DEX,
    description:
      "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
  },

  [TrackId.CRAFT]: {
    displayName: "Quality",
    category: CategoryId.DEX,
    description:
      "Embodies and promotes practices to ensure excellent quality products and services",
  },

  [TrackId.COMMUNICATION]: {
    displayName: "Communication",
    category: CategoryId.DEX,
    description:
      "Shares the right amount of information with the right people, at the right time, and listens effectively",
  },

  [TrackId.LEADERSHIP_INITIATIVE]: {
    displayName: "Leadership and Initiative",
    category: CategoryId.CHA,
    description:
      "Challenges the status quo and effects positive organizational change outside of mandated work",
  },

  [TrackId.BUSINESS_ACUMEN]: {
    displayName: "Business Acumen",
    category: CategoryId.CHA,
    description:
      "The level you understand and contribute to business and strategic decisions",
  },
  [TrackId.RECRUITMENT_EVANGELISM]: {
    displayName: "Recruitment Evangelism",
    category: CategoryId.CHA,
    description:
      "Strengthen the team through promoting the business to the outside world and establishes it as an attractive and thoughtful place to work in, and recruit",
  },

  [TrackId.PROBLEM_SOLVING]: {
    displayName: "Problem Solving and Analytical Thinking",
    category: CategoryId.WIS,
    description:
      "The methodical and data driven approach you demonstrate to learn, understand, analyze, solve problems, and make decisions",
  },
  [TrackId.OPERATIONAL_EXPERIENCE]: {
    displayName: "Operational Excellence",
    category: CategoryId.WIS,
    description: "The deep understanding of the systems they work with",
  },
};

const excludeTrackIds = [
  TrackId.OPERATIONAL_EXPERIENCE,
  TrackId.RECRUITMENT_EVANGELISM,
];

export const trackIds = exclude(
  Object.keys(tracks),
  excludeTrackIds
) as TrackId[];

export const specialtyTrackIds = trackIds.filter((id) => {
  const track = tracks[id];
  return Boolean(track.specialty);
});

export const buildSpecialtyIds = specialtyTrackIds.filter((id) => {
  const track = tracks[id];
  return track.category === CategoryId.STR;
});

export const excludingBuildSpecialtyTrackIds = exclude(
  trackIds,
  buildSpecialtyIds
);

export const categoryTrackIds = Object.values(categoryIds).map((categoryId) => {
  return {
    categoryId,
    trackIds: trackIds.filter(
      (trackId) => tracks[trackId].category === categoryId
    ),
  };
});
