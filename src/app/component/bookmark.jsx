import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ onAddBookmark, isBookmark }) => {
  const bookmarkLike = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="red"
      className="bi bi-bookmark-heart-fill"
      viewBox="0 0 16 16"
    >
      <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
    </svg>
  );
  const bookmarkDefault = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-bookmark"
      viewBox="0 0 16 16"
    >
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
    </svg>
  );

  return (
    <button className="btn btn-light btn-sm" onClick={onAddBookmark}>
      {isBookmark ? bookmarkLike : bookmarkDefault}
    </button>
  );
};

Bookmark.propTypes = {
  isBookmark: PropTypes.bool.isRequired,
  onAddBookmark: PropTypes.func.isRequired
};

export default Bookmark;
