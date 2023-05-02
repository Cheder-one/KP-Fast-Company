import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Link } from "react-router-dom";

const TableBody = ({ data, columns }) => {
  const renderContent = (item, column) => {
    const component = columns[column].component;
    if (component) {
      return typeof component === "function" ? component(item) : component;
    }
    return _.get(item, columns[column].path);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((columnName) => {
            const columnInfo = columns[columnName];
            const cellContent = renderContent(item, columnName);

            return (
              <td key={columnName}>
                {columnInfo.path === "name" ? (
                  <Link to={`/users/${item._id}`}>{cellContent}</Link>
                ) : (
                  cellContent
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.object,
  renderContent: PropTypes.func
};

export default TableBody;
