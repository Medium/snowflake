import { TrackDefinition, MilestoneDefinition } from './tracks';

export enum Categories {
  Technical,
  Organization,
  Professional,
};

export enum Tracks {
  // Technical
  Code,
  Database,
  Ops,
  Architecture,
  // Organization
  Independence,
  Process,
  ProjectManagement,
  // Social
  Communication,
  Mentoring,
  Management,
  Recruiting,
};

export const milestonesToPoints = {
  '0':  0,
  '1':  1,
  '2':  2,
  '3':  3,
  '4':  5,
  '5':  7,
  '6':  9,
  '7':  12,
  '8':  15,
  '9':  18,
  '10': 22,
};

export const pointsToLevels = {
  '0': '0',
  '6': '1.1',
  '12': '1.2',
  '18': '1.3',
  '26': '2.1',
  '33': '2.2',
  '40': '2.3',
  '48': '3.1',
  '56': '3.2',
  '68': '4.1',
  '80': '4.2',
  '100': '5',
};

export const levelToTitles = {
  '0': ['Apprentice Software Engineer (E0)'],
  '1': ['Junior Software Engineer (E1)'],
  '2': ['Software Engineer (E2)'],
  '3': ['Senior Software Engineer (E3)', 'Engineering Manager (M3)'],
  '4': ['Staff Software Engineer (E4)', 'Senior Engineering Manager (M4)'],
  '5': ['Principal Software Engineer (E5)', 'Director of Engineering (M5)'],
};

export const maxPointsFromCategory = 50;

export const trackDefinitions: TrackDefinition[] = [
  <TrackDefinition> {
    track: Tracks.Code,
    category: Categories.Technical,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            signals: [
                ""
            ],
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Database,
    category: Categories.Technical,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Ops,
    category: Categories.Technical,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Architecture,
    category: Categories.Technical,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Independence,
    category: Categories.Organization,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Process,
    category: Categories.Organization,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.ProjectManagement,
    category: Categories.Organization,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Communication,
    category: Categories.Professional,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Mentoring,
    category: Categories.Professional,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Management,
    category: Categories.Professional,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
  <TrackDefinition> {
    track: Tracks.Recruiting,
    category: Categories.Professional,
    milestones: [
        undefined, // 0 blank
        <MilestoneDefinition> {
            summary: "Basic",
            examples: [
                "Does stuff",
            ]
        },
    ]
  },
];