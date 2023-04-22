import React from "react";
import PropTypes from "prop-types";

// Создаем универсальный переиспользуемый на других стр-х компонент
const GroupList = ({
  items,
  selectedItem,
  valueProperty,
  contentProperty,
  onItemSelect,
  onResetFilters
}) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3">
      <div className="list-group">
        {Object.keys(items).map((item) => (
          <button
            className={
              "list-group-item list-group-item-action" +
              (items[item] === selectedItem ? " active" : "")
            }
            onClick={() => onItemSelect(items[item])}
            key={items[item][valueProperty]}
          >
            {items[item][contentProperty]}
          </button>
        ))}
      </div>
      <button
        className="btn btn-secondary btn-sm mt-2"
        onClick={onResetFilters}
      >
        Очистить
      </button>
    </div>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  selectedItem: PropTypes.object,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  onResetFilters: PropTypes.func
};

export default GroupList;
