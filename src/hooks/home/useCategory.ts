import { useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([
    "드라마",
    "판타지",
    "공포",
    "모험",
    "액션",
  ]);

  return { categories };
};

export default useCategory;
