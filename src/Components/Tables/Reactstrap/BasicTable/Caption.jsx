import { Age, Caption, CaptionspanText, ContactNo, Email, EmployeeName, Experience, Id, Listofusers, Sex } from '../../../../Constant';
import { Col, Card,  Table, Row } from 'reactstrap';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { Captiontabledata } from '../../../../Data/Table/ReactStrapData';

const CaptionClass = () => {
  return (
      <Col sm="12">
        <Card>
          <HeadingCommon Heading={Caption} span={CaptionspanText} />
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
              <div className="table-responsive theme-scrollbar">
              <Table>
                  <caption>{Listofusers}</caption>
                  <thead>
                    <tr>
                      <th scope='col'>{Id}</th>
                      <th scope='col'>{EmployeeName}</th>
                      <th scope='col'>{Email}</th>
                      <th scope='col'>{Experience}</th>
                      <th scope='col'>{Sex}</th>
                      <th scope='col'>{ContactNo}</th>
                      <th scope='col'>{Age}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Captiontabledata.map((item) => (
                      <tr key={item.id}>
                        <th>{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.exp}</td>
                        <td>{item.sex}</td>
                        <td>{item.contact}</td>
                        <td>{item.age}</td>
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

export default CaptionClass;