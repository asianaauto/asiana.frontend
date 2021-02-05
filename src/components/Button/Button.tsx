import React, { FC } from 'react';
import { COLORS } from '../../constants';
import './Button.scss';

interface IExternalProps {
  color?: string;
  bgColor?: string;
  customStyles?: { [key: string]: string | number };
  onClick?: () => void;
  onMouseMove?: (e: any) => void;
  onMouseOut?: (e: any) => void;
  className?: string;
}

export interface IButtonProps extends IExternalProps {}

interface IProps extends IExternalProps {}

const Button: FC<IProps> = ({
  onClick,
  className,
  onMouseOut,
  bgColor,
  color,
  customStyles,
  children,
  onMouseMove,
}) => {
  const style = {
    backgroundColor: bgColor || COLORS.red,
    color: color || COLORS.white,
  };

  return (
    <button
      onMouseOut={onMouseOut}
      onMouseMove={onMouseMove}
      className={`button ${className}`}
      style={{ ...style, ...customStyles }}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
