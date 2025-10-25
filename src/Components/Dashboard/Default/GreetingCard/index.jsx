import  {  useState, useEffect } from "react";
import SunIcon from "./SunIcon";
import ClockIcon from "./ClockIcon";
import ProfileVector from "./ProfileVector";
import { H4 } from "../../../../AbstractElements";
import { Card, CardBody, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { John, TaskIsPending, WelcomeBack, Your } from "../../../../Constant";

const Greetingcard = () => {
  const today = new Date();
  const curHr = today.getHours();
  const curMi = today.getMinutes();
  const [meridiem, setMeridiem] = useState("AM");

  useEffect(() => {
    if (curHr >= 12) {
      setMeridiem("PM");
    } else {
      setMeridiem("AM");
    }
  }, []);
  return (
      <Col xxl='6' xl='5' lg="6" className="dash-45 box-col-40">
        <Card className="profile-greeting">
          <CardBody>
            <div className="d-sm-flex d-block justify-content-between">
              <SunIcon />
              <ClockIcon curHr={curHr} curMi={curMi} meridiem={meridiem} />
            </div>
            <div className="greeting-user">
              <ProfileVector />
              <H4>
              <Link to={`${process.env.PUBLIC_URL}/users/userProfile`}>
                  <span>{WelcomeBack}</span> {John}{" "}
                </Link>
                <span className="right-circle">
                  <i className="fa fa-check-circle font-primary f-14 middle"></i>
                </span>
              </H4>
              <div>
                <span className="badge badge-primary">{Your}</span>
                <span className="font-primary f-12 middle f-w-500 ms-2"> {TaskIsPending}</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default Greetingcard;
