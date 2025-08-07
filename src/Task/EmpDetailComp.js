import React, { Component } from "react";
import myCommanData from "../shared/constant/constantData";

class EmpDetailComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emp: [
        { eid: 101, name: "Akshay", post: "Develporer", salary: 5500000 },
        { eid: 102, name: "Vivek", post: "Develporer", salary: 5500000 },
        { eid: 103, name: "Raja", post: "Develporer", salary: 5500000 },
        { eid: 104, name: "Rahul", post: "Develporer", salary: 5500000 },
        { eid: 105, name: "Rupesh", post: "Develporer", salary: 5500000 },
      ],
      menues: [
        {
          mid: 1,
          name: "Samosa",
          mprice: "20",
          mdescription: "so delicious samosa, try it",
          mimg: myCommanData.samosa,
        },
        {
          mid: 2,
          name: "Dosa",
          mprice: "50",
          mdescription: "so delicious Dosa, try it",
          mimg: myCommanData.dosa,
        },
        {
          mid: 3,
          name: "Jalebi",
          mprice: "40",
          mdescription: "so delicious Jalebi, try it",
          mimg: myCommanData.jalebi,
        },
        {
          mid: 4,
          name: "Poha",
          mprice: "25",
          mdescription: "so delicious Poha, try it",
          mimg: myCommanData.poha,
        },
        {
          mid: 5,
          name: "Vadapav",
          mprice: "20",
          mdescription: "so delicious Vadapav, try it",
          mimg: myCommanData.vadapav,
        },
        {
          mid: 6,
          name: "boy",
          mprice: "20",
          mdescription: "so delicious samosa, try it",
          mimg: myCommanData.flyingboy,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>This is EmpDetailComp</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Emp Id</th>
              <th>Name</th>
              <th>Post</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.emp.map((val, index) => {
              return (
                <tr>
                  <td>{val.eid}</td>
                  <td>{val.name}</td>
                  <td>{val.post}</td>
                  <td>{val.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />

        <div className="row">
          {this.state.menues.map((val, index) => {
            return (
              <div className="col-sm-3">
                <div
                  className="card"
                  style={{ width: "300px", margin: "2px 2px"}}
                >
                  <img src={val.mimg} style={{ width: "300px",height:"150px" }} />
                  <div className="card-body">
                    <h5 class="card-title">{val.name}</h5>
                    <p class="card-text">{val.mdescription}</p>
                    <p class="card-text">Price :{val.mprice}</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere{" "}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="card" style={{ width: "300px", margin: "2px 2px" }}>
          <img src={myCommanData.samosa} style={{ width: "300px" }} />
          <div className="card-body">
            <h5 class="card-title">Samosa</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default EmpDetailComp;
