import React from "react";
import { FileText } from "react-feather";
import { Card, CardBody, Col } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { Articles, ArticlesSpan } from "../../../../Constant";

const DiffrentCard = () => {
  return (
    <Col xl="4" className="xl-100 box-col-12">
      <Card className="bg-primary">
        <CardBody>
          <div className="d-flex faq-widgets">
            <div className="flex-grow-1">
              <H4>{Articles}</H4>
              <P className="mb-0">{ArticlesSpan}</P>
            </div>
            <FileText />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DiffrentCard;
