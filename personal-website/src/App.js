import React from 'react';
import logo from './logo.svg';
import HeaderComponent from './components/header/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <header className='overflow-hidden'>
        <HeaderComponent />
      </header>
      )
    </div>
  );
};

export default App;
