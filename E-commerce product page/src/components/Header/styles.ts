import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 1rem;
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
