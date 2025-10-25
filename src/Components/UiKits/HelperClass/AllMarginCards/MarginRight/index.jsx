import React from 'react';
import { MarginRight } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const MarginRightCard = () => {
  return (
    <CommonHeaderClass title={MarginRight}>{`
        .m-r-0 {
        margin-right: 0px;
        }
        .m-r-5 {
        margin-right: 5px;
        }
        .m-r-10 {
        margin-right: 10px;
        }
        .m-r-15 {
        margin-right: 15px;
        }
        .m-r-20 {
        margin-right: 20px;
        }
        .m-r-25 {
        margin-right: 25px;
        }
        .m-r-30 {
        margin-right: 30px;
        }
        .m-r-35 {
        margin-right: 35px;
        }
        .m-r-40 {
        margin-right: 40px;
        }
        .m-r-45 {
        margin-right: 45px;
        }
        .m-r-50 {
        margin-right: 50px;
        }
      `}
    </CommonHeaderClass>

  );
};

export default MarginRightCard;