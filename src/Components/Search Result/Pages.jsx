import React, { Fragment } from 'react';
import { LI, UL } from '../../AbstractElements';
import { Next, Previous } from '../../Constant';

const PagesSort = () => {
  return (
    <Fragment>
      <div className="info-block m-t-30">
        <nav aria-label="...">
          <UL attrUL={{ className: 'simple-list pagination pagination-primary d-flex flex-row' }}>
            <LI attrLI={{ className: 'page-item disabled' }}>
              <a className="page-link" href="#javascript" tabIndex="-1">{Previous}</a>
            </LI>
            <LI attrLI={{ className: 'page-item' }}>
              <a className="page-link" href="#javascript">1</a>
            </LI>
            <LI attrLI={{ className: 'page-item active' }}>
              <a className="page-link" href="#javascript">2
                <span className="sr-only">(current)</span>
              </a>
            </LI>
            <LI attrLI={{ className: 'page-item' }}>
              <a className="page-link" href="#javascript">3</a>
            </LI>
            <LI attrLI={{ className: 'page-item' }}>
              <a className="page-link" href="#javascript">{Next}</a>
            </LI>
          </UL>
        </nav>
      </div>
    </Fragment>
  );
};
export default PagesSort;