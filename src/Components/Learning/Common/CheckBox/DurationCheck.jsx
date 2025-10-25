import { Input, Label } from 'reactstrap';
import { Duration } from '../../../../Constant';

const DurationCheckBox = () => {
  return (
      <div className="checkbox-animated mt-0">
        <div className="learning-header">
          <span className="f-w-600">{Duration}</span>
        </div>
        <Label className="d-block" htmlFor="chk-ani6">
          <Input className="checkbox_animated" id="chk-ani6" type="checkbox" />
          {'0-50 hours'}
        </Label>
        <Label className="d-block" htmlFor="chk-ani7">
          <Input className="checkbox_animated" id="chk-ani7" type="checkbox" />
          {'50-100 hours'}
        </Label>
        <Label className="d-block" htmlFor="chk-ani8">
          <Input className="checkbox_animated" id="chk-ani8" type="checkbox" />
          {'100+ hours'}
        </Label>
      </div>
  );
};

export default DurationCheckBox;