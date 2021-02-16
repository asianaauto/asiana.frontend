import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Components from '../../pages/Components/Components';
import Contacts from '../../pages/Contacts/Contacts';
import Main from '../../pages/Main/Main';
import News from '../../pages/News/News';
import CorporateNews from '../../pages/CorporateNews/CorporateNews';

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
        <Route exact path="/news">
          <News />
        </Route>
        <Route path="/corporate-news">
          <CorporateNews />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
