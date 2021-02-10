import React, { FC } from 'react';
import './MainNews.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const MainNews: FC<IProps> = () => {
  return (
    <div>
      <h1 className="MainNews-heading">НОВОСТИ КОМПАНИИ</h1>
      <div className="MainNews-container">
        <div className="MainNews-block">
          <a className="MainNews-link" href="/">
            СПЕЦПРЕДЛОЖЕНИЕ ДЛЯ НОВЫХ КЛИЕНТОВ "ПОПРОБУЙ".
          </a>
          <p className="MainNews-data">13.01.2021</p>
          <p className="MainNews-item">
            Если Вы ещё не являетесь нашим клиентом, то воспользуйтесь нашим
            спецпредложением «ПОПРОБУЙ»! Ваша выгода – скидка 15% на услуги
            сервиса. Запишитесь на сервис прямо сейчас Скидка не суммируется с
            дисконтной программой и другими акциями нашей компании.
          </p>
        </div>
        <div className="MainNews-block-center">
          <a className="MainNews-link" href="/">
            ВНИМАНИЕ ВАЖНАЯ ИНФОРМАЦИЯ!
          </a>
          <p className="MainNews-data">11.01.2021</p>
          <p className="MainNews-item">
            Уважаемые клиенты! СТО и магазин располагавшиеся по адресу: Полевая
            Сабировская 49 - переехали! С 27 января 2021 года ждём Вас по новому
            адресу: Богатырский пр., д.14, к.2. ( 2-й этаж) Записаться на СТО
          </p>
        </div>
        <div className="MainNews-block">
          <a className="MainNews-link" href="/">
            СПЕЦПРЕДЛОЖЕНИЕ "КОМБО-НАБОРЫ" В СЕТИ РОЗНИЧНЫХ МАГАЗИНОВ КОМПАНИИ
            "КОРЕАНА"!
          </a>
          <p className="MainNews-data">19.04.2019</p>
          <p className="MainNews-item">
            Уважаемые клиенты! При покупке комбо-набора №3* вы получаете скидку
            12% При покупке комбо-набора №4** вы получаете скидку 15%
            Спецпредложение действует во всех розничных магазинах компании
            "Кореана"! * В состав комбо-набора №3 входит - масляный фильтр -
            воздушный фильтр - салонный фильтр ** В состав комбо-набора №4
            входит - масляный фильтр - воздушный фильтр - салонный фильтр -
            топливный фильтр
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
