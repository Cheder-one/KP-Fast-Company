import _ from "lodash";
import { PropTypes } from "prop-types";
import React from "react";

const Pagination = ({
  usersFilteredCount,
  itemsPerPage,
  onPageChange,
  currentPage
}) => {
  const numberOfPages = Math.ceil(usersFilteredCount / itemsPerPage);
  if (numberOfPages === 1) return null;
  const pages = _.range(1, numberOfPages + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pages.map((pageNum) => (
          <li
            className={"page-item " + (pageNum === currentPage ? "active" : "")}
            key={"page_" + pageNum}
          >
            <button className="page-link" onClick={() => onPageChange(pageNum)}>
              {pageNum}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  usersFilteredCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
