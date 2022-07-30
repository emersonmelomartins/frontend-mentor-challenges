import { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

import { useCart } from "../../hooks/useCart";

import { ImageGallery } from "../../components/ImageGallery";
import { Button } from "../../components/Button/Button";
import { CartIcon } from "../../components/CartIcon";

import { HomeContainer, ProductAmount } from "./styles";

import minusSvg from "../../assets/images/icon-minus.svg";
import plusSvg from "../../assets/images/icon-plus.svg";
import productThumbnail from "../../assets/images/image-product-1-thumbnail.jpg";

const PRODUCT = {
  id: uuid(),
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250.0,
  brand: "Sneaker Company",
  discount: 0.5,
  image: productThumbnail,
};

export function Home() {
  const [amount, setAmount] = useState(0);

  const { addProduct } = useCart();

  const isAmountBiggerThenZero = amount > 0;

  function handleIncrement() {
    setAmount(amount + 1);
  }

  function handleDecrement() {
    setAmount(amount > 0 ? amount - 1 : 0);
  }

  function handleAddProductToCart() {
    addProduct({ ...PRODUCT, amount });
    setAmount(0);
    toast.success("Product added to cart!");
  }

  return (
    <HomeContainer>
      <div className="product-image">
        <ImageGallery />
      </div>

      <div className="product-info">
        <strong className="product-brand">{PRODUCT.brand}</strong>

        <h1 className="product-title">{PRODUCT.name}</h1>

        <p className="product-description">{PRODUCT.description}</p>

        <div className="product-price">
          <strong>
            ${(PRODUCT.price * PRODUCT.discount).toFixed(2)}
            <span className="price-discount">{PRODUCT.discount * 100}%</span>
          </strong>

          <s>${PRODUCT.price.toFixed(2)}</s>
        </div>

        <ProductAmount>
          <div className="amount-control">
            <button type="button" onClick={handleDecrement}>
              <img src={minusSvg} alt="minus icon" />
            </button>
            <input type="text" readOnly value={amount} aria-label="product amount" />
            <button type="button" onClick={handleIncrement}>
              <img src={plusSvg} alt="plus icon" />
            </button>
          </div>

          <Button
            type="submit"
            disabled={!isAmountBiggerThenZero}
            onClick={handleAddProductToCart}
          >
            <CartIcon />
            Add to cart
          </Button>
        </ProductAmount>
      </div>
    </HomeContainer>
  );
}
