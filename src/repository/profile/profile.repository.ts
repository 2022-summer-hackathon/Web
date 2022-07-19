import { UserResponse } from "../../interfaces/profile/profile.type";
import { customAxios } from "../../lib/axios/customAxios";

class ProfileRepository {
  public async getUser(): Promise<UserResponse> {
    const { data } = await customAxios.get("/user");
    return data;
  }
}

export default new ProfileRepository();
