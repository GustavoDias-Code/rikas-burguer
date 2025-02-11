import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #000000;
    --secondary: #FF4D4D;
    --background: #EAEAEA;
    --text: #333333;
    --gray-light: #F5F5F5;
    --gray: #666666;

    /* Fontes */
    --font-heading: 'Sora', sans-serif;
    --font-body: 'Outfit', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: #EAEAEA;
  }

  body {
    font-family: var(--font-body);
    background-color: #EAEAEA;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
  }

  #root {
    background-color: #EAEAEA;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.125rem;
  }

  button {
    font-family: var(--font-body);
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