import React from 'react';
import { Margins } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const MarginCard = () => {
  return (
    <CommonHeaderClass title={Margins}>{`
      .m-0 {
      margin: 0px !important;
      }
      .m-5 {
      margin: 5px !important;
      }
      .m-10 {
      margin: 10px !important;
      }
      .m-15 {
      margin: 15px !important;
      }
      .m-20 {
      margin: 20px !important;
      }
      .m-25 {
      margin: 25px !important;
      }
      .m-30 {
      margin: 30px !important;
      }
      .m-35 {
      margin: 35px !important;
      }
      .m-40 {
      margin: 40px !important;
      }
      .m-45 {
      margin: 45px !important;
      }
      .m-50 {
      margin: 50px !important;
      }
  `}</CommonHeaderClass>

  );
};

export default MarginCard;