import React, { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './CorporateNews.scss';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Stiker from '../../assets/Stiker.jpg';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const CorporateNews: FC<IProps> = () => {
  return (
    <div className="page-with-header">
      <Header />
      <SubHeader />

      <div className="CorporateNews-container">
        <div>
          <div className="CorporateNews-leftSidebar-button-title">
            <div className="CorporateNews-leftSidebar-button">
              <div className="CorporateNews-breadcrumbs-title">
                <div className="CorporateNews-block">
                  <Breadcrumbs />
                </div>
                <h1 className="CorporateNews-title">Корпоративные новости</h1>
              </div>
              <LeftSideBar />
            </div>

            <div className="CorporateNews-title-block">
              <div className="CorporateNews-Stiker-block">
                <img className="CorporateNews-Stiker" src={Stiker} alt="" />
              </div>

              <div>
                <div className="CorporateNews-link-block">
                  <a className="CorporateNews-link" href="/">
                    Автопробег "Владивосток - Санкт-Петербург`2016".
                  </a>
                </div>

                <div className="CorporateNews-border">
                  <p className="CorporateNews-data">09.08.2016</p>
                  <p>
                    Начало предприятия - в аэропорту Пулково, где наша дружная
                    команда погрузилась в самолёт, и уже совсем скоро была в г.
                    Москва. Переезд в аэропорт Внуково, ожидание, отложенный
                    рейс, снова ожидание, и, <p></p> наконец, погрузка в
                    широкофюзеляжный Боинг вместимостью 522 пассажира. <p></p>{' '}
                    <p className="CorporateNews-p"></p>
                    самолёта не сразу разобрался, каким типом воздушного судна
                    он управляет, но, в итоге, полёт прошёл без происшествий, не
                    считая частой болтанки и отсутствия вентиляции в задней
                    части салона, где оказалась половина нашей команды.
                  </p>

                  <div>
                    <div className="CorporateNews-link-block-div">
                      <a className="CorporateNews-link" href="/">
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

export default CorporateNews;
