import React from "react";
import Pagination from "./pagination";
import User from "./user";

const UsersList = ({ users, onDeleteUser, onAddBookmark }) => {
  const totalItems = users.length;
  const itemsPerPage = 4;

  const handlePageChange = (pageNumber) => {
    console.log("pageNumber:", pageNumber);
  };

  return (
    <>
      {totalItems > 0 && (
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
                onDeleteUser={onDeleteUser}
                onAddBookmark={onAddBookmark}
              />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default UsersList;
