export interface SkillItem {
  name: string;
  hasProductionExp: boolean;
}

export interface SkillTheme {
  id: string;
  pillarId?: 'availability' | 'observability' | 'hpc';
  title: string;
  description: string;
  skills: SkillItem[];
  years: number;
}
