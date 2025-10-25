import DeniReactTreeView from "deni-react-treeview";
import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { LazyLoadingTree } from "../../../Constant";

const DragTree = () => {
  return (
    <Col sm="6">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={LazyLoadingTree} />
        <CardBody>
          <div id="dragTree">
            <DeniReactTreeView
              url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json"
              lazyLoad={true}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DragTree;
