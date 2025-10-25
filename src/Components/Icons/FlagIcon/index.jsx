import IconMarkUp from "../Icon-markup";
import { Breadcrumbs, H5, H4, H6 } from "../../../AbstractElements";
import { FlagIcons } from "../../../Constant";
import React, { Fragment, useState, useEffect } from "react";
import {Container,Row,Col,Card,CardHeader,CardBody} from "reactstrap";
import axios from "axios";

const FlagIconContain = () => {
  const [iTag, setiTag] = useState("");
  const [iconsData, seticonsData] = useState([]);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/flagIconData.json`)
      .then((res) => seticonsData(res.data));
  }, []);

  const getItag = (tag) => {
    setiTag({
      iTag: '<i className="flag-icon flag-icon-' + tag + '"></i>',
    });
    setIcon({
      icon: "flag-icon flag-icon-" + tag + " fa-2x",
    });
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Flag Icon" parent="Icon" title="Flag Icon" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H4 attrImage={{ className: "m-b-0" }}>{FlagIcons}</H4>
              </CardHeader>
              <CardBody>
                <Row className="icon-lists flag-icons">
                  {iconsData.map((icon, i) => (
                    <Col xs="12" sm="6" xl="4" key={i} onClick={(e) => getItag(icon.abbrivation)}>
                      <div className="d-flex">
                        <i className={`flag-icon flag-icon-${icon.abbrivation}`}></i>
                        <div className="align-self-center flex-grow-1">
                          <H5>{icon.abbrivation}</H5>
                          <H6 attrH6={{ className: "mt-0" }}>{icon.name}</H6>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};
export default FlagIconContain;
