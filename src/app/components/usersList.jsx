import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPageItems } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import GroupList from "./groupList";
import API from "../api/index.api";

const UsersList = ({ users: allUsers, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();

  const pageSize = allUsers.length;
  const itemsPerPage = 4;

  useEffect(() => {
    API.professions.fetchAll().then((profs) => {
      setProfessions(profs);
    });
  }, []);

  const handleProfessionSelect = (prof) => {
    setSelectedProf(prof);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession === selectedProf)
    : allUsers;

  const itemsCurntPage = getPageItems(filteredUsers, currentPage, itemsPerPage);

  const handleResetFilters = () => {
    setSelectedProf(undefined);
  };

  return (
    <>
      {professions && (
        <>
          <GroupList
            items={professions}
            selectedItem={selectedProf}
            onItemSelect={handleProfessionSelect}
          />
          <button
            className="btn btn-warning mt-2 mx-2"
            onClick={handleResetFilters}
          >
            Сброс
          </button>
        </>
      )}
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
