import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #000000;
    --secondary: #FF4D4D;
    --background: #FFFFFF;
    --text: #333333;
    --gray-light: #F5F5F5;
    --gray: #666666;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`; 