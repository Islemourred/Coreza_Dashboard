import { Card, CardBody,  Col, Table } from "reactstrap";
import EmployeeStatusCardHeader from "./EmployeeStatusCardHeader";
import {Designation,Experience,Name,SkillLevel,} from "../../../../Constant";
import EmployeeStatusCardTableBody from "./EmployeeStatusCardTableBody";

const EmployeeStatus = () => {
  return (
    <Col xl="6" lg="6">
      <Card className="employee-status">
        <EmployeeStatusCardHeader />
        <CardBody>
          <div className="table-responsive theme-scrollbar">
            <Table className="table-bordernone">
              <thead>
                <tr>
                  <th scope="col">{Name}</th>
                  <th scope="col">{Designation}</th>
                  <th scope="col">{SkillLevel}</th>
                  <th scope="col">{Experience}</th>
                </tr>
              </thead>
              <EmployeeStatusCardTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmployeeStatus;