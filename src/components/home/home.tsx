import { HOME_CATEGORY_ITEMS } from "../../constants/home/home.constant";
import HomeCategoryItem from "./homeCategoryItem/homeCategoryItem";
import { HomeContainer } from "./style";
const Home = () => {
  return (
    <HomeContainer>
      {HOME_CATEGORY_ITEMS.map((item, idx) => (
        <HomeCategoryItem name={item} />
      ))}
    </HomeContainer>
  );
};

export default Home;
