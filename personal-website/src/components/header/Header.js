import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='containter-content-header'>
        <h1 className='header-main-title'>
          Hello, I'm{' '}
          <span className='header-main-title__myName'>Gilad Bergmann</span>.{' '}
          <br /> I'm a full-stack web developer.
        </h1>
      </div>
      <Link className='button position-contact-btn  ' to='/contact-me'>
        Contact Me
      </Link>
      <Link className='button position-protfolio-btn ' to='/protfolio'>
        Protfolio
      </Link>
      <Link className='button position-about-btn ' to='/about-me'>
        About Me
      </Link>
    </header>
  );
};

export default Header;
