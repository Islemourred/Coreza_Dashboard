import React from 'react';
import { BadgeColor } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass';

const BadgeColorCard = () => {
  return (
    <CommonHeaderClass title={BadgeColor}>{`
        .badge-primary {
        background-color: #5c61f2;
        }
        .badge-secondary {
        background-color: #eeb82f;
        }
        .badge-success {
        background-color: #61ae41;
        }
        .badge-danger {
        background-color: #f81f58;
        }
        .badge-info {
        background-color: #4faad5;
        }
        .badge-light {
        background-color: #f4f4f4;
        }
        .badge-dark {
        background-color: #2c323f;
        }
        .badge-warning {
        background-color: #e6ae30;
        }
      `}
    </CommonHeaderClass>

  );
};

export default BadgeColorCard;