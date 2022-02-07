import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import AvailableCars from './components/Cars/AvailableCars';

function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = (props) => {
    setOpenCart(true);
  };

  const closeCartHandler = (props) => {
    setOpenCart(false);
  };

  return (
    <Fragment>
      <Header onOpenCart={openCartHandler} />
      {openCart && <Cart onCloseCart={closeCartHandler} />}
      <section>
        <AvailableCars />
      </section>
    </Fragment>
  );
}

export default App;
