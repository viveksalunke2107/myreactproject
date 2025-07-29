import React, { Component } from "react";

class MyStateComp extends Component {
  constructor() {
    super();
    this.state = {
      myName: "Panchashil",
      salary: 40000,
      single: false,
    };
  }
  changeStateData = () => {
    //    window.alert("hi")
    // this.setState({myName:"Panchashil Wankhede",salary:this.state.salary+1000,single:!this.state.single});
    this.setState((prevState) => ({
      myName: "Panchashil Wankhede",
      salary: prevState.salary + 1000,
      single: !prevState.single,
    }));
  };

  render() {
    const {myName,salary,single} = this.state; // destructuring of state
    const {city,pin,country} = this.props; // destrucruting of props
    return (
      <div>
        <h2>This is My State Component</h2>
        {/* <div>Name :<strong>{this.state.myName}</strong></div> */}
        <div>Name :<strong>{myName}</strong></div>
        {/* <div> Salary :<strong>{this.state.salary}</strong></div> */}
        <div> Salary :<strong>{salary}</strong></div>
       {/* <div>
            Single :<strong> {this.state.single ? "yes I Am Single" : " I Am Married"}</strong>
        </div> */}
       <div>
            Single :<strong> {single ? "yes I Am Single" : " I Am Married"}</strong>
        </div>
        <button type="button" onClick={() => this.changeStateData()}>
          Chnage State Data
        </button>{" "}
        <button
          type="button"
          onClick={() =>
            this.setState((prevState) => ({
              myName: "Panchashil Wankhede",
              salary: prevState.salary + 1000,
              single: !prevState.single,
            }))
          }
        >
          Change State Data 2{" "}
        </button>
        <hr />
        {/* <div>City:{this.props.city},</div>
        <div>Pin:{this.props.pin},</div>
        <div>Country:{this.props.country},</div> */}
        <div>City:{city},</div>
        <div>Pin:{pin},</div>
        <div>Country:{country},</div>
      </div>
    );
  }
}

export default MyStateComp;
