import { Image } from "../../../../AbstractElements";
import { usage } from "../../../../Data/Usage/Usage";

const UserBrowserTableBody = () => {
  return (
    <tbody>
      {usage.map((item) => (
        <tr key={item.id}>
          <td>
            <Image attrImage={{ src: `${item.img}`, alt: "" }} />
          </td>
          <td>{item.browser}</td>
          <td>{item.Daily}</td>
          <td>{item.Weekly}</td>
          <td>{item.Monthly}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserBrowserTableBody;
