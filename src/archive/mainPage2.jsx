import React from "react";
import { Link } from "react-router-dom";

function MainPage2() {
  return (
    <div className="m-3">
      <p>
        <Link to="/feedback">
          <button className="btn btn-primary">Обратная связь</button>
        </Link>
      </p>
      <p>
        <Link to="/order">
          <button className="btn btn-primary">Оформление заказа</button>
        </Link>
      </p>
    </div>
  );
}

export default MainPage2;
