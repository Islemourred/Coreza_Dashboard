import { Card, CardBody, Col } from 'reactstrap'
import { MessageSvg } from '../../../SvgIcons'
import { H3, H4, H5, H6, LI, UL } from '../../../../AbstractElements'
import { CustomerFeedbackHeading } from '../../../../Constant'

const CustomerFeedback = () => {
  return (
    <Col xxl="3" xl="6" md="6" className="xl-50 box-col-6">
      <Card>
        <CardBody className="widget-feedback card-body">
          <div className="feedback-top text-center">
          <MessageSvg/>
            <H3>{CustomerFeedbackHeading}</H3>
            <H6 className="font-Montserrat f-w-400">385749</H6>
          </div>
          <div id="feedback-chart"></div>
          <UL attrUL={{ className: 'flex-row d-flex' }}>
            <LI attrLI={{className: 'font-Montserrat'}}>
              <H4>Positive</H4>
              <H5 attrH5={{className: 'font-success'}}>90%</H5>
            </LI>
            <LI attrLI={{className: 'font-Montserrat'}}>
              <H4>Negative</H4>
              <H5 attrH5={{className: 'font-danger'}}>10%</H5>
            </LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomerFeedback