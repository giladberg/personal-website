import React, { Fragment, useEffect, useState } from 'react';

const Navbar = () => {
  const [titles, setTitle] = useState([
    'home',
    'about',
    'portfolio',
    'contact'
  ]);

  return (
    <Fragment  >
     <div className="logo-navbar">
      <svg className="logo-pic">
          <use xlinkHref="../../sprite.svg#icon-transformers"></use>
      </svg>
      <p className="logo-text">Gilad Bergmann <br/> WEB DEVELOPER</p>
     </div>
      <div className='container-navbar'>
        {titles.map(title => (
          <p className='navbar-text' key={title}>
            {title.toUpperCase()}
          </p>
        ))}
      </div>
     
    </Fragment>
  );
};

export default Navbar;
