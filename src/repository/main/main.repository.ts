import axios from "axios";
import {
  MakeFeed,
  MovieIntoResponse,
  UploadImageResponse,
} from "../../interfaces/main/main.type";
import { customAxios } from "../../lib/axios/customAxios";
import { getMovieInfoParam, postLikeFeedParam } from "./main.param";

class MainRepository {
  public async postMakeFeed(makeFeedData: MakeFeed): Promise<void> {
    await customAxios.post("/posting", makeFeedData);
  }

  public async postLikeFeed({ count }: postLikeFeedParam) {}

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
