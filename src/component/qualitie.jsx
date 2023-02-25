import React from "react";

const Qualities = ({ user }) => {
  // TODO сократить пропсы
  return (
    <>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((el) => (
          <span className={`badge bg-${el.color}`} key={el._id}>
            {el.name}
          </span>
        ))}
      </td>
      <td key={user.profession._id}>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
    </>
  );
};

export default Qualities;
