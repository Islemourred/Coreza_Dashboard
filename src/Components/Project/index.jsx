import  { Fragment } from "react";
import { Container, Row } from "reactstrap";
import ProjectDataList from "./Project Data/ProjectDataList";
import { Breadcrumbs } from "../../AbstractElements";
const ProjectListContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Project List" parent="Project" title="Project List"/>
      <Container fluid={true}>
        <Row className="project-cards">
          <ProjectDataList />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ProjectListContain;
