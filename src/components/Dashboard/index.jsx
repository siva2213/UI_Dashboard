import React, { Component } from "react";
import Metrics from "./metrics";
import RecentUser from "../Table/index";
import DonutChart from "../Charts/donut";
import LineChart from "../Charts/line";
import BarChart from "../Charts/bar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="dashboard_container">
        <div className="metrics">
          <Metrics />
        </div>
        <div className="charts_container">
          <div className="card chartsD3 ">
            <DonutChart />
          </div>
          <div className="card chartsD3 ">
            <LineChart />
          </div>
          <div className="card chartsD3 ">
            <BarChart />
          </div>
        </div>
        <div className="table_container">
          <RecentUser table="Recent User" />
          <RecentUser table="Recent User" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
