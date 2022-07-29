import logoSvg from "../../assets/images/logo.svg";
import menuSvg from "../../assets/images/icon-menu.svg";
import closeSvg from "../../assets/images/icon-close.svg";
import { Menu, Overflow } from "./styles";
import { useState } from "react";

export function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <Overflow $show={isMenuActive} />
      <Menu $show={isMenuActive}>
        <button
          className="hamburger-btn"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <img src={menuSvg} alt="Hamburger menu icon" />
        </button>
        <img src={logoSvg} alt="sneakers" />

        <ul>
          <li>
            <button
              className="close-btn"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <img src={closeSvg} alt="Close icon" />
            </button>
          </li>

          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </Menu>
    </>
  );
}
