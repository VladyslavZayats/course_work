import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #fafafa;
    color: #333;
  }

  a {
    color: #1976d2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h1, h2 {
    color: #222;
  }

  input, button {
    font-size: 16px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
  }

  input:focus, button:focus {
    border-color: #1976d2;
  }

  button {
    background-color: #1976d2;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background-color: #1258a3;
    }
  }
`;
