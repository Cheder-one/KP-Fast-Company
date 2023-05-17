import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import QualitiesList from "../../ui/qualities/qualitiesList.jsx";
import API from "../../../api/index.api";
import Spinner from "../templates/spinner.jsx";
import Page404 from "../templates/page404.jsx";

const UserPage = ({ userId }) => {
  const [userById, setUserById] = useState("");

  useEffect(() => {
    API.users.getById(userId).then((user) => {
      setUserById(user);
    });
  }, [userId]);

  if (userById === "") {
    return (
      <div className="ms-3">
        <Spinner />
      </div>
    );
  } else if (userById === undefined) {
    return <Page404 />;
  }

  const { name, profession, qualities, completedMeetings, rate } = userById;

  return (
    <div className="d-inline-block mt-2 ms-3">
      <h1 className="">{name}</h1>
      <h3>{`Профессия: ${profession.name}`}</h3>
      <p>
        <QualitiesList {...{ qualities }} />
      </p>
      <h4>{`Кол-во встреч:  ${completedMeetings}`}</h4>
      <h4>{`Рейтинг: ${rate}`}</h4>
      <Link to={`/users/${userId}/edit`}>
        <button className="btn btn-outline-primary mt-2">Редактировать</button>
      </Link>
    </div>
  );
};

UserPage.propTypes = {
  userId: PropTypes.string,
  edit: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.string,
  profession: PropTypes.shape({
    name: PropTypes.string
  }),
  qualities: PropTypes.array,
  completedMeetings: PropTypes.number,
  rate: PropTypes.number
};

export default UserPage;
