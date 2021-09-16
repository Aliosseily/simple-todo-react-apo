import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      const updatedUsers = prevUsersList.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDelete={deleteUserHandler} />
    </div>
  );
}

export default App;
