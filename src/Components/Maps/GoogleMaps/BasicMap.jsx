import { Card, Col, CardBody } from 'reactstrap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { BasicDemo } from '../../../Constant';
import HeadingCommon from "../../../Common/Component/HeadingCommon"
const containerStyle = {
    height: '500px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const BasicMapComp = () => {

    return (
            <Col lg="6" md="12">
                <Card>
                    <HeadingCommon Heading={BasicDemo}/>
                    <CardBody>
                        <div className="map-js-height">
                            <div id="gmap-simple" className="map-block">
                                <LoadScript
                                    googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places"
                                >
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}
                                    >
                                    </GoogleMap>
                                </LoadScript>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
    );
};

export default BasicMapComp;