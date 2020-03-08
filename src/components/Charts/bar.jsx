import React, { Component } from "react";
import * as d3 from "d3";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var dataset = [
      { month: "02/16", statistics: 10000 },
      { month: "03/16", statistics: 20000 },
      { month: "04/16", statistics: 40000 },
      { month: "05/16", statistics: 30000 },
      { month: "06/16", statistics: 30000 }
    ];
    // Notice the change of dataset

    // Calculate Margins and canvas dimensions
    var margin = { top: 20, right: 70, bottom: 20, left: 60 },
      width = 350 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // Notice the change of Scale to Band and how the scale now starts at zero
    var x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1);

    var y = d3.scaleLinear().range([height, 0]);

    var svg = d3
      .select("#chart2")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("background", "#fff")
      .text("a simple tooltip");

    x.domain(
      dataset.map(function(d) {
        return d.month;
      })
    );
    y.domain([
      0,
      d3.max(dataset, function(d) {
        return d.statistics;
      })
    ]);

    // Axes
    svg
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y));
    // Labels
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .attr(
        "transform",
        "translate(" + (margin.left - 108) + "," + height / 2 + ")rotate(-90)"
      );

    svg
      .append("text")
      .style("font-size", "14px")
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        "translate(" + width / 2 + "," + (height - (margin.bottom - 74)) + ")"
      );
    // Adding Bars
    svg
      .selectAll(".bar")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) {
        return x(d.month);
      })
      .attr("width", 10)
      .attr("y", function(d) {
        return y(d.statistics);
      })
      .attr("height", function(d) {
        return height - y(d.statistics);
      })
      .on("mouseover", function(d) {
        tooltip.text(`Statistics: ${d.statistics}-${d.month}`);
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function() {
        return tooltip
          .style("top", d3.event.pageY - 10 + "px")
          .style("left", d3.event.pageX + 10 + "px");
      })
      .on("mouseout", function() {
        return tooltip.style("visibility", "hidden");
      });
  }
  render() {
    return (
      <div className="bar_container">
        <label>Statistics</label>
        <div id="chart2"></div>
      </div>
    );
  }
}

export default Bar;
