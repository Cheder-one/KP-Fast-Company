import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import QualitiesList from "../components/qualitiesList";

const User = ({ name, profession, qualities, completedMeetings, rate }) => {
  return (
    <div className="d-inline-block mt-2 ms-3">
      <h1 className="">{name}</h1>
      <h3>{`Профессия: ${profession.name}`}</h3>
      <p>
        <QualitiesList {...{ qualities }} />
      </p>
      <h4>{`Кол-во встреч:  ${completedMeetings}`}</h4>
      <h4>{`Рейтинг: ${rate}`}</h4>
      <Link to={"/users"}>
        <button className="btn btn-outline-primary mt-2">
          Все пользователи
        </button>
      </Link>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.shape({
    name: PropTypes.string
  }),
  qualities: PropTypes.array,
  completedMeetings: PropTypes.number,
  rate: PropTypes.number
};

export default User;
