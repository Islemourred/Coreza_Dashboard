import React from 'react';
import { PaddingRight } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const PaddingRightCard = () => {
  return (
    <CommonHeaderClass title={PaddingRight}>{`
        .p-r-0 {
        padding-right: 0px;
        }
        .p-r-5 {
        padding-right: 5px;
        }
        .p-r-10 {
        padding-right: 10px;
        }
        .p-r-15 {
        padding-right: 15px;
        }
        .p-r-20 {
        padding-right: 20px;
        }
        .p-r-25 {
        padding-right: 25px;
        }
        .p-r-30 {
        padding-right: 30px;
        }
        .p-r-35 {
        padding-right: 35px;
        }
        .p-r-40 {
        padding-right: 40px;
        }
        .p-r-45 {
        padding-right: 45px;
        }
        .p-r-50 {
        padding-right: 50px;
        }
      `}
    </CommonHeaderClass>

  );
};

export default PaddingRightCard;