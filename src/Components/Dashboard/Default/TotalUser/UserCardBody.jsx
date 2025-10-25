import { CardBody } from "reactstrap";
import Chart from "react-apexcharts";
import { apexDonutCharts } from "../ChartsData/ApexChart";
import { ArrowUpCircle } from "react-feather";
import DeviceList from "./DeviceList";

const UserCardBody = () => {
  return (
    <CardBody>
      <div className="user-chart">
        <Chart id="user-chart" options={apexDonutCharts.options} series={apexDonutCharts.series} type="donut" height={300}/>
        <div className="icon-donut">
          <ArrowUpCircle />
        </div> 
      </div>
      <DeviceList />
    </CardBody>
  );
};

export default UserCardBody;