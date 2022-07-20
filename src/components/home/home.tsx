import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { HOME_CATEGORY_ITEMS } from "../../constants/home/home.constant";
import { customAxios } from "../../lib/axios/customAxios";
import { FeedAtom } from "../../store/main/mainStore";
import HomeCategoryItem from "./homeCategoryItem/homeCategoryItem";
import { HomeContainer } from "./style";

const Home = () => {
  const [FeedInfo, setFeedInfo] = useRecoilState(FeedAtom);
  const navigate = useNavigate();

  return (
    <HomeContainer>
      {HOME_CATEGORY_ITEMS.map((item, idx) => (
        <HomeCategoryItem name={item} />
      ))}
    </HomeContainer>
  );
};

export default Home;
