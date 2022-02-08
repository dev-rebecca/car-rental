import { useContext } from 'react';

import AddCarForm from './AddCarForm';
import CartContext from '../../store/cart-context';
import classes from './CarItem.module.css';

const CarItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['car-item']}>
      <h2>{props.name}</h2>
      <div>{price}</div>
      <AddCarForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default CarItem;
