import { employ } from "../../../../Data/Employe/Employ";
import { H5, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const EmployeeStatusCardTableBody = () => {
  return (
    <tbody>
      {employ.map((item, id) => (
        <tr key={id}>
          <td>
            <div className="d-flex">
              <Image attrImage={{ src: dynamicImage(`user/${item.img}`), alt: "Image"}}/>
              <div className="flex-grow-1">
                <H5>{item.name} <span className="text-muted">{item.online}</span></H5>
              </div>
            </div>
          </td>
          <td>{item.designation}</td>
          <td>
            <div className="progress-showcase">
              <div className="progress" style={{ height: "8px" }}>
                <div className={`progress-bar bg-${item.color}`} role="progressbar" style={{ width: `${item.width}` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </td>
          <td>{item.year}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default EmployeeStatusCardTableBody;