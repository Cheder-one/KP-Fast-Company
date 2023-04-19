import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPageItems } from "../utils/paginate";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import API from "../api/index.api";
import UsersTable from "./usersTable";
import _ from "lodash";

const UsersList = ({ users, isLoaded, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  // Сортировка по значению столбца
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });

  const itemsPerPage = 8;

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

  const handleSort = (param) => {
    setSortBy(param);
  };

  const usersFilteredCount = filteredUsers.length;
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

  const curntPageItems = getPageItems(sortedUsers, currentPage, itemsPerPage);

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
        {isLoaded && <SearchStatus numberOfUsers={usersFilteredCount} />}
        {usersFilteredCount > 0 && (
          <UsersTable
            usersCurntPage={curntPageItems}
            onSort={handleSort}
            selectedSort={sortBy}
            {...rest}
          />
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            usersFilteredCount={usersFilteredCount}
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
