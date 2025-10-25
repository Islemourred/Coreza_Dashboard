import { useContext } from 'react';
import { Col, Progress, Row } from 'reactstrap';
import { H6, LI, P, UL, Image } from '../../../AbstractElements';
import { Comment, Doing, Done, Issues, Resolved } from '../../../Constant';
import ProjectAppContext from '../../../Helper/Project';
import { dynamicImage } from '../../../Services';

const DoingProjectData = () => {
  const { doingProject } = useContext(ProjectAppContext);
  return (
      <Row>
        {doingProject.map((item) =>
          <Col lg="4" xxl="4" md="6" className="box-col-33" key={item.id}>
            <div className="project-box">
              <span className="badge badge-primary">{Doing}</span>
              <H6 attrH6={{ className: 'f-w-600' }}>{item.title}</H6>
              <div className="d-flex">
                <Image attrImage={{ className: 'img-20 me-2 rounded-circle', src: `${dynamicImage(item.img)}`, alt: '' }} />
                <div className="flex-grow-1">
                  <P attrPara={{className: 'mb-0'}}>{item.sites}</P>
                </div>
              </div>
              <P>{item.desc}</P>
              <Row className="details">
                <Col xs="6">
                  <span>{Issues} </span>
                </Col>
                <Col xs="6" className="font-primary">{item.issue}</Col>
                <Col xs="6">
                  <span>{Resolved}</span>
                </Col>
                <Col xs="6" className="font-primary">{item.resolved}</Col>
                <Col xs="6">
                  <span>{Comment}</span>
                </Col>
                <Col xs="6" className="font-primary">{item.comment}</Col>
              </Row>
              <div className="customers">
                <UL attrUL={{ className: 'simple-list' }}>
                  <LI attrLI={{ className: 'd-inline-block' }}>
                    <Image attrImage={{ className: 'img-30 rounded-circle', src: `${dynamicImage(item.customers_img1)}`, alt: '' }} />
                  </LI>
                  <LI attrLI={{ className: 'd-inline-block' }}>
                    <Image attrImage={{ className: 'img-30 rounded-circle', src: `${dynamicImage(item.customers_img2)}`, alt: '' }} />
                  </LI>
                  <LI attrLI={{ className: 'd-inline-block' }}>
                    <Image attrImage={{ className: 'img-30 rounded-circle', src: `${dynamicImage(item.customers_img3)}`, alt: '' }} />
                  </LI>
                  <LI attrLI={{ className: 'd-inline-block ms-2' }}>
                    <P attrPara={{ className: 'f - 12' }}>{item.like}</P>
                  </LI>
                </UL>
              </div>
              <div className="project-status mt-4">
                <div className="d-flex mb-0">
                  <P>{item.progress}% </P>
                  <div className="flex-grow-1 text-end">
                    <span>{Done}</span>
                  </div>
                </div>
                {item.progress === '100' ?
                  <Progress className="sm-progress-bar" color="primary" value={item.progress} style={{ height: '5px' }} />
                  :
                  <Progress className="sm-progress-bar" striped color="primary" value={item.progress} style={{ height: '5px' }} />
                }
              </div>
             </div>
          </Col>
        )}
      </Row>
  );
};
export default DoingProjectData;