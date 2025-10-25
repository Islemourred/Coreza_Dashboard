import { Input } from 'reactstrap';
import { Image } from '../../AbstractElements';
import { dynamicImage } from '../../Services';

const ApplyComments = () => {
    return (
            <div className="comments-box">
                <div className="d-flex align-items-center">
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: dynamicImage("user/1.jpg") }} /><div className="flex-grow-1">
                        <div className="input-group text-box">
                            <Input className="input-txt-bx" type="text" name="message-to-send" placeholder="Post Your comments" />
                            <div className="input-group-text">
                                <Image attrImage={{ src: dynamicImage("smiley.png"), alt: '', }} /></div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default ApplyComments;