import React from 'react';
import { FontStyle } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass2';

const FontStyleCard = () => {
  return (
    <CommonHeaderClass title={FontStyle}>{`
        .f-s-normal {
        font-style: normal;
        }
        .f-s-italic {
        font-style: italic;
        }
        .f-s-oblique {
        font-style: oblique;
        }
        .f-s-initial {
        font-style: initial;
        }
        .f-s-inherit {
        font-style: inherit;
        }
    `}
    </CommonHeaderClass>
  );
};

export default FontStyleCard;