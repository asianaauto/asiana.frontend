import React, { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { COLORS } from '../../constants';
import Button from '../Button/Button';
import './Modal.scss';

interface IExternalProps {
  onClose?: () => void;
  visible: boolean;
  className?: string;
}

interface IProps extends IExternalProps {}

const Modal: FC<IProps> = ({ visible, onClose, children, className }) => {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <div className="modal">
        <div className={`modal-content ${className}`}>
          <Button
            onClick={onClose}
            bgColor={COLORS.transparent}
            className="modal-button--close">
            <AiOutlineClose color={COLORS.black} size={18} />
          </Button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
