import { Budget, CustomHoverClassSpanText, CustomTableColorHoverStripped, DomesticGross, FilmTitle, Id, Released, Studio } from "../../../../Constant";
import { Row, Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { CustomTableData } from "../../../../Data/Table/ReactStrapData";

const CustomHoverClass = () => {

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={CustomTableColorHoverStripped} span={CustomHoverClassSpanText}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive theme-scrollbar">
              <Table hover striped className="table-striped bg-info hover">
                <thead className="tbl-strip-thad-bdr">
                  <tr>
                    <th scope="col">{Id}</th>
                    <th scope="col">{FilmTitle}</th>
                    <th scope="col">{Released}</th>
                    <th scope="col">{Studio}</th>
                    <th scope="col">{Budget}</th>
                    <th scope="col">{DomesticGross}</th>
                  </tr>
                </thead>
                <tbody>
                  {CustomTableData.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{item.filmTitle}</td>
                      <td>{item.released}</td>
                      <td>{item.studio}</td>
                      <td>{item.budget}</td>
                      <td>{item.domesticGross}</td>
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

export default CustomHoverClass;