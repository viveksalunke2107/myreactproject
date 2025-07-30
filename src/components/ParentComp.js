import React, { Component } from "react";
import ChildComp from "./ChildComp";
import MyPureComponent from "./MyPureComponent";
import MyMemoComp from "./MyMemoComp";

class ParentComp extends Component {
  constructor() {
    super();

    this.state = {
      empName: "Akshay",
      empSal: 55000,
      empAge: 20,
    };
  }

  changestate = () => {
    this.setState({
      empName: "Akshya R. Kanade",
      empSal: this.state.empSal + 10000,
      empAge: this.state.empAge + 1,
    });
  };
  render() {
    const {empName,empSal,empAge} = this.state;
    console.log("this is parent component");
    return (
      <>
        <h2>This is parent components</h2>
        <div>Name:{empName}</div>
        <div>Salary:{empSal}</div>
        <div>Age:{empAge}</div>
        <button type="button" onClick={()=>this.changestate()} className="btn btn-primary">chnage state Data</button>
        <hr/>

        <ChildComp name={empName} sal={empSal} age={empAge} changeData={this.changestate}></ChildComp>
        <hr/>
        <MyPureComponent name={empName}/>
        <hr/>
        <MyMemoComp name={empName} />
      </>
    );
  }
}

export default ParentComp;
