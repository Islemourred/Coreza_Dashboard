import React, { Fragment, useCallback, useState } from 'react';
import { X } from 'react-feather';
import { TabContent, TabPane } from 'reactstrap';
import { Btn, H5, P } from '../../AbstractElements';
import { Configuration } from '../../Constant';
import ColorPicker from './Tabs/ColorPicker/index';
import SidebarCusmizer from './Tabs/Sidebar';
import ConfigurationClass from './ConfigurationClass';

const TabCustomizer = ({ selected, callbackNav }) => {
    const [modal, setModal] = useState(false);
    const toggle = useCallback(() => {
        setModal(!modal);
    }, [modal]);
    return (
        <Fragment>
            <TabContent activeTab={selected} >
                <div className="customizer-header">
                    <X className="icon-close icon-close" onClick={() => callbackNav(false)} />
                    <H5>CUSTOMIZER</H5>
                    <P attrPara={{ className: 'mb-0' }} >Customize &amp; Preview Real Time</P>
                    <Btn attrBtn={{ color: 'primary', className: 'plus-popup mt-2', onClick: () => toggle(!modal) }} >{Configuration}</Btn>
                    <ConfigurationClass modal={modal} toggle={toggle} />
                </div>
                <div className="customizer-body custom-scrollbar tab-content">
                    <TabPane tabId="sidebar-type">
                        <SidebarCusmizer />
                    </TabPane>
                    <TabPane tabId="color-picker">
                        <ColorPicker />
                    </TabPane>
                </div>
            </TabContent>
        </Fragment>
    );
};

export default TabCustomizer;