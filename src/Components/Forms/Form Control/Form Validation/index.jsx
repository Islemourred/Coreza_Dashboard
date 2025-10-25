import { H4, Breadcrumbs } from '../../../../AbstractElements';
import { BrowserDefaults, CustomStyles, SupportedElements, Tooltips } from '../../../../Constant';
import BrowserDefault from './BrowserDefault';
import Custom from './custom';
import SupportElement from './SupportElement';
import Tooltipform from './Tooltipform';
import { CardBody, CardHeader, Card, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const FormValidationContain = () => {
  const desc= 'For Custom Bootstrap Form Validation Messages, You’ll Need To Add The novalidate Boolean Attribute To Your <form>. This Disables The Browser Default Feedback Tooltips, But Still Provides Access To The Form Validation APIs In JavaScript. Try To Submit The Form Below; Our JavaScript Will Intercept The Submit Button And Relay Feedback To You.When Attempting To Submit, You’ll See The :invalid And :valid Styles Applied To Your Form Controls.';
  const disp = 'Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.';
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Form Validation" parent="Form Control" title="Form Validation" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H4>{CustomStyles}</H4>
                <span>{desc}</span>
              </CardHeader>
              <CardBody>
                <Custom />
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H4>{BrowserDefaults}</H4>
                <span>{disp}</span>
              </CardHeader>
              <CardBody>
                <BrowserDefault />
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H4>{SupportedElements}</H4>
                <span>{disp}</span>
              </CardHeader>
              <CardBody>
                <SupportElement />
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H4>{Tooltips}</H4>
                <span>{'If your form layout allows it, you can swap the'} 
                  <code className="text-danger">{'.feedback'}</code> {'classes for'} 
                  <code className="text-danger">{'.tooltip'}</code> {'classes to display validation feedback in a styled tooltip. Be sure to have a parent with'} 
                  <code className="text-danger">{'position: relative'}</code> {'on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.'}
                </span>
              </CardHeader>
              <CardBody>
                <Tooltipform />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default FormValidationContain;