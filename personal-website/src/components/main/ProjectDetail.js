import React from 'react';

const ProjectDetail = ({ current }) => {
  return (
    <div className='container-detail'>
      <h1 className='movieName'>{current.title}</h1>
    </div>
  );
};

export default ProjectDetail;
