import { PheedCancelButtonContainer, PheedCancelButtonImg } from "./style";
import PheedCancelButtonDetail from "../assets/icon/cancel.svg";

const CancelButton = () => {
  return (
    <PheedCancelButtonContainer>
      <PheedCancelButtonImg src={PheedCancelButtonDetail} />
    </PheedCancelButtonContainer>
  );
};

export default CancelButton;
