import React from 'react';
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
              <div
                className='card__picture card__picture__1'
                style={{ backgroundImage: `url(./img/${project.photo})` }}
              >
                &nbsp;
              </div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--1'>
                  {project.title}
                </span>
              </h4>
            </div>
            <div className='card__side card__side--back card__side--back-1'>
              <div className='card__cta'>
                <div className='card__price-box '>
                  <p className='card__tech-paragraph'>
                    Client Side:{project.clientSide}{' '}
                  </p>
                  <p className='card__tech-paragraph'>
                    Server Side:{project.serverSide}{' '}
                  </p>
                </div>

                <a href='#popup' className='btn btn--white'>
                  Check It Out
                </a>
                <a href='#popup' className='btn btn--white'>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='card-container'>
        <div className='card'>
          <div className='card__side card__side--front'>
            <div className='card__picture card__picture--1'>&nbsp;</div>
            <h4 className='card__heading'>
              <span className='card__heading-span card__heading-span--1'>
                snake
              </span>
            </h4>
          </div>
          <div className='card__side card__side--back card__side--back-1'>
            <div className='card__cta'>
              <div className='card__price-box '>
                <h3 className='card__tech-title'>Name of the project: </h3>
                <p className='card__tech-paragraph'>Client Side: </p>
                <p className='card__tech-paragraph'>Server Side: </p>
                <p className='card__tech-paragraph'>GitHub: </p>
              </div>
              <a href='#popup' className='btn btn--white'>
                Check It Out
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Protfolio;
