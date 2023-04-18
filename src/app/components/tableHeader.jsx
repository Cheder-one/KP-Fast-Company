import React from "react";
import PropTypes from "prop-types";

const TableHeader = (onSort, selectedSort, colums) => {
  const handleSort = (param) => {
    if (selectedSort.iter === param) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
      });
    } else {
      onSort({ iter: param, order: "asc" });
    }
  };

  return (
    <thead>
      <tr>
        <th onClick={() => handleSort("name")} scope="col">
          Имя
        </th>
        <th scope="col">Качества</th>
        <th onClick={() => handleSort("profession.name")} scope="col">
          Профессия
        </th>
        <th onClick={() => handleSort("completedMeetings")} scope="col">
          Встречи
        </th>
        <th onClick={() => handleSort("rate")} scope="col">
          Рейтинг
        </th>
        <th onClick={() => handleSort("bookmark")} scope="col">
          Избранное
        </th>
        <th />
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  colums: PropTypes.object.isRequired
};

export default TableHeader;
