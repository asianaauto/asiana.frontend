/* eslint-disable jsx-a11y/no-distracting-elements */
import { FC } from 'react';
import './Promotions.scss';

interface IExternalProps {
  title: string;
}

interface IProps extends IExternalProps {}

const Promotions: FC<IProps> = ({ title }) => {
  return (
    <div className="Promotions-border">
      {/* @ts-ignore */}
      <marquee
        hspace="5"
        vspace="7"
        className="Promotions-item"
        direction="left">
        {title}
        {/* @ts-ignore */}
      </marquee>
    </div>
  );
};

export default Promotions;
