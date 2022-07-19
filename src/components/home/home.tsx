import useCategory from "../../hooks/home/useCategory";
import HomeCategoryItem from "./homeCategoryItem/homeCategoryItem";
import { HomeContainer } from "./style";

const Home = () => {
  const { categories } = useCategory();

  return (
    <HomeContainer>
      {categories.map((item) => (
        <HomeCategoryItem name={item} />
      ))}
    </HomeContainer>
  );
};

export default Home;
