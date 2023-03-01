import React from "react";

const Qualities = ({ user: { name, qualities } }) => {
  return (
    <>
      <td>{name}</td>
      <td>
        {qualities.map((el) => (
          <span key={el._id} className={`badge bg-${el.color}`}>
            {el.name}
          </span>
        ))}
      </td>
    </>
  );
};

export default Qualities;
