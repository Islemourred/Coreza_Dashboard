import React, {  useEffect, useState } from "react";
import { CardBody, Form, FormGroup } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";

const Multiples = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`)
      .then((res) => setOptions(res.data));
  }, []);
  return (
      <CardBody>
        <div id="prefetch">
          <Form className="theme-form">
            <FormGroup>
              <Typeahead id="multiple-typeahead" defaultSelected={options.slice(0, 5)} labelKey={"name"} multiple options={options} placeholder="Choose a state..." clearButton/>
            </FormGroup>
          </Form>
        </div>
      </CardBody>
  );
};
export default Multiples;
