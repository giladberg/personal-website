import React from 'react';
import logo from './logo.svg';
import HeaderComponent from './components/header/Header';
import Navbar from './components/nav-bar/Navbar';
import './App.css';

const App = () => {
  return (
    <div>
      <header className="header" >
        <HeaderComponent  />
      </header>
      <nav className="navbar">
        <Navbar/>
      </nav>
      )
    </div>
  );
};

export default App;
