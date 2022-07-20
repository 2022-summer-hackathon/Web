import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { MakeFeed, MovieInfo } from "../../interfaces/main/main.type";
import mainRepository from "../../repository/main/main.repository";

const usePostFeed = () => {
  const [makeFeedData, setMakeFeedData] = useState<MakeFeed>({
    movie: "",
    postInfo: [],
    star: 0.0,
    category: [],
  });

  const [tempMovieName, setTempMovieName] = useState<string>("");
  const [isSearched, setIsSearched] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState<MovieInfo[]>([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [tempMakeFeeds, setTempMakeFeeds] = useState<
    { text: string; image: string }[]
  >([{ text: "", image: "" }]);
  const [maxContentCount, setMaxContentCount] = useState(0);
  const [currentContentCount, setCurrentContentCount] = useState(0);

  const onChangeStar = (e: number) => {
    setMakeFeedData((prev) => ({ ...prev, star: e }));
  };

  const onSubmitImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        const file = e.target.files[0];
        setIsPostLoading(true);
        try {
          const { data } = await mainRepository.postUploadImage(file);
          setTempMakeFeeds((prev) => {
            let newValue = [...prev];
            newValue[currentContentCount].image = data;

            return newValue;
          });
          setIsPostLoading(false);
        } catch (error) {
          setIsPostLoading(false);

          window.alert("업로드 실패");
        }
      }
    },
    [currentContentCount]
  );

  useEffect(() => {
    console.log(tempMakeFeeds);
  }, [tempMakeFeeds]);

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setTempMakeFeeds((prev) => {
      let newValue = [...prev];
      newValue[currentContentCount].text = value;
      return newValue;
    });
  };

  const onCreateNextContent = () => {
    if (
      tempMakeFeeds[currentContentCount].text !== "" &&
      tempMakeFeeds[currentContentCount].image !== ""
    ) {
      setCurrentContentCount((prev) => prev + 1);
      setMaxContentCount((prev) => prev + 1);
      setTempMakeFeeds((prev) => [...prev, { text: "", image: "" }]);
    } else {
      window.alert("내용을 전부 입력해주시고 넘겨주세요 ");
    }
  };

  const onMoveContent = (direction: "left" | "right") => {
    if (direction === "left" && currentContentCount > 0) {
      setCurrentContentCount((prev) => prev - 1);
    } else if (direction === "right") {
      setCurrentContentCount((prev) => prev + 1);
    }
  };

  const onChangeMovieName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTempMovieName(value);
  };

  const onSearchMovie = async () => {
    setIsPostLoading(true);
    try {
      const { movieListResult } = await mainRepository.getMovieInfo({
        movieName: tempMovieName,
      });
      setIsSearched(true);
      setSearchedMovies(movieListResult.movieList);
      setIsPostLoading(false);
    } catch (error) {
      setIsPostLoading(false);
      console.log(error);
    }
  };

  const selectedSearchedMovie = (name: string) => {
    const movieInfo = searchedMovies.filter((item) => item.movieNm === name)[0];
    setMakeFeedData((prev) => ({
      ...prev,
      movie: movieInfo.movieNm,
      category: movieInfo.genreAlt.split(","),
    }));
    setTempMovieName(name);
    setIsSearched(false);
  };

  const onSubmitFeed = async () => {
    const { movie, star, category } = makeFeedData;
    const validMakeFeed: MakeFeed = {
      movie,
      star,
      category,
      postInfo: tempMakeFeeds,
    };

    if (validMakeFeed.movie === "" || validMakeFeed.star === 0.0) {
      window.alert("내용을 다 입력해주세요");

      return;
    }
    setIsPostLoading(true);

    try {
      await mainRepository.postMakeFeed(validMakeFeed);
      window.location.reload();
      setIsPostLoading(false);
      window.alert("업로드 성공");
    } catch (error) {
      setIsPostLoading(false);
      window.alert("업로드 실패");
    }
  };
  return {
    onChangeStar,
    onChangeMovieName,
    onSearchMovie,
    selectedSearchedMovie,
    onChangeText,
    onSubmitImage,
    onCreateNextContent,
    onMoveContent,
    onSubmitFeed,
    makeFeedData,
    tempMovieName,
    isSearched,
    searchedMovies,
    currentContentCount,
    tempMakeFeeds,
    maxContentCount,
    isPostLoading,
  };
};

export default usePostFeed;
