import  {  useState } from 'react';
import { Col, Card, CardHeader, CardBody,  Collapse } from 'reactstrap';
import { Btn, H5, P, Image } from '../../AbstractElements';
import { ActivityFeed, Href, Photos } from '../../Constant';
import { ActivityFeedData } from '../../Data/SocialApp';

const LeftBarActivity = () => {
  const [isActivity, setisActivity] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0' }}>
            <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisActivity(!isActivity), databstoggle: 'collapse', datatarget: '#collapseicon14', ariaexpanded: 'isActivity', ariacontrols: 'collapseicon14' }}>{ActivityFeed}</Btn></H5>
          </CardHeader>
          <Collapse isOpen={isActivity}>
            <CardBody className="social-status filter-cards-view">
              {ActivityFeedData.map((item) =>
                <div className='d-flex align-items-center' key={item.id}>
                  <Image attrImage={{ className: 'img-50 rounded-circle m-r-15', src: item.img, alt: 'tenImg' }} />
                  <div className='flex-grow-1'>
                    <span className="f-w-600 d-block">{item.title}</span>
                    <P>{item.desc}
                      <a href={Href}>{Photos}</a>
                    </P>
                    <span className="light-span">{item.time}</span>
                  </div>
                </div>
              )}
            </CardBody>
          </Collapse>
        </Card>
      </Col>
  );
};

export default LeftBarActivity;