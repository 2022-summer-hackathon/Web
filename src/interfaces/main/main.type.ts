import { Profile } from "../profile/profile.type";

export interface Feed {
  user: Profile;
  content: string[];
  like: number;
  rating: number;
  pictures: string[];
  category: string[];
  isLike: boolean;
  movie: string;
}

export interface FeedsByCategoryResponse extends Response {
  data: {};
}
