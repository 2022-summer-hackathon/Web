import { PheedPostButtonImg, PheedButtonContainer } from "./style";
import AddButtonDeatail from "../../assets/icon/plus.svg";

const PostButton = () => {
  return (
    <PheedButtonContainer>
      <PheedPostButtonImg src={AddButtonDeatail} />
    </PheedButtonContainer>
  );
};

export default PostButton;
