import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useGetFeeds } from "../../queries/main/main.query";
import { FeedAtom } from "../../store/main/mainStore";

const useFeeds = () => {
  const [feeds, setFeeds] = useRecoilState(FeedAtom);
  const { data, isLoading } = useGetFeeds({ enabled: !!feeds });

  useEffect(() => {
    if (!isLoading && data) {
      setFeeds(data.data);
    }
  }, []);

  useEffect(() => {
    console.log(feeds);
  }, [feeds]);

  return {};
};

export default useFeeds;
