import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useGetFeeds } from "../../queries/main/main.query";
import { FeedAtom } from "../../store/main/mainStore";

const useFeeds = () => {
  const [feeds, setFeeds] = useRecoilState(FeedAtom);
  const { data, isLoading } = useGetFeeds({
    staleTime: 200000,
    cacheTime: 200000,
    enabled: !!feeds,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setFeeds(data.data);
    }
  }, [setFeeds, data, isLoading]);

  return {};
};

export default useFeeds;
