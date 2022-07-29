import {
  CartContainer,
  HeaderContainer,
  MenuContainer,
  UserAvatar,
} from "./styles";

import avatarPng from "../../assets/images/image-avatar.png";

import { Navbar } from "../Navbar";
import { Cart } from "../Cart";

export function Header() {

  return (
    <HeaderContainer>
      <MenuContainer>

        <Navbar />

        <CartContainer>
          <Cart />

          <UserAvatar src={avatarPng} alt="User profile avatar" />

        </CartContainer>
      </MenuContainer>
    </HeaderContainer>
  );
}
