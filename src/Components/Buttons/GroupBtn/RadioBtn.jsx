import React, { Fragment } from 'react';
import { Row, Col, Card, CardHeader, CardBody, ButtonGroup, Label, Input } from 'reactstrap';
import { Btn, H4 } from '../../../AbstractElements';
import { RadioBtnData } from '../../../Data/Buttons';

const RadioBtnClass = () => {
  return (
    <Fragment>
      <Col xs="12">
        {RadioBtnData.map((item, i) =>
          <Card key={i}>
            <CardHeader className='pb-0'>
              <H4>{item.title}</H4>
              <span>{item.span}
                <code>{item.code1}</code> {item.detail1}
                <code>{item.code2}</code> {item.detail2}
                <code>{item.code3}</code> {item.detail3}
              </span>
            </CardHeader>
            <CardBody className="btn-group-showcase">
              <Row>
                {item.btnSub.map((btnItem, i) =>
                (btnItem.checkBox ?
                  <Col xl="6" sm="12" key={i}>
                    <ButtonGroup className={btnItem.btnClass} data-toggle="buttons">
                      <Btn attrBtn={{ color: btnItem.colorClass }} >
                        <div className={btnItem.divClass}>
                          <Input id={btnItem.id1} type="checkbox" />
                          <Label htmlFor={btnItem.id1}>{'Option 1'}</Label>
                        </div>
                      </Btn>
                      <Btn attrBtn={{ color: btnItem.colorClass }} >
                        <div className={btnItem.divClass}>
                          <Input id={btnItem.id2} type="checkbox" />
                          <Label htmlFor={btnItem.id2}>{'Option 2'}</Label>
                        </div>
                      </Btn>
                    </ButtonGroup>
                  </Col>
                  :
                  <Col xl="4" md="6" lg="12" sm="12" className='xl-50' key={i}>
                    <div className={btnItem.btnClass}>
                      <ButtonGroup>
                        <Btn attrBtn={{ color: btnItem.colorClass }} >
                          <div className={btnItem.divClass}>
                            <Input id={btnItem.id1} type="radio" name="radio1" value="option1" />
                            <Label htmlFor={btnItem.id1}>{btnItem.title1}</Label>
                          </div>
                        </Btn>
                        <Btn attrBtn={{ color: btnItem.colorClass }}>
                          <div className={btnItem.divClass}>
                            <Input id={btnItem.id2} type="radio" name="radio1" value="option1" defaultChecked />
                            <Label htmlFor={btnItem.id2}>{btnItem.title2}</Label>
                          </div>
                        </Btn>
                      </ButtonGroup>
                    </div>
                  </Col>)
                )}
              </Row>
            </CardBody>
          </Card>
        )}

      </Col>
    </Fragment>
  );
};

export default RadioBtnClass;