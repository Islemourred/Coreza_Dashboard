import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { Btn, LI } from '../../../../AbstractElements';
import { AddNewBookmark } from '../../../../Constant';
import BookmarkContext from '../../../../Helper/bookmark';

const BookmarkList = (props) => {
    const { bookmarkItems = '' } = props;
  const { bookMarkClass,setBookMarkClass } = useContext(BookmarkContext);

    const addnewbookmark = () => {
        setBookMarkClass(!bookMarkClass)
    };

    return (
        <Fragment>
            <Row>
                {bookmarkItems.map((items, index) => {
                    return (
                        <Col xs="4" className="text-center" key={index}>
                            <div className="bookmark-content">
                                <div className="bookmark-icon">
                                    <Link to={items.url}>
                                        {items.icon}
                                    </Link>
                                </div>
                            </div>

                        </Col>
                    );
                })}
            </Row>
            <LI attrLI={{ className: 'text-center pb-0' }}>
                <Btn attrBtn={{ className: 'flip-btn d-block w-100', color: 'primary', onClick: addnewbookmark }}>{AddNewBookmark}</Btn>
            </LI>
        </Fragment>
    );
};
export default BookmarkList;