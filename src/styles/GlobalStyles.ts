import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    background: none;
    border: none;
    text-decoration: none;
  }

  body *,
  button,
  input {
    /* font-family: "Inter", sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.textColor1};
  }

  body {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    overflow-y: hidden;
  }
`
