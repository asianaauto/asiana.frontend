import { FC } from 'react';
import HeatherPreview from '../../components/HeatherPreview/HeatherPreview';
import BlockWithIcons from '../../components/BlockWithIcons/BlockWithIcons';
import MainNews from '../../components/MainNews/MainNews';
import Button from '../../components/Button/Button';
import './Main.scss';
import { BiChevronRight, BiMap } from 'react-icons/bi';
import { COLORS } from '../../constants';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import FloatingFooter from '../../components/FloatingFooter/FloatingFooter';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Main: FC<IProps> = () => {
  return (
    <div className="page-with-header">
      <FloatingFooter />

      <HeatherPreview />

      <BlockWithIcons />
      <section>
        <MainNews />
        <Button className="Main-news-button">ПОКАЗАТЬ ВСЕ НОВОСТИ</Button>
      </section>
      <section className="Main-border">
        <section className="Main-video--section">
          <div className="Main-video--container">
            <div className="Main-video--block">
              <h2 className="Main-header">
                «КОРЕАНА» <br /> КОРЕЙСКИЕ ЗАПЧАСТИ <br /> ДЛЯ ВСЕХ РЕГИОНОВ{' '}
                <br /> РОССИИ
              </h2>
              <iframe
                title="main"
                className="Main-iframe"
                src="https://www.youtube.com/embed/Z44wvK2g544"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
          <div className="Main-section">
            <p className="Main-item">
              Компания «Кореана» предлагает запчасти, аксессуары и сервис для
              автомобилей корейского производства: Hyundai, Kia, Daewoo, Ssang
              Yong и Chevrolet.
            </p>
            <p className="Main-text-item">
              <b className="d-block mb-3">
                За 20 лет безупречной работы компания «Кореана» набрала
                огромнейший опыт и стала широко известна потребителям корейских
                запчастей во всех регионах Российской Федерации.
              </b>{' '}
              Сегодня компании принадлежат десятки розничных магазинов
              автозапчастей в Санкт-Петербурге и Ленинградской области, Москве и
              Московской области, открыты магазины в Брянске, Великом Новгороде,
              Владимире, Калуге, Петрозаводске, Пскове, Рязани, Твери, Туле,
              Ярославле. Мы не останавливаемся на достигнутом и идём дальше:
              развиваем розничную сеть магазинов автозапчастей для иномарок,
              сеть технических центров по ремонту и обслуживанию автомобилей,
              веб-сервисы по реализации деталей к автомобилям, предлагаем
              оптовые поставки оригинальных и неоригинальных запчастей для
              корейских автомобилей крупным компаниям и небольшим магазинам,
              боремся за качество обслуживания наших клиентов.
            </p>
          </div>
        </section>
      </section>
      <div className="Main-container">
        <section>
          <h3 className="Main-header-h3">
            ПОЧЕМУ ВЛАДЕЛЬЦЫ КОРЕЙСКИХ АВТОМОБИЛЕЙ ВЫБИРАЮТ КОМПАНИЮ «КОРЕАНА»?{' '}
          </h3>
        </section>
        <section className="Main-about-company">
          <div>
            <div className="Main-icon">
              <div className="Main-block--icon">
                <BiChevronRight color={COLORS.red} size={30} />
              </div>
              <p>
                Прямые поставки автозапчастей и аксессуаров для корейских
                автомобилей на рынок Российской Федерации.
              </p>
            </div>
            <div className="Main-icon">
              <div className="Main-block--icon">
                <BiChevronRight color={COLORS.red} size={30} />
              </div>
              <p>
                Широкая сеть розничных магазинов, а также интернет-магазин с
                доставкой товаров по всей территории России.
              </p>
            </div>
            <div className="Main-icon">
              <div className="Main-block--icon">
                <BiChevronRight color={COLORS.red} size={30} />
              </div>
              <p>
                Огромный ассортимент запчастей для корейских автомобилей на
                собственных складах.
              </p>
            </div>
            <div className="Main-icon">
              <div className="Main-block--icon">
                <BiChevronRight color={COLORS.red} size={30} />
              </div>
              <p>Запчасти с минимальной наценкой.</p>
            </div>
            <div className="Main-icon">
              <div className="Main-block--icon">
                <BiChevronRight color={COLORS.red} size={30} />
              </div>
              <p>Гарантия на приобретённые запчасти.</p>
            </div>
            <div className="Main-icon">
              <div className="Main-block--icon">
                <BiChevronRight color={COLORS.red} size={30} />
              </div>
              <p>
                Сеть технических центров по ремонту и обслуживанию корейских
                автомобилей.
              </p>
            </div>
            <div className="Main-icon">
              <div className="Main-block--icon">
                <BiChevronRight color={COLORS.red} size={30} />
              </div>
              <p>
                В регионах, где присутствуют наши профессиональные технические
                центры, автовладелец имеет возможность получить комплекс услуг
                "запчасти + сервис".
              </p>
            </div>
          </div>
          <div>
            <div className="Main-text-block">
              <div className="Main-icon">
                <div className="Main-block--icon">
                  <BiChevronRight color={COLORS.red} size={30} />
                </div>
                <p>Наличие автозапчастей отображается в режиме On-line.</p>
              </div>
              <div className="Main-icon">
                <div className="Main-block--icon">
                  <BiChevronRight color={COLORS.red} size={30} />
                </div>
                <p>Оригинальные каталоги запчастей на нашем сайте.</p>
              </div>
              <div className="Main-icon">
                <div className="Main-block--icon">
                  <BiChevronRight color={COLORS.red} size={30} />
                </div>
                <p>Наличие службы контроля качества обслуживания клиентов.</p>
              </div>
              <div className="Main-icon">
                <div className="Main-block--icon">
                  <BiChevronRight color={COLORS.red} size={30} />
                </div>
                <p>
                  Пунктами выдачи заказов являются как розничные магазины
                  компании "Кореана", так и пункты выдачи транспортных компаний
                  СДЭК и DPD.
                </p>
              </div>
              <div className="Main-icon">
                <div className="Main-block--icon">
                  <BiChevronRight color={COLORS.red} size={30} />
                </div>
                <p>Выгодная дисконтная программа.</p>
              </div>
              <div className="Main-icon">
                <div className="Main-block--icon">
                  <BiChevronRight color={COLORS.red} size={30} />
                </div>
                <p>
                  Официальный дистрибьютор компаний - производителей: Mando,
                  Parts-Mall, Luzar и KRAFTTECH.
                </p>
              </div>
              <div className="Main-icon">
                <div className="Main-block--icon">
                  <BiChevronRight color={COLORS.red} size={30} />
                </div>
                <p>
                  Отличные условия для оптовых покупателей, индивидуальный
                  подход к каждому оптовику (мелкий и крупный опт).
                </p>
              </div>
              <div>
                <p className="Main-text-text">
                  Ждём Вас в наших магазинах и сервисах!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <h4 className="Main-header-h4">
          АДРЕСА МАГАЗИНОВ И АВТОСЕРВИСОВ САНКТ-ПЕТЕРБУРГА
        </h4>
      </section>
      <section>
        <div></div>
      </section>
      <section className="Main-content-map">
        <div className="d-flex map-marker-block">
          <BiMap color={COLORS.red} size={36} />
          <p className="Main-score marker-label">МАГАЗИН</p>
        </div>
        <div className="d-flex map-marker-block">
          <BiMap className="Main-BiMap" color={COLORS.blue} size={36} />
          <p className="Main-car-service marker-label">АВТОСЕРВИС+МАГАЗИН</p>
        </div>
        <div className="d-flex map-marker-block">
          <BiMap color={COLORS.orange} size={36} />
          <p className="Main-car-sale marker-label">
            ПРОДАЖА АВТОМОБИЛЕЙ С ПРОБЕГОМ
          </p>
        </div>
      </section>
      <Map className="Main-map" />
      <Footer />
    </div>
  );
};

export default Main;
