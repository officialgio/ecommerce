import styled, { css } from "styled-components";

const containerPadding = "calc(clamp(1em, 1.5vw, 2em) * 2)";
const gapSpace = "calc(clamp(1.5em, 4vw, 2.5em) * 2)";
const authPaddingAndGap = css`
  padding: ${containerPadding};
  gap: ${gapSpace};
`;

export const AuthenticationContainer = styled.div`
  border: 1px solid red;
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 4rem;
  ${authPaddingAndGap}
`;
