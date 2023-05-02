import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPageItems } from "../../utils/paginate";
import SearchStatus from "../other/searchStatus";
import Pagination from "../other/pagination";
import GroupList from "../other/groupList";
import API from "../../api/index.api";
import UsersTable from "./usersTable";
import _ from "lodash";
import Spinner from "../../utils/templates/spinner";
import SearchBox from "../other/searchBox";

const UsersExplorer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  // Сортировка по значению столбца
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState();

  const [users, setUsers] = useState();
  const itemsPerPage = 8;

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
    setSearchQuery("");
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf, searchQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getUsersBySearch = () => {
    const regex = new RegExp(searchQuery, "gi");
    const searchResult = users.filter((user) => user.name.match(regex));
    setQueryResult(searchResult);
  };

  // useEffect(() => {
  //   getUsersBySearch();
  // }, []);

  if (users) {
    const filteredUsers = selectedProf
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(selectedProf)
        )
      : searchQuery
      ? users.filter((user) => {
          const regex = new RegExp(searchQuery, "gi");
          const searchResult = users.filter((user) => user.name.match(regex));
          setQueryResult(searchResult);
          return JSON.stringify(user) === JSON.stringify(searchResult);
        })
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

    // Вызывается при изменении строки поиска и устанавливает ее новое значение
    const handleSearchChange = (event) => {
      const { value } = event.target;
      setSearchQuery(value);
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
          <SearchBox
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
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
    return <Spinner text={"Loading..."} />;
  }
};

UsersExplorer.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default UsersExplorer;
