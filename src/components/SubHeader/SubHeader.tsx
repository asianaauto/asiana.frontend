import { FC } from 'react';
import { BiMap, BiPhone, BiCart, BiTaxi } from 'react-icons/bi';
import { Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { COLORS } from '../../constants';
import './SubHeader.scss';
import Button from '../Button/Button';
import { FaUserCircle } from 'react-icons/fa';

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
            <div className="SubHeader-icon">
              <Button
                className="d-flex px-0 align-items-center"
                bgColor={COLORS.transparent}
                color={COLORS.red}>
                <Tooltip title="Корзина">
                  <BiCart color={COLORS.gray} size={25} />
                </Tooltip>
              </Button>
            </div>
            <div className="SubHeader-icon">
              <Button
                className="d-flex px-0 align-items-center"
                bgColor={COLORS.transparent}
                color={COLORS.red}>
                <Tooltip title="Мой гараж">
                  <BiTaxi color={COLORS.primary} size={25} />
                </Tooltip>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
