import { useMutation } from "react-query";
import { postLikeFeedParam } from "../../repository/main/main.param";
import mainRepository from "../../repository/main/main.repository";

export const usePostLikeFeed = () => {
  const mutation = useMutation(({ count }: postLikeFeedParam) =>
    mainRepository.postLikeFeed({ count })
  );
  return mutation;
};
