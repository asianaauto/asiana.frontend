import React, { FC } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './CarService.scss';
import Button from '../../components/Button/Button';
import Map from '../../components/Map/Map';
import { BiPhone } from 'react-icons/bi';
import SliderCarService from '../../components/SliderCarService/SliderCarService';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const CarService: FC<IProps> = () => {
  return (
    <div className="page-with-header">
      <Header />
      <SubHeader />

      <div className="CarService-container">
        <div>
          <div className="CarService-breadcrumbs-title">
            <div className="CarService-block">
              <Breadcrumbs />
            </div>
            <h1 className="CarService-title">
              Автосервис для корейских автомобилей | Санкт-Петербург
            </h1>
          </div>
        </div>
      </div>

      <div className="CarService-border-block">
        <div className="CarService-border-container">
          <div className="CarService-border">
            <p>Введите название работ СТО</p>
          </div>
          <Button className="CarService-button">НАЙТИ</Button>
        </div>
        <p className="CarService-border-p">
          Например,{' '}
          <a className="CarService-border-linc" href="/">
            замена свечей зажигания
          </a>{' '}
        </p>
      </div>

      <h2 className="CarService-title-h2">АДРЕСА СЕРВИСОВ</h2>

      <div>
        <Map className="CarService-map"></Map>
      </div>

      <div>
        <h3 className="CarService-title-h2">МАЛЯРНО-КУЗОВНОЙ ЦЕНТР</h3>
      </div>

      <table className="CarService-simple-board">
        <thead>
          <tr className="CarService-table-head-block">
            <th className="CarService-table-head">Подразделение / Адрес</th>
            <th className="CarService-table-head"> Режим работы</th>
            <th className="CarService-table-head">Телефон</th>
          </tr>
        </thead>
        <tbody>
          <tr className="CarService-table-item-block">
            <td className="CarService-table-item">
              Народного Ополчения пр., д.201
            </td>
            <td className="CarService-table-item"> пн-вс: 09:00-21:00</td>
            <td className="CarService-table-item">
              <div className="d-flex justify-content-start">
                <Button bgColor="##f1f1f1" className="CarService-button-td">
                  {' '}
                  <BiPhone className="CarService-biphone" size={24} />{' '}
                  <span className="CarService-number">
                    {' '}
                    <b> +7(812) 640-77-99 </b>{' '}
                  </span>{' '}
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="CarService-title-h2">
        {' '}
        СТАНЦИИ ТЕХНИЧЕСКОГО ОБСЛУЖИВАНИЯ
      </h4>

      <table className="CarService-simple-board">
        <thead>
          <tr className="CarService-table-head-block">
            <th className="CarService-table-head">Подразделение / Адрес</th>
            <th className="CarService-table-head"> Режим работы</th>
            <th className="CarService-table-head">Телефон</th>
          </tr>
        </thead>
        <tbody>
          <tr className="CarService-table-item-block">
            <td className="CarService-table-item">
              Народного Ополчения пр., д.201
            </td>
            <td className="CarService-table-item"> пн-вс: 09:00-21:00</td>
            <td className="CarService-table-item">
              <div className="d-flex justify-content-start">
                <Button bgColor="##f1f1f1" className="CarService-button-td">
                  {' '}
                  <BiPhone className="CarService-biphone" size={24} />{' '}
                  <span className="CarService-number">
                    {' '}
                    <b> +7(812) 640-77-99 </b>{' '}
                  </span>{' '}
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <h5 className="CarService-title-h2">ГАЛЕРЕЯ НАШИХ СТО</h5>

      <SliderCarService />

      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default CarService;
