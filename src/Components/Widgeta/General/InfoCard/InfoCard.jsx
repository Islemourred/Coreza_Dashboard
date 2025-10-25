import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { H3, H5, P } from '../../../../AbstractElements'

const InfoCard = () => {
  return (
    <Col sm="12" lg="6" xl="4" md="12" className="xl-50 box-col-6">
      <Card className="height-equal">
        <div className="calender-widget">
          <div className="cal-img"></div>
          <div className="cal-date">
            <H5>25<br/>APRIL</H5>
          </div>
          <CardBody className="cal-desc text-center ">
            <H3>I must explain to you how? </H3>
            <P attrPara={{className:"mb-0"}} >We are excited about continuing to build a complete ecosystem around value commerce, where we can serve Bharat consumers wherever they are on their shopping journey. Our mission is to become India’s value lifestyle omni-channel leader.</P>
          </CardBody>
        </div>
      </Card>
    </Col>
  )
}

export default InfoCard