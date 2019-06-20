import React from 'react';
import logo from './logo.svg';
import HeaderComponent from './components/header/Header';
import Navbar from './components/nav-bar/Navbar';
import Aboutme from './components/main/Aboutme';
import Protfolio from './components/main/Protfolio';
import './App.css';

const App = () => {
  return (
    <div>
      <header className='header'>
        <HeaderComponent />
      </header>
      <nav className='navbar'>
        <Navbar />
      </nav>
      <main>
        <Aboutme />
        <Protfolio />
      </main>
    </div>
  );
};

export default App;
