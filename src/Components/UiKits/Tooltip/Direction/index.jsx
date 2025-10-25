import  { useState } from 'react';
import { Card, CardBody,  Col } from 'reactstrap';
import { Btn,  ToolTip } from '../../../../AbstractElements';
import { Direction } from '../../../../Constant';
import CommonTooltip from './CommonTooltip';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { TooltipDirectionsData } from '../../../../Data/Ui-kits/Tooltip';

const Directions = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={Direction} CardHeaderClassName="pb-0" />
        <CardBody>
          <div className="btn-showcase">
            <Btn attrBtn={{ color: 'primary', id: 'Tooltip-1' }}>Top Tooltip</Btn>
            <ToolTip attrToolTip={{ placement: 'top', isOpen: tooltip, target: 'Tooltip-1', toggle: toggle}}>
              Tooltip on top
            </ToolTip>
            {TooltipDirectionsData.map((item) =>(<CommonTooltip key={item.id} item={item} />))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Directions;