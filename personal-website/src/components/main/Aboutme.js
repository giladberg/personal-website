import React, { useState, useEffect } from 'react';
import $ from 'jquery';

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
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    $(window).scroll(function(event) {
      var y = $(this).scrollTop();
      if (y > 300) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    });
  }, []);

  const pStyle = {
    bacgrounColor: 'black'
  };

  return (
    <section className='aboutme'>
      <h2 className='aboutme-title'>About me</h2>
      <div className='content-frame-aboutme'>
        <div className='composition'>
          <img className='giladimg' src='./img/gilad.jpeg' alt='gilad' />
        </div>
        <div className='frame-text'>
          <h2 className='second-title-aboutme'> Who I Am?</h2>
          <p className='powergraph-aboutme'>
            I'm Full-Stack Developer, specializing in React and Node.JS.
            <br />
            I have serious passion for Front-End & Back-End.
            <br />
            I Believe in elegant solutions for complex problems.
            <br /> If you are seeking for a developer, you can get in touch with
            me here.
          </p>
        </div>
      </div>
      <div className='tech-list'>
        {flag &&
          img.map((photo, index) => (
            <div
              className='tech-frame'
              key={photo.name}
              style={{ animationDelay: `${index - 0.5}s` }}
            >
              <img src={photo.url} alt={photo.name} />
              <p>{photo.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Aboutme;
