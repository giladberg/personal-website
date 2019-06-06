import React, { Fragment, useEffect, useRef } from 'react';
import starShower from './starShower';

const Header = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    starShower.starsShower(canvas);
  }, []);

  return (
    <Fragment >
      <div className='container-canvas'>
        <canvas ref={canvasRef} />
      </div>
      <div className="containter-content-header">
      <h1 className='header-main-title'>
        Hello, I'm <span className="header-main-title__myName">Gilad Bergmann</span>. <br /> I'm a full-stack web developer.
      </h1>
      </div>
      
    </Fragment>
  );
};

export default Header;
