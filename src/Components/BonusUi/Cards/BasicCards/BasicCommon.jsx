import React, { Fragment } from "react";
import { BasicCardData } from "../../../../Data/Bonus-ui";
import { Col, Card, CardBody, CardFooter } from "reactstrap";
import { H6, P } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";

const BasicCommon = () => {
  return (
    <Fragment>
      {BasicCardData.map((item, i) => (
        <Col sm={item.sm ? item.sm : 12} xl={item.xl ? item.xl : 6} key={i}>
          <Card>
            <HeadingCommon Heading={`${item.title}`} CardHeaderClassName={item.cardHeaderClassName ? item.cardHeaderClassName : ""} span={item.headingSpan && item.headingSpan}/>
            <CardBody className={item.colorClass? item.colorClass: item.bodyClass? item.bodyClass: ""}>
              <P attrPara={{ className: "mb-0" }}>{item.paragraphText}</P>
            </CardBody>
            {item.footer && (
              <CardFooter className={item.colorClass? item.colorClass: item.footerClass ? item.footerClass:""}>
                <H6 attrH6={{ className: "mb-0" }}>{item.footer}</H6>
              </CardFooter>
            )}
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default BasicCommon;
