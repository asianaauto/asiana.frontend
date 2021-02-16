import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Components from '../../pages/Components/Components';
import Contacts from '../../pages/Contacts/Contacts';
import Main from '../../pages/Main/Main';
import Vacancies from '../../pages/Vacancies/Vacancies';

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
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/vacancies">
          <Vacancies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
