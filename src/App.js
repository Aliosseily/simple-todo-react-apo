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
    // u can use React.Fragment as wrapper for your component or use <> insread
    // <React.Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDelete={deleteUserHandler} />
    </>
    //</React.Fragment>
  );
}

export default App;
