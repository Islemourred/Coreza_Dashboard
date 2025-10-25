import { BasicTable, BasicTableSpan } from "../../../../Constant";
import TableContext from "../../../../Helper/Table";
import { Col, Card, Table } from "reactstrap";
import { useContext } from "react";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const BasicTableClass = () => {
  const { data } = useContext(TableContext);

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={BasicTable} span={BasicTableSpan} />
        <div className="table-responsive theme-scrollbar">
          <Table>
            <thead>
              <tr className="border-bottom-primary">
                <th scope="col">{"ID"}</th>
                <th scope="col">{"First Name"}</th>
                <th scope="col">{"Last Name"}</th>
                <th scope="col">{"Username"}</th>
                <th scope="col">{"Designation"}</th>
                <th scope="col">{"Company"}</th>
                <th scope="col">{"Language"}</th>
                <th scope="col">{"Country"}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className={item.trClassName ? item.trClassName : ""}
                >
                  <th scope="row">{item.id}</th>
                  <td>
                    <Image
                      attrImage={{
                        className: "img-30 me-2",
                        src: dynamicImage(item.imgPath),
                        alt: "timelineImg2",
                      }}
                    />{" "}
                    {item.first_name}
                  </td>
                  <td>{item.last_name}</td>
                  <td>{item.user_name}</td>
                  <td>{item.designation}</td>
                  <td>{item.company}</td>
                  <td><span className={`badge badge-light-${item.badgeColor}`}>{item.language}</span></td>
                  <td>{item.country}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default BasicTableClass;
