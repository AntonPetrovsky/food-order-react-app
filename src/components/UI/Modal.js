import React from "react";
import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = (props) => (
  <React.Fragment>
    <div className={styles.backdrop} />
    <Card className={styles.modal}>{props.children}</Card>
  </React.Fragment>
);

export default Modal;
