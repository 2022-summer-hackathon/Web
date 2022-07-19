import { PheedButtonContainer, PheedPostIcon } from "./style";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const PostButton = () => {
  const [postState, setPostState] = useState(true);
  return (
    <PheedButtonContainer onClick={() => setPostState((prev) => !prev)}>
      <PheedPostIcon isClick={postState}>
        <FaPlus />
      </PheedPostIcon>
    </PheedButtonContainer>
  );
};

export default PostButton;
