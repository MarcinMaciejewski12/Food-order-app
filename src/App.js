import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./stores/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const setCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={setCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
