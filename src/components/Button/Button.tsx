import React, { FC } from 'react';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const Button:FC<IProps> = () => {
  return (
    <div>
      <p>Component</p>
    </div>
  );
}

export default Button;