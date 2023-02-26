import React, { useState } from "react";
import UsersList from "./component/usersList";
import SearchStatus from "./component/searchStatus";
import API from "./api/index.api";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  return (
    <>
      <SearchStatus users={users} />
      <UsersList users={users} setUsers={setUsers} />
    </>
  )
}

export default App