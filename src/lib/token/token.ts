import jwt, { JwtPayload } from "jsonwebtoken";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constants";
import ls from "../ls/ls";

class Token {
  public getToken(key: string): string | null {
    return ls.getItem(key);
  }

  public decodeToken(key: string) {
    return jwt.decode(this.getToken(key)!) as JwtPayload;
  }

  public setToken(key: string, token: string): void {
    ls.setItem(key, token);
  }

  public clearToken() {
    ls.removeItem(ACCESS_TOKEN_KEY);
    ls.removeItem(REFRESH_TOKEN_KEY);
  }
}

export default new Token();
