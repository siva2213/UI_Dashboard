import React, { Component } from "react";
import "./dashboard.css";

class Metrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metricsData: [
        {
          label: "STATISTICS",
          value: 34578,
          lastUpdate: "30.4k",
          highLowArrow: {
            value: "arrow_upward",
            color: "green"
          },
          metricIcon: "show_chart"
        },
        {
          label: "USER TODAY",
          value: 895,
          lastUpdate: 1250,
          highLowArrow: {
            value: "arrow_downward",
            color: "red"
          },
          metricIcon: "perm_identity"
        },
        {
          label: "USER THIS MONTH",
          value: 52410,
          lastUpdate: "40.33k",
          highLowArrow: {
            value: "arrow_upward",
            color: "green"
          },
          metricIcon: "layers"
        },
        {
          label: "REQUEST PER MINUTE",
          value: 652,
          lastUpdate: 956,
          highLowArrow: {
            value: "arrow_downward",
            color: "red"
          },
          metricIcon: "av_timer"
        },
        {
          label: "TOTAL USERS",
          value: 3245,
          lastUpdate: "20k",
          highLowArrow: {
            value: "arrow_downward",
            color: "red"
          },
          metricIcon: "person_pin"
        },
        {
          label: "NEW DOWNTIMES",
          value: 78541,
          lastUpdate: "32k",
          highLowArrow: {
            value: "arrow_upward",
            color: "green"
          },
          metricIcon: "vertical_align_bottom"
        }
      ]
    };
  }
  render() {
    return (
      <div className="metric_container">
        {this.state.metricsData &&
          this.state.metricsData.length &&
          this.state.metricsData.map((metricData, ind) => {
            return (
              <div key={ind} className="metric_item card">
                <div className="metric_description">
                  <div className="metric_content_label">{metricData.label}</div>
                  <div className="metric_content_value">
                    {metricData.value}{" "}
                    <i
                      className="material-icons"
                      style={{ color: metricData.highLowArrow.color }}
                    >
                      {metricData.highLowArrow.value}
                    </i>
                  </div>
                  <div className="metric_content_lastUpdate">
                    Last: {metricData.lastUpdate}
                  </div>
                </div>
                <div className="metric_icon">
                  <i
                    className="material-icons"
                    style={{ fontSize: "42px", color: "#DEE2E6" }}
                  >
                    {metricData.metricIcon}
                  </i>
                </div>
              </div>
            );
          })}

        {/* <div className="metric_item">USER TODAY</div>
        <div className="metric_item">USER THIS MONTH</div>
        <div className="metric_item">REQUEST PER MINUTE</div>
        <div className="metric_item">TOTAL USERS</div>
        <div className="metric_item">NEW DOWNTIMES</div> */}
      </div>
    );
  }
}

export default Metrics;
