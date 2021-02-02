import React, { FC } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { COLORS } from '../../constants';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Components:FC<IProps> = () => {
  return (
    <div>
      <Header/>
      <Button>ОСТАВИТЬ ОТЗЫВ</Button>
    </div>
  );
}

export default Components;