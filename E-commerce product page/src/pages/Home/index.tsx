import { useState } from "react";

import { ImageGallery } from "../../components/ImageGalery";
import { Button } from "../../components/Button/Button";
import { CartIcon } from "../../components/CartIcon";

import { HomeContainer, ProductAmount } from "./styles";

import minusSvg from "../../assets/images/icon-minus.svg";
import plusSvg from "../../assets/images/icon-plus.svg";

export function Home() {
  const [amount, setAmount] = useState(0);

  const isAmountBiggerThenZero = amount > 0;

  function handleIncrement() {
    setAmount(amount + 1);
  }

  function handleDecrement() {
    setAmount(amount > 0 ? amount - 1 : 0);
  }
  return (
    <HomeContainer>
      <div className="product-image">
        <ImageGallery />
      </div>

      <div className="product-info">
        <strong className="product-brand">Sneaker Company</strong>

        <h1 className="product-title">Fall Limited Edition Sneakers</h1>

        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <div className="product-price">
          <strong>
            $125.00
            <span className="price-discount">50%</span>
          </strong>

          <s>$250.00</s>
        </div>

        <ProductAmount>
          <div className="amount-control">
            <button type="button" onClick={handleDecrement}>
              <img src={minusSvg} alt="minus icon" />
            </button>
            <input type="text" readOnly value={amount} />
            <button type="button" onClick={handleIncrement}>
              <img src={plusSvg} alt="plus icon" />
            </button>
          </div>

          <Button type="submit" disabled={!isAmountBiggerThenZero}>
            <CartIcon />
            Add to cart
          </Button>
        </ProductAmount>
      </div>
    </HomeContainer>
  );
}
