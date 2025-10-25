import React, { Fragment, useState } from 'react';
import { Label } from 'reactstrap';
import Select from 'react-select';
import { Btn } from '../../../../AbstractElements';
import { options, options2, options3, options4 } from './OptionDatas';

const SelectForm = () => {
  const [enable, setEnable] = useState(false);
  return (
    <Fragment>
      <div className="mb-2">
        <Label className="col-form-label">Default Placeholder</Label>
        <Select
          options={options}
          className="js-example-basic-single col-sm-12"
          isMulti />
      </div>
      <div className="mb-2">
        <Label className="col-form-label">Select2 single select</Label>
        <Select
          options={options2}
          className="js-example-basic-single col-sm-12" />
      </div>
      <div className="mb-2">
        <Label className="col-form-label">Select2 multi select</Label>
        <Select
          options={options}
          className="js-example-basic-single col-sm-12"
          isMulti />
      </div>
      <div className="mb-2">
        <Label className="col-form-label">RTL support</Label>
        <Select
          isRtl={true}
          className="js-example-basic-single"
          isMulti
          options={options}
        />
      </div>
      <div className="mb-2">
        <Label className="col-form-label">Limiting The Number Of Selections</Label>
        <Select
          isMulti
          className="js-example-basic-single"
          options={options}
        />
      </div>
      <div className="mb-2">
        <Label className="col-form-label">Disabled Results</Label>
        <Select
          className="js-example-basic-single"
          options={options3}
        />
      </div>
      <div className="mb-2">
        <Label className="col-form-label">Hiding The Search Box</Label>
        <Select
          className="js-example-basic-single"
          options={options4}
          isMulti
        />
      </div>
      <div className="mt-3">
        <Label className="col-form-label me-2">Enable-Disable</Label>
        <Select
          className="js-example-basic-single"
          isDisabled={enable}
          options={options}
        /><br />
        <Btn attrBtn={{ className: 'js-programmatic-enable me-2', color: 'primary', onClick: () => setEnable(false) }}>Enable</Btn>
        <Btn attrBtn={{ className: 'js-programmatic-disable', color: 'secondary', onClick: () => setEnable(true) }}>Disable</Btn>
      </div>
    </Fragment>
  );
};
export default SelectForm;