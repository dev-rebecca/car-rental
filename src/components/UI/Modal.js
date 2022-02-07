import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Modal = (props) => {
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onCloseCart} />;
  };

  const container = document.getElementById('overlays');

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        container
      )}
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        container
      )}
    </Fragment>
  );
};

export default Modal;
