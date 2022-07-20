import axios from "axios";
import {
  FeedsByCategoryResponse,
  FeedsResponse,
  MakeFeed,
  MovieIntoResponse,
  UploadImageResponse,
} from "../../interfaces/main/main.type";
import { customAxios } from "../../lib/axios/customAxios";
import {
  getMovieInfoParam,
  postLikeFeedParam,
  getFeedsByCategoryParam,
  postDisLikeFeedParam,
} from "./main.param";

class MainRepository {
  public async postMakeFeed(makeFeedData: MakeFeed): Promise<void> {
    await customAxios.post("/posting", makeFeedData);
  }

  public async postLikeFeed({ idx }: postLikeFeedParam) {
    await customAxios.post(`/posting/plus/${idx}`);
  }

  public async postDisLikeFeed({ idx }: postDisLikeFeedParam) {
    await customAxios.post(`/posting/minus/${idx}`);
  }

  public async getFeeds(): Promise<FeedsResponse> {
    const { data } = await customAxios.get("/posting");
    return data;
  }

  public async getFeedsByCategory({
    category,
  }: getFeedsByCategoryParam): Promise<FeedsByCategoryResponse> {
    const { data } = await customAxios.get(
      `/posting/movie/category/${category}`
    );
    return data;
  }

  public async getMovieInfo({
    movieName,
  }: getMovieInfoParam): Promise<MovieIntoResponse> {
    const { data } = await axios.get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=fbe7b85e1499fa60a6452c14262a6bef&movieNm=${movieName}`
    );

    return data;
  }

  public async postUploadImage(image: File): Promise<UploadImageResponse> {
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await customAxios.post("/posting/image", formData);
    return data;
  }
}

export default new MainRepository();
