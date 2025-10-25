import { Btn } from "../../../../AbstractElements";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { ButtonToolbar, Form, FormGroup } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";

const RemoteTypeahead = () => {
  const ref = useRef();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`)
      .then((res) => setOptions(res.data));
  }, []);
  return (
    <Fragment>
      <Form className="theme-form">
        <FormGroup>
          <Typeahead id="public-typeahead" defaultSelected={options.slice(0, 4)} labelKey="name" multiple options={options} placeholder="Choose a state..." ref={ref}/>
          <ButtonToolbar style={{ marginTop: "10px", margin: "4px" }}>
            <Btn attrBtn={{className: "m-2",color: "primary",onClick: () => ref.current.clear(),}}>{"Clear"}</Btn>
            <Btn attrBtn={{className: "m-2",color: "primary",onClick: () => ref.current.focus(),}}>{"Focus"}</Btn>
            <Btn attrBtn={{className: "m-2",color: "primary",onClick: () => {ref.current.focus();setTimeout(() => ref.current.blur(), 1000);},}}>{"Focus, then blur after 1 second"}</Btn>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </Fragment>
  );
};
export default RemoteTypeahead;
