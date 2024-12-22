export interface Story {
  id: string;
  title: string;
  content: string;
  freeHint: string;
  premiumHints: string[];
  answer: string;
  coins: number;
  level: number;
}

export interface User {
  name: string;
  level: number;
  coins: number;
  score: number;
}