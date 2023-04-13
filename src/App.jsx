import React, { useEffect, useState } from "react";
import UsersList from "./app/components/usersList";
import API from "./app/api/index.api";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    API.users.fetchAll().then((users) => {
      setUsers(users);
      setLoaded(true);
    });
  }, []);

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
      <UsersList
        users={users}
        isLoaded={isLoaded}
        onDeleteUser={handleDeleteUser}
        onAddBookmark={handleAddBookmark}
      />
    </>
  );
};

export default App;
