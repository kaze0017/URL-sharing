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

export interface SharedLinkType {
  id: number;
  title: string;
  type: "article" | "video" | "podcast" | "image" | "other";
  url: string;
  popularity: number | 0;
  views: number | 0;
  saved: boolean | false;
  thumbnail?: string;
  description?: string;
  health?: "healthy" | "unhealthy" | "unknown";
  owner: Person;
}
