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
    background-color: ${(props) => props.theme.white};
    margin: 0 auto;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Kumbh Sans", sans-serif;
  }

  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }


  img {
    display: block;
  }


  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: purple;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
`;
