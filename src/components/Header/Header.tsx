import React, { FC } from 'react';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Header:FC<IProps> = () => {
  return (
    <div>
      <p>Component</p>
    </div>
  );
}

export default Header;