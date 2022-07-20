import { useState } from "react";
import { Feed } from "../../interfaces/main/main.type";
import {
  usePostDisLikeFeed,
  usePostLikeFeed,
} from "../../queries/main/main.query";

interface Params {
  feedData: Feed;
}

const useFeedDetail = ({ feedData }: Params) => {
  const postLikeFeedMutation = usePostLikeFeed();
  const postDisLikeFeedMutation = usePostDisLikeFeed();
  const [currentContentCount, setCurrentContentCount] = useState(0);
  const [likeCount, setLikeCount] = useState<number>(feedData.likeCount);
  const [isLike, setIsLike] = useState(feedData.isLike);

  const onLikeFeed = async () => {
    if (isLike) {
      postDisLikeFeedMutation.mutateAsync(
        { idx: feedData.idx },
        {
          onSuccess: () => {
            setLikeCount((prev) => prev - 1);
            setIsLike((prev) => !prev);
          },
        }
      );
    } else {
      postLikeFeedMutation.mutateAsync(
        { idx: feedData.idx },
        {
          onSuccess: () => {
            setLikeCount((prev) => prev + 1);
            setIsLike((prev) => !prev);
          },
        }
      );
    }
  };

  const onChangeContent = (scope: "left" | "right") => {
    if (scope === "left" && currentContentCount > 0) {
      setCurrentContentCount((prev) => prev - 1);
    } else if (
      scope === "right" &&
      currentContentCount < feedData.postingInfo.length - 1
    ) {
      setCurrentContentCount((prev) => prev + 1);
    }
  };

  return {
    currentContentCount,
    likeCount,
    isLike,
    onLikeFeed,
    onChangeContent,
  };
};

export default useFeedDetail;
