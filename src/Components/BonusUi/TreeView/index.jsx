import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BasicTree from './BasicTree';
import CheckboxTree from './CheckboxTree';
import ContextmenuTree from './ContextmenuTree';
import DragTree from './DragTree';
import { Breadcrumbs } from '../../../AbstractElements';

const TreeViewContain = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Bonus Ui" title="Tree View" mainTitle="Tree View" />
            <Container fluid>
                <Row>
                    <BasicTree />
                    <CheckboxTree />
                    <DragTree />
                    <ContextmenuTree />
                </Row>
            </Container>
        </Fragment>
    );
};

export default TreeViewContain;