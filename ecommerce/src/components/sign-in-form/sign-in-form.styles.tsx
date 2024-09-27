import styled, { css } from "styled-components";

const SignUpContainerWidth = css`
  width: clamp(20rem, 30vw, 28rem);
`;

const containerPadding = css`
  padding-inline: 5vw;
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${SignUpContainerWidth};
  ${containerPadding}

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
`;
