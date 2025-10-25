import  { Fragment, useContext } from "react";
import Slider from "react-slick";
import { H6,  LI } from "../../../../AbstractElements";
import CustomContext from "../../../../Helper/Customizer";

const DefaultLayout = () => {
    const { addSidebarSettings } = useContext(CustomContext);
    const handleSttings = (sidebar_Settings) => {
        addSidebarSettings(sidebar_Settings);
    };
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <Fragment>
            <Slider {...settings}>
                <LI attrLI={{ dataattr: 'defaul-layout' }} >
                    <div className="layout-img text-center" onClick={() => handleSttings()}>
                        <H6 attrH6={{ className: "title-wrraper pt-2" }}>Default layout</H6>
                    </div>
                </LI>
                <LI attrLI={{ dataattr: 'compact-layout' }} >
                    <div className="layout-img text-center" onClick={() => handleSttings('compact-sidebar')}>
                        <H6 attrH6={{ className: "title-wrraper pt-2" }}>Compact layout</H6>
                    </div>
                </LI>
                <LI attrLI={{ dataattr: 'modern-layout' }}>
                    <div className="layout-img text-center" onClick={() => handleSttings('material-type')}>
                        <H6 attrH6={{ className: "title-wrraper pt-2" }}>Modern layout</H6>
                    </div>
                </LI>
            </Slider>
        </Fragment>
    )
}
export default DefaultLayout