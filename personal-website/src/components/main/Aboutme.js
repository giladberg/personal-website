import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { Spring } from 'react-spring/renderprops';

const Aboutme = () => {
  const [img, setImg] = useState([
    { name: 'react', url: '/SVG/react.svg' },
    { name: 'angular', url: '/SVG/angular.svg' },
    { name: 'nodejs', url: '/SVG/node-dot-js.svg' },
    { name: 'php', url: '/SVG/php.svg' },
    { name: 'javascript', url: '/SVG/javascript.svg' },
    { name: 'java', url: '/SVG/java.svg' },
    { name: 'mongodb', url: '/SVG/mongodb.svg' },
    { name: 'mysql', url: '/SVG/mysql.svg' },
    { name: 'html5', url: '/SVG/html5.svg' },
    { name: 'css3', url: '/SVG/css3.svg' },
    { name: 'sass', url: '/SVG/sass.svg' }
  ]);

  // useEffect(() => {
  //   $(window).scroll(function(event) {
  //     var y = $(this).scrollTop();
  //     if (y > 300) {
  //       setFlag(true);
  //     } else {
  //       setFlag(true);
  //     }
  //   });
  // }, []);

  return (
    <Spring
      config={{ duration: 3000 }}
      from={{ opacity: 0, marginLeft: -500 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {props => (
        <section className='aboutme' style={props}>
          <h2 className='aboutme-title'>About me</h2>
          <div className='content-frame-aboutme'>
            <div className='composition'>
              <img className='giladimg' src='./img/gilad.jpeg' alt='gilad' />
            </div>
            <div className='frame-text'>
              <h2 className='second-title-aboutme'> Who I Am?</h2>
              <div className='text-container'>
                <p className='powergraph-aboutme'>
                  I'm Full-Stack Developer, specializing in React and Node.JS.
                  <br />
                  I have serious passion for Front-End & Back-End.
                  <br />
                  I Believe in elegant solutions for complex problems.
                  <br /> If you are seeking for a developer, you can get in
                  touch with me here.
                </p>
              </div>
              <h2 className='mytechnology-aboutme'> Using Technology:</h2>
              <div className='tech-list'>
                {img.map((photo, index) => (
                  <div
                    className='tech-frame'
                    key={index}
                    style={{ animationDelay: `0s` }}
                  >
                    <img src={photo.url} alt={photo.name} />
                    <p className='tech-text'>{photo.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className='content-frame-aboutme'>
            <div className='composition'>
              <img className='giladimg' src='./img/gilad.jpeg' alt='gilad' />
            </div>
            <div className='frame-text'>
              <h2 className='second-title-aboutme'> Who I Am?</h2>
              <div className='text-container'>
                <p className='powergraph-aboutme'>
                  I'm Full-Stack Developer, specializing in React and Node.JS.
                  <br />
                  I have serious passion for Front-End & Back-End.
                  <br />
                  I Believe in elegant solutions for complex problems.
                  <br /> If you are seeking for a developer, you can get in touch
                  with me here.
                </p>
              </div>
            </div>
          </div>
          <h2 className='mytechnology-aboutme'> Using Technology:</h2>
          <div className='tech-list'>
            {img.map((photo, index) => (
              <div
                className='tech-frame'
                key={photo.name}
                style={{ animationDelay: `0s` }}
              >
                <img src={photo.url} alt={photo.name} />
                <p className='tech-text'>{photo.name}</p>
              </div>
            ))}
          </div> */}
          </div>
          <Link
            className='button position-contact-btn color-turquoise '
            to='/contact-me'
          >
            Contact Me
          </Link>
          <Link
            className='button position-protfolio-btn color-turquoise'
            to='/protfolio'
          >
            Protfolio
          </Link>
          <Link
            className='button position-about-btn color-turquoise'
            to='/about-me'
          >
            About Me
          </Link>
        </section>
      )}
    </Spring>
  );
};

export default Aboutme;
