import AllTabs from './AllTabs';
import ImageTabs from './ImageTabs';
import SearchTabs from './SearchTabs';
import VideoTabs from './VideoTabs';
import { CardBody, CardHeader, FormGroup, Form, Input, Label, Row, Col, Card, Container, InputGroup, TabContent, TabPane } from 'reactstrap';
import { Search } from 'react-feather';
import React, { Fragment, useCallback, useState } from 'react';

const SearchResultContain = () => {
    const [activeTab, setActiveTab] = useState('1');
    const callback = useCallback((tab) => {
        setActiveTab(tab);
    }, []);
    return (
      <Fragment>
        <Container fluid={true} className="search-page">
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader className="pb-0">
                  <Form className="search-form">
                    <FormGroup className="m-0">
                      <Label className="sr-only">Email</Label>
                    </FormGroup>
                    <FormGroup className="form-group mb-0">
                      <InputGroup>
                        <span className="input-group-text">
                          <Search className="icon-search" />
                        </span>
                        <Input className="form-control-plaintext" type="search" placeholder="Search.." />
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </CardHeader>
                <CardBody>
                  <SearchTabs callbackActive={callback} />
                  <TabContent activeTab={activeTab} className="tab-content">
                    <TabPane tabId="1">
                      <AllTabs />
                    </TabPane>
                    <TabPane tabId="2">
                      <ImageTabs />
                    </TabPane>
                    <TabPane tabId="3">
                      <VideoTabs />
                    </TabPane>
                    <TabPane tabId="4">
                    </TabPane>
                    <TabPane tabId="5">
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};
export default SearchResultContain;