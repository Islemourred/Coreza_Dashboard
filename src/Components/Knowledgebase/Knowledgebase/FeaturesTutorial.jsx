import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import LearningContext from '../../../Helper/Leatning';
import React, {  useContext } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap';
import {dynamicImage} from "../../../Services/index"
const FeaturesTutorial = () => {
  const { learningData } = useContext(LearningContext);
  const history = useNavigate();
  const clickApply = () => {
    history(`${process.env.PUBLIC_URL}/knowledgebase/KnowledgeDetailContain`);
  };

  return (
      <Row>
        {
          learningData && learningData.slice(0, 8).map((item, i) =>  (
              <Col xxl="3" xl="4" sm="6" className='box-col-3' key={i}>
                <Card className="features-faq product-box">
                  <div className="faq-image product-img">
                    <Image attrImage={{ className: 'img-fluid', src: dynamicImage(item.img), alt: '' }} />
                    <div className="product-hover">
                      <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                        <LI>
                          <Link to={"/knowledgebase/KnowledgeDetailContain"}><i className="icon-link" onClick={clickApply}></i></Link>
                        </LI>
                        <LI>
                          <Link to={"/knowledgebase/KnowledgeDetailContain"}><i className="icon-import"></i></Link>
                        </LI>
                      </UL>
                    </div>
                  </div>
                  <CardBody>
                    <Link to={"/knowledgebase/KnowledgeDetailContain"}>
                      <H6>{item.title}</H6>
                    </Link>
                    <P attrPara={{ className: 'mb-0'}}>{item.short_description}</P>
                  </CardBody>
                  <CardFooter>
                    <span>{item.date}</span>
                    <span className="pull-right">
                      <i className="fa fa-star font-primary"></i>
                      <i className="fa fa-star font-primary"></i>
                      <i className="fa fa-star font-primary"></i>
                      <i className="fa fa-star font-primary"></i>
                      <i className="fa fa-star font-primary"></i>
                    </span>
                  </CardFooter>
                </Card>
              </Col>
            )
          )
        }
      </Row>
  );
};
export default FeaturesTutorial;