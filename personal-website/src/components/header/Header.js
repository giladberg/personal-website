import React, { Fragment, useEffect, useRef } from 'react';
import starShower from './starShower';

const Header = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    starShower.starsShower(canvas);
  }, []);

  return (
    <Fragment>
      <canvas ref={canvasRef} />
      <h1 className='header-main-title'>
        Hello, I'm Gilad Bergmann. <br /> I'm a full-stack web developer.
      </h1>
    </Fragment>
  );
};

export default Header;
