export type MaterialType = 'CV' | 'Recommendation' | 'Cover Letter';

export interface MaterialItem {
  id: string;
  title: string;
  type: MaterialType | string; // 👈 allow JSON strings
  description: string;
  file: string;
}

export interface MaterialsData {
  lastUpdated: string;
  items: MaterialItem[];
}
