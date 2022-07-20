import { Feed } from "../../../interfaces/main/main.type";
import {
  MainFeedArrow,
  MainFeedArrowIcon,
  MainFeedBottomBottomButton,
  MainFeedBottomBottomButtonIcon,
  MainFeedBottomBottomStarText,
  MainFeedBottomBottomWrap,
  MainFeedBottomCategory,
  MainFeedBottomCategoryWrap,
  MAinFeedBottomContent,
  MAinFeedBottomMovieName,
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
          <MainFeedHeaderImage
            src={"http://dodam.b1nd.com/static/media/profile.9a3a77b0.svg"}
          />
          <MainFeedHeaderName>
            Lv.{feedData.user.level} {feedData.user.auth?.name}
          </MainFeedHeaderName>
        </MainFeedHeaderInfoWrap>
      </MainFeedHeaderWrap>
      <MainFeedMiddleImgWrap>
        {currentContentCount !== 0 && (
          <MainFeedArrow
            direction="left"
            onClick={() => onChangeContent("left")}
          >
            <MainFeedArrowIcon>
              <MdOutlineArrowBackIosNew />
            </MainFeedArrowIcon>
          </MainFeedArrow>
        )}
        {currentContentCount !== feedData.postingInfo.length - 1 && (
          <MainFeedArrow
            direction="right"
            onClick={() => onChangeContent("right")}
          >
            <MainFeedArrowIcon>
              <MdOutlineArrowForwardIos />
            </MainFeedArrowIcon>
          </MainFeedArrow>
        )}

        <MainFeedMiddleImg
          src={feedData.postingInfo[currentContentCount]?.image}
        />
      </MainFeedMiddleImgWrap>
      <MainFeedBottomWrap>
        <MAinFeedBottomMovieName>
          {feedData.movie} ⭐{feedData.star}
        </MAinFeedBottomMovieName>
        <MAinFeedBottomContent>
          {feedData.postingInfo[currentContentCount]?.text}
        </MAinFeedBottomContent>
        <MainFeedBottomCategoryWrap>
          {feedData?.category.map((item) => (
            <MainFeedBottomCategory
              key={feedData.movie + "category " + item.idx}
            >
              #{item.category}
            </MainFeedBottomCategory>
          ))}
        </MainFeedBottomCategoryWrap>
      </MainFeedBottomWrap>
      <MainFeedBottomBottomWrap>
        <MainFeedBottomBottomButton onClick={onLikeFeed}>
          <MainFeedBottomBottomButtonIcon isClick={isLike}>
            <FaHeart />
          </MainFeedBottomBottomButtonIcon>
        </MainFeedBottomBottomButton>
        <MainFeedBottomBottomStarText>
          {`이 리뷰에 ${likeCount}명이 공감했습니다`}
        </MainFeedBottomBottomStarText>
      </MainFeedBottomBottomWrap>
    </MainFeedContainer>
  );
};

export default MainFeed;
