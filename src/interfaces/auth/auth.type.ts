import { Response } from "../util/util.type";

export interface loginResponse extends Response {
  data: {
    refreshToken: string;
    token: string;
  };
}
