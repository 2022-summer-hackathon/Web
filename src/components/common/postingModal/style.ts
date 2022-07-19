import styled from "styled-components";

export const PostingModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 3;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const PostingModalContainer = styled.div`
  position: fixed;
  width: 890px;
  height: 900px;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 14px;
  border: 1px solid rgb(219, 219, 219);
  z-index: 4;
  overflow: hidden;

  input[type="file"] {
    display: none;
  }
`;

export const PostingModalHeaderWrap = styled.div`
  width: 100%;
  min-height: 60px;
  padding: 0px 20px;
  border-bottom: 1px solid #b7b7b7;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostingModalSubmitButton = styled.button`
  width: 120px;
  height: 40px;
  color: white;
  border-radius: 14px;
  border: 0px;
  background: ${({ theme }) => theme.mainBackground};
  font-size: 18px;
`;

export const PostNewReviewTitle = styled.div`
  color: black;
  font-size: 24px;
`;

export const MovieNameInputWrap = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 13px 20px;
  outline: none;
  border-bottom: 1px solid #b7b7b7;
  column-gap: 10px;
  position: relative;
`;

export const MovieNameInput = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: none;
  font-size: 20px;
  outline: none;
`;

export const MovieNameButton = styled.button`
  width: 38px;
  height: 38px;
  border: 0px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieNameButtonIcon = styled.div`
  width: 32px;
  height: 32px;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MovieNameResultWrap = styled.div<{ height: number }>`
  width: 890px;
  bottom: -${({ height }) => height * 60}px;
  left: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 2;
`;

export const MovieNameResultItem = styled.div`
  width: 100%;
  min-height: 60px;
  padding: 13px 20px;
  cursor: pointer;
  border-bottom: 1px solid #b7b7b7;
  display: flex;
  align-items: center;

  &:first-child {
    border-top: 1px solid #b7b7b7;
  }

  &:hover {
    background-color: #bdbdbd;
  }
`;

export const MovieStarWrap = styled.div`
  width: 100%;
  min-height: 60px;
  border-bottom: 1px solid #b7b7b7;
  padding: 13px 20px;
  display: flex;
  column-gap: 5px;
  align-items: center;
  font-size: 20px;
`;

export const PostingModalMovieFileLabelWrap = styled.div`
  width: 100%;
  min-height: 540px;
  position: relative;
  z-index: 1;
`;

export const PostingModalMovieFileLabel = styled.label`
  width: 100%;
  height: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PostingModalMovieFileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostingModalFormButton = styled.div<{
  direction: "left" | "right";
}>`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "left" ? "left :10px" : "right :10px")};
  transform: translate(-0%, -50%);
  z-index: 2;
`;

export const PostingModalFormAddButtonIcon = styled.div`
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostingModalMovieFileLabelIcon = styled.div`
  width: 110px;
  height: 110px;
  font-size: 110px;
  color: black;
`;

export const PostingModalTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  padding: 20px;
  border: 0px;
`;
