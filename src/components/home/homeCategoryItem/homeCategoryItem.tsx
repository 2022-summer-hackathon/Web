import { HomeCategoryItemContainer } from "./style";

interface Props {
  name: string;
}

const HomeCategoryItem = ({ name }: Props) => {
  return <HomeCategoryItemContainer>{name}</HomeCategoryItemContainer>;
};

export default HomeCategoryItem;
