import { useRecoilValue } from "recoil";
import useFeeds from "../../hooks/main/useFeeds";
import { FeedAtom } from "../../store/main/mainStore";
import PostingButton from "../common/postingButton/postButton";
import MainFeed from "./mainFeed/mainFeed";
import MainHeader from "./mainHeader/mainHeader";
import { MainContainer, MainFeedWrap, MainWrap } from "./style";

const Main = () => {
  useFeeds();
  const feeds = useRecoilValue(FeedAtom);

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
