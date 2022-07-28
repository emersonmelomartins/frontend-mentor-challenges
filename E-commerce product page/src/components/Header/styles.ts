import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const MenuContainer = styled.div`
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 6rem;
    border-bottom: 1px solid black;
    align-items: center;
    justify-content: space-between;
`;

export const BrandLogo = styled.div`
  strong {
    font-size: 2rem;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  ul {
    display: flex;
    gap: 1.5rem;
  }
`;


export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    position: relative;

    span {
      bottom: 26px;
      left: 16px;
      position: absolute;
      font-size: 0.7rem;
      background: orange;
      color: white;
      padding: 1px 8px;
      border-radius: 50px;
    }
    
    img {
      width: 30px;
    }
  }
`;

export const UserAvatar = styled.img`
  width: 30%;
`;
