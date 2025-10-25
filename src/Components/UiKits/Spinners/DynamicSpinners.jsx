import { Fragment } from "react";
import { Col } from "reactstrap";
import { H6, Spinner } from "../../../AbstractElements";
import { SpinnerData } from "../../../Data/Ui-kits/SpinnerData";

const DynamicSpinners = () => {
  return (
    <Fragment>
      {SpinnerData.map((spinner, i) => (
        <Col md="3" sm="6" key={i}>
          <H6 attrH6={{ className: 'sub-title mb-0 text-center' }}>{spinner.heading}</H6>
          <div className="loader-box">
            <Spinner attrSpinner={{ className: spinner.spinnerClass }} />
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export default DynamicSpinners;