import { Age, FirstName, InverseTable, InverseTableSpan, JoinDate, LastName, Office, Position, Salary } from "../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { inverse } from "../../../../Data/Table/ReactStrapData";

const InverseTableClass = () => {

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={InverseTable} span={InverseTableSpan} />
        <div className="table-responsive theme-scrollbar">
        <Table className='table-inverse'>
              <thead>
                <tr>
                  <th scope='col'>{'#'}</th>
                  <th scope='col'>{FirstName}</th>
                  <th scope='col'>{LastName}</th>
                  <th scope='col'>{Office}</th>
                  <th scope='col'>{Position}</th>
                  <th scope='col'>{Salary}</th>
                  <th scope='col'>{JoinDate}</th>
                  <th scope='col'>{Age}</th>
                </tr>
              </thead>
              <tbody>
                {inverse.map((item) => (
                  <tr key={item.id}>
                    <th scope='row'>{item.id}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.office}</td>
                    <td>{item.role}</td>
                    <td>{item.salary}</td>
                    <td>{item.join}</td>
                    <td>{item.age}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
        </div>
      </Card>
    </Col>
  );
};

export default InverseTableClass;