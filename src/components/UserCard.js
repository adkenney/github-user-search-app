import React from 'react';
import UserProfileDescription from './UserProfileDescription';
import UserProfileStats from './UserProfileStats';
import UserProfileLinks from './UserProfileLinks';

const UserCard = props => {
  return (
    <div className="content-card">
      <UserProfileDescription
        avatar={props.userData.avatar_url}
        username={props.userData.name}
        login={props.userData.login}
        createdDate={props.userData.created_at}
        bio={props.userData.bio}
      />
      <UserProfileStats
        repos={props.userData.public_repos}
        followers={props.userData.followers}
        following={props.userData.following}
      />
      <UserProfileLinks
        location={props.userData.location}
        website={props.userData.blog}
        twitter={props.userData.twitter_username}
        company={props.userData.company}
      />
    </div>
  );
};

export default UserCard;
