import React, { FC } from 'react';
import './BlockWithIcons.scss';
import SpareParts from '../../assets/SpareParts.png';
import CarService from '../../assets/CarService.png';
import CarsForSale from '../../assets/CarsForSale.png';
import ForWholesalers from '../../assets/ForWholesalers.png';
import { COLORS } from '../../constants';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const BlockWithIcons: FC<IProps> = () => {
  const ColorsBlockWithIcons = {
    background: COLORS.silverGradient,
  };
  return (
    <div style={ColorsBlockWithIcons} className="BlockWithIcons-block">
      <div className="BlockWithIcons-item">
        <img
          className="BlockWithIcons-SparePartsstyle"
          src={SpareParts}
          alt=""
        />
        <h1 className="BlockWithIcons-heading">Запчасти</h1>
        <p>
          Ассортимент, <br /> цены запчастей и <br /> аксессуаров в <br />{' '}
          розничных магазинах.{' '}
        </p>
      </div>
      <div className="BlockWithIcons-item">
        <img
          className="BlockWithIcons-CarServicestyle"
          src={CarService}
          alt=""
        />
        <h1 className="BlockWithIcons-heading">Автосервис</h1>
        <p>
          Ассортимент, <br /> цены запчастей и <br /> аксессуаров в <br />{' '}
          розничных магазинах.{' '}
        </p>
      </div>
      <div className="BlockWithIcons-item">
        <img
          className="BlockWithIcons-CarsForSalestyle"
          src={CarsForSale}
          alt=""
        />
        <h1 className="BlockWithIcons-heading">
          Автомобили с <br /> спробегом
        </h1>
        <p>
          Ассортимент, <br /> цены запчастей и <br /> аксессуаров в <br />{' '}
          розничных магазинах.{' '}
        </p>
      </div>
      <div className="BlockWithIcons-item">
        <img
          className="BlockWithIcons-ForWholesalersstyle"
          src={ForWholesalers}
          alt=""
        />
        <h1 className="BlockWithIcons-heading">Оптовикам</h1>
        <p>
          Ассортимент, <br /> цены запчастей и <br /> аксессуаров в <br />{' '}
          розничных магазинах.{' '}
        </p>
      </div>
    </div>
  );
};

export default BlockWithIcons;
