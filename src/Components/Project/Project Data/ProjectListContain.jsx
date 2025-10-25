import { Card, CardBody, Col, TabContent, TabPane } from "reactstrap"
import AllProjectData from "./AllProjectData"
import DoingProjectData from "./DoingProjectData"
import DoneProjectData from "./DoneProjectData"

const ProjectListContain = ({activeTab}) => {
  return (
    <Col sm="12">
    <Card>
      <CardBody>
        <TabContent activeTab={activeTab} id="top-tabContent">
          <TabPane tabId="1">
            <AllProjectData />
          </TabPane>
          <TabPane tabId="2">
            <DoingProjectData />
          </TabPane>
          <TabPane tabId="3">
            <DoneProjectData />
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  </Col>
  )
}

export default ProjectListContain