import  { Fragment, useState } from 'react';
import { CheckCircle, Info, PlusSquare, Target } from 'react-feather';
import { Card,  Col, Nav, NavLink, NavItem, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { All, CreateNewProject, Doing, Done } from '../../../Constant';
import ProjectListContain from './ProjectListContain';

const ProjectDataList = () => {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <Fragment>
      <Col md="12" className="project-list">
        <Card>
          <Row>
            <Col md="6" className='p-0 d-flex'>
              <Nav tabs className="border-tab">
                <NavItem>
                  <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}><Target />{All}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}><Info />{Doing}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}><CheckCircle />{Done}</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="6 p-0">
              <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/project/new-project`}>
                <PlusSquare />{CreateNewProject}
              </Link>
            </Col>
          </Row>
        </Card>
      </Col>
      <ProjectListContain activeTab={activeTab} />
    </Fragment>
  );
};
export default ProjectDataList;