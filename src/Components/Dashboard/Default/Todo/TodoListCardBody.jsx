import { CardBody } from "reactstrap";
import { Todolist } from "../../../../Data/DashBord/DefaultList/todolist";
import { Image, P } from "../../../../AbstractElements";

const TodoListCardBody = () => {
  return (
    <CardBody>
      <div className="activity-timeline todo-timeline">
        {Todolist.map((item, i) => (
          <div className="d-flex" key={i}>
            <div className="activity-line"></div>
            <div className={`${item.classname} `}></div>
            <div className="flex-grow-1">
              <P attrPara={{ className: "mt-0 todo-font" }}>
                <span className="font-primary">{item.date} </span>
                {item.day}{item.badgeName}
              </P>
              <div className="d-flex mt-0">
                {item?.img && (
                  <Image
                    attrImage={{
                      className: "img-fluid img-30",
                      src: `${item.img}`,
                      alt: "image",
                    }}
                  />
                )}
                <div className="flex-grow-1">
                  <span className="f-w-600">{item.title} </span>
                  <i className={item.radiocircle}></i>
                  <P attrPara={{ className: "mb-0" }}>{item.para}</P>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardBody>
  );
};

export default TodoListCardBody;