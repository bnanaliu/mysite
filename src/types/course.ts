export interface Chapter {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExample: string;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}
