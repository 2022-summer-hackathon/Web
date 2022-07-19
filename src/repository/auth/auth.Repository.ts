import { loginResponse } from "../../interfaces/auth/auth.type";
import { customAxios } from "../../lib/axios/customAxios";
import { postLoginParam } from "./auth.param";

class AuthRepository {
  public async postLogin({ code }: postLoginParam): Promise<loginResponse> {
    const { data } = await customAxios.post("/auth/login", { code: code });
    return data;
  }
}

export default new AuthRepository();
