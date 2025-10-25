import { Card, CardBody } from 'reactstrap';
import { H1, H2, H3, H4, H5, H6 } from '../../../../../AbstractElements';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, VeryThin100 } from '../../../../../Constant';
import HeadingCommon from '../../../../../Common/Component/HeadingCommon';

const Thin100Card = () => {
  return (
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={VeryThin100}/>        
        <CardBody className="typography">
          <H1 attrH1={{ className: 'f-w-100' }}>{Heading1}</H1>
          <H2 attrH2={{ className: 'f-w-100' }}>{Heading2}</H2>
          <H3 attrH3={{ className: 'f-w-100' }}>{Heading3}</H3>
          <H4 attrH4={{ className: 'f-w-100' }}>{Heading4}</H4>
          <H5 attrH5={{ className: 'f-w-100' }}>{Heading5}</H5>
          <H6 attrH6={{ className: 'f-w-100' }}>{Heading6}</H6>
        </CardBody>
      </Card>
  );

};
export default Thin100Card;