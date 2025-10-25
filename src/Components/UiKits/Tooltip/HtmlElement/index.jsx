import { useState } from 'react';
import { Card, CardBody,  Col } from 'reactstrap';
import { Btn,  ToolTip } from '../../../../AbstractElements';
import { HTMLElements } from '../../../../Constant';
import HtmlContentTooltip from './HtmlContentTooltip';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { ToolTipsHtmlData, tooltips } from '../../../../Data/Ui-kits/Tooltip';

const HtmlElement = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={HTMLElements} CardHeaderClassName="pb-0" />
        <CardBody>
          <div className="btn-showcase">
            <ToolTip attrToolTip={{placement: 'top',isOpen: tooltip,target: 'Tooltip-5',}} >
              {tooltips}
            </ToolTip>
            {ToolTipsHtmlData.map((item) =>
              <HtmlContentTooltip key={item.id} item={item} />
            )}
            <Btn attrBtn={{ color: 'primary', id: 'Tooltip-5', onClick: toggle }}>Click me</Btn>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlElement;