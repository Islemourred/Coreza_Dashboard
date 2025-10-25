import React, {  useState } from "react";
import { Row, Col, Card, CardBody, Label, Form } from "reactstrap";
import { BasicSlider, Default } from "../../../Constant";
import { Range, getTrackBackground } from "react-range";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const BasicSliderClass = () => {
  const [values1, setValues1] = useState([10]);
  return (
      <Col sm="12" xl="6">
        <Card>
        <HeadingCommon Heading={BasicSlider} CardHeaderClassName="pb-0"/>
          <CardBody>
            <Form className="theme-form form-label-align-right range-slider">
              <Row className="mb-0">
                <Col md="2"><Label>{Default}</Label></Col>
                <Col md="10">
                  <div className="rang-slide" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "1em",}}>
                    <Range values={values1} step={1} min={0} max={20} onChange={(values1) => setValues1(values1)}
                      renderTrack={({ props, children }) => (
                        <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px", display: "flex", width: "100%"}}>
                          <output style={{ marginTop: "12px" }}>0</output>
                          <div ref={props.ref} style={{height: "5px",width: "100%",borderRadius: "4px",background: getTrackBackground({values: values1,colors: ["#4d8aff", "#ccc"],min: 0,max: 20,  }),alignSelf: "center",}}>
                            {children}
                          </div>
                          <output style={{ marginTop: "12px" }}>20</output>
                        </div>
                      )}
                      renderThumb={({ props, isDragged }) => (
                        <div {...props} style={{ ...props.style, height: "35px", width: "35px", borderRadius: "30px", backgroundColor: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 2px 6px #AAA",}}>
                          <div style={{ height: "16px", width: "5px", backgroundColor: isDragged ? "#4d8aff" : "#CCC",}}/>
                        </div>
                      )}
                    />
                    <output style={{ marginTop: "12px" }} id="output">{values1[0]}</output>
                  </div>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
  );
};
export default BasicSliderClass;