import React, { FC } from 'react';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Navigation: FC<IProps> = () => {
  return (
    <div>
      <p>Component</p>
    </div>
  );
};

export default Navigation;
