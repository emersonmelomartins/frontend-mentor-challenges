import styled from "styled-components";

interface ICartItemsProps {
  $show: boolean;
}

export const CartItems = styled.div<ICartItemsProps>`
  ${(props) =>
    !props.$show &&
    `
      opacity: 0;
      pointer-events: none;
    `};

  position: absolute !important;
  background: ${(props) => props.theme.white};
  top: 50px;
  right: -100px;
  width: 22.5rem;
  box-shadow: 0px 3px 50px 5px rgba(0, 0, 0, 0.15);
  transition: opacity 0.2s;
  border-radius: 8px;

  header {
    padding: 1.2rem;
    border-bottom: 1px solid ${(props) => props.theme["light-gray"]};
  }

  div.cart {
    overflow: auto;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    strong.no-items {
      color: ${(props) => props.theme["dark-grayish-blue"]};
    }

    .cart-list {
      width: 100%;

      .cart-item {
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img.thumbnail {
          width: 3rem;
          border-radius: 4px;
        }

        .item-info {
          display: flex;
          flex-direction: column;

          p {
            color: ${(props) => props.theme["dark-grayish-blue"]};
          }

          strong {
            color: ${(props) => props.theme.black};
          }
        }

        button.delete-btn {
          background: none;
          border: none;
          outline: 0;
        }
      }
    }
  }

  @media (max-width: 501px) {
    left: 50%;
    right: 50%;
    transform: translate(-70%, 0%);
    width: 25rem;
    margin: 0 auto;
    z-index: 9999;
  }
`;

export const CheckoutButton = styled.button`

`;
