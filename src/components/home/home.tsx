import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import useCategory from "../../hooks/home/useCategory";
import { customAxios } from "../../lib/axios/customAxios";
import { FeedAtom } from "../../store/main/mainStore";
import HomeCategoryItem from "./homeCategoryItem/homeCategoryItem";
import { HomeContainer } from "./style";

const Home = () => {
  const { categories } = useCategory();
  const [FeedInfo, setFeedInfo] = useRecoilState(FeedAtom);
  const navigate = useNavigate();

  return (
    <HomeContainer>
      {categories.map((item, idx) => (
        <HomeCategoryItem name={item} />
      ))}
    </HomeContainer>
  );
};

export default Home;
