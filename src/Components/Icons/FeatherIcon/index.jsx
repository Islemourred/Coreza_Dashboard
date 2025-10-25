import { Breadcrumbs, H4, H6 } from "../../../AbstractElements";
import IconMarkUp from "../Icon-markup";
import { Feather, Icons } from "../../../Constant";
import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import axios from "axios";
import * as feather from "feather-icons";

const FeatherIconContain = () => {
  const [data, setData] = useState([]);
  const [iTag, setiTag] = useState("");
  const [feathericon, setfeatherIcon] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/featherData.json`)
      .then((res) => setData(res.data));
  }, []);

  const getItag = (tag) => {
    setiTag({
      iTag: '<i data-feather="' + tag + '"></i>',
    });
    setfeatherIcon({
      feathericon: tag,
    });
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="FeatherIconContain" parent="icon" title="  FeatherIconContain"/>
      <Container fluid={true}>
        {data.map((icons, index) => (
          <Row key={index}>
            <Col sm="12">
              <Card>
                <CardHeader>
                  <H4 attrH4={{ className: "m-b-0" }}>
                    <span>{Feather}</span> {Icons}
                  </H4>
                </CardHeader>
                <CardBody>
                  <Row className="icon-lists feather-icons">
                    {icons.feather_icons.map((icon, i) => (
                      <Col xs="12" sm="6" xl="4" key={i} onClick={(e) => getItag(icon)}>
                        <div className="d-flex">
                          <div dangerouslySetInnerHTML={{__html: feather.icons[icon].toSvg(icon)}}/>
                          <div className="align-self-center flex-grow-1">
                            <H6 attrH6={{ className: "mt-0" }}>{icon}</H6>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
      <IconMarkUp itag={iTag} icons={feathericon} />
    </Fragment>
  );
};

export default FeatherIconContain;
