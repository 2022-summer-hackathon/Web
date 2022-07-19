import { keyframes } from "styled-components";

export const sectionBarAnimation = keyframes`
from {
    transform: translate3d(-350px, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
