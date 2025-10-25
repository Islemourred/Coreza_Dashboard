import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BothDragClass from './BothDrag';
import DragCardOnlyClass from './DragCardOnly';
import DragOnlyContentClass from './DragOnlyContent';
import { Breadcrumbs } from '../../../../AbstractElements';

const DraggingCardContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Draggable Card" parent="Bonus Ui" title="Draggable Card" />
            <Container fluid={true}>
                <Row className="ui-sortable" >
                    <BothDragClass />
                    <DragCardOnlyClass />
                    <DragOnlyContentClass />
                </Row>
            </Container>
        </Fragment>
    );
};

export default DraggingCardContain;