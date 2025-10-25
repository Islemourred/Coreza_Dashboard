import { ButtonGroup } from "reactstrap";
import { Btn } from "../../../AbstractElements";

const ButtonGroup2 = ({sizeLg}) => {
  let datas = [
    { iconClass: "fa-bold", color: "primary" },
    { iconClass: "fa-italic", color: "secondary" },
    { iconClass: "fa-file-image-o", color: "success" },
    { iconClass: "fa-paperclip", color: "info" },
  ];

  return (
    <div className="m-b-30">
      <ButtonGroup>
        {datas.map((data, index) => (
          <Btn key={index} attrBtn={{ color: data.color, size:sizeLg ?"lg":"" }}>
            <i className={`fa ${data.iconClass} `}></i>
          </Btn>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroup2;
