import HatItem from './HatItem';
import classes from './AvailableCars.module.css';

const AvailableCars = (props) => {
  const DUMMY_DATA = [
    { id: 'car1', name: 'car1', price: 12.99 },
    { id: 'car2', name: 'car2', price: 14.6 },
    { id: 'car3', name: 'car3', price: 16.49 },
    { id: 'car4', name: 'car4', price: 12.99 },
    { id: 'car5', name: 'car5', price: 14.6 },
    { id: 'car6', name: 'car6', price: 16.49 },
  ];

  const carsList = DUMMY_DATA.map((car) => (
    <HatItem key={car.id} id={car.id} name={car.name} price={car.price} />
  ));

  return <ul className={classes.cars}>{carsList}</ul>;
};

export default AvailableCars;
