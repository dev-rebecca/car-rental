import { Fragment } from 'react';

import Header from './components/Layout/Header';
import Cars from './components/Cars/Cars';

function App() {
  return (
    <Fragment>
      <Header />
      <section>
        <Cars />
      </section>
    </Fragment>
  );
}

export default App;
