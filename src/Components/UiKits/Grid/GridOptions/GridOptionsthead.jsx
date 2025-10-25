const GridOptionsthead = () => {
  let datas = [
    { text: "≥576px", size: "small" },
    { text: "≥768px", size: "Medium" },
    { text: "≥992px", size: "Large" },
    { text: "≥1200px", size: "Extra large" },
    { text: "≥1400px", size: "Extra extra large" },
  ];
  return (
      <thead>
        <tr>
          <th></th>
          <th className="text-center">
            Extra small
            <br />
            <small className="digits">&lt;576px</small>
          </th>
          {datas.map((data, index) => (
            <th key={index} className="text-center">
              {data.size}
              <br />
              <small className="digits">{data.text}</small>
            </th>
          ))}
        </tr>
      </thead>
  );
};

export default GridOptionsthead;
