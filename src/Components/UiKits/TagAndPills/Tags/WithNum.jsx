import { Card, CardBody, Col } from "reactstrap";
import { Badges } from "../../../../AbstractElements";
import { Href, TagsWithNumber } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { TagsWithNumberarr } from "../../../../Data/Ui-kits/TagPills";

const TagWithNum = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={TagsWithNumber} CardHeaderClassName="pb-0" />
        <CardBody className="digits">
          <Badges attrBadge={{ color: "primary", href: Href }}>{"1"}</Badges>
          {TagsWithNumberarr.map((data, index) => (
            <Badges key={index} attrBadge={{ color: data.color, href: Href }}>
              {data.Tittle}
            </Badges>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithNum;
