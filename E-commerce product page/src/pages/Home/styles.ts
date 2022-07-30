import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 68.75rem;
  margin: 0 auto;
  width: 100%;

  display: flex;
  gap: 2rem;

  padding: 1rem;

  overflow: hidden;

  .product-info,
  .product-image {
    width: 50%;
    padding: 2rem;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .product-brand {
      display: block;
      color: ${(props) => props.theme.orange};
      margin-bottom: 1rem;
    }

    .product-title {
      font-size: 2.5rem;
    }

    .product-description {
      color: ${(props) => props.theme["dark-grayish-blue"]};
      margin: 2rem 0;
      line-height: 1.625rem;
    }

    .product-price {
      display: flex;
      flex-direction: column;
      margin-bottom: 3rem;

      strong {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
      }

      .price-discount {
        margin: 0 1rem;
        background-color: ${(props) => props.theme["pale-orange"]};
        color: ${(props) => props.theme.orange};
        padding: 3px 8px;
        font-size: 0.75rem;
        border-radius: 4px;
      }

      s {
        margin-top: 0.25rem;
        color: ${(props) => props.theme["grayish-blue"]};
        font-weight: 700;
        font-size: 0.875rem;
      }
    }
  }

  .product-image {
    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .product-info,
    .product-image {
      width: 100%;
      padding: 0rem;
    }

    .product-image {
      img {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;

export const ProductAmount = styled.form`
  display: flex;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .amount-control {
    display: flex;
    align-items: center;

    button,
    input {
      width: 100%;
      height: 3.2rem;
      padding: 1rem;
      background-color: ${(props) => props.theme["light-grayish-blue"]};
      color: ${(props) => props.theme.black};
      font-weight: bold;
      border: none;
      text-align: center;

      img {
        margin: 0 auto;
      }
    }

    button {
      transition: filter 0.1s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    button:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    button:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  button[type="submit"] {
    box-shadow: 0px 1px 8px ${props => props.theme.orange};
    svg {
      path {
        fill: ${(props) => props.theme.white};
      }
    }
  }
`;
