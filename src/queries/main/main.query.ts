import { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { FeedsResponse } from "../../interfaces/main/main.type";
import {
  postDisLikeFeedParam,
  postLikeFeedParam,
} from "../../repository/main/main.param";
import mainRepository from "../../repository/main/main.repository";

export const usePostLikeFeed = () => {
  const mutation = useMutation(({ idx }: postLikeFeedParam) =>
    mainRepository.postLikeFeed({ idx })
  );
  return mutation;
};

export const usePostDisLikeFeed = () => {
  const mutation = useMutation(({ idx }: postDisLikeFeedParam) =>
    mainRepository.postDisLikeFeed({ idx })
  );

  return mutation;
};

export const useGetFeeds = (
  options?: UseQueryOptions<
    FeedsResponse,
    AxiosError,
    FeedsResponse,
    "main/getFeeds"
  >
): UseQueryResult<FeedsResponse, AxiosError> =>
  useQuery("main/getFeeds", () => mainRepository.getFeeds(), options);
