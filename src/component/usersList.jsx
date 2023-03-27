import React from "react";
import Pagination from "./pagination";
import User from "./user";

const UsersList = ({ users, onDeleteUser, onAddBookmark }) => {
  const itemsCount = users.length;
  const pageSize = 4;

  const handlePageChange = (pageIndex) => {
    console.log("pageIndex:", pageIndex);
  };

  return (
    <>
      {itemsCount > 0 && (
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
        itemsCount={itemsCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default UsersList;
