import React, { FC } from 'react';
import { COLORS } from '../../constants';
import './Button.scss';

interface IExternalProps {
  color?: string;
  bgColor?: string;
  customStyles?: { [key: string]: string | number };
  onClick?: () => void;
}

interface IProps extends IExternalProps {}

const Button: FC<IProps> = ({
  onClick,
  bgColor,
  color,
  customStyles,
  children,
}) => {
  const style = {
    backgroundColor: bgColor || COLORS.red,
    color: color || COLORS.white,
  };

  return (
    <button
      className="button"
      style={{ ...style, ...customStyles }}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
