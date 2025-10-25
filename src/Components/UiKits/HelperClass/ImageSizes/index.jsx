import React from 'react';
import { ImageSizes } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass';

const ImageSizeCard = () => {
  return (
    <CommonHeaderClass title={ImageSizes}>{`
        .img-10 {
        width: 10px !important;
        }
        .img-20 {
        width: 20px !important;
        }
        .img-30 {
        width: 30px !important;
        }
        .img-40 {
        width: 40px !important;
        }
        .img-50 {
        width: 50px !important;
        }
        .img-60 {
        width: 60px !important;
        }
        .img-70 {
        width: 70px !important;
        }
        .img-80 {
        width: 80px !important;
        }
        .img-90 {
        width: 90px !important;
        }
        .img-100 {
        width: 100px !important;
        }
      `}
    </CommonHeaderClass>

  );
};

export default ImageSizeCard;