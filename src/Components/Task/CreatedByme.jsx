import { forwardRef, useContext } from "react";
import { Link, MoreHorizontal, Trash2 } from "react-feather";
import { CardBody, Table } from "reactstrap";
import SweetAlert from "sweetalert2";
import { H6, P } from "../../AbstractElements";
import { Href, NoTasksFound } from "../../Constant";
import TaskContext from "../../Helper/task-app";

const CreatedByme = forwardRef((props, ref) => {
  const { allTask, RemoveTask } = useContext(TaskContext);

  const deleteTask = (userId) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        RemoveTask(userId);
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div ref={ref}>
      <CardBody className="p-0">
        <div className="taskadd">
          <div className="table-responsive theme-scrollbar">
            <Table>
              <tbody>
                {allTask && allTask.length ? (
                  allTask.map((tasklist, index) => (
                    <tr key={index}>
                      <td>
                        <H6 attrH6={{ className: "task_title_0 f-w-600" }}>{tasklist.title}</H6>
                        <P attrPara={{ className: "project_name_0" }}>{tasklist.collection}</P>
                      </td>
                      <td>
                        <P attrPara={{ className: "task_desc_0" }}>{tasklist.desc}</P>
                      </td>
                      <td>
                        <a className="me-2" href={Href}><Link /></a>
                        <a href={Href}><MoreHorizontal /></a>
                      </td>
                      <td>
                        <a href={Href} onClick={() => deleteTask(tasklist.id)}><Trash2 /></a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>
                      <div className="no-favourite">
                        <span>{NoTasksFound}</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </CardBody>
    </div>
  );
});

export default CreatedByme;