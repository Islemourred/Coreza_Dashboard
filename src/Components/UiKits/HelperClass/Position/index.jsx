import React from 'react';
import { Position } from '../../../../Constant';
import CommonHeaderClass from '../Common/CommonHeaderClass2';

const PositionCard = () => {
  return (
    <CommonHeaderClass title={Position}>{`
        .p-static {
        position: static;
        }
        .p-absolute {
        position: absolute;
        }
        .p-fixed {
        position: fixed;
        }
        .p-relative {
        position: relative;
        }
        .p-initial {
        position: initial;
        }
        .p-inherit {
        position: inherit;
        }
`}</CommonHeaderClass>

  );
};

export default PositionCard;