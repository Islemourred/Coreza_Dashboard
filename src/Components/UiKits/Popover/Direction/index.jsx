import  { useState } from 'react';
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader,CardHeader } from 'reactstrap';
import { Btn,H4 } from '../../../../AbstractElements';
import { Direction, popoverSpan } from '../../../../Constant';
import { DirectionData } from '../../../../Data/Ui-kits';
import CommonPopover from '../common/CommonPopover';

const Directions = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0">
          <H4>{Direction}</H4>
          <span>{popoverSpan}</span>
        </CardHeader>
        <CardBody>
          <div className="btn-showcase">
            <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-4' }}>Popover on top</Btn>
            <Popover
              placement='top'
              isOpen={popover}
              target='Popover-4'
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </PopoverBody>
            </Popover>
            {DirectionData.map((popover) => (
              <CommonPopover key={popover.id} item={popover} />)
            )}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Directions;