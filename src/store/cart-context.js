import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addCartItem: () => {},
  removeCartItem: () => {},
});

const addCartItem = () => {};

const removeCartItem = () => {};

const CartContextProvider = (props) => (
  <CartContext.Provider
    value={{
      cartItems: [{ id: "c1", name: "Apple", amount: 2, price: 12.99 }],
      totalAmount: 0,
      addCartItem: addCartItem,
      removeCartItem: removeCartItem,
    }}
  >
    {props.children}
  </CartContext.Provider>
);

export { CartContextProvider };
export default CartContext;
