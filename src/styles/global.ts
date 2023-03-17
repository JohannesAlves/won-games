import {
    createGlobalStyle,
    css,
    DefaultTheme,
    GlobalStyleComponent,
} from "styled-components";

type GlobalStylesProps = {
    removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
    GlobalStylesProps,
    DefaultTheme
> = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

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
  `}


`;

export default GlobalStyles;
