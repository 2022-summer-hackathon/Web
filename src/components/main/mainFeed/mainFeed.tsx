import { Feed } from "../../../interfaces/main/main.type";
import {
  MainFeedArrow,
  MainFeedArrowIcon,
  MainFeedBottomBottomButton,
  MainFeedBottomBottomButtonIcon,
  MainFeedBottomBottomWrap,
  MAinFeedBottomContent,
  MainFeedBottomWrap,
  MainFeedContainer,
  MainFeedHeaderImage,
  MainFeedHeaderInfoWrap,
  MainFeedHeaderName,
  MainFeedHeaderWrap,
  MainFeedMiddleImg,
  MainFeedMiddleImgWrap,
} from "./style";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import useFeedDetail from "../../../hooks/main/useFeedDetail";

interface Props {
  feedData: Feed;
}

const MainFeed = ({ feedData }: Props) => {
  const {
    currentContentCount,
    likeCount,
    isLike,
    onLikeFeed,
    onChangeContent,
  } = useFeedDetail({ feedData });

  return (
    <MainFeedContainer>
      <MainFeedHeaderWrap>
        <MainFeedHeaderInfoWrap>
          <MainFeedHeaderImage src={feedData.user.auth.profileImage} />
          <MainFeedHeaderName>
            Lv.{feedData.user.level} {feedData.user.auth.name}
          </MainFeedHeaderName>
        </MainFeedHeaderInfoWrap>
      </MainFeedHeaderWrap>
      <MainFeedMiddleImgWrap>
        <MainFeedArrow direction="left" onClick={() => onChangeContent("left")}>
          <MainFeedArrowIcon>
            <MdOutlineArrowBackIosNew />
          </MainFeedArrowIcon>
        </MainFeedArrow>
        <MainFeedArrow
          direction="right"
          onClick={() => onChangeContent("right")}
        >
          <MainFeedArrowIcon>
            <MdOutlineArrowForwardIos />
          </MainFeedArrowIcon>
        </MainFeedArrow>

        <MainFeedMiddleImg src={feedData.pictures[currentContentCount]} />
      </MainFeedMiddleImgWrap>
      <MainFeedBottomWrap>
        <MAinFeedBottomContent>
          {feedData.content[currentContentCount]}
        </MAinFeedBottomContent>
      </MainFeedBottomWrap>
      <MainFeedBottomBottomWrap>
        <MainFeedBottomBottomButton onClick={onLikeFeed}>
          <MainFeedBottomBottomButtonIcon isClick={isLike}>
            <FaHeart />
          </MainFeedBottomBottomButtonIcon>
        </MainFeedBottomBottomButton>
      </MainFeedBottomBottomWrap>
    </MainFeedContainer>
  );
};

export default MainFeed;
