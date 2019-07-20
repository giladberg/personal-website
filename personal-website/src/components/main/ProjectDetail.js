import React, { Fragment } from 'react';
import { Spring } from 'react-spring/renderprops';

const ProjectDetail = ({ current }) => {
  return (
    <Spring
      config={{ duration: 1000 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <div className='container-detail' style={props}>
          <h1 className='movieName'>{current.title}</h1>
          <p className='tech-project'>
            Client: <span className='color-tech'> {current.clientSide}</span>
          </p>
          <p className='tech-project'>
            Server:{' '}
            <span className='color-tech'>
              {current.serverSide ? (
                current.serverSide
              ) : (
                <Fragment>No server side</Fragment>
              )}{' '}
            </span>
          </p>
          <div className='buttons-container'>
            <a
              href={current.url}
              className='btn tech-button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Check It Out
            </a>
            <a
              href={current.gitHub}
              className='btn tech-button'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default ProjectDetail;
