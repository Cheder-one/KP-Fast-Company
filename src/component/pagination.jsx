import _ from "lodash";
import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) => {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  if (numberOfPages === 1) return null;
  const pages = _.range(1, numberOfPages + 1);

  // const

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

export default Pagination;
