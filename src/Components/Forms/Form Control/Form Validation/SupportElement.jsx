import React, { Fragment } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const SupportElement = () => {
    return (
      <Fragment>
        <Form className="was-validated">
          <div className="mb-3">
            <Label className="form-label" for="validationTextarea">Textarea</Label>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
            <div className="invalid-feedback">Please enter a message in the textarea.</div>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <Input className="custom-control-input me-2" id="customControlValidation1" type="checkbox" required />
            <Label className="custom-control-label" htmlFor="customControlValidation1">{'Check this custom checkbox'}</Label>
            <div className="invalid-feedback">{'Example invalid feedback text'}</div>
          </div>
          <div className="custom-control custom-radio">
            <Input className="custom-control-input me-2" id="customControlValidation2" type="radio" name="radio-stacked" required />
            <Label className="custom-control-label" htmlFor="customControlValidation2">{'Toggle this custom radio'}</Label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <Input className="custom-control-input me-2" id="customControlValidation3" type="radio" name="radio-stacked" required />
            <Label className="custom-control-label" htmlFor="customControlValidation3">{'Or toggle this custom radio'}</Label>
            <div className="invalid-feedback">{'More example invalid feedback text'}</div>
          </div>
          <FormGroup>
            <Input type="select" className=" form-select" required>
              <option value="">{'Open this select menu'}</option>
              <option value="1">{'One'}</option>
              <option value="2">{'Two'}</option>
              <option value="3">{'Three'}</option>
            </Input>
            <div className="invalid-feedback">{'Example invalid custom select feedback'}</div>
          </FormGroup>
          <div className="custom-file">
            <Input className="custom-file-input" id="validatedCustomFile" type="file" required />
            <Label className="form-label" htmlFor="validatedCustomFile">{'Choose file...'}</Label>
            <div className="invalid-feedback">{'Example invalid custom file feedback'}</div>
          </div>
        </Form>
      </Fragment>
    );
};
export default SupportElement;