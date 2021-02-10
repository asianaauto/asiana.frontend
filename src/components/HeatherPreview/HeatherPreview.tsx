import React, { FC } from 'react';
import Slider from '../Slider/Slider';
import './HeatherPreview.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const HeatherPreview: FC<IProps> = () => {
  return (
    <div>
      <div className="HeatherPreview-backround">
        <div className="slider-contener">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default HeatherPreview;
