import { TrackDefinition, MilestoneDefinition } from './tracks';

export enum Categories {
  Technical,
  Organization,
  Professional,
  Social,
};

export enum Tracks {
  // Technical
  Frontend,
  Backend,
  Mobile,
  Server,
  // Organization
};

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
  ];

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

export const maxPointsFromCategory = 50;

export const trackDefinitions: TrackDefinition[] = [
  <TrackDefinition> {
    track: Tracks.Frontend,
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
    track: Tracks.Backend,
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
    track: Tracks.Mobile,
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
];