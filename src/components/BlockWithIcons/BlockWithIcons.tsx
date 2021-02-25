import { FC } from 'react';
import './BlockWithIcons.scss';
import SpareParts from '../../assets/SpareParts.png';
import CarService from '../../assets/CarService.png';
import CarsForSale from '../../assets/CarsForSale.png';
import ForWholesalers from '../../assets/ForWholesalers.png';
import { COLORS } from '../../constants';
import { Link } from 'react-router-dom';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const BlockWithIcons: FC<IProps> = () => {
  const ColorsBlockWithIcons = {
    background: COLORS.silverGradient,
  };
  return (
    <div style={ColorsBlockWithIcons} className="BlockWithIcons-block">
      <Link className="BlockWithIcons-link" to="/">
        <div className="BlockWithIcons-item">
          <img
            className="BlockWithIcons-SparePartsstyle"
            src={SpareParts}
            alt=""
          />
          <p className="BlockWithIcons-heading">Запчасти</p>
          <p className="BlockWithIcons-paragraph">
            Ассортимент, цены запчастей и аксессуаров в розничных магазинах(при
            наличии магазина в вашем регионе). Покупка необходимого товаров в
            интернет-магазине.{' '}
          </p>
        </div>
      </Link>
      <Link className="BlockWithIcons-link" to="/">
        <div className="BlockWithIcons-item">
          <img
            className="BlockWithIcons-CarServicestyle"
            src={CarService}
            alt=""
          />
          <p className="BlockWithIcons-heading">Автосервис</p>
          <p className="BlockWithIcons-paragraph">
            Ассортимент, цены запчастей и аксессуаров в розничных магазинах.{' '}
          </p>
        </div>
      </Link>
      <Link className="BlockWithIcons-link" to="/">
        <div className="BlockWithIcons-item">
          <img
            className="BlockWithIcons-CarsForSalestyle"
            src={CarsForSale}
            alt=""
          />
          <p className="BlockWithIcons-heading">Автомобили с спробегом</p>
          <p className="BlockWithIcons-paragraph">
            Ассортимент, цены запчастей и аксессуаров в розничных магазинах.{' '}
          </p>
        </div>
      </Link>
      <Link className="BlockWithIcons-link" to="/">
        <div className="BlockWithIcons-item">
          <img
            className="BlockWithIcons-ForWholesalersstyle"
            src={ForWholesalers}
            alt=""
          />
          <p className="BlockWithIcons-heading">Оптовикам</p>
          <p className="BlockWithIcons-paragraph">
            Ассортимент, цены запчастей и аксессуаров в розничных магазинах.{' '}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlockWithIcons;
