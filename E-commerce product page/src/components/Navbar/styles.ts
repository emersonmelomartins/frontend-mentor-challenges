import styled from "styled-components";

interface IMenuProps {
  $show: boolean;
}

export const Menu = styled.nav<IMenuProps>`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  height: 7rem;

  button.hamburger-btn {
    display: none;
    background: none;
    border: none;
    font-size: 0;

    img {
      width: 1.25rem;
    }
  }

  ul {
    display: flex;
    gap: 1.5rem;

    button.close-btn {
      display: none;
      background: none;
      border: none;
      font-size: 0;

      img {
        width: 1.5rem;
      }
    }

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

  @media (max-width: 768px) {
    z-index: 9999;

    button.hamburger-btn {
      display: block;
    }

    ul {
      position: absolute;
      left: ${(props) => (props.$show ? "0" : "-9999px")};
      top: 0;
      height: 100vh;
      order: 1;
      flex-direction: column;
      background: ${(props) => props.theme.white};
      width: 25rem;

      transition: all 0.1s;

      button.close-btn {
        display: block;
        padding: 40px 20px;
      }

      li a {
        color: white;
        height: 2rem;
        justify-content: left;
        padding-left: 2rem;
        color: ${(props) => props.theme.black};
        font-weight: 700;
      }
    }

    img {
      order: 2;
    }
  }
`;

interface IOverflowProps {
  $show: boolean;
}

export const Overflow = styled.div<IOverflowProps>`
  display: ${(props) => (props.$show ? "block" : "none")};

  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;
