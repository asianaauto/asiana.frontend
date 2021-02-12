import React, { FC } from 'react';
import './Header.scss';
import logo from '../../assets/logotype.png';
import { COLORS } from '../../constants';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Button from '../Button/Button';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const NAVS = [
  {
    id: 1,
    label: 'контакты',
    link: '/contacts',
  },
  {
    id: 2,
    label: 'компоненты(убрать со временем)',
    link: '/components',
  },
];

const Header: FC<IProps> = () => {
  const styleHeader = {
    background: COLORS.orangeGradient,
  };
  return (
    <header style={styleHeader} className="header">
      <div className="d-flex">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="Header-container">
          {NAVS.map((nav) => (
            <div className="Header-nav--item" key={nav.id}>
              <Link to={nav.link}>{nav.label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button
          className="d-flex align-items-center sign-in--button"
          bgColor={COLORS.transparent}
          color={COLORS.red}>
          <span className="sign-in--label">Войти</span>
          <FaUser color={COLORS.black} size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
