import  {  useContext, useEffect } from 'react';
import { Archive, ArrowRight, FileText } from 'react-feather';
import axios from 'axios';
import { Col, Row } from 'reactstrap';
import { Link } from "react-router-dom";
import { H4,H5, H6, Image, LI, UL } from '../../../AbstractElements';
import JobSearchContext from '../../../Helper/JobSearch';
import { dynamicImage } from '../../../Services';

const CategoryData = () => {
  const { search, setsearch } = useContext(JobSearchContext);
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setsearch(res.data));
  }, []);
  return (
      <Col sm="12">
        <div className="header-faq">
          <H4 className="mb-0">Knowledge articles by category</H4>
        </div>
        <Row className="browse">
          {search.length > 0 ? search.map((data) =>  (
              <Col xl="4" md="6" className='box-col-50' key={data.id}>
                <div className="browse-articles browse-bottom">
                  <H6>
                    <span><Archive /></span>{data.inspantitle}{data.title}
                  </H6>
                  <UL attrUL={{ className: 'simple-list' }}>
                    <LI>
                      <Link to={"/knowledgebase/KnowledgeDetailContain"}>
                        <H5><FileText />{data.text1}</H5>
                      </Link>
                    </LI>
                    <LI>
                      <Link to={"/knowledgebase/KnowledgeDetailContain"}>
                        <H5><FileText />{data.text2}</H5>
                      </Link>
                    </LI>
                    <LI>
                      <Link to={"/knowledgebase/KnowledgeDetailContain"}>
                        <H5><FileText />{data.text3}</H5>
                      </Link>
                    </LI>
                    <LI>
                      <Link to={"/knowledgebase/KnowledgeDetailContain"}>
                        <H5><FileText />{data.text4}</H5>
                      </Link>
                    </LI>
                    <LI>
                      <Link to={"/knowledgebase/KnowledgeDetailContain"}  className="f-w-600 font-primary">
                        <ArrowRight className="me-1" />{data.text5}
                      </Link>
                    </LI>
                  </UL>
                </div>
              </Col>
            )
          ) :
            <Image attrImage={{ className: 'img-fluid second-search', src: dynamicImage("search-not-found.png"), alt: '' }} />
          }
        </Row>
      </Col>
  );
};
export default CategoryData;