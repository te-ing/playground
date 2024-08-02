export interface PageResonse {
  data: {
    id: number;
    name: string;
    age: number;
  }[];
  nextPage: number;
  totalPages: number;
}
