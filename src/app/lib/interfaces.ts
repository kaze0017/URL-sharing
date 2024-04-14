export interface Person {
  id: number;
  name: string;
  title: string;
  photo: string;
  followers?: number;
  publications: {
    links?: Array<{ title: string; url: string }> | null;
    categories?: string[];
  };
  rankCount?: number;
  sharesCount?: number;
  subscribersCount?: number;
}

export interface SharedLinkType {
  id: number;
  title: string;
  type: "article" | "video" | "podcast" | "image" | "other";
  url: string;
  popularity: number | 0;
  views: number | 0;
  sharedCount?: number | 0;
  rankCount?: number | 0;
  seenCount?: number | 0;
  savedCount?: number | 0;
  saved: boolean | false;
  thumbnail?: string | "default";
  description?: string;
  health?: "healthy" | "unhealthy" | "unknown";
  owner: Person;
  publicationDate?: string;
  expirationDate?: string;
  sharedLinks?: SharedLinkType[];
  tags?: string[] | ['tag1', 'tag2', 'tag3'];
}

export interface CategoryType {
  id?: number;
  title: string;
  owner: Person;
}
