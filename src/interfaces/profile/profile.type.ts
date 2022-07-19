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
}

export interface UserResponse extends Response {
  data: Profile;
}
