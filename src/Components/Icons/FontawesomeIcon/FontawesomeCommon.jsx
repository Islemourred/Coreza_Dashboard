import { H4 } from "../../../AbstractElements";
import { Icons } from "../../../Constant";
import React, { Fragment } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const FontawesomeCommon = ({ iconType, title, parentCallback }) => {
  const getItag = (tag) => {
    parentCallback(tag);
  };

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H4 attrH4={{ className: "m-b-0" }}>
              <span>{title}</span> {Icons}
            </H4>
          </CardHeader>
          <CardBody>
            <Row className="icon-lists">
              {iconType.map((icon, i) => (
                <Col sm="6" md="4" xl="3" key={i} onClick={(e) => getItag(icon)}>
                  <i className={`fa fa-${icon}`}></i> {"fa fa-"}
                  {icon}
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default FontawesomeCommon;
