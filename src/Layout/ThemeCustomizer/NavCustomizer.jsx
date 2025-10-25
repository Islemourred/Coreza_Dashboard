import React, { Fragment } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const   NavCustomizer = ({ callbackNav, selected }) => {
    return (
        <Fragment>
            <Nav className="flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical">
                <NavItem>
                    <NavLink className={selected === 'color-picker' ? 'active' : ''} onClick={() => callbackNav('color-picker', true)}>
                        <div className="settings color-settings">
                        <i className="icon-paint-bucket"></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={selected === 'sidebar-type' ? 'active' : ''} onClick={() => callbackNav('sidebar-type', true)}>
                        <div className="settings">
                        <i className="icon-settings"></i>

                        </div>
                    </NavLink>
                </NavItem>
            </Nav>
        </Fragment>
    );
};

export default NavCustomizer;