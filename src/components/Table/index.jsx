import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {
          "#": "L",
          "User Name": "Louis Hansen",
          Phone: "+12 3456 789",
          Location: "USA",
          Date: "07/08/2016"
        },
        {
          "#": "C",
          "User Name": "Craig Hause",
          Phone: "+89 345 6789",
          Location: "Canada",
          Date: "29/07/2016"
        },
        {
          "#": "E",
          "User Name": "Edward Grimes",
          Phone: "+12 29856 256",
          Location: "Brazil",
          Date: "22/07/2016"
        },
        {
          "#": "B",
          "User Name": "Bret Weaver",
          Phone: "+00 567 890",
          Location: "USA",
          Date: "20/07/2016"
        },
        {
          "#": "M",
          "User Name": "Mark",
          Phone: "+91 123 456",
          Location: "India",
          Date: "07/07/2016"
        }
      ]
    };
  }
  render() {
    let headers = Object.keys(this.state.tableData[0]);
    return (
      <div className="card">
        <label>{this.props.table}</label>
        <table className="table table-hover">
          <thead>
            <tr>
              {headers &&
                headers.map((head, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {head}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((row, ind) => {
              let color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
              return (
                <tr key={ind}>
                  <th
                    scope="row"
                    style={{
                      marginTop: "1rem",
                      height: "35px",
                      width: "35px",
                      background: color,
                      color: "white",
                      display: "block",
                      lineHeight: "8px",
                      textAlign: "center",
                      borderRadius: "50%",
                      fontSize: "16px"
                    }}
                  >
                    <span>{row["#"]}</span>
                  </th>
                  <td>{row["User Name"]}</td>
                  <td>{row["Phone"]}</td>
                  <td>{row["Location"]}</td>
                  <td>{row["Date"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
