import { Tracks, Categories } from "./definitions";

export class TrackDefinition {
  public readonly track: Tracks;
  public readonly category: Categories;
  public readonly displayName: string;
  public readonly description: string;
  public readonly milestones: MilestoneDefinition[];
}

export class MilestoneDefinition {
  public readonly summary: string;
  public readonly exampleBehaviors: string[];
  public readonly exampleResponsibilities: string[];    
}
