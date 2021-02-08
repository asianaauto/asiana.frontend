import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Contacts: FC<IProps> = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Breadcrumbs />
    </div>
  );
};

export default Contacts;
