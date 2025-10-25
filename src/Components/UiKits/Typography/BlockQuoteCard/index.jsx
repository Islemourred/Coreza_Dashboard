import { Card, CardBody, Col } from 'reactstrap';
import { BlockQuotes, Footer,  P } from '../../../../AbstractElements';
import { BlockQuoteSpan, Blockquotes, SourceTitle } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import DynamicBlockquotes from './DynamicBlockquotes';

const BlockQuoteCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={Blockquotes} CardHeaderClassName="pb-0" span={BlockQuoteSpan}  />
        <CardBody>
          <P attrPara={{ className: 'sub-title' }}>{'Naming a source'}</P>
          <BlockQuotes attrBlockQuote={{ className: 'blockquote m-0' }}>
            <P attrPara={{ className: 'mb-0' }}>{'Lorem ipsum dolor sit amet'}{', consectetur adipiscing elit. Integer posuere erat a ante.'}</P>
          </BlockQuotes>
          <Footer attrFooter={{ className: 'blockquote-footer text-start mt-0' }}>{'Someone famous in'}
              <cite title="Source Title">{SourceTitle}</cite>
          </Footer>
          <DynamicBlockquotes />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlockQuoteCard;