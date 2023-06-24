import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

`;

export default GlobalStyle;