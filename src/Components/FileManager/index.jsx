import React, { Fragment } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import FileContent from './FileContent';
import FileSideBar from './FileSidebar';

const FileManagerContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Apps" title="File Manager" mainTitle="File Manager" />
      <Container fluid={true}>
        <Row>
          <FileSideBar />
          <Col xl="9" md="12">
            <div className="file-content">
              <Card>
                <FileContent />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default FileManagerContain;