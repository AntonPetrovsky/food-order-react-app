import React, { useReducer } from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalPrice: 0,
  addCartItem: () => {},
  removeCartItem: () => {},
});

const defaultCartState = { cartItems: [], totalPrice: 0 };

const cartReducer = (state, action) => {
  const cartItems = [...state.cartItems];

  if (action.type === "ADD") {
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

  if (action.type === "REMOVE") {
    const index = cartItems.findIndex((cartItem) => cartItem.id === action.id);
    const found = cartItems.at(index);

    found.amount > 1 ? found.amount-- : cartItems.splice(index, 1);

    const totalPrice = state.totalPrice - found.price;

    return {
      cartItems: cartItems,
      totalPrice: totalPrice,
    };
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addCartItem = (item) =>
    dispatchCartAction({ type: "ADD", cartItem: item });

  const removeCartItem = (id) => dispatchCartAction({ type: "REMOVE", id: id });

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
