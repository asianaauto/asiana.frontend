import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Components from '../../pages/Components/Components';
import Contacts from '../../pages/Contacts/Contacts';
import AboutCompany from '../../pages/AboutCompany/AboutCompany';
import Main from '../../pages/Main/Main';
import News from '../../pages/News/News';
import CorporateNews from '../../pages/CorporateNews/CorporateNews';
import Vacancies from '../../pages/Vacancies/Vacancies';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import DeliveryInRussia from '../../pages/DeliveryInRussia/DeliveryInRussia';

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
        <Route path="/about-company">
          <AboutCompany />
        </Route>
        <Route path="/vacancies">
          <Vacancies />
        </Route>
        <Route path="/delivery-in-russia">
          <DeliveryInRussia />
        </Route>
      </Switch>
      <FloatingButton />
    </Router>
  );
}

export default App;
