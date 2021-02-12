import React, { FC } from 'react';
import { BiMap, BiPhone, BiUser, BiArchive, BiTaxi } from 'react-icons/bi';
import { COLORS } from '../../constants';
import './SubHeader.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const SubHeader: FC<IProps> = () => {
  const styleSubHeader = {
    background: COLORS.black,
  };
  return (
    <div style={styleSubHeader} className="SubHeader">
      <div className="block">
        <div className="SubHeader-block">
          <BiMap color={COLORS.orange} size={28} />
          <div className="SubHeader-item">
            <p>Ваш регион:</p>
          </div>
          <select className="SubHeader-select">
            <option value="ddd">ccc</option>
          </select>
        </div>
        <div className="SubHeader-content">
          <BiPhone color={COLORS.orange} size={28} />
          <div className="SubHeader-item">
            <p>8 (960) 283 77 75</p>
          </div>
          <div className="SubHeader-icon">
            <BiUser color={COLORS.orange} size={28} />
          </div>
          <div className="SubHeader-item">
            <a href="/">вход</a>
          </div>
          <div className="SubHeader-item mx-1">
            <p>/</p>
          </div>
          <div className="SubHeader-item">
            <a href="/">регистрация</a>
          </div>

          <div className="SubHeader-icon">
            <BiArchive color={COLORS.orange} size={28} />
          </div>
          <div className="SubHeader-icon">
            <BiTaxi color={COLORS.orange} size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
