export interface SkillItem {
  name: string;
  hasProductionExp: boolean;
}

export interface SkillTheme {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
  years: number;
}
