import React from 'react';
import { ButtonColor } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const ButtonColorCard = () => {
  return (
    <CommonHeaderClass title={ButtonColor}>{`
        .btn-primary {
        background-color: #5c61f2;
        border-color: #5c61f2;
        }
        .btn-secondary {
        background-color: #eeb82f;
        border-color: #eeb82f;
        }
        .btn-success {
        background-color: #61ae41 !important;
        color: #fff;
        }
        .btn-success {
        background-color: #61ae41;
        border-color: #61ae41;
        }
        .btn-danger {
        background-color: #f81f58;
        border-color: #f81f58;
        }
        .btn-info {
        background-color: #4faad5;
        border-color: #4faad5;
        }
        .btn-light {
        background-color: #f4f4f4;
        border-color: #f4f4f4;
        }
        .btn-warning {
        background-color: #e6ae30;
        border-color: #e6ae30;
        }
      `}
    </CommonHeaderClass>

  );
};

export default ButtonColorCard;