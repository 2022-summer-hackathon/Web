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
