import classes from './Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';

const Header = (props) => {
  return (
    <div className={classes.header}>
      <h1>Car Marketplace</h1>
      <HeaderCartButton onOpenCart={props.onOpenCart} />
    </div>
  );
};

export default Header;
