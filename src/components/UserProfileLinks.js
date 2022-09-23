import React, { Fragment } from 'react';
import LocationIcon from '../assets/icon-location.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import CompanyIcon from '../assets/icon-company.svg';

const UserProfileLinks = props => {
  return (
    <Fragment>
      <ul className="user-links">
        <div class="first-links">
          <li className="social-links">
            <img src={LocationIcon} alt=""></img>
            <p>{props.location === null ? 'Not Available' : props.location}</p>
          </li>
          <li className="social-links">
            <img src={WebsiteIcon} alt=""></img>
            <a href={props.website === '' ? '#' : props.website}>
              {props.website === '' ? 'Not Available' : props.website}
            </a>
          </li>
        </div>
        <div class="second-links">
          <li className="social-links">
            <img src={TwitterIcon} alt=""></img>
            <p>{props.twitter === null ? 'Not Available' : props.twitter}</p>
          </li>
          <li className="social-links">
            <img src={CompanyIcon} alt=""></img>
            <p>{props.company === null ? 'Not Available' : props.company}</p>
          </li>
        </div>
      </ul>
    </Fragment>
  );
};

export default UserProfileLinks;
