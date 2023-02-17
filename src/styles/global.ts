import { prettyScrollbar } from '$/styles/mixins';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
  
  body {
    overflow-y: overlay;
    color: ${({ theme }) => theme.colors.gray900};
    font-family: ${({ theme }) =>
      theme.fonts.main}, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    ${prettyScrollbar({})}

  }

  #__next {
    display: flex;
    min-height: 100vh;
    
    > * {
      flex: 1;
    }
  }

  p, h1, h2, h3, h4, h5, h6, ul {
    margin: 0;
    padding: 0;
  }

  ol, ul {
    margin: 0;
    padding: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }
    
  a {
    text-decoration: none;
  }

  .toaster{
    .toast {
      padding: 0;

      > div {
        margin: 0
      }
    }
  }

`;
