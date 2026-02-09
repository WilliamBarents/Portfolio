export interface Experience {
  title: string;
  company: string;
  engagement: string; // 👈 loosened
  location: {
    type: string;
    region: string;
  };
  period: {
    start: string;
    end: string;
  };
  summary: string;
  responsibilities: string[];
  technologies: string[];
}
