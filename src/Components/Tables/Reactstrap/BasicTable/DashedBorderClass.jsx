import {DashedBorder,DashedBorderSpanText,Hours,Trainer,classname,type,} from "../../../../Constant";
import { Col, Card, Table, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { DashedBorderData } from "../../../../Data/Table/ReactStrapData";
import { Spot } from "../../../../Constant";

const DashedBorderClass = () => {

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={DashedBorder} span={DashedBorderSpanText} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive theme-scrollbar">
              <Table className="table-dashed">
                <thead>
                  <tr className="dashed">
                    <th scope="col">{"#"}</th>
                    <th scope="col">{classname}</th>
                    <th scope="col">{type}</th>
                    <th scope="col">{Hours}</th>
                    <th scope="col">{Trainer}</th>
                    <th scope="col">{Spot}</th>
                  </tr>
                </thead>
                <tbody>
                  {DashedBorderData.map((item, index) => (
                    <tr className="dashed" key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.classname}</td>
                      <td>{item.type}</td>
                      <td>{item.hours}</td>
                      <td>{item.trainer}</td>
                      <td>{item.spots}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default DashedBorderClass;