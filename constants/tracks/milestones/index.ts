import leadershipInitiative from "./descriptions/leadership-initiative";
import analyticalThinking from "./descriptions/analytical-thinking";
import businessAcumen from "./descriptions/business-acumen";
import communication from "./descriptions/communication";
import craft from "./descriptions/craft";
import foundations from "./descriptions/foundations";
import mobile from "./descriptions/mobile";
import projectManagement from "./descriptions/project-management";
import servers from "./descriptions/servers";
import webClient from "./descriptions/web-client";
import { TrackId } from "../types";

export const milestoneDescriptions: Record<
  TrackId,
  {
    summary: string;
    signals: string[];
    examples: string[];
  }[]
> = {
  [TrackId.MOBILE]: mobile,
  [TrackId.WEB_CLIENT]: webClient,
  [TrackId.FOUNDATIONS]: foundations,
  [TrackId.SERVERS]: servers,
  [TrackId.PROJECT_MANAGEMENT]: projectManagement,
  [TrackId.COMMUNICATION]: communication,
  [TrackId.CRAFT]: craft,
  [TrackId.LEADERSHIP_INITIATIVE]: leadershipInitiative,
  [TrackId.ANALYTICAL_THINKING]: analyticalThinking,
  [TrackId.BUSINESS_ACUMEN]: businessAcumen,
};

export const milestones = [0, 1, 2, 3, 4, 5];
