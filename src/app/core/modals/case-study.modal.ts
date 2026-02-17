export interface ArchitectureLayer {
  title: string;
  items: BulletItem[];
}

export interface CaseStudyData {
  techTags: TechTag[];
  architecture: ArchitectureLayer[];
  security: BulletItem[];
  securityFlow: string[];
  deepDive: TitledSection[];
  challenges: ChallengeItem[];
  improvements: BulletItem[];
}

export type TechTag = string;
export type BulletItem = string;

export interface ChallengeItem {
  problem: string;
  solution: string;
}

export interface ArchitectureSection {
  frontend: BulletItem[];
  backend: BulletItem[];
  data: BulletItem[];
}

export interface TitledSection {
  title: string;
  items: BulletItem[];
}
