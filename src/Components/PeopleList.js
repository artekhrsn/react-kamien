import React from "react";

const PeopleList = (props) => {
  const users = props.people.map((user) => (
    <div key={user.id} onClick={() => props.change(user.id)}>
      <img src={user.picture} alt={user.firstName} />
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <span>{`${user.position}`}</span>
    </div>
  ));

  return <div>{users}</div>;
};

export default PeopleList;
