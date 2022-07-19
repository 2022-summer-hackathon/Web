import { useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([
    "전체",
    "드라마",
    "판타지",
    "서부",
    "공포",
    "로맨스",
    "모험",
    "스릴러",
    "느와르",
    "컬트",
    "다큐멘터리",
    "코미디",
    "가족",
    "미스터리",
    "전쟁",
    "애니메이션",
    "범죄",
    "뮤지컬",
    "SF",
    "액션",
  ]);

  return { categories };
};

export default useCategory;
