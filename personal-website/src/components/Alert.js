import React from 'react';

const Alert = ({data}) => {
  return <div className={`alert ${data.classType}`}>
  <h1 className="alert__text">{data.msg}</h1>
  </div>;
};

export default Alert;
