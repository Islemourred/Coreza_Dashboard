import CountdownComponent from "./countdownData";
import { Container } from "reactstrap";
import { WE_ARE_COMING_SOON } from "../../../Constant";
import { H5, Image } from "../../../AbstractElements";
import {dynamicImage} from "../../../Services/index"
const ComingsoonVideo = () => {
  return (
      <div className="page-wrapper compact-wrapper">
        <Container fluid={true} className="p-0">
          <div className="comingsoon auth-bg-video">
            <video className="bgvideo-comingsoon"
              id="bgvid"
              poster={dynamicImage('other-images/coming-soon-bg.jpg')}
              playsInline=""
              autoPlay={true}
              muted=""
              loop=""
            >
              <source src={require("../../../assets/video/auth-bg.mp4")} type="video/mp4" />
            </video>
            <div className="comingsoon-inner text-center">
               <Image attrImage={{ src: dynamicImage('logo/logo2.png'), alt: '' }} /> 
              <H5>{WE_ARE_COMING_SOON}</H5>
              <div className="countdown" id="clockdiv">
                <CountdownComponent />
              </div>
            </div>
          </div>
        </Container>
      </div>
  );
};

export default ComingsoonVideo;
