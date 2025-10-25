import  { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { H1, H2, H3, H4, H5, H6 } from "../../../../AbstractElements";
import { FontsData } from "../../../../Data/Ui-kits/Typography";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "../../../../Constant";

const DyanmicFonts = () => {
  return (
    <Fragment>
      {FontsData.map((Data, index) => (
        <Col key={index} sm="12" xl="4">
          <Card>
            <HeadingCommon Heading={Data.tittle} />
            <CardBody className="typography">
              <H1 className={Data.className}>{Heading1}</H1>
              <H2 className={Data.className}>{Heading2}</H2>
              <H3 className={Data.className}>{Heading3}</H3>
              <H4 className={Data.className}>{Heading4}</H4>
              <H5 className={Data.className}>{Heading5}</H5>
              <H6 className={Data.className}>{Heading6}</H6>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default DyanmicFonts;
