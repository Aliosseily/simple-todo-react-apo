import React from "react";
import Button from "../UI/Button";
import styles from "../UI/Button.module.css";

const UserItem = (props) => {
  const deleteUserHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li key={props.id}>
      {props.children}{" "}
      <Button onClick={deleteUserHandler} className={styles.removeBtn}>
        x
      </Button>
    </li>
  );
};
export default UserItem;
