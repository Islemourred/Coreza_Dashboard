import React, { Fragment }  from 'react';
import { Container,Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import AlertWithDarkDismiss from './AlertWithDarkDismiss';
import LightAlert from './LightAlert';
import AlertWithLightDismiss from './AlertWithLightDismiss';
import LightLinkColor from './LightLinkColor';
import LinkColors from './LinkColors';
import OutlineAlert from './OutlineAlert';
import ThemeColorAlert from './ThemeColorAlert';
import AlertWithIcons from './AlertWithIcons';
import DarkOutlineAlert from './DarkOutlineAlert';
import IconsWithOutline from './IconsWithOutline';
import IconInverse from './IconInverse';
import TextAsActions from './TextAsActions';
import AditionalContant from './AditionalContant';
const Alerts  = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Alert" parent="Ui Kits" title="Alert"/>
        <Container fluid={true}>
          <Row>
            <ThemeColorAlert />
            <LinkColors />
            <AlertWithDarkDismiss />
            <AlertWithIcons />
            <LightAlert />
            <LightLinkColor />
            <AlertWithLightDismiss />
            <OutlineAlert />
            <DarkOutlineAlert />
            <IconsWithOutline />
            <IconInverse />
            <TextAsActions />
            <AditionalContant/>      
          </Row>
        </Container>
      </Fragment>
    );
};

export default Alerts;