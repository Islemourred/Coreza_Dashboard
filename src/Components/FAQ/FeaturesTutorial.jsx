import { Col } from 'reactstrap';
import { H4 } from '../../AbstractElements';
import { FeaturedTutorials } from '../../Constant';
import FeaturesTutorial from '../../Components/Knowledgebase/Knowledgebase/FeaturesTutorial';

const FAQFeaturesTutorial = () => {
  return (
      <Col lg="12" className="featured-tutorial">
        <div className="header-faq">
          <H4 className="mb-0">{FeaturedTutorials}</H4>
        </div>
        <FeaturesTutorial />
      </Col>
  );
};
export default FAQFeaturesTutorial;