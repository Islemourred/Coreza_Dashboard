import { Btn } from '../../../../AbstractElements';
import { LeftAddon, RightAddon, JointAddon, LeftRightAddon, SolidStyle, SquareStyle, RaiseStyle, Submit, Cancel } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupText } from 'reactstrap';

const BacicGroup = () => {
  return (
    <Fragment>
      <Form>
        <FormGroup className=" m-form__group">
          <Label>{LeftAddon}</Label>
          <InputGroup>
            <InputGroupText>{'@'}</InputGroupText>
            <Input className="form-control" type="text" placeholder="Email" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>{RightAddon}</Label>
          <InputGroup>
            <Input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" />
            <InputGroupText>{'@example.com'}</InputGroupText>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>{JointAddon}</Label>
          <InputGroup>
            <InputGroupText>{'$'}</InputGroupText>
            <InputGroupText>{'0.00'}</InputGroupText>
            <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-0">
          <Label>{LeftRightAddon}</Label>
          <InputGroup className="mb-3">
            <InputGroupText>{'$'}</InputGroupText>
            <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
            <InputGroupText>{'.00'}</InputGroupText>
          </InputGroup>
        </FormGroup>
        <FormGroup className="input-group-solid">
          <Label>{SolidStyle}</Label>
          <InputGroup>
            <InputGroupText>{'@'}</InputGroupText>
            <Input className="form-control" type="text" placeholder="Email" />
          </InputGroup>
        </FormGroup>
        <FormGroup className="input-group-square">
          <Label>{SquareStyle}</Label>
          <InputGroup>
            <InputGroupText>{'+'}</InputGroupText>
            <Input className="form-control" type="text" placeholder="Email" />
          </InputGroup>
        </FormGroup>
        <FormGroup className="input-group-square">
          <Label>{RaiseStyle}</Label>
          <InputGroup className="input-group-air">
            <InputGroupText>{'#'}</InputGroupText>
            <Input className="form-control" type="text" placeholder="Email" />
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-0">
          <Label>{LeftRightAddon}</Label>
          <InputGroup className="pill-input-group">
            <InputGroupText>{'$'}</InputGroupText>
            <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
            <InputGroupText>{'.00'}</InputGroupText>
          </InputGroup>
        </FormGroup><br />
        <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'me-2' }}>{Submit}</Btn>
        <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Cancel}</Btn>
      </Form>
    </Fragment>
  );
};
export default BacicGroup;