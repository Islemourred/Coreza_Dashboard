import { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import BasicTabCard from '../BoostrapTabs/BasicTabCard';
import BottomLeftAlignCard from '../BoostrapTabs/TabAligns/BottomLeftAlignCard';
import RighhtAlign from '../BoostrapTabs/TabAligns/RightAlign';
import WithIcon from '../BoostrapTabs/WithIcon';
import Vertical from '../BoostrapTabs/TabAligns/Vertical';
import PillTab from '../BoostrapTabs/PillTabs/PillTab';
import PillPrimaryTab from '../BoostrapTabs/PillTabs/PillTabColor/Primary';
import PillSecondaryTab from '../BoostrapTabs/PillTabs/PillTabColor/Secondary';

const TabBootstrap = () => {

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Bootstrap Tabs" parent="Ui Kits" title="Bootstrap Tabs" />
      <Container fluid={true}>
        <Row>
          <BasicTabCard />
          <BottomLeftAlignCard />
          <WithIcon />
          <RighhtAlign />
          <Vertical />
          <PillTab />
          <PillPrimaryTab />
          <PillSecondaryTab />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TabBootstrap;