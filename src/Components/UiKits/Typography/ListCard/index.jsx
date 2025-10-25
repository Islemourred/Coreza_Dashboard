import { Card, CardBody, Col, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import OrderListCol from "./OrderListCol";
import UnorderListCol from "./UnorderListCol";
import OrderListCol2 from "./OrderListCol2";
import FontawesomeListCol from "./FontawesomeListCol";
import ICOIconListCol from "./ICOIconListCol";
import ThemfyListCol from "./ThemfyListCol";
import { ListingTypography } from "../../../../Constant";

const ListCard = () => {
  return (
    <Col sm="12" className="listing">
      <Card>
        <HeadingCommon Heading={ListingTypography} CardHeaderClassName="pb-0" />
        <CardBody>
          <Row>
            <UnorderListCol />
            <OrderListCol />
            <OrderListCol2 />
            <FontawesomeListCol />
            <ICOIconListCol />
            <ThemfyListCol />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListCard;