import React, { FC } from 'react';
import { BiMap, BiPhone } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { DownOutlined } from '@ant-design/icons';
import { COLORS } from '../../constants';
import './SubHeader.scss';
import Button from '../Button/Button';
import { Tooltip } from 'antd';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const SubHeader: FC<IProps> = () => {
  return (
    <div className="SubHeader">
      <div className="container page-container--full">
        <div className="SubHeader-container">
          <div className="SubHeader-block">
            <Button color={COLORS.red} bgColor={COLORS.transparent}>
              <BiMap className="mr-2" color={COLORS.red} size={24} />
              Санкт-Петербург
              <DownOutlined />
            </Button>
          </div>
          <div className="SubHeader-content">
            <Button
              className="mr-4"
              color={COLORS.red}
              bgColor={COLORS.transparent}>
              <BiPhone className="mr-2" color={COLORS.red} size={24} />8 (960)
              283 77 75
            </Button>
            <Button
              className="d-flex align-items-center"
              bgColor={COLORS.transparent}
              color={COLORS.red}>
              <Tooltip title="Личный кабинет">
                <FaUserCircle color={COLORS.red} size={25} />
              </Tooltip>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
