import React, { Fragment } from 'react';
import dragula from 'react-dragula';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { H4, Breadcrumbs } from '../../../AbstractElements';
import { ClickAndDrag } from '../../../Constant';
import Draggables from './Draggable';

const DragAndDropContain = () => {

    const dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            dragula([componentBackingInstance], options);
        }
    };

    const dragulaDecoratorSpill = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {
                isContainer: function (el) {
                    return false;
                },
                moves: function (el, source, handle, sibling) {
                    return true;
                },
                accepts: function (el, target, source, sibling) {
                    return true;
                },
                invalid: function (el, handle) {
                    return false;
                },
                direction: 'vertical',
                copy: false,
                copySortSource: false,
                revertOnSpill: true,
                removeOnSpill: true,
                mirrorContainer: document.body,
                ignoreInputTextSelection: true
            };
            dragula([componentBackingInstance], options);
        }
    };

    const dragulaDecoratorRight = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {
                copys: (el, source) => {
                    return el.id === 'left';
                },
                copyItem: (el, target, source, sibling) => {
                    return sibling.id === 'left';
                },
                accepts: (el, target, source, sibling) => {
                    return target.id === 'left';
                },
                copy: true,
                copySortSource: true,
                removeOnSpill: false,
                mirrorContainer: document.getElementById('right'),
            };
            dragula([componentBackingInstance], options);
        }
    };
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Drag & Drop" parent="Bonus Ui" title="Drag & Drop" />
            <Container fluid={true}>
                <Row>
                    <Col lg="6">
                        <Card>
                            <CardHeader className='pb-0'>
                                <H4>{ClickAndDrag}</H4>
                            </CardHeader>
                            <CardBody>
                                <div className="ui-sortable small-drag" id="draggableMultiple">
                                    <div className='container' ref={dragulaDecorator}>
                                        <div>{'You can move these elements between these two containers'}</div>
                                        <div>{'Moving them anywhere else isn\'t quite possible'}</div>
                                        <div>{'There\'s also the possibility of moving elements around in the same container, changing their position'}</div>
                                        <div>{'This is the default use case. You only need to specify the containers you want to use'}</div>
                                        <div>{'More interactive use cases lie ahead'}</div>
                                        <div>{'Make sure to check out the documentation on GitHub!'}</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Draggables dragulaDecoratorSpill={dragulaDecoratorSpill} dragulaDecoratorRight={dragulaDecoratorRight} />
                </Row>
            </Container>
        </Fragment>
    );
};

export default DragAndDropContain;