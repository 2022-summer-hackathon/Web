import { useRecoilState } from "recoil";
import { FeedAtom } from "../../../store/main/mainStore";
import { HomeCategoryItemContainer } from "./style";

interface Props {
  name: string;
}

const HomeCategoryItem = ({ name }: Props) => {
  const [FeedInfo, setFeedInfo] = useRecoilState(FeedAtom);

  return (
    <HomeCategoryItemContainer
      onClick={() => {
        setFeedInfo({ nane });
      }}
    >
      {name}
    </HomeCategoryItemContainer>
  );
};

export default HomeCategoryItem;
