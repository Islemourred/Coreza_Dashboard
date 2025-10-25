import React from 'react';
import { TextColor } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass';

const TextColorCard = () => {
  return (
    <CommonHeaderClass title={TextColor}>{`
        .font-primary {
        color: #5c61f2 !important;
        }
        .font-secondary {
        color: #eeb82f !important;
        }
        .font-success {
        color: #61ae41 !important;
        }
        .font-danger {
        color: #f81f58 !important;
        }
        .font-info {
        color: #4faad5 !important;
        }
        .font-light {
        color: #f4f4f4 !important;
        }
        .font-dark {
        color: #2c323f !important;
        }
        .font-warning {
        color: #e6ae30 !important;
        }
      `}
    </CommonHeaderClass>

  );
};

export default TextColorCard;