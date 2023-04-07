import React, { useState } from "react";
import UsersList from "./app/components/usersList";
import SearchStatus from "./app/components/searchStatus";
import API from "./app/api/index.api";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDeleteUser = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const handleAddBookmark = (id) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

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
