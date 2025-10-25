import { Row, Col, Card, CardBody } from 'reactstrap';
import { Profit, Loss, } from '../../Constant';
import { TickitData } from '../../Data/SupportTicket';
import { H4, H6, LI, UL } from '../../AbstractElements';

const TicketList = () => {
  return (
      <Row>
        {
          TickitData.map((item) => {
            return (
              <Col xl="4" sm="6" key={item.id}>
                <Card className="ecommerce-widget pro-gress">
                  <CardBody className="support-ticket-font">
                    <Row>
                      <Col xs="5">
                        <H6>{item.title}</H6>
                        <H4 attrH4={{ className: 'total-num counter' }}> {item.num}
                        </H4>
                      </Col>
                      <Col xs="7">
                        <div className="text-md-end">
                          <UL attrUL={{ className: 'simple-list' }}>
                            <LI>{Profit}
                              <span className="product-order txt-primary ms-2">{'8989'}
                                <i className="icon-angle-up f-12"></i>
                              </span>
                            </LI>
                            <LI>{Loss}
                              <span className="product-order txt-danger ms-2">{'2560'}
                                <i className="icon-angle-down f-12"></i>
                              </span>
                            </LI>
                          </UL>
                        </div>
                      </Col>
                    </Row>
                    <div className="progress-showcase">
                      <div className="progress">
                        <div className={item.class} role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })
        }
      </Row>
  );
};
export default TicketList;