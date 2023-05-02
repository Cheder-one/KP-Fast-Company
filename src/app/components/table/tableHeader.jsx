import React from "react";
import PropTypes from "prop-types";
import { caretDown, caretUp } from "../../assets/caret-svg";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (param) => {
    if (selectedSort.path === param) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
      });
    } else {
      onSort({ path: param, order: "asc" });
    }
  };

  const getArrowToHeader = (column) => {
    if (columns[column].path === selectedSort.path) {
      return (
        <div className="d-flex align-items-center gap-1">
          {columns[column].name}
          {selectedSort.order === "asc" ? caretUp : caretDown}
        </div>
      );
    }
    return columns[column].name;
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            scope="col"
            {...{ role: columns[column].path && "button" }}
          >
            {getArrowToHeader(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  columns: PropTypes.object
};

export default TableHeader;
