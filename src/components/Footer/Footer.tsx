import { FC } from 'react';
import './Footer.scss';
import { COLORS } from '../../constants';
import { BiPhone, BiUser } from 'react-icons/bi';
import vk from '../../assets/VK.png';
import Twitter from '../../assets/Twitter.png';
import YouTube from '../../assets/YouTube.png';
import OK from '../../assets/OK.png';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Footer: FC<IProps> = () => {
  return (
    <div>
      <div className="Footer-border">
        <div className="Footer-container">
          <div className="Footer-copyright--block">
            <p className="Footer-copyright--item Footer-copyright--link">
              Copyright ©2021{' '}
              <a className="Footer-link" href="/">
                asianaauto.ru
              </a>
            </p>
            <p className="Footer-copyright--item Footer-copyright--info">
              ООО«Альянс ЛТД» Все права защищены
            </p>
          </div>
          <div className="Footer-links--container">
            <div className="Footer-block">
              <h1 className="Footer-header">ОБЩИЙ РАЗДЕЛ</h1>
              <ul className="Footer-list">
                <li>
                  <a className="Footer-link" href="/">
                    Запчасти
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Автосервис
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Адреса магазинов
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Оптовикам
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    О компании
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Контакты
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
            <div className="Footer-block">
              <h2 className="Footer-header">ИНТЕРНЕТ-МАГАЗИН</h2>
              <ul className="Footer-list">
                <li>
                  <a className="Footer-link" href="/">
                    Договор оферты
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Дисконтная программа
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Способы оплаты
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Доставка заказа
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Возврат товара
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Запчасти Hyundai
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Запчасти KIA
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Запчасти Chevrolet
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Запчасти DAEWOO
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Запчасти SsangYong
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Запчасти для ТО
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Запчасти кузова
                  </a>
                </li>
              </ul>
            </div>
            <div className="Footer-block">
              <h3 className="Footer-header">АВТОСЕРВИС</h3>
              <ul className="Footer-list">
                <li>
                  <a className="Footer-link" href="/">
                    Hyundai сервис
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Kia сервис
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Chevrolet сервис
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    Daewoo сервис
                  </a>
                </li>
                <li>
                  <a className="Footer-link" href="/">
                    SsangYong сервис
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer-biUser-biPhone">
            <div className="Footer-icon-item">
              <div className="Footer-icon">
                <BiUser color={COLORS.darkRed} size={28} />
              </div>
              <div className="Footer-item-p">
                <a href="/">вход</a>
              </div>
              <div className="Footer-item-p mx-1">
                <p>/</p>
              </div>
              <div>
                <a className="Footer-item-pp" href="/">
                  регистрация
                </a>
              </div>
            </div>
            <div className="Footer-biPhone">
              <BiPhone className="mr-2" color={COLORS.darkRed} size={28} />
              <div className="Footer-item-Phone">
                <p>8 (960) 283 77 75</p>
              </div>
            </div>
            <div className="Footer-icon-block">
              <div>
                <img className="Footer-icon" src={vk} alt="" />
              </div>

              <div>
                <img className="Footer-icon" src={Twitter} alt="" />
              </div>

              <div>
                <img className="Footer-icon" src={YouTube} alt="" />
              </div>

              <div>
                <img src={OK} alt="" />
              </div>
            </div>

            <div>
              <a className="Footer-link mb-2 d-block fs-12 td-line" href="/">
                Инстарком
              </a>
              <a className="Footer-link d-block fs-12 td-line mb-1" href="/">
                Политика использования файлов Cookie
              </a>
              <a className="Footer-link d-block fs-12 td-line" href="/">
                Политика обработки персональных данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
