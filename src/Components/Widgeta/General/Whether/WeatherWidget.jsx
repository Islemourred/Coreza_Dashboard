import React, { Fragment } from 'react';
import { Col } from 'reactstrap';
import { UL } from '../../../../AbstractElements';
import WeatheData from './WeatherData';

const WeatherWidgets = () => {
  return (
    <Fragment>
      <Col xl="7" md='6'>
        <div className="widget-list">
          <UL attrUL={{ className: 'simple-list' }}>
            <WeatheData />
          </UL>
        </div>
      </Col>
    </Fragment>
  );
};
export default WeatherWidgets;