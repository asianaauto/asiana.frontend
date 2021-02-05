import React, { FC } from 'react';
import Modal from '../Modal/Modal';
import './FloatingButtonModal.scss';

interface IExternalProps {
  onClose?: () => void;
  visible: boolean;
}

interface IProps extends IExternalProps {}

const FloatingButtonModal: FC<IProps> = ({ visible, onClose }) => {
  return (
    <Modal className="FloatingButtonModal" visible={visible} onClose={onClose}>
      <div className="border">
        <p>Ваше имя:</p>
        <div className="textField"></div>
        <p>Tелефон:</p>
        <div className="textField"></div>
        <p>Удобное время звонка:</p>
        <div className="textField"></div>
        <p>Дополнительная информация:</p>
        <div className="textarea"></div>
        <div className="submitButton">
          <p>ОТПРАВИТЬ</p>
        </div>
      </div>
    </Modal>
  );
};

export default FloatingButtonModal;
