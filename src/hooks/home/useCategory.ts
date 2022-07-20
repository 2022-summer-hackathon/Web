import { useRecoilState } from "recoil";
import mainRepository from "../../repository/main/main.repository";
import { FeedAtom } from "../../store/main/mainStore";

interface Params {
  category: string;
}

const useCategory = ({ category }: Params) => {
  const [feeds, setFeeds] = useRecoilState(FeedAtom);

  const requestCategoryMovie = async () => {
    try {
      const { data } = await mainRepository.getFeedsByCategory({ category });
      setFeeds(data);
    } catch (e) {
      window.alert("카테고리 무비 불러오기 에러");
    }
  };

  return { requestCategoryMovie };
};

export default useCategory;
