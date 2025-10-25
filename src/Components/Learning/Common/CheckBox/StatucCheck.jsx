import { Input, Label } from 'reactstrap';
import { Completed, Progress, Registration, Status } from '../../../../Constant';

const StatusCheck = () => {
  return (
      <div className="checkbox-animated mt-0">
        <div className="learning-header">
          <span className="f-w-600">{Status}</span>
        </div>
        <Label className="d-block" htmlFor="chk-ani3">
          <Input className="checkbox_animated" id="chk-ani3" type="checkbox" />
          {Registration}
        </Label>
        <Label className="d-block" htmlFor="chk-ani4">
          <Input className="checkbox_animated" id="chk-ani4" type="checkbox" />
          {Progress}
        </Label>
        <Label className="d-block" htmlFor="chk-ani5">
          <Input className="checkbox_animated" id="chk-ani5" type="checkbox" />
          {Completed}
        </Label>
      </div>
  );
};
export default StatusCheck;