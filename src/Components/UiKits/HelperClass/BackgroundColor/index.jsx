import React from 'react';
import { BackgroundColor } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass';

const BackgroundColorCard = () => {
  return (
    <CommonHeaderClass title={BackgroundColor}>{`
        .bg-primary {
        background-color: #5c61f2 !important;
        color: #fff;
        }
        .bg-secondary {
        background-color: #eeb82f !important;
        color: #fff;
        }
        .bg-success {
        background-color: #61ae41 !important;
        color: #fff;
        }
        .bg-danger {
        background-color: #f81f58 !important;
        color: #fff;
        }
        .bg-info {
        background-color: #4faad5 !important;
        color: #fff;
        }
        .bg-light {
        background-color: #f4f4f4 !important;
        color: #fff;
        }
        .bg-dark {
        background-color: #2c323f !important;
        color: #fff;
        }
        .bg-warning {
        background-color: #e6ae30 !important;
        color: #fff;
        }
      `}
    </CommonHeaderClass>
  );
};

export default BackgroundColorCard;