import React, { Fragment, useContext, useState } from 'react';
import { Row, Card, Col, } from 'reactstrap';
import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather';
import SweetAlert from 'sweetalert2';
import BookmarkContext from '../../Helper/bookmark';
import { H6, LI, P, UL, Image } from '../../AbstractElements';
import NoBookmark from './NoBookmark';

const FavDataLoop = () => {
  const { mybookmarkData, removemybookmark, updatebookmark, setEditrow, setEditImgUrl } = useContext(BookmarkContext);
  const [editModal, seteditModal] = useState(false);
  const Remove_from_favourite = (data) => {
    if (data.fillstar) {
      data.fillstar = false;
      removemybookmark(data.id);
      updatebookmark(data.id, data, data.image);
    }
  };
  const editToggle = () => {
    seteditModal(!editModal);
  };
  const editbookmarkdata = (data) => {
    editToggle();
    setEditrow(data);
    setEditImgUrl(require(`../../assets/images/${data.image}`));
  };
  const Remove_from_my_bookmark = (mybookmarkId) => {
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
        removemybookmark(mybookmarkId);
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
      <Row>
        {mybookmarkData.length > 0 ? (
          mybookmarkData.map((mybookdata) => {
            return (
              <Col xxl="3" xl="4" lg="3" md="4" key={mybookdata.id}>
                <Card className="card-with-border bookmark-card o-hidden">
                  <div className="details-website">
                    <Image attrImage={{
                      className: 'img-fluid', src: `${dynamicImage(mybookdata.image)}`, alt: ''
                    }} />
                    <div className={`favourite-icon favourite_0 ${mybookdata.fillstar ? 'favourite' : ''}`}>
                      <a href="#javascript">
                        <i className="fa fa-star" onClick={() => Remove_from_favourite(mybookdata)} ></i></a>
                    </div>
                    <div className="desciption-data">
                      <div className="title-bookmark"><H6 attrH6={{ className: 'title_0' }}>{mybookdata.title}
                      </H6><P attrPara={{ className: 'weburl_0' }}>{mybookdata.website_url}</P>
                        <div className="hover-block">
                          <UL attrUL={{ className: 'simple-list' }}>
                            <LI><a href="#javascript" onClick={() => editbookmarkdata(
                              mybookdata)}><Edit2 /></a> </LI>
                            <LI><a href="#javascript"> <Link /></a></LI>
                            <LI><a href="#javascript"><Share2 /></a></LI>
                            <LI><a href="#javascript" onClick={() => Remove_from_my_bookmark(mybookdata.id)}><Trash2 /></a>
                            </LI>
                            <LI className="pull-right text-end"><a href="#javascript"><Tag /></a></LI>
                          </UL>
                        </div>
                        <div className="content-general">
                          <P attrPara={{ className: 'desc_0' }}>{mybookdata.desc}</P>
                          <span className="collection_0">{mybookdata.collection}</span>
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
export default FavDataLoop;