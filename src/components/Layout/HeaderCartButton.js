import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <div className={classes['cart-button']}>
      <CartIcon />
      <span>Your Cart</span>
      <span>3</span>
    </div>
  );
};

export default HeaderCartButton;
