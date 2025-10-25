import React, { Fragment } from "react";
import { Aperture, BookOpen } from "react-feather";
import { Card, CardBody, Col } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import {Knowledgebase,KnowledgebaseSpan,Support,SupportSpan} from "../../../../Constant";

const DynamicDiffrentCard = () => {
  let datas = [{ tittle: Knowledgebase, paragraph: KnowledgebaseSpan, icon: <BookOpen /> },{ tittle: Support, paragraph: SupportSpan, icon: <Aperture /> }];
  return (
    <Fragment>
      {datas.map((data, index) => (
        <Col xl="4" className="xl-100 box-col-12" key={index}>
          <Card className="bg-primary">
            <CardBody>
              <div className="d-flex faq-widgets">
                <div className="flex-grow-1">
                  <H4>{data.tittle}</H4>
                  <P className="mb-0">{data.paragraph}</P>
                </div>
                {data.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default DynamicDiffrentCard;
