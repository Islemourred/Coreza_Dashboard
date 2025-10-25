import DeniReactTreeView from "deni-react-treeview";
import { Card, CardBody, Col } from "reactstrap";
import  HeadingCommon  from "../../../Common/Component/HeadingCommon";
import { BasicTreeHeading } from "../../../Constant";

const BasicTree = () => {
  return (
    <Col sm="6">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={BasicTreeHeading} />
        <CardBody>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",}}>
            <DeniReactTreeView
              style={{ marginRight: "10px", marginBottom: "10px" }}
              showCheckbox={false}
              theme={"classic"}
              url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json"
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTree;
