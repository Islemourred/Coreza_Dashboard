import React, { Fragment, useContext } from 'react';
import { Btn, LI } from '../../../../AbstractElements';
import { Back } from '../../../../Constant';
import BookmarkContext from '../../../../Helper/bookmark';

const BackBtns = () => {
  const { bookMarkClass,setBookMarkClass } = useContext(BookmarkContext);

    const backtobookmark = () => {
        setBookMarkClass(!bookMarkClass)
    };
    return (
        <Fragment>
            <LI>
                <Btn attrBtn={{ color: 'white', className: 'd-block flip-back font-primary p-0', onClick: backtobookmark }}>{Back}</Btn>
            </LI>
        </Fragment>
    );
};
export default BackBtns;