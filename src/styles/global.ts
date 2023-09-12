import { createGlobalStyle, css } from "styled-components";

type GlobalStylesProps = {
    removeBg?: boolean;
};

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit
    };
  }

  ${({ theme, removeBg }) => css`
      html {
          font-size: 62.5%;
      }

      body {
          font-family: ${theme.font.family};
          font-size: ${theme.font.sizes.medium};

          ${!removeBg &&
          css`
              background-color: ${theme.colors.mainBg};
          `}
      }

      a {
          text-decoration: none;
      }
  `}


`;

export default GlobalStyles;
