import { Response } from "../util/util.type";

export interface Profile {
  idx: number;
  level: number;
  exp: number;
  auth: {
    name: string;
    accessLevel: number;
    profileImage: string;
  };
  posting: ProfileMyFeed[];
}

export interface ProfileMyFeed {
  idx: number;
  likeCount: number;
  movie: string;
  star: number;
}

export interface UserResponse extends Response {
  data: {
    remainExp: number;
    userData: Profile;
  };
}
