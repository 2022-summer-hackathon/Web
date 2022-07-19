import {
  MainSearchButton,
  MainSearchButtonIcon,
  MainSearchContainer,
  MainSearchInput,
} from "./style";
import { GrSearch } from "react-icons/gr";

const MainSearch = () => {
  return (
    <MainSearchContainer onSubmit={() => console.log("Ss")}>
      <MainSearchButton type="submit">
        <MainSearchButtonIcon>
          <GrSearch />
        </MainSearchButtonIcon>
      </MainSearchButton>
      <MainSearchInput placeholder="검색어를 입력해주세요" />
    </MainSearchContainer>
  );
};

export default MainSearch;
