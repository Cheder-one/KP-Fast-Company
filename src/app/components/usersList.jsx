import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import { getPageItems } from "../utils/paginate";
import PropTypes from "prop-types";

const UsersList = ({ users, ...rest }) => {
  const pageSize = users.length;
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsCurntPage = getPageItems(users, currentPage, itemsPerPage);

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
            {itemsCurntPage.map((user) => (
              <User key={user._id} user={user} {...rest} />
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

UsersList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersList;
