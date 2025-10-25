import { Input, Label } from 'reactstrap';
import { Accounting, Categories, Design, Development, Management } from '../../../../Constant';

const CatCheckBox = () => {
  return (
      <div className="checkbox-animated">
        <div className="learning-header">
          <span className="f-w-600">{Categories}</span>
        </div>
        <Label className="d-block" htmlFor="chk-ani">
          <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
          {Accounting}
        </Label>
        <Label className="d-block" htmlFor="chk-ani0">
          <Input className="checkbox_animated" id="chk-ani0" type="checkbox" />
          {Design}
        </Label>
        <Label className="d-block" htmlFor="chk-ani1">
          <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />
          {Development}
        </Label>
        <Label className="d-block" htmlFor="chk-ani2">
          <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />
          {Management}
        </Label>
      </div>
  );
};

export default CatCheckBox;