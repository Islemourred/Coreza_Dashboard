import { Card, CardBody, Col, Table } from "reactstrap";
import UserBrowserCardHeader from "./UserBrowserCardHeader";
import UserBrowserTableBody from "./UserBrowserTableBody";
import { Browser, Daily, Monthly, Name, Weekly } from "../../../../Constant";

const UserBrowser = () => {
  return (
    <Col xl="6" lg="6" sm="12">
      <Card className="browser-table">
        <UserBrowserCardHeader />
        <CardBody>
          <div className="table-responsive theme-scrollbar mb-0">
            <Table>
              <thead>
                <tr>
                  <th>{Browser}</th>
                  <th>{Name}</th>
                  <th>{Daily}</th>
                  <th>{Weekly}</th>
                  <th>{Monthly}</th>
                </tr>
              </thead>
              <UserBrowserTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserBrowser;