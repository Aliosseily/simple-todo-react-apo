import React from "react";
import Card from "../UI/Card";

import styles from "./UsersList.module.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} id={user.id} onDelete={props.onDelete}>
            {user.name} ({user.age} years old)
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
