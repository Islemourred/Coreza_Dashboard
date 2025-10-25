import { Btn, H3, H4, H6, Image, P } from '../../../AbstractElements';
import { MyProfile, Bio, Password, Website, Save, EmailAddress } from '../../../Constant';
import user from '../../../assets/images/user/7.jpg';
import { Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const MyProfileEdit = () => {
  return (
    <Fragment>
      <Card>
        <CardHeader className="pb-0">
          <H4 attrH4={{ className: 'card-title mb-0' }}>{MyProfile}</H4>
          <div className="card-options">
            <a className="card-options-collapse" href="#javascript">
              <i className="fe fe-chevron-up"></i>
            </a>
            <a className="card-options-remove" href="#javascript">
              <i className="fe fe-x"></i>
            </a>
          </div>
        </CardHeader>
        <CardBody>
          <Form>
            <Row className="mb-2">
              <div className="profile-title">
                <div className="d-lg-flex d-block align-items-center">
                  <Image attrImage={{ className: 'img-70 rounded-circle', alt: '', src: `${user}` }} />
                  <div className="flex-grow-1">
                    <H3 attrH3={{ className: 'mb-1 f-20 txt-primary' }}>MARK JECNO</H3>
                    <P attrPara={{ className: 'mb-0' }}>DESIGNER</P>
                  </div>
                </div>
              </div>
            </Row>
            <FormGroup className="mb-3">
              <H6 attrH6={{ className: 'form-label' }}>{Bio}</H6>
              <Input type="textarea" className="form-control" rows="5" defaultValue="On the other hand, we denounce with righteous indignation" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label className="form-label">{EmailAddress}</Label>
              <Input className="form-control" placeholder="your-email@domain.com" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label className="form-label">{Password}</Label>
              <Input className="form-control" type="password" defaultValue="password" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label className="form-label">{Website}</Label>
              <Input className="form-control" placeholder="http://Uplor .com" />
            </FormGroup>
            <div className="form-footer">
              <Btn attrBtn={{ className: 'btn', color: 'primary', type: 'button' }}>{Save}</Btn>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default MyProfileEdit;