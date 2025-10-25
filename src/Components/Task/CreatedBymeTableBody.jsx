import { Link, MoreHorizontal, Trash2 } from 'react-feather';
import { Href, NoTasksFound } from '../../Constant';
import { H6, P } from '../../AbstractElements';

const CreatedBymeTableBody = ({allTask,deleteTask}) => {
  return (
    <tbody>
      {allTask && allTask.length ? (
        allTask.map((tasklistdata) => (
          <tr key={tasklistdata.id}>
            <td>
              <H6 attrH6={{ className: "task_title_0 f-w-600" }}>
                {tasklistdata.title}
              </H6>
              <P attrPara={{ className: "project_name_0" }}>
                {tasklistdata.collection}
              </P>
            </td>
            <td>
              <P attrPara={{ className: "task_desc_0" }}>{tasklistdata.desc}</P>
            </td>
            <td>
              <a className="me-2" href={Href}>
                <Link />
              </a>
              <a href={Href}>
                <MoreHorizontal />
              </a>
            </td>
            <td>
              <a href={Href} onClick={() => deleteTask(tasklistdata.id)}>
                <Trash2 />
              </a>
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
  );
};

export default CreatedBymeTableBody;
