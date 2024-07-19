import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Slab", serif;
  }

  body {
    font-size: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

`;
