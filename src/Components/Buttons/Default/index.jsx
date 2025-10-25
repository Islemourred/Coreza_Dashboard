import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Btn, H4, Breadcrumbs } from '../../../AbstractElements';
import { DefaultButtonData } from '../../../Data/Buttons/index';

const DefaultButtonContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Default Style" parent="Buttons" title="Default Style" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            {DefaultButtonData.map((item, i) =>
              <Card id={item.cardId && item.cardId} key={i}>
                <CardHeader className='pb-0'>
                  <H4>{item.title}</H4>
                  <span>{item.span} {item.code && 
                    <code>{item.code}</code>}{item.detail && item.detail}
                    {item.code1 && <code>{item.code1}</code>}  {item.code2 && <code>{item.code2}</code>}{item.detail1 && item.detail1}
                  </span>
                </CardHeader>
                <CardBody>
                  <div className='btn-showcase'>
                    {
                      item.btnSub.map((btnItem, i) =>
                        <Btn attrBtn={{
                          className:btnItem.btnClass? btnItem.btnClass :"",
                          color: btnItem.colorClass, size: btnItem.size && btnItem.size,
                          active: btnItem.active && true,
                          disabled: btnItem.disabled && true,
                          outline: btnItem.outline && true
                        }} key={i}
                        >
                          {btnItem.title}
                        </Btn>
                      )
                    }
                  </div>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DefaultButtonContain;