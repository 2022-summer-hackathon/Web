import { PostingButtonContainer, PostingButtonIcon } from "./style";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PostingModal from "../postingModal/postingModal";

const PostingButton = () => {
  const [isClick, setIsClick] = useState(true);
  return (
    <>
      <PostingButtonContainer onClick={() => setIsClick((prev) => !prev)}>
        <PostingButtonIcon isClick={isClick}>
          <FaPlus />
        </PostingButtonIcon>
      </PostingButtonContainer>
      {isClick && <PostingModal setIsClick={setIsClick} />}
    </>
  );
};

export default PostingButton;
