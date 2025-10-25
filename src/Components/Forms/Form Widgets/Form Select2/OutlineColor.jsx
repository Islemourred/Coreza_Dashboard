import React, { Fragment } from 'react';
import { Input, Label } from 'reactstrap';

const OutlineColor = () => {
    return (
      <Fragment>
        <div className="mb-2">
          <Label className="col-form-label">Primary Select</Label>
          <Input className="form-control form-control-primary btn-square form-select" name="select" type="select">
            <option value="opt1">Select One Value Only</option>
            <option value="opt2">Type 2</option>
            <option value="opt3">Type 3</option>
            <option value="opt4">Type 4</option>
            <option value="opt5">Type 5</option>
            <option value="opt6">Type 6</option>
            <option value="opt7">Type 7</option>
            <option value="opt8">Type 8</option>
          </Input>
        </div>
        <div className="mb-2">
          <Label className="col-form-label">Secondary Select</Label>
          <Input className="form-control form-control-secondary btn-square form-select" name="select" type="select">
            <option value="opt1">Select One Value Only</option>
            <option value="opt2">Type 2</option>
            <option value="opt3">Type 3</option>
            <option value="opt4">Type 4</option>
            <option value="opt5">Type 5</option>
            <option value="opt6">Type 6</option>
            <option value="opt7">Type 7</option>
            <option value="opt8">Type 8</option>
          </Input>
        </div>
        <div className="mb-2">
          <Label className="col-form-label">Success Select</Label>
          <Input className="form-control form-control-success btn-square form-select" name="select" type="select">
            <option value="opt1">Select One Value Only</option>
            <option value="opt2">Type 2</option>
            <option value="opt3">Type 3</option>
            <option value="opt4">Type 4</option>
            <option value="opt5">Type 5</option>
            <option value="opt6">Type 6</option>
            <option value="opt7">Type 7</option>
            <option value="opt8">Type 8</option>
          </Input>
        </div>
        <div className="mb-2">
          <Label className="col-form-label">Info Select</Label>
          <Input className="form-control form-control-info btn-square form-select" name="select" type="select">
            <option value="opt1">Select One Value Only</option>
            <option value="opt2">Type 2</option>
            <option value="opt3">Type 3</option>
            <option value="opt4">Type 4</option>
            <option value="opt5">Type 5</option>
            <option value="opt6">Type 6</option>
            <option value="opt7">Type 7</option>
            <option value="opt8">Type 8</option>
          </Input>
        </div>
        <div className="mb-2">
          <Label className="col-form-label">Warning Select</Label>
          <Input className="form-control form-control-warning btn-square form-select" name="select" type="select">
            <option value="opt1">Select One Value Only</option>
            <option value="opt2">Type 2</option>
            <option value="opt3">Type 3</option>
            <option value="opt4">Type 4</option>
            <option value="opt5">Type 5</option>
            <option value="opt6">Type 6</option>
            <option value="opt7">Type 7</option>
            <option value="opt8">Type 8</option>
          </Input>
        </div>
        <div className="mb-2">
          <Label className="col-form-label">Danger Select</Label>
          <Input className="form-control form-control-danger btn-square form-select" name="select" type="select">
            <option value="opt1">Select One Value Only</option>
            <option value="opt2">Type 2</option>
            <option value="opt3">Type 3</option>
            <option value="opt4">Type 4</option>
            <option value="opt5">Type 5</option>
            <option value="opt6">Type 6</option>
            <option value="opt7">Type 7</option>
            <option value="opt8">Type 8</option>
          </Input>
        </div>
        <div>
          <Label className="col-form-label">Inverse Select</Label>
          <Input className="form-control form-control-inverse btn-square form-select" name="select" type="select">
            <option value="opt1">Select One Value Only</option>
            <option value="opt2">Type 2</option>
            <option value="opt3">Type 3</option>
            <option value="opt4">Type 4</option>
            <option value="opt5">Type 5</option>
            <option value="opt6">Type 6</option>
            <option value="opt7">Type 7</option>
            <option value="opt8">Type 8</option>
          </Input>
        </div>
      </Fragment>
    );
};
export default OutlineColor;