import { Col, Card, CardBody } from "reactstrap";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import { Polygons } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const containerStyle = {
  height: "500px",
};
const center = {
  lat: -3.745,
  lng: -38.523,
};

const PolygonsComp = () => {
  const polygontriangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];
  return (
      <Col lg="6" md="12">
        <Card>
          <HeadingCommon Heading={Polygons} />
          <CardBody>
            <div className="map-js-height">
              <div id="gmap-simple" className="map-block">
                <LoadScript googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  >
                    <Polygon
                      paths={polygontriangleCoords}
                      strokeColor="#FF0000"
                      strokeOpacity={0.8}
                      strokeWeight={2}
                      fillColor="#FF0000"
                      fillOpacity={0.35}
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
export default PolygonsComp;
