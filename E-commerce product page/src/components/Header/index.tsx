import { useEffect, useState } from "react";
import { CartIcon } from "../CartIcon";

import {
  CartContainer,
  CartItems,
  HeaderContainer,
  Menu,
  MenuContainer,
  UserAvatar,
} from "./styles";

import logoSvg from "../../assets/images/logo.svg";
import avatarPng from "../../assets/images/image-avatar.png";
import deleteSvg from "../../assets/images/icon-delete.svg";
import teste from "../../assets/images/image-product-1-thumbnail.jpg";

export function Header() {
  const [isCartItemsActive, setIsCartItemsActive] = useState(true);

  const [cartItems, setCartItems] = useState([1]);

  useEffect(() => {
    console.log(isCartItemsActive);
  }, [isCartItemsActive]);

  return (
    <HeaderContainer>
      <MenuContainer>
        <Menu>
          <img src={logoSvg} alt="sneakers" />

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
          <div className="cart-content">
            <span className="cart-count">3</span>
            <CartIcon
              onClick={() => setIsCartItemsActive(!isCartItemsActive)}
            />

            <CartItems $show={isCartItemsActive}>
              <header>
                <strong>Cart</strong>
              </header>

              <div className="cart">
                {cartItems.length > 0 ? (
                  <>
                    <ul className="cart-list">
                      <li className="cart-item">
                        <img className="thumbnail" src={teste} />

                        <div className="item-info">
                          <p>Fall Limited Edition Sneakers</p>

                          <div>
                            <p>
                              $125.00 x <span className="item-amount">3</span>{" "}
                              <strong className="item-total">$375.00</strong>
                            </p>
                          </div>
                        </div>

                        <button className="delete-btn">
                          <img src={deleteSvg} alt="Delete icon" />
                        </button>
                      </li>
                      <li className="cart-item">
                        <img className="thumbnail" src={teste} />

                        <div className="item-info">
                          <p>Fall Limited Edition Sneakers</p>

                          <div>
                            <p>
                              $125.00 x <span className="item-amount">3</span>{" "}
                              <strong className="item-total">$375.00</strong>
                            </p>
                          </div>
                        </div>

                        <button className="delete-btn">
                          <img src={deleteSvg} alt="Delete icon" />
                        </button>
                      </li>
                    </ul>

                    <button>Checkout</button>
                  </>
                ) : (
                  <strong className="no-items">Your cart is empty.</strong>
                )}
              </div>
            </CartItems>
          </div>

          <UserAvatar src={avatarPng} alt="User profile avatar" />
        </CartContainer>
      </MenuContainer>
    </HeaderContainer>
  );
}
