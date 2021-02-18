import React, { FC } from 'react';
import { Tabs } from 'antd';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';
import './Contacts.scss';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import {
  AiFillCar,
  AiFillShop,
  AiTwotoneBank,
  AiTwotoneSetting,
} from 'react-icons/ai';
import ContactCard from '../../components/ContactCard/ContactCard';

const { TabPane } = Tabs;

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Contacts: FC<IProps> = () => {
  return (
    <div className="page-with-header">
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
              <div>
                <Map className="Contacts-map" />
                <div className="Contacts-item-div">
                  <div>
                    <div className="Contacts-item-block">
                      <Tabs defaultActiveKey="2">
                        <TabPane
                          tab={
                            <span className="d-flex align-items-center">
                              <AiFillShop className="mr-2" />
                              Магазины
                            </span>
                          }
                          key="1">
                          <div>
                            <ContactCard
                              title="Богатырский проспект"
                              phone="+79837777983"
                              date="пн-вс: 09:00-21:00"
                            />
                          </div>
                        </TabPane>
                        <TabPane
                          tab={
                            <span className="d-flex align-items-center">
                              <AiTwotoneSetting className="mr-2" />
                              Автосервисы
                            </span>
                          }
                          key="2">
                          Автосервисы
                        </TabPane>
                        <TabPane
                          tab={
                            <span className="d-flex align-items-center">
                              <AiFillCar className="mr-2" />
                              Автосалоны
                            </span>
                          }
                          key="3">
                          Автосалоны
                        </TabPane>
                        <TabPane
                          tab={
                            <span className="d-flex align-items-center">
                              <AiTwotoneBank className="mr-2" />
                              Отделы компании
                            </span>
                          }
                          key="4">
                          Отделы компании
                        </TabPane>
                        <TabPane
                          tab={
                            <span className="d-flex align-items-center">
                              Показать все
                            </span>
                          }
                          key="5">
                          Показать все
                        </TabPane>
                      </Tabs>
                      <h2 className="Contacts-h2 mt-5">
                        КОМПАНИЯ "КОРЕАНА" В САНКТ-ПЕТЕРБУРГЕ
                      </h2>
                      <p className="Contacts-item">
                        Практически одновременно с тем, как на российскую
                        автомобильную арену вышли машины корейского
                        производства, такие как: Hyundai, KIA, Chevrolet,
                        Daewoo, Ssang Yong – начала свою работу и компания
                        «Кореана». Заметив интерес российских автовладельцев к
                        недорогим функциональным маркам из Кореи, мы поняли, что
                        наш сервис поставки запчастей для корейских машин –
                        будет востребован, и не ошиблись! За долгие годы работы
                        и совершенствования мы добились того, что:{' '}
                        <span className="Contacts-item--content">
                          • Можем предложить своим покупателям выгодные
                          демократичные цены на приобретение запчастей, как
                          выпущенных заводом-изготовителем бренда, так и
                          аналогичных, но не менее качественных;
                        </span>
                        <span className="Contacts-item--content">
                          • Филиалы нашего концерна функционируют по всей
                          России, несмотря на то, что изначально компания была
                          основана в Санкт-Петербурге;{' '}
                        </span>
                        <span className="Contacts-item--content">
                          • Крупные оптовые заказы запчастей мы всегда реализуем
                          с хорошими скидками, что позволяет развивать Вам свой
                          собственный бизнес еще более эффективно; • Помимо
                          продажи запчастей для{' '}
                        </span>
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
                        , мы предлагаем также сервисное обслуживание автомобилей
                        этих марок, и обеспечиваем высококлассный ремонт
                        автомобиля в любом сервисном центре «Кореана».
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default Contacts;
