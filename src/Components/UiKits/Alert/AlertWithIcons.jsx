import { useState } from 'react';
import { Clock } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { Alerts,  P } from '../../../AbstractElements';
import { AlertWithIcon, AlertWithIconSpan } from '../../../Constant';
import { dataWithIcon } from '../../../Data/Ui-kits/index';
import CommonAlert from './Common/CommonAlert';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const AlertWithIcons = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: '708px' }}>
      <HeadingCommon Heading={AlertWithIcon} CardHeaderClassName="pb-0" span={AlertWithIconSpan}/>
        <CardBody>
          <Alerts attrAlert={{ className: 'alert-dismissible', color: 'primary dark', isOpen: Open, target: 'Alert-1',}}closeBtn={true}attrBtn={{ className: 'btn-close', color: 'default', id: 'Alert-1', onClick: Toggle }}>
            <Clock /><P>You can check in on some of those fields below.</P>
          </Alerts>
          {dataWithIcon.map((data,index) =>(<CommonAlert key={index} item={data} />))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithIcons;