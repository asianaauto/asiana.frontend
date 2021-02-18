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
          <h1 className="BlockWithIcons-heading">Запчасти</h1>
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
          <h1 className="BlockWithIcons-heading">Автосервис</h1>
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
          <h1 className="BlockWithIcons-heading">Автомобили с спробегом</h1>
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
          <h1 className="BlockWithIcons-heading">Оптовикам</h1>
          <p className="BlockWithIcons-paragraph">
            Ассортимент, цены запчастей и аксессуаров в розничных магазинах.{' '}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlockWithIcons;
