import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPageItems } from "../utils/paginate";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import API from "../api/index.api";
import UsersTable from "./usersTable";

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
    ? users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      )
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
          <UsersTable usersCurntPage={itemsCurntPage} {...rest} />
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
