import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font-family: 'Ubuntu', sans-serif;
    font-size:16px;
  }

  button {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  strong {
    font-weight: 500;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border: none;
    outline: 0;
  }

`;
