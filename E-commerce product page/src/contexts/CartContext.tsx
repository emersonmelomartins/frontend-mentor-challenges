import { createContext, ReactNode, useState } from "react";

interface IProduct {
  id: string;
  name: string;
  price: number;
  amount: number;
  discount: number,
  brand: string,
  image: string,
}

interface ICartContext {
  addProduct: (product: IProduct) => void;
  removeProduct: (product_id: string) => void;
  cartItems: IProduct[];
}

export const CartContext = createContext({} as ICartContext);

interface ICartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: ICartProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  function addProduct(product: IProduct) {
    const findProduct = cartItems.find((prod) => prod.id === product.id);

    let updatedCartItems: IProduct[] = [];

    if (!findProduct) {
      updatedCartItems = [...cartItems, product];
    } else {
      updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: product.amount + item.amount };
        } else {
          return item;
        }
      });
    }

    setCartItems(updatedCartItems);
  }

  function removeProduct(product_id: string) {
    const updatedCartItems = cartItems.filter((prod) => prod.id !== product_id);

    setCartItems(updatedCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
