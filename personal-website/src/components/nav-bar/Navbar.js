import React, { Fragment, useEffect, useState } from 'react';
import $ from 'jquery';

const Navbar = () => {
  const [titles, setTitle] = useState([
    { name: 'home', url: '/SVG/house.svg' },
    { name: 'about', url: '/SVG/key.svg' },
    { name: 'protfolio', url: '/SVG/briefcase.svg' },
    { name: 'contact', url: '/SVG/message.svg' }
  ]);

  return (
    <Fragment>
      <div className='logo-navbar'>
        <svg className='logo-pic'>
          <use xlinkHref='../../sprite.svg#icon-transformers' />
        </svg>
        <p className='logo-text'>
          Gilad Bergmann <br /> WEB DEVELOPER
        </p>
      </div>
      <div className='container-navbar'>
        {titles.map(title => (
          <div className='nav-bar-list' key={title.name}>
            <img className='icon-nav-bar' src={title.url} />
            <p className='navbar-text'>{title.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Navbar;
