export interface Person {
  id: number;
  name: string;
  title: string;
  photo: string;
  publications: {
    links?: Array<{ title: string; url: string }> | null;
    categories?: string[];
  };
}
