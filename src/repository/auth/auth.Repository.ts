import { customAxios } from "../../lib/axios/customAxios";
import { postLoginParam } from "./auth.param";

class AuthRepository {
  public async postLogin({ code }: postLoginParam) {
    await customAxios.post("/auth/login", { code: code });
  }
}

export default new AuthRepository();
