import React, { FC } from 'react';
import './RegionSelectionModal.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const RegionSelectionModal: FC<IProps> = () => {
  return (
    <div>
      <button className="myBtn"> Open Modal </button>
      <div className="modal">
        <div className="modal-content">
          <span className="close"> &times </span>
          <p>Модальное окно</p>
        </div>
      </div>
    </div>
  );
};

export default RegionSelectionModal;
