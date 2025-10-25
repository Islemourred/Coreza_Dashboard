import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { ContactUsHeading, Email, Href, Message, SEND_IT, YourName } from '../../../../Constant'

const ContactUs = () => {
  return (
    <Col sm="12" lg="6" xl="8" md="12" className="xl-50 box-col-6">
      <Card >
        <CardHeader className="pb-0">
          <div className="d-flex">
            <div className="flex-grow-1">
              <H4>{ContactUsHeading}</H4>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="contact-form">
            <form className="theme-form">
              <div className="form-icon"><i className="icofont icofont-envelope-open"></i></div>
              <div className="mb-3">
                <Label for="exampleInputName">{YourName}</Label>
                <Input id="exampleInputName" type="text" placeholder="John Dio"/>
              </div>
              <div className="mb-3">
                <Label  className="col-form-label" for="exampleInputEmail1">{Email}</Label>
                <Input  id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com"/>
              </div>
              <div className="mb-3">
                <Label className="col-form-label" for="exampleInputEmail1">{Message}</Label>
                <textarea className="form-control textarea" rows="3" cols="50" placeholder="Your Message"></textarea>
              </div>
              <div className="text-sm-end"><a className="btn btn-primary" href={Href}>{SEND_IT}</a></div>
            </form>
          </div>

        </CardBody>
      </Card>
    </Col>
  )
}

export default ContactUs