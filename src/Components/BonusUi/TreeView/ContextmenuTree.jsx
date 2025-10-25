import React, {  useRef } from "react";
import DeniReactTreeView from "deni-react-treeview";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Col, Card, CardBody } from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { CheckboxTreeHeading } from "../../../Constant";

const ContextmenuTree = () => {
  const treeviewRef = useRef(null);

  const deleteItemClick = (id) => {
    if (treeviewRef.current) treeviewRef.current.api.removeItem(id);
  };

  const editItemClick = (item) => {
    alert("Edit item: " + JSON.stringify(item, null, 2));
  };

  const onRenderItem = (item) => {
    return (
      <div className="treeview-item-example">
        <span className="treeview-item-example-text">{item.text}</span>
        <span
          className="actionButton trash"
          onClick={() => deleteItemClick(item.id)}
        >
          <FaTrash size="15" />
        </span>
        <span className="actionButton edit" onClick={() => editItemClick(item)}>
          <FaEdit size="15" />
        </span>
      </div>
    );
  };

  return (
    <Col sm="6">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={CheckboxTreeHeading}/>
        <CardBody>
          <DeniReactTreeView
            className="onrenderitem-example"
            ref={treeviewRef}
            url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json"
            selectRow={true}
            onRenderItem={onRenderItem}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextmenuTree;
