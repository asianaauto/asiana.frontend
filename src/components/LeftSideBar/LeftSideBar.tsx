import React, { FC } from 'react';
import './LeftSideBar.scss';

interface IExternalProps {
  menu?: Array<{
    id: number;
    label: {
      type: 'title' | 'label'; // по нему будет определяться отмечать лейбл или нет
      value: string;
      link: string; // ссылку куда ввести
    };
    submenu: Array<{
      value: string;
      link: string;
    }>;
  }>;
}

interface IProps extends IExternalProps {}

const LeftSideBarMenu: IExternalProps['menu'] = [
  {
    id: 2,
    label: {
      type: 'title',
      value: 'Главная',
      link: '/',
    },
    submenu: [
      {
        value: 'Контакты',
        link: '/',
      },
    ],
  },
];

const LeftSideBar: FC<IProps> = () => {
  return (
    <div>
      {LeftSideBarMenu.map((item, key) => (
        <div>
          <div className="LeftSideBar-Menu">{item.label.value}</div>

          <div>
            {' '}
            {item.submenu.map((item, key) => (
              <div> {item.value} </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;
