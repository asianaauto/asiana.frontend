import React, { FC } from 'react';
import './Futer.scss';
import { COLORS } from '../../constants';
import ASIANAwhite from '../../assets/ASIANA-white.png';
import { BiPhone, BiUser } from 'react-icons/bi';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Futer: FC<IProps> = () => {
  return (
    <div>
      <div className="Futer-border">
        <div className="Futer-container">
          <div>
            <div>
              <img className="Futer-img" src={ASIANAwhite} alt="" />
            </div>
            <p className="Futer-item">
              Copyright © 2012-2021 <br /> Koreanaparts.ru
            </p>
            <p className="Futer-item-item">
              Кореана.рф <br />
              ООО«Альянс ЛТД» <br />
              Все права защищены.
            </p>
          </div>
          <div className="Fyter-block">
            <h1 className="Futer-header">ОБЩИЙ РАЗДЕЛ</h1>
            <ul className="Futer-list">
              <li>
                <a className="Futer-link" href="/">
                  Запчасти
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Автосервис
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Адреса магазинов
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Оптовикам
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  О компании
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Контакты
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Поддержка
                </a>
              </li>
            </ul>
          </div>
          <div className="Fyter-block">
            <h2 className="Futer-header">ИНТЕРНЕТ-МАГАЗИН</h2>
            <ul className="Futer-list">
              <li>
                <a className="Futer-link" href="/">
                  Договор оферты
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Дисконтная программа
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Способы оплаты
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Доставка заказа
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Возврат товара
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Запчасти Hyundai
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Запчасти KIA
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Запчасти Chevrolet
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Запчасти DAEWOO
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Запчасти SsangYong
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Запчасти для ТО
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Запчасти кузова
                </a>
              </li>
            </ul>
          </div>
          <div className="Fyter-block">
            <h3 className="Futer-header">АВТОСЕРВИС</h3>
            <ul className="Futer-list">
              <li>
                <a className="Futer-link" href="/">
                  Hyundai сервис
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Kia сервис
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Chevrolet сервис
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Daewoo сервис
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  SsangYong сервис
                </a>
              </li>
            </ul>
          </div>
          <div className="Fyter-block">
            <h4 className="Futer-header">КОНТАКТНАЯ ИНФОРМАЦИЯ</h4>
            <ul className="Futer-list">
              <li>
                <a className="Futer-link" href="/">
                  Форма обратной связи
                </a>
              </li>
              <li>
                <a className="Futer-link" href="/">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>
          <div className="Futer-biUser-biPhone">
            <div className="Furer-icon-item">
              <div className="Futer-icon">
                <BiUser color={COLORS.orange} size={28} />
              </div>
              <div className="Futer-item-p">
                <a href="/">вход</a>
              </div>
              <div className="Futer-item-p mx-1">
                <p>/</p>
              </div>
              <div>
                <a className="Futer-item-pp" href="/">
                  регистрация
                </a>
              </div>
            </div>
            <div className="Futer-biPhone">
              <BiPhone color={COLORS.orange} size={28} />
              <div className="Futer-item-p">
                <p>8 (960) 283 77 75</p>
              </div>
            </div>
            <div>
              <p className="Futer-item">
                Разработка и программинг сайта <br /> агентство интернет-решений{' '}
                <br /> МОРЕ
              </p>
              <p className="Futer-item">
                Дизайн и продвижение сайта <br /> интернет-агентство
              </p>
              <a className="Futer-link mb-2 d-block fs-12 td-line" href="/">
                Инстарком
              </a>
              <a className="Futer-link d-block fs-12 td-line mb-1" href="/">
                Политика использования файлов Cookie
              </a>
              <a className="Futer-link d-block fs-12 td-line" href="/">
                Политика обработки персональных данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futer;
