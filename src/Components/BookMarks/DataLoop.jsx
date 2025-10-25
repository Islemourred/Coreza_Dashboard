import React, { Fragment, useContext } from 'react';
import { Row, Card, Col } from 'reactstrap';
import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather';
import SweetAlert from 'sweetalert2';
import BookmarkContext from '../../Helper/bookmark';
import { H6, LI, P, UL, Image } from '../../AbstractElements';
import NoBookmark from './NoBookmark';

const DataLoop = () => {
  const { bookmark, mybookmark, removebookmark, removemybookmark, setEditrow, setEditImgUrl, editModal, seteditModal } = useContext(BookmarkContext);
  const editToggle = () => {
    seteditModal(!editModal);
  };
  const addToFavourites = (data) => {
    if (data.fillstar === false) {
      data.fillstar = true;
      mybookmark(data);
    } else {
      removemybookmark(data.id);
      data.fillstar = false;
    }
  };
  const OnHandleClick = (data) => {
    editToggle();
    setEditrow(data);
    setEditImgUrl(require(`../../assets/images/${data.image}`));
  };
  const Removefrombookmark = (bookmarkId, fillstar) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        if (fillstar) removemybookmark(bookmarkId);
        removebookmark(bookmarkId);
        SweetAlert.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else {
        SweetAlert.fire('Your imaginary file is safe!');
      }
    });
  };
  var images = require.context('../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Row id="bookmarkData">
        {bookmark.length > 0 ? (
          bookmark.map((data) => {
            return (
              <Col xxl="3" xl="4" lg="3" sm="6" md="4" className='box-col-4' key={data.id}>
                <Card className="bookmark-card o-hidden">
                  <div className="details-website">
                    <Image attrImage={{
                      className: 'img-fluid', src: `${dynamicImage(data.image)}`, alt: ''
                    }} />
                    <div className={`favourite-icon favourite_0 ${data.fillstar ? 'favourite' : ''}`} onClick={(e) => addToFavourites(data)}  >
                      <a href="#javascript"><i className="fa fa-star"></i></a> </div>
                    <div className="desciption-data">
                      <div className="title-bookmark">
                        <H6 attrH6={{ className: 'title_0' }}>{data.title} </H6>
                        <P attrPara={{ className: 'weburl_0' }}> {data.website_url} </P>
                        <div className="hover-block">
                          <UL attrUL={{ className: 'simple-list' }}>
                            <LI><a href="#javascript" onClick={() => OnHandleClick(data)}><Edit2 /></a></LI>
                            <LI><a href="#javascript"> <Link /></a></LI>
                            <LI><a href="#javascript"><Share2 /> </a></LI>
                            <LI><a href="#javascript" onClick={() => Removefrombookmark(data.id, data.fillstar)}><Trash2 /></a></LI>
                            <LI className="pull-right text-end"><a href="#javascript"><Tag /></a></LI>
                          </UL>
                        </div>
                        <div className="content-general">
                          <P attrPara={{ className: 'desc_0' }}>{data.desc}</P>
                          <span className="collection_0">{data.colection}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })
        ) : (<NoBookmark />)}
      </Row>
    </Fragment>
  );
};
export default DataLoop;