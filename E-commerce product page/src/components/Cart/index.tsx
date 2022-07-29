import { useState } from "react";
import { Button } from "../Button/Button";
import { CartIcon } from "../CartIcon";
import { CartItems } from "./styles";

import deleteSvg from "../../assets/images/icon-delete.svg";
import teste from "../../assets/images/image-product-1-thumbnail.jpg";

export function Cart() {
  const [isCartItemsActive, setIsCartItemsActive] = useState(false);

  const [cartItems, setCartItems] = useState([1]);

  return (
    <div className="cart-content">
      <span className="cart-count">3</span>
      <CartIcon onClick={() => setIsCartItemsActive(!isCartItemsActive)} />

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

              <Button type="button">Checkout</Button>
            </>
          ) : (
            <strong className="no-items">Your cart is empty.</strong>
          )}
        </div>
      </CartItems>
    </div>
  );
}
