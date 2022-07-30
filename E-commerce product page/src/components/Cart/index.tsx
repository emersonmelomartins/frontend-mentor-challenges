import { useState } from "react";

import { useCart } from "../../hooks/useCart";

import { Button } from "../Button/Button";
import { CartIcon } from "../CartIcon";
import { CartItems } from "./styles";

import deleteSvg from "../../assets/images/icon-delete.svg";

export function Cart() {
  const { cartItems, removeProduct } = useCart();
  const [isCartItemsActive, setIsCartItemsActive] = useState(false);

  function handleRemoveProduct(product_id: string) {
    removeProduct(product_id);
  }

  return (
    <div className="cart-content">
      {cartItems.length > 0 && (
        <span className="cart-count">{cartItems.length}</span>
      )}
      <CartIcon onClick={() => setIsCartItemsActive(!isCartItemsActive)} />

      <CartItems $show={isCartItemsActive}>
        <div className="cart-header">
          <strong>Cart</strong>
        </div>

        <div className="cart">
          {cartItems.length > 0 ? (
            <>
              <ul className="cart-list">
                {cartItems.map((item) => (
                  <li className="cart-item" key={item.id}>
                    <img className="product thumbnail" src={item.image} />

                    <div className="item-info">
                      <p>{item.name}</p>

                      <div>
                        <p>
                          ${(item.price * item.discount).toFixed(2)} x{" "}
                          <span className="item-amount">{item.amount}</span>{" "}
                          <strong className="item-total">
                            $
                            {(item.price * item.discount * item.amount).toFixed(
                              2
                            )}
                          </strong>
                        </p>
                      </div>
                    </div>

                    <button
                      className="delete-btn"
                      onClick={() => handleRemoveProduct(item.id)}
                    >
                      <img src={deleteSvg} alt="Delete icon" />
                    </button>
                  </li>
                ))}
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
