import React, { useState } from 'react';
import projectList from './project';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import PrpjectDetail from './ProjectDetail';

const Protfolio = () => {
  const [openDetail, setOpenDetail] = useState(-1);

  const closePopup = e => {
    if (e.relatedTarget === null) {
      setOpenDetail(-1);
    }
  };

  return (
    <Spring
      config={{ duration: 3000 }}
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <section className='protfolio' style={props}>
          <h2 className='aboutme-title margin-top-title'>PROTFOLIO</h2>
          <div className='card-container'>
            {projectList.map((project, index) => (
              <div
                key={index}
                className='card-item'
                onBlur={$event => {
                  closePopup($event);
                }}
                tabIndex={30}
                onMouseLeave={() => setTimeout(() => setOpenDetail(-1), 300)}
              >
                <h3 className='title-protfolio'>{project.title}</h3>
                <img
                  className='protfolio-img'
                  src={`./img/${project.photo}`}
                  alt='gilad'
                  onMouseEnter={() =>
                    setTimeout(() => setOpenDetail(index), 500)
                  }
                />
                {openDetail === index ? (
                  <PrpjectDetail current={project} />
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
          <Link
            className='button position-contact-btn color-white '
            to='/contact-me'
          >
            Contact Me
          </Link>
          <Link
            className='button position-protfolio-btn color-white'
            to='/protfolio'
          >
            Protfolio
          </Link>
          <Link
            className='button position-about-btn color-white'
            to='/about-me'
          >
            About Me
          </Link>
        </section>
      )}
    </Spring>
  );
};

export default Protfolio;
