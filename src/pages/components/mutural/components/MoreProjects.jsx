import React from 'react';
import { Link } from 'react-router-dom';
import './MoreProjects.css';
import ProjectData from './MoreProjectsData';

const MoreProjects = () => {
  const urlEnd = window.location.href.split('/').at(-1);
  const card = ProjectData.filter((data) => {
    let cleanUrl = data.url.slice(1);
    return cleanUrl !== urlEnd;
  }).map((data) => {
    return (
      <div
        className='more-projects__container'
        key={data.id}
        style={{ background: `url(${data.image})` }}>
        <div className='more-projects__overlay'>
          <h3 className='more-projects__title'>{data.title}</h3>
          <Link to={data.url} className='more-projects__link'>
            <span className='more-projects__subtitle'>View Projects</span>
          </Link>
        </div>
      </div>
    );
  });

  return <div className='more-projects'>{card}</div>;
};

export default MoreProjects;
