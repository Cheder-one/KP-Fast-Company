import React from "react";
import User from "./user";
import Pagination from "./pagination";

const UsersList = ({ users, setUsers }) => {
  const count = users.length;
  const pageSize = 4;

  const handlePageChange = (pageIndex) => {
    console.log("page:", pageIndex);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
  };

  const renderUsersTable = () => {
    return (
      <>
        {count > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встречи</th>
                <th scope="col">Рейтинг</th>
                <th scope="col">Избранное</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User
                  key={user._id}
                  user={user}
                  onDeleteUser={() => handleDeleteUser(user._id)}
                />
              ))}
            </tbody>
          </table>
        )}
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </>
    );
  };

  return renderUsersTable();
};

export default UsersList;
