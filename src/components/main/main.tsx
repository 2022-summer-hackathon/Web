import { useEffect } from "react";
import { useRecoilState } from "recoil";
import useFeeds from "../../hooks/main/useFeeds";
import { FeedAtom } from "../../store/main/mainStore";
import PostingButton from "../common/postingButton/postButton";
import MainFeed from "./mainFeed/mainFeed";
import MainHeader from "./mainHeader/mainHeader";
import { MainContainer, MainFeedWrap, MainWrap } from "./style";

const Main = () => {
  useFeeds();
  const [feeds, setFeeds] = useRecoilState(FeedAtom);

  console.log(feeds);

  useEffect(() => {
    console.log(feeds);
  }, [feeds]);

  return (
    <MainContainer>
      <MainWrap>
        <MainHeader />
        <MainFeedWrap>
          {feeds.map((item) => (
            <MainFeed feedData={item} />
          ))}
        </MainFeedWrap>
      </MainWrap>
      <PostingButton />
    </MainContainer>
  );
};

export default Main;
