import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, colums }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(colums).map((colum) => (
            <td key={colum}>{_.get(item, colums[colum].iter)}</td>
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
