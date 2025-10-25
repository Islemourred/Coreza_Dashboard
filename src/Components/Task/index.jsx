import  { Fragment, useState } from 'react';
import { Container, Row } from 'reactstrap';
import NavClass from './NavClass';
import TabClass from './TabClass';
import { Breadcrumbs } from '../../AbstractElements';

const TaskContain = () => {
  const [activeTab, setActiveTab] = useState('1');

  const activeToggle = ((tab) => {
    setActiveTab(tab);
  });

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Task" parent="Apps" title="Task" />
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <NavClass  activeToggle={activeToggle} />
            <TabClass activeTab={activeTab} />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default TaskContain;