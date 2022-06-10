import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartVisible, setCartVisible] = useState(false);

  const showCart = () => setCartVisible(true);
  const hideCart = () => setCartVisible(false);

  return (
    <React.Fragment>
      {isCartVisible && (
        <Cart
          isCartVisible={isCartVisible}
          showCart={showCart}
          hideCart={hideCart}
        />
      )}

      <Header showCart={showCart} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
