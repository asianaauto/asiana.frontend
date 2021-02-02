import React, { FC } from 'react';
import './Header.scss'
import logo from '../../assets/logotype.png'
import { COLORS } from '../../constants';


interface IExternalProps {}

interface IProps extends IExternalProps {}

const Header:FC<IProps> = () => {
  const styleHeader = {
    background: COLORS.orangeGradient
  }
  return (
    <header style={styleHeader} className = "header">
      <img className = "logo" src={logo} alt="ggg"/>
      <div className = "container">
        <div className = "item">
       <a href="/">о компании</a> 
        </div>
        <div className = "item">
         <a href="/">купить запчасти</a> 
        </div>
        <div className = "item">
        <a href="/">предложения оптовикам</a>
        </div>
        <div className = "item">
         <a href="/">контакты</a>
        </div>
      </div>
    </header>
  );
}

export default Header;