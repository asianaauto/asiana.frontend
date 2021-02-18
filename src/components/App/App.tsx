import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.css';
import Components from '../../pages/Components/Components';
import Contacts from '../../pages/Contacts/Contacts';
import AboutCompany from '../../pages/AboutCompany/AboutCompany';
import Main from '../../pages/Main/Main';
import News from '../../pages/News/News';
import Vacancies from '../../pages/Vacancies/Vacancies';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import DeliveryInRussia from '../../pages/DeliveryInRussia/DeliveryInRussia';
import Header from '../Header/Header';

function App() {
  return (
    <Router>
      <FloatingButton />
      <Header />
      <Switch>
        <Route exact path="/components">
          <Components />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/about-company">
          <AboutCompany />
        </Route>
        <Route path="/vacancies">
          <Vacancies />
        </Route>
        <Route path="/delivery-in-russia">
          <DeliveryInRussia />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
