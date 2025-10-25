import  { Fragment } from 'react';
import { Image, P } from '../../AbstractElements';
import { Href, IssaBell, MoreComments, MoreCommnets } from '../../Constant';
import { dynamicImage } from '../../Services';

const MoreCommentss = () => {
    return (
        <Fragment>
            <div className="your-msg">
                <div className='d-flex align-items-start'>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: dynamicImage("user/1.jpg") }} />
                    <div className="flex-grow-1">
                        <span className="f-w-600">{IssaBell}
                            <span>1 Year Ago
                                <i className="fa fa-reply font-primary ps-1"></i>
                            </span>
                        </span>
                        <P>{MoreComments}</P>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a className="f-w-600" href={Href}>{MoreCommnets}</a>
            </div>
        </Fragment>
    );
};
export default MoreCommentss;