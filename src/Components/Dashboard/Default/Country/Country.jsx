import { Card, CardBody,  Col } from "reactstrap";
import { Map } from "pigeon-maps";
import CountryCardHeader from "./CountryCardHeader";
const CountryCard = () => {
  return (
    <Col md='6' xl='4'  className="box-col-30 xl-30">
      <Card className="use-country">
        <CountryCardHeader/>
        <CardBody>
          <Map height={300} defaultCenter={[45.879, 4.6997]} defaultZoom={11}></Map>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CountryCard;
