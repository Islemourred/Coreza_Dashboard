import IconMarkUp from "../Icon-markup";
import IcoCommon from "./IcoCommon";
import React, { Fragment, useState, useCallback } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { icoIconData } from "../../../Data/Icons/icoData";

const IcoIconsContain = () => {
  const [iTag, setiTag] = useState("");
  const [icon, setIcon] = useState("");

  const callback = useCallback((tag) => {
    setiTag({
      iTag: '<i className="icofont icofont-' + tag + '"></i>',
    });
    setIcon({
      icon: "icofont icofont-" + tag + " fa-2x",
    });
  }, []);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Ico Icon" parent="Icon" title="Ico Icon" />
      <Container fluid={true}>
        {icoIconData.map((data, index) => (
          <Row key={index}>
            <IcoCommon iconType={data.icons} title={data.tittle} parentCallback={callback}/>
          </Row>
        ))}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};
export default IcoIconsContain;
