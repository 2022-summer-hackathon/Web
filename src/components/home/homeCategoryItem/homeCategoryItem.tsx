import useCategory from "../../../hooks/home/useCategory";
import { HomeCategoryItemContainer } from "./style";

interface Props {
  name: string;
}

const HomeCategoryItem = ({ name }: Props) => {
  const { requestCategoryMovie } = useCategory({ category: name });

  return (
    <HomeCategoryItemContainer onClick={requestCategoryMovie}>
      {name}
    </HomeCategoryItemContainer>
  );
};

export default HomeCategoryItem;
