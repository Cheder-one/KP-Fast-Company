import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, colums }) => {
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

  return (
    <thead>
      <tr>
        {Object.keys(colums).map((colum) => (
          <th
            key={colum}
            onClick={
              colums[colum].path
                ? () => handleSort(colums[colum].path)
                : undefined
            }
            scope="col"
            {...{ role: colums[colum].path && "button" }}
          >
            {colums[colum].name}
          </th>
        ))}
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
