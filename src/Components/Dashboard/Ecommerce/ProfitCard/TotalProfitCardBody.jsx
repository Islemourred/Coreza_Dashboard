import { CardBody } from "reactstrap";
import RightSideIcon from "./RightSideIcon";
import ProfitWrapper from "./ProfitWrapper";

const TotalProfitCardBody = () => {
  return (
    <CardBody>
      <ProfitWrapper />
      <RightSideIcon />
    </CardBody>
  );
};

export default TotalProfitCardBody;
