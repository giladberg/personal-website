import React from 'react';
import HeaderComponent from './components/header/Header';
import { Link, Route, Switch } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Aboutme from './components/main/Aboutme';
import Protfolio from './components/main/Protfolio';
import Contactme from './components/main/Contactme';
import './App.css';

const App = () => {
  return (
    <div>
      {/* <header className='header'>
        <HeaderComponent />
      </header> */}
      {/* <nav className='navbar'>
        <Navbar />
      </nav>
      <main>
        <Aboutme />
        <Protfolio />
        <Contactme />
      </main> */}

      {/* <button className='btn position-contact-btn'>Contact Me</button> */}
      <Switch>
        <Route exact path='/' component={HeaderComponent} />
        <Route path='/about-me' component={Aboutme} />
        <Route path='/protfolio' component={Protfolio} />
        <Route path='/contact-me' component={Contactme} />
      </Switch>
    </div>
  );
};

export default App;
