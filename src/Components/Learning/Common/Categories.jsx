import { BackendDevelopment, Categories, Design, Development, FrontendDevelopment, Href, InterfaceDesign, UIDesign, UserExperience, UXDesign } from '../../../Constant';
import { Btn, H5, LI, UL } from '../../../AbstractElements';
import  {  useState } from 'react';
import { Card, CardHeader, Col, Collapse } from 'reactstrap';

const CategoriesClass = () => {
  const [isDesign, setIsDesign] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0' }} >
              <Btn attrBtn={{ className: 'btn-link ps-0', onClick: () => setIsDesign(!isDesign), color: 'transperant' }} >{Categories}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isDesign}>
              <div className="categories">
                <div className="learning-header">
                  <span className="f-w-600">{Design}</span>
                </div>
                <UL>
                  <LI>
                    <a href={Href}>{UIDesign} </a>
                    <span className="badge badge-primary pull-right">{'28'}</span>
                  </LI>
                  <LI>
                    <a href={Href}>{UXDesign} </a>
                    <span className="badge badge-primary pull-right">{'35'}</span>
                  </LI>
                  <LI>
                    <a href={Href}>{InterfaceDesign} </a>
                    <span className="badge badge-primary pull-right">{'17'}</span>
                  </LI>
                  <LI>
                    <a href={Href}>{UserExperience} </a>
                    <span className="badge badge-primary pull-right">{'26'}</span>
                  </LI>
                </UL>
              </div>
              <div className="categories pt-0">
                <div className="learning-header">
                  <span className="f-w-600">{Development}</span>
                </div>
                <UL>
                  <LI>
                    <a href={Href}>{FrontendDevelopment}</a>
                    <span className="badge badge-primary pull-right">{'48'}</span>
                  </LI>
                  <LI>
                    <a href={Href}>{BackendDevelopment}</a>
                    <span className="badge badge-primary pull-right">{'19'}</span>
                  </LI>
                </UL>
              </div>
          </Collapse>
        </Card>
      </Col>
  );
};

export default CategoriesClass;