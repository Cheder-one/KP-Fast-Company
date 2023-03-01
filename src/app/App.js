import React, { useState } from "react";
import UsersList from "./component/usersList";
import SearchStatus from "./component/searchStatus";
import API from "./api/index.api";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
  };

  function handleAddBookmark(id) {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  }

  return (
    <>
      <SearchStatus numberOfUsers={users.length} />
      <UsersList
        users={users}
        onDeleteUser={handleDeleteUser}
        onAddBookmark={handleAddBookmark}
      />
    </>
  );
};

export default App;
