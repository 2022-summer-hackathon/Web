import { postLikeFeedParam } from "./main.param";

class MainRepository {
  public async postLikeFeed({ count }: postLikeFeedParam) {}
}

export default new MainRepository();
