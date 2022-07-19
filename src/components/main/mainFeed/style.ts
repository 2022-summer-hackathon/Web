import styled, { css } from "styled-components";

export const MainFeedContainer = styled.div`
  width: 540px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const MainFeedHeaderWrap = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0px 12px;
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const MainFeedHeaderInfoWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const MainFeedHeaderImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 100%;
`;

export const MainFeedHeaderName = styled.span`
  font-size: 14px;
  color: black;
`;

export const MainFeedMiddleImgWrap = styled.div`
  width: 540px;
  height: 540px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const MainFeedMiddleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MainFeedArrow = styled.button<{ direction: "left" | "right" }>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: white;
  color: black;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translate(-0%, -50%);
  border: 0px;
  cursor: pointer;

  ${({ direction }) =>
    direction === "left"
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `}
`;

export const MainFeedArrowIcon = styled.div`
  width: 15px;
  height: 15px;
  font-size: 15px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainFeedBottomWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 12px;
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  border-top: 0px;
  border-bottom: 0px;
`;

export const MAinFeedBottomContent = styled.div`
  font-size: 14px;
  color: black;
`;

export const MainFeedBottomBottomWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid rgb(219, 219, 219);
  padding: 6px 12px;
  display: flex;
  align-items: center;
`;

export const MainFeedBottomBottomButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainFeedBottomBottomButtonIcon = styled.div<{ isClick: boolean }>`
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isClick }) => (isClick ? "rgb(237, 73, 86)" : "nones")};
`;
