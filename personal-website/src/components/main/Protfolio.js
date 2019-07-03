import React, { Fragment } from 'react';
import projectList from './project';

const Protfolio = () => {
  console.log(projectList);
  {
  }
  return (
    <section className='protfolio'>
      <h2 className='aboutme-title'>Protfolio</h2>
      <div className='card-container'>
        {projectList.map((project, index) => (
          <div key={index} className='card'>
            <div className='card__side card__side--front'>
              <h4 className='card__heading'>
                <span className='card__heading-span '>{project.title}</span>
              </h4>
              <div
                className='card__picture card__picture__1'
                style={{ backgroundImage: `url(./img/${project.photo})` }}
              >
                &nbsp;
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-1'>
              <div className='card__cta'>
                <div className='card__price-box '>
                  <p className='card__tech-title tech-uniqe-title'>
                    Technology:{' '}
                  </p>
                  <p className='card__tech-paragraph'>
                    <span className='tech-uniqe-title'> Client Side: </span>
                    {project.clientSide}{' '}
                  </p>
                  <p className='card__tech-paragraph'>
                    <span className='tech-uniqe-title'>Server Side: </span>
                    {project.serverSide ? (
                      project.serverSide
                    ) : (
                      <Fragment> server side</Fragment>
                    )}{' '}
                  </p>
                </div>

                <a
                  href={project.url}
                  className='btn btn--red-green'
                  target='_blank'
                >
                  Check It Out
                </a>
                <a
                  href={project.gitHub}
                  className='btn btn--red-green'
                  target='_blank'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Protfolio;
