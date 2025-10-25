import { Card, CardBody, Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import { FlushStyle } from "../../../../Constant";
import { FlushStylesData } from "../../../../Data/Ui-kits/List";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";

const FlushStyles = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={FlushStyle} CardHeaderClassName="pb-0" />
        <CardBody>
          <UL attrUL={{ className: "list-group-flush" }}>
            <LI>{"Cras justo odio"}</LI>
            {FlushStylesData.map((data, index) => (<LI key={index}>{data}</LI>))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushStyles;
