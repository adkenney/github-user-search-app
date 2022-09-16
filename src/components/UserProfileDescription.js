import React, { Fragment } from 'react';

const UserProfileDescription = () => {
  return (
    <Fragment>
      <div className="profile-description">
        <img className="profile-img" src="#" alt="avatar"></img>
        <div>
          <h1>The Octocat</h1>
          <h3>@octocat</h3>
          <p>Joined 25 jan 2011</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        aliquam hic quaerat in tempore et!
      </p>
    </Fragment>
  );
};

export default UserProfileDescription;
