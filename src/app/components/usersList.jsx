import React, { useState } from "react";
import PropTypes from "prop-types";
import { getPageItems } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";

const UsersList = ({ users, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = users.length;
  const itemsPerPage = 4;

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
              <th />
            </tr>
          </thead>
          <tbody>
            {itemsCurntPage.map((user) => (
              <User {...user} {...rest} key={user._id} />
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
