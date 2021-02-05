import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants';
import Button, { IButtonProps } from '../Button/Button';
import './DropdownMenu.scss';

interface IExternalProps {
  navs: Array<{
    id: number;
    link: string;
    label: string;
  }>;
  label: string;
  buttonProps?: IButtonProps;
}

interface IProps extends IExternalProps {}

const DropdownMenu: FC<IProps> = ({ navs, label, buttonProps }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenMenu = useCallback(
    (e: any) => {
      const className = e.target.className;
      if (!className && typeof className !== 'string') {
        return;
      }

      const hasDropdown = String(className).includes('DropdownMenu');
      if (hasDropdown) {
        setOpen(true);
        return;
      }

      if (!hasDropdown) {
        setOpen(false);
      }
    },
    [setOpen],
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleOpenMenu);
  }, [handleOpenMenu]);

  const renderMenu = useCallback(() => {
    return navs.map((nav) => (
      <li className="DropdownMenu-menu--item" key={nav.id}>
        <Link className="DropdownMenu-menu--link" to={nav.link}>
          {nav.label}
        </Link>
      </li>
    ));
  }, [navs]);

  return (
    <div className="DromdownMenu">
      <Button
        className="DropdownMenu-button"
        color={COLORS.black}
        bgColor={COLORS.transparent}
        {...buttonProps}>
        {label}
      </Button>
      {isOpen && (
        <div className="DropdownMenu-menu">
          <ul className="DropdownMenu-menu--list">{renderMenu()}</ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
