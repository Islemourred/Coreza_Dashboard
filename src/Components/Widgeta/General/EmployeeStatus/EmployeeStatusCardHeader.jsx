import { CardHeader } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { Employee_Status } from "../../../../Constant";

const EmployeeStatusCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex">
        <div className="flex-grow-1">
          <H4>{Employee_Status}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default EmployeeStatusCardHeader;