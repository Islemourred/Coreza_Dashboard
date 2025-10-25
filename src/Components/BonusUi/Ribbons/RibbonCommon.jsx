import React, { Fragment } from "react";
import { Col, Card, CardBody } from "reactstrap";
import { P, Ribbon } from "../../../AbstractElements";
import { RibbonData } from "../../../Data/Bonus-ui";

const RibbonComponent = () => {
  return (
    <Fragment>
      {RibbonData.map((item, index) => (
        <Col key={index} sm="14" md="6" lg="4">
          <Card className={item.wrapperClass}>
            <CardBody>
              <Ribbon attrRibbons={{ className: item.class }}>
                {item.title}
              </Ribbon>
              <P attrPara={{ className: "mb-0" }}>{item.pera}</P>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default RibbonComponent;