import { H4 } from '../../../AbstractElements';
import { Icons } from '../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const IcoCommon = ({ title, iconType, parentCallback }) => {

  const getItag = (tag) => {
    parentCallback(tag);
  };

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className='pb-0'>
            <H4 attrH4={{ className: 'm-b-0' }}>
              <span>{title}</span> {Icons}
            </H4>
          </CardHeader>
          <CardBody>
            <Row className="icon-lists">
              {iconType.map((iconItem, i) => {
                return (
                  <Col sm="6" lg="4" key={i}
                    onClick={() => {
                      getItag(iconItem);

                    }}
                    
                  >
                    <i className={`icofont icofont-${iconItem}`}></i> {iconItem}
                  </Col>
                );
              })
              }
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default IcoCommon;