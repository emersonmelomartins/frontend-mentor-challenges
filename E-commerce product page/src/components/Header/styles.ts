import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const MenuContainer = styled.div`
  max-width: 68.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme["light-gray"]};
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  ul {
    display: flex;
    gap: 1.5rem;

    li {
      a {
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${(props) => props.theme["dark-grayish-blue"]};

        height: 7rem;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;

        transition: all 0.1s;

        &:hover {
          color: ${(props) => props.theme.black};
          border-bottom: 4px solid ${(props) => props.theme.orange};
        }
      }
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  position: relative;

  div.cart-content {
    position: relative;

    span.cart-count {
      bottom: 18px;
      left: 14px;
      position: absolute;
      font-size: 0.7rem;
      background: orange;
      color: white;
      padding: 1px 8px;
      border-radius: 50px;
    }

    svg {
      cursor: pointer;
      path {
        fill: ${(props) => props.theme["dark-grayish-blue"]};
        transition: all 0.1s;
      }
      &:hover {
        path {
          fill: ${(props) => props.theme.black};
        }
      }
    }
  }
`;

export const UserAvatar = styled.img`
  width: 3.75rem;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: all 0.1s;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.orange};
  }
`;

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
    /* min-height: 11rem; */
    overflow: auto;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    strong.no-items {
      color: ${(props) => props.theme["dark-grayish-blue"]};
    }

    .cart-list {
      width: 100%;

      .cart-item {
        height: 5rem;
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
`;
