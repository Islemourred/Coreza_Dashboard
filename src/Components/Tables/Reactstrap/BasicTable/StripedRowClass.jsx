import { StripedRow, StripedRowspanText } from '../../../../Constant';
import TableContext from '../../../../Helper/Table';
import { Col, Card,  Table, Row } from 'reactstrap';
import  {  useContext } from 'react';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const StripedRowClass = () => {
  const { data } = useContext(TableContext);

  return (
      <Col sm="12">
        <Card>
          <HeadingCommon Heading={StripedRow} span={StripedRowspanText} />
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
              <div className="table-responsive theme-scrollbar">
                <Table striped>
                  <thead>
                    <tr>
                      <th scope="col">{'#'}</th>
                      <th scope="col">{'First Name'}</th>
                      <th scope="col">{'Last Name'}</th>
                      <th scope="col">{'Username'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.slice(0, 3).map((item) =>
                        <tr key={item.id}>
                          <th scope="row">{item.id}</th>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.user_name}</td>
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

export default StripedRowClass;