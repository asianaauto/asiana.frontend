import React, { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './News.scss';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Button from '../../components/Button/Button';
import { COLORS } from '../../constants';
import Stiker from '../../assets/Stiker.jpg';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const News: FC<IProps> = () => {
  return (
    <div className="page-with-header">
      <Header />
      <SubHeader />

      <div className="News-container">
        <div>
          <div className="News-leftSidebar-button-title">
            <div className="News-leftSidebar-button">
              <div className="News-breadcrumbs-title">
                <div className="News-block">
                  <Breadcrumbs />
                </div>
                <h1 className="News-title">Объявления Санкт-Петербург</h1>
              </div>
              <LeftSideBar />
            </div>

            <div className="News-title-block">
              <div className="News-Stiker-block">
                <img className="News-Stiker" src={Stiker} alt="" />
              </div>

              <div>
                <div className="News-link-block">
                  <a className="News-link" href="/">
                    Спецпредложение для новых клиентов "ПОПРОБУЙ".
                  </a>
                </div>

                <div className="News-border">
                  <p className="News-data">13.01.2021</p>
                  <p>
                    Если Вы ещё не являетесь нашим <p></p> клиентом, то
                    воспользуйтесь нашим спецпредложением «ПОПРОБУЙ»! <p></p>
                    <b> Ваша выгода – </b>{' '}
                    <span style={{ color: COLORS.red }}>
                      {' '}
                      <b> скидка 15% </b>{' '}
                    </span>{' '}
                    <b> на услуги сервиса. </b>{' '}
                  </p>

                  <div className="News-button-block-div">
                    <div className="News-button-block">
                      <Button className="News-button">
                        ЗАПИШИТЕСЬ НА СЕРВИС ПРЯМО СЕЙЧАС
                      </Button>
                    </div>
                  </div>
                  <div>
                    <em className="News-paragraph">
                      Скидка не суммируется с дисконтной программой и другими
                      акциями нашей компании.
                    </em>
                    <div>
                      <a className="News-link" href="/">
                        Подробнее »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default News;
