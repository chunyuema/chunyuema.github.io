export type Proficiency = 'Advanced' | 'Intermediate' | 'Proficient' | 'Learning';

export interface SkillItem {
  name: string;
  hasProductionExp: boolean;
  proficiency: Proficiency; // Now specific to each tool/skill
}

export interface Skill {
  name: string; // The "Theme" or "Sub-group" box
  years: number;
  items: SkillItem[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}
