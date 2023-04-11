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
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start ">
        <button
          className="btn btn-outline-primary ms-2 btn-sm"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          Фильтр профессий
        </button>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="false"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
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
            className="btn btn-warning my-3 mx-2"
            onClick={() => onResetFilters()}
          >
            Сброс
          </button>
        </div>
      </div>
    </>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
};

GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  selectedItem: PropTypes.object,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  onResetFilters: PropTypes.func
};

export default GroupList;
