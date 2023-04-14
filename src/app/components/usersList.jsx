import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPageItems } from "../utils/paginate";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import User from "./user";
import GroupList from "./groupList";
import API from "../api/index.api";

const UsersList = ({ users, isLoaded, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const itemsPerPage = 4;

  useEffect(() => {
    API.professions.fetchAll().then((profs) => {
      setProfessions(profs);
    });
  }, []);

  const handleProfessionSelect = (prof) => {
    setSelectedProf(prof);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredUsers = selectedProf
    ? users.filter((user) => user.profession._id === selectedProf._id)
    : users;

  const pageSize = filteredUsers.length;
  const itemsCurntPage = getPageItems(filteredUsers, currentPage, itemsPerPage);

  const handleResetFilters = () => {
    setSelectedProf(undefined);
  };

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            selectedItem={selectedProf}
            onItemSelect={handleProfessionSelect}
          />
          <button
            className="btn btn-secondary btn-sm mt-2"
            onClick={handleResetFilters}
          >
            Очистить
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        {isLoaded && <SearchStatus numberOfUsers={pageSize} />}
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
        <div className="d-flex justify-content-center">
          <Pagination
            pageSize={pageSize}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isLoaded: PropTypes.bool
};

export default UsersList;
