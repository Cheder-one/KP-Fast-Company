import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, colums }) => {
  const renderContent = (item, colum) => {
    const component = colums[colum].component;
    if (component) {
      return typeof component === "function" ? component(item) : component;
    }
    return _.get(item, colums[colum].path);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(colums).map((colum) => (
            <td key={colum}>{renderContent(item, colum)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  colums: PropTypes.object.isRequired
};

export default TableBody;
