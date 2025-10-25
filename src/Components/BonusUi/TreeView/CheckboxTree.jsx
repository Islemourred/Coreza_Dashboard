import DeniReactTreeView from "deni-react-treeview";
import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { CheckboxTreeHeading } from "../../../Constant";

const CheckboxTree = () => {
  return (
    <Col sm="6">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={CheckboxTreeHeading}/>
        <CardBody>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
            <DeniReactTreeView
              style={{ marginRight: "10px", marginBottom: "10px" }}
              showCheckbox={true}
              theme={"classic"}
              url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json"
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CheckboxTree;
