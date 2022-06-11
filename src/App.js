import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [isCartVisible, setCartVisible] = useState(false);

  const showCart = () => setCartVisible(true);
  const hideCart = () => setCartVisible(false);

  return (
    <CartContextProvider>
      {isCartVisible && (
        <Cart isCartVisible={isCartVisible} hideCart={hideCart} />
      )}

      <Header showCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
