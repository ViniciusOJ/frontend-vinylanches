import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--dark-700)
  }
  body, input, textarea, select, button{
    font: 400 1rem sans-serif;
  } 

  :root{
    --white: #fff;
    --black: #000;
    --dark-900: #1D1D1D;
    --dark-700: #252525;
    --gray-100: #898989;
    --green-900: #3fffa3;
    --blue-900: #15C7FF;
  }

  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }


  @media (max-width: 720px){
    html{
        font-size: 87.5%;
    }
  }

  @media (max-width: 1080px){
    html{
        font-size: 93.75%;
    }
  }
`;
