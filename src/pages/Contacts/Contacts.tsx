import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Contacts: FC<IProps> = () => {
  return (
    <div>
      <Header />
      <SubHeader />
    </div>
  );
};

export default Contacts;
