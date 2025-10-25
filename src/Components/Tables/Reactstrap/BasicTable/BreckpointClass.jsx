import { BreckpointSpecific, BreckpointSpecificSpan, Id, Name, Price, Quantity, Total, orderId } from '../../../../Constant';
import { Col, Card, Table,  Row } from 'reactstrap';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { BreckpointSpecificData } from '../../../../Data/Table/ReactStrapData';

const BreckpointClass = () => {

  return (
      <Col sm="12">
        <Card>
          <HeadingCommon Heading={BreckpointSpecific} CardHeaderClassName="pb-0" span={BreckpointSpecificSpan} />
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
              <div className="table-responsive theme-scrollbar">
                <Table className="table-responsive-sm">
                  <thead>
                    <tr>
                      <th>{Id}</th>
                      <th>{Name}</th>
                      <th>{orderId}</th>
                      <th>{Price}</th>
                      <th>{Quantity}</th>
                      <th>{Total}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      BreckpointSpecificData.map((item,index) =>
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
                          <td>{item.name}</td>
                          <td>{item.orderId}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>{item.total}</td>
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

export default BreckpointClass;