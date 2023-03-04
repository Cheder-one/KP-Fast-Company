import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import API from "../api/index.api";
import GroupList from "./groupList";

const UsersList = ({ users, onDeleteUser, onAddBookmark }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [profession] = useState(API.professions.fetchAll);
  const count = users.length;
  const pageSize = 4;
  useEffect(() => {
    console.log("render");
  }, []);

  const handleProfessionSelect = (params) => {
    console.log(params);
  };
  console.log(profession);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const userCrop = paginate(users, currentPage, pageSize);

  return (
    <>
      <GroupList items={profession} onClick={handleProfessionSelect} />
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
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onAddBookmark: PropTypes.func.isRequired
};
export default UsersList;
