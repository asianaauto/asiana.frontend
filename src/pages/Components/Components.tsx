import React, { FC } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import { COLORS } from '../../constants';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const navs = [
  {
    id: 1,
    label: 'Label',
    link: '/',
  },
  {
    id: 2,
    label: 'Label',
    link: '/',
  },
];

const Components: FC<IProps> = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Button>ОСТАВИТЬ ОТЗЫВ</Button>
      <FloatingButton />
      <br />
      <DropdownMenu label="Главная" navs={navs} />
    </div>
  );
};

export default Components;
