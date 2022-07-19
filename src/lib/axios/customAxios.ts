import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constants";
import getBearer from "../../utils/getBearer";
import token from "../token/token";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: getBearer(token.getToken(ACCESS_TOKEN_KEY)!),
  },
});
