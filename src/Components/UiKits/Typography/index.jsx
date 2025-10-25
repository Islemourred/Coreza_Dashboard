import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import HeadingCard from "./HeadingCard/index";
import FontWeightCards from "./FontWeightCards";
import FadedHeadingCard from "./FadedHeadingCard";
import DisplayHeadingCard from "./DisplayHeadingCard";
import LeadCard from "./LeadCard";
import InlineTextCard from "./InlineTextCard";
import TextColorCard from "./TextColorCard";
import ListCard from "./ListCard";
import BlockQuoteCard from "./BlockQuoteCard";
import { Breadcrumbs } from "../../../AbstractElements";

const Typography = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Typography" parent="Ui Kits" title="Typography" />
      <Container fluid={true}>
        <Row>
          <HeadingCard />
          <FontWeightCards />
          <FadedHeadingCard />
          <DisplayHeadingCard />
          <LeadCard />
          <InlineTextCard />
          <TextColorCard />
          <ListCard />
          <BlockQuoteCard />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Typography;