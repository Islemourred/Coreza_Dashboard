import React from 'react';
import { ButtonOutline } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass2';

const ButtonOutlineCard = () => {
  return (
    <CommonHeaderClass title={ButtonOutline}>{`
        .btn-outline-primary {
        border-color: #5c61f2;
        color: #5c61f2;
        background-color: transparent;
        }
        .btn-outline-secondary {
        border-color: #eeb82f;
        color: #eeb82f;
        background-color: transparent;
        }
        .btn-outline-success {
        border-color: #61ae41;
        color: #61ae41;
        background-color: transparent;
        }
        .btn-outline-danger {
        border-color: #f81f58;
        color: #f81f58;
        background-color: transparent;
        }
        .btn-outline-info {
        border-color: #4faad5;
        color: #4faad5;
        background-color: transparent;
        }
        .btn-outline-light {
        border-color: #f4f4f4;
        color: #f4f4f4;
        background-color: transparent;
        }
        .btn-outline-dark {
        border-color: #2c323f;
        color: #2c323f;
        background-color: transparent;
        }
        .btn-outline-warning {
        border-color: #e6ae30;
        color: #e6ae30;
        background-color: transparent;
        }
    `}</CommonHeaderClass>

  );
};

export default ButtonOutlineCard;