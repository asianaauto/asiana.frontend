import React, { FC } from 'react';
import './Promotions.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Promotions: FC<IProps> = () => {
  return (
    <div className="Promotions-border">
      <h1 className="Promotions-item">ознакомьтесь с акциями</h1>
    </div>
  );
};

export default Promotions;
