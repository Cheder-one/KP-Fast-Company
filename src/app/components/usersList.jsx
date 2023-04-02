import React, { useState } from "react";
import Pagination from "./pagination";
import User from "./user";

const UsersList = ({ users, onDeleteUser, onAddBookmark }) => {
  const pageSize = users.length;
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginate = (users, currentPage, itemsPerPage) => {
    const firstIndex = itemsPerPage * (currentPage - 1);
    return [...users].splice(firstIndex, itemsPerPage);
  };

  const userCrop = paginate(users, currentPage, itemsPerPage);

  return (
    <>
      {pageSize > 0 && (
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
            {userCrop.map((user) => (
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
        pageSize={pageSize}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default UsersList;
