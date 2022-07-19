import { Profile } from "../profile/profile.type";
import { Response } from "../util/util.type";

export interface Feed {
  idx: number;
  user: Profile;
  like: number;
  star: number;
  postingInfo: FeedContent[];
  isLike: boolean;
  movie: string;
  category: string[];
}

export interface FeedContent {
  idx: number;
  text: string;
  image: string;
}

export interface FeedsResponse extends Response {
  data: Feed[];
}

export interface FeedsByCategoryResponse extends Response {
  data: {};
}

export interface MakeFeed {
  movie: string;
  postInfo: {
    text: string;
    image: string;
  }[];
  star: number;
  category: string[];
}

export interface MovieInfo {
  movieNm: string;
  movieCd: string;
  genreAlt: string;
}

export interface MovieIntoResponse extends Response {
  movieListResult: {
    movieList: MovieInfo[];
  };
}

export interface UploadImageResponse extends Response {
  data: string;
}
