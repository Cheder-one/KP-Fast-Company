import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, colums }) => {
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
        {Object.keys(colums).map((colum) => (
          <th
            key={colum}
            onClick={
              colums[colum].iter
                ? () => handleSort(colums[colum].iter)
                : undefined
            }
            scope="col"
            {...{ role: colums[colum].iter && "button" }}
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
