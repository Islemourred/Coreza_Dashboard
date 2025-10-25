import  { Fragment } from 'react';
import { CardHeader, Container,Row, CardBody ,Col,Card } from 'reactstrap';
import ContextualBadge from './Tags/Contextual';
import ContextualPills from './Pills/Contextual';
import TagWithNum from './Tags/WithNum';
import PillWithNum from './Pills/WithNum';
import TagWithIcon from './Tags/WithIcon';
import PillWithIcon from './Pills/WithIcon';
import { Breadcrumbs, Badges, H4 } from '../../../AbstractElements';
import BadgeExample from './BadgeExample';
import ButtonPart from './ButtonPart';
import {  CheckCircle, Truck, Send ,Trash, Award, Activity, Mail} from 'react-feather';
import { BasicTags } from '../../../Constant';
const TagAndPills = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Tag & Pills" parent="Ui Kits" title="Tag & Pills"/>
        <Container fluid={true} className="tagpills-badge">
          <Row>
            <ContextualBadge />
            <ContextualPills />
            <TagWithNum />
            <PillWithNum />
            <Col sm="12" xl="4">
              <Card>
                <CardHeader className='pb-0'>
                  <H4>{BasicTags}</H4>
                </CardHeader>
                <CardBody className='basic-icontag'>
                  <Badges attrBadge={{ color: 'light', className:'badge-light-primary rounded-pill', href: '#javascript' }} ><CheckCircle /></Badges>
                  <Badges attrBadge={{ color: 'light', className:'badge-light-secondary rounded-pill', href: '#javascript' }} ><Truck /></Badges>
                  <Badges attrBadge={{ color: 'light', className:'badge-light-success rounded-pill', href: '#javascript' }} ><Send /></Badges>
                  <Badges attrBadge={{ color: 'light', className:'badge-light-info rounded-pill', href: '#javascript' }} ><Trash /></Badges>
                  <Badges attrBadge={{ color: 'light', className:'badge-light-warning rounded-pill', href: '#javascript' }} ><Award /></Badges>
                  <Badges attrBadge={{ color: 'light', className:'badge-light-danger rounded-pill', href: '#javascript' }} ><Activity /></Badges>
                  <Badges attrBadge={{ color: 'light', className:'badge-light-dark rounded-pill', href: '#javascript' }} ><Mail /></Badges>
                </CardBody>
              </Card>
            </Col>
            <TagWithIcon />
            <PillWithIcon />
            <BadgeExample />
            <ButtonPart />
          </Row>
        </Container>
      </Fragment>
    );
};

export default TagAndPills;