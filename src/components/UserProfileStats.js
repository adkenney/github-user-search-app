import React from 'react';

const UserProfileStats = props => {
  return (
    <div className="profile-stats">
      <div>
        <h4>Repos</h4>
        <p>{props.repos}</p>
      </div>
      <div>
        <h4>Followers</h4>
        <p>{props.followers}</p>
      </div>
      <div>
        <h4>Following</h4>
        <p>{props.following}</p>
      </div>
    </div>
  );
};

export default UserProfileStats;
