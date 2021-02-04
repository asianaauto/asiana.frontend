import React, { FC } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Components: FC<IProps> = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Button>ОСТАВИТЬ ОТЗЫВ</Button>
      <FloatingButton />
    </div>
  );
};

export default Components;
