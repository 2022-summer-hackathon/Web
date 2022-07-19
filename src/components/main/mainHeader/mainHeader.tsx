import {
  MainHeaderContainer,
  MainHeaderLogo,
  MainHeaderLogoText,
  MainHeaderLogoWrap,
} from "./style";
import TextLogo from "../../assets/icon/textIcon.svg";
import MainSearch from "../mainSearch/mainSearch";

const MainHeader = () => {
  return (
    <MainHeaderContainer>
      <MainHeaderLogoWrap>
        <MainHeaderLogo src={TextLogo} />
        <MainHeaderLogoText>영화 리뷰에 감성을 더하다</MainHeaderLogoText>
      </MainHeaderLogoWrap>
      <MainSearch />
    </MainHeaderContainer>
  );
};

export default MainHeader;
