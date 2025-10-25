import { Row, Col, Card, CardBody, CardHeader, Input } from 'reactstrap';
import { Search, MessageCircle, Mail, HelpCircle, Settings, MessageSquare } from 'react-feather';
import { SearchArticles, Navigation, AskOurCommunity, AskQuestion, ContactUs, LatestUpdates, SeeAll, Href } from '../../Constant';
import { H4, LI, P, UL } from '../../AbstractElements';
import { ASKQUESData, LatestData } from '../../Data/FAQ';

const FaqRightsidebae = () => {
  return (
      <Col xl="4" lg="6" md="5" className='box-col-40 xl-40'>
        <Row>
          <Col lg="12">
            <Card className="card-mb-faq xs-mt-search">
              <CardHeader className="faq-header">
                <H4>{SearchArticles}</H4>
                <HelpCircle />
              </CardHeader>
              <CardBody className="faq-body">
                <div className="faq-form">
                  <Input  type="text" placeholder="Search.." />
                  <Search className="search-icon" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="12">
            <Card className="card-mb-faq">
              <CardHeader className="faq-header">
                <H4>{Navigation}</H4><Settings />
              </CardHeader>
              <CardBody className="faq-body">
                <div className="navigation-btn">
                  <a className="btn btn-primary" style={{ color: '#fff' }} href={Href}>
                    <MessageSquare className="m-r-10" />{AskQuestion}
                  </a>
                </div>
                <div className="navigation-option">
                  <UL>
                    {
                      ASKQUESData.map((item,i) => (
                          <LI key={i}>
                            <a href={Href}>{item.icon}{item.title}</a>
                            <span className={item.className}>{item.val}</span>
                          </LI>
                        )
                      )
                    }
                  </UL>
                  <UL>
                    <LI>
                      <a href={Href}>
                        <MessageCircle />{AskOurCommunity}
                      </a></LI>
                    <LI>
                      <a href={Href}>
                        <Mail />{ContactUs}
                      </a></LI>
                  </UL>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="12">
            <Card>
              <CardHeader className="faq-header">
                <H4 attrH4={{ className: 'd-inline-block' }}>{LatestUpdates}</H4>
                <span className="pull-right d-inline-block">{SeeAll}</span>
              </CardHeader>
              <CardBody className="faq-body">
                {
                  LatestData.map((item,i) => 
                     (
                      <div className="updates-faq-main d-flex" key={i}>
                        <div className="updates-faq">{item.Iconclass}</div>
                        <div className="updates-bottom-time flex-grow-1">
                          <P>{item.name}
                            <a href={Href}>{item.val}</a> {item.title}
                          </P>
                          <P>{item.time}</P>
                        </div>
                      </div>
                    )
                  )
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
  );
};
export default FaqRightsidebae;