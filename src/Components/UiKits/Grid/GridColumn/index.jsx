import { Card, CardBody, Col } from "reactstrap";
import { P } from "../../../../AbstractElements";
import { GridColumn, GridColumnParagraph } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import GridColumnRow from "./GridColumnRow";

const GridColumnCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={GridColumn} CardHeaderClassName="pb-0" />
        <CardBody className="grid-showcase">
          <P>{GridColumnParagraph}</P>
          <GridColumnRow />
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridColumnCard;
