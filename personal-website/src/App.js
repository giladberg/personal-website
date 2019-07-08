import React from 'react';
import HeaderComponent from './components/header/Header';
import { Link, Route, Switch } from 'react-router-dom';
import Aboutme from './components/main/Aboutme';
import Protfolio from './components/main/Protfolio';
import Contactme from './components/main/Contactme';
import './App.css';

const App = () => {
  return (
    <div>
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
