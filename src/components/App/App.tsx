import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Components from '../../pages/Components/Components';
import Contacts from '../../pages/Contacts/Contacts';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/components">Components</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/components">
          <Components />
        </Route>
        <Route path="/Contacts">
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
