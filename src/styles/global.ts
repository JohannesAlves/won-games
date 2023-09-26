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
              background: hsla(282, 36%, 25%, 1);

              background: linear-gradient(
                  90deg,
                  hsla(282, 36%, 25%, 1) 0%,
                  hsla(310, 22%, 37%, 1) 100%
              );
          `}
      }

      a {
          text-decoration: none;
      }
  `}


`;

export default GlobalStyles;
