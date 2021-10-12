import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);
    setUsersList((prevUserList) => {
      return [...prevUserList, { ...user, id: Math.random().toString() }];
    });
  };

  return (
    <Fragment>
      <AddUser addUserHandler={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
