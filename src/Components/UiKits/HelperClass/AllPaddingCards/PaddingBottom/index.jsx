import React from 'react';
import { PaddingBottom } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const PaddingBottomCard = () => {
  return (
    <CommonHeaderClass title={PaddingBottom}>{`
        .p-b-0 {
        padding-bottom: 0px !important;
        }
        .p-b-5 {
        padding-bottom: 5px !important;
        }
        .p-b-10 {
        padding-bottom: 10px !important;
        }
        .p-b-15 {
        padding-bottom: 15px !important;
        }
        .p-b-20 {
        padding-bottom: 20px !important;
        }
        .p-b-25 {
        padding-bottom: 25px !important;
        }
        .p-b-30 {
        padding-bottom: 30px !important;
        }
        .p-b-35 {
        padding-bottom: 35px !important;
        }
        .p-b-40 {
        padding-bottom: 40px !important;
        }
        .p-b-45 {
        padding-bottom: 45px !important;
        }
        .p-b-50 {
        padding-bottom: 50px !important;
        }
      `}
    </CommonHeaderClass>

  );
};

export default PaddingBottomCard;