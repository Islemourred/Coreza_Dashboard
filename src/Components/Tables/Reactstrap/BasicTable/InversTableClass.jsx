import { Company, Country, CreditVolume, Email, FirstName, Id, InverseTablePrimaryBackground, InverseTablePrimaryBackgroundSpan, LastName, Role } from '../../../../Constant';
import { Col, Card,  Table } from 'reactstrap';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { Inversetabaledata } from '../../../../Data/Table/ReactStrapData';

const InversePrimaryClass = () => {

  return (
      <Col sm="12">
        <Card>
          <HeadingCommon Heading={InverseTablePrimaryBackground} span={InverseTablePrimaryBackgroundSpan} />
          <div className="table-responsive theme-scrollbar">
          <Table striped className='bg-primary'>
              <thead>
                <tr>
                  <th scope='col'>{Id}</th>
                  <th scope='col'>{FirstName}</th>
                  <th scope='col'>{LastName}</th>
                  <th scope='col'>{Company}</th>
                  <th scope='col'>{CreditVolume}</th>
                  <th scope='col'>{Email}</th>
                  <th scope='col'>{Role}</th>
                  <th scope='col'>{Country}</th>
                </tr>
              </thead>
              <tbody>
                {Inversetabaledata.map((item) => (
                  <tr key={item.id}>
                    <th scope='row'>{item.id}</th>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.company}</td>
                    <td>{item.credit}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.country}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
  );
};

export default InversePrimaryClass;