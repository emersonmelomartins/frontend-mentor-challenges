import {
  BrandLogo,
  CartContainer,
  HeaderContainer,
  Menu,
  MenuContainer,
  UserAvatar,
} from "./styles";

import cartSvg from "../../assets/images/icon-cart.svg";
import avatarPng from "../../assets/images/image-avatar.png";

export function Header() {
  return (
    <HeaderContainer>
      <MenuContainer>
        <Menu>
          <BrandLogo>
            <strong>sneakers</strong>
          </BrandLogo>

          <ul>
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

        <CartContainer>
          <div>
            <span>3</span>
            <img src={cartSvg} alt="Cart icon" />
          </div>

          <UserAvatar src={avatarPng} alt="User profile avatar" />
        </CartContainer>
      </MenuContainer>
    </HeaderContainer>
  );
}
