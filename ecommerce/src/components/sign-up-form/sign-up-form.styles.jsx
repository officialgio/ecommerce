import styled, { css } from "styled-components";

const signUpContainerWidth = css`
  width: clamp(20rem, 30vw, 28rem);
`;
const containerPadding = css`
  padding: clamp(1em, 1.5vw, 2em);
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${signUpContainerWidth};
  ${containerPadding};
`;
