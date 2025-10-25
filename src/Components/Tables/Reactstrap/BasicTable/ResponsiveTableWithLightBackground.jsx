import { Card,  Col, Row, Table } from "reactstrap";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import {Assign,Date,Email,Id,Phone,Price,Progress,ResponsiveTablesWithLightBackground,ResponsiveTablesWithLightBackgroundSpan,Status,Task,} from "../../../../Constant";
import { ResponsiveTablesWithLightBackgroundData } from "../../../../Data/Table/ReactStrapData";

const ResponsiveTableWithLightBackground = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={ResponsiveTablesWithLightBackground} span={ResponsiveTablesWithLightBackgroundSpan}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive theme-scrollbar">
              <Table className="table-light">
                <thead>
                  <tr>
                    <th scope="col">{Id}</th>
                    <th scope="col">{Task}</th>
                    <th scope="col">{Email}</th>
                    <th scope="col">{Phone}</th>
                    <th scope="col">{Assign}</th>
                    <th scope="col">{Date}</th>
                    <th scope="col">{Price}</th>
                    <th scope="col">{Status}</th>
                    <th scope="col">{Progress}</th>
                  </tr>
                </thead>
                <tbody>
                  {ResponsiveTablesWithLightBackgroundData.map(
                    (data, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.Task}</td>
                        <td>{data.Email}</td>
                        <td>{data.Phone}</td>
                        <td>{data.Assign}</td>
                        <td>{data.Date}</td>
                        <td>{data.Price}</td>
                        <td className={data.StatusClassName}>{data.Status}</td>
                        <td>{data.Progress}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ResponsiveTableWithLightBackground;