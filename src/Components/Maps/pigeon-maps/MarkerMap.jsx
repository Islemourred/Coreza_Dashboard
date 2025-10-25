import { Card, CardBody, Col } from "reactstrap";
import { Map, Marker } from "pigeon-maps";
import { MarkerMap, MarkerMapSpan } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const MarkerMapComp = () => {
  return (
    <Col xl="6" md="12">
      <Card>
        <HeadingCommon Heading={MarkerMap} CardHeaderClassName="pb-0" span={MarkerMapSpan}/>
        <CardBody>
          <div className="map-js-height">
            <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
              <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MarkerMapComp;
