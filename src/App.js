import { useState } from 'react';

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import AvailableCars from './components/Cars/AvailableCars';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = (props) => {
    setCartIsShown(true);
  };

  const closeCartHandler = (props) => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header onOpenCart={openCartHandler} />
      {cartIsShown && <Cart onCloseCart={closeCartHandler} />}
      <section>
        <AvailableCars />
      </section>
    </CartProvider>
  );
}

export default App;
