import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import QualitiesList from "../../ui/qualities/qualitiesList.jsx";
import API from "../../../api/index.api";
import Spinner from "../../../layouts/other/spinner";
import Page404 from "../../../layouts/other/page404";

const UserPage = () => {
  const [userById, setUserById] = useState();
  const { userId } = useParams();

  useEffect(() => {
    API.users.getById(userId).then((user) => {
      setUserById(user);
    });
  }, [userId]);

  if (userById === undefined) {
    return <Spinner text={"Loading..."} />;
  } else if (userById === null) {
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
      <Link to={"/users"}>
        <button className="btn btn-outline-primary mt-2">
          Все пользователи
        </button>
      </Link>
    </div>
  );
};

UserPage.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.shape({
    name: PropTypes.string
  }),
  qualities: PropTypes.array,
  completedMeetings: PropTypes.number,
  rate: PropTypes.number
};

export default UserPage;
