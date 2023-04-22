import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPageItems } from "../../utils/paginate";
import SearchStatus from "../other/searchStatus";
import Pagination from "../other/pagination";
import GroupList from "../groupList";
import API from "../../api/index.api";
import UsersTable from "./usersTable";
import _ from "lodash";

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  // Сортировка по значению столбца
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const itemsPerPage = 8;

  const [users, setUsers] = useState();

  useEffect(() => {
    API.users.fetchAll().then((users) => {
      setUsers(users);
    });
  }, []);

  const handleDeleteUser = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const handleAddBookmark = (id) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

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

  if (users) {
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
          <GroupList
            items={professions}
            selectedItem={selectedProf}
            onItemSelect={handleProfessionSelect}
            onResetFilters={handleResetFilters}
          />
        )}
        <div className="d-flex flex-column">
          <SearchStatus numberOfUsers={usersFilteredCount} />
          {usersFilteredCount > 0 && (
            <UsersTable
              usersCurntPage={curntPageItems}
              onSort={handleSort}
              selectedSort={sortBy}
              onAddBookmark={handleAddBookmark}
              onDeleteUser={handleDeleteUser}
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
  } else {
    return (
      <>
        <div
          className="spinner-border spinner-border-sm text-primary"
          role="status"
        ></div>
        <span className="visually ms-2">Loading...</span>
      </>
    );
  }
};

UsersList.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isLoaded: PropTypes.bool
};

export default UsersList;
