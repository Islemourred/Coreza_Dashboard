import { Classprefix, ColumnOrdering, GridBehavior, GutterWidth, Maxcontainerwidth, Nestable, Offsets } from "../../../../Constant";

const GridOptionstbody = () => {
  let number = [540, 720, 960, 1140, 1320];
  let Texts = [".col-sm-", ".col-md-", ".col-lg-", ".col-xl-", ".col-xxl-"];
  return (
    <tbody>
      <tr>
        <th className="text-nowrap" scope="row">
          {GridBehavior}
        </th>
        <td>Horizontal at all times</td>
        <td colSpan={5}>Collapsed to start, horizontal above breakpoints</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">{Maxcontainerwidth}</th>
        <td>None (auto)</td>
        {number.map((data, index) => (
          <td className="digits" key={index}>
            {data}px
          </td>
        ))}
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          {Classprefix}
        </th>
        <td>
          <code>.col-</code>
        </td>
        {Texts.map((text, data) => (
          <td key={data}>
            <code>{text}</code>
          </td>
        ))}
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          # of columns
        </th>
        <td colSpan={6}>12</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          {GutterWidth}
        </th>
        <td colSpan={6}>1.5rem (.75rem on left and right side of a column)</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          {Nestable}
        </th>
        <td colSpan={6}>Yes</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          {Offsets}
        </th>
        <td colSpan={6}>Yes</td>
      </tr>
      <tr>
        <th className="text-nowrap" scope="row">
          {ColumnOrdering}
        </th>
        <td colSpan={6}>Yes</td>
      </tr>
    </tbody>
  );
};

export default GridOptionstbody;
