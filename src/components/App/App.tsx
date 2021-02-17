import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.css';
import Components from '../../pages/Components/Components';
import Contacts from '../../pages/Contacts/Contacts';
import AboutCompany from '../../pages/AboutCompany/AboutCompany';
import Main from '../../pages/Main/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/components">
          <Components />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/about-company">
          <AboutCompany />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
