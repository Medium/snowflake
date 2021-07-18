import leadershipInitiative from "./descriptions/leadership-initiative";
import problemSolving from "./descriptions/problem-solving";
import businessAcumen from "./descriptions/business-acumen";
import communication from "./descriptions/communication";
import craft from "./descriptions/craft";
import devOps from "./descriptions/dev-ops";
import SWE from "./descriptions/software-engineering";
import mobile from "./descriptions/mobile";
import projectManagement from "./descriptions/project-management";
import servers from "./descriptions/servers";
import webClient from "./descriptions/web-client";
import { Milestone, TrackId } from "../types";

export const milestoneDescriptions: Record<
  TrackId,
  {
    summary: string;
    signals: string;
    examples?: string;
  }[]
> = {
  [TrackId.MOBILE]: mobile,
  [TrackId.WEB_CLIENT]: webClient,
  [TrackId.SOFTWARE_ENGINEERING]: SWE,
  [TrackId.DEV_OPS]: devOps,
  [TrackId.SERVERS]: servers,
  [TrackId.PROJECT_MANAGEMENT]: projectManagement,
  [TrackId.COMMUNICATION]: communication,
  [TrackId.CRAFT]: craft,
  [TrackId.LEADERSHIP_INITIATIVE]: leadershipInitiative,
  [TrackId.PROBLEM_SOLVING]: problemSolving,
  [TrackId.BUSINESS_ACUMEN]: businessAcumen,
  [TrackId.OPERATIONAL_EXPERIENCE]: [],
  [TrackId.RECRUITMENT_EVANGELISM]: [],
};

export const milestones: Milestone[] = [0, 1, 2, 3, 4, 5];
