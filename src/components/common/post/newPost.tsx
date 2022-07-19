import {
  MovieTitleInput,
  NewPostContainer,
  PostNewReviewTitle,
  ReviewStarPointWrap,
  SelectedStarWrap,
  UnselectedStarWrap,
} from "./style";
import { AiOutlineStar } from "react-icons/ai";
import { HiStar } from "react-icons/hi";
// import selectedStar from "../../assets/icon/selectedStar.png";
// import unselectedStar from "../../assets/icon/unselectedStar.png";
import React, { useState } from "react";

const NewPost = () => {
  const [inputValue, setInputValue] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(Number(e.target.value));
  }
  return (
    <NewPostContainer>
      <PostNewReviewTitle>새 리뷰 올리기</PostNewReviewTitle>
      <MovieTitleInput placeholder="영화 제목을 입력해주세요." />
      <ReviewStarPointWrap>
        <UnselectedStarWrap>
          {Array.from({ length: 5 }).map((idx) => (
            <AiOutlineStar />
          ))}
        </UnselectedStarWrap>
        {/* {Array.from({ length: inputValue }).inputV} */}
        <SelectedStarWrap style={{ width: inputValue * (130 / 5) }}>
          {Array.from({ length: 5 }).map((idx) => (
            <HiStar fill={"yellow"} />
          ))}
          <input
            type="number"
            value={inputValue}
            onChange={handleChange}
            placeholder="별점은?"
          />
        </SelectedStarWrap>
      </ReviewStarPointWrap>
    </NewPostContainer>
  );
};

export default NewPost;
