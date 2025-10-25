import { Card, CardBody, Col, Table } from "reactstrap";
import { P } from "../../../../AbstractElements";
import { GridOptions, GridOptionsParagraph, GridOptionsSpan} from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import GridOptionsthead from "./GridOptionsthead";
import GridOptionstbody from "./GridOptionstbody";

const GridOptionsCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={GridOptions} span={GridOptionsSpan} CardHeaderClassName="pb-0" />
        <CardBody>
          <P>{GridOptionsParagraph}</P>
          <div className="table-responsive theme-scrollbar">
            <Table bordered striped>
              <GridOptionsthead />
              <GridOptionstbody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptionsCard;