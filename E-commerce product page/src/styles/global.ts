import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  -webkit-font-smoothing: antialiased;
  background-color: ${(props) => props.theme.background};
  margin: 0 auto;
}

body,
input,
textarea,
button {
  font-family: sans-serif;
}

button {
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`;
