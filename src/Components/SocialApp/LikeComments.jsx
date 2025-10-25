import  { Fragment } from 'react';
import { P } from '../../AbstractElements';
import { SocialDesc } from '../../Constant';

const LikeComments = () => {
    return (
        <Fragment>
            <P>{SocialDesc}</P>
            <div className="like-content">
                <span>
                    <i className="fa fa-heart font-danger"></i>
                </span>
                <span className="pull-right comment-number">
                    <span>20 </span>
                    <span>
                        <i className="fa fa-share-alt me-0"></i>
                    </span>
                </span>
                <span className="pull-right comment-number">
                    <span>10 </span>
                    <span>
                        <i className="fa fa-comments-o"></i>
                    </span>
                </span>
            </div>
        </Fragment>
    );
};
export default LikeComments;