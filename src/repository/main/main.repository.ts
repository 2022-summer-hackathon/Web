import { postLikeFeedParam, getFeedsByCategoryParam } from "./main.param";

class MainRepository {
  public async postLikeFeed({ count }: postLikeFeedParam) {}

  public async getFeedsByGenre({ category }: getFeedsByCategoryParam) {}
}

export default new MainRepository();
