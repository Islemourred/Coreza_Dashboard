import React, { Fragment } from 'react';
import { LI, UL } from '../../../AbstractElements';

const ModelIcon = () => {
    return (
        <Fragment>
            <UL attrUL={{ className: 'simple-list rating-pro d-flex flex-row' }}>
                <LI>
                    <i className="fa fa-star font-warning"></i>
                </LI>
                <LI>
                    <i className="fa fa-star font-warning"></i>
                </LI>
                <LI>
                    <i className="fa fa-star font-warning"></i>
                </LI>
                <LI>
                    <i className="fa fa-star font-warning"></i>
                </LI>
                <LI>
                    <i className="fa fa-star font-warning"></i>
                </LI>
            </UL>
        </Fragment>
    );
};
export default ModelIcon;