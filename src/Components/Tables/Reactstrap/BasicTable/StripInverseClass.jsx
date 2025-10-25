import { Calories, Desert, Fat, Id, Price, StripedRowInverseTable, StripedRowInverseTableSpanText } from '../../../../Constant';
import { Col, Card,  Table, Row } from 'reactstrap';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { StripedRowInverseTableData } from '../../../../Data/Table/ReactStrapData';

const StripeInverseClass = () => {

  return (
      <Col sm="6">
        <Card>
          <HeadingCommon Heading={StripedRowInverseTable} span={StripedRowInverseTableSpanText} />
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
              <div className="table-responsive theme-scrollbar">
                <Table className="table-inverse" striped>
                  <thead>
                    <tr>
                      <th scope="col">{Id}</th>
                      <th scope="col">{Desert}</th>
                      <th scope="col">{Calories}</th>
                      <th scope="col">{Fat}</th>
                      <th scope="col">{Price}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      StripedRowInverseTableData.map((item,index) =>
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
                          <td>{item.desert}</td>
                          <td>{item.calories}</td>
                          <td>{item.fat}</td>
                          <td>{item.price }</td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
  );
};

export default StripeInverseClass;