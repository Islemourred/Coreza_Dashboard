import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { H4, P } from "../../../AbstractElements";
import { ArticalsData } from "../../../Data/KnowledegesBase";

const Articals = () => {
  return (
    <Fragment>
      {ArticalsData.map((item,i) => (
        <Col xl="4" className={`${item.class ? "box-col-12" : "col-md-6 box-col-6"}`} key={i}
        >
          <Card className="bg-primary">
            <CardBody>
              <div className="faq-widgets d-flex">
                <div className="flex-grow-1">
                  <H4>{item.title}</H4>
                  <P>{item.para}</P>
                </div>
                {item.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default Articals;
