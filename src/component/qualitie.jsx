import React from "react";

const Qualities = (props) => {
  const {
    user: {
      name,
      profession,
      qualities,
      completedMeetings,
      rate,
      ...otherProps
    },
  } = props;

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
      <td key={profession._id}>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
    </>
  );
};

export default Qualities;
