import { Fragment } from 'react';

import Header from './components/Layout/Header';
// import Card from './components/UI/Card';
import AvailableCars from "./components/Cars/AvailableCars";

function App() {
  const DUMMY_DATA = [
    { id: 'car1', name: 'car1', price: 12.99 },
    { id: 'car2', name: 'car2', price: 14.6 },
    { id: 'car3', name: 'car3', price: 16.49 },
    { id: 'car4', name: 'car4', price: 12.99 },
    { id: 'car5', name: 'car5', price: 14.6 },
    { id: 'car6', name: 'car6', price: 16.49 },
  ];

  const cars = DUMMY_DATA.map((car) => <li>{car.name}</li>);

  return (
    <Fragment>
      <Header />
      <section>
        <AvailableCars>{cars}</AvailableCars>
      </section>
    </Fragment>
  );
}

export default App;
