import React, { Fragment } from 'react';

const UserProfileDescription = props => {
  const splitDate = props.createdDate.split('T')[0];
  const parsedJoinedAt = splitDate.split('-');
  const year = parsedJoinedAt[0];
  const month = parsedJoinedAt[1];
  const day = parsedJoinedAt[2];

  const modifiedDate = new Date(year, month, day);
  modifiedDate.setMonth(month - 1);

  const monthText = modifiedDate.toLocaleString('en', { month: 'short' });
  return (
    <Fragment>
      <div className="profile-description">
        <img className="profile-img" src={props.avatar} alt="avatar"></img>
        <div>
          <h1>{props.username}</h1>
          <h3>@{props.login}</h3>
          <p>{`${day} ${monthText} ${year}`}</p>
        </div>
      </div>
      <p>{props.bio === null ? 'This user has no bio.' : props.bio}</p>
    </Fragment>
  );
};

export default UserProfileDescription;
