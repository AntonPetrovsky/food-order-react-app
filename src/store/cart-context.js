import React, { useReducer } from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalPrice: 0,
  addCartItem: () => {},
  removeCartItem: () => {},
});

const defaultCartState = { cartItems: [], totalPrice: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const cartItems = [...state.cartItems];

    const found = cartItems.find(
      (cartItem) => cartItem.id === action.cartItem.id
    );

    found
      ? (found.amount += action.cartItem.amount)
      : cartItems.push(action.cartItem);

    const totalPrice =
      state.totalPrice + action.cartItem.price * action.cartItem.amount;

    return {
      cartItems: cartItems,
      totalPrice: totalPrice,
    };
  }

  return defaultCartState;
};

const removeCartItem = () => {};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addCartItem = (item) =>
    dispatchCartAction({ type: "ADD", cartItem: item });

  return (
    <CartContext.Provider
      value={{
        ...cartState,
        addCartItem: addCartItem,
        removeCartItem: removeCartItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
export default CartContext;
