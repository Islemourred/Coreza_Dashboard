import { FirstName, Id, LastName, TableHeadOptions, TableHeadOptionsSpanText, Username } from '../../../../Constant';
import { Row, Col, Card,  Table } from 'reactstrap';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { Captiontabledata } from '../../../../Data/Table/ReactStrapData';

const TableHeadOptionsClass = () => {
  return (
    <Col sm="6">
      <Card>
        <HeadingCommon Heading={TableHeadOptions}  span={TableHeadOptionsSpanText} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive theme-scrollbar">
            <Table>
                  <thead className='table-dark'>
                    <tr>
                      <th scope='col'>{Id}</th>
                      <th scope='col'>{FirstName}</th>
                      <th scope='col'>{LastName}</th>
                      <th scope='col'>{Username}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Captiontabledata.slice(0, 3).map((item) => (
                      <tr key={item.id}>
                        <th scope='row'>{item.id}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.userName}</td>
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

export default TableHeadOptionsClass;