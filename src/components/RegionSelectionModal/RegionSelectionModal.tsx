import React, { FC, useState } from 'react';
import './RegionSelectionModal.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const RegionSelectionModal: FC<IProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button className="myBtn" onClick={showModal}>
        {' '}
        Open Modal{' '}
      </button>
      {isModalVisible && (
        <div onClick={handleCancel} className="modal">
          <div className="modal-content">
            <span className="close"> &times </span>
            <p>Модальное окно</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionSelectionModal;
