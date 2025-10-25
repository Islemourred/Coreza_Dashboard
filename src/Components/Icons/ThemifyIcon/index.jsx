import IconMarkUp from "../Icon-markup";
import ThemifyCommon from "./ThemifyCommon";
import React, { Fragment, useState, useCallback } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { themifyIcoData } from "../../../Data/Icons/themifyData";

const ThemifyIconsContain = () => {
  const [iTag, setiTag] = useState("");
  const [icon, setIcon] = useState("");

  const callback = useCallback((tag) => {
    setiTag({
      iTag: '<i className= "' + tag + '"></i>',
    });
    setIcon({
      icon: "" + tag + " fa-2x",
    });
  }, []);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Themify Icon" parent="Icon" title="Themify Icons"/>
      <Container fluid={true}>
        {themifyIcoData.map((icons, index) => (
          <Row key={index}>
            <ThemifyCommon iconType={icons.datas} title={icons.tittle} parentCallback={callback}/>
          </Row>
        ))}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};
export default ThemifyIconsContain;