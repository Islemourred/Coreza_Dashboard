import  { Fragment, useContext, useState } from 'react';
import { Row, Col, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { HelpCircle } from 'react-feather';
import { Btn, H4, H5, P } from '../../AbstractElements';
import FaqRightsidebae from './FaqRightside';
import FaqContext from '../../Helper/Faq';

const Questionss = () => {
  const { faq } = useContext(FaqContext);
  const [isActivity, setIsActivity] = useState([]);
  const para = 'How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.';

  const handelChange = (e) => {
    let collapseCopy = [...isActivity];
    collapseCopy[e] = !collapseCopy[e];
    setIsActivity(collapseCopy);
  };

  return (
      <Col lg="12" >
        <div className="header-faq">
          <H4 attrH4={{ className: 'mb-0' }}>Quick Questions are answered</H4>
        </div>
        <Row className="row default-according style-1 faq-accordion" id="accordionoc">
          <Col xl="8" lg="6" md="7" className='box-col-60 faq-accor xl-60' >
            {faq && faq.map((item, i) =>  (
                <Fragment key={i} >
                  <div className='faq-title'>
                    <H5>{item.subTitle}</H5>
                  </div>
                  {
                    faq[i].titless.map((item) =>  (
                        <Card key={item.id}>
                          <CardHeader>
                            <H5 attrH5={{ className: 'mb-0' }}>
                              <Btn attrBtn={{ color: 'link', onClick: () => handelChange(item.id) }}><HelpCircle />{item.title}</Btn>
                            </H5>
                          </CardHeader>
                          <Collapse isOpen={isActivity[item.id]}>
                            <CardBody>
                              <P attrPara={{className: 'mb-0'}}>{para}</P>
                            </CardBody>
                          </Collapse>
                        </Card>
                      )
                    )
                  }
                </Fragment>
              )
            )
            }
          </Col>
          <FaqRightsidebae />
        </Row>
      </Col >
  );
};
export default Questionss;