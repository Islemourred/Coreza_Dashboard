import { HoverableRows, HoverableRowsSpan, Id, Schedule, Security, SignalName, Stage, Status, TeamLead } from '../../../../Constant';
import { Col, Card,  Table } from 'reactstrap';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { Hovertabledata } from '../../../../Data/Table/ReactStrapData';

const HoverableRowsClass = () => {

  return (
      <Col sm="12">
        <Card>
          <HeadingCommon Heading={HoverableRows} span={HoverableRowsSpan} />
          <div className="table-responsive theme-scrollbar">
          <Table hover={true} className='table-border-horizontal'>
              <thead>
                <tr>
                  <th scope='col'>{Id}</th>
                  <th scope='col'>{Status}</th>
                  <th scope='col'>{SignalName}</th>
                  <th scope='col'>{Security}</th>
                  <th scope='col'>{Stage}</th>
                  <th scope='col'>{Schedule}</th>
                  <th scope='col'>{TeamLead}</th>
                </tr>
              </thead>
              <tbody>
                {Hovertabledata.map((item) => (
                  <tr key={item.id}>
                    <th scope='row'>{item.id}</th>
                    <td>
                      <div className='d-flex align-items-center'>
                        <span className={`${item.bgClass} rounded-100 p-1 me-2 d-flex align-items-center`}>{item.icon}</span>
                        {item.status}
                      </div>
                    </td>
                    <td>{item.signalName}</td>
                    <td>{item.security}</td>
                    <td>{item.stage}</td>
                    <td>{item.schedule}</td>
                    <td>{item.teamLead}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
  );
};

export default HoverableRowsClass;