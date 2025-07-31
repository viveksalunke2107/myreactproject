import React, { Component } from "react";

class ConditionalRenComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasValue: true,
    };
  }

  render() {
    //1. use of if else
    let msg = "";
    // if (!this.state.hasValue) {
    //   // return  <h2>Admin Login successfully</h2>
    //   msg = "Admin Login successfully";
    // } else {
    //   //  return  <h2>User Login successfully</h2>
    //   msg = "User Login successfully";
    // }
     // 2. use of element as variable
    // return <h2>{msg}</h2>

    //3.use of ternary operator 
    // return !this.state.hasValue ? <h2>Admin Login successfully</h2> : <h2>User Login successfully</h2>;

    //4. use of short circuit
    return this.state.hasValue && <h2>Admin Login successfully</h2>
  }
}

export default ConditionalRenComp;
