import  { useContext } from 'react';
import { Link, MoreHorizontal, Printer, Trash2 } from 'react-feather';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { Href, NoTasksFound, Print } from '../../Constant';
import { H6, P } from '../../AbstractElements';
import TaskContext from '../../Helper/task-app';

const AssignedToMeClass = ({ title }) => {
  const { newTask, RemoveTask } = useContext(TaskContext);

  const deleteTask = (taskId) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        RemoveTask(taskId);
        SweetAlert.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else {
        SweetAlert.fire(
          'Your imaginary file is safe!'
        );
      }
    });
  };

  return (
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 attrH6={{ className: 'mb-0 f-w-600' }} >{title}</H6>
          <a className='f-w-600' href={Href}><Printer className="me-2" />{Print}</a>
        </CardHeader>
        <CardBody className="p-0">
          <div className="taskadd">
            <div className="table-responsive theme-scrollbar">
              <Table>
                <thead></thead>
                <tbody>
                  {newTask && newTask.length ?
                    newTask.map((taskdata, id) =>  (
                        <tr key={id}>
                          <td>
                            <H6 attrH6={{ className: 'task_title_0 f-w-600' }} >{taskdata.title}</H6>
                            <P attrPara={{ className: 'project_name_0' }} >{taskdata.collection}</P>
                          </td>
                          <td>
                            <P attrPara={{ className: 'task_desc_0' }} >{taskdata.desc}</P>
                          </td>
                          <td>
                            <a className="me-2" href={Href}><Link /></a>
                            <a href={Href}><MoreHorizontal /></a>
                          </td>
                          <td><a href={Href} onClick={() => deleteTask(id)}><Trash2 /></a></td>
                        </tr>
                      )
                    )
                    : <tr><td><div className="no-favourite"><span>{NoTasksFound}</span></div></td></tr>
                  }
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
  );
};
export default AssignedToMeClass;