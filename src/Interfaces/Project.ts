export interface Project {
  title: string;
  description: string;
  price: number;
  currency: "BRL" | "USD";
  dateStart: Date;
  dateEnd: Date | null;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
  employerId: string;
  employerComment: string;
  private: boolean;
  skills: Array<string>;
  category: string;
}
