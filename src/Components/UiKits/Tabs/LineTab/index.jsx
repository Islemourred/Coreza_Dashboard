import { Fragment } from 'react';
import { Container,Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import BottomTab from '../LineTabs/BottomTab';
import InfoColorTab from '../LineTabs/Colored/InfoTab';
import PrimaryColorTab from '../LineTabs/Colored/PrimaryTab';
import SecondaryColorTab from '../LineTabs/Colored/SecondaryTab';
import SuccessColorTab from '../LineTabs/Colored/SuccessTab';
import LeftTab from '../LineTabs/LeftTab';
import RightTab from '../LineTabs/RightTab';
import Simple from '../LineTabs/Simple';
 
const TabLine = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Line Tabs" parent="Ui Kits" title="Line Tabs"/>
        <Container fluid={true}>
          <Row>
            <Simple />
            <BottomTab />
            <LeftTab />
            <RightTab />
            <PrimaryColorTab />
            <SecondaryColorTab />
            <SuccessColorTab />
            <InfoColorTab />
          </Row>
        </Container>
      </Fragment>
    );
};

export default TabLine;