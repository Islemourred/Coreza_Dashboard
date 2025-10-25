import React from 'react';
import { Padding } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const PaddingCard = () => {
    return (
        <CommonHeaderClass title={Padding}>{`
        .p-0 {
            padding: 0px;
        } 
        .p-5 {
            padding: 5px;
        }
        .p-10 {
            padding: 10px;
        }
        .p-15 {
            padding: 15px;
        }
        .p-20 {
            padding: 20px;
        }
        .p-25 {
            padding: 25px;
        }
        .p-30 {
            padding: 30px;
        }
        .p-35 {
            padding: 35px;
        }
        .p-40 {
            padding: 40px;
        }
        .p-45 {
            padding: 45px;
        }
        .p-50 {
            padding: 50px;
        }
    `}</CommonHeaderClass>

    );
};

export default PaddingCard;