import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../AbstractElements';
import { BasicDropdown } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';
import { ChevronDown } from "react-feather";
import { Link } from 'react-router-dom'

const Basic = () => {
  return (
    <Col sn="12" xl="12">
      <Card className='basic-dropdown'>
        <HeadingCommon Heading={BasicDropdown} CardHeaderClassName="pb-0" />
        <CardBody>
          <UL attrUL={{ className: 'd-flex flex-row flex-wrap' }}>
            <LI attrLI={{ className: 'onhover-dropdown' }}>
              <span className='f-w-600'>Dashboard</span>
              <span>
                <ChevronDown className='ms-2 middle'/>
              </span>
              <UL attrUL={{ className: 'onhover-show-div left-dropdown' }}>
                <LI>
                  <Link to={'/dashboard/default'} target="_blank">Default</Link>
                </LI>
                <LI>
                  <Link to={'/dashboard/ecommerce'} target="_blank">Ecommerce</Link>
                </LI>
              </UL>
            </LI>
            <LI attrLI={{ className: 'onhover-dropdown' }}>
              <span className='f-w-600'>Job Search</span>
              <span>
                <ChevronDown className='ms-2 middle'/>
              </span>
              <UL attrUL={{ className: 'onhover-show-div left-dropdown' }}>
                <LI>
                  <Link to={'/jobSearch/cardView'} target="_blank">Card view</Link>
                </LI>
                <LI>
                  <Link to={'/jobSearch/job-apply'} target="_blank">Job apply</Link>
                </LI>
              </UL>
            </LI>
            <LI attrLI={{ className: 'onhover-dropdown' }}>
              <span className='f-w-600'>Ecommerce</span>
              <span>
                <ChevronDown className='ms-2 middle'/>
              </span>
              <UL attrUL={{ className: 'onhover-show-div left-dropdown' }}>
                <LI>
                  <Link to={'/ecommerce/product'} target="_blank">Product</Link>
                </LI>
                <LI>
                  <Link to={'/ecommerce/Add-product'} target="_blank">Add product</Link>
                </LI>
                <LI>
                  <Link to={'/ecommerce/invoice'} target="_blank">Invoice</Link>
                </LI>
              </UL>
            </LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;