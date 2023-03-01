import React from "react";

const Qualities = ({ user: { name, qualities } }) => {
  return (
    <>
      <td>{name}</td>
      <td>
        {qualities.map((el) => (
          <span className={`badge bg-${el.color}`} key={el._id}>
            {el.name}
          </span>
        ))}
      </td>
    </>
  );
};

export default Qualities;
