import React from "react";
import PropTypes from "prop-types";
import { bookmarkDefault, bookmarkLike } from "../assets/bookmark-svg";

const Bookmark = ({ onAddBookmark, isBookmark }) => {
  return (
    <button className="btn btn-light btn-sm" onClick={onAddBookmark}>
      {isBookmark ? bookmarkLike : bookmarkDefault}
    </button>
  );
};

Bookmark.propTypes = {
  onAddBookmark: PropTypes.func.isRequired,
  isBookmark: PropTypes.bool.isRequired
};

export default Bookmark;
