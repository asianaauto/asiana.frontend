import React, { FC } from 'react';
import { COLORS } from '../../constants';
import './FloatingButton.scss';
import { BiPhone } from 'react-icons/bi';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const FloatingButton: FC<IProps> = () => {
  return (
    <div className="callback-bt">
      <div className="text-call">
        <div className="block-center">
          <BiPhone
            size={40}
            className="FloatingButton-icon"
            color={COLORS.white}
          />
        </div>
        <span>
          Заказать
          <br />
          звонок
        </span>
      </div>
    </div>
  );
};

export default FloatingButton;
