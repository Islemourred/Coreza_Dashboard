import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import {
  Date,
  EmployeeName,
  Hours,
  Id,
  LargeTableSpanText,
  Performance,
  SizingTables,
  Status,
} from "../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import { SizingTablesData } from "../../../../Data/Table/ReactStrapData";

const LargeTableClass = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon
          Heading={SizingTables}
          span={LargeTableSpanText}
          CardHeaderClassName="pb-0"
        />
        <div className="table-responsive theme-scrollbar">
          <Table size="lg">
            <thead>
              <tr>
                <th scope="col">{Id}</th>
                <th scope="col">{EmployeeName}</th>
                <th scope="col">{Date}</th>
                <th scope="col">{Status}</th>
                <th scope="col">{Hours}</th>
                <th scope="col">{Performance}</th>
              </tr>
            </thead>
            <tbody>
              {SizingTablesData.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.employeeName}</td>
                  <td>{data.date}</td>
                  <td className={data.statusClass}>{data.status}</td>
                  <td>{data.hours}</td>
                  <td>{data.performance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};
export default LargeTableClass;
