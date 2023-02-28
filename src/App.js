import React, { useState } from "react";
import UsersList from "./component/usersList";
import SearchStatus from "./component/searchStatus";
import API from "./api/index.api";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
  };

  return (
    <>
      <SearchStatus numberOfUsers={users.length} />
      <UsersList
        users={users}
        onDeleteUser={handleDeleteUser}
      />
    </>
  )
}

export default App