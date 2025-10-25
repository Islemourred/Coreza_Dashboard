import { Col, Row } from 'reactstrap';
import { Btn, H2, Image, LI, UL } from '../../../AbstractElements';
import vidImage from '../../../assets/images/other-images/caller.jpg';
import { dynamicImage } from '../../../Services';
import {Href} from "../../../Constant"
const VideoHistory = () => {
    return (
        <div className="chat-history">
          <Row>
            <Col className="text-center pe-0 call-content">
              <div>
                <div className="total-time">
                  <H2>36 : 56</H2>
                </div>
                <div className="call-icons">
                  <UL attrUL={{ className: 'simple-list list-inline d-flex flex-row' }}>
                    <LI attrLI={{ className: 'list-inline-item' }}>
                      <a href={Href}><i className='icon-video-camera'></i></a>
                    </LI>
                    <LI attrLI={{ className: 'list-inline-item' }}>
                      <a href={Href}><i className='icon-volume'></i></a>
                    </LI>
                    <LI attrLI={{ className: 'list-inline-item' }}>
                      <a href={Href}><i className='icon-user'></i></a>
                    </LI>
                  </UL>
                </div>
                <Btn attrBtn={{ color: 'success', className: 'btn-lg' }}>END CALL</Btn>
                <div className="receiver-img">
                  <Image attrImage={{ src: dynamicImage("other-images/receiver-img.jpg"), alt: '' }} />
                </div>
              </div>
            </Col>
            <Col sm="6" className="caller-img-sec">
              <div className="caller-img" style={{ backgroundImage: `url(${vidImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
                <Image attrImage={{ className: 'img-fluid bg-img-cover d-none', src: dynamicImage("other-images/caller.jpg"), alt: '' }} />
              </div>
            </Col>
          </Row>
        </div>
    );
};
export default VideoHistory;