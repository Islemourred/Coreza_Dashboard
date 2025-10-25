import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody, ButtonGroup, CardHeader } from 'reactstrap';
import { Btn, H4 } from '../../../AbstractElements';
import { GroupBtnData } from '../../../Data/Buttons';

const GroupButtonClass = () => {
  return (
    <Fragment>
      {GroupBtnData.map((item, i) =>
        <div className="col-12" key={i}>
          <Card>
            <CardHeader className='pb-0'>
              <H4>{item.title}</H4>
              {item.para && (<span>Use <code>{item.para}</code> for {item.desc}</span>)}
            </CardHeader>
            <CardBody className="btn-group-showcase">
              <Row>
                {item.color.map((colorItem, i) =>
                  <Col xl="4" md="6" sm="12 xl-50" className={colorItem.colClass ? colorItem.colClass : ''} key={i}>
                    <ButtonGroup className={colorItem.btnClass ? colorItem.btnClass : ''}>
                      <Btn attrBtn={{ size: colorItem.size && colorItem.size, color: colorItem.colorClass, outline: colorItem.outline1 && true }} >{colorItem.title1}</Btn>
                      <Btn attrBtn={{ size: colorItem.size && colorItem.size, color: colorItem.colorClass, outline: colorItem.outline2 && true }} >{colorItem.title2}</Btn>
                      <Btn attrBtn={{ size: colorItem.size && colorItem.size, color: colorItem.colorClass, outline: colorItem.outline3 && true }} >{colorItem.title3}</Btn>
                    </ButtonGroup>
                  </Col>
                )}
              </Row>
            </CardBody>
          </Card>
        </div>
      )}

    </Fragment>
  );
};

export default GroupButtonClass;