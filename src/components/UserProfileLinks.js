import React, { Fragment } from 'react';
import LocationIcon from '../assets/icon-location.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import CompanyIcon from '../assets/icon-company.svg';

const UserProfileLinks = () => {
  return (
    <Fragment>
      <ul className="user-links">
        <li>
          <img src={LocationIcon} alt=""></img>
          <p>San Francisco</p>
        </li>
        <li>
          <img src={WebsiteIcon} alt=""></img>
          <a href="https://github.blog">https://github.blog</a>
        </li>
        <li>
          <img src={TwitterIcon} alt=""></img>
          <p>Not Available</p>
        </li>
        <li>
          <img src={CompanyIcon} alt=""></img>
          <p>@github</p>
        </li>
      </ul>
    </Fragment>
  );
};

export default UserProfileLinks;
