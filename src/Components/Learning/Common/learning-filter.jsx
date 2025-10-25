import  { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import FindCourseClass from './FindCourse';
import CategoriesClass from './Categories';
import UpcomingClass from './UpcomingClass';
import LearningContext from '../../../Helper/Leatning';

const LearningFilter = () => {
  const { isOpen, setIsOpen } = useContext(LearningContext);
  const onClickeHandel = () => {
    setIsOpen(!isOpen);
  };
  return (
      <Col xl="3" className="xl-40 box-col-40">
        <div className="job-sidebar md-sidebar">
          <a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={onClickeHandel}>Learning Filter</a>
          <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
            <div className="default-according style-1 job-accordion" id="accordionoc">
              <Row>
                <FindCourseClass />
                <CategoriesClass />
                <UpcomingClass />
              </Row>
            </div>
          </div>
        </div>
      </Col>
  );
};

export default LearningFilter;