import styled from "styled-components";

export const NewPostContainer = styled.div`
  position: fixed;
  width: 800px;
  height: 700px;
  display: flex;
  flex-direction: column;
  bottom: 190px;
  top: 190px;
  right: 560px;
  left: 560px;
  background-color: white;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid black;
`;

export const PostNewReviewTitle = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  display: flex;
  border-bottom: 1px solid black;
  font-size: 20px;
`;

export const MovieTitleInput = styled.input`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: center;
  text-align: left;
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
`;

export const ReviewStarPointWrap = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  border-bottom: 1px solid black;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const UnselectedStarWrap = styled.div`
  z-index: 1;
  width: 100%;
  height: 66px;
  position: fixed;
  font-size: 50px;
`;

export const SelectedStarWrap = styled.div`
  z-index: 2;
  width: 100%;
  height: 66px;
  position: fixed;
  font-size: 50px;
`;

export const MainTextWrap = styled.div``;
