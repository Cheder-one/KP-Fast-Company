import React from "react";
import User from "./user";
import { PropTypes } from "prop-types";
import TableHeader from "./tableHeader";

const UsersTable = ({ usersCurntPage, onSort, selectedSort, ...rest }) => {
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort }} />
      <tbody>
        {usersCurntPage.map((user) => (
          <User {...user} {...rest} key={user._id} />
        ))}
      </tbody>
    </table>
  );
};

UsersTable.propTypes = {
  usersCurntPage: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object
};

export default UsersTable;
