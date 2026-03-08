export type EntryType = "professional" | "research";

export interface EmploymentEntry {
  company: string;
  position: string;
  location: string;
  dateRange: string;
  descriptionPoints: string[];
  logoUrl?: string;
  technologies: string[];
  type: EntryType;
}
