import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './Contacts.scss';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Contacts: FC<IProps> = () => {
  return (
    <div className="page-with-header">
      <Header />
      <SubHeader />
      <div className="container">
        <div className="Contacts-map-container">
          <div>
            <div className="Contacts-block">
              <Breadcrumbs />
            </div>
            <h1 className="Contacts-h1">
              Магазины автозапчастей в городе Санкт-Петербург
            </h1>
            <section className="section-leftSideBar-map">
              <LeftSideBar />
              <Map className="Contacts-map" />
            </section>
          </div>
        </div>
        <div className="Contacts-item-div">
          <div className="Contacts-item-block">
            <h2 className="Contacts-h2">
              КОМПАНИЯ "КОРЕАНА" В САНКТ-ПЕТЕРБУРГЕ
            </h2>
            <p className="Contacts-item">
              Практически одновременно с тем, как на российскую автомобильную
              арену вышли машины корейского производства, такие как: Hyundai,
              KIA, Chevrolet, Daewoo, Ssang Yong – начала свою работу и компания
              «Кореана». Заметив интерес российских автовладельцев к недорогим
              функциональным маркам из Кореи, мы поняли, что наш сервис поставки
              запчастей для корейских машин – будет востребован, и не ошиблись!{' '}
              <br />
              За долгие годы работы и совершенствования мы добились того, что:{' '}
              <br /> <br />
              • Можем предложить своим покупателям выгодные демократичные цены
              на приобретение запчастей, как выпущенных заводом-изготовителем
              бренда, так и аналогичных, но не менее качественных; <br /> <br />
              • Филиалы нашего концерна функционируют по всей России, несмотря
              на то, что изначально компания была основана в Санкт-Петербурге;{' '}
              <br /> <br />
              • Крупные оптовые заказы запчастей мы всегда реализуем с хорошими
              скидками, что позволяет развивать Вам свой собственный бизнес еще
              более эффективно; <br /> <br />• Помимо продажи запчастей для{' '}
              <a className="Contacts-a" href="/">
                Hyundai
              </a>{' '}
              ,{' '}
              <a className="Contacts-a" href="/">
                Chevrolet
              </a>{' '}
              ,{' '}
              <a className="Contacts-a" href="/">
                Daewoo
              </a>{' '}
              ,{' '}
              <a className="Contacts-a" href="/">
                KIA
              </a>{' '}
              ,{' '}
              <a className="Contacts-a" href="/">
                Ssang Yong
              </a>{' '}
              , мы предлагаем также сервисное обслуживание автомобилей этих
              марок, и обеспечиваем высококлассный ремонт автомобиля в любом
              сервисном центре «Кореана».
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default Contacts;
