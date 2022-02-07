import AddCarForm from "./AddCarForm";
import classes from './CarItem.module.css';

const CarItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['car-item']}>
      <h2>{props.name}</h2>
      <div>{price}</div>
      <AddCarForm id={props.id}/>
    </li>
  );
};

export default CarItem;
