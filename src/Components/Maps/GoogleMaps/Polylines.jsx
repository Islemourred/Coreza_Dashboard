import { Polylines } from "../../../Constant";
import { Card, CardBody, Col } from "reactstrap";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const containerStyle = {
  height: "500px",
};
const center = {
  lat: -3.745,
  lng: -38.523,
};

const PolylinesMapComp = () => {
  const polylinetriangleCoords = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];

  return (
    <Col lg="6" md="12">
      <Card>
        <HeadingCommon Heading={Polylines} />
        <CardBody>
          <div className="map-js-height">
            <div id="gmap-simple" className="map-block">
              <LoadScript googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                >
                  <Polyline
                    paths={polylinetriangleCoords}
                    geodesic={true}
                    strokeColor="#FF0000"
                    strokeOpacity={1.0}
                    strokeWeight={2}
                  />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolylinesMapComp;
