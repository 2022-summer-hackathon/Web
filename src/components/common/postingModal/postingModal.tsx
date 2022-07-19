import {
  MovieNameInputWrap,
  PostingModalContainer,
  PostingModalHeaderWrap,
  PostingModalOverlay,
  PostNewReviewTitle,
  MovieNameInput,
  MovieNameButton,
  MovieNameButtonIcon,
  MovieStarWrap,
  MovieNameResultWrap,
  MovieNameResultItem,
  PostingModalMovieFileLabel,
  PostingModalTextarea,
  PostingModalMovieFileLabelIcon,
  PostingModalFormButton,
  PostingModalFormAddButtonIcon,
  PostingModalMovieFileLabelWrap,
  PostingModalMovieFileImage,
  PostingModalSubmitButton,
} from "./style";
import { GrSearch } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";
import { Rate } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Dispatch, SetStateAction } from "react";
import usePostFeed from "../../../hooks/main/usePostFeed";
import "antd/dist/antd.css";

interface Props {
  setIsClick: Dispatch<SetStateAction<boolean>>;
}

const PostingModal = ({ setIsClick }: Props) => {
  const {
    onChangeStar,
    onChangeMovieName,
    onSearchMovie,
    selectedSearchedMovie,
    onChangeText,
    onSubmitImage,
    onCreateNextContent,
    onMoveContent,
    onSubmitFeed,
    makeFeedData,
    tempMovieName,
    isSearched,
    searchedMovies,
    currentContentCount,
    tempMakeFeeds,
    maxContentCount,
  } = usePostFeed();

  return (
    <>
      <PostingModalOverlay onClick={() => setIsClick(false)} />
      <PostingModalContainer>
        <PostingModalHeaderWrap>
          <PostNewReviewTitle>새 리뷰 올리기</PostNewReviewTitle>
          <PostingModalSubmitButton onClick={onSubmitFeed}>
            게시
          </PostingModalSubmitButton>
        </PostingModalHeaderWrap>

        <MovieNameInputWrap>
          <MovieNameInput
            placeholder="영화 제목을 입력해주세요."
            onChange={onChangeMovieName}
            value={tempMovieName}
          />
          <MovieNameButton onClick={onSearchMovie}>
            <MovieNameButtonIcon>
              <GrSearch />
            </MovieNameButtonIcon>
          </MovieNameButton>
          {isSearched && (
            <MovieNameResultWrap height={searchedMovies.length}>
              {searchedMovies.map((item) => (
                <MovieNameResultItem
                  onClick={() => selectedSearchedMovie(item.movieNm)}
                >
                  ({item.movieCd.slice(0, 4)}) {item.movieNm}
                </MovieNameResultItem>
              ))}
            </MovieNameResultWrap>
          )}
        </MovieNameInputWrap>
        <MovieStarWrap>
          평점 :
          <Rate
            onChange={onChangeStar}
            allowHalf
            defaultValue={0.0}
            count={5}
          />
          {makeFeedData.star}점
        </MovieStarWrap>
        <input
          type={"file"}
          accept={"image/*"}
          id="postingModalFileInput"
          onChange={onSubmitImage}
        />
        <PostingModalMovieFileLabelWrap>
          {tempMakeFeeds[currentContentCount].image === "" ? (
            <PostingModalMovieFileLabel htmlFor="postingModalFileInput">
              <PostingModalMovieFileLabelIcon>
                <FiPlus />
              </PostingModalMovieFileLabelIcon>
            </PostingModalMovieFileLabel>
          ) : (
            <PostingModalMovieFileImage
              src={tempMakeFeeds[currentContentCount].image}
              alt="zzz"
            />
          )}
          {currentContentCount !== 0 && (
            <PostingModalFormButton
              direction="left"
              onClick={() => onMoveContent("left")}
            >
              <PostingModalFormAddButtonIcon>
                <IoIosArrowBack />
              </PostingModalFormAddButtonIcon>
            </PostingModalFormButton>
          )}
          {currentContentCount === maxContentCount ? (
            <PostingModalFormButton
              onClick={onCreateNextContent}
              direction="right"
            >
              <PostingModalFormAddButtonIcon>
                <FiPlus />
              </PostingModalFormAddButtonIcon>
            </PostingModalFormButton>
          ) : (
            <PostingModalFormButton
              direction="right"
              onClick={() => onMoveContent("right")}
            >
              <PostingModalFormAddButtonIcon>
                <IoIosArrowForward />
              </PostingModalFormAddButtonIcon>
            </PostingModalFormButton>
          )}
        </PostingModalMovieFileLabelWrap>
        <PostingModalTextarea
          placeholder="내용을 입력해주세요"
          onChange={onChangeText}
          value={tempMakeFeeds[currentContentCount].text}
        />
      </PostingModalContainer>
    </>
  );
};

export default PostingModal;
