import React from "react";

const Person = (props) => {
  const {
    picture,
    firstName,
    lastName,
    position,
    id,
    mobile,
    email,
    gender,
  } = props.person;

  return (
    <>
      <div className="card">
        <div>
          <img src={picture} alt={firstName} />
        </div>
        <div>
          <span>position: </span>
          <strong>{position}</strong>
        </div>
        <div>
          <span>first name: </span>
          <strong>{firstName}</strong>
        </div>
        <div>
          <span>last name: </span>
          <strong>{lastName}</strong>
        </div>
        <div>
          <span>gender: </span>
          <strong>{gender}</strong>
        </div>
        <div>
          <span>id: </span>
          <strong>{id}</strong>
        </div>
        <div>
          <span>mobile: </span>
          <strong>{mobile}</strong>
        </div>
        <div>
          <span>email: </span>
          <strong>{email}</strong>
        </div>
      </div>
    </>
  );
};

export default Person;
