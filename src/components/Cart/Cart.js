import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: '1', name: 'awesomeCar', amount: 1, price: 34.44 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div>
        <span>Amount:</span>
        <span>34.53</span>
      </div>
      <div>
        <button onClick={props.onCloseCart}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
