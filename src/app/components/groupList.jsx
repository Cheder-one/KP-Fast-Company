import React from "react";
import PropTypes from "prop-types";

// Создаем универсальный переиспользуемый на других стр-х компонент
const GroupList = ({
  items,
  selectedItem,
  valueProperty,
  contentProperty,
  onItemSelect
}) => {
  return (
    <div className="list-group">
      {Object.values(items).map((item) => (
        <button
          className={
            "list-group-item list-group-item-action" +
            ([item] === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(items[item])}
          key={[item][valueProperty]}
        >
          {[item][contentProperty]}
        </button>
      ))}
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
  onItemSelect: PropTypes.func
};

export default GroupList;
