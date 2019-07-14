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
          <h2 className='aboutme-title'>Protfolio</h2>
          <div className='card-container'>
            {projectList.map((project, index) => (
              <div
                key={index}
                className='card-item'
                onBlur={$event => {
                  closePopup($event);
                }}
                tabIndex={30}
              >
                <h3 className='title-protfolio'>{project.title}</h3>
                <img
                  className='protfolio-img'
                  src={`./img/${project.photo}`}
                  alt='gilad'
                  onClick={() => setOpenDetail(index)}
                />
                {openDetail == index ? <PrpjectDetail current={project} /> : ''}
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
          {/* <div className='card-container'>
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
     </div> */}
        </section>
      )}
    </Spring>
  );
};

export default Protfolio;
